<template>
  <main class="min-h-screen bg-slate-50 text-slate-800 pb-20">
    <header
      class="bg-brand-dark text-white border-b border-slate-800 py-16 sm:py-20 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear_gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-700 bg-slate-900/80 text-xs font-semibold tracking-wider uppercase text-slate-300"
          >
            <div class="w-1.5 h-1.5 bg-brand-mustard rounded-full"></div>
            Perfil Corporativo & Filosofía
          </div>

          <h1
            class="text-3xl sm:text-5xl font-black trakcing-tight text-white leading-tight"
          >
            Ingeniería Especializada y Capacidad Operativa en Campo
          </h1>
          <p
            class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
          >
            En <span class="text-white font-bold">RUGASIC</span> integramos
            servicios técnicos de construcción civil, fabricación de estructuras
            de acero, tendido de tuberías de proceso y proveeduría industrial
            para los sectores más exigentes.
          </p>
        </div>
      </div>
    </header>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div
          v-for="(stat, idx) in companyStats"
          :key="idx"
          class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md flex flex-col justify-between"
        >
          <span
            class="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight"
          >
            {{ stat.value }}
          </span>
          <div class="mt-2">
            <h2 class="text-xs sm:text-sm font-bold text-slate-900">
              {{ stat.label }}
            </h2>
            <p
              class="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug"
            >
              {{ stat.detail }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- COLUMNA IZQUIERDA: CONTENIDO EDITORIAL -->
        <div class="lg:col-span-6 space-y-6">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider"
          >
            <span class="w-1.5 h-1.5 bg-brand-mustard rounded-full"></span>
            Nuestra Trayectoria
          </div>

          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight"
          >
            Soluciones de inicio a fin: Del cálculo en plano a la ejecución en
            sitio
          </h2>

          <p class="text-sm text-slate-600 leading-relaxed">
            Nacemos con el objetivo de dar respuesta a las demandas críticas de
            infraestructura en el sector manufacturero, metalmecánico y de
            procesos continuos. Nuestra estructura integra ingeniería,
            construcción y una comercializadora de insumos industriales para
            atender proyectos de obra y mantenimiento sin depender de
            intermediarios.
          </p>

          <p class="text-sm text-slate-600 leading-relaxed">
            Respaldados por un taller matriz de pailería en Monterrey y
            cuadrillas operativas en campo, trabajamos bajo lineamientos de
            seguridad industrial, soldadura calificada y control de calidad en
            cada etapa del cronograma.
          </p>

          <div class="pt-2 flex flex-wrap gap-3">
            <RouterLink
              to="/proyectos"
              class="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Explorar proyectos concluidos</span>
              <font-awesome-icon icon="arrow-right" class="text-[10px]" />
            </RouterLink>
            <RouterLink
              to="/servicios"
              class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors"
            >
              Ver especialidades
            </RouterLink>
          </div>
        </div>

        <div class="lg:col-span-6 relative">
          <!-- Marco principal de la imagen -->
          <div
            class="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3"
          >
            <img
              src="../assets/images/nosotros-operaciones-rugasic.webp"
              alt="Personal técnico calificado en taller de habilitado y soldadura de RUGASIC"
              class="w-full h-full object-cover opacity-95 hover:scale-105 transition-all duration-700"
              loading="lazy"
              width="1000"
              height="750"
            />
            <!-- Degradado sutil para integrar -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"
            ></div>
          </div>

          <!-- Tarjeta flotante superpuesta (Social Proof de rigor técnico) -->
          <div
            class="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg max-w-xs items-center gap-3.5 z-10"
          >
            <div
              class="w-10 h-10 rounded-lg bg-brand-dark text-brand-mustard flex items-center justify-center shrink-0 font-black text-lg"
            >
              ✓
            </div>
            <div>
              <span class="block text-xs font-bold text-slate-900 leading-tight"
                >Soluciones Multidisciplinarias</span
              >
              <span class="text-[11px] text-slate-500"
                >Capacidad técnica integral desde el diseño y cálculo hasta la
                ejecución en sitio.</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(pillar, pIdx) in corporatePillars"
          :key="pIdx"
          class="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-xs flex flex-col justify-between"
        >
          <div>
            <span
              class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-100 text-slate-600 rounded"
            >
              {{ pillar.badge }}
            </span>
            <h2 class="text-xl font-bold text-slate-900 mt-4 mb-2">
              {{ pillar.title }}
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <div
          class="text-xs font-bold uppercase tracking-wider text-brand-mustard"
        >
          Nuestros Principios
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Pilares que Rigen Cada Proyecto en Campo
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(val, vIdx) in companyValues"
          :key="vIdx"
          class="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-colors"
        >
          <span class="text-brand-mustard font-black text-lg block mb-2"
            >0{{ vIdx + 1 }}.</span
          >
          <h3 class="text-sm font-bold text-slate-900 mb-2 leading-snug">
            {{ val.title }}
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            {{ val.description }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { viewDepthKey } from "vue-router";
import { companyStats, corporatePillars, companyValues } from "../data/about";
</script>

<style scoped></style>
