
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// IMAGE PATHS
const WORK_IMAGES = {
  organic: "https://i.pinimg.com/1200x/94/2b/9c/942b9cb17bd468b013a694b5609d1b2a.jpg",
  dairy: "https://i.pinimg.com/736x/bf/0f/a5/bf0fa506ee226e55f151d116a57eb20d.jpg",
  experiments: "https://i.pinimg.com/1200x/16/fd/6a/16fd6a885d5760abb642f20e0cbc724f.jpg",
  education: "https://i.pinimg.com/736x/d4/99/8a/d4998a1cb0fb1d98fc32fb1c630bf96f.jpg",
};

// MULTILINGUAL CONTENT
const translations = {
  mr: {
    eyebrow: "MY AREAS OF WORK",
    heading1: "माझे कार्यक्षेत्र",
    heading2: "आणि शेतीतील प्रवास",
    intro:
      "शेतीतील अनुभव, नवनवीन प्रयोग आणि ज्ञानाची देवाणघेवाण यांमधून विविध क्षेत्रांत काम करण्याचा माझा प्रयत्न आहे.",
    explore: "अधिक जाणून घ्या",
    cards: [
      {
        title: "सेंद्रिय शेती व मातीचे आरोग्य",
        description:
          "जमिनीची सुपीकता, सेंद्रिय कर्ब, गांडूळखत आणि मातीतील जैविक प्रक्रियांबद्दल माहिती व जनजागृती.",
        category: "ORGANIC FARMING",
      },
      {
        title: "शेतीपूरक दुग्धव्यवसाय",
        description:
          "शेतीला जोडधंदा म्हणून स्वीकारलेल्या दुग्धव्यवसायातून कृषी उद्योजकतेची वाटचाल.",
        category: "DAIRY BUSINESS",
      },
      {
        title: "प्रयोगशील शेती",
        description:
          "गच्चीवरील Strawberry लागवड आणि परसबागेसारख्या वेगळ्या प्रयोगांतून शेतीतील नावीन्याचा शोध.",
        category: "FARMING EXPERIMENTS",
      },
      {
        title: "कृषी शिक्षण व डिजिटल जनजागृती",
        description:
          "Social Media च्या माध्यमातून मराठी भाषेत शेतीविषयक माहिती शेतकऱ्यांपर्यंत पोहोचवण्याचा प्रयत्न.",
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
    explore: "Explore More",
    cards: [
      {
        title: "Organic Farming & Soil Health",
        description:
          "Sharing awareness about soil fertility, organic carbon, vermicompost and biological processes in the soil.",
        category: "ORGANIC FARMING",
      },
      {
        title: "Dairy Farming",
        description:
          "Exploring agricultural entrepreneurship through dairy farming as a complementary activity.",
        category: "DAIRY BUSINESS",
      },
      {
        title: "Experimental Farming",
        description:
          "Exploring new ideas through rooftop strawberry cultivation, kitchen gardens and practical experiments.",
        category: "FARMING EXPERIMENTS",
      },
      {
        title: "Agricultural Education & Digital Awareness",
        description:
          "Sharing practical agricultural knowledge with Marathi-speaking farmers through social media.",
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
    explore: "अधिक जानें",
    cards: [
      {
        title: "जैविक खेती और मिट्टी का स्वास्थ्य",
        description:
          "मिट्टी की उर्वरता, जैविक कार्बन, वर्मीकम्पोस्ट और मिट्टी की जैविक प्रक्रियाओं के बारे में जागरूकता।",
        category: "ORGANIC FARMING",
      },
      {
        title: "डेयरी व्यवसाय",
        description:
          "खेती के साथ पूरक व्यवसाय के रूप में डेयरी फार्मिंग के माध्यम से कृषि उद्यमिता की यात्रा।",
        category: "DAIRY BUSINESS",
      },
      {
        title: "प्रयोगशील खेती",
        description:
          "छत पर स्ट्रॉबेरी की खेती और किचन गार्डन जैसे प्रयोगों से नए तरीकों की खोज।",
        category: "FARMING EXPERIMENTS",
      },
      {
        title: "कृषि शिक्षा और डिजिटल जागरूकता",
        description:
          "सोशल मीडिया के माध्यम से मराठी भाषा में किसानों तक कृषि संबंधी जानकारी पहुँचाना।",
        category: "DIGITAL AWARENESS",
      },
    ],
  },
};

// ALL IMAGES USE THE SAME SHAPE
const cardConfig = [
  {
    image: WORK_IMAGES.organic,
    link: "/organic-farming",
  },
  {
    image: WORK_IMAGES.dairy,
    link: "/dairy-business",
  },
  {
    image: WORK_IMAGES.experiments,
    link: "/farming-experiments",
  },
  {
    image: WORK_IMAGES.education,
    link: "/about",
  },
];

const ease = [0.22, 1, 0.36, 1];

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
                {/* IMAGE */}

                <Link
                  to={config.link}
                  aria-label={card.title}
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

                  {/* HOVER ARROW */}

                  <span
                    className="
                      absolute bottom-4 right-4
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-white
                      text-[#2D7D39]
                      shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                      transition-all duration-300
                      group-hover:rotate-45
                      group-hover:bg-[#43B649]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                    />
                  </span>
                </Link>

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

                  {/* DESCRIPTION */}

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

                  {/* EXPLORE LINK */}

                  <Link
                    to={config.link}
                    className="
                      mt-6 inline-flex
                      w-fit items-center gap-2
                      text-[12px] font-bold
                      text-[#329C41]
                      transition-colors
                      hover:text-[#1D7130]
                    "
                  >
                    {t.explore}

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
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
