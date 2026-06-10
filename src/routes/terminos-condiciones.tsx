import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/sc/LegalLayout.jsx";

export const Route = createFileRoute("/terminos-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — SMARTERCOOL" },
      { name: "description", content: "Términos y condiciones de uso del sitio web smartercool.com." },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <LegalLayout title="Términos y Condiciones de Uso" updated="07 de junio de 2026">
      <h2>1. Aceptación de los Términos</h2>
      <p>El acceso y uso del sitio web <a href="https://smartercool.com">https://smartercool.com</a> implica la aceptación plena y sin reservas de los presentes términos y condiciones. Si no está de acuerdo, le rogamos que se abstenga de utilizar el sitio.</p>

      <h2>2. Identificación del Titular</h2>
      <p>Este sitio es operado por <strong>Antonio Lizarraga López</strong> (Persona Física), con RFC LILA750617NG7, domiciliado en Av. General Valentín Canalizó 1537, Col. Pedro Moreno, Mexicali, Baja California, México, bajo la marca comercial Smarter Cool.</p>

      <h2>3. Objeto del Sitio</h2>
      <p>https://smartercool.com es un sitio web informativo y de catálogo cuyo objeto es presentar los productos de Smarter Cool, dedicada a la comercialización de equipos de climatización industrial, incluyendo enfriadores evaporativos, ventiladores HVLS y extractores industriales. El sitio permite al usuario conocer el catálogo de productos y ponerse en contacto con el equipo comercial a través de WhatsApp o correo electrónico. No realiza ventas ni cobros en línea; toda contratación se formaliza directamente entre las partes.</p>

      <h2>4. Uso Permitido</h2>
      <p>El usuario se compromete a hacer un uso lícito del sitio y en particular se obliga a:</p>
      <ul>
        <li>No realizar actividades ilícitas o que vulneren derechos de terceros</li>
        <li>No introducir virus, malware o cualquier código dañino</li>
        <li>No utilizar el sitio con fines comerciales no autorizados</li>
        <li>No reproducir, copiar o distribuir contenidos sin autorización escrita</li>
      </ul>

      <h2>5. Información sobre Productos</h2>
      <p>Las especificaciones técnicas, imágenes y características de los productos publicados tienen carácter orientativo. Antonio Lizarraga López se reserva el derecho de modificar disponibilidad, características técnicas y precios sin previo aviso. Para información vinculante, contacte directamente con el equipo comercial.</p>

      <h2>6. Propiedad Intelectual</h2>
      <p>Todos los contenidos del sitio (textos, imágenes, logotipos, diseño y código) son propiedad de Antonio Lizarraga López o se utilizan con la debida autorización, y están protegidos por la Ley Federal del Derecho de Autor.</p>

      <h2>7. Exclusión de Responsabilidad</h2>
      <p>Antonio Lizarraga López no garantiza la disponibilidad continua del sitio ni la ausencia de errores en los contenidos. No será responsable de daños derivados del uso del sitio ni de los contenidos de sitios de terceros enlazados.</p>

      <h2>8. Links a Terceros</h2>
      <p>El sitio puede contener enlaces a WhatsApp y redes sociales. Estos servicios son operados por terceros y se rigen por sus propios términos y políticas de privacidad, ajenos al titular.</p>

      <h2>9. Modificaciones</h2>
      <p>Antonio Lizarraga López se reserva el derecho de modificar en cualquier momento estos términos. Las modificaciones entrarán en vigor desde su publicación en <a href="https://smartercool.com">https://smartercool.com</a>.</p>

      <h2>10. Legislación Aplicable y Jurisdicción</h2>
      <p>Los presentes términos se rigen por la legislación mexicana vigente. Para cualquier controversia, las partes se someten a los tribunales competentes de Mexicali, Baja California, México.</p>

      <h2>11. Contacto</h2>
      <p>Para cualquier consulta: <a href="mailto:ventas@smartercool.com">ventas@smartercool.com</a> | +52 686 336 0107</p>
    </LegalLayout>
  );
}
