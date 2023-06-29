<script setup>

</script>

<template>
    <section id="hero" class="container-fluid d-flex">
        <article class="container text-light my-5 d-flex justify-content-center align-items-end" style="max-width: 1200px">
            <div class="container">
                <div class="row d-flex flex-column justify-content-center align-items-center">
                    <h3 class="h3 mb-3 text-center">
                        <strong>Guidelines.</strong>
                    </h3>
                    <p class="lead text-center">
                        Guidelines for those who want to build a "Metaverse MAPOD4D".
                    </p>
                    <!-- buttons -->
                    <div class="d-flex justify-content-center">
                        <a class="btn btn-primary btn-lg" href="/multiverse">Metaverses Download</a>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped>
section#hero {
    height: 850px;
    background-image: url('../../assets/img/hero_site.png');
    background-position: center;
    background-color: #06aa00;
}

@media all and (max-width: 1200px) {
    section#hero {
        height: 650px;
    }
}
</style>