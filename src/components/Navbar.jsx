
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Terminal,
  House,
  Building2,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  DesktopServicesMenu,
  MobileServicesMenu,
  MobileServicesToggle,
} from "./ServicesMenu";

const navItems = [
  { name: "Home", path: "/", icon: House },
  { name: "About", path: "/about", icon: Building2 },
  { name: "Services", path: "/services", icon: BriefcaseBusiness },
];

const Navbar = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* --------------------------------
     Scroll Detection
  -------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(forceScrolled || window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [forceScrolled]);

  /* --------------------------------
     Lock Page When Mobile Menu Opens
  -------------------------------- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  /* --------------------------------
     Close Mobile Menu On Resize
  -------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-white/10 bg-[#180e12] backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex h-[84px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-12">

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="relative z-[110] flex items-center"
        >
          <img
            src="/logo/Logo_Machwares.png"
            alt="Machwares - Digitally Yours!"
            className="h-auto w-[145px] object-contain sm:w-[160px]"
          />
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav
          className={`hidden items-center gap-2 rounded-full px-2.5 py-2 transition-all duration-300 lg:flex ${
            scrolled
              ? "border border-black/5 bg-[#F8F9FA]"
              : "border border-white/10 bg-white/5 backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            /* SERVICES DROPDOWN */
            if (item.name === "Services") {
              return (
                <div
                  key={item.name}
                  className="relative flex items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-2 rounded-full px-5 py-2.5 font-[var(--font-body)] text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                        isActive || servicesOpen
                          ? "bg-[var(--primary)] text-white shadow-sm"
                          : scrolled
                            ? "text-[var(--dark)] hover:bg-black/5"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={16} strokeWidth={2} />
                    <span>Services</span>
                    <ChevronDown
                      size={14}
                      strokeWidth={2.2}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>

                  <DesktopServicesMenu
                    isOpen={servicesOpen}
                    onClose={() => setServicesOpen(false)}
                  />
                </div>
              );
            }

            /* STANDARD NAV ITEMS */
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-5 py-2.5 font-[var(--font-body)] text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-sm"
                      : scrolled
                        ? "text-[var(--dark)] hover:bg-black/5"
                        : "text-white hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={16} strokeWidth={2} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* DESKTOP CONTACT CTA */}
        <div className="hidden items-center lg:flex">
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[var(--primary)] px-6 py-3.5 font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.1em] text-white shadow-md shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b81b21] hover:shadow-lg hover:shadow-[var(--primary)]/30"
          >
            <Mail size={16} strokeWidth={2.2} />
            <span>Contact Us</span>
            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300 lg:hidden ${
            mobileOpen
              ? "border-white/15 bg-white/10 text-white"
              : scrolled
                ? "border-black/10 bg-black/5 text-[var(--dark)]"
                : "border-white/15 bg-white/10 text-white"
          }`}
        >
          {mobileOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`fixed inset-x-0 top-0 h-screen overflow-y-auto bg-[var(--dark)] transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          {/* TECH GRID BACKGROUND */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]"
          />

          <div className="relative flex min-h-full flex-col justify-between px-7 pb-12 pt-28 sm:px-12">

            {/* MOBILE NAVIGATION LINKS */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;

                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      className="border-b border-white/10 pb-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <NavLink
                          to={item.path}
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            `group flex flex-1 items-center gap-4 font-[var(--font-display)] text-3xl font-semibold transition-colors duration-300 sm:text-4xl ${
                              isActive
                                ? "text-[var(--primary)]"
                                : "text-white hover:text-[var(--primary)]"
                            }`
                          }
                        >
                          <span className="flex items-center gap-4">
                            <span className="font-mono text-xs text-white/35">
                              0{index + 1}
                            </span>
                            <Icon size={23} strokeWidth={1.8} />
                            Services
                          </span>
                        </NavLink>

                        <MobileServicesToggle
                          isOpen={mobileServicesOpen}
                          setIsOpen={setMobileServicesOpen}
                        />
                      </div>

                      <MobileServicesMenu
                        isOpen={mobileServicesOpen}
                        onClose={closeMobileMenu}
                      />
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `group flex items-center justify-between border-b border-white/10 pb-4 font-[var(--font-display)] text-3xl font-semibold transition-colors duration-300 sm:text-4xl ${
                        isActive
                          ? "text-[var(--primary)]"
                          : "text-white hover:text-[var(--primary)]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-4">
                          <span
                            className={`font-mono text-xs ${
                              isActive
                                ? "text-[var(--primary)]"
                                : "text-white/35"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <Icon size={23} strokeWidth={1.8} />

                          {item.name}
                        </div>

                        <ArrowUpRight
                          size={22}
                          className="text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* MOBILE CTA & CONTACT FOOTER */}
            <div className="mt-10 space-y-6">
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--primary)] py-4 font-[var(--font-body)] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[var(--primary)]/25"
              >
                <Mail size={18} />
                <span>Contact Us</span>
                <ArrowUpRight size={18} />
              </NavLink>

              <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-[var(--font-body)] text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Direct Inquiry
                  </p>

                  <a
                    href="mailto:info@machwares.com"
                    className="mt-1 inline-block font-[var(--font-body)] text-base font-medium text-white transition-colors duration-300 hover:text-[var(--primary)]"
                  >
                    info@machwares.com
                  </a>
                </div>

                <div className="inline-flex items-center gap-2 text-xs text-white/50">
                  <Terminal size={14} className="text-[var(--primary)]" />
                  <span>Digitally Yours! • Growth Marketing</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
