<template>
  <div class="container">
    <div class="tabbar_pages">
      <div v-if="tabCurr === 'home'" class="page">
        <scroll-view class="page_bd" scroll-y>
          <div style="padding-top:42rpx;"></div>
          <div class="weui-flex padding15-h padding-bottom15 ">
            <div @click="routeTo('../income/list/main')" class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">收益</div>
              <div class="home_big_fs  weui-cell__ft_in-access">{{homePage.total_income}}</div>
              <div class="home_bl_small">今日：¥ {{homePage.today_income}}</div>
            </div>
            <div style="padding:15rpx;"></div>
            <div @click="routeTo('../exchange/list/main')" class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">兑换</div>
              <div class="home_big_fs weui-cell__ft_in-access">{{homePage.total_receives}}</div>
              <div class="home_bl_small">今日：{{homePage.today_receives}}</div>
            </div>
          </div>
          <div class="weui-flex padding15-h">
            <div @click="routeTo('../shopScan/list/main')" class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">到店扫码</div>
              <div class="home_big_fs weui-cell__ft_in-access">{{homePage.total_scans}}</div>
              <div class="home_bl_small">今日：{{homePage.today_scans}}</div>
            </div>
            <div style="padding:15rpx;"></div>
            <div @click="routeTo('../brand/list/main')" class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">品牌获赞</div>
              <div class="home_big_fs weui-cell__ft_in-access">{{homePage.total_likes}}</div>
              <div class="home_bl_small">今日：{{homePage.today_likes}}</div>
            </div>
          </div>
          <div class="section" style="padding-top:37rpx;">
            <div class="weui-cells__title home_title">
              <image class="home_title_icon" src="../../static/img/home/shop_title_icon.png"></image>
              <span>我的门店</span>
            </div>
            <div>
              <div class="weui-cells weui-cells_after-title card_cells">
                <div v-for="(item,index) in homePage.stores" :key="index" @click="routeToShop(item)" class="weui-cell home_cell">
                  <div class="weui-cell__hd">
                    <image class="home_cell_img" :src="item.logo || '../../static/img/logo.png'"></image>
                  </div>
                  <div class="weui-cell__bd padding-left15">
                    <p class="home_cell_title">{{item.store_name}}</p>
                    <p class="home_cell_sub_title">{{item.store_addr}}</p>
                  </div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </div>
              </div>
            </div>
          </div>
        </scroll-view>
      </div>
      <!-- <div v-if="current === 'fabu'" class="page">
        我是发布页面
    </div> -->
      <div v-if="tabCurr === 'my'" class="page my flex flex_column">
        <scroll-view class="page_bd" scroll-y>
          <div class="weui-cells route_cell weui-cells_after-title ">
            <div @click="routeTo('../userCenter/main')" class="weui-cell my_head_cell ">
              <div class="weui-cell__hd">
                <image class="my_cell_img" :src="centerPage.avatar"></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16">{{centerPage.nickname}}</p>
                <p class="fs12 main_color">主账号 {{centerPage.account}}</p>
              </div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </div>
            <div @click="routeTo('../cash/main')" class="weui-cell ">
              <div class="weui-cell__hd flex_item_center">
                <image class="img_48  vertical-middle" src="../../static/img/center/cash.png"></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="home_cell_title">我的钱包</p>
              </div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </div>
            <div @click="routeTo('../stock/main')" class="weui-cell ">
              <div class="weui-cell__hd flex_item_center">
                <image class="img_48 vertical-middle" src="../../static/img/center/stock.png"></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="home_cell_title">库存管理</p>
              </div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </div>
            <!-- <div @click="routeTo('../subAcct/main')" class="weui-cell ">
              <div class="weui-cell__hd flex_item_center">
                <image class="img_48  vertical-middle" src="../../static/img/center/account.png"></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="home_cell_title">账号管理</p>
              </div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </div> -->
            <button open-type="contact" class="btn_empty weui-cell ">
              <div class="weui-cell__hd flex_item_center">
                <image class="img_48  vertical-middle" src="../../static/img/center/contact.png"></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="home_cell_title">联系客服</p>
              </div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </button>
          </div>
        </scroll-view>
      </div>
    </div>

    <div class="tabbar_warp" style="width:100%">
      <mytabbar :value="tabCurr" @input="handleTab" :list="tabList"></mytabbar>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import card from '@/components/card'
