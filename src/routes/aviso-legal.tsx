import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/sc/LegalLayout.jsx";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — SMARTERCOOL" },
      { name: "description", content: "Aviso legal del sitio smartercool.com — titularidad, propiedad intelectual y responsabilidad." },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <LegalLayout title="Aviso Legal" updated="07 de junio de 2026">
      <h2>1. Identificación del Titular</h2>
      <p>En cumplimiento con las disposiciones legales vigentes en México, se informa que el sitio web <a href="https://smartercool.com">https://smartercool.com</a> es titularidad de:</p>
      <ul>
        <li><strong>Nombre:</strong> Antonio Lizarraga López</li>
        <li><strong>Tipo de persona:</strong> Persona Física</li>
        <li><strong>RFC:</strong> LILA750617NG7</li>
        <li><strong>Domicilio fiscal:</strong> Av. General Valentín Canalizó 1537, Col. Pedro Moreno, Mexicali, Baja California, México</li>
        <li><strong>Correo electrónico:</strong> ventas@smartercool.com</li>
        <li><strong>Teléfono:</strong> +52 686 336 0107</li>
      </ul>

      <h2>2. Objeto del Sitio Web</h2>
      <p>El sitio web <a href="https://smartercool.com">https://smartercool.com</a> tiene como finalidad presentar el catálogo de productos de Smarter Cool, dedicada a la comercialización de equipos de climatización industrial, incluyendo enfriadores evaporativos, ventiladores HVLS y extractores industriales. El sitio es de carácter exclusivamente informativo y no realiza transacciones comerciales en línea.</p>

      <h2>3. Propiedad Intelectual</h2>
      <p>Todos los contenidos del sitio web —incluyendo textos, imágenes, logotipos, diseño gráfico y código fuente— son propiedad de Antonio Lizarraga López o de terceros que han autorizado su uso, y se encuentran protegidos por la Ley Federal del Derecho de Autor y demás normativa aplicable. Queda expresamente prohibida la reproducción total o parcial de los contenidos sin autorización escrita del titular.</p>

      <h2>4. Responsabilidad</h2>
      <p>Antonio Lizarraga López no se hace responsable de los daños o perjuicios que pudieran derivarse del uso del sitio web, de errores u omisiones en los contenidos, ni de la indisponibilidad temporal del servicio por causas ajenas a su control.</p>

      <h2>5. Legislación Aplicable y Jurisdicción</h2>
      <p>El presente aviso legal se rige por la legislación mexicana vigente. Para cualquier controversia derivada del acceso o uso de este sitio, las partes se someten a los tribunales competentes de Mexicali, Baja California, México.</p>

      <h2>6. Contacto</h2>
      <p>Para cualquier consulta: <a href="mailto:ventas@smartercool.com">ventas@smartercool.com</a> | +52 686 336 0107</p>
    </LegalLayout>
  );
}
