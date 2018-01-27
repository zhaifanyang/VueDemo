<template>
    <el-row class='head'>
      <el-col :span='10' class='top' :offset='2'>
        <img src="../../assets/logo.svg">
      </el-col>
      <el-col :span='12'>
        <el-button type="text" @click="dialogTableVisible = true" class='button'>关于</el-button>
        <el-dialog title="Cnode" :visible.sync="dialogTableVisible">
          <el-row style='margin:0.3125rem'>
            <el-col :span='2'>Author</el-col>
            <el-col :span='4'>ZF</el-col>
          </el-row>
          <el-row style='margin:0.3125rem'>
            <el-col :span='2'>Skill</el-col>
            <el-col :span='4'><el-tag>Vue.js</el-tag></el-col>
            <el-col :span='6'><el-tag>Element-ui</el-tag></el-col>
            <el-col :span='6'><el-tag>Axios</el-tag></el-col>
            <el-col :span='6'><el-tag>Vue-router</el-tag></el-col>
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
</style>
