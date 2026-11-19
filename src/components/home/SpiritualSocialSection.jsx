
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Flower2,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TEMPLE_IMAGE = "https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/470664507_122197322174219092_3981760150653144474_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=1HOuZtaU0u0Q7kNvwHn4u_Y&_nc_oc=AdrFkbzXGFJaZWyL9bGv1H-YXLxPVe-Yq7kQ6yQ2rc4Q2ggEnNLMLmqgS9TrI_MpSMA&_nc_zt=23&_nc_ht=scontent.fpnq8-1.fna&_nc_gid=-rDU474dxlFj5e0MZqnniA&_nc_ss=7b289&oh=00_AQRLFolu6UjuYeIy1Iu6g9TXh_1c1T849LkfOPTuQ6QEOQ&oe=6B04952B";

const translations = {
  mr: {
    eyebrow: "SPIRITUAL & SOCIAL CONNECTION",
    heading1: "शेतीशी नातं,",
    heading2: "शिवभक्तीशी श्रद्धा!",
    description1:
      "शेती आणि उद्योजकतेसोबत गणेश निसाळ यांची शिवभक्तीशीही जोडलेली ओळख आहे.",
    description2:
      "भगूर, नाशिक येथील श्री इच्छापूर्ती शिव मंदिराशी संबंधित धार्मिक व सामाजिक उपक्रमांची माहिती या विभागातून जाणून घेता येईल.",
    temple: "श्री इच्छापूर्ती शिव मंदिर",
    location: "भगूर, नाशिक",
    cta: "आध्यात्मिक व सामाजिक उपक्रम",
    faith: "श्रद्धा",
    community: "समाज",
    label: "FAITH • DEVOTION • COMMUNITY",
  },
  en: {
    eyebrow: "SPIRITUAL & SOCIAL CONNECTION",
    heading1: "Rooted in Farming,",
    heading2: "Guided by Faith!",
    description1:
      "Alongside farming and entrepreneurship, Ganesh Nisal also has a connection with devotion to Lord Shiva.",
    description2:
      "Discover religious and social activities associated with Shri Ichhapurti Shiv Temple in Bhagur, Nashik.",
    temple: "Shri Ichhapurti Shiv Temple",
    location: "Bhagur, Nashik",
    cta: "Spiritual & Social Activities",
    faith: "Faith",
    community: "Community",
    label: "FAITH • DEVOTION • COMMUNITY",
  },
  hi: {
    eyebrow: "SPIRITUAL & SOCIAL CONNECTION",
    heading1: "खेती से जुड़ाव,",
    heading2: "शिवभक्ति में आस्था!",
    description1:
      "खेती और उद्यमिता के साथ गणेश निसाल की पहचान शिवभक्ति से भी जुड़ी हुई है।",
    description2:
      "भगूर, नाशिक स्थित श्री इच्छापूर्ति शिव मंदिर से जुड़े धार्मिक और सामाजिक उपक्रमों के बारे में जानें।",
    temple: "श्री इच्छापूर्ति शिव मंदिर",
    location: "भगूर, नाशिक",
    cta: "आध्यात्मिक और सामाजिक गतिविधियाँ",
    faith: "आस्था",
    community: "समाज",
    label: "FAITH • DEVOTION • COMMUNITY",
  },
};

export default function SpiritualSocialSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language] || translations.mr;

  const animation = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="spiritual-social"
      aria-labelledby="spiritual-heading"
      className="relative overflow-hidden bg-[#FBF8F0] py-12 sm:py-14 lg:py-16"
    >
      {/* SOFT BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-[#E9D4B2]/20 blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
        {/* CENTER HEADING */}

        <motion.div
          {...animation(0)}
          className="mx-auto mb-10 max-w-[850px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C58A50]" />

            <span className="text-[10px] font-extrabold tracking-[2px] text-[#AD7643]">
              {t.eyebrow}
            </span>

            <span className="h-px w-8 bg-[#C58A50]" />
          </div>

          <h2
            id="spiritual-heading"
            className="text-[clamp(2rem,3.2vw,3.25rem)] font-extrabold leading-[1.3] text-[#1E3D29]"
          >
            {t.heading1}{" "}
            <span className="text-[#BD7842]">
              {t.heading2}
            </span>
          </h2>
        </motion.div>

        {/* THREE COLUMN COMPOSITION */}

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-9">
          {/* LEFT TEXT */}

          <motion.div
            {...animation(0.1)}
            className="order-2 text-center lg:order-1 lg:text-right"
          >
            <div className="mb-4 flex items-center justify-center gap-2 text-[#BE814A] lg:justify-end">
              <Flower2 size={19} strokeWidth={1.5} />

              <span className="text-[12px] font-bold">
                {t.faith}
              </span>
            </div>

            <p className="text-[13px] leading-[28px] text-[#667368] sm:text-[14px]">
              {t.description1}
            </p>
          </motion.div>

          {/* TEMPLE ARCH IMAGE */}

          <motion.div
            {...animation(0.15)}
            className="order-1 mx-auto w-full max-w-[440px] lg:order-2"
          >
            <div className="relative">
              {/* OUTER ARCH */}

              <div
                aria-hidden="true"
                className="absolute -inset-[9px] rounded-t-[220px] rounded-b-[20px] border border-[#C9965D]/55"
              />

              {/* MAIN PHOTO */}

              <div className="group relative h-[360px] overflow-hidden rounded-t-[220px] rounded-b-[20px] bg-[#E8D9C4] sm:h-[400px] lg:h-[430px]">
                <img
                  src={TEMPLE_IMAGE}
                  alt="Shri Ichhapurti Shiv Temple, Bhagur, Nashik"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#15271A]/85 via-transparent to-transparent" />

                {/* IMAGE CAPTION */}

                <div className="absolute bottom-6 left-5 right-5 text-center">
                  <h3 className="text-[18px] font-extrabold text-white sm:text-[21px]">
                    {t.temple}
                  </h3>

                  <div className="mt-2 flex items-center justify-center gap-1.5 text-white/85">
                    <MapPin size={13} />

                    <span className="text-[11px] font-medium">
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}

          <motion.div
            {...animation(0.2)}
            className="order-3 text-center lg:text-left"
          >
            <div className="mb-4 flex items-center justify-center gap-2 text-[#BE814A] lg:justify-start">
              <Flower2 size={19} strokeWidth={1.5} />

              <span className="text-[12px] font-bold">
                {t.community}
              </span>
            </div>

            <p className="text-[13px] leading-[28px] text-[#667368] sm:text-[14px]">
              {t.description2}
            </p>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          {...animation(0.25)}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <span className="text-[10px] font-bold tracking-[2px] text-[#B28A60]">
            {t.label}
          </span>

          <Link
            to="/spiritual-social-work"
            className="group inline-flex min-h-[49px] items-center gap-5 rounded-full bg-[#1E3D29] py-2 pl-5 pr-2 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B97943]"
          >
            {t.cta}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1E3D29] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
