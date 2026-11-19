
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Leaf,
  Sprout,
  Bug,
  Droplets,
  ChartNoAxesColumnIncreasing,
  ScanEye,
  ClipboardCheck,
  ImageOff,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const IMAGE = "https://i.pinimg.com/736x/12/64/33/12643304d1f7b2401d26980d8357303e.jpg";

const CONTENT = {
  mr: {
    eyebrow: "CROP OBSERVATION & MANAGEMENT",
    heading: "पिकांची नियमित पाहणी का महत्त्वाची?",
    p1:
      "पिकांची नियमित पाहणी केल्यामुळे त्यांच्या वाढीतील बदल वेळेवर लक्षात येऊ शकतात.",
    p2:
      "पानांचा रंग, नवीन वाढ, जमिनीतील ओलावा आणि कीड किंवा रोगाची सुरुवातीची लक्षणे यांचे निरीक्षण करणे उपयुक्त ठरते.",
    subheading: "पीक निरीक्षणात काय पाहावे?",
    points: [
      "पानांचा रंग आणि वाढ",
      "खोड व मुळांच्या स्थितीतील बदल",
      "कीड किंवा रोगाची संभाव्य लक्षणे",
      "जमिनीतील ओलावा",
      "पिकांच्या वाढीतील असमानता",
    ],
    note:
      "निरीक्षणातून समस्या लक्षात आल्यास योग्य निदान आणि कृषी तज्ज्ञांच्या मार्गदर्शनानुसार पुढील निर्णय घेता येतात.",
    imageLabel: "CROP HEALTH SCAN",
    noteLabel: "EXPERT GUIDANCE",
  },

  en: {
    eyebrow: "CROP OBSERVATION & MANAGEMENT",
    heading: "Why Is Regular Crop Observation Important?",
    p1:
      "Regular crop observation can help identify changes in crop growth at an early stage.",
    p2:
      "Observing leaf colour, new growth, soil moisture and early signs of pests or diseases can be useful.",
    subheading: "What Should You Observe in Crops?",
    points: [
      "Leaf colour and growth",
      "Changes in stem and root condition",
      "Possible signs of pests or diseases",
      "Soil moisture",
      "Uneven crop growth",
    ],
    note:
      "When observation reveals a possible problem, further decisions can be made based on proper diagnosis and guidance from agricultural experts.",
    imageLabel: "CROP HEALTH SCAN",
    noteLabel: "EXPERT GUIDANCE",
  },

  hi: {
    eyebrow: "CROP OBSERVATION & MANAGEMENT",
    heading: "फसलों का नियमित निरीक्षण क्यों महत्वपूर्ण है?",
    p1:
      "फसलों का नियमित निरीक्षण करने से उनकी वृद्धि में होने वाले बदलाव समय पर पहचाने जा सकते हैं।",
    p2:
      "पत्तियों का रंग, नई वृद्धि, मिट्टी की नमी और कीट या रोग के शुरुआती लक्षणों का निरीक्षण उपयोगी होता है।",
    subheading: "फसल निरीक्षण में क्या देखें?",
    points: [
      "पत्तियों का रंग और वृद्धि",
      "तने और जड़ों की स्थिति में बदलाव",
      "कीट या रोग के संभावित लक्षण",
      "मिट्टी में नमी",
      "फसल की वृद्धि में असमानता",
    ],
    note:
      "निरीक्षण में समस्या दिखाई देने पर उचित निदान और कृषि विशेषज्ञों के मार्गदर्शन के अनुसार आगे के निर्णय लिए जा सकते हैं।",
    imageLabel: "CROP HEALTH SCAN",
    noteLabel: "EXPERT GUIDANCE",
  },
};

const ICONS = [
  Leaf,
  Sprout,
  Bug,
  Droplets,
  ChartNoAxesColumnIncreasing,
];

const EASE = [0.22, 1, 0.36, 1];

