<template>
  <div
    class="p-6 rounded-2xl bg-slate-900/99 border border-slate-800 space-y-4"
  >
    <div>
      <span
        class="text-xs text-brand-mustard font-bold uppercase tracking-wider"
      >
        Atención Directa
      </span>
      <h3 class="text-base font-bold text-white mt-05">
        {{ contactInfo.manager }}
      </h3>
      <p class="text-xs text-slate-400">
        {{ contactInfo.role }}
      </p>
    </div>

    <div
      class="pt-3 border-t border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300"
    >
      <div class="flex items-center gap-3">
        <font-awesome-icon
          icon="fa-solid fa-phone"
          class="text-brand-mustard"
        />
        <a
          :href="`tel:${contactInfo.phoneRaw}`"
          class="hover:text-white transition-colors"
        >
          {{ contactInfo.phone }}
        </a>
      </div>

      <div class="flex items-center gap-3">
        <font-awesome-icon
          icon="fa-solid fa-envelope"
          class="text-brand-mustard"
        />
        <a
          :href="`mailto:${contactInfo.email}`"
          class="hover:text-white transition-colors"
        >
          {{ contactInfo.email }}
        </a>
      </div>

      <div class="flex items-start gap-3">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="text-brand-mustard mt-1"
        />
        <span class="text-slate-400">{{ contactInfo.address }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { contactInfo } from "../data/contact";
</script>

<style scoped></style>
