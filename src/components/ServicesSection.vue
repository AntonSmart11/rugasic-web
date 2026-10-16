<template>
  <section
    id="servicios"
    class="py-20 lg:py-28 bg-white border-b border-slate-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-16">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-3"
        >
          <span class="w-1.5 h-1.5 bg-brand-mustard rounded-full"></span>
          Soluciones Integrales
        </div>
        <h2
          class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          Capacidades Técnicas y Operativas
        </h2>
        <p class="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
          Desde la ingeniería básica y memorias de análisis hasta la
          edificación, montaje en planta y suministro directo de consumibles
          certificados.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(service, idx) in SERVICE_CATEGORIES"
          :key="idx"
          class="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
        >
          <div>
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg group-hover:bg-brand-slate-blue transition-colors duration-200 shadow-xs"
              >
                <font-awesome-icon :icon="`fa-solid ${service.icon}`" />
              </div>
              <span
                class="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
              >
                {{ service.badge }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 mb-2 leading-snug">
              {{ service.title }}
            </h3>
            <p class="text-sm text-slate-600 mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <div class="h-px bg-slate-200 mb-6"></div>

            <ul class="space-y-3">
              <li
                v-for="(item, itemIdx) in service.capabilities"
                :key="itemIdx"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-brand-mustard mt-2 flex-shrink-0"
                ></span>
                <span class="leading-normal">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div
            class="pt-8 mt-6 border-t border-slate-200/60 flex items-center justify-between"
          >
            <RouterLink
              to="/contacto"
              class="text-xs font-bold text-slate-900 group-hover:text-brand-mustard transition-colors inline-flex items-center gap-1.5"
            >
              <span>Ver servicios completos</span>
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="text-[10px]"
              />
            </RouterLink>
          </div>
        </article>
      </div>

      <div
        class="mt-12 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t-4 border-brand-mustard shadow-sm"
      >
        <div class="space-y-1 max-w-2xl">
          <span
            class="text-xs uppercase tracking-widest text-brand-mustard font-bold"
            >Infraestructura Propia</span
          >
          <h4 class="text-lg sm:text-xl font-bold">
            Oficinas y Taller de Fabricación en Monterrey
          </h4>
          <p class="text-xs sm:text-sm text-slate-400">
            Gral. Pedro María Anaya #1315 Poniente, Col. Industrial. Capacidad
            de habilitado, pailería y embarque a cualquier punto de la
            República.
          </p>
        </div>

        <RouterLink
          to="/contacto"
          class="bg-brand-mustard hover:brightness-105 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-xs transition-all whitespace-nowrap"
        >
          Contactar a ingeniería
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SERVICE_CATEGORIES } from "../data/services";
</script>

<style scoped></style>
