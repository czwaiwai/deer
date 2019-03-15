const user = {
  state: {
    user: '',
    account: '', // 记住登陆账号
    isLogin: false,
    token: '',
    roles: []
  },
  getters: {
    isLogin: state => state.isLogin,
    user: state => state.user,
    account: state => state.account,
    token: state => state.token
  },
  mutations: {
    setAccount: (state, account) => {
      state.account = account
    },
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
