
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Sprout,
  HeartHandshake,
  Mail,
  ArrowUp,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

// ==========================================
// WEBSITE NAVIGATION - SAME AS NAVBAR
// ==========================================

const NAVIGATION = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "organic", path: "/organic-farming" },
  { key: "dairy", path: "/dairy-business" },
  { key: "spiritual", path: "/spiritual-social-work" },
  { key: "contact", path: "/contact" },
];

// ==========================================
// SOCIAL MEDIA LINKS - SAME AS NAVBAR
// ==========================================

const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/985779947947463/",
    Icon: FaFacebookF,
    hover: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ganesh_nisal82/",
    Icon: FaInstagram,
    hover: "hover:bg-[#D62976]",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/watch?v=Fo0ep6eb51E",
    Icon: FaYoutube,
    hover: "hover:bg-[#FF0033]",
  },
];

// ==========================================
// MULTILINGUAL CONTENT
// ==========================================

const CONTENT = {
  mr: {
    name: "गणेश निसाळ",
    tagline: "मातीशी नातं, प्रगतीचा ध्यास!",
    description:
      "शेती, सेंद्रिय शेतीविषयक जनजागृती, दुग्धव्यवसाय आणि सामाजिक उपक्रमांशी जोडलेला प्रवास. अनुभव, ज्ञान आणि सकारात्मक विचारांच्या माध्यमातून शेती व समाजाशी असलेलं नातं अधिक दृढ करण्याचा प्रयत्न.",

    quickLinks: "महत्त्वाच्या लिंक्स",
    contactTitle: "संपर्क माहिती",
    socialTitle: "आमच्याशी कनेक्ट व्हा",

    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      organic: "सेंद्रिय शेती",
      dairy: "दुग्धव्यवसाय",
      spiritual: "धार्मिक व सामाजिक कार्य",
      contact: "संपर्क",
    },

    location: "नाशिक, महाराष्ट्र",
    phone: "+91 7588301011",

    socialDescription:
      "शेतीविषयक माहिती, नवीन उपक्रम आणि अपडेट्ससाठी सोशल मीडियावर कनेक्ट व्हा.",

    contactButton: "आमच्याशी संपर्क साधा",
    whatsapp: "WhatsApp वर संपर्क करा",

    copyright: "सर्व हक्क राखीव.",
    designed: "Designed & Developed by",
    backToTop: "वर जा",
  },

  en: {
    name: "Ganesh Nisal",
    tagline: "Rooted in Soil, Driven by Growth!",
    description:
      "A journey connected with agriculture, organic farming awareness, dairy business and community initiatives. Sharing experience, knowledge and positive ideas to strengthen the connection with farming and society.",

    quickLinks: "Quick Links",
    contactTitle: "Contact Information",
    socialTitle: "Connect With Us",

    nav: {
      home: "Home",
      about: "About",
      organic: "Organic Farming",
      dairy: "Dairy",
      spiritual: "Spiritual & Social Work",
      contact: "Contact",
    },

    location: "Nashik, Maharashtra",
    phone: "+91 7588301011",

    socialDescription:
      "Follow us on social media for farming information, initiatives and updates.",

    contactButton: "Get In Touch",
    whatsapp: "Connect on WhatsApp",

    copyright: "All Rights Reserved.",
    designed: "Designed & Developed by",
    backToTop: "Back to Top",
  },

  hi: {
    name: "गणेश निसाल",
    tagline: "मिट्टी से जुड़ाव, प्रगति का संकल्प!",
    description:
      "कृषि, जैविक खेती के प्रति जागरूकता, डेयरी व्यवसाय और सामाजिक गतिविधियों से जुड़ी यात्रा। अनुभव, ज्ञान और सकारात्मक विचारों के माध्यम से खेती और समाज के साथ संबंध मजबूत करने का प्रयास।",

    quickLinks: "महत्त्वपूर्ण लिंक",
    contactTitle: "संपर्क जानकारी",
    socialTitle: "हमसे जुड़ें",

    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      organic: "जैविक खेती",
      dairy: "डेयरी व्यवसाय",
      spiritual: "धार्मिक एवं सामाजिक कार्य",
      contact: "संपर्क",
    },

    location: "नासिक, महाराष्ट्र",
    phone: "+91 7588301011",

    socialDescription:
      "खेती से जुड़ी जानकारी, नई गतिविधियों और अपडेट के लिए सोशल मीडिया पर जुड़ें।",

    contactButton: "हमसे संपर्क करें",
    whatsapp: "WhatsApp पर संपर्क करें",

    copyright: "सर्वाधिकार सुरक्षित।",
    designed: "Designed & Developed by",
    backToTop: "ऊपर जाएँ",
  },
};

// ==========================================
// FOOTER COMPONENT
// ==========================================

