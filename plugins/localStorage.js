import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      storage: window.localStorage,
      key: 'codes',
      paths: [
        'check_code.code'
      ]
    })(store)
  })
}
