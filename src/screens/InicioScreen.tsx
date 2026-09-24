import React from 'react';
import { ScreenId } from '../types.ts';

interface InicioScreenProps {
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

export const InicioScreen: React.FC<InicioScreenProps> = ({ onNavigate }) => {
  const handleCatalogPush = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('neumaticos', 'push');
    window.location.hash = '#neumaticos';
  };

  const handleServicesPush = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('servicios', 'push');
    window.location.hash = '#servicios';
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO PRINCIPAL CON FOTOGRAFÍA REAL DE TALLER */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          {/* Highway Coordinate Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md font-label-code text-label-code text-on-surface-variant uppercase tracking-widest">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-sm py-space-xs rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>ESTACIÓN LOGÍSTICA CARRETERA ESTATAL 100 • KM 13+100</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-md text-secondary">
              <span>LAT 20.6510° N</span>
              <span>•</span>
              <span>LON 100.1742° W</span>
              <span>•</span>
              <span className="text-tertiary-fixed-dim font-bold">ZONA AEROPUERTO - COLÓN</span>
            </div>
          </div>

          {/* Hero Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 space-y-space-md">
              <div className="space-y-space-xs">
                <span className="inline-block px-space-sm py-space-xs rounded bg-on-secondary-fixed text-tertiary-fixed font-label-technical text-label-technical uppercase tracking-wider">
                  Centro Multimarca Especializado
                </span>
                <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                  Venta de Neumáticos y Servicio Especializado a Flotillas en Querétaro
                </h1>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Ubicados estratégicamente sobre Carretera Estatal 100 km 13+100 (Galeras, Colón). Stock inmediato para particulares, transporte de carga y maquinaria pesada con atención mecánica directa en patio.
              </p>

              {/* Badges de Confianza */}
              <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[22px] mb-1">inventory_2</span>
                  <span className="font-label-technical text-label-technical block text-on-surface">Inventario Multimarca</span>
                  <span className="font-body-sm text-body-sm text-secondary">En almacén y piso</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[22px] mb-1">build_circle</span>
                  <span className="font-label-technical text-label-technical block text-on-surface">Montaje &amp; Balanceo</span>
                  <span className="font-body-sm text-body-sm text-secondary">Rápidas bahías de taller</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[22px] mb-1">local_shipping</span>
                  <span className="font-label-technical text-label-technical block text-on-surface">Atención Flotillas</span>
                  <span className="font-body-sm text-body-sm text-secondary">Crédito y respuesta vial</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-sm">
                <a
                  className="inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary hover:bg-primary-container px-space-lg py-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider shadow-md transition-all"
                  href="https://wa.me/524427140982?text=Hola%20NCGT%20Neum%C3%A1ticos,%20deseo%20cotizar%20medidas%20y%20disponibilidad"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>📲 Cotizar por WhatsApp</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-space-xs bg-on-secondary-fixed text-surface hover:bg-surface-container-highest hover:text-on-surface px-space-lg py-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider shadow-sm transition-all"
                  href="tel:4427140982"
                >
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">call</span>
                  <span>📞 Llamar a Taller: (442) 714-0982</span>
                </a>
              </div>
              <div className="flex items-center gap-space-sm text-body-sm font-body-sm text-secondary pt-space-xs">
                <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                <span>Ruta directa hacia Peña de Bernal y Parque Industrial Aeropuerto Querétaro.</span>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-on-secondary-fixed">
                <img
                  alt="Instalaciones NCGT Neumáticos El Coyote en Carretera Estatal 100 Colón Querétaro"
                  className="w-full h-[400px] lg:h-[460px] object-cover"
                  src="/fachada-ncgt.jpg"
                  referrerPolicy="no-referrer"
                />
                {/* Live Bay Telemetry Tag Overlay */}
                <div className="absolute bottom-space-md left-space-md right-space-md bg-on-secondary-fixed/90 backdrop-blur-md text-surface p-space-sm rounded-lg flex flex-wrap items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
                    <div>
                      <span className="font-label-technical text-label-technical block text-surface">Bahías de Alto Calibre Activas</span>
                      <span className="font-body-sm text-body-sm text-secondary-fixed-dim">Tractocamiones, Tolvas y Pick-ups</span>
                    </div>
                  </div>
                  <div className="font-label-code text-label-code text-tertiary-fixed">
                    PISO: GALERAS KM 13+100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESUMEN VISUAL DE LAS 5 CATEGORÍAS DE VEHÍCULO */}
      <section className="w-full py-space-xl bg-surface" id="neumaticos-teaser">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-widest">
                Segmentos de Rodamiento
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                Neumáticos por Tipo de Vehículo
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Desde automóviles diarios hasta maquinaria extrapesada fuera de carretera. Selección de carcasas premium y de alta durabilidad disponibles en stock.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-space-xs text-primary font-label-technical text-label-technical uppercase tracking-wider hover:text-primary-container transition-colors shrink-0 cursor-pointer"
              href="#neumaticos"
              onClick={handleCatalogPush}
            >
              <span>Explorar Catálogo Completo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Categories Grid: 5 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
            {/* 1. Coche / Sedán & Hatchback */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-code text-label-code bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-semibold">R13 - R18</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Coche &amp; Sedán</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conducción suave, bajo consumo de combustible y frenado seguro en lluvia y carretera seca.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className="inline-flex items-center gap-1 font-label-technical text-label-technical text-primary hover:text-on-secondary-fixed transition-colors cursor-pointer"
                  href="#neumaticos"
                  onClick={handleCatalogPush}
                >
                  <span>Ver Medidas y Marcas</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 2. Camioneta / SUV & Pick-up */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M3 13h18l-2-6H5z"></path>
                    <path d="M3 13v4a1 1 0 0 0 1 1h2"></path>
                    <path d="M18 18h2a1 1 0 0 0 1-1v-4"></path>
                    <circle cx="7.5" cy="18.5" r="2.5"></circle>
                    <circle cx="16.5" cy="18.5" r="2.5"></circle>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-code text-label-code bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-semibold">A/T • H/T • M/T</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Camioneta &amp; SUV</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Refuerzo lateral contra baches, tracción todoterreno y soporte para cargas de trabajo rudo.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className="inline-flex items-center gap-1 font-label-technical text-label-technical text-primary hover:text-on-secondary-fixed transition-colors cursor-pointer"
                  href="#neumaticos"
                  onClick={handleCatalogPush}
                >
                  <span>Ver Medidas y Marcas</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 3. Camión / Carga Pesada y Tractocamión */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-tertiary-fixed text-on-tertiary-fixed font-label-code text-label-code px-2 py-0.5 font-bold uppercase">
                Top Ventas
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect height="13" width="15" x="1" y="3"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-code text-label-code bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-semibold">22.5 • 24.5 • TBR</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Carga Pesada &amp; Tracto</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Direccionales, tracción y remolque. Alto kilometraje y cascos con capacidad de renovado.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className="inline-flex items-center gap-1 font-label-technical text-label-technical text-primary hover:text-on-secondary-fixed transition-colors cursor-pointer"
                  href="#neumaticos"
                  onClick={handleCatalogPush}
                >
                  <span>Ver Medidas y Marcas</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 4. Agrícola / Tractores y Remolques */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="7" cy="15" r="5"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                    <path d="M7 10h5l3 3h3"></path>
                    <path d="M12 10V5h-3"></path>
                  </svg>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-code text-label-code bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-semibold">R1 • R2 • Campo</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Agrícola &amp; Siembra</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Llantas tractor con autolimpieza de huella, menor compactación de tierra y alta tracción.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className="inline-flex items-center gap-1 font-label-technical text-label-technical text-primary hover:text-on-secondary-fixed transition-colors cursor-pointer"
                  href="#neumaticos"
                  onClick={handleCatalogPush}
                >
                  <span>Ver Medidas y Marcas</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* 5. Maquinaria Pesada / OTR e Industrial */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-space-md text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect height="8" rx="1" width="20" x="2" y="6"></rect>
                    <path d="M6 18h12"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="18" r="3"></circle>
                    <path d="M12 6V2"></path>
                  </svg>
                </div>
                <div className="space-y-space-xs">
                  <span className="font-label-code text-label-code bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-semibold">OTR • IND-4 • L3/E3</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">OTR &amp; Industrial</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Retroexcavadoras, cargadores frontales y montacargas. Compuestos contra cortes de roca.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className="inline-flex items-center gap-1 font-label-technical text-label-technical text-primary hover:text-on-secondary-fixed transition-colors cursor-pointer"
                  href="#neumaticos"
                  onClick={handleCatalogPush}
                >
                  <span>Ver Medidas y Marcas</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISTA PREVIA CORTA DE LOS 4 SERVICIOS DE VALOR AGREGADO */}
      <section className="w-full py-space-xl bg-surface-container-low" id="servicios-teaser">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-widest">
                Control de Costo por Kilómetro
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                Servicios Integrales para Operación Continua
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                No solo suministramos llantas; protegemos la rentabilidad y seguridad de tu flota con diagnósticos precisos y protocolos de prevención activa.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded-lg shadow-sm text-on-surface font-label-technical text-label-technical uppercase tracking-wider hover:bg-on-secondary-fixed hover:text-surface transition-all shrink-0 cursor-pointer"
              href="#servicios"
              onClick={handleServicesPush}
            >
              <span>Conoce los 4 servicios integrales para flotillas →</span>
            </a>
          </div>

          {/* 4 Compact Technical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* 1. Semáforo de Neumáticos */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">traffic</span>
                </div>
                <div className="flex items-center gap-1.5 px-space-xs py-1 rounded bg-surface-container">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Semáforo de Desgaste</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Clasificación milimétrica de banda de rodadura (Verde &gt;6mm, Amarillo 3-5.9mm, Rojo &lt;3mm) para planeación programada de recambios sin paradas de sorpresa.
              </p>
              <div className="pt-space-xs font-label-code text-label-code text-secondary font-semibold">
                TOLERANCIA DE CARGA: NOM-068
              </div>
            </div>

            {/* 2. Inspección de Flotillas en Patio o Carretera */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">fact_check</span>
                </div>
                <span className="font-label-code text-label-code bg-secondary-fixed text-on-secondary-fixed px-space-xs py-0.5 rounded uppercase font-bold">In Situ</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Inspección de Flotillas</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Monitoreo en tus propios patios logísticos o en nuestro centro sobre la Estatal 100: presión PSI en frío, torque de birlos y análisis de desgaste irregular.
              </p>
              <div className="pt-space-xs font-label-code text-label-code text-secondary font-semibold">
                REPORTE DIGITAL DE EJES
              </div>
            </div>

            {/* 3. Recolección Ecológica de Neumáticos de Desecho */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">recycling</span>
                </div>
                <span className="font-label-code text-label-code bg-emerald-100 text-emerald-800 px-space-xs py-0.5 rounded uppercase font-bold">Norma Verde</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Recolección Ecológica</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Retiro y disposición certificada de cascos inservibles para empresas responsables. Entrega de manifiesto ambiental para auditorías corporativas.
              </p>
              <div className="pt-space-xs font-label-code text-label-code text-secondary font-semibold">
                DISPOSICIÓN REGULADA SEDESU
              </div>
            </div>

            {/* 4. Capacitación Técnica y Rendimiento de Llantas */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">model_training</span>
                </div>
                <span className="font-label-code text-label-code bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-bold uppercase">CPK Alto</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Capacitación y Rendimiento</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Charlas a operadores y jefes de taller sobre rotación adecuada, cálculo de costo por kilómetro y cuidados críticos de presión en rutas con carga pesada.
              </p>
              <div className="pt-space-xs font-label-code text-label-code text-secondary font-semibold">
                MAXIMIZA VIDA ÚTIL 30%+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: UBICACIÓN ESTRATÉGICA EN CARRETERA */}
      <section className="w-full py-space-xl bg-surface" id="contacto-section">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Technical Location Details */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="space-y-space-xs">
                <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-widest">
                  Conexión Vial Querétaro
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Punto Estratégico en Carretera Estatal 100
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Parada obligada y de acceso expedito con patio de maniobras para tractocamiones con doble articulado (fulles) y unidades de pasajeros.
                </p>
              </div>

              {/* Location Spec Box */}
              <div className="bg-surface-container p-space-md rounded-xl space-y-space-sm">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">pin_drop</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block">Dirección Operativa:</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Carretera Estatal 100 Qro. km 13+100, Galeras, Colón, Qro. (Rumbo a Peña de Bernal / Aeropuerto Qro.)
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs pt-space-xs">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">schedule</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block">Horario de Atención en Taller:</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Lunes a Sábado: 8:00 AM a 7:00 PM<br />
                      Atención telefónica de emergencia en ruta.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs pt-space-xs">
                  <span className="material-symbols-outlined text-primary text-[24px] shrink-0">alt_route</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface block">Facilidades de Acceso:</span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Bahía de frenado directo, rampa para desmonte de ruedas pesadas y estacionamiento seguro.
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Shortcuts */}
              <div className="flex flex-wrap gap-space-xs">
                <a
                  className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-technical text-label-technical uppercase tracking-wider text-on-surface hover:bg-primary hover:text-on-primary transition-colors"
                  href="https://maps.google.com/?q=Carretera+Estatal+100+km+13+Galeras+Colon+Queretaro"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">near_me</span>
                  <span>Abrir en Google Maps</span>
                </a>
                <a
                  className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-xs rounded-lg font-label-technical text-label-technical uppercase tracking-wider text-on-surface hover:bg-on-secondary-fixed hover:text-surface transition-colors"
                  href="tel:4422839104"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Línea 2: (442) 283-9104</span>
                </a>
              </div>
            </div>

            {/* Visual Map Component */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[380px] lg:h-[420px] rounded-xl overflow-hidden shadow-md">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-location="Carretera Estatal 100 km 13 Galeras Colón Querétaro"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVXYap62Za_8uGZjcYnkA-P5TtbBqYPh4ABqW26xMSKmL7F0CxEoyMV6Vdn2XeBQSB99PlDXaIb_jC4uHU5YQAMndviHiBzN31dIfOiDQ7ZL9lOT9LZ02oC_0USK1Cq84ckaPXfx7an6sGgGfbgoFDngbEqQygOG6JEwRDAZCtqDFw5p7s0QKejfpE8shKxcRlHhdaG-7yfLDbWqKs8p3aXNBtYfBlCeMXhQG-3GU9RWXpE0Lj4z45gQ')`,
                  }}
                ></div>
                {/* Map floating marker badge */}
                <div className="absolute top-space-md left-space-md bg-on-secondary-fixed/95 backdrop-blur-md text-surface p-space-sm rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">storefront</span>
                    <span className="font-label-technical text-label-technical uppercase text-on-primary">NCGT El Coyote</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-surface-container-high">
                    km 13+100 Colón, a minutos de la entrada a Galeras y Parque Aeroespacial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CIERRE CONVERSACIONAL RÁPIDO */}
      <section className="w-full py-space-xl bg-on-secondary-fixed text-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="bg-surface-container-lowest/10 backdrop-blur-sm p-space-lg lg:p-space-xl rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="space-y-space-xs max-w-2xl text-center lg:text-left">
              <span className="font-label-code text-label-code text-tertiary-fixed uppercase font-bold tracking-widest">
                Respuesta y Montaje Inmediato
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary uppercase tracking-tight">
                ¿Requieres medida urgente o cotización de flotilla?
              </h2>
              <p className="font-body-md text-body-md text-surface-container-high">
                Dinos el rodado que necesitas (ej. 295/80R22.5, 205/55R16 o medidas agrícolas) y te confirmamos disponibilidad de cascos, precios mayoristas y tiempo de montaje en taller.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-[#25D366] text-white hover:opacity-95 px-space-lg py-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider shadow-lg transition-all"
                href="https://wa.me/524427140982?text=Hola,%20requiero%20cotizaci%C3%B3n%20urgente%20de%20neum%C3%A1ticos."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Mensaje Directo WhatsApp</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-on-surface hover:bg-surface-container-high px-space-lg py-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider shadow-md transition-all"
                href="tel:4427140982"
              >
                <span className="material-symbols-outlined text-primary text-[22px]">phone_in_talk</span>
                <span>(442) 714-0982</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
