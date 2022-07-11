<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type===1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item,id) in cover.images" :key="id">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{autName}} &nbsp;&nbsp; {{commcount}}评论 &nbsp;&nbsp; {{pubDate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  // 自定义属性传参数
  props: {
    // 标题属性
    title: {
      default: '',
      type: String
    },
    // 评论数
    commcount: {
      default: 1,
      type: [Number, String]
    },
    // 作者名称
    autName: {
      default: '',
      type: String
    },
    // 发布事件
    pubDate: {
      default: '',
      type: String
    },
    // 图片信息
    cover: {
      type: Object,
      default: function() {
        return { cover: 0 }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
