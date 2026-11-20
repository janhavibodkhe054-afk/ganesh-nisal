
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Trophy,
  Award,
  Star,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const AWARD_IMAGE = "/images/ganesh-nisal-award.webp";

const translations = {
  mr: {
    eyebrow: "AWARDS & RECOGNITION",
    heading1: "कार्याची दखल,",
    heading2: "प्रयत्नांचा सन्मान!",
    award: "Business Excellence Award",
    description1:
      "गणेश निसाळ यांना Business Excellence Award ने सन्मानित करण्यात आले आहे.",
    description2:
      "हा पुरस्कार त्यांच्या उद्योजकतेच्या प्रवासातील एक महत्त्वाचा सन्मान आहे.",
    cta: "पुरस्कार व प्रसिद्धी",
    photoLabel: "सन्मानाचा अभिमानास्पद क्षण",
    recognition: "A MOMENT OF RECOGNITION",
  },

  en: {
    eyebrow: "AWARDS & RECOGNITION",
    heading1: "Recognising the Work,",
    heading2: "Honouring the Effort!",
    award: "Business Excellence Award",
    description1:
      "Ganesh Nisal has been honoured with the Business Excellence Award.",
    description2:
      "This award marks an important recognition in his entrepreneurial journey.",
    cta: "Awards & Recognition",
    photoLabel: "A Proud Moment of Recognition",
    recognition: "A MOMENT OF RECOGNITION",
  },

  hi: {
    eyebrow: "AWARDS & RECOGNITION",
    heading1: "कार्य को पहचान,",
    heading2: "प्रयासों का सम्मान!",
    award: "Business Excellence Award",
    description1:
      "गणेश निसाल को Business Excellence Award से सम्मानित किया गया है।",
    description2:
      "यह पुरस्कार उनकी उद्यमिता की यात्रा में एक महत्वपूर्ण सम्मान है।",
    cta: "पुरस्कार और प्रसिद्धि",
    photoLabel: "सम्मान का गौरवपूर्ण क्षण",
    recognition: "A MOMENT OF RECOGNITION",
  },
};

const ease = [0.22, 1, 0.36, 1];

