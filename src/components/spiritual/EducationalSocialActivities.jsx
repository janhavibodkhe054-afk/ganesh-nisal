
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  CircleHelp,
  TreePine,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "EDUCATIONAL & SOCIAL INITIATIVES",
    title1: "भक्तीसोबत ज्ञान आणि",
    title2: "समाजहिताचे कार्य!",
    intro:
      "श्री इच्छापूर्ती शिव मंदिराच्या श्रावण विशेष कार्यक्रमांतर्गत धार्मिक उपक्रमांसोबत शैक्षणिक आणि सामाजिक उपक्रमांचाही समावेश करण्यात आला होता.",
    description:
      "या उपक्रमांमध्ये विद्यार्थ्यांसाठी माहितीपर कार्यक्रम, प्रश्नमंजुषा, आध्यात्मिक मार्गदर्शन आणि वृक्षवाटप यांसारख्या उपक्रमांचा समावेश होता.",
    conclusion:
      "धार्मिक कार्यक्रमांच्या माध्यमातून ज्ञानवृद्धी आणि सामाजिक सहभागाला प्रोत्साहन देण्याचा संदेश या उपक्रमांतून देण्यात आला.",
    activities: [
      {
        title: "आध्यात्मिक मार्गदर्शन",
        description:
          "धार्मिक आणि आध्यात्मिक विषयांवरील मार्गदर्शन.",
        category: "SPIRITUAL GUIDANCE",
      },
      {
        title: "विद्यार्थ्यांसाठी ज्ञानवर्धक उपक्रम",
        description:
          "माहिती आणि शिकण्याशी संबंधित कार्यक्रम.",
        category: "STUDENT LEARNING",
      },
      {
        title: "प्रश्नमंजुषा",
        description:
          "विद्यार्थ्यांच्या सहभागासाठी ज्ञानाधारित उपक्रम.",
        category: "KNOWLEDGE QUIZ",
      },
      {
        title: "वृक्षवाटप",
        description:
          "पर्यावरणाबाबत जागरूकता निर्माण करणारा उपक्रम.",
        category: "ENVIRONMENT",
      },
    ],
  },
  en: {
    eyebrow: "EDUCATIONAL & SOCIAL INITIATIVES",
    title1: "Knowledge, Devotion",
    title2: "& Social Responsibility",
    intro:
      "The special Shravan programs at Shri Ichhapurti Shiv Mandir included educational and social initiatives alongside religious activities.",
    description:
      "These initiatives included informative sessions for students, quizzes, spiritual guidance and tree distribution.",
    conclusion:
      "Through these activities, the programs encouraged learning and community participation.",
    activities: [
      {
        title: "Spiritual Guidance",
        description: "Guidance on religious and spiritual subjects.",
        category: "SPIRITUAL GUIDANCE",
      },
      {
        title: "Educational Activities for Students",
        description: "Informative and learning-focused programs.",
        category: "STUDENT LEARNING",
      },
      {
        title: "Knowledge Quiz",
        description:
          "Knowledge-based activities encouraging student participation.",
        category: "KNOWLEDGE QUIZ",
      },
      {
        title: "Tree Distribution",
        description:
          "An initiative encouraging environmental awareness.",
        category: "ENVIRONMENT",
      },
    ],
  },
  hi: {
    eyebrow: "EDUCATIONAL & SOCIAL INITIATIVES",
    title1: "भक्ति के साथ ज्ञान और",
    title2: "समाजहित के कार्य!",
    intro:
      "श्री इच्छापूर्ति शिव मंदिर के श्रावण विशेष कार्यक्रमों में धार्मिक गतिविधियों के साथ शैक्षणिक और सामाजिक उपक्रम भी शामिल थे।",
    description:
      "इनमें विद्यार्थियों के लिए जानकारीपूर्ण कार्यक्रम, प्रश्नोत्तरी, आध्यात्मिक मार्गदर्शन और वृक्ष वितरण शामिल थे।",
    conclusion:
      "इन गतिविधियों के माध्यम से ज्ञानवृद्धि और सामाजिक सहभागिता को प्रोत्साहित किया गया।",
    activities: [
      {
        title: "आध्यात्मिक मार्गदर्शन",
        description: "धार्मिक और आध्यात्मिक विषयों पर मार्गदर्शन।",
        category: "SPIRITUAL GUIDANCE",
      },
      {
        title: "विद्यार्थियों के लिए ज्ञानवर्धक उपक्रम",
        description: "जानकारी और सीखने से जुड़े कार्यक्रम।",
        category: "STUDENT LEARNING",
      },
      {
        title: "प्रश्नोत्तरी",
        description:
          "विद्यार्थियों की सहभागिता के लिए ज्ञान-आधारित गतिविधियाँ।",
        category: "KNOWLEDGE QUIZ",
      },
      {
        title: "वृक्ष वितरण",
        description:
          "पर्यावरण के प्रति जागरूकता बढ़ाने वाली पहल।",
        category: "ENVIRONMENT",
      },
    ],
  },
};

