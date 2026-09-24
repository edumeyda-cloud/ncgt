import React from 'react';
import { ScreenId } from '../types.ts';

interface FooterProps {
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, screen: ScreenId) => {
    e.preventDefault();
    const transition = screen === 'inicio' ? 'push_back' : 'push';
    onNavigate(screen, transition);
    window.location.hash = `#${screen}`;
  };

  return (
    <footer className="w-full bg-on-secondary-fixed text-surface-container border-t-4 border-tertiary-fixed mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          {/* Brand info */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="NCGT Neumáticos El Coyote Logo"
                className="h-10 w-10 object-contain rounded-lg shadow-sm"
                src="/logo-ncgt.jpg"
                referrerPolicy="no-referrer"
              />
              <span className="font-headline-md text-headline-md text-on-primary uppercase tracking-tight">
                NCGT Neumáticos
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high">
              Centro logístico y taller especializado en neumáticos para transporte pesado, flotas comerciales y vehículos particulares sobre corredor industrial.
            </p>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-on-secondary-fixed-variant text-tertiary-fixed font-label-code text-label-code uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Servicio Certificado Highway</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-tertiary-fixed uppercase tracking-wider">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-surface-container-high">
              <li>
                <a
                  className="hover:text-on-primary transition-colors flex items-center gap-space-xs"
                  href="#inicio"
                  onClick={(e) => handleFooterLinkClick(e, 'inicio')}
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">chevron_right</span>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-primary transition-colors flex items-center gap-space-xs"
                  href="#neumaticos"
                  onClick={(e) => handleFooterLinkClick(e, 'neumaticos')}
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">chevron_right</span>
                  Neumáticos y Medidas
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-primary transition-colors flex items-center gap-space-xs"
                  href="#servicios"
                  onClick={(e) => handleFooterLinkClick(e, 'servicios')}
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">chevron_right</span>
                  Alineación y Montaje
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-primary transition-colors flex items-center gap-space-xs"
                  href="#nosotros"
                  onClick={(e) => handleFooterLinkClick(e, 'nosotros')}
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">chevron_right</span>
                  Sobre NCGT El Coyote
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-primary transition-colors flex items-center gap-space-xs"
                  href="#contacto"
                  onClick={(e) => handleFooterLinkClick(e, 'contacto')}
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">chevron_right</span>
                  Ubicación y Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Atención Directa */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-tertiary-fixed uppercase tracking-wider">
              Atención Directa
            </h3>
            <div className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">phone_in_talk</span>
                <div>
                  <span className="font-label-technical text-label-technical block text-on-primary">Líneas Directas:</span>
                  (442) 714-0982<br />
                  (442) 283-9104
                </div>
              </div>
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">chat</span>
                <div>
                  <span className="font-label-technical text-label-technical block text-on-primary">WhatsApp Flotas:</span>
                  +52 (442) 714-0982
                </div>
              </div>
            </div>
          </div>

          {/* Ubicación y Horario */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-tertiary-fixed uppercase tracking-wider">
              Ubicación y Horario
            </h3>
            <div className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">location_on</span>
                <span>Carr. Estatal 100 Qro. km 13+100, Galeras, Colón, Querétaro.</span>
              </div>
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0">alarm</span>
                <div>
                  <span className="font-label-technical text-label-technical block text-on-primary">Horario Taller:</span>
                  Lunes a Sábado: 8:00 - 19:00 hrs<br />
                  Domingo: Guardias de emergencia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-md border-t border-secondary flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-container-high">
          <p>© 2024 NCGT Neumáticos El Coyote y sus Gemelos. Todos los derechos reservados.</p>
          <div className="flex items-center gap-space-md font-label-code text-label-code text-tertiary-fixed">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px]">speed</span>
              MONITOREO DE CARRETERA
            </span>
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px]">build_circle</span>
              SOPORTE MECÁNICO PESADO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