import { merStatistics, merCenter, spaceIndex } from '@/api'
import mytabbar from '@/components/tabbar'
export default {
  data () {
    return {
      current: 'jishi',
      motto: 'Hello World1112',
      tabCurr: 'home',
      homePage: {},
      centerPage: {},
      tabList: [
        {
          name: '首页',
          value: 'home',
          url: '../../static/img/tabbar/home.png',
          urlHover: '../../static/img/tabbar/home_hover.png'
        },
        {
          name: '兑换',
          value: 'scan',
          notxt: 'true',
          url: '../../static/img/tabbar/scan.png',
          urlHover: '../../static/img/tabbar/scan.png'
        },
        {
          name: '我的',
          value: 'my',
          url: '../../static/img/tabbar/my.png',
          urlHover: '../../static/img/tabbar/my_hover.png'
        }
      ]
    }
  },

  components: {
    card,
    mytabbar
  },
  computed: {
    ...mapGetters({
      user: 'user',
      account: 'account',
      isLogin: 'isLogin'
    })
  },
  methods: {
    handleTab (val) {
      if (val === 'scan') {
        this.$wx.scanCode().then(res => {
          console.log(res, '----------')
          let url = res.result
          wx.navigateTo({ url: '/' + url })
          // wx.navigateTo({ url: '../scanExchange/main' })
          // console.log(res)
        }).catch(e => console.log(e))
      } else {
        if (val === 'home') {
          this.homePageData()
        }
        if (val === 'my') {
          this.centerPageData()
        }
        this.tabCurr = val
      }
    },
    async homePageData () {
      // mer-statistics
      let res = await merStatistics()
      let { stores, ...other } = res
      this.$store.commit('setHomeTotal', other)
      console.log('设置home')
      this.homePage = res
    },
    async centerPageData () {
      // if (!this.centerPage.user_id) {
      let res = await merCenter()
      this.centerPage = res
      // }
    },
    handleChange (e) {
      console.log(e.mp.detail)
      if (e.mp.detail.key === 'fabu') {
        const url = '../publish/main'
        return wx.navigateTo({ url })
      }
      this.current = e.mp.detail.key
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    routeToShop (item) {
      const url = '../shopManage/main?id=' + item.id
      return wx.navigateTo({ url })
    },
    routeTo (url) {
      return wx.navigateTo({ url })
    },
    async getPageData () {
      let res = await spaceIndex({
        store_id: 1
      })
      console.log(res, '------')
    },
    getUserInfo () {
      // 调用登录接口
      console.log('aaa')
      console.log('终于成功了')
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  onLoad () {
    if (!this.isLogin) {
      wx.redirectTo({ url: '../login/main' })
    } else {
      this.tabCurr = 'home'
      // 调用应用实例的方法获取全局数据
      this.homePageData()
    }
  },
  created () {
    console.log('是否登陆', this.isLogin)
  }
}
</script>

<style  scoped>
button.btn_empty:after {
  content: "";
  border: none;
  border-radius: 0;
}
button.btn_empty {
  border: none;
  border-radius: 0;
  background: transparent;
  text-align: left;
}
.home_bl {
  height: 230rpx;
  padding: 30rpx;
  box-shadow: 0 10rpx 30rpx rgba(202, 204, 220, 0.5);
  border-radius: 20rpx;
}
.home_big_fs {
  color: #162641;
  font-size: 60rpx;

  line-height: 80rpx;
  font-weight: 600;
}
.home_bl_small {
  font-size: 26rpx;
  height: 54rpx;
  padding-top: 15rpx;
  color: rgba(142, 151, 168, 1);
  line-height: 54rpx;
}
.home_bl_top_fs {
  font-size: 26rpx;
  color: rgba(142, 151, 168, 1);
}
.home_cell {
  padding: 30rpx 40rpx;
}
.home_cell_img {
  width: 90rpx;
  height: 90rpx;
  display: inline-block;
  border-radius: 50%;
}
.home_cell_title {
  font-size: 30rpx;
  color: rgba(22, 38, 65, 1);
}
.home_cell_sub_title {
  padding-top: 10rpx;
  font-size: 24rpx;
  color: rgba(142, 151, 169, 1);
}
.section .home_title {
  height: 90rpx;
  font-size: 30rpx;
  color: rgba(22, 38, 65, 1);
  line-height: 90rpx;
}
.section .home_title > span {
  vertical-align: middle;
  padding-left: 18rpx;
}
.section .home_title_icon {
  width: 42rpx;
  height: 42rpx;
  vertical-align: middle;
}
.page.my .route_cell .weui-cell {
  height: 114rpx;
}
.page.my .route_cell:before {
  border-top: 0;
}
.page.my .route_cell .my_head_cell {
  height: 237rpx;
}
.my_cell_img {
  height: 120rpx;
  width: 120rpx;
  border-radius: 100%;
}
.card_wrap {
  padding: 15px;
}
.card {
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}
.card .card_bd {
  height: 320px;
  border-radius: 10px 10px 0 0;
  padding: 20px 15px;
  background: #f0f0f0;
}
.card .card_bd .title {
  font-size: 20px;
  padding-bottom: 10px;
}
.card .card_bd .sub_title {
  font-size: 14px;
  line-height: 20px;
}
.card .card_ft {
  border-radius: 0 0 10px 10px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  padding: 0 15px;
}
.tabbar_pages {
  flex: 1;
  overflow: hidden;
}
.tabbar_pages .page {
  height: 100%;
}
.tabbar_warp {
  height: 98rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.my_hd {
  padding: 15px 15px 5px 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}
.my_op {
  font-size: 14px;
  text-align: center;
}
.icon_op {
  padding-bottom: 5px;
}

.action_list {
  padding: 15px;
}
.action_list li {
  margin-bottom: 15px;
}
.action_list li .date {
  padding-right: 15px;
}
.action_list li .position {
  padding-top: 35px;
  font-size: 14px;
}
.action_list li .date > span {
  font-size: 14px;
}
.action_list li .action_title {
  padding-left: 15px;
  font-size: 16px;
  min-height: 40px;
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4;
}
.action_list li .action_op {
  font-size: 14px;
  vertical-align: bottom;
  padding-left: 15px;
  padding-top: 15px;
}
.action_list .year_title {
  font-size: 20px;
  padding-bottom: 15px;
}
.action_list .action_img_wrap {
  width: 72px;
  height: 72px;
  background: #f0f0f0;
}
</style>
