<template>
  <main class="min-h-screen bg-slate-50 text-slate-800 pb-20">
    <header
      class="bg-brand-dark text-white border-b border-slate-800 py-14 sm:py-16 relative overflow-hidden"
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
            Registro de Obras y Ejecuciones
          </div>

          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Portafolio de Proyectos Industriales
          </h1>

          <p
            class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
          >
            Evidencia fotográfica de obras concluidas, montaje de estructuras,
            sistemas de tuberías y servicios de supervisión técnica en sitio.
          </p>
        </div>
      </div>
    </header>

    <section
      class="sticky top-18 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-center gap-2 sm:gap-3 overflow-x-auto py-3.5 no-scrollbar"
        >
          <button
            v-for="cat in PROJECT_CATEGORIES"
            :key="cat.id"
            @click="activeFilter = cat.id"
            :class="[
              'px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer',
              activeFilter === cat.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900',
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div
              class="relative h-56 w-full overflow-hidden bg-slate-950 cursor-zoom-in select-none"
              @click="openPreview(project)"
            >
              <img
                :src="project.image"
                :alt="project.alt"
                class="w-full h-full object-cover object-bottom opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer"
                loading="lazy"
                width="1200"
                height="720"
              />
              <span
                class="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              >
                {{ project.categoryLabel }}
              </span>

              <div
                class="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
              >
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <svg
                    class="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                  <span>Ampliar foto</span>
                </span>
              </div>
            </div>

            <div class="p-6">
              <div
                class="flex items-center justify-between text-xs text-slate-500 mb-2"
              >
                <span class="font-bold text-brand-mustard">{{
                  project.client
                }}</span>
                <span>{{ project.location }}</span>
              </div>

              <h2
                class="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-slate-blue transition-colors mb-2.5"
              >
                {{ project.title }}
              </h2>

              <p
                class="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4"
              >
                {{ project.scope }}
              </p>

              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="(tag, tIdx) in project.tags"
                  :key="tIdx"
                  class="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div
        class="mt-16 bg-brand-dark text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-brand-mustard"
      >
        <div>
          <h3 class="text-xl sm:text-2xl font-bold">
            ¿Requiere información técnica o referencias de obra?
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">
            Podemos proporcionarle el catálogo de conceptos o coordinar una
            visita técnica a planta o taller.
          </p>
        </div>

        <RouterLink
          to="/contacto"
          class="bg-brand-mustard hover:brightness-105 text-brand-dark font-bold text-sm px-7 py-3 rounded-lg transition-all whitespace-nowrap"
        >
          Contactar con personal
        </RouterLink>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activePreview"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/90 backdrop-blur-md"
          @click.self="closePreview"
        >
          <button
            @click="closePreview"
            class="absolute top-5 right-5 sm:top-7 sm:right-7 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 p-2.5 rounded-full transition-colors z-10 focus:outline-hidden cursor-pointer"
            title="Cerrar vista previa (Esc)"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            class="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
          >
            <div
              class="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
            >
              <img
                :src="activePreview.image"
                :alt="activePreview.alt"
                class="w-auto h-auto max-h-[75vh] max-w-full object-contain mx-auto"
              />

              <div
                class="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left"
              >
                <div>
                  <h3 class="text-sm font-bold text-white">
                    {{ activePreview.title }}
                  </h3>
                  <p class="text-xs text-slate-400">
                    {{ activePreview.client }} -
                    {{ activePreview.location || "Proyecto Industrial" }}
                  </p>
                </div>
                <span
                  class="text-[11px] font-semibold text-brand-mustard self-start sm:self-auto bg-slate-800 px-2.5 py-1 rounded"
                >
                  {{ activePreview.categoryLabel }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { PROJECT_CATEGORIES, ALL_PROJECTS } from "../data/projects";

const activeFilter = ref("todos");
const activePreview = ref(null);

const filteredProjects = computed(() => {
  if (activeFilter.value === "todos") {
    return ALL_PROJECTS;
  }

  return ALL_PROJECTS.filter((p) => p.category === activeFilter.value);
});

const openPreview = (project) => {
  activePreview.value = project;
  document.body.style.overflow = "hidden";
};

const closePreview = (project) => {
  activePreview.value = null;
  document.body.style.overflow = "";
};

const handleKeyDown = (e) => {
  if (e.key === "Escape" && activePreview.value) {
    closePreview();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
