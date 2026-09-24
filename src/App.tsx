import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScreenId, TransitionType, SCREENS } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloating } from './components/WhatsAppFloating.tsx';
import { InicioScreen } from './screens/InicioScreen.tsx';
import { NeumaticosScreen } from './screens/NeumaticosScreen.tsx';
import { ServiciosScreen } from './screens/ServiciosScreen.tsx';
import { ContactoScreen } from './screens/ContactoScreen.tsx';
import { NosotrosScreen } from './screens/NosotrosScreen.tsx';

function getScreenFromHash(): ScreenId {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash in SCREENS) {
    return hash as ScreenId;
  }
  return 'inicio';
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(getScreenFromHash);
  const [transition, setTransition] = useState<TransitionType>('none');

  useEffect(() => {
    const handleHashChange = () => {
      const nextScreen = getScreenFromHash();
      setCurrentScreen((prev) => {
        if (prev !== nextScreen) {
          // If moving to inicio, default to push_back; else push
          setTransition(nextScreen === 'inicio' ? 'push_back' : 'push');
        }
        return nextScreen;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Update document title to match spec exactly
    const screenConfig = SCREENS[currentScreen];
    if (screenConfig) {
      document.title = screenConfig.title;
    }
    // Scroll window to top on screen change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentScreen]);

  const handleNavigate = (screen: ScreenId, nextTransition: TransitionType = 'none') => {
    setTransition(nextTransition);
    setCurrentScreen(screen);
    window.location.hash = `#${screen}`;
  };

  const getAnimationVariants = () => {
    if (transition === 'none') {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      };
    }
    if (transition === 'push_back') {
      return {
        initial: { x: -40, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 40, opacity: 0 },
        transition: { duration: 0.24, ease: 'easeOut' as const },
      };
    }
    // push transition
    return {
      initial: { x: 40, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -40, opacity: 0 },
      transition: { duration: 0.24, ease: 'easeOut' as const },
    };
  };

  const currentVariants = getAnimationVariants();

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Header present on all screens */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Container */}
      <main className="w-full pt-[7.5rem] bg-surface min-h-screen flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={currentVariants.initial}
            animate={currentVariants.animate}
            exit={currentVariants.exit}
            transition={currentVariants.transition}
            className="w-full"
          >
            {currentScreen === 'inicio' && <InicioScreen onNavigate={handleNavigate} />}
            {currentScreen === 'neumaticos' && <NeumaticosScreen onNavigate={handleNavigate} />}
            {currentScreen === 'servicios' && <ServiciosScreen onNavigate={handleNavigate} />}
            {currentScreen === 'contacto' && <ContactoScreen onNavigate={handleNavigate} />}
            {currentScreen === 'nosotros' && <NosotrosScreen onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Action */}
      <WhatsAppFloating />

      {/* Global Footer with exact anchors */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
