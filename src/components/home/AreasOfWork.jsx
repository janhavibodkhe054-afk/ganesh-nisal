
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// IMAGE PATHS
// ==========================================

const WORK_IMAGES = {
  organic:
    "https://i.pinimg.com/1200x/94/2b/9c/942b9cb17bd468b013a694b5609d1b2a.jpg",
  dairy:
    "https://i.pinimg.com/736x/bf/0f/a5/bf0fa506ee226e55f151d116a57eb20d.jpg",
  experiments:
    "https://i.pinimg.com/1200x/16/fd/6a/16fd6a885d5760abb642f20e0cbc724f.jpg",
  education:
    "https://i.pinimg.com/736x/d4/99/8a/d4998a1cb0fb1d98fc32fb1c630bf96f.jpg",
};

// ==========================================
// MULTILINGUAL CONTENT
// ==========================================

const translations = {
  mr: {
    eyebrow: "MY AREAS OF WORK",
    heading1: "माझे कार्यक्षेत्र",
    heading2: "आणि शेतीतील प्रवास",
    intro:
      "शेतीतील अनुभव, नवनवीन प्रयोग आणि ज्ञानाची देवाणघेवाण यांमधून विविध क्षेत्रांत काम करण्याचा माझा प्रयत्न आहे.",

    cards: [
      {
        title: "सेंद्रिय शेती व मातीचे आरोग्य",
        description:
          "जमिनीची सुपीकता, सेंद्रिय कर्ब, गांडूळखत आणि मातीतील जैविक प्रक्रियांबद्दल माहिती व जनजागृती. मातीचे आरोग्य टिकवण्यासाठी उपयुक्त शेतीपद्धती समजून घेणे आणि त्याबाबतचे अनुभव इतर शेतकऱ्यांसोबत शेअर करणे.",
        category: "ORGANIC FARMING",
      },
      {
        title: "शेतीपूरक दुग्धव्यवसाय",
        description:
          "शेतीला जोडधंदा म्हणून स्वीकारलेल्या दुग्धव्यवसायातून कृषी उद्योजकतेची वाटचाल. पशुपालन, दैनंदिन व्यवस्थापन आणि शेतीपूरक व्यवसायातील प्रत्यक्ष अनुभवातून नवीन गोष्टी शिकण्याचा प्रयत्न.",
        category: "DAIRY BUSINESS",
      },
      {
        title: "प्रयोगशील शेती",
        description:
          "गच्चीवरील Strawberry लागवड आणि परसबागेसारख्या वेगळ्या प्रयोगांतून शेतीतील नावीन्याचा शोध. मर्यादित जागेत विविध पिकांच्या लागवडीच्या शक्यता समजून घेण्यासाठी प्रत्यक्ष प्रयोगांवर भर.",
        category: "FARMING EXPERIMENTS",
      },
      {
        title: "कृषी शिक्षण व डिजिटल जनजागृती",
        description:
          "Social Media च्या माध्यमातून मराठी भाषेत शेतीविषयक माहिती शेतकऱ्यांपर्यंत पोहोचवण्याचा प्रयत्न. शेतीतील अनुभव, उपयुक्त माहिती आणि नवीन संकल्पना सोप्या भाषेत मांडून ज्ञानाची देवाणघेवाण करणे.",
        category: "DIGITAL AWARENESS",
      },
    ],
  },

  en: {
    eyebrow: "MY AREAS OF WORK",
    heading1: "My Areas of Work",
    heading2: "& Farming Journey",
    intro:
      "Through practical farming, new experiments and knowledge sharing, I continue to explore different areas of agriculture.",

    cards: [
      {
        title: "Organic Farming & Soil Health",
        description:
          "Sharing awareness about soil fertility, organic carbon, vermicompost and biological processes in the soil. Exploring practical farming methods that support soil health and sharing useful experiences with fellow farmers.",
        category: "ORGANIC FARMING",
      },
      {
        title: "Dairy Farming",
        description:
          "Exploring agricultural entrepreneurship through dairy farming as a complementary activity. Learning through practical experiences in animal care, daily management and farm-related business activities.",
        category: "DAIRY BUSINESS",
      },
      {
        title: "Experimental Farming",
        description:
          "Exploring new ideas through rooftop strawberry cultivation, kitchen gardens and practical experiments. Focusing on hands-on experimentation to understand the possibilities of growing different crops in limited spaces.",
        category: "FARMING EXPERIMENTS",
      },
      {
        title: "Agricultural Education & Digital Awareness",
        description:
          "Sharing practical agricultural knowledge with Marathi-speaking farmers through social media. Presenting farming experiences, useful information and new agricultural ideas in a simple and accessible way.",
        category: "DIGITAL AWARENESS",
      },
    ],
  },

  hi: {
    eyebrow: "MY AREAS OF WORK",
    heading1: "मेरे कार्यक्षेत्र",
    heading2: "और खेती की यात्रा",
    intro:
      "खेती के अनुभव, नए प्रयोग और ज्ञान साझा करने के माध्यम से कृषि के विभिन्न क्षेत्रों में काम करने का मेरा प्रयास है।",

    cards: [
      {
        title: "जैविक खेती और मिट्टी का स्वास्थ्य",
        description:
          "मिट्टी की उर्वरता, जैविक कार्बन, वर्मीकम्पोस्ट और मिट्टी की जैविक प्रक्रियाओं के बारे में जागरूकता। मिट्टी का स्वास्थ्य बनाए रखने वाली उपयोगी कृषि पद्धतियों को समझना और अपने अनुभव अन्य किसानों के साथ साझा करना।",
        category: "ORGANIC FARMING",
      },
      {
        title: "डेयरी व्यवसाय",
        description:
          "खेती के साथ पूरक व्यवसाय के रूप में डेयरी फार्मिंग के माध्यम से कृषि उद्यमिता की यात्रा। पशुपालन, दैनिक प्रबंधन और कृषि से जुड़े व्यवसायों के व्यावहारिक अनुभवों से नई बातें सीखने का प्रयास।",
        category: "DAIRY BUSINESS",
      },
      {
        title: "प्रयोगशील खेती",
        description:
          "छत पर स्ट्रॉबेरी की खेती और किचन गार्डन जैसे प्रयोगों से नए तरीकों की खोज। सीमित स्थान में विभिन्न फसलों की खेती की संभावनाओं को समझने के लिए व्यावहारिक प्रयोगों पर ध्यान।",
        category: "FARMING EXPERIMENTS",
      },
      {
        title: "कृषि शिक्षा और डिजिटल जागरूकता",
        description:
          "सोशल मीडिया के माध्यम से मराठी भाषा में किसानों तक कृषि संबंधी जानकारी पहुँचाना। खेती के अनुभव, उपयोगी जानकारी और नए विचारों को सरल भाषा में प्रस्तुत करके ज्ञान साझा करना।",
        category: "DIGITAL AWARENESS",
      },
    ],
  },
};

