import React from 'react';
import { ScreenId } from '../types.ts';

interface ServiciosScreenProps {
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

export const ServiciosScreen: React.FC<ServiciosScreenProps> = () => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HEADER & CORE POSITIONING */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-md pb-space-lg w-full">
        <div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl relative overflow-hidden shadow-sm">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl space-y-space-sm">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-high text-primary font-label-code text-label-code uppercase tracking-widest">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span>Unidad de Ingeniería &amp; Operaciones en Ruta</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Servicios de Valor Agregado para Particulares y Flotillas
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Optimizamos el <span className="font-semibold text-primary">Costo por Kilómetro (CPK)</span> y la seguridad de tu operación en Querétaro y la región del Bajío mediante protocolos mecánicos certificados y auditoría constante.
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 gap-space-sm sm:gap-space-md shrink-0 w-full sm:w-auto">
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                <span className="block font-label-code text-label-code text-outline uppercase">Reducción Frecuente</span>
                <span className="font-headline-md text-headline-md text-primary font-bold">-22% CPK</span>
                <span className="block font-body-sm text-body-sm text-on-surface-variant">Ahorro en recambio</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                <span className="block font-label-code text-label-code text-outline uppercase">Tiempo Respuesta</span>
                <span className="font-headline-md text-headline-md text-tertiary font-bold">&lt; 90 min</span>
                <span className="block font-body-sm text-body-sm text-on-surface-variant">Corredor Qro 100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPONENTE DESTACADO - SEMÁFORO DE NEUMÁTICOS */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg w-full">
        <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
          {/* Section Tag Header */}
          <div className="bg-on-secondary-fixed text-surface-container p-space-md lg:p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">traffic</span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-tertiary-fixed tracking-widest uppercase">
                  Servicio Especializado 01 // Diagnóstico
                </span>
                <h2 className="font-headline-md text-headline-md text-on-primary uppercase tracking-tight">
                  Semáforo de Neumáticos NCGT &amp; Diagnóstico Láser
                </h2>
              </div>
            </div>
            <div className="inline-flex items-center gap-space-xs bg-on-secondary-fixed-variant px-space-md py-space-xs rounded-full text-secondary-fixed text-body-sm font-label-technical">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse"></span>
              <span>Calibrador Digital de Profundidad de Surco</span>
            </div>
          </div>