export default function Footer() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;
  const reduceMotion = useReducedMotion();

  const currentYear = new Date().getFullYear();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#111710] text-white">

      {/* ==========================================
          BACKGROUND DECORATIONS
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#2C6336]/15 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D9B66D]/5 blur-[120px]" />

        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#173923] via-[#D9B66D] to-[#173923]" />
      </div>

      {/* ==========================================
          MAIN FOOTER
      ========================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 pb-12 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pb-16">

        <div className="grid gap-11 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-10">

          {/* ======================================
              COLUMN 1 - LOGO & ABOUT
          ====================================== */}

          <motion.div {...reveal(0)}>

            {/* LOGO */}

            <Link
              to="/"
              onClick={handleNavigation}
              aria-label="Ganesh Nisal - Home"
              className="inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="Ganesh Nisal Logo"
                loading="lazy"
                className="h-[100px] w-[185px] object-contain object-left sm:h-[110px] sm:w-[200px]"
              />
            </Link>

            {/* TAGLINE */}

            <h3 className="mt-3 text-[18px] font-extrabold leading-[1.5] text-[#F4D84D]">
              {t.tagline}
            </h3>

            {/* DESCRIPTION */}

            <p className="mt-4 max-w-[360px] text-[14.5px] leading-[29px] text-white/70">
              {t.description}
            </p>

            {/* SOCIAL MEDIA ICONS */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIALS.map(({ name, url, Icon, hover }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className={`flex h-[43px] w-[43px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lg ${hover}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ======================================
              COLUMN 2 - QUICK LINKS
          ====================================== */}

          <motion.div {...reveal(0.1)}>

            <h3 className="text-[19px] font-extrabold text-white">
              {t.quickLinks}
            </h3>

            <div className="mt-4 h-[3px] w-[45px] rounded-full bg-[#F4D84D]" />

            <nav
              aria-label={t.quickLinks}
              className="mt-7 flex flex-col gap-4"
            >
              {NAVIGATION.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={handleNavigation}
                  className="group flex w-fit items-center gap-2.5 text-[15px] font-medium text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-[#F4D84D]"
                >
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#D9B66D]"
                  />

                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* ======================================
              COLUMN 3 - CONTACT INFORMATION
          ====================================== */}

          <motion.div {...reveal(0.2)}>

            <h3 className="text-[19px] font-extrabold text-white">
              {t.contactTitle}
            </h3>

            <div className="mt-4 h-[3px] w-[45px] rounded-full bg-[#F4D84D]" />

            <div className="mt-7 space-y-6">

              {/* LOCATION */}

              <div className="flex items-start gap-3.5">
                <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-xl bg-[#243527] text-[#F4D84D]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[15px] font-semibold leading-[26px] text-white/85">
                    {t.location}
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <a
                href="tel:+917588301011"
                className="group flex items-start gap-3.5"
              >
                <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-xl bg-[#243527] text-[#F4D84D]">
                  <Phone size={19} />
                </div>

                <span className="pt-2 text-[15px] font-semibold text-white/85 transition-colors group-hover:text-[#F4D84D]">
                  {t.phone}
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/917588301011"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5"
              >
                <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-xl bg-[#243527] text-[#F4D84D]">
                  <FaWhatsapp size={20} />
                </div>

                <span className="pt-2 text-[14px] font-semibold text-white/85 transition-colors group-hover:text-[#F4D84D]">
                  {t.whatsapp}
                </span>
              </a>
            </div>
          </motion.div>

          {/* ======================================
              COLUMN 4 - CONNECT WITH US
          ====================================== */}

          <motion.div {...reveal(0.3)}>

            <h3 className="text-[19px] font-extrabold text-white">
              {t.socialTitle}
            </h3>

            <div className="mt-4 h-[3px] w-[45px] rounded-full bg-[#F4D84D]" />

            <p className="mt-7 text-[14.5px] leading-[28px] text-white/70">
              {t.socialDescription}
            </p>

            {/* CONTACT BUTTON */}

            <Link
              to="/contact"
              onClick={handleNavigation}
              className="group mt-6 inline-flex min-h-[49px] items-center justify-center gap-3 rounded-md bg-[#F4D84D] px-5 text-[13px] font-extrabold text-[#111710] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              {t.contactButton}

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* SMALL DECORATIVE LINE */}

            <div className="mt-8 flex items-center gap-3">
              <Sprout
                size={22}
                className="text-[#D9B66D]"
              />

              <span className="h-px flex-1 bg-white/15" />

              <HeartHandshake
                size={21}
                className="text-[#D9B66D]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==========================================
          COPYRIGHT & DEVELOPER CREDIT
      ========================================== */}

      <div className="relative border-t border-white/10 bg-[#0A100B]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 px-5 py-6 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">

          {/* COPYRIGHT */}

          <p className="text-[13px] font-medium leading-[24px] text-white/65 sm:text-[14px]">
            © {currentYear}{" "}
            <span className="font-bold text-white">
              {t.name}
            </span>
            . {t.copyright}
          </p>

          {/* DESIGNED & DEVELOPED BY */}

          {/* DESIGNED & DEVELOPED BY */}

<div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] leading-[24px] sm:text-[14px]">
  <span className="text-white/60">
    {t.designed}
  </span>

  <a
    href="https://hashgridtech.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-extrabold text-[#F4D84D] transition-colors duration-300 hover:text-white hover:underline"
  >
    Hashgrid Technologies Pvt. Ltd.
  </a>
</div>
          {/* BACK TO TOP */}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            title={t.backToTop}
            className="group flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-[#F4D84D]/40 bg-[#F4D84D]/10 text-[#F4D84D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4D84D] hover:text-[#111710]"
          >
            <ArrowUp
              size={20}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
