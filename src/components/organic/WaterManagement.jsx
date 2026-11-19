
import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Droplets,
  Sprout,
  Waves,
  Gauge,
  CloudRain,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "SMART WATER MANAGEMENT",
    heading: "पाण्याचे योग्य नियोजन, शेतीसाठी महत्त्वाचे!",
    p1:
      "पिकांच्या वाढीसाठी पाणी आवश्यक असले, तरी प्रत्येक पिकाची पाण्याची गरज सारखी नसते.",
    p2:
      "जमिनीचा प्रकार, हवामान, पिकाची अवस्था आणि उपलब्ध सिंचन व्यवस्था यानुसार पाण्याचे नियोजन करणे महत्त्वाचे ठरते.",
    subheading: "पाणी व्यवस्थापनातील प्रमुख मुद्दे:",
    points: [
      {
        title: "पिकाच्या गरजेनुसार सिंचन",
        description:
          "प्रत्येक पिकाची पाण्याची गरज आणि वाढीची अवस्था लक्षात घेऊन सिंचनाचे नियोजन करणे महत्त्वाचे आहे.",
      },
      {
        title: "ठिबक सिंचनासारख्या पद्धती",
        description:
          "ठिबक सिंचनासारख्या पद्धतींचा वापर पाणी थेट पिकांच्या मुळांजवळ पोहोचवण्यासाठी करता येतो.",
      },
      {
        title: "जमिनीची पाणीधारण क्षमता",
        description:
          "जमिनीच्या प्रकारानुसार पाणी साठवून ठेवण्याची क्षमता बदलते. त्यामुळे सिंचनाचे नियोजनही बदलते.",
      },
      {
        title: "पाण्याचा अपव्यय कमी करण्याचे उपाय",
        description:
          "योग्य सिंचन वेळापत्रक आणि पाणीपुरवठ्याची देखभाल केल्याने अनावश्यक पाणीवापर कमी करण्यास मदत होऊ शकते.",
      },
      {
        title: "पिकांमध्ये अतिरिक्त पाणी साचू न देणे",
        description:
          "जमिनीत जास्त काळ पाणी साचल्यास मुळांच्या वाढीवर परिणाम होऊ शकतो. योग्य निचरा महत्त्वाचा असतो.",
      },
    ],
    note:
      "योग्य सिंचन नियोजनामुळे उपलब्ध पाण्याचा अधिक कार्यक्षम वापर करण्यास मदत होऊ शकते.",
    panelLabel: "IRRIGATION CONTROL PANEL",
    selectLabel: "मुद्दा निवडा आणि अधिक जाणून घ्या",
  },

  en: {
    eyebrow: "SMART WATER MANAGEMENT",
    heading: "Proper Water Planning Matters in Agriculture!",
    p1:
      "Water is essential for crop growth, but every crop does not require the same amount of water.",
    p2:
      "Water planning should consider soil type, climate, crop growth stage and the available irrigation system.",
    subheading: "Key Aspects of Water Management:",
    points: [
      {
        title: "Irrigation based on crop requirements",
        description:
          "Plan irrigation according to each crop's water needs and growth stage.",
      },
      {
        title: "Methods such as drip irrigation",
        description:
          "Drip irrigation can help deliver water closer to plant roots.",
      },
      {
        title: "Water-holding capacity of soil",
        description:
          "Different soil types retain different amounts of water, which affects irrigation planning.",
      },
      {
        title: "Measures to reduce water wastage",
        description:
          "Appropriate irrigation schedules and system maintenance can help reduce unnecessary water use.",
      },
      {
        title: "Preventing excess water accumulation",
        description:
          "Prolonged waterlogging can affect root growth, making proper drainage important.",
      },
    ],
    note:
      "Proper irrigation planning can help improve the efficiency of available water use.",
    panelLabel: "IRRIGATION CONTROL PANEL",
    selectLabel: "Select a topic to explore",
  },

  hi: {
    eyebrow: "SMART WATER MANAGEMENT",
    heading: "पानी का सही नियोजन, खेती के लिए महत्वपूर्ण!",
    p1:
      "फसलों की वृद्धि के लिए पानी आवश्यक है, लेकिन हर फसल की पानी की आवश्यकता समान नहीं होती।",
    p2:
      "मिट्टी के प्रकार, मौसम, फसल की अवस्था और उपलब्ध सिंचाई व्यवस्था के अनुसार पानी का नियोजन महत्वपूर्ण होता है।",
    subheading: "जल प्रबंधन के प्रमुख बिंदु:",
    points: [
      {
        title: "फसल की आवश्यकता के अनुसार सिंचाई",
        description:
          "हर फसल की पानी की आवश्यकता और विकास की अवस्था के अनुसार सिंचाई का नियोजन महत्वपूर्ण है।",
      },
      {
        title: "ड्रिप सिंचाई जैसी पद्धतियाँ",
        description:
          "ड्रिप सिंचाई से पानी पौधों की जड़ों के पास पहुँचाया जा सकता है।",
      },
      {
        title: "मिट्टी की जलधारण क्षमता",
        description:
          "अलग-अलग प्रकार की मिट्टी की पानी रोकने की क्षमता अलग होती है।",
      },
      {
        title: "पानी की बर्बादी कम करने के उपाय",
        description:
          "उचित सिंचाई समय और व्यवस्था के रखरखाव से अनावश्यक पानी की खपत कम हो सकती है।",
      },
      {
        title: "फसलों में अतिरिक्त पानी जमा न होने देना",
        description:
          "लंबे समय तक पानी जमा रहने से जड़ों की वृद्धि प्रभावित हो सकती है।",
      },
    ],
    note:
      "उचित सिंचाई नियोजन से उपलब्ध पानी का अधिक कुशल उपयोग करने में मदद मिल सकती है।",
    panelLabel: "IRRIGATION CONTROL PANEL",
    selectLabel: "अधिक जानने के लिए विषय चुनें",
  },
};

