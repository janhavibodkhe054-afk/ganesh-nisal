
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Sprout,
  Milk,
  FlaskConical,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Use a local image for reliable loading.
// Place your dairy image in public/images/dairy-farming.webp
const IMAGE = "/images/dairy-farming.webp";

// Optional external fallback
const FALLBACK_IMAGE =
  "https://i.pinimg.com/1200x/5e/d1/f0/5ed1f023393117b7caa3bc1447606f4c.jpg";

const translations = {
  mr: {
    eyebrow: "FARMING & ENTREPRENEURSHIP",
    heading1: "शेतीच्या पलीकडे",
    heading2: "उद्योजकतेची वाटचाल",
    paragraph1:
      "शेतीसोबत आणखी एका कृषीपूरक क्षेत्रात काम करण्याच्या दृष्टीने गणेश निसाळ यांनी दुग्धव्यवसायाची निवड केली.",
    paragraph2:
      "दुग्धव्यवसाय हा त्यांच्या कृषी उद्योजकतेच्या प्रवासातील एक महत्त्वाचा भाग आहे.",
    paragraph3:
      "एकाच क्षेत्रापुरते मर्यादित न राहता शेतीशी संबंधित वेगवेगळ्या उपक्रमांमध्ये सहभागी होण्याची त्यांची आवड या प्रवासातून दिसून येते.",
    button: "माझ्या दुग्धव्यवसायाबद्दल जाणून घ्या",
    imageLabel: "FARMING & DAIRY BUSINESS",
    highlights: ["शेती", "दुग्धव्यवसाय", "कृषी प्रयोग"],
  },

  en: {
    eyebrow: "FARMING & ENTREPRENEURSHIP",
    heading1: "Beyond Farming,",
    heading2: "Towards Entrepreneurship",
    paragraph1:
      "Ganesh Nisal chose dairy farming to explore another agriculture-related business alongside farming.",
    paragraph2:
      "The dairy business is an important part of his agricultural entrepreneurship journey.",
    paragraph3:
      "His interest in participating in different agriculture-related activities, rather than limiting himself to a single field, is reflected in this journey.",
    button: "Explore My Dairy Business",
    imageLabel: "FARMING & DAIRY BUSINESS",
    highlights: [
      "Farming",
      "Dairy Business",
      "Agricultural Experiments",
    ],
  },

  hi: {
    eyebrow: "FARMING & ENTREPRENEURSHIP",
    heading1: "खेती से आगे,",
    heading2: "उद्यमिता की ओर",
    paragraph1:
      "खेती के साथ एक अन्य कृषि-संबंधित क्षेत्र में काम करने के उद्देश्य से गणेश निसाल ने डेयरी व्यवसाय को चुना।",
    paragraph2:
      "डेयरी व्यवसाय उनकी कृषि उद्यमिता की यात्रा का एक महत्वपूर्ण हिस्सा है।",
    paragraph3:
      "एक ही क्षेत्र तक सीमित न रहकर खेती से जुड़े विभिन्न उपक्रमों में भाग लेने की उनकी रुचि इस यात्रा से दिखाई देती है।",
    button: "मेरे डेयरी व्यवसाय के बारे में जानें",
    imageLabel: "FARMING & DAIRY BUSINESS",
    highlights: ["खेती", "डेयरी व्यवसाय", "कृषि प्रयोग"],
  },
};

const icons = [Sprout, Milk, FlaskConical];
const ease = [0.22, 1, 0.36, 1];

