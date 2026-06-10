import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/sc/LegalLayout.jsx";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — SMARTERCOOL" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales de smartercool.com conforme a la LFPDPPP." },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <LegalLayout title="Política de Privacidad" updated="07 de junio de 2026">
      <h2>1. Responsable del Tratamiento de Datos</h2>
      <p>En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad, se informa que el responsable del tratamiento de sus datos personales es:</p>
      <ul>
        <li><strong>Nombre:</strong> Antonio Lizarraga López</li>
        <li><strong>Tipo de persona:</strong> Persona Física</li>
        <li><strong>RFC:</strong> LILA750617NG7</li>
        <li><strong>Domicilio fiscal:</strong> Av. General Valentín Canalizó 1537, Col. Pedro Moreno, Mexicali, Baja California, México</li>
        <li><strong>Correo electrónico:</strong> ventas@smartercool.com</li>
        <li><strong>Teléfono:</strong> +52 686 336 0107</li>
      </ul>

      <h2>2. Datos Personales que se Recaban</h2>
      <p>A través de los medios de contacto habilitados en el sitio (WhatsApp y correo electrónico), podemos recabar los siguientes datos personales:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Número de teléfono o WhatsApp</li>
        <li>Correo electrónico</li>
        <li>Empresa o negocio (en caso de clientes corporativos)</li>
        <li>Descripción del producto o proyecto de interés</li>
      </ul>
      <p>No se recaban datos personales sensibles.</p>

      <h2>3. Finalidades del Tratamiento</h2>
      <p>Sus datos personales serán utilizados para las siguientes <strong>finalidades primarias</strong>:</p>
      <ul>
        <li>Atender solicitudes de información sobre productos y cotizaciones</li>
        <li>Dar seguimiento comercial a su consulta</li>
        <li>Gestionar pedidos y contratos de suministro</li>
      </ul>
      <p><strong>Finalidades secundarias</strong> (puede oponerse a ellas):</p>
      <ul>
        <li>Envío de información sobre nuevos productos o promociones</li>
        <li>Comunicaciones comerciales relacionadas con climatización industrial</li>
      </ul>

      <h2>4. Transferencia de Datos</h2>
      <p>Antonio Lizarraga López no transfiere sus datos personales a terceros sin su consentimiento, salvo en los casos previstos por el artículo 37 de la LFPDPPP.</p>

      <h2>5. Derechos ARCO</h2>
      <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercerlos, envíe su solicitud incluyendo nombre completo, descripción del derecho a ejercer y copia de identificación oficial a:</p>
      <ul>
        <li><strong>Correo electrónico:</strong> ventas@smartercool.com</li>
        <li><strong>Teléfono / WhatsApp:</strong> +52 686 336 0107</li>
      </ul>
      <p>Responderemos en un plazo máximo de 20 días hábiles.</p>

      <h2>6. Uso de Cookies</h2>
      <p>El sitio web https://smartercool.com utiliza únicamente cookies técnicas estrictamente necesarias para el correcto funcionamiento del sitio. No se utilizan cookies de analítica, publicidad ni de terceros de ningún tipo.</p>

      <h2>7. Cambios al Aviso de Privacidad</h2>
      <p>Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán publicados en <a href="https://smartercool.com">https://smartercool.com</a>.</p>

      <h2>8. Contacto</h2>
      <p>Para dudas sobre este aviso de privacidad: <a href="mailto:ventas@smartercool.com">ventas@smartercool.com</a> | +52 686 336 0107</p>
    </LegalLayout>
  );
}
