
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Worm,
  Leaf,
  Recycle,
  Shovel,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const IMAGES = {
  earthworms: "https://i.pinimg.com/1200x/0b/ce/26/0bce26896bcb955e2d496e2f1439e034.jpg",
  vermicompost: "https://i.pinimg.com/736x/12/a7/80/12a780f11cec82b5647471b85cede96c.jpg",
};

const CONTENT = {
  mr: {
    eyebrow: "SOIL BIOLOGY & VERMICOMPOST",
    heading:
      "गांडुळे आणि गांडूळखत — मातीतील जैविक प्रक्रियेचे महत्त्व!",
    p1:
      "मातीमध्ये अनेक प्रकारचे सूक्ष्मजीव आणि इतर सजीव कार्यरत असतात. सेंद्रिय पदार्थांचे विघटन आणि पोषकद्रव्यांचे चक्र यामध्ये त्यांचा सहभाग असतो.",
    p2:
      "गांडुळे मातीतील सेंद्रिय पदार्थांचे विघटन करण्यास आणि मातीची रचना सुधारण्यास मदत करतात.",
    p3:
      "गांडूळखत हे योग्य पद्धतीने तयार केलेले सेंद्रिय खत असून त्याचा वापर जमिनीतील सेंद्रिय पदार्थ वाढवण्यासाठी करता येतो.",
    subheading: "या विषयात जाणून घ्या:",
    topics: [
      "गांडुळांची शेतीतील भूमिका",
      "गांडूळखत म्हणजे काय?",
      "गांडूळखत निर्मितीची मूलभूत प्रक्रिया",
      "योग्य खत व्यवस्थापनाचे महत्त्व",
    ],
    photoLabel: "LIVING SOIL",
    compostLabel: "VERMICOMPOST",
  },

  en: {
    eyebrow: "SOIL BIOLOGY & VERMICOMPOST",
    heading:
      "Earthworms & Vermicompost — The Importance of Soil Biology!",
    p1:
      "Many types of microorganisms and other living organisms are active in soil. They participate in the decomposition of organic matter and nutrient cycling.",
    p2:
      "Earthworms help decompose organic matter in soil and improve soil structure.",
    p3:
      "Vermicompost is an organic fertilizer prepared using appropriate methods and can be used to increase organic matter in soil.",
    subheading: "Explore These Topics:",
    topics: [
      "Role of earthworms in agriculture",
      "What is vermicompost?",
      "Basic process of vermicompost production",
      "Importance of proper fertilizer management",
    ],
    photoLabel: "LIVING SOIL",
    compostLabel: "VERMICOMPOST",
  },

  hi: {
    eyebrow: "SOIL BIOLOGY & VERMICOMPOST",
    heading:
      "केंचुए और वर्मीकम्पोस्ट — मिट्टी की जैविक प्रक्रियाओं का महत्व!",
    p1:
      "मिट्टी में अनेक प्रकार के सूक्ष्मजीव और अन्य जीव सक्रिय रहते हैं। जैविक पदार्थों के अपघटन और पोषक तत्वों के चक्र में उनकी भागीदारी होती है।",
    p2:
      "केंचुए मिट्टी में जैविक पदार्थों के अपघटन और मिट्टी की संरचना सुधारने में मदद करते हैं।",
    p3:
      "वर्मीकम्पोस्ट उचित विधि से तैयार की गई जैविक खाद है, जिसका उपयोग मिट्टी में जैविक पदार्थ बढ़ाने के लिए किया जा सकता है।",
    subheading: "इन विषयों के बारे में जानें:",
    topics: [
      "खेती में केंचुओं की भूमिका",
      "वर्मीकम्पोस्ट क्या है?",
      "वर्मीकम्पोस्ट बनाने की मूल प्रक्रिया",
      "उचित खाद प्रबंधन का महत्व",
    ],
    photoLabel: "LIVING SOIL",
    compostLabel: "VERMICOMPOST",
  },
};

const TOPIC_ICONS = [Worm, Leaf, Recycle, Shovel];

const EASE = [0.22, 1, 0.36, 1];

function Photo({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-[#294C34] ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-[#A9C9A8]">
          <ImageOff size={38} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102519]/80 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5">
        <span className="text-[11px] font-extrabold tracking-[1.8px] text-[#FFD93D]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function SoilBiologyVermicompost() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

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

  return (
    <section
      ref={sectionRef}
      id="soil-biology-vermicompost"
      aria-labelledby="soil-biology-heading"
      className="relative overflow-hidden bg-[#102519] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-[#2D6540]/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* TOP: IMAGE LEFT + CONTENT RIGHT */}

        <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT IMAGE COLUMN */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{
              opacity: visible ? 1 : 0,
              x: visible ? 0 : -45,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: EASE,
            }}
            className="relative"
          >
            <Photo
              src={IMAGES.earthworms}
              alt="Earthworms in healthy soil"
              label={t.photoLabel}
              className="h-[350px] rounded-[22px] sm:h-[440px] lg:h-[480px]"
            />

            {/* OVERLAPPING VERMICOMPOST PHOTO */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : 35,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: visible ? 0.3 : 0,
                ease: EASE,
              }}
              className="relative mx-5 -mt-16 h-[155px] overflow-hidden rounded-[17px] border-[6px] border-[#102519] shadow-[0_15px_35px_rgba(0,0,0,0.18)] sm:mx-8 sm:h-[180px] lg:absolute lg:-bottom-5 lg:-right-7 lg:mx-0 lg:mt-0 lg:h-[180px] lg:w-[260px]"
            >
              <Photo
                src={IMAGES.vermicompost}
                alt="Vermicompost organic fertilizer"
                label={t.compostLabel}
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <div>
            <motion.div
              {...reveal(0.05)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#FFD93D]" />

              <span className="text-[12px] font-extrabold tracking-[1.5px] text-[#B4D9A7]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.12)}
              id="soil-biology-heading"
              className="text-[clamp(2rem,3.4vw,3.15rem)] font-extrabold leading-[1.22] tracking-[-0.6px] text-white"
            >
              {t.heading}
            </motion.h2>

            <motion.p
              {...reveal(0.2)}
              className="mt-6 text-[17px] font-semibold leading-[31px] text-[#D9E9D5]"
            >
              {t.p1}
            </motion.p>

            <motion.p
              {...reveal(0.3)}
              className="mt-4 text-[16px] leading-[30px] text-[#B9CEBA]"
            >
              {t.p2}
            </motion.p>

            <motion.p
              {...reveal(0.4)}
              className="mt-4 text-[16px] leading-[30px] text-[#B9CEBA]"
            >
              {t.p3}
            </motion.p>
          </div>
        </div>

        {/* FULL WIDTH LEARNING TOPICS */}

        <div className="mt-14 lg:mt-20">

          

          {/* HORIZONTAL TOPICS ROW */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.topics.map((topic, index) => {
              const Icon = TOPIC_ICONS[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : 25,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: visible ? 0.5 + index * 0.1 : 0,
                    ease: EASE,
                  }}
                  className="group flex min-h-[115px] items-center gap-4 rounded-[16px] border border-white/10 bg-white/[0.055] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD93D]/35 hover:bg-white/[0.09]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#FFD93D]/10 text-[#FFD93D]">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                  <div>
                    <span className="text-[11px] font-extrabold tracking-[1px] text-[#8EBB8B]">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-[15px] font-semibold leading-[25px] text-[#E0EEE0]">
                      {topic}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
