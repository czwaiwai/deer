const user = {
  state: {
    user: '',
    isLogin: false,
    token: '',
    roles: []
  },
  getters: {
    isLogin: state => state.isLogin,
    user: state => state.user,
    token: state => state.token
  },
  mutations: {
    setLogin: (state, isLogin) => {
      state.isLogin = isLogin
    },
    setUser: (state, user) => {
      state.user = user
    },
    setToken: (state, token) => {
      state.token = token
    }
  },
  actions: {}
}
export default user
