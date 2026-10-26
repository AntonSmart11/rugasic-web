<template>
  <main class="min-h-screen bg-slate-50 text-slate-800 pb-20">
    <header
      class="bg-brand-dark text-white border-b border-slate-800 py-16 relative overflow-hidden"
    >
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-5xl font-black text-white">
          Contacto y Licitaciones
        </h1>
        <p class="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl">
          Atención técnica especializada para el desarrollo de obras, montajes
          electromecánicos y proveeduría a planta.
        </p>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside class="lg:col-span-5 space-y-6">
          <ContactInfoCard />

          <div
            class="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 shadow-md"
          >
            <iframe
              title="Ubicación RUGASIC Monterrey"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6695277150495!2d-100.3238676!3d25.6987413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662957b4943fcf1%3A0x6b77e69622d1bc4!2sGral.%20Pedro%20Mar%C3%ADa%20Anaya%201315%2C%20Industrial%2C%2064440%20Monterrey%2C%20N.L.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              class="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            ></iframe>
          </div>
        </aside>

        <section class="lg:col-span-7">
          <ContactForm />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import ContactForm from "../components/ContactForm.vue";
import ContactInfoCard from "../components/ContactInfoCard.vue";
</script>

<style scoped></style>
