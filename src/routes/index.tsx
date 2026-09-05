import { createFileRoute } from "@tanstack/react-router";
import App from "@/components/sc/app.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMARTERCOOL — Climatización inteligente para espacios exigentes" },
      {
        name: "description",
        content:
          "Equipos evaporativos, ventiladores HVLS, extractores industriales y componentes para climatización profesional.",
      },
    ],
    links: [
      { rel: "stylesheet", href: "/fonts.css" },
      { rel: "stylesheet", href: "/sc.css" },
    ],
  }),
  component: App,
});
