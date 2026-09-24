import React, { useState } from 'react';
import { ScreenId } from '../types.ts';

interface NeumaticosScreenProps {
  onNavigate: (screen: ScreenId, transition?: 'none' | 'push' | 'push_back') => void;
}

type CategoryType = 'todos' | 'sedan' | 'suv' | 'camion' | 'agricola';

interface TireProduct {
  id: string;
  category: 'sedan' | 'suv' | 'camion' | 'agricola';
  badge: string;
  badgeType: 'primary' | 'secondary' | 'tertiary';
  stock: string;
  image: string;
  imageAlt: string;
  bannerTag: string;
  brands: string;
  plyRating: string;
  title: string;
  description: string;
  specLabel: string;
  specValue: string;
  quoteParam: string;
}

const TIRE_PRODUCTS: TireProduct[] = [
  {
    id: '11r22.5',
    category: 'camion',
    badge: 'Carga Pesada 18-Wheel',
    badgeType: 'primary',
    stock: 'Stock Inmediato',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAByIEN3E56qvpsqjvU6xH3n58Pr8VxPquyzuhXfs_NqeOKfOomWMuAzThi9hXNEV57jt_7FeVFyeUOy39x5MStakIaw3K752WOGWB1oePVuOR3L49o3xWaejdpUTFhHEr7SyzeZsS29NoktvFkfK5K09wmctBBvJcop6Q-2ytoik3KtKfOH5bXzHlY0EM_iey3mQoHYVkzGVB4nMUgToanL4Sbv9Re7VISVl02mInpWlBUP6hpJIXtIg',
    imageAlt: 'Commercial heavy duty truck steer tire 11R22.5 deep tread pattern studio shot',
    bannerTag: 'LINEA CARRETERA',
    brands: 'Goodyear / Continental',
    plyRating: '16 Capas (148/145L)',
    title: '11R22.5 Tracción & Toda Posición',
    description: 'Compuesto antidesgaste para asfalto de alta temperatura. Diseñada para trailer, tractocamión y ejes de arrastre intensivo.',
    specLabel: 'Aplicación',
    specValue: 'Direccional / Motriz',
    quoteParam: 'Cotizar medida 11R22.5',
  },
  {
    id: '295-75r22.5',
    category: 'camion',
    badge: 'Flotilla / Remolque',
    badgeType: 'primary',
    stock: 'Stock Inmediato',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC547ZjBwrqm89MLMWah2klXmSs2ysVkXiVWhH4Aw3fCSPRHqaqjzjcUCGxbqQ8fxI9OihP6YsnqlCmwfj58UKtMYZDK2VzH1xH_cJN8qlYBX3N8QkZoNNCZ83TLpZc96SiNqKptRRl-Ea55p9ncMBONhroieFc6D5uHH7HXlKOVpGClowGo1KdwzMRQJdXJGRQmW7CN4_XQagvjwZP_-kuuoQzNE8785NLp5_4x8YP1FuLqWazk9Gzqw',
    imageAlt: 'Commercial highway fleet tire 295/75R22.5 for trailers and haulers',
    bannerTag: 'ALTO KILOMETRAJE',
    brands: 'Firestone / Racelone',
    plyRating: '14 Pr (144/141M)',
    title: '295/75R22.5 Baja Resistencia',
    description: 'Optimización de consumo de combustible en tramos rectos de autopista. Excelente capacidad de renovado.',
    specLabel: 'Aplicación',
    specValue: 'Eje Libre / Arrastre',
    quoteParam: 'Cotizar medida 295/75R22.5',
  },
  {
    id: '205-55r16',
    category: 'sedan',
    badge: 'Sedán & Compacto',
    badgeType: 'secondary',
    stock: 'Stock Inmediato',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiJA8zQuCZaLLZolCchaGsvI5dIEkrc9BDb9KHBjmPMxLC9isIJk1_pK-wpXxGOPhBU26U2cG-aWdbxlDrq3Rmg-DDsGgY5GqwrdwOnFcijb4NrX9azN0cyun-MLLocRPdf0W6WQlEKvgRvY05zXu0_9QHuM0Rq1wgen6jbLTJFjpNG77EgB5X7CF9sHtuD7fw4kKhP3U9Jkn_JDngbG0qa9MoUfDGQFyUCC1Z72R8I8bQScXui1vvDA',
    imageAlt: 'Modern passenger car radial tire 205/55R16 asymmetric tread sports grip',
    bannerTag: 'ALTA SEGURIDAD',
    brands: 'Yokohama / Hankook',
    plyRating: '91V Radial',
    title: '205/55R16 Asimétrica Touring',
    description: 'Ranuras circunferenciales cuádruples para evacuación pluvial extrema y marcha silenciosa en ciudad y tramo carretero.',
    specLabel: 'Rango Vel.',
    specValue: 'V (Hasta 240 km/h)',
    quoteParam: 'Cotizar medida 205/55R16',
  },
  {
    id: '265-70r17',
    category: 'suv',
    badge: 'Pickup / 4x4 / All-Terrain',
    badgeType: 'secondary',
    stock: 'Stock Inmediato',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuStvISlpmcsyAovXcjgpMZSto8YCqQqJgHHhwIeRyJedDUcWjpkj-AAuZPc3KxUfE_6mV7SpN9IfC7rne1x-KpgP9J6tHgCuuOr9-7C4kN1FW1q3fU95bR8hEnqkjdPo0jI0ddVNMLJI9Oampy0T3Ammx0-dot7V6l5o0oQNDOVVANyK73TeCcHgByZQ35dZwlpKZMJkvrJl088LqECEOyomeup77ZP4w7ess6BbBFwOkgy2C_EEOxA',
    imageAlt: 'Rugged all terrain light truck tire 265/70R17 with aggressive side lugs',
    bannerTag: 'TODO TERRENO',
    brands: 'Continental / Sumitomo',
    plyRating: '115T Reforzada',
    title: '265/70R17 A/T Robusta',
    description: 'Hombros reforzados contra pinchazos por piedra y grava. Resistencia superior para terracería y carga ligera.',
    specLabel: 'Tracción',
    specValue: 'Mixta (60% Pav / 40% Terr)',
    quoteParam: 'Cotizar medida 265/70R17',
  },
  {
    id: '12r22.5',
    category: 'camion',
    badge: 'Torthon / Rabón / Urbano',
    badgeType: 'primary',
    stock: 'Stock Inmediato',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXHtcO-IktL214WJB9Q01uWP4Bdpc2SI99rJDGqPXSLNyL2wW9uxfJIRm0U_WISNNQDjeLw3yt3_crNW2-sAPUGbtw8-pU8s70yHamdMWLSQJ2ZcCzKHEcZSkyXrUOicPi6jRRRbztFN2GfM6UJD221pwRFFO87dWefNCw-kf3Rwom71S55MV2Z143aJ5rIOxHfVaQc_ZBtLPWK1dlEGIQO4tZf38Y1ZY0W-2F_CDp5ahOV6nyNHXaaA',
    imageAlt: 'Heavy truck regional transport tire 12R22.5 high load capacity',
    bannerTag: 'CARGA SEVERA',
    brands: 'Eudemon / Valiant',
    plyRating: '18 PR Heavy Load',
    title: '12R22.5 Tracción Agresiva',
    description: 'Bloques profundos de agarre para pendientes pronunciadas, obra civil y transporte de materiales pétreos.',
    specLabel: 'Profundidad',
    specValue: '21.5 mm (Extra Profundo)',
    quoteParam: 'Cotizar medida 12R22.5',
  },
  {
    id: '18.4-34',
    category: 'agricola',
    badge: 'Campo / R1 / Maquinaria',
    badgeType: 'tertiary',
    stock: 'Stock Inmediato',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlbN1ysFWPoby8VtpLjoQc71g8Xi_QJaYcIY-qVnbrsaEoNa39MOSyWAI5ZBaJ-WKDh0rJQ-zoy3m5pGDUDw8CAHfrfcayIkEU6bF8d5EXbCXDRym4_gd0vs6dc1mWz6q55Qq9d_1k-wVtgG41c6ERFuAXN2VmSpeT8Tb7unbXkCAMdgGvci6j5LWLqyYjWP2m3doZwiNomJjmUjxllzG96bwFJw_wohy_S6jslluZ4UFYHutbc3vqpA',
    imageAlt: 'Agricultural tractor rear tire 18.4-34 with tall angled chevron tread bars',
    bannerTag: 'R-1 TRACCIÓN',
    brands: 'Goodyear Agrícola',
    plyRating: '12 Capas Reforzadas',
    title: '18.4-34 Agrícola Trasera',
    description: 'Diseño de gajos angulados autolimpiantes para cultivo, arado y sustratos agrícolas húmedos de la región de Colón.',
    specLabel: 'Autolimpieza',
    specValue: 'Doble Vértice 45°',
    quoteParam: 'Cotizar medida 18.4-34 Agricola',
  },
];