function Laurel({ flip = false }) {
  return (
    <svg
      viewBox="0 0 62 140"
      fill="none"
      aria-hidden="true"
      className={`h-[72px] w-[32px] sm:h-[86px] sm:w-[39px] ${
        flip ? "-scale-x-100" : ""
      }`}
    >
      <path
        d="M52 130C17 109 8 75 24 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {[
        [43, 112, -38],
        [28, 95, -45],
        [20, 77, -52],
        [18, 59, -45],
        [22, 41, -35],
      ].map(([x, y, rotation], index) => (
        <ellipse
          key={index}
          cx={x}
          cy={y}
          rx="7"
          ry="15"
          fill="currentColor"
          transform={`rotate(${rotation} ${x} ${y})`}
        />
      ))}

      {[
        [22, 115, 45],
        [13, 98, 40],
        [8, 78, 35],
        [10, 58, 28],
      ].map(([x, y, rotation], index) => (
        <ellipse
          key={`inner-${index}`}
          cx={x}
          cy={y}
          rx="6"
          ry="13"
          fill="currentColor"
          transform={`rotate(${rotation} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function RecognitionSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 18, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="relative isolate overflow-hidden bg-[#F8F6EE] py-10 sm:py-12 lg:py-14"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-52 h-[500px] w-[500px] rounded-full bg-[#EBDDB6]/35 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-44 h-[400px] w-[400px] rounded-full bg-[#E2EDE0]/50 blur-[100px]"
      />

      {/* TOP GOLD ACCENT */}

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[3px] w-[140px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C6A154] to-transparent"
      />

      {/* MAIN GRID - REDUCED MIDDLE GAP */}

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-7 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:px-10 xl:gap-10 xl:px-12">
        {/* LEFT CONTENT */}

        <div className="min-w-0">
          {/* EYEBROW */}

          <motion.div
            {...reveal(0.05)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCC99A] bg-white/70 text-[#B28A39]">
              <Trophy size={17} strokeWidth={1.8} />
            </span>

            <span className="text-[10px] font-extrabold tracking-[2px] text-[#A0803E]">
              {t.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="recognition-heading"
            key={`recognition-heading-${language}`}
            {...reveal(0.1)}
            className="text-[clamp(1.95rem,3vw,3.1rem)] font-extrabold leading-[1.28] tracking-[-0.7px] text-[#1E3D29]"
          >
            <span className="block">{t.heading1}</span>

            <span className="block text-[#B18A3D]">
              {t.heading2}
            </span>
          </motion.h2>

          {/* AWARD NAME */}

          <motion.div
            {...reveal(0.16)}
            className="mt-5 flex max-w-[500px] items-center gap-4 rounded-[17px] border border-[#E7DAB8] bg-white/80 p-4 shadow-[0_8px_30px_rgba(89,70,31,0.04)]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#F7EDCF] text-[#B28A39]">
              <Award size={25} strokeWidth={1.6} />
            </span>

            <div className="min-w-0">
              <span className="mb-1 block text-[9px] font-bold tracking-[1.5px] text-[#9C8A62]">
                RECOGNITION
              </span>

              <h3 className="text-[16px] font-extrabold leading-[1.4] text-[#29432D] sm:text-[18px]">
                {t.award}
              </h3>
            </div>

            <Star
              size={18}
              fill="#C6A154"
              className="ml-auto hidden shrink-0 text-[#C6A154] sm:block"
            />
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            key={`description-${language}`}
            {...reveal(0.2)}
            className="mt-5 max-w-[550px] space-y-3 text-[13px] leading-[26px] text-[#68766A] sm:text-[14px]"
          >
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </motion.div>

          

          
        </div>

        {/* RIGHT AWARD PANEL */}

        <motion.div
          {...reveal(0.12, 16)}
          className="relative w-full min-w-0"
        >
          {/* AWARD SHOWCASE */}

          <div className="relative overflow-hidden rounded-[22px] border border-[#D5B76C]/40 bg-[#193925] p-4 shadow-[0_20px_55px_rgba(27,51,30,0.14)] sm:p-5">
            {/* GOLDEN SPOTLIGHT */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[-150px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D9B45E]/15 blur-[90px]"
            />

            {/* PANEL HEADER */}

            <div className="relative mb-3 flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-[#E6C675]"
                />

                <span className="text-[9px] font-bold tracking-[1.6px] text-[#E6C675]">
                  {t.recognition}
                </span>
              </div>

              <Trophy
                size={19}
                strokeWidth={1.5}
                className="text-[#E6C675]"
              />
            </div>

            {/* AWARD PHOTO */}

            <div className="group relative h-[250px] overflow-hidden rounded-[14px] border border-[#D8BB78]/35 bg-[#31543B] sm:h-[290px] lg:h-[310px]">
              <img
                src={AWARD_IMAGE}
                alt="Ganesh Nisal receiving the Business Excellence Award"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/75 via-transparent to-transparent" />

              {/* PHOTO CAPTION */}

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[16px] font-extrabold leading-[1.4] text-white sm:text-[19px]">
                  {t.photoLabel}
                </p>
              </div>
            </div>

            {/* AWARD FOOTER */}

            <div className="relative flex items-center justify-center gap-3 py-2.5 text-[#D7B86B]">
              <Laurel />

              <div className="flex flex-col items-center text-center">
                <Trophy
                  size={24}
                  strokeWidth={1.5}
                  className="mb-1.5 text-[#E6C675]"
                />

                <span className="text-[10px] font-extrabold tracking-[1.2px] text-[#F4DEAA] sm:text-[12px]">
                  BUSINESS EXCELLENCE
                </span>

                <span className="mt-1 text-[9px] font-semibold tracking-[2px] text-[#B9C8B8]">
                  AWARD
                </span>
              </div>

              <Laurel flip />
            </div>
          </div>

          {/* GOLD CORNER */}

          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-[75px] w-[75px] rounded-[18px] bg-[#D2B065]"
          />
        </motion.div>
      </div>
    </section>
  );
}
