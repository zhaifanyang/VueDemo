<template>
  <div class="hello" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <el-card class="box-card" v-for="data in datas" :key='data.id'>
      <router-link :to="{name:'Author',params:{name:data.author.loginname}}"><img :src="data.author.avatar_url"></router-link>
      <div class="text item">
        <router-link :to="{name:'article',params:{id:data.id,name:data.author.loginname}}">
          <h5>{{data.title}}</h5>
        </router-link>
        <p><span>访问量：{{data.visit_count}}</span><span>创建于：{{data.create_at}}</span></p>
      </div>
    </el-card>
   <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="1"
        layout="prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      datas:[],
      loading:true,
      currentPage:1
    };
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      this.loading=true;
      this.$http({
          url:'https://cnodejs.org/api/v1/topics',
          method:'get',
          params:{
            page:this.currentPage,
            limit:30,
            mdrender: 'false',
          }
        })
      .then(res=>{
        this.datas = res.data.data;
        this.scrollTop()
      })
      .catch(error=>{
        console.log('数据获取失败')
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },
    scrollTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  watch:{
    datas(val){
      if (val) {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.hello{
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
}
.box-card{
  margin-top: 0.46875rem
}
.box-card img{
  width: 2.0rem;
  height: 2.0rem;
  float: left;
  padding-right: 0.3125rem
}
.text.item{
  font-size: 0.78125rem;
  text-align: left
}
.text.item h5{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}
.text.item p{
  font-size: 0.5rem;
  color: #8492A6;
  margin-top: 0.15625rem
}
.text.item p span{
  padding-right: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  
}
</style>
