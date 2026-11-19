
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  Flower2,
  CalendarDays,
  Waves,
  Sun,
  MoonStar,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// ============================================
// BACKGROUND IMAGE
// ============================================

const BG_IMAGE = "https://img.magnific.com/premium-photo/maha-shivratri-festival-celebration-hindu-lord-god-shiva-magical-lights-background_59535-9047.jpg?semt=ais_hybrid&w=740&q=80";

// ============================================
// ACTIVITIES
// ============================================

const ITEMS = [
  { id: 0, icon: Flower2, angle: -90 },
  { id: 1, icon: CalendarDays, angle: -18 },
  { id: 2, icon: Waves, angle: 54 },
  { id: 3, icon: Sun, angle: 126 },
  { id: 4, icon: MoonStar, angle: 198 },
];

// ============================================
// LANGUAGE CONTENT
// ============================================

const CONTENT = {
  mr: {
    eyebrow: "SACRED TRADITIONS",
    title1: "भक्ती आणि उपासनेचे",
    title2: "विविध उपक्रम",
    intro:
      "श्री इच्छापूर्ती शिव मंदिराशी संबंधित धार्मिक कार्यक्रमांमध्ये भगवान शिवाची आराधना आणि पारंपरिक पूजा-विधींना महत्त्व दिले जाते.",
    temple: "श्री इच्छापूर्ती शिव मंदिर",
    location: "भगूर, नाशिक",
    choose: "उपक्रम निवडा",
    activities: [
      ["श्रावण विशेष पूजन", "श्रावण महिन्यातील विशेष पूजा"],
      ["श्रावणी सोमवार कार्यक्रम", "सोमवारनिमित्त धार्मिक उपक्रम"],
      ["लघुरुद्र महापूजा", "पारंपरिक शिवपूजन विधी"],
      ["प्रदोष पूजन", "प्रदोष निमित्त आराधना"],
      ["शिवरात्री विशेष पूजन", "शिवरात्रीनिमित्त विशेष कार्यक्रम"],
    ],
  },

  en: {
    eyebrow: "SACRED TRADITIONS",
    title1: "Devotion Through",
    title2: "Sacred Traditions",
    intro:
      "Religious activities associated with Shri Ichhapurti Shiv Mandir emphasize the worship of Lord Shiva and traditional rituals.",
    temple: "Shri Ichhapurti Shiv Mandir",
    location: "Bhagur, Nashik",
    choose: "Select an activity",
    activities: [
      ["Shravan Special Puja", "Special worship during Shravan"],
      ["Shravani Monday Programs", "Religious activities on Mondays"],
      ["Laghurudra Mahapuja", "Traditional Shiva worship ritual"],
      ["Pradosh Puja", "Worship on Pradosh"],
      ["Shivratri Special Puja", "Special Shivratri programs"],
    ],
  },

  hi: {
    eyebrow: "SACRED TRADITIONS",
    title1: "भक्ति और उपासना के",
    title2: "विविध कार्यक्रम",
    intro:
      "श्री इच्छापूर्ति शिव मंदिर से जुड़े धार्मिक कार्यक्रमों में भगवान शिव की आराधना और पारंपरिक पूजा-विधियों को महत्व दिया जाता है।",
    temple: "श्री इच्छापूर्ति शिव मंदिर",
    location: "भगूर, नासिक",
    choose: "कार्यक्रम चुनें",
    activities: [
      ["श्रावण विशेष पूजन", "श्रावण महीने में विशेष पूजा"],
      ["श्रावणी सोमवार कार्यक्रम", "सोमवार के धार्मिक कार्यक्रम"],
      ["लघुरुद्र महापूजा", "पारंपरिक शिवपूजन विधि"],
      ["प्रदोष पूजन", "प्रदोष के अवसर पर आराधना"],
      ["शिवरात्रि विशेष पूजन", "शिवरात्रि के विशेष कार्यक्रम"],
    ],
  },
};

