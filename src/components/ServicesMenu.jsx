
// import { ArrowUpRight, ChevronDown } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export const serviceItems = [
//   {
//     number: "01",
//     name: "Performance Marketing",
//     path: "/services/performance-marketing",
//     description:
//       "Drive measurable growth through targeted campaigns and data-driven strategies.",
//   },
//   {
//     number: "02",
//     name: "Affiliate Marketing",
//     path: "/services/affiliate-marketing",
//     description:
//       "Expand your reach through strategic partnerships and performance-based growth.",
//   },
//   {
//     number: "03",
//     name: "Digital Marketing",
//     path: "/services/digital-marketing",
//     description:
//       "Strengthen your online presence and connect with audiences across digital platforms.",
//   },
//   {
//     number: "04",
//     name: "Mobile Performance Marketing",
//     path: "/services/mobile-performance-marketing",
//     description:
//       "Acquire and engage mobile users through targeted campaigns focused on measurable installs, actions, and growth.",
//   },
// ];

// /* =====================================================
//    DESKTOP SERVICES MENU
// ===================================================== */

// export const DesktopServicesMenu = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`absolute left-1/2 top-[65px] w-[650px] -translate-x-1/2 pt-4 transition-all duration-300 ${
//         isOpen
//           ? "visible translate-y-0 opacity-100"
//           : "invisible -translate-y-2 opacity-0"
//       }`}
//     >
//       <div className="overflow-hidden border border-[var(--border)] bg-white shadow-[0_20px_60px_rgba(26,29,31,0.14)]">

//         {/* Header */}
//         <div className="relative overflow-hidden bg-[var(--dark)] px-8 py-7">
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-8 -top-20 h-48 w-48 rounded-full border-[24px] border-white/[0.04]"
//           />

//           <div className="relative flex items-end justify-between gap-5">
//             <div>
//               <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
//                 Our Expertise
//               </span>

//               <h3 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-white">
//                 Strategies that move brands forward.
//               </h3>

//               <p className="mt-2 max-w-[390px] font-[var(--font-body)] text-xs leading-5 text-white/55">
//                 Explore our marketing solutions designed to connect,
//                 engage and accelerate business growth.
//               </p>
//             </div>

//             <div className="hidden shrink-0 text-right sm:block">
//               {/* <span className="font-[var(--font-display)] text-4xl font-bold text-white/10">
//                 04
//               </span> */}
//               <p className="font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-widest text-white/40">
//                 Core Services
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
//           {serviceItems.map((service) => (
//             <NavLink
//               key={service.name}
//               to={service.path}
//               onClick={onClose}
//               className="group relative flex min-h-[145px] flex-col bg-white px-7 py-6 transition-colors duration-300 hover:bg-[var(--light)]"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--light)] font-[var(--font-body)] text-[10px] font-bold text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
//                   {service.number}
//                 </span>

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={1.8}
//                   className="text-[var(--text)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
//                 />
//               </div>

//               <h4 className="mt-4 font-[var(--font-display)] text-[15px] font-bold tracking-tight text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)]">
//                 {service.name}
//               </h4>

//               <p className="mt-2 max-w-[250px] font-[var(--font-body)] text-[11px] leading-[1.7] text-[var(--text)]">
//                 {service.description}
//               </p>
//             </NavLink>
//           ))}
//         </div>

//         {/* Bottom Strip */}
//         <div className="flex items-center justify-between gap-3 border-t border-[var(--border)] bg-[#FAFAFA] px-7 py-4">
//           <span className="font-[var(--font-body)] text-[10px] font-medium text-[var(--text)]">
//             Have a growth goal in mind?
//           </span>

//           <NavLink
//             to="/contact"
//             onClick={onClose}
//             className="group inline-flex items-center gap-1.5 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]"
//           >
//             Let's Talk
//             <ArrowUpRight
//               size={13}
//               className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             />
//           </NavLink>
//         </div>

//       </div>
//     </div>
//   );
// };


// /* =====================================================
//    MOBILE SERVICES MENU
// ===================================================== */

// export const MobileServicesMenu = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`grid transition-all duration-500 ${
//         isOpen
//           ? "mt-4 grid-rows-[1fr] opacity-100"
//           : "grid-rows-[0fr] opacity-0"
//       }`}
//     >
//       <div className="overflow-hidden">
//         <div className="border-l border-[var(--primary)]/50 pl-4">

//           {serviceItems.map((service) => (
//             <NavLink
//               key={service.name}
//               to={service.path}
//               onClick={onClose}
//               className="group flex items-start gap-4 border-b border-white/10 py-4 last:border-b-0"
//             >
//               {/* Number */}
//               <span className="mt-1 font-[var(--font-body)] text-[10px] font-bold tracking-wider text-[var(--primary)]">
//                 {service.number}
//               </span>

//               {/* Content */}
//               <div className="min-w-0 flex-1">
//                 <div className="flex items-center justify-between gap-3">
//                   <span className="font-[var(--font-display)] text-base font-semibold text-white transition-colors duration-300 group-hover:text-[var(--primary)]">
//                     {service.name}
//                   </span>

//                   <ArrowUpRight
//                     size={15}
//                     className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
//                   />
//                 </div>

//                 <p className="mt-1.5 max-w-xs font-[var(--font-body)] text-[11px] leading-[1.7] text-white/45">
//                   {service.description}
//                 </p>
//               </div>
//             </NavLink>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };


// /* =====================================================
//    MOBILE SERVICES TOGGLE
// ===================================================== */

