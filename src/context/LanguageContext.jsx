
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const LanguageContext = createContext(null);

const DEFAULT_LANGUAGE = "mr";

const SUPPORTED_LANGUAGES = ["mr", "en", "hi"];

// Custom Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
};

// Language Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem("websiteLanguage");

      return SUPPORTED_LANGUAGES.includes(savedLanguage)
        ? savedLanguage
        : DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    }
  };

  // Save selected language
  useEffect(() => {
    try {
      localStorage.setItem("websiteLanguage", language);
    } catch {
      // Website will still work if storage is unavailable
    }

    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
