
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  Sprout,
  Globe2,
  Check,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

// ==========================================
// NAVIGATION
// ==========================================

const navigation = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "organic", path: "/organic-farming" },
  { key: "dairy", path: "/dairy-business" },
  {
    key: "spiritual",
    path: "/spiritual-social-work",
  },
  { key: "contact", path: "/contact" },
];

// ==========================================
// SOCIAL MEDIA
// ==========================================

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    url: "https://www.facebook.com/985779947947463/",
    color: "#1877F2",
    hover: "hover:bg-[#1877F2]",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/ganesh_nisal82/",
    color: "#E1306C",
    hover: "hover:bg-[#D62976]",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    url: "https://www.youtube.com/watch?v=Fo0ep6eb51E",
    color: "#FF0033",
    hover: "hover:bg-[#FF0033]",
  },
];

// ==========================================
// LANGUAGES
// ==========================================

const LANGUAGES = [
  { code: "mr", label: "मराठी", short: "मराठी" },
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिंदी", short: "हिंदी" },
];

// ==========================================
// TRANSLATIONS
// ==========================================

const CONTENT = {
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      organic: "सेंद्रिय शेती",
      dairy: "दुग्धव्यवसाय",
      spiritual: "धार्मिक व सामाजिक कार्य",
      contact: "संपर्क",
    },
    locationTitle: "आमचे ठिकाण",
    locationDetail: "नाशिक, महाराष्ट्र",
    farmingTitle: "सेंद्रिय शेती",
    farmingDetail: "शिक्षण आणि जनजागृती",
    phoneTitle: "संपर्क साधा",
    phoneDetail: "+91 7588301011",
    topLabel: "शेती आणि सेंद्रिय शेती",
    state: "महाराष्ट्र",
    getInTouch: "आमच्याशी संपर्क साधा",
    call: "फोन करा",
    menuOpen: "मेनू उघडा",
    menuClose: "मेनू बंद करा",
    language: "भाषा निवडा",
    social: "सोशल मीडियावर कनेक्ट व्हा",
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      organic: "Organic Farming",
      dairy: "Dairy",
      spiritual: "Spiritual & Social Work",
      contact: "Contact",
    },
    locationTitle: "Our Location",
    locationDetail: "Nashik, Maharashtra",
    farmingTitle: "Organic Farming",
    farmingDetail: "Education & Awareness",
    phoneTitle: "Call Anytime",
    phoneDetail: "+91 7588301011",
    topLabel: "Agriculture & Organic Farming",
    state: "Maharashtra",
    getInTouch: "GET IN TOUCH",
    call: "Call Now",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Select Language",
    social: "Connect on Social Media",
  },

  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      organic: "जैविक खेती",
      dairy: "डेयरी व्यवसाय",
      spiritual: "धार्मिक एवं सामाजिक कार्य",
      contact: "संपर्क",
    },
    locationTitle: "हमारा स्थान",
    locationDetail: "नासिक, महाराष्ट्र",
    farmingTitle: "जैविक खेती",
    farmingDetail: "शिक्षा और जागरूकता",
    phoneTitle: "संपर्क करें",
    phoneDetail: "+91 7588301011",
    topLabel: "कृषि और जैविक खेती",
    state: "महाराष्ट्र",
    getInTouch: "हमसे संपर्क करें",
    call: "कॉल करें",
    menuOpen: "मेनू खोलें",
    menuClose: "मेनू बंद करें",
    language: "भाषा चुनें",
    social: "सोशल मीडिया पर जुड़ें",
  },
};

// ==========================================
// SOCIAL ICON COMPONENT
// ==========================================

function SocialIcons({ mobile = false }) {
  return (
    <div
      className={`flex items-center ${
        mobile ? "justify-center gap-3" : "gap-2"
      }`}
    >
      {socials.map(({ icon: Icon, label, url, hover }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`
            group flex shrink-0 items-center justify-center
            rounded-full border transition-all duration-300
            hover:-translate-y-[2px] hover:border-transparent
            hover:text-white hover:shadow-lg
            ${hover}
            ${
              mobile
                ? "h-[43px] w-[43px] border-white/20 bg-white/10 text-white"
                : "h-[36px] w-[36px] border-[#E6EAE4] bg-[#F7F9F5] text-[#24392A]"
            }
          `}
        >
          <Icon size={mobile ? 17 : 15} />
        </a>
      ))}
    </div>
  );
}

// ==========================================
// LANGUAGE SWITCHER
// ==========================================

