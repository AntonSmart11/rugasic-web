<template>
  <section
    id="contacto"
    class="py-20 lg:py-24 bg-brand-dark text-white border-t border-slate-800 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 space-y-6">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800/80 border border-slate-700 text-xs font-semibold uppercase tracking-wider text-slate-300"
          >
            <span class="w-1.5 h-1.5 bg-brand-mustard rounded-full"></span>
            Atención a Proyectos Industriales
          </div>

          <h2
            class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
          >
            ¿Tienes un proyecto en puerta? <br />
            <span class="text-brand-mustard"
              >Cotice con nuestro equipo técnico.</span
            >
          </h2>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Brindamos asesoría en ingeniería de detalle, cálculo de estructuras,
            montaje de tuberías sanitarias o proveeduría de suministros con
            entrega programada.
          </p>

          <div
            class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4"
          >
            <div>
              <span
                class="text-xs text-brand-mustard font-bold uppercase tracking-wider"
                >Atención Directa</span
              >
              <h3 class="text-base font-bold text-white mt-0.5">
                Ing. José Adrián Ruiz Martínez
              </h3>
              <p class="text-xs text-slate-400">
                Gerente Comercial • Ventas y Proyectos
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
                  href="tel:+528124247586"
                  class="hover:text-white transition-colors"
                  >+52 81 2424 7586</a
                >
              </div>
              <div class="flex items-center gap-3">
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  class="text-brand-mustard"
                />
                <a
                  href="mailto:ventas-proyectos@rugasic.com"
                  class="hover:text-white transition-colors"
                  >ventas-proyectos@rugasic.com</a
                >
              </div>
              <div class="flex items-start gap-3">
                <font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  class="text-brand-mustard mt-1"
                />
                <span class="text-slate-400"
                  >Oficina y Taller: Gral. Pedro María Anaya #1315 Pte., Col.
                  Industrial, Monterrey, N.L.</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div
            class="bg-white text-slate-800 p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-brand-mustard"
          >
            <div v-if="isSubmitted" class="py-12 text-center space-y-3">
              <font-awesome-icon
                icon="check-circle"
                class="text-brand-mustard text-4xl"
              />
              <h3 class="text-2xl font-bold text-slate-900">
                Solicitud Enviada con Éxito
              </h3>
              <p class="text-sm text-slate-600 max-w-md mx-auto">
                Hemos recibido sus especificaciones. Un ingeniero de proyectos
                se comunicará a la brevedad para dar seguimiento formal a su
                cotización.
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
                    >Nombre Completo *</label
                  >
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
                    >Empresa / Razón Social *</label
                  >
                  <input
                    v-model="form.company"
                    required
                    type="text"
                    class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >Correo Electrónico *</label
                  >
                  <input
                    v-model="form.email"
                    required
                    type="email"
                    class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >Teléfono Directo *</label
                  >
                  <input
                    v-model="form.phone"
                    required
                    type="tel"
                    class="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-mustard focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >Alcance o Requerimiento Técnico *</label
                >
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
                class="w-full bg-brand-mustard text-brand-dark font-bold text-sm py-3.5 px-6 rounded-lg shadow-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Enviar Requerimiento para Cotización</span>
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right"
                  class="text-xs"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
};
</script>

<style scoped></style>
