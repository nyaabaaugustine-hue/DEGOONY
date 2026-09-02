"use client";

import { useEffect, useMemo, useState } from "react";

interface Product {
  name: string;
  price: number;
  cat: string;
  img: string;
  fit: string;
}

const PRODUCTS: Product[] = [
  { name: "NGK Spark Plug", price: 45, cat: "engine", img: "/assets/NGK Spark Plug.jpeg", fit: "Fits Bajaj RE & TVS King" },
  { name: "20W-40 Engine Oil (1L)", price: 75, cat: "engine", img: "/assets/20W-40 Engine Oil (1L).jpeg", fit: "Genuine Bajaj & TVS grade" },
  { name: "Air Filter Assembly", price: 90, cat: "engine", img: "/assets/Air Filter Assembly.jpeg", fit: "Dust-sealed for Ghanaian roads" },
  { name: "Front Brake Pads (Set)", price: 120, cat: "brakes", img: "/assets/Front Brake Pads (Set).jpeg", fit: "OEM friction compound" },
  { name: "Clutch Cable", price: 75, cat: "transmission", img: "/assets/Clutch Cable.jpeg", fit: "Braided steel, factory length" },
  { name: "Chain & Sprocket Kit", price: 450, cat: "transmission", img: "/assets/chain-sprocket-kit.jpg", fit: "Complete drive kit, heavy duty" },
  { name: "Headlight Assembly", price: 220, cat: "electrical", img: "/assets/Headlight Assembly.jpeg", fit: "Lens, housing & bulb included" },
  { name: "Side Mirror Pair", price: 95, cat: "body", img: "/assets/Side Mirror Pair.jpeg", fit: "Vibration-resistant mount" },
];

const CATS = [
  { key: "all", label: "All Parts" },
  { key: "engine", label: "Engine" },
  { key: "brakes", label: "Brakes" },
  { key: "electrical", label: "Electrical" },
  { key: "transmission", label: "Transmission" },
  { key: "body", label: "Body" },
];

const WA_BASE = "https://wa.me/233550593182?text=";

function track(eventName: string, params: Record<string, unknown>) {
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (!w.dataLayer) w.dataLayer = [];
  w.dataLayer.push(Object.assign({ event: eventName }, params));
}

export default function SparePartsShop() {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.map((p) => {
      const matchCat = activeCat === "all" || p.cat === activeCat;
      const matchQ = !q || `${p.name} ${p.fit}`.toLowerCase().includes(q);
      return { product: p, show: matchCat && matchQ };
    });
  }, [activeCat, query]);

  const visibleCount = visible.filter((v) => v.show).length;
  const checked = visible.filter((v) => v.show && selected[v.product.name]).map((v) => v.product);
  const total = checked.reduce((s, p) => s + p.price, 0);

  const toggle = (name: string) =>
    setSelected((prev) => ({ ...prev, [name]: !prev[name] }));

  const orderSingle = (p: Product) => {
    track("order_whatsapp", { item: p.name, value: p.price, currency: "GHS" });
    window.open(
      WA_BASE +
        encodeURIComponent(
          `Hello Evergreen, I want to order: ${p.name} (GHS ${p.price}). Is it in stock?`
        ),
      "_blank"
    );
  };

  const sendOrder = () => {
    if (!checked.length) return;
    track("order_whatsapp", { item: "multi_item_order", value: total, currency: "GHS" });
    const lines = checked.map((p, i) => `${i + 1}. ${p.name} - GHS ${p.price}`);
    const msg = `Hello Evergreen, I want to order:\n${lines.join(
      "\n"
    )}\nTotal: GHS ${total}\nPlease confirm availability.`;
    window.open(WA_BASE + encodeURIComponent(msg), "_blank");
  };

  return (
    <div id="parts-shop">
      <div className="shop-filter text-center" role="group" aria-label="Filter parts by category">
        {CATS.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`filter-chip${activeCat === c.key ? " active" : ""}`}
            data-cat={c.key}
            onClick={() => setActiveCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="parts-search">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          type="search"
          id="partsSearch"
          placeholder="Search parts &mdash; e.g. plug, oil, mirror&hellip;"
          aria-label="Search spare parts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="shop-grid reveal-stagger">
        {visible.map(({ product: p, show }) => (
          <article
            key={p.name}
            className={`product-card${show ? "" : " is-hidden"}`}
            data-cat={p.cat}
          >
            <label className="product-check">
              <input
                type="checkbox"
                data-name={p.name}
                data-price={p.price}
                checked={!!selected[p.name]}
                onChange={() => toggle(p.name)}
              />
              <span aria-hidden="true"></span>
            </label>
            <div className="product-media product-media-img">
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>
            <span className="product-cat">{p.cat}</span>
            <h3 className="product-name">{p.name}</h3>
            <p className="product-fit">{p.fit}</p>
            <div className="product-foot">
              <span className="price-tag">GHS {p.price}</span>
              <button
                type="button"
                className="btn-order"
                data-name={p.name}
                data-price={p.price}
                onClick={() => orderSingle(p)}
              >
                <i className="fab fa-whatsapp"></i> Order
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className={`shop-empty${visibleCount > 0 ? " is-hidden" : ""}`}>
        <i className="fas fa-box-open" aria-hidden="true"></i>
        <p>
          No parts match your search. Try a different term or category &mdash; or
          send us a special order.
        </p>
      </div>

      <div className={`order-bar${checked.length ? "" : " is-hidden"}`} id="orderBar" hidden={!checked.length}>
        <span className="order-bar-summary" id="orderBarSummary">
          {checked.length} item{checked.length > 1 ? "s" : ""} &middot; GHS {total}
        </span>
        <button type="button" className="btn primary small" id="sendOrderBtn" onClick={sendOrder}>
          <span>
            <i className="fab fa-whatsapp"></i> Send order on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}