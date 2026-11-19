
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Sprout,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Replace with actual experiment photographs
const IMAGES = {
  main: "https://i.pinimg.com/1200x/4c/f1/b6/4cf1b667b97d6e4056ec62fcde9df965.jpg",
  detail: "https://i.pinimg.com/736x/0a/0f/11/0a0f11577c6cbc580ff88172be996d4f.jpg",
};

const translations = {
  mr: {
    eyebrow: "FEATURED FARMING EXPERIMENT",
    label: "शेतीतील विशेष प्रयोग",
    heading1: "नाशिकच्या गच्चीवर",
    heading2: "फुललेली Strawberry",
    heading3: "परसबाग!",
    description1:
      "नाशिकमधील प्रयोगशील शेतकरी गणेश निसाळ यांनी गच्चीवर Strawberry लागवड आणि परसबागेचा प्रयोग केला आहे.",
    description2:
      "हा प्रयोग त्यांच्या पारंपरिक शेतीबरोबरच वेगळ्या लागवड पद्धतींबद्दल असलेल्या आवडीचे उदाहरण आहे.",
    cta: "शेतीतील प्रयोग पाहा",
    location: "नाशिक, महाराष्ट्र",
    tag: "गच्चीवरील शेती",
    imageNote: "नव्या पद्धती, नवे प्रयोग",
  },

  en: {
    eyebrow: "FEATURED FARMING EXPERIMENT",
    label: "A SPECIAL FARMING EXPERIMENT",
    heading1: "A Strawberry",
    heading2: "Rooftop Garden",
    heading3: "in Nashik!",
    description1:
      "Ganesh Nisal, an experimental farmer from Nashik, has explored strawberry cultivation and kitchen gardening on a rooftop.",
    description2:
      "The experiment reflects his interest in exploring alternative cultivation methods alongside traditional farming.",
    cta: "Explore Farming Experiments",
    location: "Nashik, Maharashtra",
    tag: "Rooftop Farming",
    imageNote: "Exploring New Growing Methods",
  },

  hi: {
    eyebrow: "FEATURED FARMING EXPERIMENT",
    label: "खेती का विशेष प्रयोग",
    heading1: "नाशिक की छत पर",
    heading2: "खिली Strawberry",
    heading3: "की बगिया!",
    description1:
      "नाशिक के प्रयोगशील किसान गणेश निसाल ने छत पर स्ट्रॉबेरी की खेती और किचन गार्डन का प्रयोग किया है।",
    description2:
      "यह प्रयोग पारंपरिक खेती के साथ अलग-अलग खेती की पद्धतियों में उनकी रुचि को दर्शाता है।",
    cta: "खेती के प्रयोग देखें",
    location: "नाशिक, महाराष्ट्र",
    tag: "छत पर खेती",
    imageNote: "नई पद्धतियाँ, नए प्रयोग",
  },
};

const ease = [0.22, 1, 0.36, 1];

export default function FeaturedExperiment() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="featured-experiment"
      aria-labelledby="experiment-heading"
      className="relative isolate overflow-hidden bg-[#FCFBF6] py-14 sm:py-16 lg:py-[72px]"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 -top-40 h-[430px] w-[430px] rounded-full bg-[#F3EEDC]/65 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -bottom-44 h-[400px] w-[400px] rounded-full bg-[#E9F3E5]/60 blur-[100px]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:gap-20 xl:px-16">
        {/* LEFT IMAGE SHOWCASE */}

        <motion.div
          {...reveal(0.05, -20)}
          className="relative mx-auto w-full max-w-[570px] pb-7 pr-8 sm:pb-8 sm:pr-12"
        >
          {/* MAIN PHOTO */}

          <div className="group relative h-[310px] overflow-hidden rounded-[24px] bg-[#E8EBDD] sm:h-[380px] lg:h-[390px]">
            <img
              src={IMAGES.main}
              alt="Strawberry rooftop cultivation experiment in Nashik"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#173923]/35 via-transparent to-transparent" />

            {/* LOCATION */}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3.5 py-2 text-[#24472C] shadow-sm backdrop-blur-md">
              <MapPin size={13} />

              <span className="text-[11px] font-bold">
                {t.location}
              </span>
            </div>
          </div>

          {/* SECONDARY DETAIL PHOTO */}

          <div className="absolute bottom-0 right-0 w-[40%] overflow-hidden rounded-[18px] border-[5px] border-[#FCFBF6] bg-[#E5E9DA] shadow-[0_14px_40px_rgba(25,55,29,0.15)] sm:w-[38%]">
            <div className="aspect-[1.12/1] overflow-hidden">
              <img
                src={IMAGES.detail}
                alt="Close-up of strawberry plants"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* SMALL GREEN ACCENT */}

          <div
            aria-hidden="true"
            className="absolute -bottom-1 left-5 flex items-center gap-2"
          >
            <span className="h-[3px] w-10 rounded-full bg-[#43B649]" />
            <span className="h-[3px] w-5 rounded-full bg-[#FFD93D]" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <div className="min-w-0">
          {/* EYEBROW */}

          <motion.div
            {...reveal(0.05)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#43B649]" />

            <span className="text-[10px] font-bold tracking-[2px] text-[#3B9346]">
              {t.eyebrow}
            </span>
          </motion.div>

          {/* SMALL LABEL */}

          <motion.div {...reveal(0.1)}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF6E9] px-3.5 py-2 text-[11px] font-bold text-[#378D41]">
              <Sprout size={14} />

              {t.label}
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            key={`experiment-heading-${language}`}
            id="experiment-heading"
            {...reveal(0.14)}
            className="mt-5 text-[clamp(1.9rem,3vw,3.1rem)] font-extrabold leading-[1.32] tracking-[-0.7px] text-[#1E3D29]"
          >
            <span className="block">{t.heading1}</span>

            <span className="block text-[#3DA548]">
              {t.heading2}
            </span>

            <span className="block">{t.heading3}</span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            key={`experiment-description-${language}`}
            {...reveal(0.2)}
            className="mt-5 max-w-[540px] space-y-3 text-[13px] leading-[27px] text-[#657568] sm:text-[14px]"
          >
            <p>{t.description1}</p>

            <p>{t.description2}</p>
          </motion.div>

          {/* SMALL EXPERIMENT INFO */}

          <motion.div
            {...reveal(0.25)}
            className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#DFE8DA] pt-5"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#4C7453]">
              <Sprout size={15} className="text-[#43B649]" />
              {t.tag}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#B8C9B5]" />

            <span className="text-[11px] font-medium text-[#7A8B7B]">
              {t.imageNote}
            </span>
          </motion.div>

          {/* CTA */}

          <motion.div {...reveal(0.3)} className="mt-7">
            <Link
              to="/farming-experiments"
              className="group inline-flex min-h-[49px] items-center gap-5 rounded-full bg-[#1E3D29] py-2 pl-5 pr-2 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#329440]"
            >
              {t.cta}

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1E3D29] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
