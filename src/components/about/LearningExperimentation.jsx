
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sprout,
  FlaskConical,
  MoveUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "LEARNING & EXPERIMENTATION",
    heading: "शिकण्याची आवड,",
    headingHighlight: "प्रयोगांची तयारी!",
    p1: "शेतीतील प्रत्येक नवीन पद्धत समजून घेण्यासाठी अभ्यासाबरोबरच प्रत्यक्ष निरीक्षणालाही महत्त्व असते.",
    p2: "गणेश निसाळ यांच्या कार्यात पारंपरिक शेतीसोबत उपलब्ध जागेचा वेगळ्या पद्धतीने उपयोग करण्याची प्रयोगशीलताही दिसून येते.",
    p3: "गच्चीवरील Strawberry लागवड आणि परसबागेसारखे उपक्रम हे त्यांच्या शेतीतील नावीन्यपूर्ण प्रयोगांचे उदाहरण आहेत.",
    p4: "या प्रयोगांच्या माध्यमातून वेगवेगळ्या लागवड पद्धती जाणून घेण्याची त्यांची आवड दिसून येते.",
    cta: "माझे शेतीतील प्रयोग पाहा",
    experiment1: "गच्चीवरील Strawberry लागवड",
    experiment2: "परसबाग",
    label1: "ROOFTOP EXPERIMENT",
    label2: "HOME GARDENING",
    note: "शिकणे • निरीक्षण • प्रयोग",
  },
  en: {
    eyebrow: "LEARNING & EXPERIMENTATION",
    heading: "A Passion to Learn,",
    headingHighlight: "A Willingness to Experiment!",
    p1: "Understanding every new farming method requires not only study but also practical observation.",
    p2: "Alongside traditional farming, Ganesh Nisal's work reflects an interest in experimenting with different ways to use available space.",
    p3: "Rooftop strawberry cultivation and home gardening are examples of his innovative farming experiments.",
    p4: "These experiments reflect his curiosity to explore and understand different cultivation methods.",
    cta: "Explore My Farming Experiments",
    experiment1: "Rooftop Strawberry Cultivation",
    experiment2: "Home Gardening",
    label1: "ROOFTOP EXPERIMENT",
    label2: "HOME GARDENING",
    note: "Learning • Observation • Experimentation",
  },
  hi: {
    eyebrow: "LEARNING & EXPERIMENTATION",
    heading: "सीखने की लगन,",
    headingHighlight: "प्रयोग करने की तैयारी!",
    p1: "खेती की हर नई पद्धति को समझने के लिए अध्ययन के साथ प्रत्यक्ष निरीक्षण भी महत्वपूर्ण होता है।",
    p2: "पारंपरिक खेती के साथ उपलब्ध जगह का अलग-अलग तरीकों से उपयोग करने की प्रयोगशीलता गणेश निसाल के कार्य में दिखाई देती है।",
    p3: "छत पर Strawberry की खेती और घर के बगीचे जैसे उपक्रम उनके नए कृषि प्रयोगों के उदाहरण हैं।",
    p4: "इन प्रयोगों से खेती की विभिन्न पद्धतियों को समझने में उनकी रुचि दिखाई देती है।",
    cta: "मेरे कृषि प्रयोग देखें",
    experiment1: "छत पर Strawberry की खेती",
    experiment2: "घर का बगीचा",
    label1: "ROOFTOP EXPERIMENT",
    label2: "HOME GARDENING",
    note: "सीखना • निरीक्षण • प्रयोग",
  },
};

const EASE = [0.22, 1, 0.36, 1];

