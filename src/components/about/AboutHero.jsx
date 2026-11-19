
import React from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  Leaf,
  MapPin,
  Sprout,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const HERO_IMAGE = "/images/ganesh-nisal-about.webp";

const translations = {
  mr: {
    eyebrow: "ABOUT GANESH NISAL",
    heading1: "मातीशी जोडलेली ओळख,",
    heading2: "नावीन्याकडे वाटचाल!",
    identity:
      "गणेश निसाळ — शेतकरी, सेंद्रिय शेती अभ्यासक, कृषी उद्योजक आणि Content Creator.",
    description:
      "महाराष्ट्रातील शेतीशी जोडलेले एक व्यक्तिमत्त्व, ज्यांच्या कार्यात शेतीचा अभ्यास, प्रत्यक्ष प्रयोग, कृषी उद्योजकता आणि डिजिटल माध्यमातून माहितीची देवाणघेवाण यांचा समावेश आहे.",
    location: "नाशिक, महाराष्ट्र",
    imageLabel: "GANESH NISAL",
    imageSub: "FARMER • ENTREPRENEUR • CREATOR",
    scroll: "माझ्याबद्दल अधिक जाणून घ्या",
  },

  en: {
    eyebrow: "ABOUT GANESH NISAL",
    heading1: "Rooted in the Soil,",
    heading2: "Moving Towards Innovation!",
    identity:
      "Ganesh Nisal — Farmer, Organic Farming Enthusiast, Agricultural Entrepreneur and Content Creator.",
    description:
      "A personality connected to farming in Maharashtra, whose work includes agricultural learning, practical experiments, agricultural entrepreneurship and sharing information through digital platforms.",
    location: "Nashik, Maharashtra",
    imageLabel: "GANESH NISAL",
    imageSub: "FARMER • ENTREPRENEUR • CREATOR",
    scroll: "Discover My Journey",
  },

  hi: {
    eyebrow: "ABOUT GANESH NISAL",
    heading1: "मिट्टी से जुड़ी पहचान,",
    heading2: "नवाचार की ओर कदम!",
    identity:
      "गणेश निसाल — किसान, जैविक खेती के अध्येता, कृषि उद्यमी और Content Creator।",
    description:
      "महाराष्ट्र की खेती से जुड़ा एक व्यक्तित्व, जिनके कार्य में खेती का अध्ययन, व्यावहारिक प्रयोग, कृषि उद्यमिता और डिजिटल माध्यमों से जानकारी साझा करना शामिल है।",
    location: "नाशिक, महाराष्ट्र",
    imageLabel: "GANESH NISAL",
    imageSub: "FARMER • ENTREPRENEUR • CREATOR",
    scroll: "मेरे बारे में और जानें",
  },
};

