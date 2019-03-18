export default {
  data () {
    return {
      page: 1,
      pageSize: 10,
      loadType: 'loading'
    }
  },
  mounted () {
    this.page = 1
    this.list = []
  },
  methods: {
    refresh () {
      this.page = 1
      this.list = []
      this.getPageData()
    },
    toEnd () {
      this.loadType = 'end'
    },
    listProcess (list) {
      this.list = [...this.list, ...list]
      if (list.length < (this.pageSize || 10)) {
        this.loadType = 'end'
      }
      if (this.list.length === 0) {
        this.loadType = 'empty'
      }
    },
    lower () {
      if (this.isLoading) return
      console.log('真正执行了', this.isLoading)
      this.isLoading = true
      console.log('下拉出发了', this.isLoading)
      if (['empty', 'end'].includes(this.loadType)) return
      this.page++
      this.getPageData()
        .then(res => {
          console.log('我执行了---', this.isLoading)
          setTimeout(() => {
            this.isLoading = false
          }, 100)
        })
        .catch(err => {
          console.log(err)
          setTimeout(() => {
            this.isLoading = false
          })
        })
    }
  }
}
