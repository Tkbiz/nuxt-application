<template>
  <article class="container home">
    <h1 class="title"
        v-if="!hasCode">
      We are coming soon!
    </h1>
    <h1 class="title"
        v-else>
      You can use our product!!!
    </h1>
    <no-ssr>
      <div v-if="!hasCode">
        <h3 class="form-title">Please fill in a code to get access.</h3>
        <div class="row justify-content-center">
          <form class="col-12 col-md-8 custom-form"
                @submit.prevent="validateCode">
            <div class="col-12 col-md-8 col-lg-6 mx-auto form-group">
              <input type="text"
                     ref="checkCode"
                     class="form-control form-field">
            </div>
            <div class="col-12 col-md-8 col-lg-6 error-block"
                 v-show="$route.query.message || error">
              <div class="error-message">
                <span>Needs the correct code!</span>
              </div>
            </div>
            <button type="submit" class="btn btn-gray mb-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </no-ssr>
  </article>
</template>

<script>
export default {
  data() {
    return {
      error: false
    }
  },
  methods: {
    validateCode() {
      let code = this.$refs.checkCode.value
      !this.hasCode ? this.error = true : this.error = false
      this.$store.dispatch('checkCode', code)
      this.$store.dispatch('saveStorage', code)
      code = ''
    }
  },
  computed: {
    hasCode() {
      return this.$store.getters['hasCode']
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (JSON.parse(localStorage.getItem('codes'))) {
        let codes_storage = JSON.parse(localStorage.getItem('codes')).check_code.code
        vm.code = codes_storage
        vm.$store.dispatch('saveStorage', codes_storage)
      }
    })
  }
}
</script>