export default function CropObservation() {
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
      id="crop-observation"
      aria-labelledby="crop-observation-heading"
      className="relative overflow-hidden bg-[#F8FAF5] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* HEADER */}

        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#43B649]" />

            <span className="text-[12px] font-extrabold tracking-[1.5px] text-[#41884A]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#43B649]" />
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            id="crop-observation-heading"
            className="text-[clamp(2rem,3.5vw,3.3rem)] font-extrabold leading-[1.2] tracking-[-0.6px] text-[#173923]"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            {...reveal(0.2)}
            className="mx-auto mt-5 max-w-[800px] text-[17px] font-semibold leading-[31px] text-[#365C40]"
          >
            {t.p1}
          </motion.p>

          <motion.p
            {...reveal(0.3)}
            className="mx-auto mt-3 max-w-[800px] text-[16px] leading-[29px] text-[#6C7D70]"
          >
            {t.p2}
          </motion.p>
        </div>

        {/* IMAGE + INSPECTION ROWS */}

        <div className="mt-12 grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

          {/* LEFT IMAGE */}

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
            className="relative"
          >
            <div className="relative h-[360px] overflow-hidden rounded-[22px] bg-[#DCE9D6] sm:h-[450px] lg:h-[540px]">

              {!imageFailed ? (
                <motion.img
                  src={IMAGE}
                  alt="Farmer inspecting crop leaves in the field"
                  loading="lazy"
                  onError={() => setImageFailed(true)}
                  initial={{ scale: 1.08 }}
                  animate={{ scale: visible ? 1 : 1.08 }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.2,
                    ease: EASE,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[#5C9464]">
                  <ImageOff size={42} />
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102519]/65 via-transparent to-transparent" />

              {/* SCANNER CORNERS */}

              <div className="pointer-events-none absolute inset-10">
                <span className="absolute left-0 top-0 h-12 w-12 border-l-[3px] border-t-[3px] border-[#FFD93D]" />
                <span className="absolute right-0 top-0 h-12 w-12 border-r-[3px] border-t-[3px] border-[#FFD93D]" />
                <span className="absolute bottom-0 left-0 h-12 w-12 border-b-[3px] border-l-[3px] border-[#FFD93D]" />
                <span className="absolute bottom-0 right-0 h-12 w-12 border-b-[3px] border-r-[3px] border-[#FFD93D]" />

                {/* ANIMATED SCAN LINE */}

                {!reduceMotion && (
                  <motion.div
                    animate={
                      visible
                        ? { top: ["8%", "88%", "8%"] }
                        : { top: "8%" }
                    }
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-[#FFD93D]/70 shadow-[0_0_15px_#FFD93D]"
                  />
                )}
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#173923]/85 px-4 py-2 text-[11px] font-extrabold tracking-[1.3px] text-[#FFD93D] backdrop-blur-sm">
                  <ScanEye size={16} />
                  {t.imageLabel}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT INSPECTION LIST */}

          <div>
            <motion.div
              {...reveal(0.35)}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#E5F1E1] text-[#41884A]">
                <ClipboardCheck size={23} />
              </span>

              <h3 className="text-[22px] font-extrabold text-[#173923] sm:text-[25px]">
                {t.subheading}
              </h3>
            </motion.div>

            <div className="space-y-3">
              {t.points.map((point, index) => {
                const Icon = ICONS[index];

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: visible ? 1 : 0,
                      x: visible ? 0 : 30,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: visible ? 0.4 + index * 0.1 : 0,
                      ease: EASE,
                    }}
                    className={`group flex items-center gap-4 rounded-[15px] border px-5 py-4 transition-all duration-300 hover:translate-x-1 ${
                      index % 2 === 0
                        ? "border-[#DCE9D7] bg-white"
                        : "border-[#E0EBDA] bg-[#EDF5E9]"
                    }`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#173923] text-[#FFD93D]">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>

                    <div className="flex-1">
                      <span className="text-[11px] font-extrabold tracking-[1px] text-[#7FA17D]">
                        0{index + 1}
                      </span>

                      <p className="mt-1 text-[16px] font-bold leading-[27px] text-[#31553B]">
                        {point}
                      </p>
                    </div>

                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#6DA875]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONCLUSION */}

        <motion.div
          {...reveal(0.6)}
          className="mt-12 flex flex-col items-start gap-4 rounded-[18px] bg-[#173923] px-6 py-6 sm:flex-row sm:items-center sm:gap-5 sm:px-8"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-white/10 text-[#FFD93D]">
            <ClipboardCheck size={24} />
          </span>

          <div>
            <span className="text-[11px] font-extrabold tracking-[1.4px] text-[#A8D9B0]">
              {t.noteLabel}
            </span>

            <p className="mt-1 text-[16px] font-semibold leading-[29px] text-white">
              {t.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
