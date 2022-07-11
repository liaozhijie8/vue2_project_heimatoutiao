<template>
  <div class="comment-container">
    <van-nav-bar title="我的留言" fixed left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 留言输入区域 -->
    <div class="controls">
      <img src="@/images/tip.png" alt="" /><br />
      <!-- maxlength 可以用来限制表单输入的内容长度 -->
      <textarea placeholder="说点什么吧..." id="area" cols="30" rows="10" maxlength="200" v-model="userComment" @keyup="getCount"></textarea>
      <div>
        <span class="useCount" id="useCount">{{commentCount}}</span>
        <span>/</span>
        <span>200</span>
        <button id="send" @click="sendSet">发布</button>
      </div>
    </div>
    <!-- 弹窗 -->
    <van-dialog v-model="show" title="请输入你的名字" show-cancel-button @confirm='addComment' @cancel='removeDate'>
      <input type="text" v-model="userName" class="alterSet">
    </van-dialog>
    <!-- 展示区域 -->
    <Display v-for="item in commentList" :key="item.id" :content="item.content" :time="item.time" :id="item.id" @remove="removeList" :userName="item.name"></Display>
  </div>
</template>
i
<script>
import { Toast } from 'vant'
// 导入评论区域
import Display from '@/components/comment/display_comment.vue'
// 导入时间处理模块
import dayjs from 'dayjs'
export default {
  components: {
    Display
  },
  // 被创建时
  created() {
    /*  判断浏览器是否有本地数据 */
    const locationData = localStorage.getItem('newData')
    if (locationData) {
      return (this.commentList = JSON.parse(locationData))
    } else {
      // 添加一个数组
      this.commentList = [{ id: 0, content: '222', time: 2022, name: '百里不守约' }]
      // 写入本地
      localStorage.setItem('newData', JSON.stringify(this.commentList))
    }
  },
  data() {
    return {
      show: false,
      userComment: '',
      commentCount: 0,
      commentList: [],
      // 个人的姓名
      userName: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    /* 发起弹窗按钮 */
    sendSet() {
      this.show = true
    },
    /* 添加评论 */
    addComment() {
      // 判断是否空输入
      if (this.userComment.trim() === '') {
        // 清空无效数据
        this.userComment = ''
        this.commentCount = 0
        alert('请输入内容后再发表!!!')
      } else {
        // 把数据存进去
        const data = new Date()
        const newdate = dayjs(data).format('YYYY-MM-DD hh:mm:ss')
        this.commentList.unshift({ id: this.commentList.length, content: this.userComment, time: newdate, name: this.userName })
        // 存入本地
        localStorage.setItem('newData', JSON.stringify(this.commentList))
        // 清空中转数据
        this.userComment = ''
        this.commentCount = 0
        this.userName = ''
        Toast.success('发送成功')
      }
      // console.log(this.userComment.length)
    },
    /* 删除评论 */
    removeList(val) {
      this.commentList = this.commentList.filter(commentList => commentList.id !== val)
      // 存入本地
      localStorage.setItem('newData', JSON.stringify(this.commentList))
      this.userComment = ''
      Toast.fail('删除成功')
    },
    /* 取消操作 */
    removeDate() {
      // 清空中转数据
      this.userComment = ''
      this.commentCount = 0
      this.userName = ''
    },
    /* 计算字数 */
    getCount() {
      // this.userComment = this.userComment.trim()
      this.commentCount = this.userComment.length
    }
  }
}
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
}
.alterSet {
  margin: 0 auto;
  display: block;
}
.comment-container {
  padding: 60px 0;
  width: 90vw;
  margin: 0 auto;
  .controls {
    overflow: hidden;
    textarea {
      width: 95%;
      height: 100px;
      resize: none;
      border-radius: 10px;
      outline: none;
      padding-top: 10px;
      padding-left: 5px;
      font-size: 18px;
    }
    div {
      float: right;
      span {
        color: #666;
      }
      .useCount {
        color: red;
      }
      button {
        width: 100px;
        outline: none;
        border: none;
        background: rgb(0, 132, 255);
        height: 30px;
        cursor: pointer;
        color: #fff;
        font: bold 14px '宋体';
        transition: all 0.5s;
      }
      button:hover {
        background: rgb(0, 225, 255);
      }
      button:disabled {
        background: rgba(0, 225, 255, 0.5);
      }
    }
  }
}
</style>