          <div className="p-space-lg lg:p-space-xl space-y-space-xl">
            {/* Editorial context & fleet benefit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8 space-y-space-sm">
                <span className="font-label-technical text-label-technical text-primary uppercase tracking-wider block">
                  Auditoría Técnica de Huella
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Decisiones operativas basadas en milímetros reales, no en suposiciones
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  El desgaste irregular es el principal detonador de sobrecosto en combustible y riesgo de desprendimiento en autopista. Nuestro equipo efectúa un mapeo punto a punto de cada posición de la unidad con profundímetro vernier digital calibrado, emitiendo una matriz cromática instantánea.
                </p>
              </div>
              <div className="lg:col-span-4 bg-surface-container-low p-space-md rounded-lg">
                <span className="font-label-code text-label-code text-on-surface uppercase tracking-wide block mb-space-xs">
                  Beneficio Corporativo
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  Entrega de <strong className="text-on-surface font-title-md">Reporte semafórico por unidad</strong> en PDF listo para control interno de flotas, auditorías de aseguradoras y certificaciones de seguridad ISO/SCT.
                </p>
                <div className="flex items-center gap-space-xs text-primary font-label-technical text-label-technical">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Válido para peritajes de flota</span>
                </div>
              </div>
            </div>

            {/* 3-Phase Traffic Light Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {/* Verde */}
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#16a34a]"></div>
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-4 h-4 rounded-full bg-[#16a34a] shadow-[0_0_12px_rgba(22,163,74,0.6)]"></span>
                      <span className="font-label-code text-label-code uppercase tracking-wider text-[#16a34a] font-bold">
                        Fase Óptima
                      </span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[#16a34a]">&gt; 5.0 mm</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-on-surface mb-space-xs">Apto para Carretera y Lluvia</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    Óptimo estado operativo. Canales de desagüe con capacidad hidrodinámica completa. Presión calibrada en frío. Sin deformaciones en hombro o ceja.
                  </p>
                </div>
                <div className="pt-space-md bg-surface-container-lowest/60 -mx-space-lg -mb-space-lg p-space-md">
                  <span className="font-label-technical text-label-technical text-on-surface uppercase block mb-1">
                    Acción Recomendada:
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Mantener intervalo regular y registrar presión en bitácora.
                  </span>
                </div>
              </div>

              {/* Amarillo */}
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#eab308]"></div>
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-4 h-4 rounded-full bg-[#eab308] shadow-[0_0_12px_rgba(234,179,8,0.6)]"></span>
                      <span className="font-label-code text-label-code uppercase tracking-wider text-[#a16207] font-bold">
                        Alerta Preventiva
                      </span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[#a16207]">3.0 a 4.9 mm</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-on-surface mb-space-xs">Desgaste Medio Operativo</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    Desgaste preventivo detectado. Requiere programar rotación de posición (tracción a arrastre), alineación de eje tándem o previsión de reemplazo planificado.
                  </p>
                </div>
                <div className="pt-space-md bg-surface-container-lowest/60 -mx-space-lg -mb-space-lg p-space-md">
                  <span className="font-label-technical text-label-technical text-on-surface uppercase block mb-1">
                    Acción Recomendada:
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Programar rotación en próximo arribo a patio para evitar paros no planeados.
                  </span>
                </div>
              </div>

              {/* Rojo */}
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#dc2626]"></div>
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-4 h-4 rounded-full bg-[#dc2626] animate-ping"></span>
                      <span className="font-label-code text-label-code uppercase tracking-wider text-[#dc2626] font-bold">
                        Riesgo Crítico
                      </span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-[#dc2626]">&lt; 2.9 mm</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-on-surface mb-space-xs">Retiro Inmediato Obligatorio</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    Riesgo crítico de reventón o hidroplaneo. Casco vulnerable o con daño estructural expuesto. Cintas metálicas susceptibles a fractura por temperatura.
                  </p>
                </div>
                <div className="pt-space-md bg-surface-container-lowest/60 -mx-space-lg -mb-space-lg p-space-md">
                  <span className="font-label-technical text-label-technical text-[#dc2626] uppercase block mb-1">
                    Acción Recomendada:
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Desmonte de urgencia antes de salida a autopista; evaluar envío a renovado.
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Schema / Gauge Infographic */}
            <div className="bg-surface-container rounded-xl p-space-md lg:p-space-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-space-md mb-space-md">
                <div>
                  <span className="font-label-code text-label-code text-outline uppercase block">
                    Escala Gráfica de Seguridad SCT
                  </span>
                  <h5 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                    Lectura de Profundímetro y Profundidad de Rodadura
                  </h5>
                </div>
                <div className="flex items-center gap-space-md text-body-sm font-label-technical">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#16a34a]"></span> Seguro
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#eab308]"></span> Precaución
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#dc2626]"></span> Fuera de Servicio
                  </span>
                </div>
              </div>

              {/* Tread Depth Gauge Visual Bar */}
              <div className="w-full bg-surface-container-highest rounded-lg h-6 p-1 relative flex">
                <div className="h-full bg-[#dc2626] rounded-l" style={{ width: '20%' }} title="Crítico < 3mm"></div>
                <div className="h-full bg-[#eab308]" style={{ width: '30%' }} title="Precaución 3mm - 5mm"></div>
                <div className="h-full bg-[#16a34a] rounded-r" style={{ width: '50%' }} title="Óptimo > 5mm"></div>
                {/* Marker Pin */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[48%] -ml-2 w-4 h-4 bg-on-secondary-fixed rounded-full shadow-lg ring-2 ring-surface flex items-center justify-center pointer-events-none">
                  <div className="w-1.5 h-1.5 bg-tertiary-fixed rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center text-label-code font-label-code text-outline mt-space-xs">
                <span>0 mm (Alambre expuesto)</span>
                <span>2.9 mm (Límite Legal SCT)</span>
                <span>5.0 mm (Rotación Sugerida)</span>
                <span>16+ mm (Neumático Nuevo Eje Tracción)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LOS OTROS 3 SERVICIOS INDUSTRIALES */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg w-full space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-technical text-label-technical text-primary uppercase tracking-widest block">
              Capacidades Operativas en Sitio
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              Ingeniería de Servicio y Soporte Industrial
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Servicios estrictamente de valor agregado para elevar la disponibilidad de tus unidades y asegurar cumplimiento normativo ante clientes y autoridades.
          </p>
        </div>

        {/* 3 Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {/* Servicio 2: Inspección de Flotillas en Patio o Carretera */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="relative h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Heavy truck logistics depot in Queretaro Mexico, mechanical technician with digital torque wrench and pressure gauge inspecting tractor-trailer twin tires in daylight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3xc27aK0Bo6FCFSiyk4cqpZyrswCxRn4vayAUbJ3y8Gi4_6N7LxVSDSS4lKfSYQtdDgMQdwHcE2NLq1fqy8wLW440AE5JVCKppVId4CnV5sxQzQfIS2599YT6_qChSV_biExIyasqfWEhs3mlmG13LUQc78b0jfJbFWJOp55TRvy_NB1e8_NeySe-f0a4dIWLs9xGog46MCRSmJuXS5iLrA-6vGLYIrH9rEBKM0IStEwUgAA2M-1nw"
                alt="Inspección de Flotillas en Patio"
              />
              <div className="absolute top-space-sm left-space-sm bg-on-secondary-fixed text-tertiary-fixed font-label-code text-label-code px-space-sm py-space-xs rounded uppercase">
                Servicio 02 // En Terreno
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Inspección de Flotillas en Patio o Carretera
                </h3>
                <div className="space-y-space-xs">
                  <span className="font-label-technical text-label-technical text-primary uppercase block">
                    Propósito Técnico:
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Auditoría periódica programada de presión de inflado en frío, verificación de torque en tuercas de rin con llave dinamométrica calibrada, detección de desgaste irregular por desalineación y revisión integral de holgura en bujes.
                  </p>
                </div>
              </div>

              {/* A quién ayuda */}
              <div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface font-title-md text-title-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
                  <span>¿A quién ayuda?</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Empresas de logística internacional, transportistas de carga seca y refrigerada, flotillas de reparto última milla y contratistas de construcción pesada en Querétaro, El Marqués y San Juan del Río.
                </p>
              </div>

              <div className="pt-space-xs">
                <a
                  className="inline-flex items-center justify-between w-full py-space-xs text-primary hover:text-on-primary-fixed transition-colors font-label-technical text-label-technical uppercase tracking-wide"
                  href="https://wa.me/524427140982?text=Deseo%20cotizar%20inspeccion%20de%20flotilla%20en%20patio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Solicitar auditoría en patio</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Servicio 3: Recolección Ecológica de Cascos de Desecho */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="relative h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Organized industrial tire recycling and scrap casing sorting warehouse, certified environmental logistics management in Mexico, yellow transport truck"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuY_a6EBBk-m7fMTieMG6P0QeTouZqEqtefWnWLPbf-sTk2fj7hd9lEz7NL5_hXk07Avhq2fKRq2h2adOL5M9yVzVKYD5NdK1I44fOGn6UXVj4ZDSatsvMMt6PNoUEjRZW_kn8RPwbIGGaYx65bzzflICaV6BU0DvkHeUgSpQVw_iVArtgDzAm1LAIpbYXeb3-Y0jgs3z6WEYEvXHCncwQKXuBWfljAfb1wQzZ0z5KiQgCJ3WRBcYSXQ"
                alt="Recolección Ecológica de Cascos"
              />
              <div className="absolute top-space-sm left-space-sm bg-on-secondary-fixed text-tertiary-fixed font-label-code text-label-code px-space-sm py-space-xs rounded uppercase">
                Servicio 03 // Cumplimiento
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Recolección Ecológica de Cascos de Desecho
                </h3>
                <div className="space-y-space-xs">
                  <span className="font-label-technical text-label-technical text-primary uppercase block">
                    Propósito Técnico:
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Retiro formal y trazable de cascos inservibles fuera de norma. Gestión de disposición final y trituración regulada cumpliendo los lineamientos ambientales de SEMARNAT y SEDESU, emitiendo manifiesto oficial de entrega-recepción.
                  </p>
                </div>
              </div>

              {/* A quién ayuda */}
              <div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface font-title-md text-title-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">recycling</span>
                  <span>¿A quién ayuda?</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Talleres mecánicos diésel, parques industriales (Aeropuerto, Bernardo Quintana, PYME), centros de distribución y empresas con patios de maniobra que requieren mantener orden, evitar multas ambientales y liberar espacio muerto.
                </p>
              </div>

              <div className="pt-space-xs">
                <a
                  className="inline-flex items-center justify-between w-full py-space-xs text-primary hover:text-on-primary-fixed transition-colors font-label-technical text-label-technical uppercase tracking-wide"
                  href="https://wa.me/524427140982?text=Solicito%20recoleccion%20ecologica%20de%20neumaticos%20de%20desecho"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Programar recolección de cascos</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>

          {/* Servicio 4: Capacitación Técnica y Operativa */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="relative h-56 w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Technical fleet tire maintenance workshop training session in Queretaro, senior mechanical engineer explaining heavy duty tire bead seating and cold pressure gauge checks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfCZpattL27QRLYOkYbnFe_QsNtcjCKIJaRfPKNRIavU-3RiBiCJCtVbVOPcPNLkaDlx3Fyha12l-DWllAlpSWogOWz96Ld-iZS9LjvhSIiOIKbgKGEPCXMYY6hjsNdHojeB_uRhLF9ERL9cr3OKTek3LTpEQFqADwIEkqTG9ep5K8T1r0daInpg61gkCSnjVXVnO0-qRR2_8LOEcdHaSowsUaEEMru3DV8DDm1qYc7eI0F2eX0-aXvQ"
                alt="Capacitación Técnica y Operativa"
              />
              <div className="absolute top-space-sm left-space-sm bg-on-secondary-fixed text-tertiary-fixed font-label-code text-label-code px-space-sm py-space-xs rounded uppercase">
                Servicio 04 // Formación
              </div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Capacitación Técnica y Operativa (Teórica y Práctica)
                </h3>
                <div className="space-y-space-xs">
                  <span className="font-label-technical text-label-technical text-primary uppercase block">
                    Propósito Técnico:
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Clínicas presenciales para choferes y auxiliares de mantenimiento sobre hábitos de manejo eficiente en sierra/autopista, protocolo de medición de presión en frío vs. caliente, torque correcto en ruta y preservación de la carcasa para renovado.
                  </p>
                </div>
              </div>

              {/* A quién ayuda */}
              <div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface font-title-md text-title-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">school</span>
                  <span>¿A quién ayuda?</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Jefes de taller, gerentes de operaciones logísticas, operadores de tractocamión (quinta rueda, torton, rabón) y conductores de flotillas utilitarias que buscan frenar los vicios de manejo que destruyen los neumáticos prematuramente.
                </p>
              </div>

              <div className="pt-space-xs">
                <a
                  className="inline-flex items-center justify-between w-full py-space-xs text-primary hover:text-on-primary-fixed transition-colors font-label-technical text-label-technical uppercase tracking-wide"
                  href="https://wa.me/524427140982?text=Quiero%20solicitar%20capacitacion%20tecnica%20para%20mis%20operadores"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Agendar curso para mi equipo</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION FOR AUDIT / SERVICE SCHEDULING */}
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl w-full">
        <div className="bg-on-secondary-fixed text-surface rounded-xl p-space-lg lg:p-space-xl shadow-xl relative overflow-hidden">
          {/* Contrast accents */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-32 h-1 bg-tertiary-fixed"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-on-secondary-fixed-variant text-tertiary-fixed font-label-code text-label-code uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">headset_mic</span>
                <span>Mesa de Control y Despacho Operativo</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary uppercase tracking-tight">
                Agenda una revisión semafórica de tu flota o solicita recolección de cascos
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed">
                Coordinamos visitas directas a tu base operativa en Querétaro o programamos la recepción de tus unidades en nuestras bahías sobre Carr. Estatal 100 (km 13+100, Galeras, Colón). Respuestas sin demora comercial.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <div className="flex items-center gap-space-xs text-body-sm font-label-technical text-surface-container-high">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">check_circle</span>
                  <span>Cobertura Colón - Querétaro - San Juan</span>
                </div>
                <div className="flex items-center gap-space-xs text-body-sm font-label-technical text-surface-container-high">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">check_circle</span>
                  <span>Diagnóstico inicial sin costo para flotas &gt; 5 uds.</span>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-4 bg-surface-container-lowest/10 backdrop-blur-sm p-space-lg rounded-xl flex flex-col gap-space-md">
              <div className="space-y-space-xs">
                <span className="font-label-technical text-label-technical text-tertiary-fixed uppercase tracking-wider block">
                  Contacto Inmediato
                </span>
                <span className="font-headline-sm text-headline-sm text-on-primary uppercase block">
                  Ing. Operativo en Turno
                </span>
                <span className="font-body-sm text-body-sm text-surface-container-high">
                  Línea directa para coordinación de auditorías en patio y logística de recolección.
                </span>
              </div>
              <div className="space-y-space-sm pt-space-xs">
                <a
                  className="w-full flex items-center justify-center gap-space-sm bg-[#25D366] hover:bg-[#20ba59] text-white py-space-md px-space-lg rounded-lg font-label-technical text-label-technical uppercase tracking-wider shadow-lg transition-transform active:scale-95"
                  href="https://wa.me/524427140982?text=Hola%20NCGT%20El%20Coyote,%20deseo%20agendar%20una%20revision%20semaforica%20de%20mi%20flota%20o%20servicio%20de%20valor%20agregado."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Contactar por WhatsApp</span>
                </a>
                <a
                  className="w-full flex items-center justify-center gap-space-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container-high py-space-md px-space-lg rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-colors shadow-sm"
                  href="tel:4427140982"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>(442) 714-0982</span>
                </a>
              </div>
              <div className="text-center font-label-code text-label-code text-surface-container">
                Horario: Lunes a Sábado 8:00 - 19:00 hrs
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
