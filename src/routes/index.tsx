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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: "/sc.css" },
    ],
  }),
  component: App,
});
