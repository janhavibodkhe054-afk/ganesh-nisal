
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Flower2,
  Landmark,
  Heart,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CONTENT = {
  mr: {
    eyebrow: "SHRI ICHHAPURTI SHIV MANDIR",
    title1: "श्री इच्छापूर्ती शिव मंदिर",
    title2: "श्रद्धेचे स्थान!",
    description1:
      "लहवित रोड, भगूर, नाशिक येथे स्थित श्री इच्छापूर्ती शिव मंदिर हे धार्मिक उपक्रम आणि भक्तांच्या सहभागाशी जोडलेले ठिकाण आहे.",
    description2:
      "मंदिराशी संबंधित विविध धार्मिक कार्यक्रमांच्या माध्यमातून भक्तांना पूजा, उपासना आणि आध्यात्मिक कार्यक्रमांमध्ये सहभागी होण्याची संधी मिळते.",
    locationLabel: "मंदिराचे ठिकाण",
    location: "लहवित रोड, भगूर, नाशिक, महाराष्ट्र",
    mapButton: "Google Maps वर पहा",
    imageLabel: "श्रद्धा आणि भक्तीचे स्थान",
    features: [
      "धार्मिक कार्यक्रम",
      "पूजा व उपासना",
      "भक्तांचा सहभाग",
    ],
  },

  en: {
    eyebrow: "SHRI ICHHAPURTI SHIV MANDIR",
    title1: "Shri Ichhapurti Shiv Mandir",
    title2: "A Place of Faith!",
    description1:
      "Located on Lahvit Road in Bhagur, Nashik, Shri Ichhapurti Shiv Mandir is a place associated with religious activities and devotee participation.",
    description2:
      "Through various religious programs, devotees have opportunities to participate in worship, prayer, and spiritual activities.",
    locationLabel: "Temple Location",
    location: "Lahvit Road, Bhagur, Nashik, Maharashtra",
    mapButton: "View on Google Maps",
    imageLabel: "A Place of Faith & Devotion",
    features: [
      "Religious Programs",
      "Prayer & Worship",
      "Devotee Participation",
    ],
  },

  hi: {
    eyebrow: "SHRI ICHHAPURTI SHIV MANDIR",
    title1: "श्री इच्छापूर्ति शिव मंदिर",
    title2: "आस्था का स्थान!",
    description1:
      "लहवित रोड, भगूर, नासिक स्थित श्री इच्छापूर्ति शिव मंदिर धार्मिक गतिविधियों और भक्तों की सहभागिता से जुड़ा स्थान है।",
    description2:
      "मंदिर से जुड़े विभिन्न धार्मिक कार्यक्रमों के माध्यम से भक्तों को पूजा, उपासना और आध्यात्मिक गतिविधियों में भाग लेने का अवसर मिलता है।",
    locationLabel: "मंदिर का स्थान",
    location: "लहवित रोड, भगूर, नासिक, महाराष्ट्र",
    mapButton: "Google Maps पर देखें",
    imageLabel: "आस्था और भक्ति का स्थान",
    features: [
      "धार्मिक कार्यक्रम",
      "पूजा और उपासना",
      "भक्तों की सहभागिता",
    ],
  },
};

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Shri Ichhapurti Shiv Mandir, Lahvit Road, Bhagur, Nashik, Maharashtra"
  );

export default function ShivMandir() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;
  const reduceMotion = useReducedMotion();

  const fadeIn = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
       id="spiritual-overview"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#F9F3E8] blur-[90px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT IMAGE GALLERY */}

          <motion.div
            {...fadeIn(0)}
            className="relative"
          >
            <div className="relative pr-8 pb-8 sm:pr-12 sm:pb-12">

              {/* MAIN IMAGE */}

              <div className="relative overflow-hidden rounded-[20px] bg-[#F0EBDF]">
                <img
                  src="/i1.jpeg"
                  alt="Shri Ichhapurti Shiv Mandir Bhagur Nashik"
                  loading="lazy"
                  className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[470px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102519]/65 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD93D] text-[#173923]">
                    <Flower2 size={21} />
                  </span>

                  <span className="text-[13px] font-bold text-white">
                    {t.imageLabel}
                  </span>
                </div>
              </div>

              {/* SMALL OVERLAP IMAGE */}

              <div className="absolute bottom-0 right-0 w-[43%] overflow-hidden rounded-[16px] border-[6px] border-white bg-[#EDE6D8] shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                <img
                  src="/i31.jpeg"
                  alt="Shri Ichhapurti Shiv Mandir religious activities"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* DECORATIVE CORNER */}

              <div className="pointer-events-none absolute -left-3 top-8 -z-10 h-[110px] w-[110px] rounded-[20px] border-2 border-[#C99B52]/40" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div {...fadeIn(0.1)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C28B38]" />

              <span className="text-[11px] font-extrabold tracking-[1.5px] text-[#A7792E]">
                {t.eyebrow}
              </span>
            </div>

            <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold leading-[1.23] tracking-[-0.8px] text-[#173923]">
              {t.title1}

              <span className="mt-1 block text-[#B88335]">
                {t.title2}
              </span>
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[15px] leading-[29px] text-[#59695D]">
                {t.description1}
              </p>

              <p className="text-[15px] leading-[29px] text-[#6F7D71]">
                {t.description2}
              </p>
            </div>

            {/* FEATURE CHIPS */}

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {t.features.map((feature, index) => {
                const icons = [Landmark, Flower2, Heart];
                const Icon = icons[index];

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 rounded-[10px] border border-[#E8EDE4] bg-[#FAFCF8] px-3 py-3.5"
                  >
                    <Icon
                      size={18}
                      className="shrink-0 text-[#34883B]"
                    />

                    <span className="text-[12px] font-bold leading-[18px] text-[#173923]">
                      {feature}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* LOCATION CARD */}

            <div className="mt-8 overflow-hidden rounded-[14px] border border-[#E5E9DF] bg-[#F8FAF5]">
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[#173923] text-[#FFD93D]">
                  <MapPin size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-[#8A9589]">
                    {t.locationLabel}
                  </p>

                  <p className="mt-1 text-[14px] font-extrabold leading-[24px] text-[#173923]">
                    {t.location}
                  </p>
                </div>
              </div>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-[#E5E9DF] bg-white px-5 py-4 text-[13px] font-extrabold text-[#2D7135] transition-colors hover:bg-[#F0F8ED]"
              >
                {t.mapButton}

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
