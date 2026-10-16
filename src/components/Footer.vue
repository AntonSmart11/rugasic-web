<template>
  <footer
    class="bg-slate-950 text-slate-400 border-t-2 border-brand-mustard text-xs sm:text-sm"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class="space-y-4">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <img
              src="../assets/images/logo-rugasic.webp"
              alt="Rugasic - Servicios Industriales"
              class="h-12 sm:h-12 w-auto object-contain invert"
            />
          </RouterLink>

          <p class="text-xs text-slate-400 leading-relaxed">
            Más de una década brindando soluciones en ingeniería de detalle,
            cálculo, pailería, habilitado de tuberías y suministro de
            consumibles industriales en México.
          </p>

          <div class="pt-1">
            <span
              class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] uppercase tracking-wider text-slate-300 font-semibold"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-brand-mustard"></span>
              Taller Propio en Monterrey, N.L.
            </span>
          </div>
        </div>

        <div class="space-y-3">
          <h4
            class="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2"
          >
            Especialidades
          </h4>

          <ul class="space-y-2 text-xs text-slate-400">
            <li>
              <RouterLink
                to="/servicios"
                class="hover:text-brand-mustard transition-colors"
              >
                Ingeniería de Detalle & Modelado 3D
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/servicios"
                class="hover:text-brand-mustard transition-colors"
              >
                Fabricación de Estructuras & Naves
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/servicios"
                class="hover:text-brand-mustard transition-colors"
              >
                Tuberías Acero Inoxidable Grado Alimenticio
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/servicios"
                class="hover:text-brand-mustard transition-colors"
              >
                Pailería, Soldadura & Maiobras de Izaje
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/servicios"
                class="hover:text-brand-mustard transition-colors"
              >
                Comercializadora de Suministros & EPP
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4
            class="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2"
          >
            Navegación
          </h4>

          <ul class="space-y-2 text-xs text-slate-400">
            <li v-for="link in navLinks">
              <RouterLink
                :to="link.path"
                class="hover:text-white transition-colors"
                >{{ link.name }}</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4
            class="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2"
          >
            Atención Inmediata
          </h4>
          <div class="space-y-3 text-xs text-slate-400">
            <div class="flex items-start gap-2.5">
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="text-brand-mustard mt-0.5 text-xs flex-shrink-0"
              />
              <span
                >Gral. Pedro María Anaya #1315 Poniente, Col. Industrial,
                Monterrey, N.L.</span
              >
            </div>

            <div class="flex items-center gap-2.5">
              <font-awesome-icon
                icon="fa-solid fa-phone"
                class="text-brand-mustard text-xs flex-shrink-0"
              />
              <a
                href="tel:+528124247586"
                class="hover:text-white transition-colors font-medium text-slate-300"
              >
                +52 81 2424 7586
              </a>
            </div>

            <div class="flex items-center gap-2.5">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="text-brand-mustard text-xs flex-shrink-0"
              />
              <a
                href="mailto:ventas-proyectos@rugasic.com"
                class="hover:text-white transition-colors text-slate-300 break-all"
              >
                ventas-proyectos@rugasic.com
              </a>
            </div>

            <div class="pt-2 text-[11px] text-slate-500">
              <div class="block text-slate-400 font-semibold">
                Ing. José Adrián Ruiz Martínez
              </div>
              <span>Gerente Comercial / Ventas y Proyectos</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500"
      >
        <div>
          © {{ currentYear }} <strong class="text-slate-400">RUGASIC</strong>.
          Ruiz García Servicios Industriales y Comercializadora.
        </div>
        <div class="italic text-[11px] text-slate-400">
          «Soluciones integrales para el éxito de su empresa»
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { navLinks } from "../data/navigation";

const currentYear = new Date().getFullYear();
</script>

<style scoped></style>
