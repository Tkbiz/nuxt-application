<template>
  <div class="body-wrapper">
    <div class="bg-layer"></div>
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
