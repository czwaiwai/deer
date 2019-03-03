<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
      <scroll-view scroll-y style="height:100%;" >
        <div class="avator_wrap"><i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar></div>
        <p class="title">繁星10月</p>
        <article class="article">
          <section>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
            <p>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是分开了多少奋斗史奋斗水井坊克里斯蒂减大煞风景是</p>
          </section>
        </article>
      </scroll-view>
    </div>
    <div class="page_ft flex">
      <div class="flex_item flex" >
          <span class="flex_item"><i-icon type="browse" size="30" /></span>
          <span class="flex_item"><i-icon type="like" size="30"/></span>
          <span @click="commentVisible=true" class="flex_item"><i-icon type="message" size="30" /></span>
      </div>
      <div class="music_wrap"></div>
    </div>
    <div class="mask" v-if="commentVisible">
      <div class="comment_popup" >
        <div class="page">
          <div class="page_hd" @click="commentVisible=false">5条评论</div>
          <div class="page_bd">
            <scroll-view scroll-y style="height:100%;" >
              <ul class="comment_bd">
                <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                 <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                  <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                   <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                    <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                     <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                      <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                       <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                        <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                         <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
                          <li>段开发累计的数量风景的健身房的索科洛夫多少福鼎市开发但是</li>
              </ul>
            </scroll-view>
          </div>
          <div class="" style="height:88rpx;">
            <input placeholder="输入评论的文字">
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      commentVisible: false,
      logs: []
    }
  },

  created () {
  }
}
</script>

<style>
.avator_wrap {
  text-align:center;
  padding-bottom:40rpx;
}
.title {
  font-size:44rpx;
  text-align: center;
}
.article {
  padding:30rpx;
  font-size:32rpx;
  line-height:1.6;
}
.page_hd {
  height:80rpx;
  position:relative;
  border-bottom:1rpx solid #e3e3e3;
  text-align:center;
  font-size:32rpx;
}
.page_ft {
  padding: 0 30rpx;
  line-height:100rpx;
}
.music_wrap {
  width:100rpx;
  height:100rpx;
  border-radius:100%;
  background:#f0f0f0;
}
.mask {
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:transparent;
}
.comment_popup {
  position:absolute;
  top: 30%;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display:flex;
  flex-direction: column;
}
.comment_bd {
  padding:30rpx;
}
</style>
