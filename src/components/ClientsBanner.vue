<template>
  <section
    class="bg-slate-50 border-b border-slate-200/80 py-14 overflow-hidden select-none"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <h2
        class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800"
      >
        Con el respaldo de
        <span class="text-brand-mustard">más de 20 clientes</span> industriales
      </h2>
      <p
        class="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-2"
      >
        Empresas del sector petroquímico, energético y manufactura que avalan
        nuestra experiencia
      </p>
    </div>

    <div class="relative w-full overflow-hidden marquee-container group">
      <div
        class="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"
      ></div>

      <div
        class="flex gap-4 w-max marquee-track group-hover:[animation-play-state:paused]"
      >
        <div
          v-for="(client, index) in IMAGES_CLIENTS"
          :key="'a-' + index"
          class="w-40 sm:w-48 h-24 bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-center shadow-xs transition-shadow duration-200 hover:shadow-md flex-shrink-0"
        >
          <img
            :src="client.src"
            :alt="client.alt"
            class="max-h-12 max-w-[120px] w-auto h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div
          v-for="(client, index) in IMAGES_CLIENTS"
          :key="'b-' + index"
          class="w-40 sm:w-48 h-24 bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-center shadow-xs transition-shadow duration-200 hover:shadow-md flex-shrink-0"
        >
          <img
            :src="client.src"
            :alt="client.alt"
            class="max-h-12 max-w-[120px] w-auto h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div
        class="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { IMAGES_CLIENTS } from "../data/clients";
</script>

<style scoped>
.marquee-track {
  animation: marquee 35s linear infinite;
  display: flex;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