// ============================================
// GOLDEN PARTICLES
// ============================================

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 29 + 17) % 100}%`,
  delay: (i % 6) * 0.5,
  duration: 3 + (i % 4),
}));

// ============================================
// COMPONENT
// ============================================

export default function ReligiousActivities() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;

  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const CurrentIcon = ITEMS[active].icon;

  return (
    <section
      id="religious-activities"
      className="relative isolate overflow-hidden bg-[#07170E] py-10 text-white sm:py-12 lg:py-14"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(4, 17, 9, 0.60),
            rgba(4, 17, 9, 0.65)
          ),
          url("${BG_IMAGE}")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* FIXED BACKGROUND - DESKTOP */}

      <style>
        {`
          @media (min-width: 1024px) {
            #religious-activities {
              background-attachment: fixed;
            }
          }

          @media (max-width: 1023px) {
            #religious-activities {
              background-attachment: scroll;
            }
          }
        `}
      </style>

      {/* GOLDEN ATMOSPHERE */}

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(198,155,70,0.09),transparent_68%)]" />

      {/* FLOATING PARTICLES */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {PARTICLES.map((particle, i) => (
          <motion.span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-[#E6BD68]"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: [0.1, 0.85, 0.1],
                    y: [0, -22, 0],
                    scale: [0.7, 1.5, 0.7],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* COMPACT HEADING */}

        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C69B46]" />

            <span className="text-[10px] font-bold tracking-[2.5px] text-[#D9B66D]">
              {t.eyebrow}
            </span>

            <span className="h-px w-9 bg-[#C69B46]" />
          </div>

          

          
        </motion.div>

        {/* =====================================
            DESKTOP ORBIT - COMPACT HEIGHT
        ===================================== */}

        <div className="relative mx-auto mt-12 hidden h-[590px] max-w-[1000px] lg:block">

          {/* ROTATING ORBIT RINGS */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2">

            {/* OUTER RING */}

            <motion.div
              className="absolute inset-0 rounded-full border border-[#D9B66D]/35"
              animate={
                reduceMotion ? {} : { rotate: 360 }
              }
              transition={{
                duration: 100,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <div className="absolute left-1/2 top-[-5px] h-[10px] w-[10px] rounded-full bg-[#E1BB70] shadow-[0_0_20px_#E1BB70]" />
            </motion.div>

            {/* INNER ROTATING RING */}

            <motion.div
              className="absolute inset-[42px] rounded-full border border-dashed border-[#D9B66D]/25"
              animate={
                reduceMotion ? {} : { rotate: -360 }
              }
              transition={{
                duration: 85,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            {/* INNER STATIC RING */}

            <div className="absolute inset-[92px] rounded-full border border-[#D9B66D]/20" />

            {/* ANIMATED GOLDEN GLOW */}

            <motion.div
              className="absolute inset-[105px] rounded-full bg-[#D6AA53]/10 blur-[45px]"
              animate={
                reduceMotion
                  ? {}
                  : {
                      opacity: [0.35, 0.75, 0.35],
                      scale: [0.95, 1.05, 0.95],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* CENTER INTERACTIVE PANEL */}

          <div className="absolute left-1/2 top-1/2 flex h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#D9B66D]/40 bg-[#102519]/90 px-7 text-center shadow-[0_0_90px_rgba(196,152,67,0.16)] backdrop-blur-xl">

            {/* ACTIVE ICON */}

            <motion.div
              key={`icon-${active}`}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.6,
                      rotate: -20,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{ duration: 0.4 }}
              className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#D9B66D]/45 bg-[#D9B66D]/15"
            >
              <CurrentIcon
                size={33}
                strokeWidth={1.4}
                className="text-[#E1BB70]"
              />
            </motion.div>

            {/* ACTIVE CONTENT */}

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduceMotion
                    ? {}
                    : { opacity: 0, y: -12 }
                }
                transition={{ duration: 0.25 }}
              >
                <p className="mb-2 text-[10px] font-bold tracking-[2px] text-[#D9B66D]">
                  0{active + 1} / 05
                </p>

                <h3 className="text-[20px] font-extrabold leading-[1.35]">
                  {t.activities[active][0]}
                </h3>

                <p className="mt-3 text-[12px] leading-[20px] text-white/70">
                  {t.activities[active][1]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FIVE ORBIT ACTIVITY BUTTONS */}

          {ITEMS.map(({ id, icon: Icon, angle }) => {
            const radius = 255;
            const radians = (angle * Math.PI) / 180;

            const x = Math.cos(radians) * radius;
            const y = Math.sin(radians) * radius;

            const selected = active === id;

            return (
              <motion.button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                onMouseEnter={() => setActive(id)}
                aria-pressed={selected}
                className="absolute left-1/2 top-1/2 z-20 flex w-[172px] flex-col items-center gap-2 rounded-[15px] border px-3 py-4 text-center shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-colors duration-300"
                style={{
                  x: x - 86,
                  y: y - 51,
                  background: selected
                    ? "rgba(217,182,109,0.20)"
                    : "rgba(16,37,25,0.92)",
                  borderColor: selected
                    ? "rgba(217,182,109,0.85)"
                    : "rgba(217,182,109,0.3)",
                }}
                whileHover={
                  reduceMotion ? {} : { scale: 1.07 }
                }
              >
                <Icon
                  size={23}
                  strokeWidth={1.5}
                  className={
                    selected
                      ? "text-[#FFD93D]"
                      : "text-[#D9B66D]"
                  }
                />

                <span className="text-[12px] font-bold leading-[18px] text-white">
                  {t.activities[id][0]}
                </span>

                {selected && (
                  <motion.span
                    layoutId="orbit-indicator"
                    className="absolute -bottom-[2px] left-1/2 h-[3px] w-9 -translate-x-1/2 rounded-full bg-[#FFD93D]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* =====================================
            MOBILE / TABLET
        ===================================== */}

        <div className="mt-6 lg:hidden">

          {/* ACTIVE PANEL */}

          <div className="relative overflow-hidden rounded-[20px] border border-[#D9B66D]/35 bg-[#102519]/90 p-6 text-center shadow-xl backdrop-blur-md sm:p-8">

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9B66D]/20" />

            <motion.div
              key={`mobile-icon-${active}`}
              initial={
                reduceMotion
                  ? false
                  : { scale: 0.7, opacity: 0 }
              }
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#D9B66D]/45 bg-[#D9B66D]/15"
            >
              <CurrentIcon
                size={32}
                className="text-[#E1BB70]"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${active}`}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduceMotion
                    ? {}
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <span className="text-[11px] font-bold tracking-[2px] text-[#D9B66D]">
                  0{active + 1} / 05
                </span>

                <h3 className="mt-2 text-[22px] font-extrabold">
                  {t.activities[active][0]}
                </h3>

                <p className="mt-2 text-[13px] leading-[23px] text-white/70">
                  {t.activities[active][1]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE ACTIVITY SELECTOR */}

          <p className="mb-3 mt-6 text-[11px] font-bold tracking-[1.5px] text-[#D9B66D]">
            {t.choose}
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            {ITEMS.map(({ id, icon: Icon }) => {
              const selected = active === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  aria-pressed={selected}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${
                    selected
                      ? "border-[#D9B66D]/80 bg-[#D9B66D]/20"
                      : "border-white/20 bg-[#102519]/75 hover:border-[#D9B66D]/50"
                  }`}
                >
                  <Icon
                    size={20}
                    className="shrink-0 text-[#D9B66D]"
                  />

                  <span className="flex-1 text-[13px] font-bold">
                    {t.activities[id][0]}
                  </span>

                  <ChevronRight
                    size={16}
                    className="text-white/60"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* COMPACT TEMPLE SIGNATURE */}

        <div className="mt-6 flex flex-col items-center justify-center gap-2 border-t border-white/20 pt-5 text-center sm:flex-row sm:gap-3 lg:mt-0">
          <Sparkles size={17} className="text-[#D9B66D]" />

          <span className="text-[12px] font-semibold text-white/80">
            {t.temple}
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D9B66D] sm:block" />

          <span className="text-[12px] text-white/60">
            {t.location}
          </span>
        </div>
      </div>
    </section>
  );
}
