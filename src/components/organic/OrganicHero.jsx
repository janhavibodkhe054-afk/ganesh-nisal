
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Sprout,
  Leaf,
  Droplets,
  MoveDown,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "ORGANIC FARMING & SOIL HEALTH",
    heading1: "सेंद्रिय शेती —",
    heading2: "निरोगी माती, समृद्ध शेती!",
    p1: "सेंद्रिय शेती ही मातीचे आरोग्य, जैवविविधता आणि नैसर्गिक संसाधनांच्या योग्य व्यवस्थापनाला महत्त्व देणारी शेती पद्धती आहे.",
    p2: "या विभागातून सेंद्रिय शेतीची मूलभूत तत्त्वे, जमिनीची सुपीकता, मातीतील सजीवांचे कार्य आणि पिकांच्या व्यवस्थापनाशी संबंधित महत्त्वाचे विषय समजून घेता येतील",
    explore: "सेंद्रिय शेती जाणून घ्या",
    soil: "मातीचे आरोग्य",
    biodiversity: "जैवविविधता",
    resources: "नैसर्गिक संसाधने",
    soilLabel: "LIVING SOIL",
  },
  en: {
    eyebrow: "ORGANIC FARMING & SOIL HEALTH",
    heading1: "Organic Farming —",
    heading2: "Healthy Soil, Prosperous Farming!",
    p1: "Organic farming is an agricultural approach that emphasizes soil health, biodiversity and the responsible management of natural resources.",
    p2: "This section explores the fundamental principles of organic farming, soil fertility, the role of soil organisms and important aspects of crop management.",
    explore: "Explore Organic Farming",
    soil: "Soil Health",
    biodiversity: "Biodiversity",
    resources: "Natural Resources",
    soilLabel: "LIVING SOIL",
  },
  hi: {
    eyebrow: "ORGANIC FARMING & SOIL HEALTH",
    heading1: "जैविक खेती —",
    heading2: "स्वस्थ मिट्टी, समृद्ध खेती!",
    p1: "जैविक खेती एक ऐसी कृषि पद्धति है जो मिट्टी के स्वास्थ्य, जैव विविधता और प्राकृतिक संसाधनों के उचित प्रबंधन को महत्व देती है।",
    p2: "इस विभाग में जैविक खेती के मूल सिद्धांत, मिट्टी की उर्वरता, मिट्टी में रहने वाले जीवों की भूमिका और फसल प्रबंधन से जुड़े महत्वपूर्ण विषय समझे जा सकते हैं।",
    explore: "जैविक खेती जानें",
    soil: "मिट्टी का स्वास्थ्य",
    biodiversity: "जैव विविधता",
    resources: "प्राकृतिक संसाधन",
    soilLabel: "LIVING SOIL",
  },
};

const EASE = [0.22, 1, 0.36, 1];

const ROOTS = [
  { d: "M 400 8 C 390 48 370 76 350 110 C 340 140 315 166 300 195", delay: 0.9 },
  { d: "M 400 8 C 420 45 440 75 450 110 C 470 140 485 165 500 190", delay: 1.05 },
  { d: "M 400 12 C 400 65 402 120 398 210", delay: 0.85 },
  { d: "M 390 75 C 350 82 325 92 305 110", delay: 1.2 },
  { d: "M 420 85 C 450 92 480 108 510 120", delay: 1.3 },
];

