
import React, {
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// CUSTOM INSTAGRAM ICON
// ==========================================

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// ==========================================
// SETTINGS
// ==========================================

const INSTAGRAM_URL = "https://www.instagram.com/ismlahvit/";

// ==========================================
// 60 PHOTOS FROM PUBLIC FOLDER
// public/i1.jpeg ... public/i60.jpeg
// ==========================================

const TALL_PHOTOS = [
  1, 4, 10, 15, 21, 28, 35, 42, 49, 56,
];

const GALLERY = Array.from(
  { length: 60 },
  (_, index) => {
    const number = index + 1;

    return {
      id: number,
      type: "image",
      category: "temple",
      src: `/i${number}.jpeg`,
      shape: TALL_PHOTOS.includes(number)
        ? "tall"
        : "normal",
    };
  }
);

// ==========================================
// MULTILINGUAL CONTENT
// ==========================================

const CONTENT = {
  mr: {
    eyebrow: "TEMPLE EVENTS GALLERY",
    title1: "श्रद्धा आणि समाजकार्याचे",
    title2: "संस्मरणीय क्षण!",
    description:
      "मंदिरातील धार्मिक सोहळे, पूजाविधी, विद्यार्थ्यांचे उपक्रम आणि सामाजिक कार्यक्रम यांची छायाचित्रे येथे पाहता येतील.",
    instagram: "मंदिराचे Instagram Page पाहा",
    instagramSub: "अधिक क्षणचित्रे आणि कार्यक्रमांसाठी",
    galleryLabel: "मंदिर क्षणचित्र संग्रह",
    close: "बंद करा",
    previous: "मागील फोटो",
    next: "पुढील फोटो",
    noMedia: "छायाचित्र उपलब्ध नाही.",
    photo: "फोटो",
    captions: {
      temple: "मंदिरातील उपक्रम व क्षणचित्रे",
    },
  },

  en: {
    eyebrow: "TEMPLE EVENTS GALLERY",
    title1: "Memorable Moments of",
    title2: "Faith & Community",
    description:
      "Explore photographs of religious ceremonies, worship rituals, student activities and social initiatives at the temple.",
    instagram: "Visit Temple Instagram Page",
    instagramSub: "For more moments and event updates",
    galleryLabel: "Temple Events Gallery",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
    noMedia: "Photograph unavailable.",
    photo: "PHOTO",
    captions: {
      temple: "Temple Events & Moments",
    },
  },

  hi: {
    eyebrow: "TEMPLE EVENTS GALLERY",
    title1: "श्रद्धा और समाजसेवा के",
    title2: "अविस्मरणीय पल!",
    description:
      "मंदिर के धार्मिक समारोहों, पूजा-विधियों, विद्यार्थियों की गतिविधियों और सामाजिक कार्यक्रमों की तस्वीरें यहाँ देख सकते हैं।",
    instagram: "मंदिर का Instagram पेज देखें",
    instagramSub: "अधिक तस्वीरों और कार्यक्रमों के लिए",
    galleryLabel: "मंदिर की तस्वीरें",
    close: "बंद करें",
    previous: "पिछली तस्वीर",
    next: "अगली तस्वीर",
    noMedia: "तस्वीर उपलब्ध नहीं है।",
    photo: "फोटो",
    captions: {
      temple: "मंदिर के कार्यक्रम और झलकियाँ",
    },
  },
};

// ==========================================
// PHOTO TILE
// ==========================================

function GalleryTile({
  item,
  index,
  onOpen,
  t,
  reduceMotion,
}) {
  const [failed, setFailed] = useState(false);

  const isTall = item.shape === "tall";

  return (
    <motion.button
      type="button"
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 22 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion
          ? 0
          : Math.min(index % 4, 3) * 0.07,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4 }
      }
      onClick={() => {
        if (!failed) onOpen(index);
      }}
      disabled={failed}
      aria-label={`${t.captions.temple} ${item.id}`}
      className={`
        group relative block w-full
        overflow-hidden rounded-[15px]
        bg-[#E5E9DF] text-left
        ${
          isTall
            ? "row-span-2"
            : ""
        }
        ${
          failed
            ? "cursor-default"
            : "cursor-pointer"
        }
      `}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
          <Images
            size={25}
            className="text-[#8BA08A]"
          />

          <span className="text-[11px] text-[#657A68]">
            {t.noMedia}
          </span>
        </div>
      ) : (
        <>
          {/* PHOTO */}

          <img
            src={item.src}
            alt={`${t.captions.temple} - ${item.id}`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          />

          {/* GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#07170E]/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

          {/* TOP ARROW */}

          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm">
            <ArrowUpRight size={17} />
          </div>

          
        </>
      )}
    </motion.button>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TempleEventsGallery() {
  const { language } = useLanguage();

  const t = CONTENT[language] || CONTENT.mr;

  const reduceMotion = useReducedMotion();

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const selected =
    selectedIndex !== null
      ? GALLERY[selectedIndex]
      : null;

  // ==========================================
  // CLOSE LIGHTBOX
  // ==========================================

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // ==========================================
  // NEXT / PREVIOUS
  // ==========================================

  const navigate = useCallback((direction) => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        current + direction + GALLERY.length
      ) % GALLERY.length;
    });
  }, []);

  // ==========================================
  // KEYBOARD NAVIGATION
  // ==========================================

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        navigate(1);
      } else if (event.key === "ArrowLeft") {
        navigate(-1);
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKey
      );

      document.body.style.overflow =
        oldOverflow;
    };
  }, [
    selectedIndex,
    closeLightbox,
    navigate,
  ]);

  return (
    <section
      id="temple-events-gallery"
      className="relative overflow-hidden bg-[#F4F5EF] py-12 sm:py-16 lg:py-[72px]"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#E5ECD9]/80 blur-[100px]" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-10">

        {/* ==========================================
            SECTION HEADING
        ========================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="mx-auto max-w-[790px] text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B88335]" />

            <span className="text-[10px] font-extrabold tracking-[2px] text-[#9A712D]">
              {t.eyebrow}
            </span>

            <span className="h-px w-8 bg-[#B88335]" />
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-extrabold leading-[1.2] tracking-[-1px] text-[#102519]">
            {t.title1}

            <span className="block text-[#B88335]">
              {t.title2}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[26px] text-[#5D6F61] sm:text-[15px]">
            {t.description}
          </p>
        </motion.div>

        {/* ==========================================
            60 PHOTO MASONRY GRID
        ========================================== */}

        <div className="mt-9 grid auto-rows-[135px] grid-cols-2 gap-2.5 sm:auto-rows-[175px] sm:gap-3.5 lg:auto-rows-[180px] lg:grid-cols-4 lg:gap-4">
          {GALLERY.map((item, index) => (
            <GalleryTile
              key={item.id}
              item={item}
              index={index}
              onOpen={setSelectedIndex}
              t={t}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* ==========================================
            INSTAGRAM CTA
        ========================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
          }}
          className="mt-9 flex flex-col items-center justify-between gap-5 rounded-[18px] bg-[#102519] px-5 py-6 sm:flex-row sm:px-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D9B66D]/30 bg-[#D9B66D]/10">
              <InstagramIcon
                size={24}
                className="text-[#E1BB70]"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-[1.3px] text-[#D9B66D]">
                INSTAGRAM
              </p>

              <h3 className="mt-1 text-[15px] font-bold text-white">
                {t.instagram}
              </h3>

              <p className="mt-1 text-[12px] text-white/60">
                {t.instagramSub}
              </p>
            </div>
          </div>

          {INSTAGRAM_URL ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D9B66D] px-6 py-3 text-[13px] font-extrabold text-[#102519] transition-all hover:bg-[#F0CE89] sm:w-auto"
            >
              <InstagramIcon size={17} />
              Instagram
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="rounded-full border border-white/25 px-5 py-2.5 text-[12px] font-semibold text-white/65">
              Instagram URL pending
            </span>
          )}
        </motion.div>
      </div>

      {/* ==========================================
          FULLSCREEN LIGHTBOX
      ========================================== */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
            }}
            role="dialog"
            aria-modal="true"
            aria-label={t.galleryLabel}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#041009]/95 p-4 backdrop-blur-xl sm:p-8"
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              aria-label={t.close}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                navigate(-1);
              }}
              aria-label={t.previous}
              className="absolute bottom-6 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 sm:bottom-auto sm:left-8"
            >
              <ChevronLeft size={23} />
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                navigate(1);
              }}
              aria-label={t.next}
              className="absolute bottom-6 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 sm:bottom-auto sm:right-8"
            >
              <ChevronRight size={23} />
            </button>

            {/* SELECTED PHOTO */}

            <motion.div
              key={selected.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.96 }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex max-h-[82vh] w-full max-w-[1000px] flex-col items-center justify-center"
            >
              <img
                src={selected.src}
                alt={`${t.captions.temple} - ${selected.id}`}
                className="max-h-[72vh] max-w-full rounded-xl object-contain"
              />

              {/* PHOTO DETAILS */}

              <div className="mt-4 text-center">
                <p className="text-[13px] font-bold text-white">
                  {t.captions.temple}
                </p>

                <p className="mt-1 text-[11px] text-white/50">
                  {selectedIndex + 1} / {GALLERY.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
