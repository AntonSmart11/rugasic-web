<template>
  <header
    class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-t-4 border-brand-mustard border-b border-slate-200 shadow-sm transition-colors"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-18">
        <RouterLink to="/" class="flex items-center group py-2">
          <img
            src="../assets/images/logo-rugasic.webp"
            alt="Rugasic - Servicios Industriales"
            class="h-12 sm:h-12 w-auto object-contain"
          />
        </RouterLink>

        <nav
          class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600"
        >
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="hover:text-brand-slate-blue transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-slate-blue after:transition-all"
            active-class="text-brand-slate-blue font-bold after:w-full"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 text-slate-700 hover:text-brand-slate-blue focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        v-show="isMobileMenuOpen"
        class="md:hidden py-4 border-t border-slate-100 space-y-2"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="'mobile-' + link.path"
          :to="link.path"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded transition-colors"
          active-class="bg-slate-100 text-brand-slate-blue font-bold"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { navLinks } from "../data/navigation";

const isMobileMenuOpen = ref(false);
</script>

<style scoped></style>
