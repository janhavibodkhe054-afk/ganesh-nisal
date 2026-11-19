
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  Sprout,
  Milk,
  GraduationCap,
  Handshake,
  HeartHandshake,
  MessageSquare,
  Check,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const PHONE = "917588301011";

const TOPICS = [
  { id: "organic", icon: Sprout },
  { id: "dairy", icon: Milk },
  { id: "visit", icon: GraduationCap },
  { id: "collaboration", icon: Handshake },
  { id: "social", icon: HeartHandshake },
  { id: "general", icon: MessageSquare },
];

const CONTENT = {
  mr: {
    eyebrow: "LET'S CONNECT",
    title: "तुमचा प्रश्न,",
    accent: "आमच्याशी संवाद.",
    desc: "तुमच्या चौकशीचा विषय निवडा आणि काही सोप्या स्टेप्समध्ये गणेश निसाळ यांच्याशी संपर्क साधा.",
    location: "नाशिक, महाराष्ट्र",
    call: "थेट कॉल करा",
    whatsapp: "WhatsApp संपर्क",
    step: "STEP",
    step1: "कशाबाबत संपर्क साधायचा आहे?",
    step1Desc: "तुमच्या चौकशीशी संबंधित विषय निवडा.",
    step2: "तुमची थोडी माहिती द्या.",
    step2Desc: "तुमच्याशी संपर्क साधण्यासाठी आवश्यक माहिती भरा.",
    step3: "तुमचा संदेश लिहा.",
    step3Desc: "तुमचा प्रश्न किंवा माहिती थोडक्यात लिहा.",
    name: "पूर्ण नाव",
    namePlaceholder: "तुमचे पूर्ण नाव",
    mobile: "मोबाईल नंबर",
    mobilePlaceholder: "10 अंकी मोबाईल नंबर",
    email: "ई-मेल (ऐच्छिक)",
    emailPlaceholder: "तुमचा ई-मेल",
    city: "शहर / गाव (ऐच्छिक)",
    cityPlaceholder: "तुमचे शहर किंवा गाव",
    message: "तुमचा संदेश",
    messagePlaceholder: "तुम्हाला काय विचारायचे आहे?",
    next: "पुढे जा",
    back: "मागे जा",
    send: "WhatsApp वर पाठवा",
    phoneError: "योग्य 10 अंकी मोबाईल नंबर टाका.",
    note: "WhatsApp उघडल्यानंतर संदेश Send करावा लागेल.",
    topics: [
      ["सेंद्रिय शेती", "मार्गदर्शन व माहिती"],
      ["दुग्धव्यवसाय", "व्यवसायासंबंधी चौकशी"],
      ["शेती भेट", "भेट व शिक्षण"],
      ["सहकार्य", "मीडिया व Collaboration"],
      ["सामाजिक कार्य", "उपक्रम व सहभाग"],
      ["इतर चौकशी", "सामान्य प्रश्न"],
    ],
  },
  en: {
    eyebrow: "LET'S CONNECT",
    title: "Your Questions,",
    accent: "Our Conversation.",
    desc: "Choose your enquiry topic and connect with Ganesh Nisal in a few simple steps.",
    location: "Nashik, Maharashtra",
    call: "Call Directly",
    whatsapp: "WhatsApp Contact",
    step: "STEP",
    step1: "What would you like to discuss?",
    step1Desc: "Select the topic that best matches your enquiry.",
    step2: "Tell us a little about yourself.",
    step2Desc: "Enter the details needed to contact you.",
    step3: "Write your message.",
    step3Desc: "Briefly describe your question or enquiry.",
    name: "Full Name",
    namePlaceholder: "Your full name",
    mobile: "Mobile Number",
    mobilePlaceholder: "10-digit mobile number",
    email: "Email (Optional)",
    emailPlaceholder: "Your email address",
    city: "City / Village (Optional)",
    cityPlaceholder: "Your city or village",
    message: "Your Message",
    messagePlaceholder: "How can we help you?",
    next: "Continue",
    back: "Go Back",
    send: "Send via WhatsApp",
    phoneError: "Enter a valid 10-digit mobile number.",
    note: "WhatsApp will open. Tap Send to deliver your message.",
    topics: [
      ["Organic Farming", "Guidance & Information"],
      ["Dairy Business", "Business Enquiry"],
      ["Farm Visit", "Visits & Learning"],
      ["Collaboration", "Media & Partnerships"],
      ["Social Work", "Activities & Participation"],
      ["General Enquiry", "Other Questions"],
    ],
  },
  hi: {
    eyebrow: "LET'S CONNECT",
    title: "आपके सवाल,",
    accent: "हमारा संवाद।",
    desc: "अपनी पूछताछ का विषय चुनें और कुछ आसान चरणों में गणेश निसाळ से संपर्क करें।",
    location: "नासिक, महाराष्ट्र",
    call: "सीधे कॉल करें",
    whatsapp: "WhatsApp संपर्क",
    step: "STEP",
    step1: "आप किस बारे में संपर्क करना चाहते हैं?",
    step1Desc: "अपनी पूछताछ से संबंधित विषय चुनें।",
    step2: "अपनी जानकारी दर्ज करें।",
    step2Desc: "संपर्क के लिए आवश्यक जानकारी भरें।",
    step3: "अपना संदेश लिखें।",
    step3Desc: "अपना सवाल या संदेश संक्षेप में लिखें।",
    name: "पूरा नाम",
    namePlaceholder: "अपना पूरा नाम",
    mobile: "मोबाइल नंबर",
    mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
    email: "ई-मेल (वैकल्पिक)",
    emailPlaceholder: "आपका ई-मेल",
    city: "शहर / गाँव (वैकल्पिक)",
    cityPlaceholder: "आपका शहर या गाँव",
    message: "आपका संदेश",
    messagePlaceholder: "आप क्या पूछना चाहते हैं?",
    next: "आगे बढ़ें",
    back: "पीछे जाएँ",
    send: "WhatsApp पर भेजें",
    phoneError: "सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
    note: "WhatsApp खुलने के बाद Send दबाकर संदेश भेजें।",
    topics: [
      ["जैविक खेती", "मार्गदर्शन और जानकारी"],
      ["डेयरी व्यवसाय", "व्यवसाय संबंधी पूछताछ"],
      ["फार्म विजिट", "भ्रमण और शिक्षा"],
      ["सहयोग", "मीडिया और साझेदारी"],
      ["सामाजिक कार्य", "गतिविधियाँ और सहभागिता"],
      ["अन्य पूछताछ", "सामान्य सवाल"],
    ],
  },
};

