"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Profile = {
  name: string;
  title: string;
  org: string;
  photo: string;
  bio: string[];
  facts: string[];
  photoAlt: string;
};

const PROFILES: Record<string, Profile> = {
  jefflean: {
    name: "Jefflean K. Ntow",
    title: "Co-Founder & Chief Executive Officer",
    org: "Evergreen Logistics LLC",
    photo: "/assets/JEFFLEAN.webp",
    photoAlt: "Jefflean K. Ntow, Chief Executive Officer",
    bio: [
      "Jefflean co-founded Evergreen to prove that disciplined fleet operations and genuine care for people can move an entire economy forward. As Chief Executive Officer he leads financial strategy across the group — from the Ghana operating companies to the US parent.",
      "He champions the Evergreen Academy model: drivers who are certified, salaried, and supported — never burdened by debt.",
    ],
    facts: [
      "Financial strategy",
      "Group leadership",
      "Academy vision",
      "US–Ghana operations",
    ],
  },
  nadia: {
    name: "Nadia Ahmed",
    title: "Co-Founder · Operations & Expansion Lead",
    org: "Evergreen Logistics LLC",
    photo: "/assets/NADIA.webp",
    photoAlt: "Nadia Ahmed, Co-Founder and Operations and Expansion Lead",
    bio: [
      "Nadia runs the operational engine of Evergreen — logistics, day-to-day Ghana operations, and the company's cybersecurity posture.",
      "She leads expansion planning for new routes, zones, and the battery-swap network that keeps the electric fleet moving.",
    ],
    facts: ["Logistics", "Ghana operations", "Cybersecurity", "Expansion planning"],
  },
  donna: {
    name: "Donna Hall",
    title: "Legal & Compliance / Procurement",
    org: "Evergreen Logistics LLC",
    photo: "/assets/DONNA.webp",
    photoAlt: "Donna Hall, Legal and Compliance / Procurement",
    bio: [
      "Donna safeguards the legal and compliance backbone of Evergreen — contracts, regulatory alignment across Ghana and the US, and governance.",
      "She also directs procurement, making sure every vehicle, battery, and spare part enters the fleet through transparent, auditable channels.",
    ],
    facts: ["Contracts", "Regulatory compliance", "Procurement", "Governance"],
  },
  felix: {
    name: "Felix Gymah",
    title: "Quality Control Expert & Vendor Liaison",
    org: "Degoony Evergreen Logistics & Transport GH LTD",
    photo: "/assets/FELIX.webp",
    photoAlt: "Felix Gymah, Quality Control Expert and Vendor Liaison",
    bio: [
      "Felix owns quality across the fleet — inspection standards for every tricycle, motorbike, and battery before it touches the road.",
      "As vendor liaison he manages supplier relationships and holds partners to the same measurable standards our drivers are certified against.",
    ],
    facts: ["Vehicle QC", "Battery standards", "Vendor management", "Inspections"],
  },
  augustine: {
    name: "Augustine A. Nyaaba",
    title:
      "Full-Stack Engineer | AI & Blockchain Systems | Scalable Web Infrastructure & Automation | Founder",
    org: "Evergreen Logistics LLC",
    photo: "/assets/CYBER.webp",
    photoAlt: "Augustine A. Nyaaba, Full-Stack Engineer",
    bio: [
      "Augustine is a full-stack engineer building across AI and blockchain systems — architecting scalable web infrastructure and automation that keep Evergreen's operations running smoothly across Ghana and the US.",
      "As a founder, he champions technology reliability and innovation across the group, ensuring drivers, teams, and partners stay connected, protected, and productive.",
    ],
    facts: [
      "Full-stack engineering",
      "AI & blockchain systems",
      "Scalable web infrastructure",
      "Automation",
    ],
  },
};

type LeaderContextValue = {
  open: (key: string) => void;
  close: () => void;
};

const LeaderContext = createContext<LeaderContextValue | null>(null);

function useLeader() {
  const ctx = useContext(LeaderContext);
  if (!ctx) {
    throw new Error("useLeader must be used within <LeaderModalProvider>");
  }
  return ctx;
}

export function LeaderModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const profile = activeKey ? PROFILES[activeKey] : null;

  const close = useCallback(() => {
    setActiveKey(null);
    document.body.style.overflow = "";
    if (lastFocusedRef.current && lastFocusedRef.current.focus) {
      lastFocusedRef.current.focus();
    }
    lastFocusedRef.current = null;
  }, []);

  const open = useCallback((key: string) => {
    if (!PROFILES[key]) return;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setActiveKey(key);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!activeKey) return;
    dialogRef.current?.querySelector<HTMLElement>(".leader-modal-close")?.focus();
  }, [activeKey]);

  useEffect(() => {
    if (!activeKey) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeKey, close]);

  return (
    <LeaderContext.Provider value={{ open, close }}>
      {children}
      {profile && (
        <div className="leader-modal open" role="dialog" aria-modal="true">
          <div
            className="leader-modal-backdrop"
            data-close
            onMouseDown={() => close()}
          ></div>
          <div
            className="leader-modal-dialog"
            ref={dialogRef}
            role="document"
          >
            <button
              type="button"
              className="leader-modal-close"
              aria-label="Close profile"
              onClick={close}
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
            <div className="leader-modal-photo">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="240"
                height="240"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="leader-modal-body">
              <span className="leader-modal-title">{profile.title}</span>
              <h3 className="leader-modal-name">{profile.name}</h3>
              <p className="leader-modal-org">{profile.org}</p>
              <div className="leader-modal-bio">
                {profile.bio.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <ul className="leader-modal-facts">
                {profile.facts.map((t, i) => (
                  <li key={i}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </LeaderContext.Provider>
  );
}

export function LeaderProfileCard({
  profile,
  className = "",
  labelledBy,
  children,
}: {
  profile: string;
  className?: string;
  labelledBy?: string;
  children: React.ReactNode;
}) {
  const { open } = useLeader();

  const handleActivate = () => open(profile);

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) return;
    e.preventDefault();
    open(profile);
  };

  return (
    <div
      className={className}
      data-profile={profile}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-label={labelledBy ? undefined : `View full profile of ${PROFILES[profile].name}`}
      aria-labelledby={labelledBy}
      onClick={handleActivate}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}

export default LeaderModalProvider;