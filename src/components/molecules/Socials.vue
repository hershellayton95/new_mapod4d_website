<script setup>
import { ref } from 'vue'
const socials = ref([
  { social: "fab fa-whatsapp", href: 'https://chat.whatsapp.com/FdmQ0yq7Sk2HiPmZCE4JUP' },
  { social: "fab fa-discord", href: 'https://discord.gg/ns4GGuVG5Y' },
  { social: "fab fa-facebook", href: 'https://www.facebook.com/mapod4d' },
  { social: "fab fa-youtube", href: 'https://www.youtube.com/@mapod4d' },
  { social: "fab fa-github", href: 'https://github.com/mapod4d/' },
  { social: "fab fa-twitch", href: 'https://www.twitch.tv/mapod4d' }
])
</script>

<template>
  <a v-for="(item, i) in  socials " :key="i + item"
    class="btn btn-outline-dark fs-6 d-flex justify-content-center align-items-center" role="button" :href="item.href"
    target="_blank">
    <i :class="item.social"></i>
  </a>
</template>

<style scoped>
div#socials>a {
  width: 35px;
  height: 35px;
  border: 1.5px solid #000000;
  border-radius: 17.5px;
  cursor: pointer;
  color: #000000;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

div#socials>a:hover {
  background-color: #000000;
  color: #ffffff;
}

div#socials>a:focus {
  color: #ffffff !important;
}
</style>