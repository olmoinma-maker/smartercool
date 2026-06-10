import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/sc/LegalLayout.jsx";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — SMARTERCOOL" },
      { name: "description", content: "Información sobre el uso de cookies técnicas en el sitio smartercool.com." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalLayout title="Política de Cookies" updated="07 de junio de 2026">
      <h2>1. ¿Qué son las Cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web, permitiendo recordar información sobre su navegación para mejorar la experiencia.</p>

      <h2>2. Cookies Utilizadas en este Sitio</h2>
      <p>El sitio web https://smartercool.com utiliza exclusivamente <strong>cookies técnicas o de sesión</strong>, estrictamente necesarias para el correcto funcionamiento del sitio. Estas cookies:</p>
      <ul>
        <li>No recopilan información personal identificable</li>
        <li>No rastrean la navegación en otros sitios web</li>
        <li>Se eliminan automáticamente al cerrar el navegador</li>
        <li>No requieren consentimiento del usuario bajo la normativa aplicable</li>
      </ul>
      <p>En este sitio <strong>NO</strong> se utilizan:</p>
      <ul>
        <li>Cookies de analítica (Google Analytics u similares)</li>
        <li>Cookies de publicidad o retargeting</li>
        <li>Píxeles de seguimiento de redes sociales</li>
        <li>Cookies de terceros de ningún tipo</li>
      </ul>

      <h2>3. Gestión de Cookies en el Navegador</h2>
      <p>Puede configurar su navegador para bloquear o eliminar cookies:</p>
      <ul>
        <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios</li>
        <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad</li>
        <li><strong>Safari:</strong> Preferencias &gt; Privacidad</li>
        <li><strong>Microsoft Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios</li>
      </ul>
      <p>Bloquear las cookies técnicas puede afectar al correcto funcionamiento del sitio.</p>

      <h2>4. Actualizaciones</h2>
      <p>Esta política puede actualizarse si se incorporan nuevas funcionalidades. Consulte esta página periódicamente en <a href="https://smartercool.com">https://smartercool.com</a>.</p>

      <h2>5. Contacto</h2>
      <p>Para consultas sobre el uso de cookies: <a href="mailto:ventas@smartercool.com">ventas@smartercool.com</a></p>
    </LegalLayout>
  );
}
