<template>
  <div class="container">
    <div class="tabbar_pages">
      <div v-if="tabCurr === 'home'"
           class="page">
        <scroll-view scroll-y
                     style="height:100%;">
          <div style="padding-top:42rpx;"></div>
          <div class="weui-flex padding15-h padding-bottom15 ">
            <div @click="routeTo('../income/list/main')"
                 class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">收益</div>
              <div class="home_big_fs">1000</div>
              <div class="home_bl_small">今日：¥ 30</div>
            </div>
            <div style="padding:15rpx;"></div>
            <div @click="routeTo('../income/list/main')"
                 class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">兑换</div>
              <div class="home_big_fs">120</div>
              <div class="home_bl_small">今日：10</div>
            </div>
          </div>
          <div class="weui-flex padding15-h">
            <div @click="routeTo('../income/list/main')"
                 class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">到店扫码</div>
              <div class="home_big_fs">1000</div>
              <div class="home_bl_small">今日：¥ 30</div>
            </div>
            <div style="padding:15rpx;"></div>
            <div @click="routeTo('../income/list/main')"
                 class="weui-flex__item home_bl">
              <div class="home_bl_top_fs">品牌获赞</div>
              <div class="home_big_fs">120</div>
              <div class="home_bl_small">今日：10</div>
            </div>
          </div>
          <div class="section"
               style="padding-top:37rpx;">
            <div class="weui-cells__title home_title">
              <image class="home_title_icon"
                     src="../../static/img/home/shop_title_icon.png"></image>
              <span>我的门店</span>
            </div>
            <div>
              <div class="weui-cells weui-cells_after-title card_cells">
                <div @click="routeToShop"
                     class="weui-cell home_cell">
                  <div class="weui-cell__hd">
                    <image class="home_cell_img"
                           src="../../static/img/home/shop_icon.png"></image>
                  </div>
                  <div class="weui-cell__bd padding-left15">
                    <p class="home_cell_title">鹿角巷天河北门店</p>
                    <p class="home_cell_sub_title">天河区天河路北路99号 B302</p>
                  </div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </div>
                <div @click="routeToShop"
                     class="weui-cell home_cell">
                  <div class="weui-cell__hd">
                    <!-- <i-icon class="home_cell_img" type="browse" size="16" /> -->
                    <image class="home_cell_img"
                           src="../../static/img/home/shop_icon.png"></image>
                  </div>
                  <div class="weui-cell__bd padding-left15">
                    <p class="home_cell_title">鹿角巷天河北门店</p>
                    <p class="home_cell_sub_title">天河区天河路北路99号 B302</p>
                  </div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="section"
               style="padding-top:40rpx;">
            <div class="weui-cells__title home_title">
              <image class="home_title_icon"
                     src="../../static/img/home/shop_title_icon.png"></image>
              <span>品牌学院</span>
            </div>
            <div>
              <div class="weui-cells weui-cells_after-title card_cells">
                <div @click="routeToShop"
                     class="weui-cell home_cell">
                  <div class="weui-cell__hd">
                    <image class="home_cell_img"
                           src="../../static/img/home/shop_icon.png"></image>
                  </div>
                  <div class="weui-cell__bd padding-left15">
                    <p class="home_cell_title">品牌打造分享</p>
                    <p class="home_cell_sub_title">打造自己的品牌，为顾客提供最好的服务</p>
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
      <div v-if="tabCurr === 'my'"
           class="page my flex flex_column">
        <div class="weui-cells route_cell weui-cells_after-title ">
          <div @click="routeTo('../userCenter/main')"
               class="weui-cell my_head_cell ">
            <div class="weui-cell__hd">
              <image class="my_cell_img"
                     src="../../static/img/home/head.png"></image>
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16">Miss米奇</p>
              <p class="fs12 main_color">主账号 B302</p>
            </div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div @click="routeTo('../cash/main')"
               class="weui-cell ">
            <div class="weui-cell__bd padding-left15">
              <p class="home_cell_title">我的钱包</p>
            </div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div @click="routeTo('../stock/main')"
               class="weui-cell ">
            <div class="weui-cell__bd padding-left15">
              <p class="home_cell_title">库存管理</p>
            </div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div @click="routeTo('../subAcct/main')"
               class="weui-cell ">
            <div class="weui-cell__bd padding-left15">
              <p class="home_cell_title">账号管理</p>
            </div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <button open-type="contact"
                  class="btn_empty weui-cell ">
            <div class="weui-cell__bd padding-left15">
              <p class="home_cell_title">联系客服</p>
            </div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </button>
        </div>
      </div>
    </div>

    <div class="tabbar_warp"
         style="width:100%">
      <!-- <card :text="tabCurr"></card> -->
      <mytabbar :value="tabCurr"
                @input="handleTab"
                :list="tabList"></mytabbar>
      <!-- <i-tab-bar :current="current" @change="handleChange">
        <i-tab-bar-item key="jishi" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="fabu" icon="group" current-icon="group_fill" title="兑换"></i-tab-bar-item>
        <i-tab-bar-item key="my" icon="mine" current-icon="mine_fill" dot title="我的"></i-tab-bar-item>
      </i-tab-bar> -->
    </div>

  </div>
</template>

<script>
import card from '@/components/card'
import { spaceIndex } from '@/api/home'
import mytabbar from '@/components/tabbar'
export default {
  data () {
    return {
      current: 'jishi',
      motto: 'Hello World1112',
      tabCurr: 'home',
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
      ],
      list: [
        {
          id: 1,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人1'
        },
        {
          id: 2,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人2'
        },
        {
          id: 3,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人3'
        },
        {
          id: 4,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人4'
        },
        {
          id: 5,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人5'
        },
        {
          id: 6,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人6'
        },
        {
          id: 7,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人7'
        },
        {
          id: 8,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人8'
        },
        {
          id: 9,
          title: '繁星十月',
          subTitle:
            '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界',
          text: '我是外星人9'
        }
      ],
      userInfo: {}
    }
  },

  components: {
    card,
    mytabbar
  },

  methods: {
    handleTab (val) {
      if (val === 'scan') {
        wx.navigateTo({ url: '../scanExchange/main' })
        // wx.scanCode({
        //   success (res) {
        //    wx.navigateTo({ url: '../scanExchange/main' })
        //     console.log(res)
        //   }
        // })
      } else {
        this.tabCurr = val
      }
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
    routeToShop () {
      const url = '../shopManage/main'
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

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    this.getPageData()
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
  background: rgba(237, 241, 249, 1);
  border-radius: 10rpx;
  font-size: 26rpx;
  height: 54rpx;
  color: rgba(142, 151, 168, 1);
  padding: 0 30rpx;
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
