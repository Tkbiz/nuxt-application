export default {
  actions: {
    async checkCode({commit}, params) {
      const code = await this.$axios.$get('https://my-json-server.typicode.com/typicode/demo/profile')
        .then(response => {
          if (response.name === params) {
            commit('setCode', params)
          }
          return response
        })
        .catch(error => error.data)
    },
    saveStorage({commit}, param) {
      commit('setStorage', param)
    }
  },

  mutations: {
    setCode(state, code) {
      state.code = code
    },
    setStorage(state, query) {
      state.code = query || null
    }
  },

  getters: {
    hasCode: state => !!state.code
  },

  state: {
    code: null,
  }
}
