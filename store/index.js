import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import check_code from '@/store/modules/check_code'

export default () => new Vuex.Store({
  modules: {
    check_code
  }
})
