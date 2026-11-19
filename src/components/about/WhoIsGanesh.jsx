
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sprout,
  Leaf,
  Smartphone,
  Milk,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  mr: {
    eyebrow: "THE PERSON BEHIND THE JOURNEY",
    heading: "शेतीशी जोडलेला माझा प्रवास",
    intro:
      "गणेश निसाळ हे नाशिक, महाराष्ट्र येथील शेतकरी आणि सेंद्रिय शेती अभ्यासक आहेत.",
    paragraphs: [
      "शेतीकडे केवळ उत्पादन घेण्याचे साधन म्हणून न पाहता, मातीची स्थिती, पिकांची वाढ आणि शेती व्यवस्थापनातील विविध घटक समजून घेण्याची त्यांना आवड आहे.",
      "प्रत्यक्ष शेतीशी जोडलेले काम आणि नवीन पद्धती जाणून घेण्याची उत्सुकता हे त्यांच्या कार्याचे महत्त्वाचे पैलू आहेत.",
      "शेतीतील अनुभव, कृषी विषयांचा अभ्यास आणि इतर शेतकऱ्यांशी माहितीची देवाणघेवाण या माध्यमांतून त्यांची वाटचाल सुरू आहे.",
    ],
    signature: "GANESH NISAL",
    signatureSub: "FARMER • LEARNER • CREATOR",
    cards: [
      {
        number: "01",
        title: "सेंद्रिय शेती",
        english: "ORGANIC FARMING",
        path: "/organic-farming",
      },
      {
        number: "02",
        title: "मातीचे आरोग्य",
        english: "SOIL HEALTH",
        path: "/organic-farming",
      },
      {
        number: "03",
        title: "डिजिटल जनजागृती",
        english: "DIGITAL AWARENESS",
        path: "/about",
      },
      {
        number: "04",
        title: "शेतीतील प्रयोग",
        english: "FARMING EXPERIMENTS",
        path: "/farming-experiments",
      },
    ],
  },

  en: {
    eyebrow: "THE PERSON BEHIND THE JOURNEY",
    heading: "My Journey Rooted in Farming",
    intro:
      "Ganesh Nisal is a farmer and organic farming enthusiast from Nashik, Maharashtra.",
    paragraphs: [
      "Rather than viewing farming only as a means of production, he is interested in understanding soil conditions, crop growth and the various factors involved in farm management.",
      "Hands-on agricultural work and a curiosity to explore new methods are important aspects of his journey.",
      "His journey continues through farming experience, the study of agricultural subjects and the exchange of knowledge with fellow farmers.",
    ],
    signature: "GANESH NISAL",
    signatureSub: "FARMER • LEARNER • CREATOR",
    cards: [
      {
        number: "01",
        title: "Organic Farming",
        english: "ORGANIC FARMING",
        path: "/organic-farming",
      },
      {
        number: "02",
        title: "Soil Health",
        english: "SOIL HEALTH",
        path: "/organic-farming",
      },
      {
        number: "03",
        title: "Digital Awareness",
        english: "DIGITAL AWARENESS",
        path: "/about",
      },
      {
        number: "04",
        title: "Farming Experiments",
        english: "FARMING EXPERIMENTS",
        path: "/farming-experiments",
      },
    ],
  },

  hi: {
    eyebrow: "THE PERSON BEHIND THE JOURNEY",
    heading: "खेती से जुड़ा मेरा सफर",
    intro:
      "गणेश निसाल नाशिक, महाराष्ट्र के किसान और जैविक खेती के अध्येता हैं।",
    paragraphs: [
      "खेती को केवल उत्पादन का साधन न मानकर, मिट्टी की स्थिति, फसलों की वृद्धि और कृषि प्रबंधन के विभिन्न पहलुओं को समझने में उनकी रुचि है।",
      "खेती से जुड़ा व्यावहारिक कार्य और नई पद्धतियों को जानने की उत्सुकता उनके कार्य के महत्वपूर्ण पहलू हैं।",
      "खेती के अनुभव, कृषि विषयों के अध्ययन और अन्य किसानों के साथ जानकारी के आदान-प्रदान के माध्यम से उनका सफर जारी है।",
    ],
    signature: "GANESH NISAL",
    signatureSub: "FARMER • LEARNER • CREATOR",
    cards: [
      {
        number: "01",
        title: "जैविक खेती",
        english: "ORGANIC FARMING",
        path: "/organic-farming",
      },
      {
        number: "02",
        title: "मिट्टी का स्वास्थ्य",
        english: "SOIL HEALTH",
        path: "/organic-farming",
      },
      {
        number: "03",
        title: "डिजिटल जागरूकता",
        english: "DIGITAL AWARENESS",
        path: "/about",
      },
      {
        number: "04",
        title: "खेती के प्रयोग",
        english: "FARMING EXPERIMENTS",
        path: "/farming-experiments",
      },
    ],
  },
};

