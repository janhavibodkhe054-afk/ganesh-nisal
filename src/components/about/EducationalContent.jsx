
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Play,
  Clapperboard,
  ImageOff,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

// ==========================================
// MEDIA CONFIGURATION
// ==========================================

// Instagram Reel चा Thumbnail आणि Reel Link इथे टाका.
const INSTAGRAM_REEL = {
  url: "https://www.instagram.com/p/DPQ1Rn4E9vk/",
  thumbnail: "/thumbnail.png",
};

// YouTube Video Link मधून Thumbnail आपोआप येईल.
const YOUTUBE_VIDEO = {
  url: "https://www.youtube.com/watch?v=Fo0ep6eb51E",
  videoId: "Fo0ep6eb51E",
};

const YOUTUBE_THUMBNAIL =
  `https://i.ytimg.com/vi/${YOUTUBE_VIDEO.videoId}/hqdefault.jpg`;

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/ganesh_nisal82/",
    Icon: FaInstagram,
    color: "#D62976",
    bg: "#FFF0F6",
  },
  {
    name: "YouTube",
    url: YOUTUBE_VIDEO.url,
    Icon: FaYoutube,
    color: "#FF0033",
    bg: "#FFF0F0",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/985779947947463/",
    Icon: FaFacebookF,
    color: "#1877F2",
    bg: "#EAF2FF",
  },
];

// ==========================================
// MULTILINGUAL CONTENT
// ==========================================

const translations = {
  mr: {
    eyebrow: "SOCIAL MEDIA & CONTENT CREATION",
    heading1: "अनुभव आणि माहितीचा",
    heading2: "डिजिटल संवाद",
    paragraph1:
      "शेतीविषयक माहिती अधिकाधिक लोकांपर्यंत पोहोचवण्यासाठी गणेश निसाळ Facebook, Instagram आणि YouTube यांसारख्या डिजिटल माध्यमांचा वापर करतात.",
    paragraph2:
      "मराठी भाषेतून शेतीशी संबंधित विषय समजावून सांगणे आणि शेतकऱ्यांना उपयुक्त माहिती उपलब्ध करून देणे हा त्यांच्या Content चा मुख्य भाग आहे.",
    paragraph3:
      "त्यांच्या डिजिटल उपस्थितीमुळे शेतीतील विविध विषयांवर माहितीची देवाणघेवाण करण्यासाठी एक माध्यम उपलब्ध झाले आहे.",
    connect: "Social Media वर Connect व्हा",
    reelLabel: "AGRICULTURE REELS",
    postLabel: "शेतीविषयक माहिती",
    videoLabel: "FARMING VIDEOS",
    watch: "YouTube वर पाहा",
    creatorLabel: "AGRICULTURE CONTENT CREATOR",
  },

  en: {
    eyebrow: "SOCIAL MEDIA & CONTENT CREATION",
    heading1: "Connecting Experience",
    heading2: "Through Digital Media",
    paragraph1:
      "Ganesh Nisal uses digital platforms such as Facebook, Instagram and YouTube to share agricultural information with a wider audience.",
    paragraph2:
      "Explaining farming-related topics in Marathi and making useful information accessible to farmers is a key part of his content.",
    paragraph3:
      "His digital presence provides a platform for exchanging information on various agricultural subjects.",
    connect: "Connect on Social Media",
    reelLabel: "AGRICULTURE REELS",
    postLabel: "Agricultural Knowledge",
    videoLabel: "FARMING VIDEOS",
    watch: "Watch on YouTube",
    creatorLabel: "AGRICULTURE CONTENT CREATOR",
  },

  hi: {
    eyebrow: "SOCIAL MEDIA & CONTENT CREATION",
    heading1: "अनुभव और जानकारी का",
    heading2: "डिजिटल संवाद",
    paragraph1:
      "कृषि संबंधी जानकारी अधिक लोगों तक पहुँचाने के लिए गणेश निसाल Facebook, Instagram और YouTube जैसे डिजिटल माध्यमों का उपयोग करते हैं।",
    paragraph2:
      "मराठी भाषा में खेती से जुड़े विषयों को समझाना और किसानों को उपयोगी जानकारी उपलब्ध कराना उनके Content का मुख्य हिस्सा है।",
    paragraph3:
      "उनकी डिजिटल उपस्थिति खेती के विभिन्न विषयों पर जानकारी साझा करने का एक माध्यम प्रदान करती है।",
    connect: "Social Media पर Connect करें",
    reelLabel: "AGRICULTURE REELS",
    postLabel: "कृषि संबंधी जानकारी",
    videoLabel: "FARMING VIDEOS",
    watch: "YouTube पर देखें",
    creatorLabel: "AGRICULTURE CONTENT CREATOR",
  },
};

