"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "About" },
  { href: "/projects", label: "Evaluation & Policy" },
  { href: "/publications", label: "Publications & conferences" },
  { href: "/teaching", label: "Teaching" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && (!activeHash || activeHash === "#home");
    const [targetPath, targetHash] = href.split("#");
    const route = targetPath || "/";
    if (targetHash) return pathname === route && activeHash === `#${targetHash}`;
    if (pathname !== route) return false;
    return true;
  };

  const navLinkClass = (href: string) =>
    `site-nav-link${isActive(href) ? " is-active" : ""}`;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-nav-header">
        <nav className="page-shell site-nav" aria-label="Main navigation">
          <div className="site-nav-desktop">
            <div className="site-nav-links">
              {NAV_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} className={navLinkClass(item.href)} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
            </div>
            <a href="/documents/Pooja_Kini_CV_2026.pdf" download className="cv-link nav-cv-link">Download CV</a>
          </div>

          <div className="site-nav-mobile-actions">
            <a href="/documents/Pooja_Kini_CV_2026.pdf" download className="cv-link nav-cv-link">Download CV</a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X aria-hidden="true" size={23} /> : <Menu aria-hidden="true" size={23} />}
            </button>
          </div>

          {isMenuOpen && (
            <div id="mobile-menu" className="site-nav-mobile-menu">
              {NAV_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} className={navLinkClass(item.href)} aria-current={isActive(item.href) ? "page" : undefined} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
