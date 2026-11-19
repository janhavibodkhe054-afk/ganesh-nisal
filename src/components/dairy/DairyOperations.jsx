
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  PawPrint,
  Wheat,
  Sparkles,
  ClipboardList,
  Milk,
  Info,
  ImageOff,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const EASE = [0.22, 1, 0.36, 1];

const OPERATIONS = [
  { icon: PawPrint, number: "01" },
  { icon: Wheat, number: "02" },
  { icon: Sparkles, number: "03" },
  { icon: ClipboardList, number: "04" },
  { icon: Milk, number: "05" },
];

const CONTENT = {
  mr: {
    eyebrow: "DAIRY OPERATIONS",
    heading: "दुग्धव्यवसायातील दैनंदिन कामकाज",
    intro:
      "दुग्धव्यवसायामध्ये नियमित देखभाल आणि योग्य व्यवस्थापन महत्त्वाचे असते.",
    description:
      "या विभागात गणेश निसाळ यांच्या डेअरीतील प्रत्यक्ष कार्यपद्धतीची माहिती उपलब्ध झाल्यावर दाखवता येईल.",
    areas: [
      {
        title: "पशुपालन",
        description: "जनावरांची देखभाल आणि उपलब्ध फोटो",
      },
      {
        title: "चारा व्यवस्थापन",
        description: "चाऱ्याची व्यवस्था व प्रत्यक्ष प्रक्रिया",
      },
      {
        title: "स्वच्छता",
        description: "डेअरी परिसरातील स्वच्छतेचे व्यवस्थापन",
      },
      {
        title: "दैनंदिन काम",
        description: "नियमित कामकाजाची प्रत्यक्ष दृश्ये",
      },
      {
        title: "दूध संकलन",
        description: "प्रत्यक्ष प्रक्रिया उपलब्ध असल्यास तिची माहिती",
      },
    ],
    banner: "दुग्धव्यवसाय — नियमित देखभाल आणि नियोजन",
    note:
      "हे दुग्धव्यवसायातील सामान्य Work Areas आहेत; गणेश निसाळ यांच्या युनिटमधील पुष्टी झालेली विशिष्ट कार्यपद्धती नाही.",
  },

  en: {
    eyebrow: "DAIRY OPERATIONS",
    heading: "Daily Operations in Dairy Farming",
    intro:
      "Regular care and proper management are important in dairy farming.",
    description:
      "Details of Ganesh Nisal's actual dairy operations can be presented here once available.",
    areas: [
      {
        title: "Animal Husbandry",
        description: "Livestock care and available photographs",
      },
      {
        title: "Fodder Management",
        description: "Fodder arrangements and actual processes",
      },
      {
        title: "Hygiene",
        description: "Cleanliness management in the dairy premises",
      },
      {
        title: "Daily Activities",
        description: "Photographs of regular daily operations",
      },
      {
        title: "Milk Collection",
        description: "Details of the actual process, if available",
      },
    ],
    banner: "Dairy Farming — Care and Planning",
    note:
      "These are general dairy work areas, not confirmed specific practices at Ganesh Nisal's dairy unit.",
  },

  hi: {
    eyebrow: "DAIRY OPERATIONS",
    heading: "डेयरी व्यवसाय का दैनिक कामकाज",
    intro:
      "डेयरी व्यवसाय में नियमित देखभाल और उचित प्रबंधन महत्वपूर्ण होते हैं।",
    description:
      "गणेश निसाळ की डेयरी की वास्तविक कार्यप्रणाली की जानकारी उपलब्ध होने पर यहाँ प्रस्तुत की जा सकती है।",
    areas: [
      {
        title: "पशुपालन",
        description: "पशुओं की देखभाल और उपलब्ध तस्वीरें",
      },
      {
        title: "चारा प्रबंधन",
        description: "चारे की व्यवस्था और वास्तविक प्रक्रिया",
      },
      {
        title: "स्वच्छता",
        description: "डेयरी परिसर में स्वच्छता प्रबंधन",
      },
      {
        title: "दैनिक कार्य",
        description: "नियमित कामकाज की वास्तविक तस्वीरें",
      },
      {
        title: "दूध संग्रह",
        description: "वास्तविक प्रक्रिया उपलब्ध होने पर जानकारी",
      },
    ],
    banner: "डेयरी व्यवसाय — देखभाल और नियोजन",
    note:
      "ये सामान्य डेयरी कार्य क्षेत्र हैं, गणेश निसाळ की डेयरी की पुष्टि की गई विशिष्ट कार्यप्रणाली नहीं।",
  },
};

