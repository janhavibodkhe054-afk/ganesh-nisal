
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  MapPin,
  Flower2,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "SPIRITUAL & SOCIAL CONNECTION",
    heading1: "श्रद्धा, भक्ती आणि",
    heading2: "सामाजिक बांधिलकी!",
    description:
      "अध्यात्म, धार्मिक परंपरा आणि समाजहिताचे उपक्रम यांना जोडणाऱ्या कार्याची ओळख या विभागातून करून दिली आहे.",
    description2:
      "भगूर, नाशिक येथील श्री इच्छापूर्ती शिव मंदिराशी संबंधित धार्मिक आणि सामाजिक उपक्रमांची माहिती येथे उपलब्ध आहे.",
    location: "भगूर, नाशिक",
    explore: "अधिक जाणून घ्या",
    photoLabel: "श्री इच्छापूर्ती शिव मंदिर",
    photoSub: "भगूर, नाशिक",
  },
  en: {
    eyebrow: "SPIRITUAL & SOCIAL CONNECTION",
    heading1: "Faith, Devotion &",
    heading2: "Social Commitment!",
    description:
      "Discover activities that bring together spirituality, religious traditions, and community welfare.",
    description2:
      "Explore religious and social initiatives associated with Shri Ichhapurti Shiv Mandir in Bhagur, Nashik.",
    location: "Bhagur, Nashik",
    explore: "Explore More",
    photoLabel: "Shri Ichhapurti Shiv Mandir",
    photoSub: "Bhagur, Nashik",
  },
  hi: {
    eyebrow: "SPIRITUAL & SOCIAL CONNECTION",
    heading1: "श्रद्धा, भक्ति और",
    heading2: "सामाजिक प्रतिबद्धता!",
    description:
      "आध्यात्मिकता, धार्मिक परंपराओं और समाजहित के कार्यों से जुड़ी गतिविधियों का परिचय इस विभाग में दिया गया है।",
    description2:
      "भगूर, नासिक स्थित श्री इच्छापूर्ति शिव मंदिर से संबंधित धार्मिक और सामाजिक गतिविधियों की जानकारी यहाँ उपलब्ध है।",
    location: "भगूर, नासिक",
    explore: "और जानें",
    photoLabel: "श्री इच्छापूर्ति शिव मंदिर",
    photoSub: "भगूर, नासिक",
  },
};

export default function SpiritualHero() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;
  const reduceMotion = useReducedMotion();

  const scrollNext = () => {
    document
      .getElementById("spiritual-overview")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
  };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="spiritual-hero"
      className="relative isolate overflow-hidden bg-[#FFFDF7]"
    >
      {/* SUBTLE BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-44 -top-44 h-[420px] w-[420px] rounded-full border border-[#D7CBA6]/35" />
        <div className="absolute -left-24 -top-24 h-[260px] w-[260px] rounded-full border border-[#D7CBA6]/25" />

        <div className="absolute bottom-0 right-0 h-[260px] w-[400px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(214,164,77,0.09),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        <div className="grid items-center gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">

          {/* LEFT CONTENT */}

          <div className="relative z-10">
            <motion.div
              {...reveal(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#C28B38]" />

              <span className="text-[10px] font-extrabold tracking-[1.8px] text-[#A7792E] sm:text-[11px]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              {...reveal(0.08)}
              className="text-[clamp(2.25rem,4.2vw,4.25rem)] font-extrabold leading-[1.17] tracking-[-1.2px] text-[#173923]"
            >
              <span className="block">
                {t.heading1}
              </span>

              <span className="block text-[#B88335]">
                {t.heading2}
              </span>
            </motion.h1>

            <motion.div
              {...reveal(0.16)}
              className="mt-5 max-w-[590px]"
            >
              <p className="text-[15px] leading-[27px] text-[#59685C]">
                {t.description}
              </p>

              <p className="mt-3 text-[14px] leading-[26px] text-[#748075]">
                {t.description2}
              </p>
            </motion.div>

            <motion.div
              {...reveal(0.24)}
              className="mt-7 flex flex-wrap items-center gap-5"
            >
              <button
                type="button"
                onClick={scrollNext}
                className="group inline-flex min-h-[46px] items-center gap-3 rounded-[7px] bg-[#173923] px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-[#2D6938]"
              >
                {t.explore}

                <ArrowDownRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </button>

              <div className="flex items-center gap-2 text-[12px] font-bold text-[#697769]">
                <MapPin size={16} className="text-[#B88335]" />
                {t.location}
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE COMPOSITION */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 30 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[510px] lg:max-w-none"
          >
            {/* PHOTO FRAME */}

            <div className="relative overflow-hidden rounded-[18px] bg-[#E9E3D6]">
              <img
                src="/images/ichhapurti-shiv-mandir.webp"
                alt="Shri Ichhapurti Shiv Mandir, Bhagur Nashik"
                className="h-[260px] w-full object-cover sm:h-[310px] lg:h-[350px]"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102519]/85 via-transparent to-transparent" />

              {/* PHOTO CAPTION */}

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[#FFD93D] backdrop-blur-sm">
                    <Flower2 size={20} />
                  </span>

                  <div>
                    <p className="text-[16px] font-extrabold text-white">
                      {t.photoLabel}
                    </p>

                    <p className="mt-1 text-[12px] text-white/75">
                      {t.photoSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING DECORATIVE ACCENT */}

            <div className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-[18px] border-2 border-[#C28B38]/40" />

            <div className="pointer-events-none absolute -left-4 top-8 hidden h-[90px] w-[5px] rounded-full bg-[#C28B38] lg:block" />

            <div className="pointer-events-none absolute -right-3 -top-3 hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-[#173923] text-[#FFD93D] shadow-lg sm:flex">
              <HeartHandshake size={26} strokeWidth={1.7} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
