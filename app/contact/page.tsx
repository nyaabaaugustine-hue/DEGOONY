import ContactForm from "@/components/ContactForm";
import Script from "next/script";

const FORMSPREE = "https://formspree.io/f/meajwbky";

export const metadata = {
  title: "Contact",
  description:
    "Contact DEGOONY EVERGREEN LOGISTICS GHANA LTD â€” get a quote on Bajaj & TVS Pragia tricycles, spare parts, Evergreen fleet leasing, or apply to the Evergreen Academy. Kumasi showroom: Suameâ€“Makro.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Get a quote, enquire about tricycles & parts, or apply to the Evergreen Academy.",
    images: ["/assets/contact-hero-opt.webp"],
    url: "https://www.evergreenlogistics.com.gh/contact",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="contact-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How fast will I get a quote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We respond to every enquiry within one business day. For urgent pricing, call or WhatsApp +233 550 593 182 directly.",
                },
              },
              {
                "@type": "Question",
                name: "Can I test ride a tricycle before buying?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Visit our Suame-Makro showroom and our team will arrange a test ride and walk you through every Bajaj and TVS Pragia model.",
                },
              },
              {
                "@type": "Question",
                name: "Do you deliver outside Kumasi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We deliver tricycles and fleet vehicles across Ghana. Delivery costs depend on your region â€” tell us your location in the enquiry form for an exact figure.",
                },
              },
              {
                "@type": "Question",
                name: "How do I order spare parts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Browse the Spare Parts Shop and send your list to our team on WhatsApp, or visit the showroom. We stock genuine Bajaj and TVS parts.",
                },
              },
              {
                "@type": "Question",
                name: "How do I apply to the Evergreen Academy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Select Evergreen Academy Training in the enquiry form, or apply through the Academy page. Certification runs from Orientation through Executive Development.",
                },
              },
              {
                "@type": "Question",
                name: "Is fleet leasing available for businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes â€” operators can lease Evergreen electric tricycles with GPS tracking, geofencing, and battery-swap management included. Ask for the leasing terms in your message.",
                },
              },
            ],
          }),
        }}
      />

      <div className="page-hero section">
        <div className="hero-slide active">
          <div className="ad-image">
            <img src="/assets/contact-hero-opt.webp" alt="Visit the DEGOONY EVERGREEN LOGISTICS GHANA LTD showroom" fetchPriority="high" decoding="async" />
          </div>
          <div className="item-shade"></div>
          <div className="container item-container">
            <div className="hero-copy col-xs-12 col-md-8">
              <span className="hero-eyebrow kicker">
                <i className="fas fa-envelope"></i> Contact
              </span>
              <h1 className="hero-title">Get a quote or apply to the Academy</h1>
              <p className="hero-body">
                Tell us what you need â€” a tricycle, spare parts, an Evergreen
                fleet lease, or an Academy application â€” and our Kumasi team
                will get back to you within one business day.
              </p>
              <div className="hero-actions">
                <a href="tel:+233550593182" className="btn primary">
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Contact</li>
          </ol>
        </div>
      </div>

      <div className="section" id="contact">
        <section className="component contact-section-bg">
          <div className="container-fluid">
            <div className="contact-split reveal">
              <div className="form-container efleets-form-container reveal-scale">
                <ContactForm formAction={FORMSPREE} />
              </div>
              <aside className="contact-visual">
                <img
                  src="/assets/contact-visual.webp"
                  alt="Young woman in the city â€” the everyday riders DEGOONY EVERGREEN LOGISTICS GHANA LTD serves"
                  loading="lazy"
                  decoding="async"
                />
                <div className="contact-visual-caption">
                  <span className="kicker">Our Promise</span>
                  <h3>Every Ride Creates Opportunity.</h3>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      <div className="section" id="location">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Visit Us</span>
              <h2 className="dark-green">Our Kumasi Showroom</h2>
              <p className="section-intro">
                Walk in, call, or send us a message â€” we are ready to help.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-4">
                <div className="location-card">
                  <span className="location-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <h3>Address</h3>
                  <address>
                    Near MTN Office, Suameâ€“Makro
                    <br />
                    Ashanti, Kumasi, Ghana
                  </address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="location-card">
                  <span className="location-icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <h3>Phone</h3>
                  <ul className="contact-list">
                    <li>
                      <a href="tel:+233550593182">+233 550 593 182</a>
                    </li>
                    <li>
                      <a href="tel:+233558444062">+233 558 444 062</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="location-card">
                  <span className="location-icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <h3>Email</h3>
                  <ul className="contact-list">
                    <li>
                      <a href="mailto:stowjenfa@gmail.com">stowjenfa@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-6">
                <div className="location-card">
                  <span className="location-icon">
                    <i className="fas fa-city"></i>
                  </span>
                  <h3>Accra HQ â€” DEGOONY EVERGREEN LOGISTICS GHANA LTD</h3>
                  <address>
                    45 Independence Ave, Accra
                    <br />
                    Ghana
                  </address>
                  <ul className="contact-list">
                    <li>
                      <a href="tel:+233243901731">
                        <i className="fas fa-phone-alt"></i> +233 24 390 1731
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@evergreenlogistics.com">
                        <i className="fas fa-envelope"></i> info@evergreenlogistics.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="location-card">
                  <span className="location-icon">
                    <i className="fas fa-globe-americas"></i>
                  </span>
                  <h3>US Office</h3>
                  <address>
                    123 Innovation Drive, Richmond, VA
                    <br />
                    USA
                  </address>
                  <ul className="contact-list">
                    <li>
                      <a href="tel:+18045643466">
                        <i className="fas fa-phone-alt"></i> +1 (804) 564-3466
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="map-shell reveal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.2922897304406!2d-1.6325942205559236!3d6.728512097056034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb972e339097c3%3A0xd162a48bd7c0451c!2sMTN%20Suame!5e0!3m2!1sen!2sgh!4v1787555612157!5m2!1sen!2sgh"
                title="DEGOONY EVERGREEN LOGISTICS GHANA LTD showroom location â€” near MTN Suame, Kumasi"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <p className="map-actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=6.728512,-1.632594"
                target="_blank"
                rel="noopener"
                className="btn primary"
              >
                <span>
                  <i className="fas fa-directions"></i> Get Directions
                </span>
              </a>
            </p>
          </div>
        </section>
      </div>

      <div className="section" id="faq">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Quick Answers</span>
              <h2 className="dark-green">Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>How fast will I get a quote?</summary>
                <p>
                  We respond to every enquiry within one business day â€” usually
                  much faster. For urgent pricing, call or WhatsApp +233 550 593
                  182 directly.
                </p>
              </details>
              <details className="faq-item">
                <summary>Can I test ride a tricycle before buying?</summary>
                <p>
                  Yes. Visit our Suameâ€“Makro showroom and our team will arrange a
                  test ride and walk you through every Bajaj and TVS Pragia model.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do you deliver outside Kumasi?</summary>
                <p>
                  We deliver tricycles and fleet vehicles across Ghana. Delivery
                  costs depend on your region â€” tell us your location in the
                  enquiry form for an exact figure.
                </p>
              </details>
              <details className="faq-item">
                <summary>How do I order spare parts?</summary>
                <p>
                  Browse the Spare Parts Shop and send your list straight to our
                  team on WhatsApp, or visit the showroom. We stock genuine Bajaj
                  and TVS parts.
                </p>
              </details>
              <details className="faq-item">
                <summary>How do I apply to the Evergreen Academy?</summary>
                <p>
                  Select &ldquo;Evergreen Academy Training&rdquo; in the enquiry
                  form above, or apply through the Academy page. Certification
                  runs from Orientation through Executive Development.
                </p>
              </details>
              <details className="faq-item">
                <summary>Is fleet leasing available for businesses?</summary>
                <p>
                  Yes â€” operators can lease Evergreen electric tricycles with GPS
                  tracking, geofencing, and battery-swap management included. Ask
                  for the leasing terms in your message.
                </p>
              </details>
              <details className="faq-item">
                <summary>How does pricing work?</summary>
                <p>
                  Tricycles, motorbikes, and parts carry clear upfront prices â€”
                  ask for today&rsquo;s list. Fleet leasing and Academy training
                  are quoted individually to match your scale.
                </p>
              </details>
              <details className="faq-item">
                <summary>How long does delivery take?</summary>
                <p>
                  Showroom pickups in Suameâ€“Makro are same-day. Regional
                  deliveries across Ghana typically arrive within 2â€“5 business
                  days, confirmed with your quote.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do vehicles come with a warranty?</summary>
                <p>
                  New tricycles include a manufacturer-backed warranty, and every
                  genuine part we sell carries its own cover. Full terms are
                  shared with your purchase documents.
                </p>
              </details>
              <details className="faq-item">
                <summary>How long do Evergreen batteries last?</summary>
                <p>
                  Our lithium packs live at managed swap stations â€” charged under
                  logged standards and inspected daily. Any pack showing abnormal
                  readings is pulled from service immediately, so you always swap
                  into a healthy battery.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
