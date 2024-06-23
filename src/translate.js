import en from "./JSON/en.json";
import uz from "./JSON/uz.json";
import ru from "./JSON/ru.json";

const messages = {
  en,
  uz,
  ru,
};

let currentLanguage = "en";

export function setLanguage(language) {
  if (messages[language]) {
    currentLanguage = language;
    localStorage.setItem("language", language);
  }
}

export function translate(key) {
  return messages[currentLanguage][key] || key;
}

export function getCurrentLanguage() {
  return currentLanguage;
}

// Initialize language from localStorage
const savedLanguage = localStorage.getItem("language");
if (savedLanguage && messages[savedLanguage]) {
  setLanguage(savedLanguage);
}