export default function OrganicHero() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: false,
    amount: 0.12,
  });

  const visible = Boolean(reduceMotion) || inView;

  const reveal = (delay = 0, y = 22) => ({
    initial: { opacity: 0, y },
    animate: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : y,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: visible && !reduceMotion ? delay : 0,
      ease: EASE,
    },
  });

  const features = [
    { Icon: Sprout, label: t.soil },
    { Icon: Leaf, label: t.biodiversity },
    { Icon: Droplets, label: t.resources },
  ];

  return (
    <section
      ref={sectionRef}
      id="organic-hero"
      aria-labelledby="organic-hero-heading"
      className="relative isolate overflow-hidden bg-[#102519] text-white"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(#C7E8BD 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#2E8742]/20 blur-[110px]"
      />

      {/* HEADING */}

      <div className="relative mx-auto max-w-[1100px] px-5 pt-14 text-center sm:px-8 sm:pt-16 lg:pt-20">

        <motion.div
          {...reveal(0)}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-[1px] w-8 bg-[#80B77C]" />

          <span className="text-[10px] font-extrabold tracking-[2px] text-[#A9D5A1]">
            {t.eyebrow}
          </span>

          <span className="h-[1px] w-8 bg-[#80B77C]" />
        </motion.div>

        <h1
          id="organic-hero-heading"
          className="text-[clamp(2.1rem,3.8vw,3.65rem)] font-extrabold leading-[1.2] tracking-[-0.8px]"
        >
          <motion.span {...reveal(0.1)} className="block">
            {t.heading1}
          </motion.span>

          <motion.span
            {...reveal(0.2)}
            className="block text-[#FFD93D]"
          >
            {t.heading2}
          </motion.span>
        </h1>

        <motion.p
          {...reveal(0.3)}
          className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[29px] text-[#D0E2D0]"
        >
          {t.p1}
        </motion.p>

        <motion.p
          {...reveal(0.4)}
          className="mx-auto mt-3 max-w-[780px] text-[13px] leading-[27px] text-[#9EB9A2] sm:text-[14px]"
        >
          {t.p2}
        </motion.p>

        <motion.a
          {...reveal(0.5)}
          href="#organic-principles"
          className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#FFD93D] px-6 py-3.5 text-[12px] font-extrabold text-[#173923] transition-colors hover:bg-white"
        >
          {t.explore}

          <ArrowDown
            size={17}
            className="transition-transform group-hover:translate-y-1"
          />
        </motion.a>
      </div>

      {/* GROWING PLANT + SOIL ILLUSTRATION */}

      <div className="relative mx-auto mt-8 max-w-[1150px] px-4 sm:mt-10">

        {/* ABOVE SOIL PLANT */}

        <div className="relative z-10 mx-auto flex h-[120px] w-[220px] items-end justify-center sm:h-[150px]">

          <motion.svg
            viewBox="0 0 220 160"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {/* STEM */}

            <motion.path
              d="M110 155 C110 112 112 78 110 30"
              fill="none"
              stroke="#83CB69"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: visible ? 1 : 0 }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: visible ? 0.55 : 0,
              }}
            />

            {/* LEFT LEAF */}

            <motion.path
              d="M109 96 C75 98 52 77 42 51 C75 49 99 61 109 96Z"
              fill="#65B95B"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0,
              }}
              style={{ transformOrigin: "109px 96px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: visible ? 1.1 : 0,
                ease: EASE,
              }}
            />

            {/* RIGHT LEAF */}

            <motion.path
              d="M110 73 C132 40 160 34 184 40 C170 70 146 86 110 73Z"
              fill="#9DDC78"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0,
              }}
              style={{ transformOrigin: "110px 73px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: visible ? 1.25 : 0,
                ease: EASE,
              }}
            />

            {/* TOP LEAF */}

            <motion.path
              d="M110 48 C89 27 95 8 111 0 C128 17 130 34 110 48Z"
              fill="#B9E58B"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0,
              }}
              style={{ transformOrigin: "110px 48px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: visible ? 1.4 : 0,
                ease: EASE,
              }}
            />
          </motion.svg>
        </div>

        {/* SOIL LINE */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: visible ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: visible ? 0.55 : 0,
            ease: EASE,
          }}
          className="relative z-20 h-[4px] w-full rounded-full bg-[#B68A52]"
        />

        {/* SOIL CROSS SECTION */}

        <div className="relative h-[170px] overflow-hidden rounded-b-[28px] bg-[#49301F] sm:h-[210px]">

          {/* SOIL LAYERS */}

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: visible ? 1 : 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: visible ? 0.5 : 0,
              ease: EASE,
            }}
            style={{ transformOrigin: "top" }}
            className="absolute inset-0"
          >
            <div className="h-[28%] bg-[#6D472C]" />
            <div className="h-[32%] bg-[#563822]" />
            <div className="h-[40%] bg-[#3F2B1D]" />
          </motion.div>

          {/* ROOT SYSTEM */}

          <svg
            viewBox="0 0 800 220"
            preserveAspectRatio="xMidYMin meet"
            className="absolute inset-0 z-10 h-full w-full"
            aria-hidden="true"
          >
            {ROOTS.map((root, index) => (
              <motion.path
                key={index}
                d={root.d}
                fill="none"
                stroke="#D5AE78"
                strokeWidth={index === 2 ? 3.5 : 2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: visible ? 1 : 0,
                  opacity: visible ? 0.95 : 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.15,
                  delay: visible ? root.delay : 0,
                  ease: "easeOut",
                }}
              />
            ))}
          </svg>

          {/* SOIL PARTICLES */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.17]"
            style={{
              backgroundImage:
                "radial-gradient(#E8C395 1px, transparent 1px)",
              backgroundSize: "22px 20px",
            }}
          />

          <motion.span
            {...reveal(1.15, 12)}
            className="absolute bottom-5 left-6 z-20 text-[10px] font-extrabold tracking-[2px] text-[#E3C49C] sm:left-10"
          >
            {t.soilLabel}
          </motion.span>
        </div>

        {/* FEATURE STRIP */}

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 py-6 sm:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.Icon;

            return (
              <motion.div
                key={index}
                {...reveal(0.7 + index * 0.12, 16)}
                className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3"
              >
                <Icon
                  size={19}
                  className="shrink-0 text-[#A9D88E]"
                />

                <span className="text-[11px] font-bold leading-[20px] text-[#D6E8D4] sm:text-[13px]">
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
