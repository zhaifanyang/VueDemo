<template>
    <el-row class='head'>
      <el-col :span='10' class='top' :offset='2'>
        <router-link to='/'>
          <img src="../../assets/logo.svg">
        </router-link>
      </el-col>
      <el-col :span='12'>
        <el-button type="text" @click="dialogTableVisible = true" class='button'>关于</el-button>
        <el-dialog title="cnode-学习" :visible.sync="dialogTableVisible">
          <el-row style='margin:0.3125rem'>
            <el-col :span='4'>Author</el-col>
            <el-col :span='4'>ZF</el-col>
          </el-row>
          <el-row style='margin:0.3125rem'>
            <el-col :span='4'>Skill</el-col>
            <el-col :span='5'><el-tag type="danger"><a href="https://cn.vuejs.org/" target='_blank'>Vue.js</a></el-tag></el-col>
            <el-col :span='5'><el-tag type="danger"><a href="http://element-cn.eleme.io/#/zh-CN/component/installation" target='_blank'>Element-ui</a></el-tag></el-col>
            <el-col :span='5'><el-tag type="danger"><a href="https://github.com/axios/axios" target='_blank'>Axios</a></el-tag></el-col>
            <el-col :span='5'><el-tag type="danger"><a href="https://router.vuejs.org/zh-cn/" target='_blank'>Vue-router</a></el-tag></el-col>
          </el-row>
          <el-row style='margin:0.3125rem'>
            <el-col :span='4'>Github</el-col>
            <el-col :span='5'><el-tag type="danger"><a href="https://github.com/zhaifanyang/VueDemo" target='_blank'>zhaifanyang.github.io</a></el-tag></el-col>

          </el-row>
        </el-dialog>
      </el-col>
    </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: 'HelloWorld',
  data () {
    return {
      input4: '',
      dialogTableVisible:false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
  background-color: #444;
  height: 1.53125rem
}

.head img{
  height: 1.25rem;
  margin-top: 0.125rem
}
.button{
  color: #fff;
  font-size: 0.5rem;
  font-weight: 600
}
a{
  color: #f56c6c;
}
</style>
