import React from 'react';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside className="fixed bottom-space-lg right-space-lg z-50 flex items-center group">
      <div className="hidden md:block mr-space-sm bg-on-secondary-fixed text-on-primary font-label-technical text-label-technical py-space-xs px-space-md rounded-lg shadow-lg border border-secondary transition-opacity duration-200 pointer-events-none">
        ¿Tienes tu medida? Escríbenos
      </div>
      <a
        aria-label="Contacto directo por WhatsApp"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-on-secondary-fixed transition-transform hover:scale-105 active:scale-95"
        href="https://wa.me/524427140982"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[32px]">support_agent</span>
      </a>
    </aside>
  );
};
