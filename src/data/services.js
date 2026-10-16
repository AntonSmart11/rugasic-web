// src/data/services.js

export const SERVICE_CATEGORIES = [
  {
    title: "Ingeniería de Detalle & Supervisión",
    badge: "Fase Técnica & Análisis",
    description:
      "Estudios, memorias de cálculo y modelado técnica bajo estrictas normativas industriales.",
    icon: "fa-drafting-compass",
    bannerImage: new URL(
      "../assets/images/services/servicio-ingenieria-levantamientos-topografia.webp",
      import.meta.url,
    ).href,
    bannerAlt:
      "Ingeniería de detalle, planos técnicos y modelado de recipientes a presión",
    capabilities: [
      "Diseño de tanques e intercambiadores de calor",
      "Cálculos y memorias para obra civil y estructural",
      "Simulador de procesos y análisis de flexibilidad en tuberías",
      "Modelado 2D / 3D en AutoCAD y CADWorx (maquetas electrónicas)",
      "Sistemas de tierras, pararrayos, alumbrado e instrumentación",
      "Supervisión y control de obra en sitio y planos As-Built",
    ],
    capabilitiesDetail: [
      {
        name: "Diseño y Cálculo de Tanques de Almacenamiento",
        detail:
          "Cálculo mecánico y diseño conforme a códigos API 650 / ASME para recipientes y almacenamiento industrial.",
      },
      {
        name: "Diseño de Intercambiadores de Calor",
        detail:
          "Dimensionamiento térmico e hidráulico según estándares TEMA para plantas de procesos continuos.",
      },
      {
        name: "Simulación de Procesos Industriales",
        detail:
          "Modelado computacional para balances de materia y energía en corrientes de fluidos y gases.",
      },
      {
        name: "Análisis de Flexibilidad y Esfuerzos en Tuberías",
        detail:
          "Estudios de esfuerzo por dilatación térmica, vibración y presión mediante software especializado.",
      },
      {
        name: "Memorias de Análisis para Obra Civil y Estructural",
        detail:
          "Modelado estructural, cálculo de cimentaciones, trabes, zapatas y verificación de cargas de viento y sismo.",
      },
      {
        name: "Modelado Electrónico en CADWorx y AutoCAD (2D y 3D)",
        detail:
          "Generación de maquetas virtuales tridimensionales, layouts y planos de ensamble libres de interferencias.",
      },
    ],
  },
  {
    title: "Fabricación, Obra Civil & Montajes",
    badge: "Taller & Campo",
    description:
      "Construcción pesada, pailería especializada y habilitado con cuadrillas en sitio.",
    icon: "fa-hard-hat",
    bannerImage: new URL(
      "../assets/images/services/servicio-fabricacion-montaje-estructuras-metalicas-naves.webp",
      import.meta.url,
    ).href,
    bannerAlt:
      "Fabricación de estructura metálica, pailería y montaje de nave industrial",
    capabilities: [
      "Fabricación y armado de estructuras metálicas para naves",
      "Habilitado y montaje de tuberías de proceso e industriales",
      "Servicios de pailería pesada, soldadura especializada y corte",
      "Cimentaciones, obra civil, pavimentación con asfalto y multipanel",
      "Maniobras de izaje, montaje de equipo pesado y renta de grúas",
      "Estudios de mecánica de suelos y topografía de precisión",
    ],
    capabilitiesDetail: [
      {
        name: "Habilitado y Montaje de Sistemas de Tuberías Industriales",
        detail:
          "Instalación, soldadura TIG sanitaria y pruebas hidrostáticas para bombeo de jugos, concentrados y lácteos.",
      },
      {
        name: "Fabricación y Armado de Estructuras Metálicas",
        detail:
          "Habilitado de perfiles estructurales, placas de conexión y montaje de marcos rígidos para naves industriales.",
      },
      {
        name: "Pailería Pesada y Soldadura Calificada",
        detail:
          "Corte, rolado y soldadura especializada bajo procedimientos calificados (WPS/PQR) en taller y campo.",
      },
      {
        name: "Cimentaciones, Pisos Industriales y Multipanel",
        detail:
          "Obra civil pesada, losas de alta resistencia, pavimentación con asfalto y techumbres con paneles aislantes.",
      },
      {
        name: "Maniobras de Izaje y Montaje de Equipos",
        detail:
          "Logística y maniobras críticas con grúas telescópicas para colocación de tanques, motores y reactores.",
      },
      {
        name: "Levantamientos Físicos y Topografía de Precisión",
        detail:
          "Verificación de plomos, niveles, topografía con estación total y elaboración de planos As-Built.",
      },
    ],
  },
  {
    title: "Comercializadora & Suministros",
    badge: "Abasto Industrial",
    description:
      "Provisión continua de consumibles, equipos de protección y herramienta de alto rendimiento.",
    icon: "fa-boxes-stacked",
    bannerImage: new URL(
      "../assets/images/services/servicio-suministros-soldadura-epp-herramienta-industrial.webp",
      import.meta.url,
    ).href,
    bannerAlt:
      "Almacén y proveeduría de suministros, consumibles técnicos y herramientas industriales",
    capabilities: [
      "Herramienta manual, eléctrica y neumática de uso rudo",
      "Equipo de Protección Personal (EPP) certificado",
      "Abrasivos, soldadura, adhesivos industriales y selladores",
      "Pinturas, recubrimientos epóxicos y plomería de proceso",
      "Tornillería, pernos de anclaje, clavos, alambres y mallas",
      "Material eléctrico para media y baja tensión",
    ],
    capabilitiesDetail: [
      {
        name: "Herramienta Manual, Eléctrica y Neumática",
        detail:
          "Equipos de uso pesado para taller y obra (Hilti, Urrea, Surtek, Milwaukee, Black & Decker).",
      },
      {
        name: "Soldadura, Consumibles y Abrasivos",
        detail:
          "Electrodos, alambres, microalambre, discos de desbaste y corte especializado (Lincoln Electric, Norton, Austromex).",
      },
      {
        name: "Equipo de Protección Personal (EPP)",
        detail:
          "Calzado de seguridad, cascos, guantes, arneses para alturas y protección respiratoria bajo norma STPS.",
      },
      {
        name: "Tornillería Estructural y Anclajes",
        detail:
          "Pernos de anclaje, tornillos grado 5 y 8, varillas roscadas, mallas, alambres y ferretería pesada.",
      },
      {
        name: "Material Eléctrico, Fuerza y Control",
        detail:
          "Cableado de cobre y aluminio, canalizaciones, tubería conduit, alumbrado LED y tableros industriales.",
      },
      {
        name: "Químicos, Recubrimientos y Plomería",
        detail:
          "Pinturas epóxicas, selladores industriales, adhesivos de alto desempeño y tubería hidráulica/sanitaria.",
      },
    ],
  },
];
