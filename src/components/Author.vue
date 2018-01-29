<template>
<div class="author" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
  <el-card class="box-card">
    <div class="head head1">主页/</div>
    <div class="content">
      <div class="img">
        <img :src="author.avatar_url">
        <span>{{author.loginname}}d</span>
      </div>
      <p>积分:{{author.score}}</p>
      <p>Github：{{author.githubUsername}}</p>
      <p>注册时间：{{author.create_at}}</p>
    </div>
  </el-card>
  <el-card class="box-card">
    <div class="head">最近参与的话题</div>
    <div class="change" v-for="item in author.recent_replies" :key='item.id'>
      <router-link :to="{name: 'Author',params:{name:item.author.loginname}}">
        <img :src="item.author.avatar_url">
      </router-link>
      <router-link :to="{name: 'article',params:{id:item.id,name:item.author.loginname}}">
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </el-card>
  <el-card class="box-card">
    <div class="head">最近创建的话题</div>
    <div class="recent" v-for="item in author.recent_topics" :key='item.id'>
        <img :src="item.author.avatar_url">
      <router-link :to="{name: 'article',params:{id:item.id,name:item.author.loginname}}">
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'Author',
  data() {
    return {
      author:[],
      loading:true
    }
  },
  created(){
    this.$http({
      url: `https://cnodejs.org/api/v1/${this.$route.path}`,
      method: 'get'
    }).then(res=>{
      this.author = res.data.data;
      console.log(this.author)
    }).catch(error=>{
      console.log('无法获取到信息')
    })
  },
  beforeRouteUpdate(to, from, next) {
      this.$http({
          url: `https://cnodejs.org/api/v1${to.path}`,
          method: 'get',
      }).then((res) => {
          this.author = res.data.data;
      }).catch((res) => {
          console.log('UserCom.vue: ', res);
      });
      next();
  },
  watch:{
    author(val){
      this.loading = false
    }
  }
}
</script>

<style scoped>
.box-card{
  width: 60%;
  margin: 0.46875rem auto;
  text-align: left;
  background-color: #f0f3f7;
}
.el-card__body{
  padding: 0;
}
.head{
  border-radius: 0.0625rem 0.09375rem 0 0;
  font-size: 0.4375rem;
  margin-bottom: 0.15625rem
}
.content{
  position: relative;
}
.content .img img{
  width: 1.25rem;
  display: inline-block;
  vertical-align: top;
  height: 1.25rem
}
.content .img span{
  font-size: 0.4375rem;
  position: absolute;
  left: 1.71875rem
}
.content p{
  font-size: 0.375rem;
  padding: 0.15625rem 0;
}
.content p:nth-child(3){
  color: #778087;
}
.content p:nth-child(4){
  color: #ababab;
}
.head1{
  color: #80bd01;
}
.change,
.recent{
  width: 18.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 0.3125rem;
  border-bottom: 0.03125rem solid #fff;
}
.change img,
.recent img{
  width: 0.9375rem;
  display: inline-block;
  vertical-align:middle;
  height: 0.9375rem;
}
.change span,
.recent span{
  font-size: 0.625rem;
  padding-left: 0.3125rem;

}
</style>
