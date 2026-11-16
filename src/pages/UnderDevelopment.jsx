
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { Construction } from "lucide-react";

const UnderDevelopment = () => {
  return (
    <>
      <SEO
        title="Under Development | Machwares"
        description="We're working on this page. Visit us again soon."
      />

      <Navbar forceScrolled={true} />

      <main className="flex min-h-[65vh] items-center justify-center bg-white px-6 py-20">
        <div className="w-full max-w-xl text-center">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[var(--primary)]">
            <Construction size={32} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Machwares
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--dark)] sm:text-5xl">
            Something great is coming.
          </h1>

          <p className="mx-auto max-w-md text-base leading-7 text-[var(--text)]">
            We're currently working on this page to bring you something better.
            Please check back soon. Thank you for your patience.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default UnderDevelopment;
