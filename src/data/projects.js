// src/data/projects.js

export const FEATURED_PROJECTS = [
  {
    title: "Construcción Civil y Armado Estructural para Naves",
    client: "Huertas Águilas",
    location: "Tamaulipas",
    category: "Estructuras & Obra Civil",
    image: new URL(
      "../assets/images/projects/featured/proyecto-montaje-estructuras-naves-huertas-aguilas-tamaulipas.webp",
      import.meta.url,
    ).href,
    description:
      "Servicios integrales de cimentación, habilitado y montaje de estructuras de acero para nave industrial.",
  },
  {
    title: "Habilitado y Montaje de Tuberías Grado Alimenticio",
    client: "Juguera Citrofrut",
    location: "Huichihuayán, S.L.P.",
    category: "Tuberías Sanitarias",
    image: new URL(
      "../assets/images/projects/featured/proyecto-tuberias-acero-inoxidable-citrofrut-huichihuayan.webp",
      import.meta.url,
    ).href,
    description:
      "Aseguramiento de calidad, canalizaciones y supervisión técnica en planta de manufactura de motores.",
  },
  {
    title: "Supervisión de Instalación Eléctrica Industrial",
    client: "Nidec Motores",
    location: "Guadalupe, N.L.",
    category: "Media & Baja Tensión",
    image: new URL(
      "../assets/images/projects/featured/proyecto-instalacion-electrica-industrial-nidec-guadalupe-nl.webp",
      import.meta.url,
    ).href,
    description:
      "Aseguramiento de calidad, canalizaciones y supervisión técnica en planta de manufactura de motores.",
  },
  {
    title: "Supervisión en Cuartos Eléctricos y Área de Lingotes",
    client: "Frisa García",
    location: "García, N.L.",
    category: "Supervisión Técnica",
    image: new URL(
      "../assets/images/projects/featured/proyecto-supervision-obra-civil-cuartos-electricos-frisa-garcia.webp",
      import.meta.url,
    ).href,
    description:
      "Supervisión de obra civil y cuartos de control eléctrico cumpliendo con normativas de seguridad.",
  },
];

export const PROJECT_CATEGORIES = [
  { id: "todos", label: "Todos los Proyectos" },
  { id: "estructuras", label: "Estructuras & Naves" },
  { id: "tuberias", label: "Tuberías & Pailería" },
  { id: "obra-civil", label: "Obra Civil & Pavimentación" },
  { id: "supervision", label: "Supervisión & Geotecnia" },
];

