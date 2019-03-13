const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    }
  },
  actions: {

  }
}
export default user
