<template>
  <section class="py-20 lg:py-24 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span
          class="text-xs font-bold uppercase tracking-widest text-brand-mustard block mb-2"
        >
          Ventajas Operativas
        </span>
        <h2
          class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
        >
          ¿Por qué elegir RUGASIC como aliado industrial?
        </h2>
        <p class="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          Más de una década combinando ingeniería especializada con capacidad de
          suministro para proyectos de alta criticidad.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in differentiators"
          :key="index"
          class="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-start group"
        >
          <div
            class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg mb-5 group-hover:bg-brand-slate-blue transition-colors"
          >
            <font-awesome-icon :icon="`fa-solid ${item.icon}`" />
          </div>

          <h3 class="text-lg font-bold text-slate-900 mb-2">
            {{ item.title }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const differentiators = [
  {
    icon: "fa-building",
    title: "Taller Propio de Fabricación",
    description:
      "Oficinas y taller matriz en Monterrey, N.L. para habilitado de acero, pailería y preensambles de gran escala.",
  },
  {
    icon: "fa-boxes-stacked",
    title: "Solución integral 360°",
    description:
      "Unificamos la ingeniería de detalle y la supervisión en sitio con la proveeduría directa de consumibles y maquinaria.",
  },
  {
    icon: "fa-hard-hat",
    title: "Experiencia Multisectorial",
    description:
      "Especialistas atendiendo plantas químicas, petroquímicas, agroindustria de cítricos y empaque de alimentos.",
  },
  {
    icon: "fa-check-circle",
    title: "Rigor Técnico y Normativo",
    description:
      "Elaboración de memorias de cálculo, planos As-Built y aseguramiento estricto de seguridad en cada maniobra.",
  },
];
</script>

<style scoped></style>
