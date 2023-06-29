<script setup>
import Navbar from '../molecules/Navbar.vue'
import Footer from '../molecules/Footer.vue';

</script>

<template>
    <div class="text-dark d-flex flex-column">
        <Navbar />
        <!-- main -->
        <slot />

        <Footer />
    </div>
</template>

<style></style>