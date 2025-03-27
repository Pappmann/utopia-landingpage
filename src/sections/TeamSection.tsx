"use client";
import * as React from "react";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { useTranslation } from "react-i18next";

export const TeamSection: React.FC = () => {
  const {t} = useTranslation()
  const teamMembers = [
    {
      name: "Anton",
      role: {
        en: "Mapping & Free Software",
        de: "Kartierung & freie Software",
      },
      quote: {
        en: "We are a group of creators and change-makers who believe amazing things can happen with the power of collective action.",
        de: "Wir sind eine Gruppe von Schöpfern und Veränderern, die daran glauben, dass mit der Kraft kollektiven Handelns erstaunliche Dinge geschehen können.",
      },
      imageUrl: "/team/anton.png",
    },
    {
      name: "Timo",
      role: {
        en: "Visionary",
        de: "Visionär",
      },
      quote: {
        en: "Our goal is to create collaborative maps to connect people, projects and resources in ways that matter.",
        de: "Unser Ziel ist es, kollaborative Karten zu erstellen, um Menschen, Projekte und Ressourcen auf sinnvolle Weise zu verbinden.",
      },
      imageUrl: "/team/timo.png",
    },
    {
      name: "Shaira",
      role: {
        en: "Support",
        de: "Unterstützung",
      },
      quote: {
        en: "Our mission is to connect the digital and real worlds to spark new ideas, make change and co-creation possible.",
        de: "Unsere Mission ist es, die digitale und die reale Welt zu verbinden, um neue Ideen zu entfachen, Veränderungen zu bewirken und Co-Kreation zu ermöglichen.",
      },
      imageUrl: "/team/shaira.png",
    },
    {
      name: "Luca",
      role: {
        en: "Mapping & Free Software",
        de: "Kartierung & freie Software",
      },
      quote: {
        en: "More than anything, we want to help communities unlock their potential and bring big dreams to life—together.",
        de: "Mehr als alles andere wollen wir Gemeinschaften dabei helfen, ihr Potenzial freizusetzen und große Träume gemeinsam zu verwirklichen.",
      },
      imageUrl: "/team/luca.png",
    },
  ];
  

  return (
    <section className="flex flex-col gap-16 items-center px-8 py-16 pb-24">
      <h2 className="text-4xl font-bold leading-10 text-center max-sm:text-3xl">
        {t("Team_Heading")}
      </h2>
      <div className="flex flex-wrap gap-16 justify-center md:gap-20 lg:gap-24">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
      <a
          href="#"
      >
        <span className="btn btn-lg h-15 rounded-full text-white !bg-[#C4037D] hover:!bg-[#A50268]">{t("Team_Button")}<i className="ti ti-arrow-up-right" />
        </span>
      </a>
    </section>
  );
};