const icons = [Sprout, Leaf, Smartphone, Milk];

const ease = [0.22, 1, 0.36, 1];

export default function WhoIsGanesh() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24, x },
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
      id="about-story"
      aria-labelledby="who-is-ganesh-heading"
      className="relative isolate overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      {/* SOFT BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#EAF4E7]/60 blur-[80px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* LEFT SIDE — EXPERTISE CARDS */}

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {t.cards.map((card, index) => {
              const Icon = icons[index];
              const featured = index === 0;

              return (
                <motion.div
                  key={`${language}-${card.number}`}
                  {...reveal(index * 0.09, -15)}
                  className="h-full"
                >
                  <Link
                    to={card.path}
                    className={`group relative flex h-full min-h-[195px] flex-col justify-between overflow-hidden rounded-[18px] p-5 transition-all duration-300 hover:-translate-y-1 sm:min-h-[205px] sm:p-6 ${
                      featured
                        ? "bg-[#173923] text-white shadow-[0_12px_28px_rgba(23,57,35,0.12)]"
                        : "border border-[#E3EBE0] bg-[#F7FAF5] text-[#173923] hover:border-[#B5D4B0] hover:bg-[#EFF7EC]"
                    }`}
                  >
                    {/* CARD TOP */}

                    <div className="flex items-start justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${
                          featured
                            ? "bg-white/10 text-[#FFD93D]"
                            : "bg-[#E5F0E0] text-[#347D3F]"
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </span>

                      <span
                        className={`text-[11px] font-bold ${
                          featured
                            ? "text-white/40"
                            : "text-[#A8B9A8]"
                        }`}
                      >
                        {card.number}
                      </span>
                    </div>

                    {/* CARD BOTTOM */}

                    <div className="mt-7">
                      <p
                        className={`text-[9px] font-extrabold tracking-[1.2px] ${
                          featured
                            ? "text-[#B9D9AE]"
                            : "text-[#65996C]"
                        }`}
                      >
                        {card.english}
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-2">
                        <h3 className="text-[16px] font-extrabold leading-[1.4] sm:text-[17px]">
                          {card.title}
                        </h3>

                        <ArrowUpRight
                          size={18}
                          className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                            featured
                              ? "text-[#FFD93D]"
                              : "text-[#4D8D53]"
                          }`}
                        />
                      </div>
                    </div>

                    {featured && (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full border-[22px] border-white/[0.035]"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE — BIOGRAPHY */}

          <motion.div {...reveal(0.12, 18)}>
            {/* EYEBROW */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#43B649]" />
              <span className="text-[10px] font-extrabold tracking-[1.8px] text-[#41844B]">
                {t.eyebrow}
              </span>
            </div>

            {/* HEADING MASK REVEAL */}

            <h2
              id="who-is-ganesh-heading"
              className="overflow-hidden pb-2 text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.18] tracking-[-0.8px] text-[#173923]"
            >
              <motion.span
                key={`who-heading-${language}`}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 35 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                className="block"
              >
                {t.heading}
              </motion.span>
            </h2>

            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#FFD93D]" />

            {/* INTRO */}

            <p className="mt-6 max-w-[600px] text-[17px] font-bold leading-[30px] text-[#244B30] sm:text-[19px]">
              {t.intro}
            </p>

            {/* DESCRIPTION */}

            <div className="mt-5 max-w-[620px] space-y-3.5">
              {t.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${language}-${index}`}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 15 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : 0.15 + index * 0.1,
                    ease,
                  }}
                  className="text-[13px] leading-[26px] text-[#65746A] sm:text-[14px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* IDENTITY FOOTER */}

            <div className="mt-7 flex items-center gap-4 border-t border-[#E6EDE4] pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F1E3] text-[#327E3E]">
                <Leaf size={21} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[13px] font-extrabold tracking-[0.5px] text-[#173923]">
                  {t.signature}
                </p>

                <p className="mt-1 text-[9px] font-bold tracking-[1.3px] text-[#7E9581]">
                  {t.signatureSub}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
