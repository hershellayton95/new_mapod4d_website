<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Social from './Socials.vue'
const menu = ref([
  { title: "Home Page", href: '/' },
  { title: "Project", href: '/project' },
  { title: "Out in the World", href: '/outintheworld' },
  { title: "Showcase", href: '/showcase' },
  { title: "Multiverse", href: '/multiverse' },
  { title: "Governance", href: '/governance' }
])
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid px-5" style="max-width: 1400px;">
      <div class="d-flex align-items-center">
        <a class="navbar-brand" href="./index.html">
          <img src="../../assets/img/mapod_new_render_scontornato.png" alt="" width="50" height="50"
            class="d-inline-block align-text-top">
        </a>
        <a class="navbar-brand fw-semibold" style="font-weight: 700; color:#4f41d1; padding-bottom: 10px;"
          href="./index.html">MAPOD4D</a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
        <ul class="navbar-nav gap-lg-3" style="font-size: 1.2rem; font-weight:bold;">
          <li v-for="(page, i) in menu" :key="i + item" class="nav-item text-center text-uppercase text-nowrap">
            <RouterLink class="nav-link fw-normal fs-6 text-primary" aria-current="page" :to="page.href">{{ page.title }}
            </RouterLink>
          </li>
        </ul>
        <div id="socials" class="d-xl-flex gap-2 d-none ms-3">
          <Social />
        </div>
      </div>
    </div>
  </nav>
  <div id="socials" class="d-flex gap-2 d-xl-none justify-content-center my-2">
    <Social />
  </div>
</template>

<style scoped>
.fs-6 {
  font-size: 0.9rem !important;
}
</style>