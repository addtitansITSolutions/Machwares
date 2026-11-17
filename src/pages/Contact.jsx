
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Website Enquiry - ${formData.name}`;

    const body = `
New enquiry received through the Machwares website.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Service Interested In: ${formData.service || "Not specified"}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:admin@machwares.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <SEO
        title="Contact Machwares | Let's Talk Growth"
        description="Get in touch with Machwares to discuss performance marketing, affiliate marketing, digital marketing, and mobile performance marketing."
        path="/contact"
      />

      <Navbar forceScrolled />

      <main className="bg-white">
        {/* Contact Form */}
        <section className="bg-[var(--light)] px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-36 lg:px-16 lg:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* Contact Information */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Contact Machwares
              </p>

              <h2 className="mt-5 font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--dark)] sm:text-4xl">
                Let's make something meaningful happen.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--text)] sm:text-base">
                Whether you have a specific goal or just want to explore
                possibilities, we're here to help you find the right way
                forward.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:admin@machwares.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary)]">
                    <Mail size={20} />
                  </span>

                  <div>
                    <p className="text-xs text-[var(--text)]">Email us</p>
                    <p className="mt-1 font-semibold text-[var(--dark)] transition-colors group-hover:text-[var(--primary)]">
                      admin@machwares.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary)]">
                    <MapPin size={20} />
                  </span>

                  <div>
                    <p className="text-xs text-[var(--text)]">Location</p>
                    <p className="mt-1 font-semibold text-[var(--dark)]">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--dark)]">
                Send us an enquiry
              </h3>

              <p className="mt-2 text-sm text-[var(--text)]">
                Fill in the details below and tell us how we can help.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                  >
                    <option value="">Select a service</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Affiliate Marketing">Affiliate Marketing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Mobile Performance Marketing">
                      Mobile Performance Marketing
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your goals, requirements, or anything you'd like us to know..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)]"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--primary)] px-7 py-4 text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
                >
                  Send Enquiry
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-xs leading-5 text-[var(--text)]">
                  Submitting will open your default email application with
                  your enquiry details ready to send.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;