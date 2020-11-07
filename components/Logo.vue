<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12 main-logo">
          <nuxt-link to="/">
            <img src="~assets/img/logo.svg" class="logo" alt="logo image">
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.main-logo {
  animation: 5s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