export default function FarmingEntrepreneurship() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const sectionRef = useRef(null);

  // Re-triggers whenever the section enters the viewport.
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
  });

  const [imageSource, setImageSource] = useState(IMAGE);
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (imageSource !== FALLBACK_IMAGE) {
      setImageSource(FALLBACK_IMAGE);
    } else {
      setImageFailed(true);
    }
  };

  const reveal = (delay = 0, x = 0) => ({
    initial: false,
    animate:
      reduceMotion || isInView
        ? { opacity: 1, y: 0, x: 0 }
        : { opacity: 0, y: 22, x },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion || !isInView ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      ref={sectionRef}
      id="farming-entrepreneurship"
      aria-labelledby="farming-entrepreneurship-heading"
      className="relative isolate overflow-hidden bg-[#102519] py-12 sm:py-14 lg:py-16"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-28 h-[380px] w-[380px] rounded-full bg-[#43B649]/10 blur-[95px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-9 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* LEFT CONTENT */}

          <div>
            {/* EYEBROW */}

            <motion.div
              {...reveal(0, -12)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#FFD93D]" />

              <span className="text-[10px] font-extrabold tracking-[2px] text-[#B9D9AE]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}

            <h2
              id="farming-entrepreneurship-heading"
              className="max-w-[590px] text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.22] tracking-[-0.7px] text-white"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  {...reveal(0.08, -15)}
                  className="block"
                >
                  {t.heading1}
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  {...reveal(0.16, -15)}
                  className="block text-[#FFD93D]"
                >
                  {t.heading2}
                </motion.span>
              </span>
            </h2>

            {/* ACCENT LINE */}

            <motion.div
              initial={false}
              animate={{
                scaleX: reduceMotion || isInView ? 1 : 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: isInView ? 0.22 : 0,
                ease,
              }}
              style={{ transformOrigin: "left" }}
              className="mt-6 h-[3px] w-14 rounded-full bg-[#43B649]"
            />

            {/* DESCRIPTION */}

            <motion.p
              {...reveal(0.25)}
              className="mt-6 max-w-[550px] text-[16px] font-semibold leading-[29px] text-white/90 sm:text-[17px]"
            >
              {t.paragraph1}
            </motion.p>

            <motion.p
              {...reveal(0.32)}
              className="mt-4 max-w-[550px] text-[13px] leading-[27px] text-white/65 sm:text-[14px]"
            >
              {t.paragraph2}
            </motion.p>

            <motion.p
              {...reveal(0.39)}
              className="mt-3 max-w-[550px] text-[13px] leading-[27px] text-white/65 sm:text-[14px]"
            >
              {t.paragraph3}
            </motion.p>

            {/* CTA */}

            <motion.div {...reveal(0.46)}>
              <Link
                to="/dairy-business"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#FFD93D] px-6 py-3.5 text-[12px] font-extrabold text-[#173923] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                {t.button}

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE + CARDS */}

          <div className="relative">
            {/* IMAGE FRAME */}

            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#234631] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <div className="relative h-[290px] overflow-hidden sm:h-[350px] lg:h-[360px]">
                {/* PHOTO — ALWAYS RENDERED */}

                {!imageFailed ? (
                  <motion.img
                    src={imageSource}
                    onError={handleImageError}
                    alt="Ganesh Nisal - Dairy Farming and Agriculture"
                    loading="eager"
                    initial={false}
                    animate={{
                      scale:
                        reduceMotion || isInView ? 1 : 1.12,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.5,
                      ease,
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#234631] text-white/70">
                    <ImageOff size={32} />
                    <span className="text-xs">
                      Dairy Farming
                    </span>
                  </div>
                )}

                {/* GREEN CURTAIN REVEAL */}

                {!reduceMotion && (
                  <motion.div
                    aria-hidden="true"
                    initial={false}
                    animate={{
                      scaleX: isInView ? 0 : 1,
                    }}
                    transition={{
                      duration: isInView ? 1.05 : 0.2,
                      delay: isInView ? 0.1 : 0,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    style={{ transformOrigin: "right" }}
                    className="pointer-events-none absolute inset-0 z-20 bg-[#2C6940]"
                  />
                )}

                {/* GRADIENT */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07180E]/85 via-transparent to-transparent" />

                {/* IMAGE LABEL */}

                <motion.div
                  {...reveal(0.65)}
                  className="absolute bottom-6 left-6 z-10"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[10px] font-bold tracking-[1.2px] text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD93D]" />
                    {t.imageLabel}
                  </span>
                </motion.div>

                {/* CORNER ACCENT */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 h-12 w-12 border-r-2 border-t-2 border-[#FFD93D]/70"
                />
              </div>
            </div>

            {/* HIGHLIGHT CARDS */}

            <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
              {t.highlights.map((label, index) => {
                const Icon = icons[index];

                return (
                  <motion.div
                    key={`${language}-${index}`}
                    {...reveal(0.35 + index * 0.12)}
                    className="flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.055] px-2 py-3 text-center transition-colors duration-300 hover:bg-white/[0.1]"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-[#FFD93D]"
                    />

                    <span className="text-[11px] font-semibold leading-[17px] text-white/85">
                      {label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
