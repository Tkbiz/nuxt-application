<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <ul class="col-12 social-menu">
          <li
            class="social-item">
            <a target="_blank" href="https://www.facebook.com/">
              <fa :icon="['fab','facebook-f']" class="social-icon"/>
            </a>
          </li>
          <li
            class="social-item">
            <a target="_blank" href="https://twitter.com/">
              <fa :icon="['fab','twitter']" class="social-icon"/>
            </a>
          </li>
          <li
            class="social-item">
            <a target="_blank" href="https://www.instagram.com/">
              <fa :icon="['fab','instagram']" class="social-icon"/>
            </a>
          </li>
          <li
            class="social-item">
            <a target="_blank" href="https://www.linkedin.com/">
              <fa :icon="['fab','linkedin-in']" class="social-icon"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>
