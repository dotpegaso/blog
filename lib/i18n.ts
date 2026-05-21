import en from "@/messages/en.json";
import pt from "@/messages/pt.json";

export const dictionaries = {
  en,
  pt,
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
