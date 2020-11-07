<template>
  <div>
    <Logo/>
    <nav class="nav-menu">
      <div class="container">
        <div class="row">
          <ul class="col-12 nav-list">
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link about" to="/about">
                <fa class="nav-icon" :icon="['fas','info']"/>
                About Us
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link solutions" to="/solution">
                <fa class="nav-icon" :icon="['fas','key']"/>
                Solutions
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link active-class="active" class="nav-link contact-us" to="/contact">
                <fa class="nav-icon" :icon="['fas','phone-alt']"/>
                Contact Us
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "~/components/Logo"

export default {
  components: {
    Logo
  }
}
</script>
