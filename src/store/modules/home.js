const home = {
  state: {
    homeTotal: {},
    parentData: {}
  },
  getters: {
    parentData: state => state.parentData,
    homeTotal: state => state.homeTotal
  },
  mutations: {
    parentData (state, item) {
      state.parentData = item
    },
    setHomeTotal (state, total) {
      state.homeTotal = total
    }
  },
  actions: {}
}
export default home
