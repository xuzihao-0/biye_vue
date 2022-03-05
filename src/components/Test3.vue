<template>
  <div class="demo-input-suffix">
    <el-input
        size="small"
        style="width: 300px;"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
    </el-input>
    <el-row :gutter="20" style="margin-top: 20px">


      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
      </div></el-col>  <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
      </div></el-col>  <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
      </div></el-col>  <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
      </div></el-col>


    </el-row>
    <el-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费">
    </el-switch>
  </div>
</template>

<script>
export default {
  name: "Test3",
  data(){
    return {
      input2:'',
      value1: true,
      ar:[1,'dasd'],

    }
  },



}
</script>

<style scoped>

</style>