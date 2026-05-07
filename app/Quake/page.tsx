"use client";
// 1. Importamos la página de About como si fuera un componente
import AboutPage from "../about/page";

export default function DoomPage() {
  return (
    // 2. Usamos el import y le "enviamos" el contenido de Doom
    <AboutPage title="Quake">
      <section>
        <h2 className="text-2xl font-semibold mt-4">Reseña</h2>
        <p className="mt-2 text-gray-600">
          Doom es el padre de los shooters modernos. Frenético, sangriento y revolucionario.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Mecánicas</h2>
        <p className="mt-2 text-gray-600">
          Uso de llaves de colores, búsqueda de secretos y un arsenal icónico.
        </p>
      </section>
    </AboutPage>
  );
}