export const NeumaticosScreen: React.FC<NeumaticosScreenProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('todos');
  const [highlightedSpec, setHighlightedSpec] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === 'todos'
      ? TIRE_PRODUCTS
      : TIRE_PRODUCTS.filter((item) => item.category === selectedCategory);

  const handleHighlight = (specKey: string) => {
    setHighlightedSpec(specKey);
    setTimeout(() => {
      setHighlightedSpec(null);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: CATALOG HEADER & FILTERS */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden pb-space-xl">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#005ea4_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
            <div className="max-w-3xl space-y-space-xs">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container text-primary font-label-code text-label-code uppercase tracking-wider shadow-sm">
                <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  tire_repair
                </span>
                <span>Inventario Directo de Almacén</span>
                <span className="text-outline">/</span>
                <span>Corredor Industrial QRO</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight m-0">
                Catálogo de Neumáticos Nuevos
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
                Venta directa multimarca para particulares, transportistas y flotillas industriales. Asesoría técnica inmediata según tu carga, trayecto y especificaciones de rodamiento.
              </p>
            </div>
            <div className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">inventory_2</span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-primary leading-none block">+2,400</span>
                <span className="font-label-technical text-label-technical text-on-surface-variant uppercase">
                  Unidades en Stock Local
                </span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-surface-container rounded-xl p-space-sm mb-space-xl shadow-sm">
            <div
              className="flex items-center justify-between gap-space-sm overflow-x-auto pb-space-xs lg:pb-0 scrollbar-none"
              id="categoryFilterContainer"
            >
              <button
                className={`cat-filter-btn flex-1 min-w-[140px] flex items-center justify-center gap-space-xs py-space-md px-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === 'todos'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                data-cat="todos"
                onClick={() => setSelectedCategory('todos')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">apps</span>
                <span>Todos</span>
              </button>

              <button
                className={`cat-filter-btn flex-1 min-w-[160px] flex items-center justify-center gap-space-xs py-space-md px-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === 'sedan'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                data-cat="sedan"
                onClick={() => setSelectedCategory('sedan')}
                type="button"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>
                </svg>
                <span>Coche &amp; Sedán</span>
              </button>

              <button
                className={`cat-filter-btn flex-1 min-w-[170px] flex items-center justify-center gap-space-xs py-space-md px-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === 'suv'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                data-cat="suv"
                onClick={() => setSelectedCategory('suv')}
                type="button"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 12h-1.5V9.5c0-.83-.67-1.5-1.5-1.5H8c-.83 0-1.5.67-1.5 1.5V12H5c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-11-1V9.5h8V11H8zm-1.5 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                </svg>
                <span>Camioneta &amp; SUV</span>
              </button>

              <button
                className={`cat-filter-btn flex-1 min-w-[200px] flex items-center justify-center gap-space-xs py-space-md px-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === 'camion'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                data-cat="camion"
                onClick={() => setSelectedCategory('camion')}
                type="button"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                </svg>
                <span>Camión &amp; Carga</span>
              </button>

              <button
                className={`cat-filter-btn flex-1 min-w-[170px] flex items-center justify-center gap-space-xs py-space-md px-space-md rounded-lg font-label-technical text-label-technical uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === 'agricola'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                data-cat="agricola"
                onClick={() => setSelectedCategory('agricola')}
                type="button"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 15h-2.1c-.4-1.2-1.5-2-2.9-2H13V9h4c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H7C6.4 4 6 4.4 6 5v3c0 .6.4 1 1 1h4v4H9c-1.7 0-3 1.3-3 3v2H4c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zm-5 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                </svg>
                <span>Agrícola &amp; OTR</span>
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md" id="catalogGrid">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="tire-item flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow duration-200"
                data-category={item.category}
              >
                <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                  <span
                    className={`px-space-xs py-0.5 rounded font-label-code text-label-code uppercase tracking-wider ${
                      item.badgeType === 'primary'
                        ? 'bg-primary-fixed text-on-primary-fixed'
                        : item.badgeType === 'secondary'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-tertiary-fixed text-on-tertiary-fixed'
                    }`}
                  >
                    {item.badge}
                  </span>
                  <span className="font-label-technical text-label-technical text-on-surface-variant flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
                    {item.stock}
                  </span>
                </div>

                <div className="my-space-md flex items-center justify-center py-space-sm bg-surface-container-low rounded-lg relative overflow-hidden">
                  <img
                    className="h-44 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    data-alt={item.imageAlt}
                    src={item.image}
                    alt={item.title}
                  />
                  <span
                    className={`absolute top-2 left-2 font-label-code text-label-code px-1.5 py-0.5 rounded ${
                      item.badgeType === 'primary'
                        ? 'bg-on-secondary-fixed text-tertiary-fixed'
                        : item.badgeType === 'secondary'
                        ? 'bg-primary text-on-primary'
                        : 'bg-secondary text-on-secondary'
                    }`}
                  >
                    {item.bannerTag}
                  </span>
                </div>

                <div className="space-y-space-xs flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">
                      {item.brands}
                    </span>
                    <span className="font-label-code text-label-code text-on-surface-variant">
                      {item.plyRating}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase m-0">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-code text-label-code text-outline uppercase">
                      {item.specLabel}
                    </span>
                    <span className="font-label-technical text-label-technical text-on-surface">
                      {item.specValue}
                    </span>
                  </div>
                  <a
                    className="px-space-md py-space-xs rounded bg-on-secondary-fixed text-tertiary-fixed hover:bg-primary hover:text-on-primary font-label-technical text-label-technical uppercase tracking-wider flex items-center gap-space-xs transition-colors"
                    href={`https://wa.me/524427140982?text=${encodeURIComponent(item.quoteParam)}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[16px]">request_quote</span>
                    <span>Cotizar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Banner */}
          <div className="mt-space-lg p-space-md bg-surface-container-low rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm text-on-surface">
              <span className="material-symbols-outlined text-primary text-[24px]">tune</span>
              <p className="font-body-md text-body-md m-0">
                ¿Buscas otra medida no listada? Manejamos <strong className="font-bold">más de 300 configuraciones</strong> adicionales (rodadas 13 a 24.5 y agrícolas R1/R2).
              </p>
            </div>
            <a
              className="shrink-0 px-space-md py-space-xs rounded bg-primary text-on-primary hover:bg-primary-container font-label-technical text-label-technical uppercase tracking-wider inline-flex items-center gap-space-xs shadow-sm"
              href="https://wa.me/524427140982?text=Hola,%20busco%20una%20medida%20especifica%20no%20listada"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Preguntar por mi rodada</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: MARCAS ALIADAS OFICIALES */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div>
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest block mb-space-xs">
                Respaldo Directo de Fabricante
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase m-0">
                Marcas Aliadas Oficiales
              </h2>
            </div>
            <span className="font-label-technical text-label-technical text-on-surface-variant">
              Garantía de Fábrica contra Defectos de Mano de Obra y Material
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {/* Continental */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wider">
                  Continental
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code text-label-code">
                  ALEMANIA
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Alta tecnología alemana, durabilidad superior de casco e ingeniería orientada a máxima eficiencia en kilometraje total.
              </p>
              <div className="flex items-center justify-between text-outline font-label-code text-label-code pt-space-sm border-t border-surface-container">
                <span>FLOTAS &amp; SEDÁN PREMIUM</span>
                <span className="text-primary font-bold">RADIAL DE ALTO NIVEL</span>
              </div>
            </div>

            {/* Yokohama */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wider">
                  Yokohama
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code text-label-code">
                  JAPÓN
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Rendimiento superior, adherencia en curvas y compuestos de sílice de última generación con alto control en mojado.
              </p>
              <div className="flex items-center justify-between text-outline font-label-code text-label-code pt-space-sm border-t border-surface-container">
                <span>PASSENGER &amp; SUV TOURING</span>
                <span className="text-primary font-bold">AGARRE DINÁMICO</span>
              </div>
            </div>

            {/* Hankook */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wider">
                  Hankook
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code text-label-code">
                  COREA
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Equilibrio perfecto de distancia corta de frenado, confort acústico de rodaje y resistencia comprobada para carreteras mexicanas.
              </p>
              <div className="flex items-center justify-between text-outline font-label-code text-label-code pt-space-sm border-t border-surface-container">
                <span>AUTOMÓVIL Y CAMIONETA</span>
                <span className="text-primary font-bold">RESPUESTA PRECISA</span>
              </div>
            </div>

            {/* Goodyear */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wider">
                  Goodyear
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code text-label-code">
                  EE.UU.
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Líder global indiscutible en transporte comercial, carga pesada y flotas logísticas. Carcasas con alto índice de renovado.
              </p>
              <div className="flex items-center justify-between text-outline font-label-code text-label-code pt-space-sm border-t border-surface-container">
                <span>TRANSPORTE PESADO &amp; CARGA</span>
                <span className="text-primary font-bold">LÍDER COMERCIAL</span>
              </div>
            </div>

            {/* Firestone */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wider">
                  Firestone
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code text-label-code">
                  GLOBAL
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Resistencia probada en asfalto accidentado, alta rigidez en hombros de llanta y estabilidad en trayectos largos interurbanos.
              </p>
              <div className="flex items-center justify-between text-outline font-label-code text-label-code pt-space-sm border-t border-surface-container">
                <span>CAMIÓN, BUS &amp; CARGA</span>
                <span className="text-primary font-bold">TRABAJO RUDO</span>
              </div>
            </div>

            {/* Sumitomo */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wider">
                  Sumitomo
                </span>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code text-label-code">
                  JAPÓN
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Calidad japonesa de precisión con procesos de manufactura avanzados para un desgaste parejo y prolongada vida útil.
              </p>
              <div className="flex items-center justify-between text-outline font-label-code text-label-code pt-space-sm border-t border-surface-container">
                <span>PRECISIÓN RADIAL</span>
                <span className="text-primary font-bold">HOMBRO REFORZADO</span>
              </div>
            </div>
          </div>

          {/* Economical brands card */}
          <div className="mt-space-md bg-on-secondary-fixed text-surface p-space-lg rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="space-y-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-space-xs text-tertiary-fixed font-label-code text-label-code uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">price_check</span>
                <span>Marcas Económicas de Alto Rendimiento</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary uppercase m-0">
                Eudemon, Racelone y Valiant
              </h3>
              <p className="font-body-md text-body-md text-surface-container-high m-0">
                Excelente relación costo-beneficio, cascos certificados y kilometraje confiable para operaciones donde cada centavo por kilómetro cuenta. Disponibles en medidas para carga pesada y distribución urbana.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-space-sm">
              <a
                className="px-space-lg py-space-sm rounded bg-tertiary-fixed text-on-tertiary-fixed hover:bg-on-primary hover:text-on-surface font-label-technical text-label-technical uppercase tracking-wider inline-flex items-center gap-space-xs transition-colors"
                href="https://wa.me/524427140982?text=Quiero%20conocer%20precios%20de%20marcas%20economicas%20(Eudemon,%20Racelone,%20Valiant)"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Cotizar Líneas Económicas</span>
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GUÍA RÁPIDA DE IDENTIFICACIÓN */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-space-xl">
              <span className="font-label-code text-label-code text-primary uppercase tracking-widest block mb-space-xs">
                Guía Rápida de Identificación
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase m-0">
                ¿Cómo Cotizar tu Neumático en 1 Minuto?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                Aprende a leer el flanco lateral de tu llanta o déjalo en nuestras manos con una simple fotografía.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-space-xl">
              {/* Interactive Code Anatomy */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-technical text-label-technical text-on-surface uppercase tracking-wider flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">help_center</span>
                    <span>Anatomía del Código de Llanta</span>
                  </span>
                  <span className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    FLANCO LATERAL
                  </span>
                </div>

                {/* Big Code display with click targets */}
                <div className="bg-on-secondary-fixed text-surface p-space-md rounded-lg mb-space-md flex flex-wrap items-baseline justify-center gap-x-space-md gap-y-space-xs font-label-code text-[28px] lg:text-[34px] font-bold text-center tracking-wider select-none">
                  <span
                    className={`cursor-pointer transition-all hover:scale-110 ${
                      highlightedSpec === 'width' ? 'text-tertiary-fixed underline font-black scale-110' : 'text-tertiary-fixed hover:underline'
                    }`}
                    onClick={() => handleHighlight('width')}
                    title="Click para ver Ancho"
                  >
                    185
                  </span>
                  <span className="text-outline">/</span>
                  <span
                    className={`cursor-pointer transition-all hover:scale-110 ${
                      highlightedSpec === 'aspect' ? 'text-primary-fixed underline font-black scale-110' : 'text-primary-fixed hover:underline'
                    }`}
                    onClick={() => handleHighlight('aspect')}
                    title="Click para ver Perfil"
                  >
                    65
                  </span>
                  <span
                    className={`cursor-pointer transition-all hover:scale-110 ${
                      highlightedSpec === 'radial' ? 'text-tertiary-fixed underline font-black scale-110' : 'text-tertiary-fixed hover:underline'
                    }`}
                    onClick={() => handleHighlight('radial')}
                    title="Click para ver Construcción"
                  >
                    R
                  </span>
                  <span
                    className={`cursor-pointer transition-all hover:scale-110 ${
                      highlightedSpec === 'rim' ? 'text-on-primary underline font-black scale-110' : 'text-on-primary hover:underline'
                    }`}
                    onClick={() => handleHighlight('rim')}
                    title="Click para ver Diámetro del Rin"
                  >
                    14
                  </span>
                  <span
                    className={`text-[22px] lg:text-[26px] ml-space-sm cursor-pointer transition-all hover:scale-110 ${
                      highlightedSpec === 'load' ? 'text-surface-variant underline font-black scale-110' : 'text-surface-variant hover:underline'
                    }`}
                    onClick={() => handleHighlight('load')}
                    title="Click para ver Índice de Carga"
                  >
                    86H
                  </span>
                </div>

                {/* Sub cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm text-left">
                  <div
                    className={`spec-card p-space-sm rounded-lg transition-all duration-300 cursor-pointer ${
                      highlightedSpec === 'width'
                        ? 'bg-primary-fixed shadow-md ring-2 ring-primary scale-[1.02]'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    }`}
                    id="spec-width"
                    onClick={() => handleHighlight('width')}
                  >
                    <div className="flex items-center gap-space-xs text-tertiary font-label-technical text-label-technical">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
                      <span className="font-bold">185</span> — Ancho de Sección
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant m-0 mt-0.5">
                      Distancia de flanco a flanco expresada en milímetros (mm).
                    </p>
                  </div>

                  <div
                    className={`spec-card p-space-sm rounded-lg transition-all duration-300 cursor-pointer ${
                      highlightedSpec === 'aspect'
                        ? 'bg-primary-fixed shadow-md ring-2 ring-primary scale-[1.02]'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    }`}
                    id="spec-aspect"
                    onClick={() => handleHighlight('aspect')}
                  >
                    <div className="flex items-center gap-space-xs text-primary font-label-technical text-label-technical">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <span className="font-bold">/65</span> — Perfil / Serie
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant m-0 mt-0.5">
                      Altura del costado como porcentaje (65%) respecto al ancho.
                    </p>
                  </div>

                  <div
                    className={`spec-card p-space-sm rounded-lg transition-all duration-300 cursor-pointer ${
                      highlightedSpec === 'radial'
                        ? 'bg-primary-fixed shadow-md ring-2 ring-primary scale-[1.02]'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    }`}
                    id="spec-radial"
                    onClick={() => handleHighlight('radial')}
                  >
                    <div className="flex items-center gap-space-xs text-tertiary font-label-technical text-label-technical">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
                      <span className="font-bold">R</span> — Construcción Radial
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant m-0 mt-0.5">
                      Disposición en capas de cuerdas radiales estabilizadoras.
                    </p>
                  </div>

                  <div
                    className={`spec-card p-space-sm rounded-lg transition-all duration-300 cursor-pointer ${
                      highlightedSpec === 'rim'
                        ? 'bg-primary-fixed shadow-md ring-2 ring-primary scale-[1.02]'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    }`}
                    id="spec-rim"
                    onClick={() => handleHighlight('rim')}
                  >
                    <div className="flex items-center gap-space-xs text-on-surface font-label-technical text-label-technical">
                      <span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
                      <span className="font-bold">14</span> — Diámetro del Rin
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant m-0 mt-0.5">
                      Diámetro interno de la rueda medido en pulgadas exactas.
                    </p>
                  </div>

                  <div
                    className={`spec-card sm:col-span-2 p-space-sm rounded-lg transition-all duration-300 cursor-pointer ${
                      highlightedSpec === 'load'
                        ? 'bg-primary-fixed shadow-md ring-2 ring-primary scale-[1.02]'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    }`}
                    id="spec-load"
                    onClick={() => handleHighlight('load')}
                  >
                    <div className="flex items-center gap-space-xs text-on-surface font-label-technical text-label-technical">
                      <span className="w-2.5 h-2.5 rounded-full bg-on-secondary-fixed"></span>
                      <span className="font-bold">86H</span> — Índice de Carga &amp; Código de Velocidad
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant m-0 mt-0.5">
                      86 = Capacidad máx. 530 kg por neumático. H = Velocidad de diseño hasta 210 km/h.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps for quick quote */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-technical text-label-technical shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface uppercase m-0">Vía Texto por WhatsApp</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1 mb-0">
                      Escribe únicamente tu número de medida (ej. <em>205/55R16</em> o <em>11R22.5</em>). El sistema te devolverá marcas y precios al instante.
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-label-technical text-label-technical shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface uppercase m-0">Vía Fotografía de Flanco</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1 mb-0">
                      ¿No tienes tiempo de leer el código? Toma una fotografía con tu teléfono al costado de tu llanta actual y envíala. Nuestros técnicos la descifran.
                    </p>
                  </div>
                </div>

                <div className="p-space-md bg-secondary-container/40 rounded-xl flex items-center gap-space-sm text-on-secondary-container">
                  <span className="material-symbols-outlined text-[20px] shrink-0">speed</span>
                  <span className="font-label-technical text-label-technical">
                    Tiempo promedio de respuesta técnica en WhatsApp: &lt; 3 minutos
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action button */}
            <div className="text-center pt-space-md border-t border-surface-container-high">
              <a
                className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-lg bg-on-secondary-fixed text-tertiary-fixed hover:bg-primary-container hover:text-on-primary transition-all duration-200 shadow-md font-label-technical text-[15px] uppercase tracking-wider"
                href="https://wa.me/524427140982?text=Hola%20NCGT%20El%20Coyote,%20adjunto%20foto/medida%20de%20mi%20neum%C3%A1tico%20para%20cotizaci%C3%B3n%20inmediata"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[24px]">photo_camera</span>
                <span>Enviar Foto o Medida por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