export const ALL_PROJECTS = [
  // --- GRUPO 1: PROYECTOS CON CLIENTE EXPLÍCITO ---
  {
    id: 1,
    title: "Construcción Civil y Armado Estructural para Naves",
    client: "Huertas Águilas",
    location: "Tamaulipas",
    category: "estructuras",
    categoryLabel: "Estructuras & Naves",
    image: new URL(
      "../assets/images/projects/page/proyecto-montaje-estructuras-naves-huertas-aguilas-tamaulipas.webp",
      import.meta.url,
    ).href,
    alt: "Construcción civil, cimentaciones y montaje de estructura metálica para nave industrial Huertas Águilas en Tamaulipas por RUGASIC",
    scope:
      "Servicios integrales de excavación, cimentación profunda, habilitado de marcos rígidos de acero y montaje de estructura para nave industrial.",
    tags: [
      "Estructura Metálica",
      "Nave Industrial",
      "Cimentación",
      "Obra Civil",
    ],
  },
  {
    id: 2,
    title: "Supervisión de Construcción de Naves en Área de Lingotes",
    client: "Frisa Forjados (Planta García)",
    location: "García, N.L.",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-supervision-construccion-naves-frisa-garcia-nl.webp",
      import.meta.url,
    ).href,
    alt: "Supervisión de obra civil y montaje de estructuras en área de lingotes para Frisa García en Nuevo León por RUGASIC",
    scope:
      "Supervisión técnica de obra civil, control de calidad en montajes nocturnos de acero estructural y aseguramiento normativo en nave para proceso de lingotes.",
    tags: [
      "Supervisión de Obra",
      "Nave Industrial",
      "Siderurgia / Forja",
      "Control de Calidad",
    ],
  },
  {
    id: 3,
    title: "Supervisión de Proyectos, Maniobras y Montaje en Planta",
    client: "Citrofrut (Planta Procesadora)",
    location: "Huichihuayán, S.L.P. / Multisede",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-supervision-maniobras-tanques-citrofrut-huichihuayan.webp",
      import.meta.url,
    ).href,
    alt: "Supervisión técnica, maniobras de izaje y montaje en planta de jugos Citrofrut por RUGASIC",
    scope:
      "Supervisión multidisciplinaria en planta, coordinación de maniobras de izaje con grúas de alto tonelaje, control en montaje de estructuras para tanques e interconexión de equipos.",
    tags: [
      "Supervisión Técnica",
      "Agroindustria",
      "Maniobras de Izaje",
      "Montaje Industrial",
    ],
  },
  {
    id: 4,
    title: "Supervisión Técnica de Instalación Eléctrica Industrial",
    client: "Nidec Motores",
    location: "Guadalupe, N.L.",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-instalacion-electrica-industrial-nidec-guadalupe-nl.webp",
      import.meta.url,
    ).href,
    alt: "Supervisión técnica de instalaciones eléctricas de media y baja tensión en planta Nidec Motores Nuevo León por RUGASIC",
    scope:
      "Supervisión de tendido de cableado de fuerza, canalizaciones en charola, instalación de tableros de control y aseguramiento de normativas eléctricas en planta de manufactura.",
    tags: [
      "Media y Baja Tensión",
      "Supervisión Eléctrica",
      "Tableros de Control",
      "Canalizaciones",
    ],
  },
  {
    id: 5,
    title: "Construcción Civil y Armado Estructural de Nave Industrial",
    client: "Sector Industrial / Manufactura",
    location: "Ciénega de Flores, N.L.",
    category: "obra-civil",
    categoryLabel: "Obra Civil & Pavimentación",
    image: new URL(
      "../assets/images/projects/page/proyecto-construccion-civil-estructural-nave-cienega-de-flores-nl.webp",
      import.meta.url,
    ).href,
    alt: "Construcción civil, colado de pisos industriales y montaje estructural para nave en Ciénega de Flores Nuevo León por RUGASIC",
    scope:
      "Ejecución de obra civil integral, colado de pisos de concreto premezclado de alta resistencia, terracerías y montaje de estructura de acero con muro perimetral.",
    tags: [
      "Obra Civil",
      "Pisos Industriales",
      "Concreto Hidráulico",
      "Nave Industrial",
    ],
  },
  {
    id: 6,
    title: "Supervisión de Construcción de Cuartos Eléctricos 1 y 2",
    client: "Frisa Forjados (Planta García)",
    location: "García, N.L.",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-supervision-obra-civil-cuartos-electricos-frisa-garcia.webp",
      import.meta.url,
    ).href,
    alt: "Supervisión de obra civil y construcción de cuartos eléctricos 1 y 2 en planta Frisa García Nuevo León por RUGASIC",
    scope:
      "Supervisión técnica de obra civil pesada, aseguramiento de calidad en colado de columnas y losas de concreto, albañilería y adecuación estructural para cuartos de subestación eléctrica.",
    tags: [
      "Cuartos Eléctricos",
      "Obra Civil Pesada",
      "Supervisión Técnica",
      "Siderurgia",
    ],
  },
  {
    id: 7,
    title: "Supervisión de Construcción en Oficinas Corporativas",
    client: "Industrias Bachoco",
    location: "Zona Norte",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-supervision-construccion-oficinas-bachoco-nuevo-leon.webp",
      import.meta.url,
    ).href,
    alt: "Supervisión técnica de construcción y acabados en oficinas del corporativo Bachoco por RUGASIC",
    scope:
      "Supervisión técnica y aseguramiento de calidad en edificación institucional, acabados arquitectónicos, cancelería de cristal templado e instalaciones para oficinas corporativas.",
    tags: [
      "Supervisión de Obra",
      "Edificación",
      "Oficinas Corporativas",
      "Acabados",
    ],
  },
  {
    id: 8,
    title: "Peritaje Estructural y Levantamiento Dimensional de Grúa",
    client: "Metalsa",
    location: "Nuevo León",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-peritaje-estructural-grua-planta-metalsa-nuevo-leon.webp",
      import.meta.url,
    ).href,
    alt: "Peritaje estructural, levantamiento y verificación dimensional de grúa en planta Metalsa por RUGASIC",
    scope:
      "Servicios de peritaje técnico, control dimensional con equipo de precisión, verificación de plomos y cálculo estructural para operación segura de grúa en nave de manufactura.",
    tags: [
      "Peritaje Estructural",
      "Control Dimensional",
      "Industria Automotriz",
      "Supervisión Técnica",
    ],
  },
  {
    id: 9,
    title: "Habilitado, Soldadura TIG y Montaje de Tuberías Sanitarias",
    client: "Juguera Citrofrut",
    location: "Huichihuayán, S.L.P.",
    category: "tuberias",
    categoryLabel: "Tuberías & Pailería",
    image: new URL(
      "../assets/images/projects/page/proyecto-tuberias-acero-inoxidable-citrofrut-huichihuayan.webp",
      import.meta.url,
    ).href,
    alt: "Habilitado, soldadura TIG y montaje de tuberías de acero inoxidable grado alimenticio en Citrofrut Huichihuayán por RUGASIC",
    scope:
      "Fabricación de spools en taller, soldadura TIG sanitaria calificada, pruebas hidrostáticas y montaje de sistemas de bombeo y distribución de fluidos en acero inoxidable grado alimenticio.",
    tags: [
      "Acero Inoxidable",
      "Grado Alimenticio",
      "Soldadura TIG",
      "Tuberías de Proceso",
    ],
  },

  // Sin cede o localización

  {
    id: 10,
    title: "Pailería Pesada y Fabricación de Tanques de Proceso",
    client: "Sector Químico / Almacenamiento",
    location: "Taller de Fabricación",
    category: "tuberias",
    categoryLabel: "Tuberías & Pailería",
    image: new URL(
      "../assets/images/projects/page/proyecto-paileria-fabricacion-tanques-almacenamiento-monterrey.webp",
      import.meta.url,
    ).href,
    alt: "Trabajos de pailería pesada, soldadura especializada y rolado de placa para tanques de almacenamiento por RUGASIC",
    scope:
      "Rolado de placa de acero, habilitado de virolas, armado de recipientes atmosféricos y aplicación de soldadura calificada en taller y campo.",
    tags: [
      "Pailería Pesada",
      "Tanques de Almacenamiento",
      "Rolado de Placa",
      "Soldadura SMAW",
    ],
  },
  {
    id: 11,
    title: "Instalaciones Eléctricas de Fuerza, Control y Ductería",
    client: "Complejo de Manufactura / Ensamble",
    location: "Proyecto en Sitio",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-instalaciones-electricas-fuerza-control-nave-industrial.webp",
      import.meta.url,
    ).href,
    alt: "Instalaciones eléctricas de media y baja tensión, canalizaciones y ductería en nave industrial por RUGASIC",
    scope:
      "Tendido de charolas tipo escalerilla para cables de fuerza, ductería de ventilación y montaje de transformadores y tableros en nave de manufactura.",
    tags: [
      "Media y Baja Tensión",
      "Fuerza y Control",
      "Canalizaciones",
      "Ductería",
    ],
  },
  {
    id: 12,
    title: "Maniobras de Izaje Crítico y Montaje Mecánico",
    client: "Planta Procesadora / Granos e Insumos",
    location: "Ejecución en Campo",
    category: "estructuras",
    categoryLabel: "Estructuras & Naves",
    image: new URL(
      "../assets/images/projects/page/proyecto-maniobras-izaje-montaje-equipos-pesados-gruas.webp",
      import.meta.url,
    ).href,
    alt: "Maniobras de izaje crítico y montaje de equipo mecánico pesado con grúa telescópica por RUGASIC",
    scope:
      "Elaboración de plan de izaje, rigging especializado y posicionamiento de estructuras verticales, tolvas y sopladores mediante grúas telescópicas.",
    tags: [
      "Maniobras de Izaje",
      "Montaje Mecánico",
      "Renta de Grúas",
      "Rigging",
    ],
  },
  {
    id: 13,
    title: "Renta de Grúas y Maniobras de Izaje de Alto Tonelaje",
    client: "Infraestructura Industrial Pesada",
    location: "Proyecto en Sitio",
    category: "estructuras",
    categoryLabel: "Estructuras & Naves",
    image: new URL(
      "../assets/images/projects/page/proyecto-renta-gruas-telescopicas-maniobras-alta-capacidad.webp",
      import.meta.url,
    ).href,
    alt: "Servicios de renta de grúas industriales y maniobras de izaje a gran escala por RUGASIC",
    scope:
      "Suministro y operación de grúas telescópicas con operadores certificados para izajes de maquinaria pesada, aires acondicionados y estructuras a gran altura.",
    tags: [
      "Renta de Grúas",
      "Maniobras Especializadas",
      "Izajes de Altura",
      "Montaje",
    ],
  },
  {
    id: 14,
    title: "Levantamientos Topográficos y Control Dimensional en Planta",
    client: "Industria Metalmecánica / Acerera",
    location: "Planta en Operación",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-topografia-precision-levantamiento-planta-industrial.webp",
      import.meta.url,
    ).href,
    alt: "Levantamiento topográfico de precisión con estación total en piso industrial por RUGASIC",
    scope:
      "Nivelación de precisión, trazo de ejes estructurales, verificación de verticalidad en columnas y levantamiento As-Built para ampliaciones.",
    tags: [
      "Topografía de Precisión",
      "Estación Total",
      "Planos As-Built",
      "Control Dimensional",
    ],
  },
  {
    id: 15,
    title: "Estudios de Mecánica de Suelos y Geotecnia de Campo",
    client: "Desarrollos Industriales & Naves",
    location: "Estudio en Sitio",
    category: "supervision",
    categoryLabel: "Supervisión & Geotecnia",
    image: new URL(
      "../assets/images/projects/page/proyecto-mecanica-suelos-estudios-geotecnia-cimentaciones.webp",
      import.meta.url,
    ).href,
    alt: "Estudios de mecánica de suelos, perforación y muestreo geotécnico para cimentaciones por RUGASIC",
    scope:
      "Perforación con equipo montado en camión, muestreo SPT inalterado, estratigrafía de terreno y cálculo de capacidad de carga para cimentaciones.",
    tags: ["Mecánica de Suelos", "Geotecnia", "Sondeos SPT", "Cimentación"],
  },
  {
    id: 16,
    title: "Pavimentación con Asfalto en Patios de Maniobras",
    client: "Parque Industrial / Logística",
    location: "Obra en Campo",
    category: "obra-civil",
    categoryLabel: "Obra Civil & Pavimentación",
    image: new URL(
      "../assets/images/projects/page/proyecto-pavimentacion-asfalto-patios-maniobra-vialidades.webp",
      import.meta.url,
    ).href,
    alt: "Pavimentación con carpeta asfáltica de alto impacto en patio de maniobras y vialidades por RUGASIC",
    scope:
      "Nivelación de terracerías, base hidráulica compactada y tendido de carpeta asfáltica en caliente para tránsito pesado en patios de maniobra.",
    tags: ["Asfalto", "Patios de Maniobras", "Vialidades", "Terracerías"],
  },
  {
    id: 17,
    title: "Habilitado de Módulos y Cuartos con Estructura y Multipanel",
    client: "Planta de Alimentos / Cuartos Limpios",
    location: "Área Interior de Nave",
    category: "obra-civil",
    categoryLabel: "Obra Civil & Pavimentación",
    image: new URL(
      "../assets/images/projects/page/proyecto-fabricacion-cuartos-limpios-multipanel-aislante.webp",
      import.meta.url,
    ).href,
    alt: "Fabricación de cuartos limpios y módulos interiores con panel termoaislante y estructura metálica por RUGASIC",
    scope:
      "Montaje de estructura ligera, muros y techos con panel aislante, cancelería perimetral e iluminación hermética para áreas de control y laboratorios.",
    tags: [
      "Multipanel",
      "Cuartos Limpios",
      "Aislamiento Térmico",
      "Acabados Sanitarios",
    ],
  },
  {
    id: 18,
    title: "Construcción de Pisos Industriales y Pavimentos de Concreto",
    client: "Complejo Industrial / Cedis",
    location: "Obra en Campo",
    category: "obra-civil",
    categoryLabel: "Obra Civil & Pavimentación",
    image: new URL(
      "../assets/images/projects/page/proyecto-obra-civil-losas-pisos-industriales-concreto.webp",
      import.meta.url,
    ).href,
    alt: "Colado de pisos de concreto premezclado de alta resistencia y obra civil industrial por RUGASIC",
    scope:
      "Tendido de base, armado de malla y varilla, vaciado con bomba telescópica y acabado rayado/pulido de losas de alta durabilidad.",
    tags: [
      "Pisos Industriales",
      "Bomba de Concreto",
      "Obra Civil",
      "Pavimentos Rígidos",
    ],
  },
];
