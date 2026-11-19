
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Sprout,
  Layers3,
  Microscope,
  FlaskConical,
  Droplets,
  Leaf,
  ScanSearch,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const SOIL_IMAGE = "/images/soil-health.webp";

const CONTENT = {
  mr: {
    eyebrow: "SOIL HEALTH & FERTILITY",
    heading: "माती निरोगी तर शेती सक्षम!",
    p1: "माती ही पिकांच्या वाढीचा मुख्य आधार आहे. पिकांना आवश्यक पोषकद्रव्ये, पाणी आणि मुळांच्या वाढीसाठी योग्य वातावरण उपलब्ध करून देण्यात मातीची महत्त्वाची भूमिका असते.",
    p2: "मातीचे आरोग्य तिच्या भौतिक, रासायनिक आणि जैविक गुणधर्मांवर अवलंबून असते.",
    subheading:
      "मातीचे आरोग्य समजून घेताना महत्त्वाचे घटक:",
    factors: [
      {
        title: "सेंद्रिय कर्ब",
        description:
          "मातीतील सेंद्रिय पदार्थांशी संबंधित महत्त्वाचा घटक.",
      },
      {
        title: "मातीची रचना",
        description:
          "हवा, पाणी आणि मुळांच्या वाढीवर परिणाम करणारा घटक.",
      },
      {
        title: "जैविक क्रिया",
        description:
          "सूक्ष्मजीव आणि इतर मृदाजीवांचे कार्य.",
      },
      {
        title: "पोषकद्रव्ये",
        description:
          "पिकांच्या गरजेनुसार उपलब्धता आणि संतुलन.",
      },
      {
        title: "पाणीधारण क्षमता",
        description:
          "मातीमध्ये पाणी धरून ठेवण्याची क्षमता.",
      },
    ],
    note:
      "माती परीक्षण आणि नियमित निरीक्षण यामुळे जमिनीच्या स्थितीबद्दल अधिक माहिती मिळू शकते.",
    imageLabel: "KNOW YOUR SOIL",
    noteTitle: "माती परीक्षणाचे महत्त्व",
  },

  en: {
    eyebrow: "SOIL HEALTH & FERTILITY",
    heading: "Healthy Soil, Stronger Farming!",
    p1: "Soil is the primary foundation for crop growth. It plays an important role in providing essential nutrients, water and a suitable environment for root development.",
    p2: "Soil health depends on its physical, chemical and biological properties.",
    subheading:
      "Important Factors in Understanding Soil Health:",
    factors: [
      {
        title: "Organic Carbon",
        description:
          "An important factor related to organic matter in the soil.",
      },
      {
        title: "Soil Structure",
        description:
          "A factor affecting air, water and root development.",
      },
      {
        title: "Biological Activity",
        description:
          "The activity of microorganisms and other soil organisms.",
      },
      {
        title: "Nutrients",
        description:
          "Availability and balance according to crop requirements.",
      },
      {
        title: "Water-Holding Capacity",
        description:
          "The ability of soil to retain water.",
      },
    ],
    note:
      "Soil testing and regular observation can provide more information about the condition of agricultural land.",
    imageLabel: "KNOW YOUR SOIL",
    noteTitle: "The Importance of Soil Testing",
  },

  hi: {
    eyebrow: "SOIL HEALTH & FERTILITY",
    heading: "स्वस्थ मिट्टी, सक्षम खेती!",
    p1: "मिट्टी फसलों की वृद्धि का मुख्य आधार है। पौधों को आवश्यक पोषक तत्व, पानी और जड़ों के विकास के लिए उपयुक्त वातावरण उपलब्ध कराने में मिट्टी की महत्वपूर्ण भूमिका होती है।",
    p2: "मिट्टी का स्वास्थ्य उसके भौतिक, रासायनिक और जैविक गुणों पर निर्भर करता है।",
    subheading:
      "मिट्टी के स्वास्थ्य को समझने के महत्वपूर्ण घटक:",
    factors: [
      {
        title: "जैविक कार्बन",
        description:
          "मिट्टी में मौजूद जैविक पदार्थों से संबंधित महत्वपूर्ण घटक।",
      },
      {
        title: "मिट्टी की संरचना",
        description:
          "हवा, पानी और जड़ों के विकास को प्रभावित करने वाला घटक।",
      },
      {
        title: "जैविक गतिविधि",
        description:
          "सूक्ष्मजीवों और अन्य मृदा जीवों की गतिविधियाँ।",
      },
      {
        title: "पोषक तत्व",
        description:
          "फसलों की जरूरत के अनुसार उपलब्धता और संतुलन।",
      },
      {
        title: "जलधारण क्षमता",
        description:
          "मिट्टी में पानी रोककर रखने की क्षमता।",
      },
    ],
    note:
      "मिट्टी की जाँच और नियमित निरीक्षण से खेत की स्थिति के बारे में अधिक जानकारी मिल सकती है।",
    imageLabel: "KNOW YOUR SOIL",
    noteTitle: "मिट्टी की जाँच का महत्व",
  },
};

