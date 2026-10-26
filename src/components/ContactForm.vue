<template>
  <div
    class="bg-white text-slate-800 p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-brand-mustard"
  >
    <div v-if="isSubmitted" class="py-12 text-center space-y-3">
      <font-awesome-icon
        icon="fa-check-circle"
        class="text-brand-mustard text-4xl"
      />
      <h3 class="text-2xl font-bold text-slate-900">
        Solicitud Enviada con Éxito
      </h3>
      <p class="text-sm text-slate-600 max-w-md mx-auto">
        Hemos recibido sus especificaciones. Un ingeniero de proyectos se
        comunicará a la brevedad para dar seguimiento formal a su cotización.
      </p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="space-y-4">
      <div class="mb-2">
        <h3 class="text-xl font-bold text-slate-900">
          Solicitud de Cotización y Asesoría
        </h3>
        <p class="text-xs text-slate-500">
          Complete los datos y responderemos con una propuesta formal de
          trabajo.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
          >
            Nombre Completo *
          </label>
          <input
            v-model="form.name"
            required
            type="text"
            class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label
            class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
          >
            Empresa / Razón social *
          </label>
          <input
            type="text"
            v-model="form.company"
            required
            class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
          >
            Correo Electrónico *
          </label>
          <input
            type="text"
            v-model="form.email"
            required
            class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label
            class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
          >
            Teléfono Directo *
          </label>
          <input
            type="tel"
            v-model="form.phone"
            required
            class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label
          class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
        >
          Alcance o Requerimiento Técnico *
        </label>
        <textarea
          v-model="form.message"
          rows="3"
          required
          class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
          placeholder="Describa brevemente el tipo de obra, dimensiones, materiales o partidas de insumos requeridas..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-brand-mustard text-brand-dark font-bold text-sm py-3.5 px-6 rounded-lg shadow-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>Enviar Requerimiento para Cotización</span>
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-xs" />
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
};
</script>

<style scoped></style>
