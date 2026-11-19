
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Sprout,
  Leaf,
  Droplets,
  Milk,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// CHANGE IMAGE PATHS HERE
const IMAGES = {
  main: "https://i.pinimg.com/736x/bf/a9/7d/bfa97d1557ccc265b9d5fe02e36db217.jpg",
  farming: "https://i.pinimg.com/1200x/02/10/84/021084c34e9ebb6d6483d2039edd82ce.jpg",
  dairy: "https://i.pinimg.com/736x/f2/86/fa/f286fa72f8bd15b7ea7b505fb950a0cc.jpg",
};

const translations = {
  mr: {
    eyebrow: "ओळख एका प्रयोगशील शेतकऱ्याची",
    heading: [
      "शेती ही केवळ उपजीविका नाही,",
      "तर अभ्यास आणि",
      "प्रयोगांचा विषय!",
    ],
    description1:
      "गणेश निसाळ हे महाराष्ट्रातील सेंद्रिय शेती अभ्यासक, शेतकरी, कृषी उद्योजक आणि शेतीविषयक Content Creator आहेत.",
    description2:
      "सेंद्रिय शेती, जमिनीची सुपीकता, मातीतील जैविक घटक, पाणी व्यवस्थापन आणि पीक व्यवस्थापन यांसारख्या विषयांवर ते मराठी भाषेतून माहिती शेअर करतात.",
    description3:
      "शेतीसोबत त्यांनी पूरक व्यवसाय म्हणून दुग्धव्यवसायाचीही निवड केली आहे.",
    focus: "अभ्यास आणि कार्यक्षेत्र",
    expertise: [
      "सेंद्रिय शेती",
      "मातीचे आरोग्य",
      "पाणी व्यवस्थापन",
      "दुग्धव्यवसाय",
    ],
    button: "अधिक जाणून घ्या",
    name: "गणेश निसाळ",
    role: "शेतकरी • कृषी उद्योजक",
    location: "नाशिक, महाराष्ट्र",
    photoTag: "मातीशी नातं, प्रगतीचा ध्यास!",
    imageLabels: ["सेंद्रिय शेती", "दुग्धव्यवसाय"],
  },

  en: {
    eyebrow: "THE STORY OF A PROGRESSIVE FARMER",
    heading: [
      "Farming is more than",
      "a livelihood — it's about",
      "learning and innovation.",
    ],
    description1:
      "Ganesh Nisal is an organic farming researcher, farmer, agricultural entrepreneur and farming content creator from Maharashtra.",
    description2:
      "He shares knowledge in Marathi on organic farming, soil fertility, soil biology, water management and crop management.",
    description3:
      "Alongside farming, he has also chosen dairy farming as a complementary business.",
    focus: "AREAS OF FOCUS",
    expertise: [
      "Organic Farming",
      "Soil Health",
      "Water Management",
      "Dairy Farming",
    ],
    button: "Discover More",
    name: "GANESH NISAL",
    role: "Farmer • Agricultural Entrepreneur",
    location: "Nashik, Maharashtra",
    photoTag: "Rooted in Soil, Driven by Growth!",
    imageLabels: ["Organic Farming", "Dairy Farming"],
  },

  hi: {
    eyebrow: "एक प्रयोगशील किसान की पहचान",
    heading: [
      "खेती केवल आजीविका नहीं,",
      "बल्कि अध्ययन और",
      "प्रयोग का विषय है!",
    ],
    description1:
      "गणेश निसाल महाराष्ट्र के जैविक खेती के अध्येता, किसान, कृषि उद्यमी और खेती से जुड़े कंटेंट क्रिएटर हैं।",
    description2:
      "वे जैविक खेती, मिट्टी की उर्वरता, मिट्टी के जैविक घटकों, जल प्रबंधन और फसल प्रबंधन जैसे विषयों पर मराठी में जानकारी साझा करते हैं।",
    description3:
      "खेती के साथ उन्होंने पूरक व्यवसाय के रूप में डेयरी व्यवसाय भी चुना है।",
    focus: "अध्ययन और कार्यक्षेत्र",
    expertise: [
      "जैविक खेती",
      "मिट्टी का स्वास्थ्य",
      "जल प्रबंधन",
      "डेयरी व्यवसाय",
    ],
    button: "अधिक जानें",
    name: "गणेश निसाल",
    role: "किसान • कृषि उद्यमी",
    location: "नासिक, महाराष्ट्र",
    photoTag: "मिट्टी से जुड़ाव, प्रगति का संकल्प!",
    imageLabels: ["जैविक खेती", "डेयरी व्यवसाय"],
  },
};

