
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Sprout,
  Droplets,
  Microscope,
  RefreshCw,
  FlaskConical,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CARBON_IMAGE = "https://i.pinimg.com/1200x/90/37/75/9037758a8a5410008cd426dd36882b53.jpg";

const CONTENT = {
  mr: {
    eyebrow: "ORGANIC CARBON & SOIL QUALITY",
    heading:
      "सेंद्रिय कर्ब — जमिनीच्या आरोग्याचा महत्त्वाचा घटक!",
    p1:
      "मातीतील सेंद्रिय कर्ब हा जमिनीच्या गुणवत्तेशी संबंधित महत्त्वाच्या निर्देशकांपैकी एक आहे.",
    p2:
      "सेंद्रिय पदार्थांचे विघटन, सूक्ष्मजीवांची क्रिया आणि मातीची रचना यांच्याशी त्याचा संबंध असतो.",
    subheading: "सेंद्रिय कर्बाचे महत्त्व:",
    points: [
      "मातीच्या रचनेला आधार देण्यास मदत",
      "पाणीधारण क्षमतेशी संबंधित भूमिका",
      "मातीतील जैविक क्रियांना आधार",
      "पोषकद्रव्यांच्या चक्रात सहभाग",
    ],
    note:
      "सेंद्रिय कर्बाचे प्रमाण आणि जमिनीची स्थिती समजून घेण्यासाठी माती परीक्षण उपयुक्त ठरते.",
    centerLabel: "ORGANIC CARBON",
    noteLabel: "SOIL TESTING",
  },

  en: {
    eyebrow: "ORGANIC CARBON & SOIL QUALITY",
    heading:
      "Organic Carbon — An Important Factor in Soil Health!",
    p1:
      "Soil organic carbon is one of the important indicators associated with soil quality.",
    p2:
      "It is linked to the decomposition of organic matter, microbial activity and soil structure.",
    subheading: "Importance of Organic Carbon:",
    points: [
      "Helps support soil structure",
      "Plays a role in water-holding capacity",
      "Supports biological activity in soil",
      "Participates in nutrient cycling",
    ],
    note:
      "Soil testing helps in understanding organic carbon levels and the condition of the soil.",
    centerLabel: "ORGANIC CARBON",
    noteLabel: "SOIL TESTING",
  },

  hi: {
    eyebrow: "ORGANIC CARBON & SOIL QUALITY",
    heading:
      "जैविक कार्बन — मिट्टी के स्वास्थ्य का महत्वपूर्ण घटक!",
    p1:
      "मिट्टी में जैविक कार्बन, मिट्टी की गुणवत्ता से जुड़े महत्वपूर्ण संकेतकों में से एक है।",
    p2:
      "इसका संबंध जैविक पदार्थों के अपघटन, सूक्ष्मजीवों की गतिविधि और मिट्टी की संरचना से होता है।",
    subheading: "जैविक कार्बन का महत्व:",
    points: [
      "मिट्टी की संरचना को सहारा देने में मदद",
      "जलधारण क्षमता से संबंधित भूमिका",
      "मिट्टी की जैविक गतिविधियों को सहारा",
      "पोषक तत्वों के चक्र में भागीदारी",
    ],
    note:
      "जैविक कार्बन की मात्रा और मिट्टी की स्थिति समझने के लिए मिट्टी की जाँच उपयोगी होती है।",
    centerLabel: "ORGANIC CARBON",
    noteLabel: "SOIL TESTING",
  },
};

const ICONS = [
  Sprout,
  Droplets,
  Microscope,
  RefreshCw,
];

const EASE = [0.22, 1, 0.36, 1];