const ICONS = [
  Sprout,
  Droplets,
  Waves,
  Gauge,
  CloudRain,
];

const EASE = [0.22, 1, 0.36, 1];

export default function WaterManagement() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  const visible = Boolean(reduceMotion) || inView;

  const reveal = (delay = 0, x = 0, y = 24) => ({
    initial: { opacity: 0, x, y },
    animate: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : x,
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
      id="water-management"
      aria-labelledby="water-management-heading"
      className="relative overflow-hidden bg-[#F5F8F2] py-16 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[80px] border-[#DCEBDA]/50"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">

          {/* LEFT CONTENT */}

          <div className="lg:sticky lg:top-28">

            <motion.div
              {...reveal(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#43B649]" />

              <span className="text-[12px] font-extrabold tracking-[1.5px] text-[#41884A]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1, -25)}
              id="water-management-heading"
              className="text-[clamp(2rem,3.5vw,3.3rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
            >
              {t.heading}
            </motion.h2>

            <motion.p
              {...reveal(0.2)}
              className="mt-6 text-[17px] font-semibold leading-[32px] text-[#365C40]"
            >
              {t.p1}
            </motion.p>

            <motion.p
              {...reveal(0.3)}
              className="mt-4 text-[16px] leading-[30px] text-[#6C7D70]"
            >
              {t.p2}
            </motion.p>

            {/* DECORATIVE WATER GRAPHIC */}

            <motion.div
              {...reveal(0.4)}
              className="mt-9 flex items-center gap-5 border-t border-[#D8E6D6] pt-7"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#173923] text-[#FFD93D]">
                <Droplets size={29} strokeWidth={1.5} />
              </div>

              <p className="text-[15px] font-semibold leading-[27px] text-[#365C40]">
                {t.note}
              </p>
            </motion.div>
          </div>

          {/* RIGHT INTERACTIVE PANEL */}

          <motion.div
            {...reveal(0.2, 30)}
            className="overflow-hidden rounded-[24px] border border-[#DCE8D8] bg-white shadow-[0_20px_60px_rgba(23,57,35,0.07)]"
          >
            {/* PANEL HEADER */}

            <div className="flex items-center justify-between gap-4 bg-[#173923] px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <Droplets
                  size={23}
                  className="text-[#FFD93D]"
                />

                <span className="text-[12px] font-extrabold tracking-[1.4px] text-white">
                  {t.panelLabel}
                </span>
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-bold text-[#D9EAD7]">
                05
              </span>
            </div>

            {/* PANEL DESCRIPTION */}

            <div className="border-b border-[#E4EDE2] px-6 py-5 sm:px-8">
              <h3 className="text-[21px] font-extrabold leading-[30px] text-[#173923]">
                {t.subheading}
              </h3>

              <p className="mt-1 text-[13px] text-[#7C9080]">
                {t.selectLabel}
              </p>
            </div>

            {/* ACCORDION ITEMS */}

            <div className="px-4 py-3 sm:px-6">
              {t.points.map((point, index) => {
                const Icon = ICONS[index];
                const isActive = active === index;

                return (
                  <div
                    key={index}
                    className="border-b border-[#E8EFE6] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActive(isActive ? -1 : index)
                      }
                      aria-expanded={isActive}
                      className="flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] transition-colors duration-300 ${
                          isActive
                            ? "bg-[#173923] text-[#FFD93D]"
                            : "bg-[#EDF5EA] text-[#438C49]"
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </span>

                      <div className="flex-1">
                        <span className="text-[11px] font-bold tracking-[1px] text-[#83A585]">
                          0{index + 1}
                        </span>

                        <p
                          className={`mt-1 text-[16px] font-bold leading-[26px] ${
                            isActive
                              ? "text-[#173923]"
                              : "text-[#4D6653]"
                          }`}
                        >
                          {point.title}
                        </p>
                      </div>

                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-[#729575] transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.3,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pl-16 pr-5 text-[15px] leading-[28px] text-[#667E6B]">
                            {point.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* PANEL FOOTER */}

            <div className="flex items-center gap-3 border-t border-[#E4EDE2] bg-[#F8FBF7] px-6 py-4 sm:px-8">
              <CheckCircle2
                size={19}
                className="shrink-0 text-[#43B649]"
              />

              <p className="text-[13px] font-medium leading-[23px] text-[#5D785F]">
                {t.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