export default function AboutHero() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const t = translations[language] || translations.mr;

  // Premium staggered content animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const textVariants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: "105%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: reduceMotion ? 0 : 0.95,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageReveal = {
    hidden: reduceMotion
      ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
      : {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
        },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: reduceMotion ? 0 : 1.15,
        delay: reduceMotion ? 0 : 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const scrollToNext = () => {
    document.getElementById("about-story")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative isolate overflow-hidden bg-[#F8FAF5]"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[-100px] h-[360px] w-[360px] rounded-full bg-[#B7D9AD]/20 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[37%] bg-[#E9F0E5]/70 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#173923 1px, transparent 1px), linear-gradient(90deg, #173923 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* EYEBROW */}

            <motion.div
              variants={textVariants}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : { rotate: [0, -8, 0] }
                }
                transition={{
                  duration: 2.5,
                  delay: 1.3,
                  ease: "easeInOut",
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E0EEDB] text-[#2C7139]"
              >
                <Sprout size={16} />
              </motion.span>

              <span className="text-[10px] font-extrabold tracking-[2px] text-[#3F7948]">
                {t.eyebrow}
              </span>

              <span className="hidden h-px w-9 bg-[#B6CCB4] sm:block" />
            </motion.div>

            {/* HEADING — MASK REVEAL */}

            <h1
              id="about-hero-heading"
              key={`about-heading-${language}`}
              className="max-w-[730px] text-[clamp(2.05rem,3.4vw,3.55rem)] font-extrabold leading-[1.24] tracking-[-0.8px] text-[#173923]"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={headingVariants}
                  className="block"
                >
                  {t.heading1}
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={headingVariants}
                  className="block text-[#429849]"
                >
                  {t.heading2}
                </motion.span>
              </span>
            </h1>

            {/* IDENTITY */}

            <motion.div
              variants={textVariants}
              className="mt-6 border-l-[3px] border-[#FFD93D] pl-4"
            >
              <p className="max-w-[610px] text-[15px] font-bold leading-[28px] text-[#244A2E] sm:text-[16px]">
                {t.identity}
              </p>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              variants={textVariants}
              className="mt-5 max-w-[600px] text-[13px] leading-[27px] text-[#65736A] sm:text-[14px]"
            >
              {t.description}
            </motion.p>

            {/* BOTTOM DETAILS */}

            <motion.div
              variants={textVariants}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-2 text-[#52745A]">
                <MapPin
                  size={17}
                  className="text-[#3D8D48]"
                />

                <span className="text-[12px] font-semibold">
                  {t.location}
                </span>
              </div>

              <button
                type="button"
                onClick={scrollToNext}
                className="group inline-flex items-center gap-2 text-[12px] font-bold text-[#173923] transition-colors hover:text-[#43B649]"
              >
                {t.scroll}

                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT PORTRAIT */}

          <div className="relative mx-auto w-full max-w-[490px]">
            {/* OFFSET BACKGROUND SHAPE */}

            <motion.div
              aria-hidden="true"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 30, y: 20 }
              }
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-4 -right-4 top-7 w-full rounded-[110px_18px_18px_18px] bg-[#DCE9D4] sm:-bottom-5 sm:-right-5"
            />

            {/* CINEMATIC IMAGE REVEAL */}

            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="visible"
              className="relative h-[340px] overflow-hidden rounded-[110px_18px_18px_18px] bg-[#D7E5D3] sm:h-[420px] lg:h-[440px]"
            >
              <motion.img
                src={HERO_IMAGE}
                alt="Ganesh Nisal - Farmer and Organic Farming Educator"
                fetchPriority="high"
                initial={
                  reduceMotion
                    ? false
                    : { scale: 1.13 }
                }
                animate={{ scale: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.6,
                  delay: reduceMotion ? 0 : 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102519]/85 via-transparent to-transparent" />

              {/* PHOTO LABEL */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.9,
                }}
                className="absolute bottom-6 left-6 right-5"
              >
                <p className="text-[22px] font-extrabold tracking-[-0.5px] text-white">
                  {t.imageLabel}
                </p>

                <p className="mt-1.5 text-[9px] font-bold tracking-[1.7px] text-[#E5EFCF]">
                  {t.imageSub}
                </p>
              </motion.div>
            </motion.div>

            {/* FLOATING LEAF */}

            <motion.div
              aria-hidden="true"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.5, rotate: -30 }
              }
              animate={
                reduceMotion
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      y: [0, -7, 0],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: {
                        duration: 0.5,
                        delay: 1,
                      },
                      scale: {
                        duration: 0.6,
                        delay: 1,
                      },
                      rotate: {
                        duration: 0.6,
                        delay: 1,
                      },
                      y: {
                        duration: 3,
                        delay: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute -left-5 bottom-10 hidden h-[60px] w-[60px] items-center justify-center rounded-full border-[5px] border-[#F8FAF5] bg-[#FFD93D] text-[#173923] sm:flex"
            >
              <Leaf size={25} strokeWidth={1.8} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