const expertiseIcons = [Sprout, Leaf, Droplets, Milk];
const ease = [0.22, 1, 0.36, 1];

export default function AboutSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 28, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#FCFDF9] py-16 sm:py-20 lg:py-24"
    >
      {/* SOFT BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#F1F8EC] via-white to-white lg:w-[56%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#CDEDC8]/30 blur-[100px]"
      />

      {/* MAIN LAYOUT */}

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 sm:px-10 lg:grid-cols-[48%_52%] lg:gap-10 lg:px-12 xl:gap-14 xl:px-16">
        {/* ==================================
            LEFT: UNIQUE THREE IMAGE COLLAGE
        ================================== */}

        <motion.div
          {...reveal(0.05, -25)}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <div className="relative h-[460px] sm:h-[550px] lg:h-[580px]">
            {/* DECORATIVE OUTLINE */}

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [-4, 0, -4] }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[7%] top-[7%] h-[76%] w-[72%] rounded-[46%_46%_18%_18%] border-[2px] border-[#A9DFA5]"
            />

            {/* MAIN GANESH NISAL IMAGE */}

            <div className="absolute left-[3%] top-[3%] z-10 h-[77%] w-[69%] overflow-hidden rounded-[46%_46%_18%_18%] border-[6px] border-white bg-[#E5F3E0] shadow-[0_25px_60px_rgba(20,70,35,0.15)]">
              <motion.img
                src={IMAGES.main}
                alt="Ganesh Nisal"
                loading="lazy"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.045, 1] }
                }
                transition={{
                  duration: 13,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#102C1A]/85 via-[#102C1A]/25 to-transparent" />

              <motion.div
                key={`photo-name-${language}`}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute bottom-7 left-5 right-4 text-white sm:left-7"
              >
                <p className="text-[21px] font-extrabold sm:text-[28px]">
                  {t.name}
                </p>

                <p className="mt-1 text-[10px] text-white/85 sm:text-[12px]">
                  {t.role}
                </p>
              </motion.div>
            </div>

            {/* SECOND IMAGE - ORGANIC FARMING */}

            <motion.div
              {...reveal(0.18, 20)}
              className="absolute right-[0%] top-[8%] z-20 h-[38%] w-[39%] overflow-hidden rounded-[42%_16%_42%_16%] border-[5px] border-white bg-[#D8EDD3] shadow-[0_15px_40px_rgba(20,70,35,0.16)]"
            >
              <motion.img
                src={IMAGES.farming}
                alt="Organic farming"
                loading="lazy"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.06, 1] }
                }
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-4 pt-8">
                <p className="text-[10px] font-bold text-white sm:text-[12px]">
                  {t.imageLabels[0]}
                </p>
              </div>
            </motion.div>

            {/* THIRD IMAGE - DAIRY FARMING */}

            <motion.div
              {...reveal(0.3, 20)}
              className="absolute bottom-[4%] right-[3%] z-20 h-[39%] w-[42%] overflow-hidden rounded-[18%_45%_18%_45%] border-[5px] border-white bg-[#D8EDD3] shadow-[0_15px_40px_rgba(20,70,35,0.16)]"
            >
              <motion.img
                src={IMAGES.dairy}
                alt="Dairy farming"
                loading="lazy"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.06, 1] }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-4 pt-8">
                <p className="text-[10px] font-bold text-white sm:text-[12px]">
                  {t.imageLabels[1]}
                </p>
              </div>
            </motion.div>

            {/* YELLOW ACCENT */}

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [0, 18, 0] }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3%] left-[8%] h-20 w-20 rounded-[24px] bg-[#FFD93D]/80"
            />

            {/* FLOATING LOCATION */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -8, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3%] left-[20%] z-30 flex items-center gap-2 rounded-full border border-[#E0EBDD] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
            >
              <MapPin size={16} className="text-[#35A846]" />
              <span className="text-[10px] font-bold text-[#315C39] sm:text-[11px]">
                {t.location}
              </span>
            </motion.div>

            {/* SMALL GREEN DOTS */}

            <div
              aria-hidden="true"
              className="absolute right-[4%] top-[51%] grid grid-cols-3 gap-2"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[5px] w-[5px] rounded-full bg-[#8FD28B]"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ==================================
            RIGHT: COMPACT EDITORIAL CONTENT
        ================================== */}

        <div className="relative min-w-0 lg:pl-2 xl:pl-5">
          {/* EYEBROW */}

          <motion.div
            {...reveal(0.05)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#43B649]" />

            <span className="text-[10px] font-bold tracking-[1.5px] text-[#398B42] sm:text-[11px]">
              {t.eyebrow}
            </span>
          </motion.div>

          {/* THREE LINE HEADING */}

          <motion.h2
            id="about-heading"
            key={`about-heading-${language}`}
            {...reveal(0.12)}
            className="max-w-[690px] text-[clamp(1.65rem,2.45vw,2.65rem)] font-extrabold leading-[1.38] tracking-[-0.5px] text-[#1D3D28]"
          >
            <span className="block">{t.heading[0]}</span>
            <span className="block text-[#43AD49]">
              {t.heading[1]}
            </span>
            <span className="relative inline-block text-[#1D3D28]">
              {t.heading[2]}

              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.45,
                  ease,
                }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#FFD93D]"
              />
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            key={`about-description-${language}`}
            {...reveal(0.2)}
            className="mt-6 max-w-[660px] space-y-3 text-[13px] leading-[27px] text-[#586A5D] sm:text-[14px] sm:leading-[28px]"
          >
            <p>{t.description1}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
          </motion.div>

          {/* EXPERTISE */}

          <motion.div {...reveal(0.28)} className="mt-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#FFD93D]" />

              <span className="text-[11px] font-bold text-[#315B39]">
                {t.focus}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {t.expertise.map((item, index) => {
                const Icon = expertiseIcons[index];

                return (
                  <motion.div
                    key={`${language}-${item}`}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -4 }
                    }
                    transition={{ duration: 0.25 }}
                    className="group flex min-h-[64px] items-center gap-3 rounded-[14px] border border-[#E2EEE0] bg-white px-3 py-3 shadow-[0_6px_20px_rgba(20,70,35,0.04)] transition-all duration-300 hover:border-[#9BD79D] hover:shadow-[0_12px_30px_rgba(20,70,35,0.10)] sm:px-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E5F5E1] text-[#38A445]">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <span className="text-[11px] font-bold leading-5 text-[#2E5336] sm:text-[12px]">
                      {item}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            {...reveal(0.38)}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/about"
              className="group inline-flex min-h-[50px] items-center gap-5 rounded-full bg-[#35A846] px-6 py-3 text-[12px] font-bold text-white shadow-[0_12px_28px_rgba(53,168,70,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#247F34]"
            >
              {t.button}

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>

            <span className="hidden items-center gap-2 text-[10px] font-semibold tracking-[1px] text-[#8BA78E] lg:flex">
              {t.photoTag}
              <ArrowRight size={15} />
            </span>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ACCENT LINE */}

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
