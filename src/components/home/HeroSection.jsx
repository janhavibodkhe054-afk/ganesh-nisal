import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Leaf, Sprout } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const HERO_IMAGE = "/logo.png";

const FARM_BG =
  "https://i.pinimg.com/1200x/3e/44/90/3e4490051205cf03a02e22366c46edd4.jpg";

const content = {
  mr: {
    eyebrow: "शेतीचा अनुभव • नवनवीन प्रयोग • ज्ञानाची देवाणघेवाण",
    title1: "मातीशी नातं,",
    title2: "प्रगतीचा ध्यास!",
    description:
      "मी गणेश निसाळ, नाशिकमधील एक शेतकरी आणि कृषी उद्योजक. शेती हा माझ्यासाठी केवळ व्यवसाय नाही, तर सतत शिकण्याचा आणि नवे प्रयोग करण्याचा प्रवास आहे. सेंद्रिय शेती, मातीचे आरोग्य आणि प्रत्यक्ष शेतीतील अनुभवातून मिळालेलं ज्ञान इतर शेतकऱ्यांपर्यंत पोहोचवण्याचा माझा प्रयत्न आहे.",
    point1: "सेंद्रिय शेती व मातीच्या आरोग्यावर भर",
    point2: "प्रत्यक्ष प्रयोगातून शेतीविषयक ज्ञानाची देवाणघेवाण",
    button: "माझा प्रवास जाणून घ्या",
    secondary: "शेतीतील प्रयोग",
    label: "गणेश निसाळ",
    small: "शेतकरी • कृषी मार्गदर्शक",
  },

  en: {
    eyebrow: "FARMING EXPERIENCE • INNOVATION • KNOWLEDGE",
    title1: "Rooted in Soil,",
    title2: "Driven by Growth!",
    description:
      "I'm Ganesh Nisal, a farmer and agricultural entrepreneur from Nashik. For me, farming is more than a profession—it's a journey of continuous learning and experimentation. Through organic farming, soil health practices and hands-on experience, I aim to share practical agricultural knowledge with fellow farmers.",
    point1: "A focus on organic farming and soil health",
    point2: "Sharing knowledge through real farming experiments",
    button: "Discover My Journey",
    secondary: "Farming Experiments",
    label: "GANESH NISAL",
    small: "FARMER • AGRICULTURAL EDUCATOR",
  },

  hi: {
    eyebrow: "खेती का अनुभव • नए प्रयोग • ज्ञान का आदान-प्रदान",
    title1: "मिट्टी से जुड़ाव,",
    title2: "प्रगति का संकल्प!",
    description:
      "मैं गणेश निसाल, नासिक का एक किसान और कृषि उद्यमी हूँ। मेरे लिए खेती केवल व्यवसाय नहीं, बल्कि लगातार सीखने और नए प्रयोग करने की यात्रा है। जैविक खेती, मिट्टी के स्वास्थ्य और अपने व्यावहारिक अनुभवों से मिली जानकारी दूसरे किसानों तक पहुँचाने का मेरा प्रयास है।",
    point1: "जैविक खेती और मिट्टी के स्वास्थ्य पर ध्यान",
    point2: "वास्तविक कृषि प्रयोगों से ज्ञान साझा करना",
    button: "मेरी यात्रा जानें",
    secondary: "खेती के प्रयोग",
    label: "गणेश निसाल",
    small: "किसान • कृषि मार्गदर्शक",
  },
};

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const t = content[language] || content.mr;

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 30,
          filter: "blur(5px)",
        },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      aria-label="Ganesh Nisal Hero"
      className="
        relative isolate
        w-full overflow-hidden
        bg-white
      "
    >
      {/* ==========================================
          FULL WIDTH FARM BACKGROUND
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-white
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        {/* FARM IMAGE */}

        <div
          className="
            absolute inset-0
            bg-cover bg-center
          "
          style={{
            backgroundImage: `url("${FARM_BG}")`,
            backgroundPosition: "center right",
          }}
        />

        {/* LIGHT NATURAL GREEN TINT */}

        <div
          className="
            absolute inset-0
            bg-[#EAF5E6]/30
          "
        />

        {/* SMOOTH WHITE FADE */}

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_28%,rgba(255,255,255,0.98)_38%,rgba(255,255,255,0.90)_48%,rgba(255,255,255,0.65)_60%,rgba(255,255,255,0.22)_76%,rgba(255,255,255,0)_100%)]
          "
        />

        {/* SOFT TOP LIGHT */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-white/25
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* MOVING GREEN BACKGROUND LIGHT */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -45, 0],
                y: [0, 25, 0],
                opacity: [0.15, 0.3, 0.15],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -right-24 -top-28
          h-[480px] w-[480px]
          rounded-full
          bg-[#8BE58A]/20
          blur-[110px]
        "
      />

      {/* ==========================================
          MAIN LAYOUT - HEIGHT INCREASED
      ========================================== */}

      <div
        className="
          grid min-h-[600px]
max-w-[1500px]
grid-cols-1 items-center
gap-6 px-6 py-10
sm:px-10 sm:py-12
lg:min-h-[660px]
lg:grid-cols-[54%_46%]
lg:gap-0 lg:px-10 lg:py-8
xl:px-14
        "
      >
        {/* ==========================================
            LEFT CONTENT
        ========================================== */}

        <div
          className="
            relative z-20
            max-w-[690px]
            lg:pl-10
            xl:pl-16
            2xl:pl-20
          "
        >
          {/* EYEBROW */}

          <motion.div
            {...reveal(0.05)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 shrink-0 bg-[#45B649]" />

            <span
              className="
                text-[10px] font-semibold
                tracking-[1px]
                text-[#388C3B]
                sm:text-[12px]
              "
            >
              {t.eyebrow}
            </span>
          </motion.div>

          {/* TITLE */}

          <motion.h1
            key={`title-${language}`}
            {...reveal(0.13)}
            className="
              text-[clamp(2.2rem,3.7vw,4rem)]
              font-extrabold
              leading-[1.23]
              tracking-[-1px]
              text-[#203E2A]
            "
          >
            {t.title1}
            <br />

            <span className="relative inline-block text-[#45A947]">
              {t.title2}

              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.55,
                  ease,
                }}
                style={{ transformOrigin: "left" }}
                className="
                  absolute -bottom-2 left-0
                  h-[4px] w-full
                  rounded-full
                  bg-[#BCE7B0]
                "
              />
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            key={`desc-${language}`}
            {...reveal(0.23)}
            className="
              mt-7 max-w-[590px]
              text-[13px] leading-[27px]
              text-[#526958]
              sm:text-[14px]
              sm:leading-[29px]
            "
          >
            {t.description}
          </motion.p>

          {/* POINTS */}

          <motion.div {...reveal(0.32)} className="mt-6 space-y-3">
            {[t.point1, t.point2].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span
                  className="
                    mt-[3px] flex h-5 w-5
                    shrink-0 items-center justify-center
                    rounded-full
                    bg-[#E0F5DC]
                    text-[#35A83A]
                  "
                >
                  <Check size={13} strokeWidth={3} />
                </span>

                <span
                  className="
                    text-[13px] font-medium
                    leading-6 text-[#35523C]
                  "
                >
                  {point}
                </span>
              </div>
            ))}
          </motion.div>

          {/* BUTTONS */}

          <motion.div
            {...reveal(0.42)}
            className="
              mt-8 flex flex-wrap
              items-center gap-4
            "
          >
            <Link
              to="/about"
              className="
                group inline-flex min-h-[49px]
                items-center gap-4
                rounded-full
                bg-[#35A846]
                px-6 py-3
                text-[12px] font-semibold
                text-white
                shadow-[0_12px_28px_rgba(53,168,70,0.20)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#207D33]
              "
            >
              {t.button}

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            <Link
              to="/farming-experiments"
              className="
                group inline-flex
                items-center gap-2
                px-2 py-3
                text-[12px] font-semibold
                text-[#2F6339]
                transition-colors
                hover:text-[#35A846]
              "
            >
              {t.secondary}

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* ==========================================
            RIGHT CIRCULAR PORTRAIT
        ========================================== */}

        <div
          className="
            relative mx-auto flex
            h-[370px] w-full
            max-w-[600px]
            items-center justify-center
            sm:h-[480px]
            lg:h-[530px]
          "
        >
          {/* SOFT HALO */}

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[300px] w-[300px]
              rounded-full
              bg-[#79D77A]/15
              blur-[22px]
              sm:h-[420px] sm:w-[420px]
              lg:h-[490px] lg:w-[490px]
            "
          />

          {/* ROTATING GREEN + YELLOW RING */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              ease,
            }}
            className="
              absolute flex
              items-center justify-center
            "
          >
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-[310px] w-[310px]
                rounded-full
                bg-[conic-gradient(from_0deg,#238B45_0deg,#238B45_115deg,transparent_115deg,transparent_150deg,#FFD93D_150deg,#FFD93D_230deg,transparent_230deg,transparent_260deg,#45B649_260deg,#45B649_325deg,transparent_325deg)]
                sm:h-[410px] sm:w-[410px]
                lg:h-[470px] lg:w-[470px]
              "
            />
          </motion.div>

          {/* WHITE INNER CIRCLE */}

          <div
            aria-hidden="true"
            className="
              absolute
              h-[268px] w-[268px]
              rounded-full
              bg-white
              shadow-[0_25px_65px_rgba(25,70,35,0.16)]
              sm:h-[352px] sm:w-[352px]
              lg:h-[402px] lg:w-[402px]
            "
          />

          {/* ANIMATED PHOTO */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              delay: reduceMotion ? 0 : 0.2,
              ease,
            }}
            className="
              relative z-10
              h-[250px] w-[250px]
              overflow-hidden
              rounded-full
              border-[5px] border-white
              sm:h-[334px] sm:w-[334px]
              lg:h-[384px] lg:w-[384px]
            "
          >
            <motion.img
              src={HERO_IMAGE}
              alt="Ganesh Nisal - Organic Farmer"
              fetchPriority="high"
              animate={reduceMotion ? undefined : { scale: [1, 1.045, 1] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full w-full
                object-cover object-center
              "
            />
          </motion.div>

          {/* FLOATING LEAF */}

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -13, 0],
                    rotate: [-15, -6, -15],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute left-[1%] top-[32%]
              z-20 flex
              h-[64px] w-[64px]
              items-center justify-center
              rounded-[0_80%_0_80%]
              bg-[#45B649]
              text-white shadow-xl
              sm:left-[3%]
            "
          >
            <Leaf size={28} strokeWidth={1.5} />
          </motion.div>

          {/* FLOATING SPROUT */}

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -15, 0],
                    rotate: [0, 8, 0],
                  }
            }
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute right-[6%] top-[4%]
              z-20 text-[#45B649]/65
            "
          >
            <Sprout size={67} strokeWidth={1.2} />
          </motion.div>

          {/* FLOATING YELLOW DOT */}

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 10, 0],
                    x: [0, -7, 0],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute bottom-[15%] right-[4%]
              h-5 w-5
              rounded-full
              bg-[#FFD93D]
              shadow-[0_0_30px_rgba(255,217,61,0.35)]
            "
          />

          {/* MULTILINGUAL NAME LABEL */}

          <motion.div
            {...reveal(0.6)}
            className="
              absolute bottom-0 z-30
              rounded-full
              border border-[#DCE8D4]
              bg-white/95
              px-6 py-3
              shadow-[0_10px_35px_rgba(0,0,0,0.10)]
              backdrop-blur-xl
            "
          >
            <motion.div
              key={`photo-label-${language}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
              }}
            >
              <span
                className="
                  block text-center
                  text-[12px] font-extrabold
                  tracking-[1px]
                  text-[#285D35]
                "
              >
                {t.label}
              </span>

              <span
                className="
                  mt-1 block text-center
                  text-[10px] font-medium
                  tracking-[0.5px]
                  text-[#688F70]
                "
              >
                {t.small}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ORANGE + GREEN LINE */}

      <div aria-hidden="true" className="relative z-20 flex h-[4px] w-full">
        <div className="h-full w-1/2 bg-[#FF7A1A]" />
        <div className="h-full w-1/2 bg-[#45B649]" />
      </div>
    </section>
  );
}
