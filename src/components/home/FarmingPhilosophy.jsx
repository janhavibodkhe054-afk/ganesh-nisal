
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Sprout,
  Leaf,
  Droplets,
  ScanEye,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const FARM_IMAGE = "https://i.pinimg.com/1200x/63/65/a6/6365a6d6fb1c478e2d1956d8fa979a7d.jpg";

const translations = {
  mr: {
    eyebrow: "MY FARMING PHILOSOPHY",
    heading1: "निरोगी माती,",
    heading2: "समृद्ध शेती!",
    description1:
      "जमिनीचे आरोग्य, मातीतील जैवविविधता आणि योग्य शेती व्यवस्थापन यांना सेंद्रिय शेतीमध्ये महत्त्वाचे स्थान आहे.",
    description2:
      "मातीतील सेंद्रिय पदार्थ, गांडुळांची भूमिका, पाण्याचा योग्य वापर आणि पिकांची नियमित पाहणी या विषयांवर गणेश निसाळ माहिती शेअर करतात.",
    cta: "सेंद्रिय शेती जाणून घ्या",
    highlights: [
      "मातीचे आरोग्य",
      "जैवविविधता",
      "पाणी व्यवस्थापन",
      "पीक निरीक्षण",
    ],
    imageLabel: "मातीपासून समृद्धीकडे",
    imageSub: "SOIL • NATURE • GROWTH",
  },

  en: {
    eyebrow: "MY FARMING PHILOSOPHY",
    heading1: "Healthy Soil,",
    heading2: "Prosperous Farming!",
    description1:
      "Soil health, biodiversity and proper farm management play an important role in organic farming.",
    description2:
      "Ganesh Nisal shares information about organic matter in soil, the role of earthworms, efficient water use and regular crop monitoring.",
    cta: "Explore Organic Farming",
    highlights: [
      "Soil Health",
      "Biodiversity",
      "Water Management",
      "Crop Monitoring",
    ],
    imageLabel: "From Soil to Growth",
    imageSub: "SOIL • NATURE • GROWTH",
  },

  hi: {
    eyebrow: "MY FARMING PHILOSOPHY",
    heading1: "स्वस्थ मिट्टी,",
    heading2: "समृद्ध खेती!",
    description1:
      "मिट्टी का स्वास्थ्य, जैव विविधता और उचित कृषि प्रबंधन जैविक खेती में महत्वपूर्ण भूमिका निभाते हैं।",
    description2:
      "गणेश निसाल मिट्टी में जैविक पदार्थ, केंचुओं की भूमिका, पानी के सही उपयोग और फसलों की नियमित निगरानी के बारे में जानकारी साझा करते हैं।",
    cta: "जैविक खेती के बारे में जानें",
    highlights: [
      "मिट्टी का स्वास्थ्य",
      "जैव विविधता",
      "जल प्रबंधन",
      "फसल निरीक्षण",
    ],
    imageLabel: "मिट्टी से समृद्धि तक",
    imageSub: "SOIL • NATURE • GROWTH",
  },
};

const icons = [Sprout, Leaf, Droplets, ScanEye];
const ease = [0.22, 1, 0.36, 1];

export default function FarmingPhilosophy() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="farming-philosophy"
      aria-labelledby="philosophy-heading"
      className="relative isolate overflow-hidden bg-[#173923] text-white"
    >
      {/* SUBTLE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -bottom-44 h-[400px] w-[400px] rounded-full bg-[#4C9B52]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:px-12 lg:py-16 xl:px-16">
        {/* LEFT CONTENT */}

        <div className="min-w-0">
          {/* EYEBROW */}

          <motion.div
            {...reveal(0)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#FFD93D]" />

            <span className="text-[10px] font-bold tracking-[2px] text-[#BFE5BC]">
              {t.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            key={`heading-${language}`}
            id="philosophy-heading"
            {...reveal(0.08)}
            className="text-[clamp(1.95rem,2.8vw,3rem)] font-extrabold leading-[1.28] tracking-[-0.6px]"
          >
            <span className="block">{t.heading1}</span>

            <span className="text-[#FFD93D]">
              {t.heading2}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            key={`description-${language}`}
            {...reveal(0.15)}
            className="mt-5 max-w-[630px] space-y-3 text-[13px] leading-[26px] text-[#D0DED1] sm:text-[14px] sm:leading-[27px]"
          >
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </motion.div>

          {/* COMPACT HIGHLIGHTS */}

          <motion.div
            {...reveal(0.2)}
            className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/15 pt-5 sm:grid-cols-4"
          >
            {t.highlights.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={`${language}-${index}`}
                  className="flex items-center gap-2.5"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#A6DE9C]"
                  />

                  <span className="text-[11px] font-semibold leading-[18px] text-white/90 sm:text-[12px]">
                    {item}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA */}

          <motion.div {...reveal(0.25)} className="mt-7">
            <Link
              to="/organic-farming"
              className="group inline-flex min-h-[48px] items-center gap-5 rounded-full bg-[#FFD93D] py-2 pl-5 pr-2 text-[12px] font-extrabold text-[#173923] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {t.cta}

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#173923] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}

        <motion.div
          {...reveal(0.12)}
          className="relative mx-auto w-full max-w-[530px]"
        >
          {/* OFFSET BORDER */}

          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-full w-full rounded-[24px_75px_24px_24px] border border-[#8FC98B]/40"
          />

          {/* IMAGE */}

          <div className="group relative h-[320px] overflow-hidden rounded-[24px_75px_24px_24px] bg-[#315A37] sm:h-[360px] lg:h-[390px]">
            <img
              src={FARM_IMAGE}
              alt="Healthy soil and organic farming"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071D10]/85 via-transparent to-transparent" />

            {/* IMAGE LABEL */}

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-8">
              <span className="mb-3 block h-[3px] w-9 bg-[#FFD93D]" />

              <p className="text-[20px] font-extrabold text-white sm:text-[23px]">
                {t.imageLabel}
              </p>

              <p className="mt-1.5 text-[9px] font-semibold tracking-[2px] text-white/70">
                {t.imageSub}
              </p>
            </div>
          </div>

          {/* YELLOW CORNER */}

          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 -z-10 h-16 w-16 rounded-[18px] bg-[#FFD93D]"
          />
        </motion.div>
      </div>

      {/* BOTTOM ACCENT */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 flex h-[3px] w-full"
      >
        <div className="h-full w-1/2 bg-[#43B649]" />
        <div className="h-full w-1/2 bg-[#FFD93D]" />
      </div>
    </section>
  );
}