// export const MobileServicesToggle = ({
//   isOpen,
//   setIsOpen,
// }) => {
//   return (
//     <button
//       type="button"
//       aria-label="Toggle services"
//       aria-expanded={isOpen}
//       onClick={() => setIsOpen((prev) => !prev)}
//       className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
//         isOpen
//           ? "border-[var(--primary)] bg-[var(--primary)] text-white"
//           : "border-white/20 bg-white/5 text-white"
//       }`}
//     >
//       <ChevronDown
//         size={18}
//         strokeWidth={1.8}
//         className={`transition-transform duration-300 ${
//           isOpen ? "rotate-180" : ""
//         }`}
//       />
//     </button>
//   );
// };



import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  Handshake,
  Megaphone,
  Smartphone,
  Target,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export const serviceItems = [
  {
    number: "01",
    name: "Performance Marketing",
    path: "/services/performance-marketing",
    icon: Target,
    description:
      "Drive measurable growth through targeted campaigns and data-driven strategies.",
  },
  {
    number: "02",
    name: "Affiliate Marketing",
    path: "/services/affiliate-marketing",
    icon: Handshake,
    description:
      "Expand your reach through strategic partnerships and performance-based growth.",
  },
  {
    number: "03",
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    icon: Globe,
    description:
      "Strengthen your online presence and connect with audiences across digital platforms.",
  },
  {
    number: "04",
    name: "Mobile Performance Marketing",
    path: "/services/mobile-performance-marketing",
    icon: Smartphone,
    description:
      "Acquire and engage mobile users through targeted campaigns focused on measurable installs, actions, and growth.",
  },
  {
    number: "05",
    name: "Influencer Marketing",
    path: "/services/influencer-marketing",
    icon: Megaphone,
    isNew: true,
    description:
      "Work with creators your audience already trusts to build awareness and drive real results.",
  },
];

// const NewBadge = () => (
//   <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 font-[var(--font-body)] text-[10px] font-semibold leading-none text-white">
//     New
//   </span>
// );

/* =====================================================
   DESKTOP SERVICES MENU
   Split panel: intro + CTA on the left, service list on the right
===================================================== */

export const DesktopServicesMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`absolute left-1/2 top-[65px] w-[860px] -translate-x-1/2 pt-4 transition-all duration-300 ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div className="grid grid-cols-[280px_1fr] overflow-hidden border border-[var(--border)] bg-white shadow-[0_20px_60px_rgba(26,29,31,0.14)]">
        {/* Left: intro panel */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-[var(--dark)] p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full border-[28px] border-white/[0.04]"
          />

          <div className="relative">
            <h3 className="font-[var(--font-display)] text-2xl font-bold leading-tight tracking-tight text-white">
              Strategies that move brands forward.
            </h3>

            <p className="mt-3 font-[var(--font-body)] text-xs leading-5 text-white/55">
              Explore our marketing solutions designed to connect, engage and
              accelerate business growth.
            </p>
          </div>

          <div className="relative mt-10">
            <p className="font-[var(--font-body)] text-xs text-white/55">
              Have a growth goal in mind?
            </p>

            <NavLink
              to="/contact"
              onClick={onClose}
              className="group mt-3 inline-flex items-center gap-2 bg-[var(--primary)] px-5 py-3 font-[var(--font-body)] text-xs font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let's talk
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </NavLink>
          </div>
        </div>

        {/* Right: service list */}
        <ul className="divide-y divide-[var(--border)]">
          {serviceItems.map((service) => {
            const Icon = service.icon;

            return (
              <li key={service.name}>
                <NavLink
                  to={service.path}
                  onClick={onClose}
                  className="group flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-[var(--light)] focus-visible:bg-[var(--light)] focus-visible:outline-none"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--light)] text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-[var(--font-display)] text-[15px] font-bold tracking-tight text-[var(--dark)] transition-colors duration-200 group-hover:text-[var(--primary)]">
                        {service.name}
                      </h4>
                      {/* {service.isNew && <NewBadge />} */}
                    </div>

                    <p className="mt-1 max-w-[420px] font-[var(--font-body)] text-[11px] leading-[1.6] text-[var(--text)]">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="shrink-0 text-[var(--text)]/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

/* =====================================================
   MOBILE SERVICES MENU
===================================================== */

export const MobileServicesMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`grid transition-all duration-500 ${
        isOpen
          ? "mt-4 grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <ul className="space-y-2">
          {serviceItems.map((service) => {
            const Icon = service.icon;

            return (
              <li key={service.name}>
                <NavLink
                  to={service.path}
                  onClick={onClose}
                  className="group flex items-start gap-3 border border-white/10 bg-white/[0.03] p-3.5 transition-colors duration-200 hover:border-[var(--primary)]/60 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10 text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 font-[var(--font-display)] text-base font-semibold text-white">
                        {service.name}
                        {/* {service.isNew && <NewBadge />} */}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-white/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                      />
                    </div>

                    <p className="mt-1 max-w-xs font-[var(--font-body)] text-[11px] leading-[1.7] text-white/50">
                      {service.description}
                    </p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

/* =====================================================
   MOBILE SERVICES TOGGLE
===================================================== */

export const MobileServicesToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type="button"
      aria-label="Toggle services"
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
        isOpen
          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
          : "border-white/20 bg-white/5 text-white"
      }`}
    >
      <ChevronDown
        size={18}
        strokeWidth={1.8}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};