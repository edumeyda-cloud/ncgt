import React, { useState } from 'react';
import { ScreenId } from '../types.ts';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { path: ScreenId; label: string }[] = [
    { path: 'inicio', label: 'Inicio' },
    { path: 'neumaticos', label: 'Neumáticos' },
    { path: 'servicios', label: 'Servicios' },
    { path: 'nosotros', label: 'Nosotros' },
    { path: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: ScreenId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path, 'none');
    window.location.hash = `#${path}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      {/* Top Highway Ribbon */}
      <div className="w-full bg-on-secondary-fixed text-surface border-b-2 border-tertiary-fixed">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-10 flex items-center justify-between font-label-technical text-label-technical tracking-wide overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-space-sm shrink-0">
            <span className="material-symbols-outlined text-tertiary-fixed text-[16px]">pin_drop</span>
            <span>Carr. Estatal 100 Qro. km 13+100, Galeras, Colón</span>
          </div>
          <div className="hidden md:flex items-center gap-space-lg shrink-0">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-tertiary-fixed text-[16px]">emergency_heat</span>
              <span>Atención Inmediata: (442) 714-0982 / (442) 283-9104</span>
            </div>
            <span className="text-outline">|</span>
            <div className="flex items-center gap-space-xs text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span>Lun-Sáb 8:00 - 19:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center gap-space-md shrink-0 cursor-pointer no-underline"
        >
          <img
            alt="NCGT Neumáticos El Coyote Logo"
            className="h-10 w-auto object-contain rounded-lg shadow-sm"
            src="/logo-ncgt.jpg"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface uppercase leading-none tracking-tight">NCGT</span>
            <span className="font-label-code text-label-code text-primary font-bold uppercase tracking-widest">El Coyote y sus Gemelos</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-full"
          data-active-classes="bg-primary text-on-primary font-semibold shadow-sm rounded-full px-space-md py-space-xs"
        >
          {navLinks.map((link) => {
            const isActive = currentScreen === link.path;
            return (
              <a
                key={link.path}
                data-path={link.path}
                href={`#${link.path}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, link.path)}
                className={
                  isActive
                    ? 'transition-colors bg-primary text-on-primary font-semibold shadow-sm rounded-full px-space-md py-space-xs'
                    : 'text-on-surface-variant font-body-md text-body-md px-space-md py-space-xs rounded-full transition-colors hover:text-on-surface hover:bg-surface-container-high'
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-space-md shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs bg-on-secondary-fixed text-tertiary-fixed hover:bg-primary-container hover:text-on-primary transition-colors px-space-md py-space-xs rounded-lg font-label-technical text-label-technical tracking-wider uppercase"
            href="https://wa.me/524427140982"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Cotizar por WhatsApp</span>
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-on-surface rounded-lg hover:bg-surface-container"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container px-margin-mobile py-space-md shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-space-xs">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.path;
              return (
                <a
                  key={link.path}
                  data-path={link.path}
                  href={`#${link.path}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`px-space-md py-space-sm rounded-lg font-title-md transition-colors ${
                    isActive
                      ? 'bg-primary text-on-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-space-sm mt-space-xs border-t border-surface-container">
              <a
                className="w-full flex items-center justify-center gap-space-xs bg-on-secondary-fixed text-tertiary-fixed py-space-sm px-space-md rounded-lg font-label-technical text-label-technical uppercase"
                href="https://wa.me/524427140982"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Cotizar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
