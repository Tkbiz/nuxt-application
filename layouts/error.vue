<template>
  <section class="container pt-4 mb-4">
    <div class="row justify-content-center align-items-center">
      <h1 class="col-12 title">
        Error 404
      </h1>
      <div class="col-12 text-center">
        <nuxt-link to="/" class="link">
          Home
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
.title {
  font: 56px 'orelo-medium';
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 8px red;
  text-align: center;
}

.link {
  text-decoration: underline;
  font: 28px 'orelo';
  color: #fff;
}
</style>