// ==========================================
// CARD CONFIG
// ==========================================

const cardConfig = [
  { image: WORK_IMAGES.organic },
  { image: WORK_IMAGES.dairy },
  { image: WORK_IMAGES.experiments },
  { image: WORK_IMAGES.education },
];

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AreasOfWork() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const t = translations[language] || translations.mr;

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="areas-of-work"
      aria-labelledby="areas-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FCFDFB]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-48
          h-[500px] w-[500px]
          rounded-full
          bg-[#EAF6E6]/60
          blur-[110px]
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          relative z-10 mx-auto
          max-w-[1440px]
          px-5 sm:px-10
          lg:px-12 xl:px-16
        "
      >
        {/* SECTION HEADER */}

        <div
          className="
            mb-11 flex flex-col gap-5
            lg:mb-14 lg:flex-row
            lg:items-end lg:justify-between
          "
        >
          <motion.div {...reveal(0.05)}>
            {/* EYEBROW */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#43B649]" />

              <span
                className="
                  text-[11px] font-bold
                  tracking-[2px]
                  text-[#398B42]
                "
              >
                {t.eyebrow}
              </span>
            </div>

            {/* HEADING */}

            <h2
              id="areas-heading"
              className="
                text-[clamp(1.9rem,3vw,3rem)]
                font-extrabold
                leading-[1.3]
                tracking-[-0.7px]
                text-[#1E3D29]
              "
            >
              {t.heading1}
              <br />

              <span className="text-[#43AD49]">
                {t.heading2}
              </span>
            </h2>
          </motion.div>

          {/* INTRO */}

          <motion.p
            {...reveal(0.15)}
            className="
              max-w-[420px]
              text-[13px]
              leading-[26px]
              text-[#657568]
              sm:text-[14px]
            "
          >
            {t.intro}
          </motion.p>
        </div>

        {/* FOUR EDITORIAL CARDS */}

        <div
          className="
            grid grid-cols-1
            gap-x-6 gap-y-12
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-x-5
            xl:gap-x-7
          "
        >
          {t.cards.map((card, index) => {
            const config = cardConfig[index];

            return (
              <motion.article
                key={`${language}-${index}`}
                {...reveal(index * 0.1)}
                className="
                  group flex h-full
                  min-w-0 flex-col
                "
              >
                {/* IMAGE - NO LINK */}

                <div
                  className="
                    relative block
                    h-[275px]
                    overflow-hidden
                    rounded-[18px_70px_18px_18px]
                    bg-[#E7F2E2]
                    sm:h-[285px]
                    lg:h-[245px]
                    xl:h-[280px]
                  "
                >
                  <img
                    src={config.image}
                    alt={card.title}
                    loading="lazy"
                    className="
                      h-full w-full
                      object-cover
                      transition-transform
                      duration-700 ease-out
                      group-hover:scale-[1.07]
                    "
                  />

                  {/* IMAGE GRADIENT */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#102D1C]/30
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* IMAGE NUMBER */}

                  <span
                    className="
                      absolute left-4 top-4
                      text-[12px] font-bold
                      tracking-[1px]
                      text-white drop-shadow-md
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* CARD CONTENT */}

                <div className="flex flex-1 flex-col pt-6">
                  {/* CATEGORY */}

                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-[2px] w-6 bg-[#43B649]" />

                    <span
                      className="
                        text-[10px] font-bold
                        tracking-[1.2px]
                        text-[#8AA28D]
                      "
                    >
                      {card.category}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-[17px] font-extrabold
                      leading-[1.5]
                      text-[#24452E]
                      lg:text-[15px]
                      xl:text-[17px]
                    "
                  >
                    {card.title}
                  </h3>

                  {/* DESCRIPTION - UPDATED */}

                  <p
                    className="
                      mt-3 flex-1
                      text-[12px]
                      leading-[24px]
                      text-[#69786D]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM DETAIL */}

        <motion.div
          {...reveal(0.3)}
          className="
            mt-14 flex
            items-center justify-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-[#C9DFC6]" />

          <span
            className="
              h-[7px] w-[7px]
              rounded-full
              bg-[#43B649]
            "
          />

          <span className="h-px w-12 bg-[#C9DFC6]" />
        </motion.div>
      </div>

      {/* BOTTOM ACCENT LINE */}

      <div
        aria-hidden="true"
        className="
          absolute bottom-0
          flex h-[3px] w-full
        "
      >
        <div className="h-full w-1/2 bg-[#43B649]" />
        <div className="h-full w-1/2 bg-[#FFD93D]" />
      </div>
    </section>
  );
}
