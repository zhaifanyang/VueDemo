<template>
  <div class="hello">
    <el-card class="box-card" v-for="o in data">
      <img :src="o.author.avatar_url">
      <div class="text item">
        <h5>{{o.title}}</h5>
        <p><span>访问量：{{o.visit_count}}</span><span>创建于：{{o.create_at}}</span></p>
      </div>
    </el-card>
  <button @click='getData'>add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      currentDate: new Date(),
      data:[]
    };
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics')
      .then(res=>{
        this.data = res.data.data;
      })
      .catch(error=>{
        console.log('数据获取失败'+error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 60%;
  margin: 0 auto;
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
.text.item p{
  font-size: 0.5rem;
  color: #8492A6;
  margin-top: 0.15625rem
}
.text.item p span{
  padding-right: 1.25rem  
}
</style>
