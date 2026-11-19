
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  ArrowUpRight,
  ChevronRight,
  Leaf,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
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

const translations = {
  mr: {
    tagline: "सेंद्रिय शेती अभ्यासक व कृषी उद्योजक",
    description:
      "गणेश निसाळ हे महाराष्ट्रातील सेंद्रिय शेती अभ्यासक, शेतकरी आणि कृषी उद्योजक आहेत. सेंद्रिय शेती, मातीचे आरोग्य, शेतीतील प्रयोग आणि कृषीविषयक माहिती मराठी भाषेतून पोहोचवण्याचे कार्य करतात.",
    quickTitle: "महत्त्वाचे दुवे",
    workTitle: "कार्याचे क्षेत्र",
    contactTitle: "संपर्क",
    locationTitle: "ठिकाण",
    phoneTitle: "मोबाईल",
    whatsappTitle: "WhatsApp",
    message: "मेसेज पाठवा",
    location: "नाशिक, महाराष्ट्र, भारत",
    rights: "सर्व हक्क राखीव.",
    links: [
      ["मुख्यपृष्ठ", "/"],
      ["माझ्याबद्दल", "/about"],
      ["सेंद्रिय शेती", "/organic-farming"],
      ["शेतीतील प्रयोग", "/farming-experiments"],
      ["दुग्धव्यवसाय", "/dairy-business"],
      ["पुरस्कार व प्रसिद्धी", "/achievements"],
      ["संपर्क", "/contact"],
    ],
    work: [
      ["सेंद्रिय शेती शिक्षण", "/organic-farming"],
      ["मातीचे आरोग्य व जनजागृती", "/organic-farming"],
      ["शेतीतील प्रयोग", "/farming-experiments"],
      ["दुग्धव्यवसाय", "/dairy-business"],
      ["आध्यात्मिक व सामाजिक उपक्रम", "/spiritual-social-work"],
    ],
  },
  en: {
    tagline: "Organic Farming Educator & Entrepreneur",
    description:
      "Ganesh Nisal is an organic farming enthusiast, farmer and agricultural entrepreneur from Maharashtra, sharing knowledge about soil health, organic farming and agricultural experiments.",
    quickTitle: "Quick Links",
    workTitle: "Our Work",
    contactTitle: "Contact",
    locationTitle: "Location",
    phoneTitle: "Phone",
    whatsappTitle: "WhatsApp",
    message: "Send a Message",
    location: "Nashik, Maharashtra, India",
    rights: "All Rights Reserved.",
    links: [
      ["Home", "/"],
      ["About Me", "/about"],
      ["Organic Farming", "/organic-farming"],
      ["Farming Experiments", "/farming-experiments"],
      ["Dairy Business", "/dairy-business"],
      ["Achievements", "/achievements"],
      ["Contact", "/contact"],
    ],
    work: [
      ["Organic Farming Education", "/organic-farming"],
      ["Soil Health & Awareness", "/organic-farming"],
      ["Farming Experiments", "/farming-experiments"],
      ["Dairy Business", "/dairy-business"],
      ["Spiritual & Social Work", "/spiritual-social-work"],
    ],
  },
  hi: {
    tagline: "जैविक खेती विशेषज्ञ एवं कृषि उद्यमी",
    description:
      "गणेश निसाल महाराष्ट्र के किसान और कृषि उद्यमी हैं। वे जैविक खेती, मिट्टी के स्वास्थ्य और खेती में नए प्रयोगों से जुड़ी जानकारी साझा करते हैं।",
    quickTitle: "महत्वपूर्ण लिंक",
    workTitle: "कार्य क्षेत्र",
    contactTitle: "संपर्क",
    locationTitle: "स्थान",
    phoneTitle: "मोबाइल",
    whatsappTitle: "WhatsApp",
    message: "संदेश भेजें",
    location: "नाशिक, महाराष्ट्र, भारत",
    rights: "सर्वाधिकार सुरक्षित।",
    links: [
      ["होम", "/"],
      ["मेरे बारे में", "/about"],
      ["जैविक खेती", "/organic-farming"],
      ["खेती के प्रयोग", "/farming-experiments"],
      ["डेयरी व्यवसाय", "/dairy-business"],
      ["पुरस्कार और उपलब्धियाँ", "/achievements"],
      ["संपर्क", "/contact"],
    ],
    work: [
      ["जैविक खेती शिक्षा", "/organic-farming"],
      ["मिट्टी का स्वास्थ्य", "/organic-farming"],
      ["खेती के प्रयोग", "/farming-experiments"],
      ["डेयरी व्यवसाय", "/dairy-business"],
      ["आध्यात्मिक एवं सामाजिक कार्य", "/spiritual-social-work"],
    ],
  },
};

