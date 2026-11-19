
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "GET IN TOUCH",
    heading: "चला, संवाद साधूया!",
    description:
      "सेंद्रिय शेती, दुग्धव्यवसाय, कृषीविषयक उपक्रम आणि सहकार्यासाठी गणेश निसाळ यांच्याशी संपर्क साधा.",
    enquiry: "संपर्क फॉर्म भरा",
    whatsapp: "WhatsApp वर संपर्क",
    location: "नाशिक, महाराष्ट्र",
  },

  en: {
    eyebrow: "GET IN TOUCH",
    heading: "Let's Connect!",
    description:
      "Connect with Ganesh Nisal for organic farming, dairy business, agricultural initiatives, and collaborations.",
    enquiry: "Send an Enquiry",
    whatsapp: "Connect on WhatsApp",
    location: "Nashik, Maharashtra",
  },

  hi: {
    eyebrow: "GET IN TOUCH",
    heading: "आइए, संवाद करें!",
    description:
      "जैविक खेती, डेयरी व्यवसाय, कृषि गतिविधियों और सहयोग के लिए गणेश निसाळ से संपर्क करें।",
    enquiry: "संपर्क फॉर्म भरें",
    whatsapp: "WhatsApp पर संपर्क करें",
    location: "नासिक, महाराष्ट्र",
  },
};

export default function ContactHero() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;
  const reduceMotion = useReducedMotion();

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="contact-hero"
      className="relative isolate overflow-hidden bg-[#102519] text-white"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(67,182,73,0.16),transparent_65%)]" />

        <div className="absolute -left-28 -top-40 h-[360px] w-[360px] rounded-full border border-white/[0.07]" />

        <div className="absolute -right-28 -bottom-44 h-[400px] w-[400px] rounded-full border border-[#43B649]/20" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.035]" />
      </div>

      {/* MAIN CONTENT */}

      <div className="relative mx-auto max-w-[1150px] px-5 pb-8 pt-12 text-center sm:px-8 sm:pb-9 sm:pt-14 lg:pb-10 lg:pt-16">

        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 15 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
        >
          {/* EYEBROW */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#FFD93D]" />

            <span className="text-[11px] font-extrabold tracking-[2px] text-[#FFD93D]">
              {t.eyebrow}
            </span>

            <span className="h-px w-7 bg-[#FFD93D]" />
          </div>

          {/* HEADING */}

          <h1 className="text-[clamp(2.2rem,4.2vw,3.8rem)] font-extrabold leading-[1.15] tracking-[-1px] text-white">
            {t.heading}
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-[670px] text-[15px] leading-[27px] text-white/70 sm:text-[16px]">
            {t.description}
          </p>

          {/* BUTTONS */}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-[7px] bg-[#FFD93D] px-6 text-[13px] font-extrabold text-[#173923] transition-colors hover:bg-white"
            >
              {t.enquiry}
              <ArrowDownRight size={17} />
            </button>

            <a
              href="https://wa.me/917588301011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-[7px] border border-white/25 px-6 text-[13px] font-bold text-white transition-colors hover:border-[#FFD93D] hover:text-[#FFD93D]"
            >
              <MessageCircle size={17} />
              {t.whatsapp}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* BOTTOM CONTACT INFO */}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-9 gap-y-3 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 text-[12px] text-white/65">
            <MapPin size={15} className="text-[#FFD93D]" />
            {t.location}
          </div>

          <a
            href="tel:+917588301011"
            className="flex items-center gap-2 text-[12px] text-white/65 transition-colors hover:text-white"
          >
            <Phone size={15} className="text-[#FFD93D]" />
            +91 7588301011
          </a>
        </div>
      </div>
    </section>
  );
}
