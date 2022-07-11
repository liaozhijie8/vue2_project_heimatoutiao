<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="测试用" fixed />
    <!-- 上下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" :disabled='finished'>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in article" :key="item.art_id" :title="item.title" :commcount="item.comm_count" :autName="item.aut_name" :pubDate="item.pubdate" :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入axios模块
import { getArticleListAPI } from '@/api/article.js'
// 文章信息组件
import ArticleInfo from '@/components/article/Article_Info.vue'
export default {
  components: {
    ArticleInfo
  },
  data() {
    return {
      page: 1,
      limit: 10,
      article: [],
      loading: true,
      finished: false,
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList(isrefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 判断如何拼接数组
      if (isrefresh) {
        // 下拉的判断
        this.article = [...res, ...this.article]
        this.isLoading = false
      } else {
        // 拼接数组
        this.article = [...this.article, ...res]
        this.loading = false
      }
      // 判断是否还有数据
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 下拉处理函数
    onLoad() {
      // 让页码增加
      this.page++
      // 重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉处理函数
    onRefresh() {
      this.page++
      this.initArticleList(this.isLoading)
    }
  }
}
</script>

<style lang='less' scoped>
.home-container {
  padding: 60px 0;
}
</style>
