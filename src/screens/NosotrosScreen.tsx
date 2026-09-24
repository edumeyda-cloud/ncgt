import React from 'react';
import { ScreenId } from '../types.ts';

interface NosotrosScreenProps {
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

export const NosotrosScreen: React.FC<NosotrosScreenProps> = () => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: QUIÉNES SOMOS & INDUSTRIAL IDENTITY */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-md pb-space-lg w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-7 flex flex-col space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-high text-primary w-fit font-label-code text-label-code uppercase tracking-widest">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              <span>Centro Logístico &amp; Taller Especializado</span>
            </div>
            <h1 className="font-display text-display text-on-surface uppercase tracking-tight leading-none">
              Especialistas en Rodamiento y Soluciones de Carretera
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Nacidos en Galeras, Municipio de Colón, sobre el kilómetro 13+100 de la Carretera Estatal 100. Operamos justo en la arteria neurálgica que conecta el Aeropuerto Internacional de Querétaro, parques industriales de alta manufactura y las rutas de carga pesada hacia la Sierra Gorda y el Bajío.
            </p>
            <div className="p-space-md rounded bg-surface-container-low flex flex-col sm:flex-row gap-space-md items-start sm:items-center">
              <div className="w-12 h-12 rounded bg-on-secondary-fixed flex items-center justify-center shrink-0 text-tertiary-fixed">
                <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
              </div>
              <div>
                <span className="font-title-md text-title-md text-on-surface block uppercase tracking-wide">
                  Filosofía de Servicio: Cero Improvisación
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Neumáticos de lote fresco con trazabilidad oficial, calibraciones de torque computarizadas y desmontadoras hidráulicas para rines de servicio pesado y vehicular.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-space-sm pt-space-xs">
              <div className="bg-surface-container p-space-sm rounded">
                <span className="font-label-technical text-label-technical text-primary uppercase block">Operación</span>
                <span className="font-headline-sm text-headline-sm text-on-surface block">6 DÍAS / SEM</span>
                <span className="font-body-sm text-body-sm text-outline">Guardias de auxilio</span>
              </div>
              <div className="bg-surface-container p-space-sm rounded">
                <span className="font-label-technical text-label-technical text-primary uppercase block">Ubicación</span>
                <span className="font-headline-sm text-headline-sm text-on-surface block">KM 13+100</span>
                <span className="font-body-sm text-body-sm text-outline">Carr. Estatal 100 Qro</span>
              </div>
              <div className="bg-surface-container p-space-sm rounded">
                <span className="font-label-technical text-label-technical text-primary uppercase block">Capacidad</span>
                <span className="font-headline-sm text-headline-sm text-on-surface block">FLEET READY</span>
                <span className="font-body-sm text-body-sm text-outline">Tractos y particulares</span>
              </div>
            </div>
          </div>

