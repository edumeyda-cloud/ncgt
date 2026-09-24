import React from 'react';
import { ScreenId } from '../types.ts';

interface ContactoScreenProps {
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

export const ContactoScreen: React.FC<ContactoScreenProps> = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-md pb-space-lg w-full">
        {/* Header */}
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-xs rounded bg-surface-container text-primary font-label-technical text-label-technical uppercase tracking-widest shadow-sm">
            <span className="material-symbols-outlined text-[16px]">cell_tower</span>
            <span>Conexión Inmediata Carretera 100</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
            Canales de Contacto Directo
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Sin formularios ni esperas por correo. Te atendemos de inmediato por llamada o WhatsApp directamente con los mecánicos y especialistas en patio.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
          {/* Card 1: Línea Taller Central */}
          <div className="bg-surface-container-lowest p-space-md rounded shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div className="space-y-space-sm mb-space-md">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  phone_in_talk
                </span>
              </div>
              <span className="font-label-technical text-label-technical text-primary uppercase block">
                Línea Taller Central
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">(442) 714-0982</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Llamada prioritaria a báscula y mostradores de servicio rápido.
              </p>
            </div>
            <a
              className="w-full bg-primary text-on-primary font-label-technical text-label-technical uppercase tracking-wider py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs shadow-sm active:scale-95 transition-transform"
              href="tel:4427140982"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Llamar Ahora</span>
            </a>
          </div>

          {/* Card 2: Emergencias Carretera */}
          <div className="bg-surface-container-lowest p-space-md rounded shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div className="space-y-space-sm mb-space-md">
              <div className="w-12 h-12 rounded bg-error-container flex items-center justify-center text-error">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  fmd_bad
                </span>
              </div>
              <span className="font-label-technical text-label-technical text-error uppercase block">
                Emergencias Carretera
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">(442) 283-9104</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Línea de auxilio para ponchaduras y rescate a pie de ruta.
              </p>
            </div>
            <a
              className="w-full bg-error text-on-error font-label-technical text-label-technical uppercase tracking-wider py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs shadow-sm active:scale-95 transition-transform"
              href="tel:4422839104"
            >
              <span className="material-symbols-outlined text-[18px]">emergency</span>
              <span>Marcar Auxilio</span>
            </a>
          </div>

          {/* Card 3: Cotizador WhatsApp */}
          <div className="bg-surface-container-lowest p-space-md rounded shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div className="space-y-space-sm mb-space-md">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  add_photo_alternate
                </span>
              </div>
              <span className="font-label-technical text-label-technical text-primary-container uppercase block">
                Cotizador WhatsApp
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Envía Foto o Medida</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tómale foto al costado de tu llanta o dinos el rodado para stock al momento.
              </p>
            </div>
            <a
              className="w-full bg-on-secondary-fixed text-tertiary-fixed font-label-technical text-label-technical uppercase tracking-wider py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs shadow-sm active:scale-95 transition-transform"
              href="https://wa.me/524427140982?text=Hola,%20necesito%20cotizar%20esta%20medida%20de%20neum%C3%A1tico:"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Enviar WhatsApp</span>
            </a>
          </div>

