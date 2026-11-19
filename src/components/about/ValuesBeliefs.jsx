
import React, { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Leaf,
  Sprout,
  Droplets,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "VALUES & BELIEFS",
    heading1: "माती, निसर्ग आणि",
    heading2: "शेतीशी असलेलं नातं",
    intro:
      "शेतीचा विचार करताना केवळ पिकांच्या उत्पादनापुरते मर्यादित न राहता जमिनीचे दीर्घकालीन आरोग्य समजून घेणेही महत्त्वाचे आहे.",
    paragraph2:
      "जमिनीची सुपीकता, नैसर्गिक संसाधनांचा योग्य वापर आणि शेतीकडे अभ्यासपूर्ण दृष्टिकोनातून पाहणे या विषयांना गणेश निसाळ त्यांच्या कृषीविषयक Content मध्ये महत्त्व देतात.",
    paragraph3:
      "शेतीचा अभ्यास, प्रत्यक्ष अनुभव आणि नवीन गोष्टी जाणून घेण्याची उत्सुकता हे त्यांच्या कार्यातून समोर येणारे पैलू आहेत.",
    value1: "जमिनीची सुपीकता",
    value2: "नैसर्गिक संसाधनांचा योग्य वापर",
    value3: "अभ्यास आणि प्रत्यक्ष अनुभव",
    footer: "SOIL • NATURE • AGRICULTURE",
  },
  en: {
    eyebrow: "VALUES & BELIEFS",
    heading1: "A Connection With",
    heading2: "Soil, Nature & Farming",
    intro:
      "Farming is not only about crop production. Understanding the long-term health of the soil is equally important.",
    paragraph2:
      "Ganesh Nisal emphasizes soil fertility, responsible use of natural resources and a thoughtful approach to farming in his agricultural content.",
    paragraph3:
      "Learning about agriculture, gaining practical experience and staying curious about new ideas are key aspects reflected in his work.",
    value1: "Soil Fertility",
    value2: "Responsible Use of Natural Resources",
    value3: "Learning & Practical Experience",
    footer: "SOIL • NATURE • AGRICULTURE",
  },
  hi: {
    eyebrow: "VALUES & BELIEFS",
    heading1: "मिट्टी, प्रकृति और",
    heading2: "खेती से जुड़ा रिश्ता",
    intro:
      "खेती के बारे में सोचते समय केवल फसल उत्पादन तक सीमित न रहकर मिट्टी के दीर्घकालीन स्वास्थ्य को समझना भी महत्वपूर्ण है।",
    paragraph2:
      "मिट्टी की उर्वरता, प्राकृतिक संसाधनों का सही उपयोग और खेती को अध्ययनपूर्ण दृष्टिकोण से देखना ऐसे विषय हैं जिन्हें गणेश निसाल अपनी कृषि संबंधी सामग्री में महत्व देते हैं।",
    paragraph3:
      "कृषि का अध्ययन, प्रत्यक्ष अनुभव और नई बातें सीखने की उत्सुकता उनके कार्य में दिखाई देने वाले महत्वपूर्ण पहलू हैं।",
    value1: "मिट्टी की उर्वरता",
    value2: "प्राकृतिक संसाधनों का सही उपयोग",
    value3: "अध्ययन और प्रत्यक्ष अनुभव",
    footer: "SOIL • NATURE • AGRICULTURE",
  },
};

const EASE = [0.22, 1, 0.36, 1];

export default function ValuesBeliefs() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.12,
  });

  const visible = Boolean(reduceMotion) || isInView;

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

  const values = [
    {
      number: "01",
      Icon: Sprout,
      title: t.value1,
    },
    {
      number: "02",
      Icon: Droplets,
      title: t.value2,
    },
    {
      number: "03",
      Icon: BookOpen,
      title: t.value3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="values-beliefs"
      aria-labelledby="values-heading"
      className="relative isolate overflow-hidden bg-[#F0F6ED] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-[#DDEDD8]/60 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#DCEBD6]/70 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* TOP SECTION LABEL */}

        <motion.div
          {...reveal(0)}
          className="mb-9 flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3E914A] shadow-sm">
            <Leaf size={18} />
          </span>

          <span className="text-[10px] font-extrabold tracking-[1.7px] text-[#43894B]">
            {t.eyebrow}
          </span>
        </motion.div>

        {/* MAIN GRID */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT EDITORIAL CONTENT */}

          <div>
            <h2
              id="values-heading"
              className="text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.22] tracking-[-0.7px] text-[#173923]"
            >
              <motion.span {...reveal(0.1)} className="block">
                {t.heading1}
              </motion.span>

              <motion.span
                {...reveal(0.2)}
                className="block text-[#429849]"
              >
                {t.heading2}
              </motion.span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: visible ? 1 : 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: visible ? 0.3 : 0,
                ease: EASE,
              }}
              style={{ transformOrigin: "left" }}
              className="mt-6 h-[3px] w-14 rounded-full bg-[#FFD93D]"
            />

            <motion.p
              {...reveal(0.3)}
              className="mt-6 max-w-[500px] text-[16px] font-semibold leading-[30px] text-[#355B3E]"
            >
              {t.intro}
            </motion.p>

            <motion.p
              {...reveal(0.4)}
              className="mt-5 max-w-[500px] text-[14px] leading-[28px] text-[#687C6C]"
            >
              {t.paragraph3}
            </motion.p>

            <motion.p
              {...reveal(0.5)}
              className="mt-8 text-[10px] font-extrabold tracking-[2px] text-[#8EAC91]"
            >
              {t.footer}
            </motion.p>
          </div>

          {/* RIGHT VALUES */}

          <div>
            <motion.p
              {...reveal(0.2)}
              className="mb-7 text-[14px] font-medium leading-[28px] text-[#58715E]"
            >
              {t.paragraph2}
            </motion.p>

            <div className="border-t border-[#CDDFCA]">
              {values.map((value, index) => {
                const Icon = value.Icon;

                return (
                  <motion.div
                    key={value.number}
                    {...reveal(0.3 + index * 0.12, 20)}
                    className="group flex items-center gap-5 border-b border-[#CDDFCA] py-6 transition-all duration-300 hover:pl-3"
                  >
                    <span className="w-8 shrink-0 text-[12px] font-extrabold text-[#92AF94]">
                      {value.number}
                    </span>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D1E2CC] bg-white text-[#418B4B] transition-colors duration-300 group-hover:bg-[#173923] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <h3 className="text-[15px] font-extrabold leading-[25px] text-[#254A2F] sm:text-[17px]">
                      {value.title}
                    </h3>

                    <span className="ml-auto hidden h-2 w-2 shrink-0 rounded-full bg-[#43B649] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
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
