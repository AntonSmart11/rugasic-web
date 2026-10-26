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

          <ContactInfoCard />
        </div>

        <div class="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from "./ContactForm.vue";
import ContactInfoCard from "./ContactInfoCard.vue";
</script>

<style scoped></style>