function FooterHeading({ children }) {
  return (
    <div className="mb-6">
      <h3 className="text-[15px] font-bold tracking-[-0.2px] text-white">
        {children}
      </h3>
      <div className="mt-3 h-[2px] w-9 bg-[#FFD93D]" />
    </div>
  );
}

function FooterLinks({ items }) {
  return (
    <ul className="space-y-3">
      {items.map(([label, path]) => (
        <li key={`${path}-${label}`}>
          <Link
            to={path}
            className="group inline-flex items-start gap-2 text-[12.5px] leading-[23px] text-[#B1C0B2] transition-colors duration-300 hover:text-[#FFD93D]"
          >
            <ChevronRight
              size={14}
              className="mt-[4px] shrink-0 text-[#6C9871] transition-transform duration-300 group-hover:translate-x-1"
            />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#102519] text-white">
      {/* SUBTLE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[350px] w-[350px] rounded-full bg-[#43B649]/[0.07] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 bottom-0 h-[320px] w-[320px] rounded-full bg-[#FFD93D]/[0.035] blur-[100px]"
      />

      {/* MAIN FOOTER — NO TOP CTA STRIP */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-10 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pb-14 lg:pt-16 xl:px-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.85fr_1fr_1fr] lg:gap-x-10">
          {/* COLUMN 1 — BRAND */}

          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-[49px] w-[49px] shrink-0 items-center justify-center rounded-[12px] bg-[#2D6135]">
                <Leaf
                  size={26}
                  strokeWidth={1.8}
                  className="text-[#FFD93D]"
                />
              </div>

              <div>
                <h2 className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.5px]">
                  Ganesh Nisal
                </h2>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[1px] text-[#A9C5AB]">
                  {t.tagline}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-[335px] text-[12.5px] leading-[25px] text-[#B1C0B2]">
              {t.description}
            </p>

            {/* SOCIAL LINKS */}

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD93D] hover:bg-[#FFD93D] hover:text-[#102519]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}

          <div>
            <FooterHeading>{t.quickTitle}</FooterHeading>
            <FooterLinks items={t.links} />
          </div>

          {/* COLUMN 3 — OUR WORK */}

          <div>
            <FooterHeading>{t.workTitle}</FooterHeading>
            <FooterLinks items={t.work} />
          </div>

          {/* COLUMN 4 — CONTACT */}

          <div>
            <FooterHeading>{t.contactTitle}</FooterHeading>

            <div className="space-y-5">
              {/* LOCATION */}

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.06] text-[#FFD93D]">
                  <MapPin size={17} />
                </span>

                <div>
                  <h4 className="text-[12px] font-bold text-white">
                    {t.locationTitle}
                  </h4>

                  <p className="mt-1 text-[12px] leading-[22px] text-[#B1C0B2]">
                    {t.location}
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.06] text-[#FFD93D]">
                  <Phone size={17} />
                </span>

                <div>
                  <h4 className="text-[12px] font-bold text-white">
                    {t.phoneTitle}
                  </h4>

                  <a
                    href="tel:+917588301011"
                    className="mt-1 inline-block text-[12px] text-[#B1C0B2] transition-colors hover:text-[#FFD93D]"
                  >
                    +91 7588301011
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.06] text-[#FFD93D]">
                  <FaWhatsapp size={17} />
                </span>

                <div>
                  <h4 className="text-[12px] font-bold text-white">
                    {t.whatsappTitle}
                  </h4>

                  <a
                    href="https://wa.me/917588301011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[12px] text-[#B1C0B2] transition-colors hover:text-[#FFD93D]"
                  >
                    {t.message}
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}

      <div className="relative z-10 border-t border-white/10 bg-[#0C1C12]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-4 text-center sm:px-8 md:flex-row md:text-left lg:px-10 xl:px-12">
          <p className="text-[11px] leading-5 text-[#91A795]">
            © {year} Ganesh Nisal. {t.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="text-[11px] text-[#91A795] transition-colors hover:text-[#FFD93D]"
            >
              {t.links[0][0]}
            </Link>

            <span className="text-white/20">|</span>

            <Link
              to="/about"
              className="text-[11px] text-[#91A795] transition-colors hover:text-[#FFD93D]"
            >
              {t.links[1][0]}
            </Link>

            <span className="text-white/20">|</span>

            <Link
              to="/contact"
              className="text-[11px] text-[#91A795] transition-colors hover:text-[#FFD93D]"
            >
              {t.links[6][0]}
            </Link>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute bottom-[80px] right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD93D] text-[#102519] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:right-8 lg:right-10"
      >
        <ArrowUp size={19} strokeWidth={2.3} />
      </button>
    </footer>
  );
}
