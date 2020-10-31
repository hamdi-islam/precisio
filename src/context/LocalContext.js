import React from "react";
import en from "../lang/en.json";
import fr from "../lang/fr";
import { IntlProvider } from "react-intl";

export const LocaleContext = React.createContext();

const local = navigator.language;

let lang;

if (local === "en-US") {
  lang = en;
} else {
  lang = fr;
}

const LocaleContextProvider = (props) => {
  const [locale, setLocale] = React.useState(local);
  const [messages, setMessages] = React.useState(lang);

  const selectLang = (value) => {
    setLocale(value);
    if (value === "fr-FR") {
      setMessages(fr);
    } else {
      setMessages(en);
    }
  };
  return (
    <LocaleContext.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;
