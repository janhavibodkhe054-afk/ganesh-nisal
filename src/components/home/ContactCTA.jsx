
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sprout } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  mr: {
    eyebrow: "LET'S CONNECT",
    heading1: "शेतीविषयक संवादासाठी",
    heading2: "संपर्कात राहूया!",
    description:
      "सेंद्रिय शेती, कृषी प्रयोग आणि संबंधित विषयांवरील माहिती व अपडेट्ससाठी संपर्क साधा.",
    cta: "संपर्क साधा",
  },

  en: {
    eyebrow: "LET'S CONNECT",
    heading1: "Let's Stay Connected",
    heading2: "Through Agriculture!",
    description:
      "Get in touch for information and updates on organic farming, agricultural experiments and related topics.",
    cta: "Get in Touch",
  },

  hi: {
    eyebrow: "LET'S CONNECT",
    heading1: "कृषि से जुड़े संवाद के लिए",
    heading2: "संपर्क में रहें!",
    description:
      "जैविक खेती, कृषि प्रयोगों और संबंधित विषयों की जानकारी एवं अपडेट्स के लिए संपर्क करें।",
    cta: "संपर्क करें",
  },
};

export default function ContactCTA() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="contact-cta"
      aria-labelledby="contact-cta-heading"
      className="relative isolate overflow-hidden bg-[#173923] py-10 sm:py-12 lg:py-14"
    >
      {/* BACKGROUND GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-32 h-[300px] w-[300px] rounded-full bg-[#43B649]/10 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-24 h-[320px] w-[320px] rounded-full bg-[#FFD93D]/10 blur-[90px]"
      />

      {/* SUBTLE CONTOUR PATTERN */}

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 350"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <path
            key={index}
            d={`M ${-200 + index * 50} 350
                C ${100 + index * 30} 150,
                  ${350 + index * 35} 430,
                  ${650 + index * 35} 180
                S ${1120 + index * 35} 20,
                  ${1650 + index * 40} 180`}
            fill="none"
            stroke="#D4F1C8"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          {/* LEFT CONTENT */}

          <div>
            <motion.div
              {...reveal(0)}
              className="mb-3 flex items-center gap-2.5"
            >
              <Sprout
                size={16}
                strokeWidth={1.8}
                className="text-[#FFD93D]"
              />

              <span className="text-[10px] font-extrabold tracking-[2px] text-[#C9DECB]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="contact-cta-heading"
              key={`contact-heading-${language}`}
              {...reveal(0.08)}
              className="text-[clamp(1.85rem,3vw,3rem)] font-extrabold leading-[1.25] tracking-[-0.6px] text-white"
            >
              <span className="block">{t.heading1}</span>

              <span className="block text-[#FFD93D]">
                {t.heading2}
              </span>
            </motion.h2>

            <motion.p
              key={`contact-description-${language}`}
              {...reveal(0.15)}
              className="mt-4 max-w-[580px] text-[13px] leading-[25px] text-[#D0E1D2] sm:text-[14px]"
            >
              {t.description}
            </motion.p>
          </div>

          {/* RIGHT CTA */}

          <motion.div
            {...reveal(0.2)}
            className="flex items-center lg:justify-end"
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-[50px] items-center gap-6 rounded-full bg-[#FFD93D] py-2 pl-6 pr-2 text-[13px] font-extrabold text-[#173923] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {t.cta}

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#173923] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
