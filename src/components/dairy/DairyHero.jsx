
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  Milk,
  ArrowUpRight,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const HERO_IMAGE = "https://royalfarms.co.in/wp-content/uploads/2026/02/Cow-Dairy-Farm.webp";

const CONTENT = {
  mr: {
    eyebrow: "DAIRY BUSINESS",
    heading1: "शेतीला जोडधंद्याची साथ",
    heading2: "दुग्धव्यवसायातून उद्योजकतेकडे!",
    p1:
      "शेतीसोबत दुग्धव्यवसायाची जोड देत गणेश निसाळ यांनी कृषी उद्योजकतेच्या प्रवासात आणखी एक पाऊल टाकले.",
    p2:
      "त्यांचे दुग्धव्यवसायातील उपक्रम आणि प्रत्यक्ष कामकाज जाणून घ्या.",
    button: "दुग्धव्यवसाय पाहा",
    label: "AGRICULTURE × DAIRY",
  },

  en: {
    eyebrow: "DAIRY BUSINESS",
    heading1: "Farming Meets Dairy",
    heading2: "A Step Towards Entrepreneurship!",
    p1:
      "Alongside farming, Ganesh Nisal has embraced dairy as part of his agricultural entrepreneurship journey.",
    p2:
      "Explore his dairy activities and practical operations.",
    button: "Explore Dairy Business",
    label: "AGRICULTURE × DAIRY",
  },

  hi: {
    eyebrow: "DAIRY BUSINESS",
    heading1: "खेती के साथ डेयरी व्यवसाय",
    heading2: "उद्यमिता की ओर एक कदम!",
    p1:
      "खेती के साथ डेयरी व्यवसाय को जोड़कर गणेश निसाळ ने कृषि उद्यमिता की दिशा में एक और कदम बढ़ाया है।",
    p2:
      "उनके डेयरी व्यवसाय से जुड़े कार्य और गतिविधियाँ जानें।",
    button: "डेयरी व्यवसाय देखें",
    label: "AGRICULTURE × DAIRY",
  },
};

const EASE = [0.22, 1, 0.36, 1];

export default function DairyHero() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const inView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  const visible = Boolean(reduceMotion) || inView;

  const reveal = (delay = 0, y = 24) => ({
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

  const scrollToContent = () => {
    document.getElementById("dairy-overview")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="dairy-hero"
      aria-labelledby="dairy-hero-heading"
      className="relative overflow-hidden bg-[#102519]"
    >
      <div className="grid min-h-[520px] lg:grid-cols-[1fr_1fr]">

        {/* LEFT CONTENT */}

        <div className="relative flex items-center px-5 py-16 sm:px-10 lg:px-14 xl:px-20">

          {/* BACKGROUND DETAILS */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-0 h-[350px] w-[350px] rounded-full border-[70px] border-white/[0.025]"
          />

          <div className="relative z-10 max-w-[650px]">
            <motion.div
              {...reveal(0)}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD93D] text-[#173923]">
                <Milk size={21} />
              </span>

              <span className="text-[12px] font-extrabold tracking-[2px] text-[#B8D6BC]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              {...reveal(0.1)}
              id="dairy-hero-heading"
              className="text-[clamp(2rem,3.4vw,3.4rem)] font-extrabold leading-[1.2] text-white"
            >
              {t.heading1}

              <span className="mt-2 block text-[#FFD93D]">
                {t.heading2}
              </span>
            </motion.h1>

            <motion.p
              {...reveal(0.2)}
              className="mt-6 max-w-[540px] text-[17px] font-medium leading-[31px] text-[#D5E4D5]"
            >
              {t.p1}
            </motion.p>

            <motion.p
              {...reveal(0.3)}
              className="mt-3 max-w-[520px] text-[15px] leading-[28px] text-[#A8C2AC]"
            >
              {t.p2}
            </motion.p>

            <motion.button
              {...reveal(0.4)}
              type="button"
              onClick={scrollToContent}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFD93D] px-6 py-3.5 text-[14px] font-extrabold text-[#173923] transition-all duration-300 hover:bg-white"
            >
              {t.button}

              <ArrowDownRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.button>

            <motion.div
              {...reveal(0.5)}
              className="mt-9 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#6C9973]" />

              <span className="text-[11px] font-bold tracking-[1.5px] text-[#87B18C]">
                {t.label}
              </span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 1.05,
          }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            ease: EASE,
          }}
          className="relative h-[320px] overflow-hidden bg-[#294B30] sm:h-[420px] lg:h-auto lg:min-h-[520px]"
        >
          {!imageFailed ? (
            <img
              src={HERO_IMAGE}
              alt="Ganesh Nisal dairy farming"
              loading="eager"
              onError={() => setImageFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/40">
              <ImageOff size={48} />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#102519]/30 via-transparent to-transparent" />

          {/* IMAGE CORNER LABEL */}

          <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/30 bg-[#102519]/65 px-4 py-2.5 text-white backdrop-blur-sm">
            <Milk size={17} className="text-[#FFD93D]" />

            <span className="text-[11px] font-extrabold tracking-[1.3px]">
              DAIRY FARMING
            </span>

            <ArrowUpRight size={15} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