const FIELD =
  "h-[52px] w-full rounded-xl border border-[#DFE8DC] bg-[#F8FAF6] px-4 text-[14px] text-[#173923] outline-none transition-all placeholder:text-[#9AA79B] focus:border-[#43B649] focus:bg-white focus:ring-4 focus:ring-[#43B649]/10";

export default function ContactEnquiry() {
  const { language } = useLanguage();
  const t = CONTENT[language] || CONTENT.mr;
  const reduceMotion = useReducedMotion();

  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState(false);

  const update = (key, value) => {
    setDetails((prev) => ({ ...prev, [key]: value }));
    if (key === "mobile") setPhoneError(false);
  };

  const validPhone = /^[6-9]\d{9}$/.test(details.mobile);

  const goNext = () => {
    if (step === 1 && topic) setStep(2);
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();

    if (!validPhone) {
      setPhoneError(true);
      return;
    }

    setStep(3);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!topic || !details.name.trim() || !validPhone) {
      setStep(2);
      return;
    }

    const topicIndex = TOPICS.findIndex((x) => x.id === topic);
    const topicLabel = t.topics[topicIndex]?.[0] || "General";

    const text = [
      "*New Website Enquiry - Ganesh Nisal*",
      "",
      `*Enquiry:* ${topicLabel}`,
      `*Name:* ${details.name.trim()}`,
      `*Mobile:* ${details.mobile}`,
      `*Email:* ${details.email.trim() || "Not provided"}`,
      `*City:* ${details.city.trim() || "Not provided"}`,
      "",
      "*Message:*",
      details.message.trim(),
    ].join("\n");

    window.location.href =
      `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  };

  const animation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.25 },
      };

  return (
    <section
      id="contact-form"
      className="scroll-mt-[145px] overflow-hidden bg-[#F8FAF5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">

        {/* SECTION INTRO */}

        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#43B649]" />
            <span className="text-[11px] font-extrabold tracking-[2px] text-[#34883B]">
              {t.eyebrow}
            </span>
            <span className="h-px w-8 bg-[#43B649]" />
          </div>

          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.2] tracking-[-1px] text-[#173923]">
            {t.title}{" "}
            <span className="text-[#43B649]">{t.accent}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[610px] text-[15px] leading-[27px] text-[#6D7B70]">
            {t.desc}
          </p>
        </div>

        {/* CONTACT SHORTCUTS */}

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-[#E4EBE0] bg-white px-5 py-4">
            <MapPin size={19} className="shrink-0 text-[#43B649]" />
            <span className="text-[13px] font-semibold text-[#173923]">
              {t.location}
            </span>
          </div>

          <a
            href="tel:+917588301011"
            className="group flex items-center justify-between gap-3 rounded-xl border border-[#E4EBE0] bg-white px-5 py-4 transition-colors hover:border-[#43B649]"
          >
            <span className="flex items-center gap-3 text-[13px] font-semibold text-[#173923]">
              <Phone size={19} className="text-[#43B649]" />
              {t.call}
            </span>
            <ArrowUpRight size={16} className="text-[#43B649]" />
          </a>

          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl border border-[#E4EBE0] bg-white px-5 py-4 transition-colors hover:border-[#43B649]"
          >
            <span className="flex items-center gap-3 text-[13px] font-semibold text-[#173923]">
              <MessageCircle size={19} className="text-[#43B649]" />
              {t.whatsapp}
            </span>
            <ArrowUpRight size={16} className="text-[#43B649]" />
          </a>
        </div>

        {/* ENQUIRY STUDIO */}

        <div className="overflow-hidden rounded-[22px] border border-[#E1E9DD] bg-white shadow-[0_24px_80px_rgba(23,57,35,0.07)]">

          {/* PROGRESS HEADER */}

          <div className="border-b border-[#E8EEE5] px-6 py-6 sm:px-9">
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((number) => (
                <React.Fragment key={number}>
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold transition-all ${
                      step >= number
                        ? "bg-[#173923] text-white"
                        : "bg-[#EDF3EA] text-[#9AA99A]"
                    }`}
                  >
                    {step > number ? <Check size={17} /> : `0${number}`}
                  </div>

                  {number < 3 && (
                    <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-[#EDF3EA]">
                      <div
                        className={`h-full rounded-full bg-[#43B649] transition-all duration-300 ${
                          step > number ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* STEP CONTENT */}

          <div className="min-h-[370px] px-6 py-9 sm:px-9 sm:py-11">
            <AnimatePresence mode="wait">

              {/* STEP 01 */}

              {step === 1 && (
                <motion.div key="step1" {...animation}>
                  <span className="text-[11px] font-extrabold tracking-[2px] text-[#43B649]">
                    {t.step} 01 / 03
                  </span>

                  <h3 className="mt-3 text-[23px] font-extrabold text-[#173923] sm:text-[29px]">
                    {t.step1}
                  </h3>

                  <p className="mt-2 text-[14px] text-[#7B897D]">
                    {t.step1Desc}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {TOPICS.map(({ id, icon: Icon }, index) => {
                      const active = topic === id;

                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setTopic(id)}
                          aria-pressed={active}
                          className={`group relative flex min-h-[112px] items-start gap-4 rounded-[14px] border p-4 text-left transition-all duration-200 ${
                            active
                              ? "border-[#43B649] bg-[#F0F9ED] shadow-[0_0_0_2px_rgba(67,182,73,0.12)]"
                              : "border-[#E3EAE0] bg-white hover:border-[#43B649]/60 hover:bg-[#FAFCF9]"
                          }`}
                        >
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                              active
                                ? "bg-[#173923] text-[#FFD93D]"
                                : "bg-[#EDF5E9] text-[#34883B]"
                            }`}
                          >
                            <Icon size={21} />
                          </div>

                          <div className="min-w-0 pt-1">
                            <p className="text-[14px] font-extrabold text-[#173923]">
                              {t.topics[index][0]}
                            </p>
                            <p className="mt-1 text-[12px] leading-[19px] text-[#829083]">
                              {t.topics[index][1]}
                            </p>
                          </div>

                          {active && (
                            <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#43B649] text-white">
                              <Check size={12} strokeWidth={3} />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-9 flex justify-end">
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!topic}
                      className="inline-flex min-h-[49px] items-center gap-3 rounded-lg bg-[#173923] px-7 text-[13px] font-extrabold text-white transition-colors hover:bg-[#2F7F35] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {t.next}
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 02 */}

              {step === 2 && (
                <motion.div key="step2" {...animation}>
                  <span className="text-[11px] font-extrabold tracking-[2px] text-[#43B649]">
                    {t.step} 02 / 03
                  </span>

                  <h3 className="mt-3 text-[23px] font-extrabold text-[#173923] sm:text-[29px]">
                    {t.step2}
                  </h3>

                  <p className="mt-2 text-[14px] text-[#7B897D]">
                    {t.step2Desc}
                  </p>

                  <form onSubmit={handleDetailsSubmit} className="mt-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[13px] font-bold text-[#173923]">
                          {t.name} *
                        </span>
                        <input
                          required
                          type="text"
                          minLength={2}
                          maxLength={100}
                          autoComplete="name"
                          value={details.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder={t.namePlaceholder}
                          className={FIELD}
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[13px] font-bold text-[#173923]">
                          {t.mobile} *
                        </span>
                        <input
                          required
                          type="tel"
                          inputMode="numeric"
                          pattern="[6-9][0-9]{9}"
                          maxLength={10}
                          value={details.mobile}
                          onChange={(e) =>
                            update(
                              "mobile",
                              e.target.value.replace(/\D/g, "").slice(0, 10)
                            )
                          }
                          placeholder={t.mobilePlaceholder}
                          className={FIELD}
                        />
                        {phoneError && (
                          <span className="mt-1 block text-[12px] text-red-600">
                            {t.phoneError}
                          </span>
                        )}
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[13px] font-bold text-[#173923]">
                          {t.email}
                        </span>
                        <input
                          type="email"
                          maxLength={150}
                          autoComplete="email"
                          value={details.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder={t.emailPlaceholder}
                          className={FIELD}
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[13px] font-bold text-[#173923]">
                          {t.city}
                        </span>
                        <input
                          type="text"
                          maxLength={100}
                          value={details.city}
                          onChange={(e) => update("city", e.target.value)}
                          placeholder={t.cityPlaceholder}
                          className={FIELD}
                        />
                      </label>
                    </div>

                    <div className="mt-9 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-2 text-[13px] font-bold text-[#647666] hover:text-[#173923]"
                      >
                        <ArrowLeft size={17} />
                        {t.back}
                      </button>

                      <button
                        type="submit"
                        className="inline-flex min-h-[49px] items-center gap-3 rounded-lg bg-[#173923] px-7 text-[13px] font-extrabold text-white transition-colors hover:bg-[#2F7F35]"
                      >
                        {t.next}
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 03 */}

              {step === 3 && (
                <motion.div key="step3" {...animation}>
                  <span className="text-[11px] font-extrabold tracking-[2px] text-[#43B649]">
                    {t.step} 03 / 03
                  </span>

                  <h3 className="mt-3 text-[23px] font-extrabold text-[#173923] sm:text-[29px]">
                    {t.step3}
                  </h3>

                  <p className="mt-2 text-[14px] text-[#7B897D]">
                    {t.step3Desc}
                  </p>

                  <form onSubmit={handleSend} className="mt-8">
                    <label className="block">
                      <span className="mb-2 block text-[13px] font-bold text-[#173923]">
                        {t.message} *
                      </span>

                      <textarea
                        required
                        minLength={5}
                        maxLength={2000}
                        rows={6}
                        value={details.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder={t.messagePlaceholder}
                        className={`${FIELD} h-auto min-h-[165px] resize-y py-4`}
                      />
                    </label>

                    <div className="mt-5 flex items-start gap-2 rounded-lg bg-[#F0F8ED] px-4 py-3">
                      <ShieldCheck
                        size={17}
                        className="mt-0.5 shrink-0 text-[#34883B]"
                      />
                      <p className="text-[12px] leading-[20px] text-[#627B65]">
                        {t.note}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 text-[13px] font-bold text-[#647666] hover:text-[#173923]"
                      >
                        <ArrowLeft size={17} />
                        {t.back}
                      </button>

                      <button
                        type="submit"
                        className="inline-flex min-h-[51px] items-center gap-3 rounded-lg bg-[#FFD93D] px-6 text-[13px] font-extrabold text-[#173923] transition-colors hover:bg-[#F1C92D]"
                      >
                        <Send size={17} />
                        {t.send}
                        <ArrowUpRight size={17} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
