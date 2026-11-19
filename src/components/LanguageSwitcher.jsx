
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: "mr", short: "मराठी", mobile: "मराठी" },
  { code: "en", short: "EN", mobile: "English" },
  { code: "hi", short: "हिंदी", mobile: "हिंदी" },
];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* ==================================
          DESKTOP / LAPTOP
          LEFT EDGE FLOATING SWITCHER
      ================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, x: -60 }
        }
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
        className="
          fixed left-0 top-1/2 z-[9999]
          hidden -translate-y-1/2
          md:block
        "
      >
        <div
          className="
            flex flex-col items-center
            overflow-hidden rounded-r-xl
            border border-l-0 border-[#D9E5D2]
            bg-white
            shadow-[0_12px_40px_rgba(0,0,0,0.16)]
          "
        >
          {/* Globe Header */}

          <div
            className="
              flex h-12 w-12
              items-center justify-center
              bg-[#234C31] text-[#F4D84D]
            "
          >
            <Globe2 size={21} strokeWidth={1.8} />
          </div>

          {/* Language Buttons */}

          {languages.map((item) => {
            const active = language === item.code;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => changeLanguage(item.code)}
                aria-label={`Switch to ${item.short}`}
                aria-pressed={active}
                className={`
                  flex min-h-[48px] w-[60px]
                  items-center justify-center
                  border-b border-[#E8EEE5]
                  px-2 text-[11px] font-bold
                  transition-all duration-300
                  last:border-b-0
                  ${
                    active
                      ? "bg-[#F4D84D] text-[#173B2B]"
                      : "bg-white text-[#365843] hover:bg-[#EAF2E5]"
                  }
                `}
              >
                {item.short}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ==================================
          MOBILE
          BOTTOM TOUCH LANGUAGE BAR
      ================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 60 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        className="
          fixed bottom-0 left-1/2 z-[9999]
          w-max max-w-[calc(100%-24px)]
          -translate-x-1/2
          md:hidden
        "
      >
        <div
          className="
            flex items-center
            overflow-hidden
            rounded-t-xl
            border border-b-0 border-[#D9E5D2]
            bg-white
            shadow-[0_-8px_30px_rgba(0,0,0,0.16)]
          "
        >
          {/* Globe */}

          <div
            className="
              flex h-[52px] w-[48px]
              shrink-0 items-center justify-center
              bg-[#234C31] text-[#F4D84D]
            "
          >
            <Globe2 size={19} />
          </div>

          {/* Languages */}

          {languages.map((item) => {
            const active = language === item.code;

            return (
              <button
                key={item.code}
                type="button"
                onClick={() => changeLanguage(item.code)}
                aria-label={`Switch to ${item.mobile}`}
                aria-pressed={active}
                className={`
                  flex h-[52px] min-w-[73px]
                  items-center justify-center
                  px-3 text-[12px] font-bold
                  transition-colors duration-300
                  ${
                    active
                      ? "bg-[#F4D84D] text-[#173B2B]"
                      : "bg-white text-[#365843] hover:bg-[#EAF2E5]"
                  }
                `}
              >
                {item.mobile}
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
