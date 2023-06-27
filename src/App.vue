<script setup>
import Navbar from './components/molecules/Navbar.vue';
</script>

<template>
  <div class="text-dark d-flex flex-column">
    <Navbar />
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <section class="py-3 w-100">
        <div class="d-flex justify-content-center">
          <a class="btn btn-outline-primary btn-lg" href="/multiverse.html">Metaverses Download</a>
        </div>

      </section>
      <!-- carosello -->
      <div id="carouselExampleCaptions" class="carousel slide bg-dark" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./assets/img/hero_img1_s.png" class="d-block w-100" alt="Main Menu">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h2">Main Menù</h5>
              <p>MAPOD4D metaverse main menù</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/img/hero_img2_s.png" class="d-block w-100" alt="Main Menu">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h2">Anthropology Metaverse</h5>
              <p>The ancient jaw acquired using structured light scanner </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/img/hero_img3_s.png" class="d-block w-100" alt="Main Menu">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h2 text-light">Cultural Heritage Metaverse</h5>
              <p>GAM - GOLASECCA ARCHEOLOGIA MULTIMEDIALE</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- sezione 1 -->
      <section class="container-fluid d-flex align-items-center" style="background-color: var(--blue-mapod4d);">
        <article class="container text-light my-5" style="max-width: 1200px">
          <div class="container">
            <div class="row flex-column flex-md-row">
              <div class="col d-flex flex-column justify-content-center">
                <h3 class="h3 mb-5"><strong>The multiverse of metaverses you have been waiting for.</strong></h3>
                <p class="lead">The platform and framework based on GODOT engine and Multi Analysis PrObe Drone to
                  create metaverses for Anthropology, Archaeology and Cultural Heritage.</p>
                <p class="lead">
                  Project based on an idea of Roberto Taglioretti with the contributions of <a class="text-light"
                    href="./project.html#founders">this community</a> and built using FLOSS.
                </p>
              </div>
              <div class="col text-lg-end text-center">
                <img src="./assets/img/mapod_new_render_scontornato.png" alt="Sonda Mapod">
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
    <!-- Footer -->
    <footer class="text-center text-lg-start text-white" style="background-color: #45526e">
      <!-- Grid container -->
      <div class="container p-4 pb-0">

        <!-- Section: Cookies -->
        <section class="p-2 pt-0">
          <div class="container bg-dark text-center">
            <p>
              This website does not use cookies.
            </p>
          </div>
        </section>
        <!-- Section: Cookies -->

        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                Project Managers
              </h6>
              <p>
                <b>Roberto Taglioretti</b><br>Project developing
              </p>
              <p>
                <b>Alessandra Mazzucchi</b><br>Anthropology and contents
              </p>
              <p>
                <b>Serenella Saccon</b><br>Legals
              </p>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Supporters</h6>
              <p>
                <a class="text-light" href="https://www.archeostec.it/" target="_blank" rel="noopener">ArcheOs Tec</a>
              </p>
              <p>
                <a class="text-light" href="https://www.progettosl.eu/" target="_blank" rel="noopener">Progettosl</a>
              </p>
              <p>
                <a class="text-light" href="https://www.osteoarc.it/" target="_blank" rel="noopener">Osteoarc - APS</a>
              </p>
            </div>
            <!-- Grid column -->

            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <hr class="w-100 clearfix d-md-none" />

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contacts</h6>
              <p><i class="fas fa-home mr-3"></i> Gornate Olona Via Matteotti 7 - C/O ArcheOs Tec</p>
              <p><i class="fas fa-envelope mr-3"></i> r.taglioretti@archeostec.it</p>
              <p><i class="fas fa-phone mr-3"></i> + 39 331 577 6186</p>
            </div>
            <!-- Grid column -->

          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->

        <hr class="my-3">

        <!-- Section: Copyright -->
        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <!-- Grid column -->
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <!-- Copyright -->
              <div class="p-3">
                <p>
                  Authors: Roberto Taglioretti and <a class="text-light" href="https://github.com/mapod4d" target="_blank"
                    rel="noopener">contributors</a>.<br>
                  Website developer: Filippo Di Marco <a class="text-light"
                    href="https://www.linkedin.com/in/filippo-di-marco-703649168/" target="_blank"
                    rel="noopener">LinkedIn</a>.<br>
                </p>
              </div>
              <!-- Copyright -->
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

              <!-- Discord -->
              <a class="btn btn-outline-light btn-floating m-1 text-white" role="button"
                href="https://discord.gg/ns4GGuVG5Y" target="_blank"><i class="fab fa-discord"></i></a>

              <!-- Facebook -->
              <a class="btn btn-outline-light btn-floating m-1 text-white" role="button"
                href="https://www.facebook.com/mapod4d" target="_blank"><i class="fab fa-facebook-f"></i></a>

              <!-- Youtube -->
              <a class="btn btn-outline-light btn-floating m-1 text-white" role="button"
                href="https://www.youtube.com/@mapod4d" target="_blank"><i class="fab fa-youtube"></i></a>

              <!-- Twitch -->
              <a class="btn btn-outline-light btn-floating m-1 text-white" role="button"
                href="https://www.twitch.tv/mapod4d" target="_blank"><i class="fab fa-twitch"></i></a>


              <!-- GitHub -->
              <a class="btn btn-outline-light btn-floating m-1 text-white" role="button"
                href="https://github.com/mapod4d/" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            <!-- Grid column -->
          </div>
        </section>
        <!-- Section: Copyright -->

      </div>
      <!-- Grid container -->
    </footer>
    <!-- Footer -->

  </div>
</template>

<style scoped>
.carousel-item img {
  opacity: 0.8;
}

.carousel-caption {
  text-shadow: 2px 2px 5px #000;
}
</style>
