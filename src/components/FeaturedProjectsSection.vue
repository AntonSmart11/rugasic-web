<template>
  <section id="proyectos" class="w-full bg-slate-900 border-t border-slate-800">
    <div
      class="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
    >
      <div>
        <span
          class="text-[11px] font-bold uppercase tracking-widest text-brand-mustard"
        >
          Casos de Éxito
        </span>
        <h2 class="text-2xl sm:text-3xl font-black text-white mt-1">
          Proyectos y Obras Destacadas
        </h2>
      </div>

      <router-link
        to="/proyectos"
        class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-mustard transition-colors whitespace-nowrap"
      >
        <span>Ver todas las obras</span>
        <font-awesome-icon icon="arrow-right" class="text-[10px]" />
      </router-link>
    </div>

    <div class="w-full flex flex-col">
      <article
        v-for="(project, index) in FEATURED_PROJECTS"
        :key="index"
        class="w-full grid grid-cols-1 lg:grid-cols-2 lg:h-75 border-b border-slate-800"
      >
        <div
          :class="[
            'relative w-full h-56 lg:h-full overflow-hidden bg-slate-950 group',
            index % 2 === 1 ? 'lg:order-2' : 'lg:order-1',
          ]"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"
          ></div>
        </div>

        <div
          :class="[
            'w-full flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-6 lg:py-0 bg-brand-dark',
            index % 2 === 1 ? 'lg:order-1' : 'lg:order-2',
          ]"
        >
          <div class="max-w-lg">
            <!-- Metadata en una sola línea -->
            <div
              class="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2"
            >
              <span class="text-brand-mustard uppercase tracking-wider">{{
                project.category
              }}</span>
              <span>•</span>
              <span class="text-slate-300">{{ project.client }}</span>
              <span>•</span>
              <span>{{ project.location }}</span>
            </div>

            <h3
              class="text-xl lg:text-2xl font-bold text-white leading-snug mb-2"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2"
            >
              {{ project.description }}
            </p>

            <router-link
              to="/proyectos"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-mustard hover:text-white transition-colors"
            >
              <span>Ver Ficha Técnica</span>
              <font-awesome-icon icon="arrow-right" class="text-[10px]" />
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { FEATURED_PROJECTS } from "../data/projects";
</script>

<style scoped></style>
