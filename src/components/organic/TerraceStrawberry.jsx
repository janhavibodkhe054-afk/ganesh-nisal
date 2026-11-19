
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Sprout,
  Sun,
  Droplets,
  Leaf,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const IMAGES = {
  main: "/images/rooftop-strawberry.webp",
  closeup: "/images/strawberry-fruit.webp",
};

const CONTENT = {
  mr: {
    eyebrow: "TERRACE STRAWBERRY FARMING",
    heading: "घराच्या टेरेसवर स्ट्रॉबेरी शेतीचा अभिनव प्रयोग!",
    p1:
      "शेतीसाठी नेहमीच मोठ्या जमिनीची गरज असते असे नाही. उपलब्ध जागेचा योग्य उपयोग करून वेगवेगळे शेती प्रयोग करता येऊ शकतात.",
    p2:
      "गणेश निसाळ यांनी घराच्या टेरेसवर स्ट्रॉबेरी लागवडीचा प्रयोग करून मर्यादित जागेत शेतीच्या नव्या शक्यता शोधण्याचा प्रयत्न केला आहे.",
    subheading: "टेरेसवरील स्ट्रॉबेरी लागवडीत महत्त्वाचे मुद्दे",
    points: [
      "योग्य जागा आणि सूर्यप्रकाश",
      "लागवडीसाठी योग्य माध्यम",
      "पाणी व ओलाव्याचे नियोजन",
      "झाडांची नियमित निगा आणि निरीक्षण",
    ],
    note:
      "हा प्रयोग उपलब्ध जागेत शेतीविषयक नावीन्यपूर्ण कल्पना प्रत्यक्षात आणण्याच्या दृष्टिकोनाचे उदाहरण आहे.",
  },

  en: {
    eyebrow: "TERRACE STRAWBERRY FARMING",
    heading: "An Innovative Strawberry Farming Experiment on a Terrace!",
    p1:
      "Farming does not always require large areas of land. Different agricultural experiments can be explored by making thoughtful use of available space.",
    p2:
      "Ganesh Nisal has experimented with growing strawberries on a home terrace, exploring new possibilities for cultivation in limited spaces.",
    subheading: "Important Aspects of Terrace Strawberry Cultivation",
    points: [
      "Suitable space and sunlight",
      "Appropriate growing medium",
      "Water and moisture management",
      "Regular plant care and observation",
    ],
    note:
      "This experiment reflects an approach to exploring innovative farming ideas within available spaces.",
  },

  hi: {
    eyebrow: "TERRACE STRAWBERRY FARMING",
    heading: "घर की छत पर स्ट्रॉबेरी खेती का अभिनव प्रयोग!",
    p1:
      "खेती के लिए हमेशा बड़ी जमीन की आवश्यकता नहीं होती। उपलब्ध जगह का सही उपयोग करके अलग-अलग कृषि प्रयोग किए जा सकते हैं।",
    p2:
      "गणेश निसाळ ने घर की छत पर स्ट्रॉबेरी उगाने का प्रयोग किया है और सीमित जगह में खेती की नई संभावनाओं को तलाशने का प्रयास किया है।",
    subheading: "टेरेस पर स्ट्रॉबेरी की खेती में महत्वपूर्ण बातें",
    points: [
      "उपयुक्त जगह और धूप",
      "सही रोपण माध्यम",
      "पानी और नमी का प्रबंधन",
      "पौधों की नियमित देखभाल और निरीक्षण",
    ],
    note:
      "यह प्रयोग उपलब्ध जगह में खेती से जुड़े नए विचारों को अपनाने के दृष्टिकोण का उदाहरण है।",
  },
};

const ICONS = [Sun, Sprout, Droplets, Leaf];
const EASE = [0.22, 1, 0.36, 1];

function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#E5EFDD] ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-[#7DA277]">
          <ImageOff size={38} strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}

