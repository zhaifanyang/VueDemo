<template>
    <el-row class='head' background-color="#444">
      <el-col :xs='12' :sm='8' :md="6" class='top'>
        <img src="../../assets/logo.svg">
      </el-col>
      <el-col class='hidden-xs-only' :sm='10':md="12">
        <el-input placeholder="请输入内容" v-model="input4">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :xs='12' :sm='6' :md="6">
        
      </el-col>
    </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: 'HelloWorld',
  data () {
    return {
      input4: ''
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
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
  padding-left: 0.5rem;
  margin-top: 0.125rem
}

</style>