const ACTIVITIES = [
  {
    icon: BookOpen,
    number: "01",
    color: "#C0924A",
    bg: "#F8F0E1",
  },
  {
    icon: GraduationCap,
    number: "02",
    color: "#356B48",
    bg: "#EAF2E8",
  },
  {
    icon: CircleHelp,
    number: "03",
    color: "#9B7040",
    bg: "#F6EDE1",
  },
  {
    icon: TreePine,
    number: "04",
    color: "#3C7750",
    bg: "#E7F0E4",
  },
];

export default function EducationalSocialActivities() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="educational-social-activities"
      className="relative overflow-hidden bg-[#FFFDF7] py-14 sm:py-16 lg:py-[76px]"
    >
      {/* DECORATIVE BACKGROUND */}

      <div className="pointer-events-none absolute -left-44 top-0 h-[400px] w-[400px] rounded-full bg-[#E8F0E2]/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-[380px] w-[380px] rounded-full bg-[#F7E9D0]/55 blur-[100px]" />

      <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">

        {/* CENTERED EDITORIAL HEADING */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B88335]" />
            <span className="text-[10px] font-extrabold tracking-[2.2px] text-[#9A712D] sm:text-[11px]">
              {t.eyebrow}
            </span>
            <span className="h-px w-8 bg-[#B88335]" />
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3.3rem)] font-extrabold leading-[1.2] tracking-[-1px] text-[#102519]">
            {t.title1}
            <span className="block text-[#B88335]">
              {t.title2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[26px] text-[#526457] sm:text-[15px]">
            {t.intro}
          </p>

          <p className="mx-auto mt-2 max-w-[760px] text-[13px] leading-[24px] text-[#778477] sm:text-[14px]">
            {t.description}
          </p>
        </motion.div>

        {/* ASYMMETRIC ACTIVITY GRID */}

        <div className="relative mt-10 sm:mt-12">

          {/* CONNECTING LINE - DESKTOP */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[76%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C7D8C5] to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-4">
            {ACTIVITIES.map((activity, index) => {
              const Icon = activity.icon;
              const item = t.activities[index];

              return (
                <motion.div
                  key={activity.number}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 32 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : { y: -8 }
                  }
                  className={`group relative ${
                    index === 1 || index === 3
                      ? "lg:mt-10"
                      : ""
                  }`}
                >
                  <div className="relative flex min-h-[245px] flex-col overflow-hidden rounded-[20px] border border-[#E2E9DC] bg-white p-6 shadow-[0_8px_30px_rgba(16,37,25,0.035)] transition-all duration-300 group-hover:border-[#C9D8C5] group-hover:shadow-[0_18px_40px_rgba(16,37,25,0.09)]">

                    {/* TOP ACCENT */}

                    <div
                      className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{
                        backgroundColor: activity.color,
                      }}
                    />

                    {/* NUMBER + ICON */}

                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px]"
                        style={{
                          backgroundColor: activity.bg,
                          color: activity.color,
                        }}
                      >
                        <Icon size={27} strokeWidth={1.6} />
                      </div>

                      <span className="text-[37px] font-extrabold leading-none text-[#E7ECE4] transition-colors duration-300 group-hover:text-[#D8E3D4]">
                        {activity.number}
                      </span>
                    </div>

                    {/* ACTIVITY CONTENT */}

                    <div className="mt-6">
                      <p
                        className="mb-2 text-[9px] font-extrabold tracking-[1.3px]"
                        style={{
                          color: activity.color,
                        }}
                      >
                        {item.category}
                      </p>

                      <h3 className="text-[17px] font-extrabold leading-[25px] text-[#173923]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-[21px] text-[#69796C]">
                        {item.description}
                      </p>
                    </div>

                    {/* CORNER DETAIL */}

                    <ArrowUpRight
                      size={18}
                      className="absolute bottom-5 right-5 text-[#B6C5B3] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B88335]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-11 flex max-w-[860px] items-start justify-center gap-3 border-t border-[#E3E9DE] pt-6 text-center sm:items-center"
        >
          <Sparkles
            size={19}
            className="mt-0.5 shrink-0 text-[#B88335] sm:mt-0"
          />

          <p className="text-[13px] font-semibold leading-[24px] text-[#48604D] sm:text-[14px]">
            {t.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
