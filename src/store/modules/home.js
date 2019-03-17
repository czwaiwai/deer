const home = {
  state: {
    homeTotal: {}
  },
  getters: {
    homeTotal: state => state.homeTotal
  },
  mutations: {
    setHomeTotal (state, total) {
      state.homeTotal = total
    }
  },
  actions: {}
}
export default home