const ICONS = [
  Sprout,
  Layers3,
  Microscope,
  FlaskConical,
  Droplets,
];

const EASE = [0.22, 1, 0.36, 1];

export default function SoilHealth() {
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

  return (
    <section
      ref={sectionRef}
      id="soil-health"
      aria-labelledby="soil-health-heading"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* SECTION INTRO */}

        <div className="grid items-end gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <motion.div
              {...reveal(0)}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#43B649]" />

              <span className="text-[12px] font-extrabold tracking-[1.7px] text-[#41884A]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1)}
              id="soil-health-heading"
              className="text-[clamp(2rem,3.4vw,3.2rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
            >
              {t.heading}
            </motion.h2>
          </div>

          <div>
            <motion.p
              {...reveal(0.2)}
              className="text-[17px] font-semibold leading-[31px] text-[#365C40]"
            >
              {t.p1}
            </motion.p>

            <motion.p
              {...reveal(0.28)}
              className="mt-3 text-[16px] leading-[29px] text-[#6C7D70]"
            >
              {t.p2}
            </motion.p>
          </div>
        </div>

        {/* FACTORS TITLE */}

        <motion.div
          {...reveal(0.32)}
          className="mb-6 mt-11 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F4E5] text-[#3D9147]">
            <Leaf size={20} />
          </div>

          <h3 className="text-[19px] font-extrabold leading-[28px] text-[#173923] sm:text-[21px]">
            {t.subheading}
          </h3>
        </motion.div>

        {/* FIVE FACTORS */}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {t.factors.map((factor, index) => {
            const Icon = ICONS[index];

            return (
              <motion.article
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                animate={{
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : 30,
                  scale: visible ? 1 : 0.97,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: visible ? 0.35 + index * 0.1 : 0,
                  ease: EASE,
                }}
                className="group relative flex flex-col overflow-hidden rounded-[17px] border border-[#E1EBDE] bg-[#F8FAF5] p-5 transition-colors duration-300 hover:border-[#A9D4A2] hover:bg-[#EFF7EB]"
              >
                {/* TOP NUMBER & ICON */}

                <div className="mb-6 flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-white text-[#3E9149] shadow-sm">
                    <Icon size={21} strokeWidth={1.7} />
                  </span>

                  <span className="text-[12px] font-extrabold text-[#B2C7AE]">
                    0{index + 1}
                  </span>
                </div>

                {/* CARD TITLE */}

                <h4 className="mb-2 text-[16px] font-extrabold leading-[25px] text-[#173923]">
                  {factor.title}
                </h4>

                {/* CARD DESCRIPTION */}

                <p className="text-[14px] leading-[25px] text-[#6B7D6E]">
                  {factor.description}
                </p>

                <div className="mt-auto pt-5">
                  <div className="h-[2px] w-9 rounded-full bg-[#8ECF80] transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* SOIL TESTING BANNER */}

        <motion.div
          {...reveal(0.5, 30)}
          className="relative mt-10 overflow-hidden rounded-[22px] bg-[#173923] sm:mt-12"
        >
          <div className="grid min-h-[220px] lg:grid-cols-[0.7fr_1.3fr]">

            {/* IMAGE */}

            <div className="relative h-[200px] overflow-hidden bg-[#344B32] lg:h-auto">
              {!imageFailed ? (
                <motion.img
                  src={SOIL_IMAGE}
                  alt="Healthy agricultural soil and soil examination"
                  loading="lazy"
                  onError={() => setImageFailed(true)}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: visible ? 1 : 1.1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.2,
                    ease: EASE,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-[#A5C9A0]">
                  <Sprout size={44} strokeWidth={1.2} />
                </div>
              )}

              <div className="absolute inset-0 bg-[#102519]/15" />

              <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-2 text-[11px] font-extrabold tracking-[1.1px] text-[#173923]">
                {t.imageLabel}
              </span>
            </div>

            {/* TEXT */}

            <div className="relative flex flex-col justify-center px-6 py-8 sm:px-9 lg:px-12">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 h-52 w-52 rounded-full border border-white/10"
              />

              <motion.div
                {...reveal(0.65)}
                className="relative z-10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <ScanSearch
                    size={24}
                    className="text-[#FFD93D]"
                  />

                  <h3 className="text-[20px] font-extrabold text-white sm:text-[23px]">
                    {t.noteTitle}
                  </h3>
                </div>

                <p className="max-w-[600px] text-[16px] font-medium leading-[30px] text-[#D4E6D2]">
                  {t.note}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
