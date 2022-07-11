<template>
  <div class="display-container">

    <div class="contentList">
      <ul id="list">
        <li>
          <div class="info">
            <img class="userpic" src="@/images/03.jpg" />
            <span class="username">{{userName}}</span>
            <p class="send-time">{{time}}</p>
          </div>
          <div class="content">{{content}}</div>

          <!-- <span class="the_del" @click="reMove(id)">X</span> -->
          <span class="the_del" @click="reMove(id)">
            <van-icon name="close" />
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    time: {
      // type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ''
    },
    userName: {
      default: ''
    }
  },
  methods: {
    reMove(id) {
      this.$emit('remove', id)
    }
  }
}
</script>

<style lang='less' scoped>
.contentList {
  margin-top: 50px;
}

.contentList li {
  /* visibility: hidden; */
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
  position: relative;
}

.contentList li .info {
  position: relative;
}

.contentList li .info span {
  position: absolute;
  top: 15px;
  left: 100px;
  font: bold 16px '宋体';
}

.contentList li .info p {
  position: absolute;
  top: 40px;
  left: 100px;
  color: #aaa;
  font-size: 12px;
}

.contentList img {
  width: 80px;
  border-radius: 50%;
}

.contentList li .content {
  padding-left: 100px;
  color: #666;
  word-break: break-all;
}

.contentList li .the_del {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 28px;
  cursor: pointer;
}
</style>