function LanguageSwitcher({ language, setLanguage, mobile = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [language]);

  if (mobile) {
    return (
      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold text-white/65">
          <Globe2 size={15} />
          {CONTENT[language]?.language || CONTENT.mr.language}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {LANGUAGES.map((item) => {
            const active = language === item.code;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`rounded-lg border px-2 py-3 text-[12px] font-bold transition-colors ${
                  active
                    ? "border-[#D9B66D] bg-[#D9B66D] text-[#102519]"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-[#D9B66D]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Select language"
        aria-expanded={open}
        className="flex h-[38px] items-center gap-2 rounded-full border border-[#E1E7DE] bg-[#F7F9F5] px-3 text-[12px] font-bold text-[#173923] transition-colors hover:border-[#B89B61]"
      >
        <Globe2 size={15} className="text-[#528347]" />
        {LANGUAGES.find((item) => item.code === language)?.short || "मराठी"}
        <span className="text-[10px] text-[#87948A]">▾</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close language options"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[101] cursor-default"
          />

          <div className="absolute right-0 top-[calc(100%+9px)] z-[102] w-[165px] overflow-hidden rounded-xl border border-[#E4E9E0] bg-white p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
            {LANGUAGES.map((item) => {
              const active = language === item.code;

              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] font-semibold transition-colors ${
                    active
                      ? "bg-[#EDF4EA] text-[#285A2B]"
                      : "text-[#354A3A] hover:bg-[#F5F7F2]"
                  }`}
                >
                  {item.label}
                  {active && <Check size={14} />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ==========================================
// MAIN NAVBAR
// ==========================================

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = CONTENT[language] ? language : "mr";
  const t = CONTENT[currentLanguage];

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
     text-[13.5px] font-semibold tracking-[0.05px]
     transition-colors duration-200
     ${
       isActive
         ? "text-[#F4D84D]"
         : "text-white/90 hover:text-[#F4D84D]"
     }`;

  return (
    <header className="sticky top-0 z-[100] w-full font-sans shadow-[0_5px_20px_rgba(0,0,0,0.08)]">

      {/* =====================================
          TOP WHITE INFORMATION BAR
      ===================================== */}

      <div className="border-b border-[#EAEAEA] bg-white">
        <div className="mx-auto flex h-[55px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6 md:h-[65px] lg:h-[70px] lg:px-8 xl:px-10">

          {/* SOCIAL MEDIA ICONS */}

          <SocialIcons />

          {/* DESKTOP INFORMATION */}

          <div className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-9">
            {[
              {
                icon: MapPin,
                title: t.locationTitle,
                detail: t.locationDetail,
              },
              {
                icon: Sprout,
                title: t.farmingTitle,
                detail: t.farmingDetail,
              },
              {
                icon: Phone,
                title: t.phoneTitle,
                detail: t.phoneDetail,
                href: "tel:+917588301011",
              },
            ].map(({ icon: Icon, title, detail, href }) => {
              const inner = (
                <>
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-[#173923] text-[#D9B66D] lg:h-[42px] lg:w-[42px]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-[12px] font-bold text-[#17271C] lg:text-[13px]">
                      {title}
                    </p>

                    <p className="mt-[3px] whitespace-nowrap text-[11px] text-[#6B766C] lg:text-[12px]">
                      {detail}
                    </p>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={title}
                  href={href}
                  className="flex items-center gap-2.5 transition-opacity hover:opacity-75"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={title}
                  className="flex items-center gap-2.5"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 2xl:flex">
              <span className="text-[12px] font-semibold text-[#354337]">
                {t.topLabel}
              </span>

              <span className="rounded bg-[#4D9441] px-2.5 py-1.5 text-[10px] font-bold text-white">
                {t.state}
              </span>
            </div>

            <LanguageSwitcher
              language={currentLanguage}
              setLanguage={setLanguage}
            />

            {/* MOBILE PHONE */}

            <a
              href="tel:+917588301011"
              aria-label={t.call}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#EEF5EA] text-[#3E7835] md:hidden"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================
          MAIN DARK NAVIGATION
      ===================================== */}

      <div className="bg-[#111710]">
        <div className="mx-auto flex h-[70px] w-full max-w-[1600px] items-stretch px-4 sm:px-6 lg:h-[78px] lg:px-8 xl:px-10">

          {/* LOGO */}

          <Link
            to="/"
            aria-label="Ganesh Nisal - Home"
            className="flex w-[120px] shrink-0 items-center justify-center px-1 sm:w-[145px] lg:w-[160px]"
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
            className="hidden min-w-0 flex-1 items-center justify-center gap-3 px-3 xl:flex 2xl:gap-6 2xl:px-5"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={desktopLinkClass}
              >
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}

          <div className="ml-auto flex shrink-0 items-center gap-2 pl-2 lg:gap-3">

            {/* CALL ICON */}

            <a
              href="tel:+917588301011"
              aria-label={t.call}
              className="hidden h-[40px] w-[40px] items-center justify-center rounded-full bg-[#293629] text-[#F4D84D] transition-colors hover:bg-[#3B4B39] sm:flex"
            >
              <Phone size={18} />
            </a>

            {/* CONTACT BUTTON */}

            <a
              href="https://wa.me/917588301011"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[44px] items-center justify-center gap-2 bg-[#F4D84D] px-4 text-[12px] font-extrabold tracking-[0.1px] text-[#171717] transition-colors hover:bg-white lg:flex"
            >
              {t.getInTouch}
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={
                mobileOpen ? t.menuClose : t.menuOpen
              }
              aria-expanded={mobileOpen}
              aria-controls="gn-mobile-navigation"
              className="flex h-[43px] w-[43px] items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 xl:hidden"
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

      {/* =====================================
          MOBILE / TABLET MENU
      ===================================== */}

      {mobileOpen && (
        <div
          id="gn-mobile-navigation"
          className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#151D15] shadow-2xl xl:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-125px)] max-w-[1600px] overflow-y-auto px-5 py-5 sm:px-8"
          >
            {/* NAV LINKS */}

            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-white/10 py-3.5 text-[15px] font-semibold transition-colors ${
                    isActive
                      ? "text-[#F4D84D]"
                      : "text-white/85 hover:text-[#F4D84D]"
                  }`
                }
              >
                {t.nav[item.key]}
                <ArrowUpRight
                  size={15}
                  className="opacity-50"
                />
              </NavLink>
            ))}

            {/* MOBILE LANGUAGE SWITCHER */}

            <LanguageSwitcher
              language={currentLanguage}
              setLanguage={setLanguage}
              mobile
            />

            {/* MOBILE CONTACT */}

            <a
              href="https://wa.me/917588301011"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-md bg-[#F4D84D] px-5 py-4 text-[13px] font-extrabold text-[#171717]"
            >
              {t.getInTouch}
              <ArrowUpRight size={17} />
            </a>

            {/* MOBILE SOCIAL MEDIA */}

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="mb-4 text-center text-[12px] font-semibold text-white/60">
                {t.social}
              </p>

              <SocialIcons mobile />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
