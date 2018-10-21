<template>
  <div class="container" >
    <div class="tabbar_pages">
      <div v-if="current === 'jishi'" class="page" >
        <scroll-view scroll-y style="height:100%;" >
          <div class="card_wrap">
            <div v-for="item in list" :key="item.id" class="card">
              <div class="card_bd flex flex_column">
                <div class="flex_item">
                 <div class="title">{{item.title}}</div>
                 <div class="sub_title">{{item.subTitle}}</div>
                </div>
                <div>
                 <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default"></i-avatar> 歪歪
                </div>
              </div>
              <div class="card_ft flex">
                <div class="flex_item">
                  <span>{{item.text}}</span>
                </div>
                <div class="card_op">
                  <i-icon type="like" size="28"/>
                  <i-icon type="message" size="28" />
                  <i-icon type="send"  size="28"/>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="userinfo" @click="bindViewTap">
            <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
            <div class="userinfo-nickname">
              <card :text="userInfo.nickName"></card>
            </div>
          </div>

          <div class="usermotto">
            <div class="user-motto">
              <card :text="motto"></card>
            </div>
          </div>

          <form class="form-container">
            <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
            <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
          </form>
          <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
          {{current}} -->
       </scroll-view>
    </div>
    <!-- <div v-if="current === 'fabu'" class="page">
        我是发布页面
    </div> -->
      <div v-if="current === 'my'" class="page my flex flex_column">
          <div class="my_hd flex "  style="height:65px;">
            <div class="avator_wrap" style="margin-right:15px;width:65px;height:65px;border-radius:100%;background:#f0f0f0;">
            
            </div>
            <div class="my_op flex_item flex_item_center">
              <ul class="flex">
                <li class="flex_item ">
                  <div class="icon_op"><i-icon type="brush" size="28"/></div>
                  <p>草稿</p>
                </li>
                <li  class="flex_item">
                  <div  class="icon_op"><i-icon type="remind" size="28"/>
                  </div>
                  <p>消息</p>
                </li>              
                <li  class="flex_item">
                  <div  class="icon_op"><i-icon type="browse" size="28" /></div>
                  <p>我看过的</p>
                </li>                
                <li  class="flex_item">
                  <div  class="icon_op"><i-icon type="picture" size="28"/></div>
                  <p>海报</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="my_bd flex_item" style="overflow:hidden;height:100%;">

            <scroll-view scroll-y style="height:100%;" >
               <ul class="action_list">
                 <li class="year_title">
                   2018 年
                 </li>
                 <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>07</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">繁星10月</p>
                     <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                 <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>05</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">仰望星空，只要只要踮起脚尖梦想其实离你并不会太遥远</p>
                      <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                                  <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>07</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">繁星10月</p>
                     <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                 <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>05</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">仰望星空，只要只要踮起脚尖梦想其实离你并不会太遥远</p>
                      <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                                  <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>07</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">繁星10月</p>
                     <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                 <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>05</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">仰望星空，只要只要踮起脚尖梦想其实离你并不会太遥远</p>
                      <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                                  <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>07</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">繁星10月</p>
                     <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                 <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>05</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">仰望星空，只要只要踮起脚尖梦想其实离你并不会太遥远</p>
                      <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                                  <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>07</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">繁星10月</p>
                     <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
                 <li class="day_action flex">
                   <div>
                     <p class="date">10月<span>05</span></p>
                     <p class="position"><i-icon type="coordinates" size="16" />广州</p>
                   </div>
                   <div class="action_img_wrap"></div>
                   <div class="flex_item">
                     <p class="action_title">仰望星空，只要只要踮起脚尖梦想其实离你并不会太遥远</p>
                      <div class="flex action_op">
                       <span class="flex_item"><i-icon type="browse" size="16" /> 300</span>
                       <span class="flex_item"><i-icon type="like" size="16"/>  201</span>
                       <span class="flex_item"><i-icon type="message" size="16" /> 277</span>
                     </div>
                   </div>
                 </li>
               </ul>
            </scroll-view>
          </div>

      </div>
    </div>

    <div class="tabbar_warp" style="width:100%">
      <i-tab-bar :current="current" @change="handleChange">
        <i-tab-bar-item key="jishi" icon="homepage" current-icon="homepage_fill" title="记事鹿"></i-tab-bar-item>
        <i-tab-bar-item key="fabu" icon="group" current-icon="group_fill" title="发布"></i-tab-bar-item>
        <i-tab-bar-item key="my" icon="mine" current-icon="mine_fill" dot title="我的"></i-tab-bar-item>
      </i-tab-bar>
    </div>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      current: 'my',
      motto: 'Hello World1112',
      list: [
        {id: 1, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人1'},
        {id: 2, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人2'},
        {id: 3, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人3'},
        {id: 4, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人4'},
        {id: 5, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人5'},
        {id: 6, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人6'},
        {id: 7, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人7'},
        {id: 8, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人8'},
        {id: 9, title: '繁星十月', subTitle: '我们故事的情节，发生在烂漫签约，夜空中繁星点点，你说情话的瞬间，我所有的小细节，没人比你更了解，沉浸在只有幸福的世界', text: '我是外星人9'}
      ],
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
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
    getUserInfo () {
      // 调用登录接口
      console.log('aaa')
      console.log('终于成功了')
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
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
    this.getUserInfo()
  }
}
</script>

<style  scoped>

.card_wrap {
  padding:15px;
}
.card {
  border-radius:10px;
  margin-bottom:15px;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
}
.card .card_bd{
    height:320px;
    border-radius:10px 10px 0 0;
    padding: 20px 15px;
    background:#f0f0f0;
}
.card .card_bd .title{
  font-size:20px;
  padding-bottom:10px;
}
.card .card_bd .sub_title{
  font-size:14px;
  line-height:20px;
}
.card .card_ft{
  border-radius: 0 0 10px 10px;
  height:50px;
  line-height:50px;
  font-size:14px;
  padding: 0 15px;
}
.tabbar_pages {
  flex:1;
  overflow:hidden;
}
.tabbar_pages .page{
  height:100%;
}
.tabbar_warp {
  height:100rpx;
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
  padding:15px 15px 5px 15px;
  box-shadow: 0 1px 1px rgba(0,0,0,.08);
}
.my_op {
  font-size:14px;
  text-align:center;
}
.icon_op {
  padding-bottom:5px;
}

.action_list {
  padding:15px;
}
.action_list li {
  margin-bottom:15px;
}
.action_list li .date {
  padding-right:15px;
}
.action_list li .position {
  padding-top:35px;
  font-size:14px;
}
.action_list li .date>span{
  font-size:14px;
}
.action_list li .action_title {
  padding-left:15px;
  font-size:16px;
  min-height:40px;
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  line-height:1.4;
}
.action_list li .action_op {
  font-size:14px;
  vertical-align: bottom;
  padding-left:15px;
  padding-top:15px;
}
.action_list .year_title {
  font-size:20px;
  padding-bottom:15px;
}
.action_list .action_img_wrap {
  width:72px;
  height:72px;
  background:#f0f0f0;
}
</style>