export default function TerraceStrawberry() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  const visible = Boolean(reduceMotion) || inView;

  const reveal = (delay = 0, y = 25) => ({
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
      id="terrace-strawberry"
      aria-labelledby="terrace-strawberry-heading"
      className="relative overflow-hidden bg-[#FFFDF8] py-16 lg:py-24"
    >
      {/* SOFT BACKGROUND DECORATIONS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-10 h-[360px] w-[360px] rounded-full bg-[#EAF3DF]/60 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-0 h-[360px] w-[360px] rounded-full bg-[#EAF3DF]/50 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* MAIN GRID */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT IMAGE COMPOSITION */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: visible ? 1 : 0,
              x: visible ? 0 : -40,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: EASE,
            }}
            className="relative pb-10 sm:pb-12"
          >
            {/* MAIN STRAWBERRY IMAGE */}

            <div className="relative h-[390px] overflow-hidden rounded-[140px_28px_130px_28px] border-[6px] border-[#D8E9C7] bg-[#E5EFDD] sm:h-[490px] lg:h-[550px]">
              <Photo
                src={IMAGES.main}
                alt="Strawberry plants growing on a home terrace"
                className="h-full w-full"
              />
            </div>

            {/* CIRCULAR STRAWBERRY CLOSE-UP */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0.7,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: visible ? 0.3 : 0,
                ease: EASE,
              }}
              className="absolute bottom-0 right-0 h-[155px] w-[155px] overflow-hidden rounded-full border-[7px] border-[#FFFDF8] bg-white shadow-[0_15px_35px_rgba(23,57,35,0.15)] sm:h-[195px] sm:w-[195px] lg:-right-5 lg:h-[210px] lg:w-[210px]"
            >
              <Photo
                src={IMAGES.closeup}
                alt="Fresh ripe strawberries close-up"
                className="h-full w-full"
              />
            </motion.div>

            {/* SMALL STRAWBERRY ACCENT */}

            <motion.div
              {...reveal(0.4)}
              className="absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-[#FFFDF8] bg-[#173923] text-[25px] shadow-lg sm:h-16 sm:w-16"
            >
              🍓
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <div>
            <motion.div
              {...reveal(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#43B649]" />

              <span className="text-[12px] font-extrabold tracking-[1.4px] text-[#41884A]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1)}
              id="terrace-strawberry-heading"
              className="text-[clamp(2rem,3.4vw,3.2rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
            >
              {t.heading}
            </motion.h2>

            {/* FIRST PARAGRAPH */}

            <motion.div
              {...reveal(0.2)}
              className="mt-6 flex items-start gap-4 rounded-[17px] bg-[#F1F7EA] px-5 py-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#31783A] text-white">
                <Sprout size={23} strokeWidth={1.7} />
              </span>

              <p className="text-[17px] font-semibold leading-[31px] text-[#31553B]">
                {t.p1}
              </p>
            </motion.div>

            <motion.p
              {...reveal(0.3)}
              className="mt-5 text-[16px] leading-[30px] text-[#687B6B]"
            >
              {t.p2}
            </motion.p>

            {/* POINTS HEADING */}

            <motion.div
              {...reveal(0.4)}
              className="mb-5 mt-9 flex items-center gap-3"
            >
              <span className="h-[2px] w-7 bg-[#43B649]" />

              <h3 className="text-[20px] font-extrabold leading-[29px] text-[#173923] sm:text-[22px]">
                {t.subheading}
              </h3>
            </motion.div>

            {/* FOUR POINTS */}

            <div className="grid gap-3 sm:grid-cols-2">
              {t.points.map((point, index) => {
                const Icon = ICONS[index];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: visible ? 1 : 0,
                      y: visible ? 0 : 20,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: visible ? 0.45 + index * 0.09 : 0,
                      ease: EASE,
                    }}
                    className="group flex items-center gap-3 rounded-full border border-[#DCEACF] bg-[#F4F9ED] px-4 py-3.5 transition-all duration-300 hover:border-[#9CCB90] hover:bg-[#EAF4E2]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#41884A] shadow-sm">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>

                    <p className="text-[15px] font-bold leading-[25px] text-[#31553B]">
                      {point}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHT */}

        <motion.div
          {...reveal(0.6)}
          className="mt-10 flex flex-col items-start gap-4 rounded-[20px] bg-[#173923] px-6 py-6 sm:mt-12 sm:flex-row sm:items-center sm:gap-6 sm:px-8 lg:mt-14"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-[30px]">
            🍓
          </span>

          <div className="hidden h-12 w-px bg-white/25 sm:block" />

          <p className="text-[17px] font-semibold leading-[31px] text-white">
            {t.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