          {/* Live Workshop Graphic / Structural Card */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-on-secondary-fixed text-on-primary p-space-lg rounded shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[180px]">tire_repair</span>
              </div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-label-code text-label-code text-tertiary-fixed tracking-widest uppercase">
                  FICHA TÉCNICA DE BASE
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container-highest/20 font-label-code text-label-code text-on-primary">
                  QRO-COLÓN-100
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-primary uppercase mb-space-sm">
                NCGT El Coyote y sus Gemelos
              </h2>
              <div className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high mb-space-md">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">pin_drop</span>
                  <span>Corredor Aeropuerto QRO - Bernal - Cadereyta.</span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">build</span>
                  <span>Montaje con destalonadora electro-hidráulica pesada y rampas de piso plano.</span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">inventory_2</span>
                  <span>Rack climatizado bajo cubierta: Continental, Goodyear, Michelin, BFGoodrich.</span>
                </div>
              </div>
              <div className="p-space-sm rounded bg-on-secondary-fixed-variant text-surface-container flex items-center justify-between">
                <span className="font-label-technical text-label-technical uppercase text-tertiary-fixed">
                  Tiempo promedio en bahía:
                </span>
                <span className="font-headline-sm text-headline-sm text-on-primary">18 MIN / EJE</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[28px]">speed</span>
                <div>
                  <span className="font-title-md text-title-md text-on-surface block">Paso de Autotransporte</span>
                  <span className="font-body-sm text-body-sm text-outline">+14,000 unidades circulan diariamente</span>
                </div>
              </div>
              <span className="font-label-technical text-label-technical text-primary font-bold">
                ZONA ZERO RETRASOS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REAL PHOTO & PATIO DE SERVICIO */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <div className="flex items-center gap-space-xs font-label-code text-label-code text-primary uppercase font-bold tracking-widest mb-space-xs">
                <span className="material-symbols-outlined text-[16px]">domain</span>
                <span>Instalaciones Operativas en Galeras</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">
                Patio de Maniobras y Bahías de Taller
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Capacidad simultánea para tractocamiones quinta rueda, plataformas, autobuses, camionetas utilitarias y compactos.
            </p>
          </div>

          {/* Main Visual Banner with Data Store Real Image */}
          <div className="relative w-full rounded overflow-hidden shadow-xl bg-on-secondary-fixed">
            <img
              alt="Instalaciones reales de NCGT Neumáticos El Coyote en Carretera 100 Querétaro con patio de servicio"
              className="w-full h-[380px] sm:h-[480px] lg:h-[560px] object-cover"
              src="/fachada-ncgt.jpg"
              referrerPolicy="no-referrer"
            />
            {/* Overlay HUD Telemetry / Structural Callouts */}
            <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/90 via-transparent to-transparent flex flex-col justify-end p-space-md sm:p-space-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm backdrop-blur-md bg-on-secondary-fixed/80 p-space-md rounded text-on-primary">
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">garage_home</span>
                  <div>
                    <span className="font-label-technical text-label-technical block text-on-primary uppercase">
                      Bahías Techadas
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      3 carriles de servicio directo de altura completa para semirremolques.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">build_circle</span>
                  <div>
                    <span className="font-label-technical text-label-technical block text-on-primary uppercase">
                      Rampa &amp; Desmontaje
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      Pistolas neumáticas de 1" alto torque y gatos de fosa para 35 toneladas.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">shelves</span>
                  <div>
                    <span className="font-label-technical text-label-technical block text-on-primary uppercase">
                      Racks Protegidos
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      Llantas protegidas del sol directo y degradación térmica prematura.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px]">forklift</span>
                  <div>
                    <span className="font-label-technical text-label-technical block text-on-primary uppercase">
                      Patio de Giro Amplio
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      Acceso directo sin maniobras complejas desde la Carretera 100.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Detail Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-md">
            <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
              <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">air</span>
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">Red Neumática de Alta Presión</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Calibrado exacto de libras según carga por eje para prevenir desgaste irregular del piso de la llanta.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
              <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">verified_user</span>
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">Garantía Directa de Planta</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Respaldamos cada unidad contra defectos de fabricación con facturación inmediata para deducibilidad fiscal.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded bg-surface-container-lowest shadow-sm flex items-start gap-space-md">
              <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">timer</span>
              </div>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">Atención en Ruta sin Cita</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Llegada directa al taller con diagnóstico de banda de rodamiento al momento por mecánicos especializados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 4 PILARES FUNDAMENTALES */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-widest block mb-space-xs">
            CONFIANZA OPERATIVA COMPROBADA
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">
            ¿Por Qué Confiar en NCGT Neumáticos?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Transportistas independientes, cuadrillas de mantenimiento y conductores de Querétaro nos confían su rodamiento diario basados en 4 pilares inquebrantables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Pilar 1 */}
          <div className="p-space-lg rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">navigation</span>
              </div>
              <span className="font-label-code text-label-code text-outline uppercase block mb-space-xs">PILAR 01</span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase mb-space-xs">
                Ubicación Estratégica
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ubicados directamente a pie de la Carretera Estatal 100 km 13+100. Cero desviaciones innecesarias dentro de la ciudad; entras, montas y continúas tu ruta de transporte.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded">
              <span className="font-label-technical text-label-technical text-on-secondary-fixed block">ACCESO DIRECTO</span>
              <span className="font-body-sm text-body-sm text-outline">Sin semáforos ni restricción de tonelaje</span>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="p-space-lg rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">inventory</span>
              </div>
              <span className="font-label-code text-label-code text-outline uppercase block mb-space-xs">PILAR 02</span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase mb-space-xs">
                Inventario Físico Garantizado
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                No somos intermediarios de catálogo digital. Las medidas comerciales más demandadas (11R22.5, 295/80R22.5, 225/65R17) están en el anaquel listas para salir rodando.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded">
              <span className="font-label-technical text-label-technical text-on-secondary-fixed block">DISPONIBILIDAD IN SITU</span>
              <span className="font-body-sm text-body-sm text-outline">Stock visible y verificado en piso</span>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="p-space-lg rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">rule</span>
              </div>
              <span className="font-label-code text-label-code text-outline uppercase block mb-space-xs">PILAR 03</span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase mb-space-xs">
                Asesoría Técnica Honesta
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                No vendemos la opción más cara, sino la correcta: analizamos capacidad de carga, compuesto de hule según abrasión de asfalto y posición de rodado (direccional, tracción o remolque).
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded">
              <span className="font-label-technical text-label-technical text-on-secondary-fixed block">CRITERIO MECÁNICO</span>
              <span className="font-body-sm text-body-sm text-outline">Diagnóstico milimétrico de piso</span>
            </div>
          </div>

          {/* Pilar 4 */}
          <div className="p-space-lg rounded bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">handshake</span>
              </div>
              <span className="font-label-code text-label-code text-outline uppercase block mb-space-xs">PILAR 04</span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase mb-space-xs">
                Alianzas Oficiales Multimarca
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Distribuidores directos de neumáticos premium y opciones de alto rendimiento costo-beneficio: Continental, Goodyear, Michelin, BFGoodrich y marcas de alta resistencia carretera.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded">
              <span className="font-label-technical text-label-technical text-on-secondary-fixed block">RESPALDO GLOBAL</span>
              <span className="font-body-sm text-body-sm text-outline">Garantía respaldada por fábrica</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPROMISO CON LA REGIÓN DEL BAJÍO */}
      <section className="w-full bg-on-secondary-fixed text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-7 flex flex-col space-y-space-md">
              <div className="inline-flex items-center gap-space-xs text-tertiary-fixed font-label-code text-label-code uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">map</span>
                <span>COBERTURA OPERATIVA E IMPACTO REGIONAL</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary uppercase leading-tight">
                Manteniendo en Marcha el Motor Logístico de Querétaro
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-high">
                Galeras es el punto donde convergen los suministros para los parques aeroespaciales, la industria vinícola y artesanal del semidesierto, y el flujo constante hacia la Sierra. Proveemos rodamiento seguro y soporte a flotas de:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                <div className="p-space-sm rounded bg-on-secondary-fixed-variant">
                  <span className="font-label-technical text-label-technical text-tertiary-fixed block uppercase">COLÓN</span>
                  <span className="font-body-sm text-body-sm text-surface-container">Parques industriales y aeronáuticos</span>
                </div>
                <div className="p-space-sm rounded bg-on-secondary-fixed-variant">
                  <span className="font-label-technical text-label-technical text-tertiary-fixed block uppercase">CADEREYTA</span>
                  <span className="font-body-sm text-body-sm text-surface-container">Transporte de agregados y materiales</span>
                </div>
                <div className="p-space-sm rounded bg-on-secondary-fixed-variant">
                  <span className="font-label-technical text-label-technical text-tertiary-fixed block uppercase">TEQUISQUIAPAN</span>
                  <span className="font-body-sm text-body-sm text-surface-container">Distribución turística y comercial</span>
                </div>
                <div className="p-space-sm rounded bg-on-secondary-fixed-variant">
                  <span className="font-label-technical text-label-technical text-tertiary-fixed block uppercase">EL MARQUÉS</span>
                  <span className="font-body-sm text-body-sm text-surface-container">Centros de trasvase y bodegas secas</span>
                </div>
                <div className="p-space-sm rounded bg-on-secondary-fixed-variant">
                  <span className="font-label-technical text-label-technical text-tertiary-fixed block uppercase">ZONA METRO QRO</span>
                  <span className="font-body-sm text-body-sm text-surface-container">Flotas de reparto última milla</span>
                </div>
                <div className="p-space-sm rounded bg-on-secondary-fixed-variant">
                  <span className="font-label-technical text-label-technical text-tertiary-fixed block uppercase">BERNAL &amp; RUTAS</span>
                  <span className="font-body-sm text-body-sm text-surface-container">Particulares y vehículos utilitarios</span>
                </div>
              </div>
            </div>

            {/* Regional Metric Card & Location Signal */}
            <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-space-lg rounded shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-code text-label-code text-primary uppercase font-bold">Punto Kilométrico</span>
                  <span className="w-3 h-3 rounded-full bg-[#16a34a] animate-pulse"></span>
                </div>
                <div className="text-[44px] leading-tight font-headline-lg text-on-surface mb-space-xs uppercase">
                  KM 13+100
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  Carretera Estatal 100 Querétaro, Galeras, Municipio de Colón. Ubicación visible a pie de carretera con amplio radio de retorno para unidades dobles (Full).
                </p>
                <div className="p-space-sm rounded bg-surface-container-low space-y-space-xs font-body-sm text-body-sm">
                  <div className="flex justify-between items-center text-on-surface">
                    <span className="text-outline">Distancia Aeropuerto QRO:</span>
                    <span className="font-label-technical text-label-technical">8.5 km (~7 mins)</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface">
                    <span className="text-outline">Distancia Entronque Carretera 57:</span>
                    <span className="font-label-technical text-label-technical">14 km (~11 mins)</span>
                  </div>
                  <div className="flex justify-between items-center text-on-surface">
                    <span className="text-outline">Distancia Caseta Chichimequillas:</span>
                    <span className="font-label-technical text-label-technical">19 km (~15 mins)</span>
                  </div>
                </div>
              </div>

              {/* Direct Visit Action */}
              <div className="pt-space-md mt-space-md">
                <a
                  className="w-full bg-primary hover:bg-primary-container text-on-primary py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs font-label-technical text-label-technical tracking-wider uppercase transition-colors"
                  href="https://wa.me/524427140982?text=Hola%20NCGT,%20voy%20pasando%20por%20la%20Carretera%20100%20y%20requiero%20asistencia%20en%20taller"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span>Visítanos en Taller o Contáctanos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
