
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Milk,
  Wheat,
  HeartHandshake,
  CalendarCheck2,
  ImageOff,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const DAIRY_IMAGE = "/images/dairy-business.webp";

const CONTENT = {
  mr: {
    eyebrow: "ABOUT DAIRY BUSINESS",
    heading: "शेतीला पूरक व्यवसाय म्हणून दुग्धव्यवसाय",
    p1:
      "दुग्धव्यवसाय हा ग्रामीण अर्थव्यवस्थेतील महत्त्वाच्या कृषीपूरक व्यवसायांपैकी एक आहे.",
    p2:
      "पशुपालन, जनावरांची देखभाल, चारा व्यवस्थापन आणि दैनंदिन कामाचे नियोजन या गोष्टी दुग्धव्यवसायात महत्त्वाच्या असतात.",
    p3:
      "गणेश निसाळ यांनी शेतीसोबत या क्षेत्रातही काम करण्याची निवड केली आहे.",
    p4:
      "त्यांच्या प्रत्यक्ष डेअरी उपक्रमांची माहिती आणि छायाचित्रे या विभागात मांडता येतील.",
    processLabel: "DAIRY OPERATIONS",
    processes: [
      "पशुपालन",
      "जनावरांची देखभाल",
      "चारा व्यवस्थापन",
      "दैनंदिन नियोजन",
    ],
    imageLabel: "FARMING & DAIRY",
  },

  en: {
    eyebrow: "ABOUT DAIRY BUSINESS",
    heading: "Dairy Farming as a Complementary Agricultural Business",
    p1:
      "Dairy farming is one of the important agriculture-related businesses in the rural economy.",
    p2:
      "Animal husbandry, livestock care, fodder management, and planning daily activities are important aspects of dairy operations.",
    p3:
      "Ganesh Nisal has chosen to work in this field alongside agriculture.",
    p4:
      "Information and photographs of his actual dairy activities can be presented in this section.",
    processLabel: "DAIRY OPERATIONS",
    processes: [
      "Animal Husbandry",
      "Livestock Care",
      "Fodder Management",
      "Daily Planning",
    ],
    imageLabel: "FARMING & DAIRY",
  },

  hi: {
    eyebrow: "ABOUT DAIRY BUSINESS",
    heading: "खेती के पूरक व्यवसाय के रूप में दुग्धव्यवसाय",
    p1:
      "दुग्धव्यवसाय ग्रामीण अर्थव्यवस्था के महत्वपूर्ण कृषि-संबंधित व्यवसायों में से एक है।",
    p2:
      "पशुपालन, पशुओं की देखभाल, चारा प्रबंधन और दैनिक कार्यों की योजना डेयरी व्यवसाय के महत्वपूर्ण हिस्से हैं।",
    p3:
      "गणेश निसाळ ने खेती के साथ इस क्षेत्र में भी काम करने का निर्णय लिया है।",
    p4:
      "उनकी वास्तविक डेयरी गतिविधियों की जानकारी और तस्वीरें इस विभाग में प्रस्तुत की जा सकती हैं।",
    processLabel: "DAIRY OPERATIONS",
    processes: [
      "पशुपालन",
      "पशुओं की देखभाल",
      "चारा प्रबंधन",
      "दैनिक नियोजन",
    ],
    imageLabel: "FARMING & DAIRY",
  },
};

const ICONS = [
  Milk,
  HeartHandshake,
  Wheat,
  CalendarCheck2,
];

const EASE = [0.22, 1, 0.36, 1];

export default function AboutDairyBusiness() {
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
      id="dairy-overview"
      aria-labelledby="dairy-overview-heading"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* TOP CONTENT */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT TEXT */}

          <div>
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
              {...reveal(0.1)}
              id="dairy-overview-heading"
              className="text-[clamp(2rem,3.4vw,3.2rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
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
              className="mt-4 text-[16px] leading-[30px] text-[#687B6B]"
            >
              {t.p2}
            </motion.p>

            {/* GANESH NISAL CONNECTION */}

            <motion.div
              {...reveal(0.4)}
              className="mt-7 border-l-[3px] border-[#43B649] bg-[#F4F8F1] px-5 py-5"
            >
              <p className="text-[16px] font-bold leading-[29px] text-[#31553B]">
                {t.p3}
              </p>

              <p className="mt-2 text-[15px] leading-[28px] text-[#667C69]">
                {t.p4}
              </p>
            </motion.div>
          </div>

          {/* RIGHT PHOTO */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{
              opacity: visible ? 1 : 0,
              x: visible ? 0 : 35,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: EASE,
            }}
            className="relative"
          >
            <div className="relative h-[360px] overflow-hidden rounded-[24px] bg-[#E4EFDD] sm:h-[440px] lg:h-[490px]">
              {!imageFailed ? (
                <img
                  src={DAIRY_IMAGE}
                  alt="Ganesh Nisal dairy farming operations"
                  loading="lazy"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#8AA783]">
                  <ImageOff size={42} />
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102519]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD93D] text-[#173923]">
                  <Milk size={21} />
                </span>

                <span className="text-[12px] font-extrabold tracking-[1.3px] text-white">
                  {t.imageLabel}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DAIRY OPERATIONS STRIP */}

        <div className="mt-14 lg:mt-20">
          <motion.div
            {...reveal(0.4)}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#41884A]">
              {t.processLabel}
            </span>

            <span className="h-px flex-1 bg-[#DFE9DA]" />
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.processes.map((process, index) => {
              const Icon = ICONS[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : 22,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: visible ? 0.45 + index * 0.09 : 0,
                    ease: EASE,
                  }}
                  className="group flex items-center gap-4 rounded-[16px] border border-[#DCE9D7] bg-[#F8FAF5] px-5 py-5 transition-all duration-300 hover:border-[#A8CDA0] hover:bg-[#F0F7EB]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[#E4F1DF] text-[#41884A] transition-colors duration-300 group-hover:bg-[#173923] group-hover:text-[#FFD93D]">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                  <div>
                    <span className="text-[11px] font-extrabold text-[#91AD8C]">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-[16px] font-bold leading-[26px] text-[#31553B]">
                      {process}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="ml-auto shrink-0 text-[#9EB99A]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
