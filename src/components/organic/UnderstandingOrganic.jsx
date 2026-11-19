
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Sprout,
  Leaf,
  Droplets,
  Recycle,
  Layers3,
  ArrowUpRight,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const IMAGE = "https://i.pinimg.com/736x/17/a7/6d/17a76d0f5ea80c85264c5c8e8a709319.jpg";

const CONTENT = {
  mr: {
    eyebrow: "UNDERSTANDING ORGANIC FARMING",
    heading: "सेंद्रिय शेती म्हणजे नेमकं काय?",
    p1: "सेंद्रिय शेतीमध्ये मातीतील नैसर्गिक जैविक प्रक्रिया आणि सेंद्रिय घटकांना महत्त्व दिले जाते.",
    p2: "या पद्धतीमध्ये शेतीसाठी उपलब्ध असलेल्या नैसर्गिक संसाधनांचा जबाबदारीने वापर करण्यावर भर असतो.",
    principles: "मुख्य तत्त्वे:",
    items: [
      "मातीतील सेंद्रिय पदार्थांचे संवर्धन",
      "जैवविविधतेला प्रोत्साहन",
      "सेंद्रिय खतांचा योग्य वापर",
      "जमिनीची रचना व सुपीकता टिकवणे",
      "पाणी आणि इतर संसाधनांचे नियोजन",
    ],
    conclusion:
      "सेंद्रिय शेती म्हणजे केवळ रासायनिक निविष्ठांचा वापर टाळणे नाही, तर संपूर्ण शेती व्यवस्थापनाकडे एकात्मिक दृष्टिकोनातून पाहणे होय.",
    imageLabel: "HEALTHY SOIL • ORGANIC FARMING",
    imageAlt: "सुपीक सेंद्रिय मातीमध्ये वाढणारे हिरवे रोप",
    imageCaption: "निरोगी माती, शाश्वत शेतीचा पाया",
  },

  en: {
    eyebrow: "UNDERSTANDING ORGANIC FARMING",
    heading: "What Exactly Is Organic Farming?",
    p1: "Organic farming emphasizes natural biological processes in the soil and the importance of organic matter.",
    p2: "This approach focuses on the responsible use of natural resources available for farming.",
    principles: "Core Principles:",
    items: [
      "Conserving organic matter in the soil",
      "Encouraging biodiversity",
      "Appropriate use of organic fertilizers",
      "Maintaining soil structure and fertility",
      "Planning water and other resources",
    ],
    conclusion:
      "Organic farming is not simply about avoiding chemical inputs; it is about adopting an integrated approach to the entire farming system.",
    imageLabel: "HEALTHY SOIL • ORGANIC FARMING",
    imageAlt: "A green seedling growing in healthy organic soil",
    imageCaption: "Healthy soil, the foundation of sustainable farming",
  },

  hi: {
    eyebrow: "UNDERSTANDING ORGANIC FARMING",
    heading: "जैविक खेती वास्तव में क्या है?",
    p1: "जैविक खेती में मिट्टी की प्राकृतिक जैविक प्रक्रियाओं और जैविक पदार्थों को महत्व दिया जाता है।",
    p2: "इस पद्धति में खेती के लिए उपलब्ध प्राकृतिक संसाधनों का जिम्मेदारी से उपयोग करने पर जोर दिया जाता है।",
    principles: "मुख्य सिद्धांत:",
    items: [
      "मिट्टी में जैविक पदार्थों का संरक्षण",
      "जैव विविधता को बढ़ावा देना",
      "जैविक खाद का उचित उपयोग",
      "मिट्टी की संरचना और उर्वरता बनाए रखना",
      "पानी और अन्य संसाधनों की योजना",
    ],
    conclusion:
      "जैविक खेती का अर्थ केवल रासायनिक निविष्ठाओं से बचना नहीं, बल्कि पूरी कृषि व्यवस्था को एक समग्र दृष्टिकोण से देखना है।",
    imageLabel: "HEALTHY SOIL • ORGANIC FARMING",
    imageAlt: "स्वस्थ जैविक मिट्टी में उगता हुआ हरा पौधा",
    imageCaption: "स्वस्थ मिट्टी, टिकाऊ खेती की नींव",
  },
};

const ICONS = [Layers3, Leaf, Recycle, Sprout, Droplets];
const EASE = [0.22, 1, 0.36, 1];