function ExperimentPhoto({
  src,
  alt,
  label,
  title,
  className = "",
  visible,
  reduceMotion,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: visible ? delay : 0,
        ease: EASE,
      }}
      className={`group relative overflow-hidden rounded-[20px] bg-[#DDE9D8] ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1.12 }}
        animate={{ scale: visible ? 1 : 1.12 }}
        transition={{
          duration: reduceMotion ? 0 : 1.3,
          ease: EASE,
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#102519]/85 via-[#102519]/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <span className="text-[9px] font-extrabold tracking-[1.7px] text-[#FFD93D]">
          {label}
        </span>

        <h3 className="mt-2 text-[16px] font-extrabold text-white sm:text-[18px]">
          {title}
        </h3>
      </div>

      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md">
        <MoveUpRight size={17} />
      </div>
    </motion.div>
  );
}

export default function LearningExperimentation() {
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

  return (
    <section
      ref={sectionRef}
      id="learning-experimentation"
      aria-labelledby="learning-heading"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* SUBTLE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-[#EDF5E9] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* TOP HEADING */}

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[720px]">
            <motion.div
              {...reveal(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9F4E6] text-[#3B9146]">
                <FlaskConical size={17} />
              </span>

              <span className="text-[10px] font-extrabold tracking-[1.7px] text-[#458C4D]">
                {t.eyebrow}
              </span>
            </motion.div>

            <h2
              id="learning-heading"
              className="text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.22] tracking-[-0.7px] text-[#173923]"
            >
              <motion.span {...reveal(0.1)} className="block">
                {t.heading}
              </motion.span>

              <motion.span
                {...reveal(0.2)}
                className="block text-[#429849]"
              >
                {t.headingHighlight}
              </motion.span>
            </h2>
          </div>

          <motion.p
            {...reveal(0.25)}
            className="max-w-[350px] text-[14px] font-medium leading-[27px] text-[#65796A]"
          >
            {t.p1}
          </motion.p>
        </div>

        {/* EDITORIAL CONTENT GRID */}

        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-9">

          {/* PHOTO COLLAGE */}

          <div className="grid grid-cols-[1.05fr_0.95fr] gap-3 sm:gap-4">
            <ExperimentPhoto
              src="/images/rooftop-strawberry.webp"
              alt="Rooftop strawberry cultivation experiment"
              label={t.label1}
              title={t.experiment1}
              visible={visible}
              reduceMotion={reduceMotion}
              delay={0.2}
              className="h-[350px] sm:h-[420px]"
            />

            <div className="flex flex-col gap-3 sm:gap-4">
              <ExperimentPhoto
                src="/images/terrace-gardening.webp"
                alt="Home gardening experiment"
                label={t.label2}
                title={t.experiment2}
                visible={visible}
                reduceMotion={reduceMotion}
                delay={0.35}
                className="h-[260px] sm:h-[320px]"
              />

              <motion.div
                {...reveal(0.45)}
                className="flex flex-1 items-center justify-center rounded-[18px] border border-[#DCE9D8] bg-[#F2F8EF] px-3 py-4 text-center"
              >
                <div>
                  <Sprout
                    size={23}
                    className="mx-auto mb-2 text-[#3B9146]"
                  />

                  <p className="text-[11px] font-bold leading-[20px] text-[#47724D]">
                    {t.note}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="flex flex-col justify-center lg:pl-3">
            <motion.div
              {...reveal(0.2)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#43B649]" />
              <span className="text-[10px] font-bold tracking-[1.6px] text-[#6B9671]">
                EXPERIMENTAL FARMING
              </span>
            </motion.div>

            <motion.p
              {...reveal(0.28)}
              className="text-[16px] font-semibold leading-[30px] text-[#2C5237]"
            >
              {t.p2}
            </motion.p>

            <motion.div
              {...reveal(0.36)}
              className="mt-6 border-l-[3px] border-[#FFD93D] pl-5"
            >
              <p className="text-[15px] font-semibold leading-[29px] text-[#3C6246]">
                {t.p3}
              </p>
            </motion.div>

            <motion.p
              {...reveal(0.44)}
              className="mt-6 text-[14px] leading-[28px] text-[#687A6D]"
            >
              {t.p4}
            </motion.p>

            <motion.div
              {...reveal(0.55)}
              className="mt-8"
            >
              <Link
                to="/farming-experiments"
                className="group inline-flex items-center gap-4 rounded-full bg-[#173923] px-6 py-3.5 text-[12px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E7B3B]"
              >
                {t.cta}

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
