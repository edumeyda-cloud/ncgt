export type ScreenId = 'inicio' | 'neumaticos' | 'servicios' | 'nosotros' | 'contacto';

export type TransitionType = 'none' | 'push' | 'push_back';

export interface ScreenConfig {
  id: ScreenId;
  title: string;
  navLabel: string;
}

export const SCREENS: Record<ScreenId, ScreenConfig> = {
  inicio: {
    id: 'inicio',
    title: 'Inicio | NCGT Neumáticos El Coyote',
    navLabel: 'Inicio',
  },
  neumaticos: {
    id: 'neumaticos',
    title: 'Neumáticos | NCGT Catálogo y Marcas',
    navLabel: 'Neumáticos',
  },
  servicios: {
    id: 'servicios',
    title: 'Servicios | Semáforeo e Inspección NCGT',
    navLabel: 'Servicios',
  },
  nosotros: {
    id: 'nosotros',
    title: 'Nosotros | Trayectoria y Equipo NCGT',
    navLabel: 'Nosotros',
  },
  contacto: {
    id: 'contacto',
    title: 'Contacto | Teléfonos, WhatsApp y Ubicación NCGT',
    navLabel: 'Contacto',
  },
};
