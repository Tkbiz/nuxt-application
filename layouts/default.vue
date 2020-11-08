<template>
  <div class="body-wrapper">
    <div class="bg-layer"></div>
    <img src="~assets/img/main-bg.jpg" class="bg-image" alt="background image">
    <Navbar/>
    <Nuxt class="content-wrapper"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