export default function UnderstandingOrganic() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.12,
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
      id="organic-principles"
      aria-labelledby="organic-principles-heading"
      className="relative isolate overflow-hidden bg-[#F8FAF5] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND ACCENTS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-[400px] w-[400px] rounded-full bg-[#E5F1DF] opacity-70 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* SECTION HEADING */}

        <div className="mb-9 max-w-[800px] sm:mb-11">
          <motion.div
            {...reveal(0)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#43B649]" />

            <span className="text-[10px] font-extrabold tracking-[1.8px] text-[#41884A]">
              {t.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            id="organic-principles-heading"
            className="text-[clamp(1.9rem,3.2vw,3rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
          >
            {t.heading}
          </motion.h2>
        </div>

        {/* MAIN GRID */}

        <div className="grid items-center gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">

          {/* LEFT IMAGE */}

          <motion.div
            {...reveal(0.2, 30)}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[24px] bg-[#E3EEDF] shadow-[0_18px_50px_rgba(23,57,35,0.10)]">

              <div className="relative h-[330px] sm:h-[420px] lg:h-[500px]">

                {!imageFailed ? (
                  <motion.img
                    src={IMAGE}
                    alt={t.imageAlt}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                    initial={{ scale: 1.12 }}
                    animate={{
                      scale: visible ? 1 : 1.12,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.35,
                      ease: EASE,
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#6B9471]">
                    <ImageOff size={32} strokeWidth={1.5} />
                    <span className="text-xs font-semibold">
                      Organic Soil Health
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102519]/75 via-[#102519]/5 to-transparent" />

                {/* TOP LABEL */}

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 backdrop-blur-md">
                  <Sprout size={14} className="text-[#388C43]" />

                  <span className="text-[9px] font-extrabold tracking-[1px] text-[#285D33]">
                    {t.imageLabel}
                  </span>
                </div>

                {/* BOTTOM CAPTION */}

                <motion.div
                  {...reveal(0.55, 15)}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="mb-3 h-[2px] w-10 bg-[#FFD93D]" />

                  <p className="max-w-[340px] text-[17px] font-extrabold leading-[27px] text-white sm:text-[19px]">
                    {t.imageCaption}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* DECORATIVE BORDER */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -left-3 -z-10 h-[55%] w-[55%] rounded-[24px] border-[2px] border-[#C0DDB6]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <div>
            <motion.p
              {...reveal(0.22)}
              className="text-[15px] font-semibold leading-[29px] text-[#355B40]"
            >
              {t.p1}
            </motion.p>

            <motion.p
              {...reveal(0.3)}
              className="mt-4 text-[14px] leading-[27px] text-[#6B7E70]"
            >
              {t.p2}
            </motion.p>

            <motion.div
              {...reveal(0.38)}
              className="mt-7 flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#E5F1DF] text-[#398C44]">
                <Leaf size={19} />
              </span>

              <h3 className="text-[18px] font-extrabold text-[#173923]">
                {t.principles}
              </h3>
            </motion.div>

            {/* PRINCIPLE ROWS */}

            <div className="mt-5 space-y-3">
              {t.items.map((item, index) => {
                const Icon = ICONS[index];

                return (
                  <motion.div
                    key={index}
                    {...reveal(0.44 + index * 0.09, 14)}
                    className="group flex items-center gap-4 rounded-[13px] border border-[#E0EBDD] bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#B1D6AA] hover:shadow-[0_8px_25px_rgba(23,57,35,0.06)]"
                  >
                    {/* NUMBER */}

                    <span className="text-[11px] font-extrabold text-[#9FBA9D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* ICON */}

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF4E6] text-[#3B9146]">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>

                    {/* TEXT */}

                    <span className="flex-1 text-[13px] font-bold leading-[23px] text-[#355740] sm:text-[14px]">
                      {item}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#B5CBB3] transition-colors group-hover:text-[#43B649]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONCLUSION */}

        <motion.div
          {...reveal(0.6, 25)}
          className="relative mt-11 overflow-hidden rounded-[18px] bg-[#E9F3E5] px-6 py-6 sm:mt-12 sm:px-8"
        >
          <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#43B649]" />

          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#3C9147]">
              <Sprout size={21} />
            </span>

            <p className="text-[14px] font-bold leading-[28px] text-[#315A3C] sm:text-[15px]">
              {t.conclusion}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