export default function DairyOperations() {
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
      id="dairy-operations"
      aria-labelledby="dairy-operations-heading"
      className="relative overflow-hidden bg-[#F8FAF5] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.43fr_0.57fr] lg:gap-20">

          {/* LEFT CONTENT */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div {...reveal(0)}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#43B649]" />
                <span className="text-[12px] font-extrabold tracking-[1.5px] text-[#41884A]">
                  {t.eyebrow}
                </span>
              </div>

              <h2
                id="dairy-operations-heading"
                className="text-[clamp(2rem,3.4vw,3.2rem)] font-extrabold leading-[1.2] text-[#173923]"
              >
                {t.heading}
              </h2>

              <p className="mt-6 text-[17px] font-semibold leading-[31px] text-[#365C40]">
                {t.intro}
              </p>

              <p className="mt-4 text-[15px] leading-[29px] text-[#718373]">
                {t.description}
              </p>
            </motion.div>

            {/* SMALL PHOTO BANNER */}

            <motion.div
              {...reveal(0.2)}
              className="relative mt-9 h-[230px] overflow-hidden rounded-[20px] bg-[#DCE9D5]"
            >
              {!imageFailed ? (
                <img
                  src="/images/dairy-farming.webp"
                  alt="Dairy farming"
                  loading="lazy"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#71916F]">
                  <ImageOff size={38} />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#102519]/85 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[16px] font-bold leading-[27px] text-white">
                  {t.banner}
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT TIMELINE */}

          <div className="relative">
            <div className="absolute bottom-10 left-[27px] top-8 w-[2px] bg-[#D6E7D0] sm:left-[31px]" />

            <div className="space-y-5">
              {OPERATIONS.map((operation, index) => {
                const Icon = operation.icon;
                const item = t.areas[index];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{
                      opacity: visible ? 1 : 0,
                      x: visible ? 0 : 25,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: visible ? 0.1 + index * 0.1 : 0,
                      ease: EASE,
                    }}
                    className="group relative flex items-start gap-5 sm:gap-6"
                  >
                    {/* TIMELINE ICON */}

                    <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[15px] border-[4px] border-[#F8FAF5] bg-[#173923] text-[#FFD93D] shadow-[0_8px_20px_rgba(23,57,35,0.1)] sm:h-[64px] sm:w-[64px]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    {/* CONTENT */}

                    <div className="flex min-h-[110px] flex-1 items-center rounded-[18px] border border-[#DFE9D9] bg-white px-5 py-5 transition-all duration-300 group-hover:border-[#A9CFA1] group-hover:shadow-[0_12px_30px_rgba(23,57,35,0.06)] sm:px-7">
                      <div className="flex-1">
                        <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#86A688]">
                          {operation.number}
                        </span>

                        <h3 className="mt-1 text-[20px] font-extrabold text-[#173923]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[15px] leading-[27px] text-[#6B806D]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* IMPORTANT NOTE */}

        <motion.div
          {...reveal(0.3)}
          className="mt-12 flex items-start gap-3 border-t border-[#DFE9D9] pt-6"
        >
          <Info
            size={19}
            className="mt-1 shrink-0 text-[#41884A]"
          />

          <p className="max-w-[950px] text-[14px] leading-[26px] text-[#718373]">
            {t.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
