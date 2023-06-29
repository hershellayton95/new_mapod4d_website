<script setup>
import Hero from '../molecules/Hero.vue';
</script>

<template>
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
        <!-- carosello -->
        <Hero />
        <!-- sezione 1 -->
        <section class="container-fluid d-flex align-items-center" style="background-color: var(--blue-mapod4d);">
            <article class="container text-light my-5" style="max-width: 1200px">
                <div class="container">
                    <div class="row flex-column flex-md-row">
                        <div class="col d-flex flex-column justify-content-center">
                            <h3 class="h3 mb-5"><strong>The multiverse of metaverses you have been waiting for.</strong>
                            </h3>
                            <p class="lead">The platform and framework based on GODOT engine and Multi Analysis PrObe
                                Drone to
                                create metaverses for Anthropology, Archaeology and Cultural Heritage.</p>
                            <p class="lead">
                                Project based on an idea of Roberto Taglioretti with the contributions of <a
                                    class="text-light" href="./project.html#founders">this community</a> and built using
                                FLOSS.
                            </p>
                        </div>
                        <div class="col text-lg-end text-center">
                            <img src="../../assets/img/mapod_new_render_scontornato.png" alt="Sonda Mapod">
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <!-- sezione 2 -->
        <section class="container-fluid">
            <article class="container mt-5 d-flex align-items-center py-5" style="max-width: 1200px;">
                <div class="container text-center">
                    <div>
                        <h3 class="h1 mb-3"><strong>Stay tuned!</strong></h3>
                        <p class="lead" style="font-size: 2.5rem;">Core version 2 - Alpha launcher <a
                                href="https://github.com/mapod4d/mapod4d_launcher_c2" target="_blank">here</a></p>
                    </div>

                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
.carousel-item img {
    opacity: 0.8;
}

.carousel-caption {
    text-shadow: 2px 2px 5px #000;
}
</style>
