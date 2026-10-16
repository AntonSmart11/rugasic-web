<template>
  <main class="min-h-screen bg-slate-50 text-slate-800 pb-20">
    <header
      class="bg-brand-dark text-white border-b border-slate-800 py-8 lg:py-12 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-3">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-700 bg-slate-900/80 text-xs font-semibold tracking-wider uppercase text-slate-300"
          >
            <span class="w-1.5 h-1.5 bg-brand-mustard rounded-full"></span>
            Capacidades Operativas & Suministro
          </div>
          <h1
            class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Servicios Industriales y Proveeduría Técnica
          </h1>
          <p
            class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
          >
            Soluciones integrales que abarcan desde el cálculo y diseño en
            gabinete, hasta la habilitación en taller, montaje en campo y abasto
            directo de insumos.
          </p>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
      <section
        v-for="(section, index) in SERVICE_CATEGORIES"
        :key="index"
        :id="index"
        class="scroll-mt-24 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs"
      >
        <div
          class="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div
              class="text-xs font-bold uppercase tracking-wider text-brand-mustard block md-1"
            >
              {{ section.badge }}
            </div>
            <h2
              class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              {{ section.title }}
            </h2>
            <p class="text-sm text-slate-600 mt-1 max-w-2xl">
              {{ section.description }}
            </p>
          </div>

          <RouterLink
            to="/contacto"
            class="inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-slate-blue text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>Cotizar División</span>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-[10px]"
            />
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div
            :class="[
              'lg:col-span-4 relative rounded-xl overflow-hidden min-h-[260px] lg:min-h-full bg-slate-950 group shadow-xs',
              index % 2 === 1 ? 'lg:order-2' : 'lg:order-1',
            ]"
          >
            <img
              :src="section.bannerImage"
              :alt="section.bannerAlt"
              class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
            ></div>

            <div class="absolute bottom-4 left-4 right-4">
              <span
                class="text-[11px] font-bold uppercase tracking-wider text-brand-mustard block"
              >
                Área Especializada
              </span>
              <p class="text-xs text-slate-200 font-medium">
                {{ section.title }}
              </p>
            </div>
          </div>

          <div
            :class="[
              'lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4',
              index % 2 === 1 ? 'lg:order-1' : 'lg:order-2',
            ]"
          >
            <article
              v-for="(item, idx) in section.capabilitiesDetail"
              :key="idx"
              class="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-start"
            >
              <div class="flex items-center gap-2.5 mb-2">
                <span
                  class="w-6 h-6 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </span>

                <h3
                  class="text-xs sm:text-sm font-bold text-slate-900 leading-snug"
                >
                  {{ item.name }}
                </h3>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed pl-8.5">
                {{ item.detail }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <div
        class="bg-brand-dark text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-brand-mustard"
      >
        <div>
          <h3 class="text-xl sm:text-2xl font-bold">
            ¿Requiere una propuesta técnica o lista de partidas?
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">
            Envíenos sus especificaciones, planos o volumen de materiales para
            una cotización formal.
          </p>
        </div>
        <RouterLink
          to="/contacto"
          class="bg-brand-mustard hover:brightness-105 text-brand-dark font-bold text-sm px-7 py-3 rounded-lg transition-all whitespace-nowrap"
        >
          Contactar a ingeniería
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { SERVICE_CATEGORIES } from "../data/services";
</script>

<style scoped></style>
