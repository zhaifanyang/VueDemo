<template>
<div class="article">
  <div id="content">
    <div class="panel">
      <div class="header topic_header">
        <span class="topic_full_title">{{titles.title}}</span>
        <div class="changes">
          <span>发布于{{titles.last_reply_at}}天前</span>
          <span>作者 {{$route.params.name}}</span>
          <span>{{titles.visit_count}} 次浏览</span>
          <span> 来自 问答</span>
        </div>
      </div>
      <div class="inner topic">
        <div class="topic_content" v-html='titles.content'>
        </div>
      </div>
    </div>
    <div class="header">
        <span class="col_fade">{{titles.reply_count}} 回复</span>
      </div>
    <div class="panel" v-for='(item,index) in titles.replies'>
      
      <div class="cell reply_area reply_item
      " reply_id="5a5a07c0a3692d014f4f1435" reply_to_id="" id="5a5a07c0a3692d014f4f1435">
        <div class="author_content">
          <a href="/user/atian25" class="user_avatar">
            <img :src="item.author.avatar_url"></a>
          <div class="user_info">
            <a class="dark reply_author" href="/user/atian25">{{item.author.loginname}}</a>
            <a class="reply_time" href="#5a5a07c0a3692d014f4f1435">{{index}}楼•15 天前</a>
          </div>
        </div>
        <div class="reply_content from-atian25" v-html="item.content">
        </div>
        <div class="clearfix">
          <div class="reply2_area"></div>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  name: 'Author',
  data() {
    return {
      loading:true,
      titles:[],

    }
  },
  created(){
    console.log(this.$route.path)
    this.$http({
      url:`https://cnodejs.org/api/v1/${this.$route.path}`,
      method:'get'
    }).then(res=>{
      console.log(res.data.data);
      this.titles = res.data.data
    }).catch(error=>{
      console.log("没有获取到数据!"+error)
    })
  }
}
</script>

<style scoped>
.article{
  background-color: #e1e1e1;
  width: 100%;
  height: 100%;
}
#content {
  padding: 0;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.panel {
  margin-bottom: 13px;
}
.panel .header.topic_header, .panel .inner {
  background-color: #fff;
}
#content .topic_full_title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
}
#content .changes {
  font-size: 12px;
  color: #838383;
}
#content .changes {
    font-size: 12px;
    color: #838383;
}
.panel .inner.topic{
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.topic_content {
  margin: 0 10px;
}
.panel .inner, .panel .inner li {
    line-height: 2em;
    font-size: 0.4375rem
}
.topic_content p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
}
.markdown-text>:last-child, .preview>:last-child, textarea#title {
    margin-bottom: 1em;
}
.markdown-text p, .preview p {
  word-break: break-word;
  font-size: 0.4375rem;
}
.panel {
    margin-bottom: 13px;
}
.panel .header {
    background-color: #f6f6f6;
    padding-left: 0.15625rem;
    border-radius: 3px 3px 0 0;
}
.header .col_fade {
    color: #444;
    font-size: 14px;
    word-break: break-word;
}
.panel .cell {
    padding-right: 10px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
}
.author_content .user_avatar {
    display: inline-block;
    float: left;
    text-align: left;
    padding-left: 0.15625rem
}
.user_avatar img, .user_big_avatar img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display: inline-block;
  vertical-align: middle; 
}
.user_info {
    margin-left: 10px;
    display: inline-block;
}
a.dark, a.dark:active, a.dark:link, a.dark:visited {
    color: #666;
    text-decoration: none;
    text-overflow: ellipsis;
    font-size: 0.4375rem;
}
.reply_time {
    font-size: 11px;
    color: #08c;
    text-decoration: none;
}
.user_action {
    float: right;
    margin-left: 20px;
    font-size: 15px;
}
.user_action {
    float: right;
    margin-left: 20px;
    font-size: 15px;
}
.reply_content {
    padding-left: 50px;
    color: #333;
    font-size: 0.4375rem
}
.reply_content.from-atian25{
  padding-left: 50px;
  color: #333;
}
.clearfix:after, .clearfix:before {
    display: table;
    line-height: 0;
    content: "";
    clear: both;
}
</style>
