import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Hero_Heading": "Maps to connect and create",
      "Hero_Intro": "Grow your Community with our Collaborative Maps that empower everyone build decentralized real-life networks to co-create positive change in your area and everywhere in the world ✨",
      "Explainer_Heading" : "What is Utopia and how does it work?",
      "Usecases_Heading" : "Explore the ways our maps are used",
      "Usecases_Intro": "Different goals, different maps. We're all about sparking genuine connections and making a positive impact in the world. Here's the magic of Utopia:",
      "Usecases_Question" : "Do you already have your network?",
      "Usecases_Button" : "Get your Custom Map",
      "Team_Heading" : "Who's behind Utopia?",
      "Team_Button" : "Join us",
      "Show_Map_Button" : "Show Map",
       "Future_Heading" : "Your contribution decides what’s coming next",
      "Future_Intro" : "Utopia grows through all of us.  Our platform evolves organically – one feature at a time, with the community. With every donation, you cast your vote for a module and directly support its creation."
    }
  },
  de: {
    translation: {
      "Hero_Heading": "Utopia Community Mapping",
      "Hero_Intro": "Wir machen Deine Community sichtbar, werde aktiv und gestalte den Wandel! Nutze die interaktive Karte, um Events zu planen und an realen Quests teilzunehmen. Teile deine Ressourcen, vernetze dich mit anderen und setze Veränderungen in Bewegung!",
      "Explainer_Heading" : "Was ist Utopia und wie funktioniert es?",
      "Usecases_Heading" : "So werden unsere Karten genutzt",
      "Usecases_Intro": "Unterschiedliche Communities, unterschiedliche Karten. Unser Fokus liegt darauf, echte Verbindungen zu schaffen und einen positiven Wandel in der Welt zu bewirken.",
      "Usecases_Question" : "Du hast bereits eine Netzwerk?",
      "Usecases_Button" : "Starte deine Map",
      "Team_Heading" : "Wer baut Utopia?",
      "Team_Button" : "Werde Teil von Utopia  ",
      "Show_Map_Button" : "Besuche die Map",
      "Future_Heading" : "Deine Spende entscheidet, was als Nächstes entsteht",
      "Future_Intro" : "Utopia entsteht durch uns alle. Unsere Plattform entwickelt sich organisch weiter – Feature für Feature, gemeinsam mit der Community. Mit jeder Spende gibst du deine Stimme für ein Modul ab – und unterstützt direkt seine Umsetzung."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;