export default function OrganicCarbon() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  const visible = Boolean(reduceMotion) || isInView;

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
      id="organic-carbon"
      aria-labelledby="organic-carbon-heading"
      className="relative isolate overflow-hidden bg-[#F3F7F0] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DETAILS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-[#E0EDDA] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#E5F1DF] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* SECTION HEADING */}

        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            {...reveal(0)}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#43B649]" />

            <span className="text-[12px] font-extrabold tracking-[1.6px] text-[#41884A]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#43B649]" />
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            id="organic-carbon-heading"
            className="text-[clamp(2rem,3.4vw,3.2rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-5 max-w-[780px] text-[17px] font-semibold leading-[31px] text-[#365C40]"
          >
            {t.p1}
          </motion.p>

          <motion.p
            {...reveal(0.28)}
            className="mx-auto mt-3 max-w-[780px] text-[16px] leading-[29px] text-[#6C7D70]"
          >
            {t.p2}
          </motion.p>
        </div>

        {/* SUBHEADING */}

        <motion.h3
          {...reveal(0.32)}
          className="mt-10 text-center text-[20px] font-extrabold text-[#173923] sm:text-[22px]"
        >
          {t.subheading}
        </motion.h3>

        {/* CENTER CIRCLE IMAGE + FOUR BENEFITS */}

        <div className="relative mx-auto mt-8 max-w-[1050px]">

          {/* CENTER CIRCULAR IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: visible ? 1 : 0,
              scale: visible ? 1 : 0.8,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: visible ? 0.4 : 0,
              ease: EASE,
            }}
            className="relative z-10 mx-auto mb-6 h-[230px] w-[230px] overflow-hidden rounded-full border-[9px] border-white bg-[#D7E6D0] shadow-[0_18px_45px_rgba(23,57,35,0.14)] sm:h-[270px] sm:w-[270px] lg:absolute lg:left-1/2 lg:top-1/2 lg:mb-0 lg:h-[285px] lg:w-[285px] lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            {!imageFailed ? (
              <motion.img
                src={CARBON_IMAGE}
                alt="Organic carbon and healthy agricultural soil"
                loading="lazy"
                onError={() => setImageFailed(true)}
                initial={{ scale: 1.15 }}
                animate={{
                  scale: visible ? 1 : 1.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.4,
                  ease: EASE,
                }}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-[#4E8754]">
                <ImageOff size={32} />
                <span className="text-xs font-bold">
                  Organic Carbon
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#102519]/70 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-0 right-0 text-center">
              <span className="text-[11px] font-extrabold tracking-[1.2px] text-white">
                {t.centerLabel}
              </span>
            </div>
          </motion.div>

          {/* FOUR BENEFITS */}

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-x-[230px] lg:gap-y-5">
            {t.points.map((point, index) => {
              const Icon = ICONS[index];

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -35 : 35,
                  }}
                  animate={{
                    opacity: visible ? 1 : 0,
                    x: visible
                      ? 0
                      : index % 2 === 0
                      ? -35
                      : 35,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: visible ? 0.45 + index * 0.1 : 0,
                    ease: EASE,
                  }}
                  className="group relative flex min-h-[145px] items-center gap-4 rounded-[18px] border border-[#DCE9D8] bg-white px-5 py-5 shadow-[0_8px_25px_rgba(23,57,35,0.04)] transition-colors duration-300 hover:border-[#A8D4A0] hover:bg-[#FBFDF9] sm:px-6 lg:min-h-[170px]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EAF4E6] text-[#3E9149]">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                  <p className="text-[16px] font-bold leading-[27px] text-[#31553B]">
                    {point}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SOIL TESTING NOTE */}

        <motion.div
          {...reveal(0.65)}
          className="mx-auto mt-11 flex max-w-[1050px] flex-col items-start gap-4 rounded-[17px] border border-[#CDE2C6] bg-white px-6 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-8"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#173923] text-[#FFD93D]">
            <FlaskConical size={23} />
          </span>

          <div>
            <span className="text-[11px] font-extrabold tracking-[1.3px] text-[#4C9954]">
              {t.noteLabel}
            </span>

            <p className="mt-1 text-[16px] font-semibold leading-[29px] text-[#365C40]">
              {t.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