          {/* Card 4: Comunidad Oficial */}
          <div className="bg-surface-container-lowest p-space-md rounded shadow-md flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div className="space-y-space-sm mb-space-md">
              <div className="w-12 h-12 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[28px]">hub</span>
              </div>
              <span className="font-label-technical text-label-technical text-secondary uppercase block">
                Comunidad Oficial
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Página de Facebook</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                NCGT Neumáticos El Coyote y sus Gemelos Tire. Noticias y promociones.
              </p>
            </div>
            <a
              className="w-full bg-secondary-container text-on-secondary-container font-label-technical text-label-technical uppercase tracking-wider py-space-sm px-space-md rounded flex items-center justify-center gap-space-xs shadow-sm active:scale-95 transition-transform"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
              <span>Visitar Facebook</span>
            </a>
          </div>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Address */}
            <div className="bg-surface-container-lowest p-space-lg rounded shadow-md">
              <div className="flex items-center gap-space-sm mb-space-md">
                <span className="material-symbols-outlined text-primary text-[28px]">pin_drop</span>
                <div>
                  <span className="font-label-code text-label-code text-outline uppercase tracking-widest block">
                    Ubicación Geo-Referenciada
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                    Dirección de Planta y Patio
                  </h2>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded mb-space-md">
                <span className="font-label-technical text-label-technical text-primary-fixed-variant uppercase block mb-1">
                  Ruta Estratégica:
                </span>
                <p className="font-title-lg text-title-lg text-on-surface font-bold leading-snug">
                  Carretera Estatal 100 Querétaro - Peña de Bernal km 13+100, Galeras, C.P. 76295, Colón, Qro., México.
                </p>
              </div>

              {/* Foto Real de la Fachada */}
              <div className="rounded-lg overflow-hidden mb-space-md border border-surface-container">
                <img
                  alt="Fachada real NCGT Neumáticos El Coyote en Carretera Estatal 100"
                  className="w-full h-48 sm:h-56 object-cover"
                  src="/fachada-ncgt.jpg"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-surface-container-low px-space-sm py-1.5 flex items-center justify-between text-body-sm font-label-code text-on-surface-variant">
                  <span>VISTA DE FACHADA Y PATIO</span>
                  <span className="text-primary font-semibold">KM 13+100 GALERAS, COLÓN</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="bg-surface-container p-space-sm rounded">
                  <span className="font-label-code text-label-code text-secondary uppercase block mb-1">
                    Entronque San Fandila
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    A escasos 3 minutos del cruce al Parque Aeroespacial de Querétaro.
                  </p>
                </div>
                <div className="bg-surface-container p-space-sm rounded">
                  <span className="font-label-code text-label-code text-secondary uppercase block mb-1">
                    Acotamiento Pesado
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Carril amplio para ingreso directo de tractocamiones con doble articulado.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-surface-container-lowest p-space-lg rounded shadow-md">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary text-[26px]">alarm</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                    Horarios de Patio y Báscula
                  </h3>
                </div>
                <span className="font-label-code text-label-code px-space-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded uppercase">
                  Operación Activa
                </span>
              </div>
              <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface">
                <div className="flex items-center justify-between py-space-xs bg-surface-container-low px-space-sm rounded">
                  <span className="font-title-md text-title-md">Lunes a Viernes</span>
                  <span className="font-label-code text-label-code text-primary font-bold">
                    08:00 hrs – 19:00 hrs (Continuo)
                  </span>
                </div>
                <div className="flex items-center justify-between py-space-xs bg-surface-container-low px-space-sm rounded">
                  <span className="font-title-md text-title-md">Sábados</span>
                  <span className="font-label-code text-label-code text-primary font-bold">
                    08:00 hrs – 17:00 hrs
                  </span>
                </div>
                <div className="flex items-center justify-between py-space-xs bg-surface-container-low px-space-sm rounded">
                  <span className="font-title-md text-title-md">Domingos</span>
                  <span className="font-label-code text-label-code text-error font-bold">
                    Guardia para Flotas Convenidas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-surface-container-lowest p-space-sm rounded shadow-md h-full flex flex-col">
              <div className="flex items-center justify-between p-space-xs mb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
                  <span className="font-label-code text-label-code text-on-surface font-bold uppercase tracking-wider">
                    Monitor Vía Satélite
                  </span>
                </div>
                <span className="font-label-code text-label-code text-outline">KM 13+100 • COLÓN</span>
              </div>
              <div className="relative w-full flex-1 min-h-[360px] rounded overflow-hidden shadow-inner bg-surface-container">
                <iframe
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-100.1700%2C20.6200%2C-100.0800%2C20.6900&amp;layer=mapnik&amp;marker=20.6550%2C-100.1250"
                  title="Ubicación NCGT Neumáticos El Coyote"
                ></iframe>
                <div className="absolute top-space-sm left-space-sm bg-on-secondary-fixed text-on-primary px-space-sm py-space-xs rounded shadow-lg pointer-events-none flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-ping"></span>
                  <span className="font-label-code text-label-code tracking-widest uppercase">
                    NCGT Taller Central
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-surface-container-lowest/90 backdrop-blur-sm p-space-xs rounded shadow text-on-surface">
                  <a
                    className="font-label-code text-label-code text-primary uppercase flex items-center gap-1 hover:underline"
                    href="https://maps.google.com/?q=20.6550,-100.1250"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Abrir en Google Maps</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
              <div className="p-space-sm mt-space-xs bg-surface-container-low rounded flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[24px] shrink-0">local_shipping</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  Entrada libre de peaje y sin restricciones de radio de giro para tráileres sencillos o fulles sobre la Estatal 100.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Assistance strip */}
        <div className="bg-on-secondary-fixed text-on-primary p-space-lg rounded shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 rounded bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[32px]">flash_on</span>
            </div>
            <div>
              <span className="font-label-code text-label-code text-tertiary-fixed uppercase tracking-wider block">
                Respuesta Instantánea
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary uppercase leading-tight">
                ¿Estás en carretera y requieres neumático urgente?
              </h3>
              <p className="font-body-sm text-body-sm text-surface-container-high">
                Los técnicos en turno reciben tu WhatsApp o llamada al instante.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm w-full md:w-auto">
            <a
              className="flex-1 md:flex-none text-center bg-primary text-on-primary font-label-technical text-label-technical uppercase tracking-wider py-space-sm px-space-md rounded shadow transition-transform active:scale-95"
              href="tel:4427140982"
            >
              Marcar a Cabina
            </a>
            <a
              className="flex-1 md:flex-none text-center bg-tertiary-fixed text-on-tertiary-fixed font-label-technical text-label-technical uppercase tracking-wider py-space-sm px-space-md rounded shadow transition-transform active:scale-95"
              href="https://wa.me/524427140982"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mandar WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
