
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Performance Marketing",
    path: "/services/performance-marketing",
  },
  {
    name: "Affiliate Marketing",
    path: "/services/affiliate-marketing",
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
  },
  {
    name: "Mobile Performance Marketing",
    path: "/services/mobile-performance-marketing",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[var(--dark)] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo/Logo_Machwares.png"
                alt="Machwares"
                className="w-[155px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[310px] font-[var(--font-body)] text-sm leading-7 text-white/55">
              Connecting brands with the right audience through
              strategic digital marketing, meaningful partnerships
              and performance-driven campaigns.
            </p>

            <a
              href="mailto:admin@machwares.com"
              className="mt-5 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-white transition-colors duration-300 hover:text-[var(--primary)]"
            >
              <Mail size={16} className="text-[var(--primary)]" />
              admin@machwares.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-bold">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="font-[var(--font-body)] text-sm text-white/55 transition-colors duration-300 hover:text-[var(--primary)]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="font-[var(--font-body)] text-sm text-white/55 transition-colors duration-300 hover:text-[var(--primary)]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="font-[var(--font-body)] text-sm text-white/55 transition-colors duration-300 hover:text-[var(--primary)]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="font-[var(--font-body)] text-sm text-white/55 transition-colors duration-300 hover:text-[var(--primary)]"
                >
                  All Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="font-[var(--font-body)] text-sm text-white/55 transition-colors duration-300 hover:text-[var(--primary)]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-display)] text-sm font-bold">
              Get in Touch
            </h3>

            <p className="mt-6 font-[var(--font-body)] text-sm leading-7 text-white/55">
              Have a project or growth opportunity in mind?
              We'd love to hear from you.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                HQ Address
              </p>

              <p className="font-[var(--font-body)] text-sm leading-7 text-white/55">
                R.P.S OMAXE GREEN VALLEY, SECTOR - 41/42,
                NEAR GREEN FIELDS COLONY, FARIDABAD,
                Haryana, India - 122010
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 border-b border-[var(--primary)] pb-1 font-[var(--font-body)] text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:text-[var(--primary)]"
            >
              Contact Our Team
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="font-[var(--font-body)] text-xs text-white/40">
            © {new Date().getFullYear()} Machwares. All rights reserved.
          </p>

          <span className="font-[var(--font-body)] text-xs text-white/40">
            Digitally Yours!
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