const EASE = [0.22, 1, 0.36, 1];

// ==========================================
// THUMBNAIL COMPONENT
// ==========================================

function MediaThumbnail({
  src,
  fallbackSrc,
  alt,
  className = "",
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#DCE8D8] text-[#64856B]">
        <ImageOff size={32} />
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={handleError}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function EducationalContent() {
  const { language } = useLanguage();
  const t = translations[language] || translations.mr;
  const reduceMotion = useReducedMotion();

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.12,
  });

  const visible = Boolean(reduceMotion) || isInView;

  const reveal = (delay = 0, y = 24) => ({
    initial: { opacity: 0, y },
    animate: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : y,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: visible && !reduceMotion ? delay : 0,
      ease: EASE,
    },
  });

  return (
    <section
      ref={sectionRef}
      id="educational-content"
      aria-labelledby="educational-content-heading"
      className="relative isolate overflow-hidden bg-[#F8FAF5] py-12 sm:py-14 lg:py-16"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-[#E1EEDB]/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* SECTION HEADING */}

        <div className="mx-auto max-w-[790px] text-center">
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#43B649]" />

            <span className="text-[10px] font-extrabold tracking-[1.8px] text-[#41844B]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#43B649]" />
          </motion.div>

          <h2
            id="educational-content-heading"
            className="text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.22] tracking-[-0.7px] text-[#173923]"
          >
            <motion.span
              {...reveal(0.1)}
              className="block"
            >
              {t.heading1}
            </motion.span>

            <motion.span
              {...reveal(0.18)}
              className="block text-[#429849]"
            >
              {t.heading2}
            </motion.span>
          </h2>

          <motion.p
            {...reveal(0.25)}
            className="mx-auto mt-5 max-w-[730px] text-[15px] font-medium leading-[28px] text-[#526D59]"
          >
            {t.paragraph1}
          </motion.p>
        </div>

        {/* =====================================
            SOCIAL FEED SHOWCASE
        ===================================== */}

        <div className="mt-12 grid items-center gap-5 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:gap-6">

          {/* =====================================
              INSTAGRAM REEL THUMBNAIL
          ===================================== */}

          <motion.a
            {...reveal(0.25, 40)}
            href={INSTAGRAM_REEL.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Instagram Reel"
            className="group relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#E2E9DF] bg-white p-3 shadow-[0_16px_45px_rgba(23,57,35,0.09)] lg:rotate-[-3deg] lg:transition-transform lg:hover:rotate-0"
          >
            <div className="relative h-[340px] overflow-hidden rounded-[18px] bg-[#D9E8D3] sm:h-[390px] lg:h-[360px]">

              <MediaThumbnail
                src={INSTAGRAM_REEL.thumbnail}
                alt="Ganesh Nisal Instagram Reel Thumbnail"
                className="transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D11]/80 via-transparent to-transparent" />

              {/* INSTAGRAM LABEL */}

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2">
                <FaInstagram
                  size={15}
                  color="#D62976"
                />

                <span className="text-[10px] font-extrabold text-[#173923]">
                  REELS
                </span>
              </div>

              <div className="absolute right-4 top-4">
                <Clapperboard
                  size={20}
                  className="text-white"
                />
              </div>

              {/* PLAY BUTTON */}

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/20 text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play
                    size={23}
                    fill="currentColor"
                  />
                </span>
              </div>

              {/* REEL DETAILS */}

              <div className="absolute bottom-5 left-4 right-4">
                <p className="text-[10px] font-bold tracking-[1px] text-[#FFD93D]">
                  {t.reelLabel}
                </p>

                <p className="mt-2 text-[17px] font-extrabold text-white">
                  {t.postLabel}
                </p>

                <div className="mt-4 flex items-center gap-4 text-white">
                  <Heart size={19} />
                  <MessageCircle size={19} />
                  <Send size={19} />
                  <Bookmark
                    size={19}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>
          </motion.a>

          {/* =====================================
              CENTER CREATOR PROFILE
          ===================================== */}

          <motion.div
            {...reveal(0.35)}
            className="relative mx-auto w-full max-w-[430px] rounded-[26px] border border-[#E1EADF] bg-white p-6 text-center shadow-[0_18px_50px_rgba(23,57,35,0.07)] sm:p-8"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#E9F3E6] text-[#2F8B42]">
              <Smartphone
                size={27}
                strokeWidth={1.7}
              />
            </div>

            <p className="mt-5 text-[10px] font-extrabold tracking-[1.7px] text-[#4C9855]">
              {t.creatorLabel}
            </p>

            <h3 className="mt-2 text-[22px] font-extrabold text-[#173923]">
              Ganesh Nisal
            </h3>

            <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#FFD93D]" />

            <p className="mt-5 text-[13px] leading-[26px] text-[#627768]">
              {t.paragraph2}
            </p>

            <p className="mt-4 text-[13px] leading-[26px] text-[#627768]">
              {t.paragraph3}
            </p>

            {/* CONNECT BUTTON */}

            <a
              href={SOCIALS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#173923] px-6 py-3.5 text-[12px] font-extrabold text-white transition-colors hover:bg-[#2E7B3B]"
            >
              {t.connect}

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* SOCIAL MEDIA ICONS */}

            <div className="mt-7 flex items-center justify-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.Icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform hover:-translate-y-1"
                    style={{
                      color: social.color,
                      backgroundColor: social.bg,
                    }}
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================
              YOUTUBE VIDEO THUMBNAIL
          ===================================== */}

          <motion.a
            {...reveal(0.45, 40)}
            href={YOUTUBE_VIDEO.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch on YouTube"
            className="group mx-auto w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#E2E9DF] bg-white p-3 shadow-[0_16px_45px_rgba(23,57,35,0.09)] lg:rotate-[3deg] lg:transition-transform lg:hover:rotate-0"
          >
            <div className="overflow-hidden rounded-[18px]">

              {/* YOUTUBE THUMBNAIL */}

              <div className="relative aspect-video overflow-hidden bg-[#DCE8D8]">
                <MediaThumbnail
                  src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO.videoId}/maxresdefault.jpg`}
                  fallbackSrc={YOUTUBE_THUMBNAIL}
                  alt="Ganesh Nisal YouTube Video Thumbnail"
                  className="transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#102519]/15" />

                {/* PLAY BUTTON */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0033] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play
                      size={23}
                      fill="currentColor"
                    />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 rounded bg-black/75 px-2 py-1 text-[10px] font-bold text-white">
                  YOUTUBE
                </span>
              </div>

              {/* YOUTUBE VIDEO DETAILS */}

              <div className="bg-white px-3 py-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0F0] text-[#FF0033]">
                    <FaYoutube size={20} />
                  </div>

                  <div>
                    <p className="text-[15px] font-extrabold text-[#173923]">
                      {t.videoLabel}
                    </p>

                    <p className="mt-1 text-[12px] text-[#728475]">
                      Ganesh Nisal
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E8EEE6] pt-4">
                  <span className="text-[12px] font-bold text-[#437D4B]">
                    {t.watch}
                  </span>

                  <ExternalLink
                    size={16}
                    className="text-[#7A987F]"
                  />
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* =====================================
            SOCIAL PLATFORM BAR
        ===================================== */}

        <motion.div
          {...reveal(0.55)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {SOCIALS.map((social) => {
            const Icon = social.Icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[#DDE8DA] bg-white px-5 py-3 text-[12px] font-extrabold text-[#244B30] transition-colors hover:border-[#A5CCA5] hover:bg-[#F0F7ED]"
              >
                <Icon
                  size={17}
                  style={{ color: social.color }}
                />

                {social.name}

                <ArrowUpRight
                  size={14}
                  className="text-[#7E9C83] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
