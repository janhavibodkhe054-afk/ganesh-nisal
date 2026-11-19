
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  Sprout,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Organic Farming", path: "/organic-farming" },
  { label: "Dairy", path: "/dairy-business" },
  {
    label: "Spiritual & Social Work",
    path: "/spiritual-social-work",
  },
  { label: "Contact", path: "/contact" },
];

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    url: "https://www.facebook.com/985779947947463/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/ganesh_nisal82/",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    url: "https://www.youtube.com/watch?v=Fo0ep6eb51E",
  },
];

const contactItems = [
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Nashik, Maharashtra",
  },
  {
    icon: Sprout,
    title: "Organic Farming",
    detail: "Education & Awareness",
  },
  {
    icon: Phone,
    title: "Call Anytime",
    detail: "+91 7588301011",
    href: "tel:+917588301011",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const desktopLinkClass = ({ isActive }) =>
    `relative flex h-full items-center whitespace-nowrap
     text-[12px] font-semibold transition-colors duration-200
     ${
       isActive
         ? "text-[#F4D84D]"
         : "text-white/85 hover:text-[#F4D84D]"
     }`;

  return (
    <header className="sticky top-0 z-[100] w-full font-sans shadow-[0_5px_20px_rgba(0,0,0,0.08)]">

      {/* TOP WHITE INFORMATION BAR */}

      <div className="border-b border-[#EAEAEA] bg-white">
        <div className="mx-auto flex h-[48px] w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 md:h-[60px] lg:h-[66px] lg:px-8 xl:px-10">

          {/* SOCIAL ICONS */}

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center text-[#252525] transition-colors duration-300 hover:text-[#4E913F]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* DESKTOP CONTACT DETAILS */}

          <div className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-12">
            {contactItems.map(
              ({ icon: Icon, title, detail, href }) => {
                const content = (
                  <>
                    <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[3px] bg-[#171917] text-white lg:h-[40px] lg:w-[40px]">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-[#1C1C1C] lg:text-[11px]">
                        {title}
                      </p>

                      <p className="mt-[3px] whitespace-nowrap text-[10px] text-[#777777] lg:text-[11px]">
                        {detail}
                      </p>
                    </div>
                  </>
                );

                return href ? (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center gap-2.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={title}
                    className="flex items-center gap-2.5"
                  >
                    {content}
                  </div>
                );
              }
            )}
          </div>

          {/* TOP RIGHT LABEL */}

          <div className="hidden items-center gap-3 2xl:flex">
            <span className="text-[11px] font-semibold text-[#333]">
              Agriculture & Organic Farming
            </span>

            <span className="rounded-[2px] bg-[#4D9441] px-3 py-1.5 text-[9px] font-bold uppercase text-white">
              Maharashtra
            </span>
          </div>

          {/* MOBILE CONTACT */}

          <a
            href="tel:+917588301011"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-[#242424] md:hidden"
          >
            <Phone size={13} className="text-[#46863B]" />
            7588301011
          </a>
        </div>
      </div>

      {/* MAIN BLACK NAVIGATION */}

      <div className="bg-[#111310]">
        <div className="mx-auto flex h-[70px] w-full max-w-[1600px] items-stretch px-4 sm:px-6 lg:h-[78px] lg:px-8 xl:px-10">

          {/* LOGO */}

          <Link
            to="/"
            aria-label="Ganesh Nisal - Home"
            className="flex w-[120px] shrink-0 items-center justify-center px-2 sm:w-[145px] lg:w-[165px]"
          >
            <img
              src="/logo.png"
              alt="Ganesh Nisal Logo"
              className="h-[62px] w-full object-contain sm:h-[68px] lg:h-[75px]"
              loading="eager"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-4 px-5 xl:flex 2xl:gap-6"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={desktopLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}

          <div className="ml-auto flex shrink-0 items-center gap-3 pl-3 lg:gap-4 xl:ml-0">

            {/* PHONE ICON */}

            <a
              href="tel:+917588301011"
              aria-label="Call Ganesh Nisal"
              className="hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-[#292D25] text-[#F4D84D] transition-colors hover:bg-[#3A4434] sm:flex"
            >
              <Phone size={17} />
            </a>

            {/* YELLOW CONTACT BUTTON */}

            <a
              href="https://wa.me/917588301011"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[42px] items-center justify-center gap-3 bg-[#F4D84D] px-5 text-[11px] font-extrabold tracking-[0.3px] text-[#171717] transition-colors hover:bg-white lg:flex"
            >
              GET IN TOUCH
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="gn-mobile-navigation"
              className="flex h-[42px] w-[42px] items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 xl:hidden"
            >
              {mobileOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET NAVIGATION */}

      {mobileOpen && (
        <div
          id="gn-mobile-navigation"
          className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#151814] shadow-2xl xl:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-118px)] max-w-[1600px] overflow-y-auto px-5 py-4 sm:px-8"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-white/10 py-4 text-[13px] font-semibold transition-colors ${
                    isActive
                      ? "text-[#F4D84D]"
                      : "text-white/85 hover:text-[#F4D84D]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* MOBILE CONTACT */}

            <a
              href="https://wa.me/917588301011"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-3 bg-[#F4D84D] px-5 py-4 text-[12px] font-extrabold text-[#171717]"
            >
              GET IN TOUCH
              <ArrowUpRight size={17} />
            </a>

            {/* MOBILE SOCIAL ICONS */}

            <div className="mt-6 flex items-center justify-center gap-6">
              {socials.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 transition-colors hover:text-[#F4D84D]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
