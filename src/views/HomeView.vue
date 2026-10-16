<template>
  <div>
    <section
      class="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800"
    >
      <div
        class="absolute inset-0 bg-cover bg-center grayscale opacity-45 mix-blend-luminosity scale-105"
        :style="{ backgroundImage: `url(${heroImage}) ` }"
      ></div>

      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent pointer-events-none"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"
      ></div>

      <div
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <div class="max-w-3xl space-y-6">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-700 bg-slate-850/80 text-xs font-semibold tracking-wider uppercase text-slate-300"
          >
            <span class="w-1.5 h-1.5 bg-brand-mustard rounded-full"></span>
            Servicios Industriales & Comercializadora
          </div>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Ingeniería de detalle, construcción y montaje industrial
          </h1>

          <p
            class="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
          >
            Más de una década brindando soluciones integrales en cálculo
            estructural, pailería, habilitado de tuberías y suministro de
            consumibles técnicos para plantas de procesos en México.
          </p>

          <div class="pt-4 flex flex-wrap gap-4 items-center">
            <RouterLink
              to="/contacto"
              class="inline-flex items-center gap-2 bg-brand-mustard text-slate-950 font-bold text-sm px-6 py-3.5 rounded shadow-sm hover:brightness-105 transition-all"
            >
              <span>Cotizar Proyecto</span>
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="text-xs"
              />
            </RouterLink>

            <RouterLink
              to="/servicios"
              class="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium text-sm px-6 py-3.5 rounded transition-all"
            >
              <span>Ver Capacidades Técnicas</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <ClientsBanner />

    <ServicesSection />

    <FeaturedProjectsSection />

    <WhyUsSection />

    <ContactSection />
  </div>
</template>

<script setup>
import heroImage from "../assets/images/hero-image.webp";
import ClientsBanner from "../components/ClientsBanner.vue";
import ServicesSection from "../components/ServicesSection.vue";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection.vue";
import WhyUsSection from "../components/WhyUsSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<style scoped></style>
