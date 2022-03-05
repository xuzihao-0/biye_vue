<template>
  <div>

   <el-row>
     <el-col :span="5" :offset="6" style="margin-top: 50px">
       <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
         <el-form-item label="用户名">
           <el-input v-model="formLabelAlign.name"></el-input>
         </el-form-item>
         <el-form-item label="密码">
           <el-input v-model="formLabelAlign.password"></el-input>
         </el-form-item>
         <el-form-item label="手机号码">
           <el-input v-model="formLabelAlign.telephone"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" @click="onSubmit">修改信息</el-button>

         </el-form-item>
       </el-form>

     </el-col>


   </el-row>


  </div>
</template>

<script>
export default {
  name: "Third",
  data(){
    return{
      userData:{},
      labelPosition: 'right',
      formLabelAlign:{

        name: '',
        password: '',
        telephone: ''

      }


    }
  },
  mounted(){
    this.formLabelAlign.name=this.$store.state.userInfo.username
    this.formLabelAlign.password=''
    this.formLabelAlign.telephone=this.$store.state.userInfo.telephone

  },
  methods:{
    onSubmit(){
      this.axios.post("change_user",{
        name:this.formLabelAlign.name,
        password:this.formLabelAlign.password,
        telephone:this.formLabelAlign.telephone,
        uid:this.$store.state.userInfo.id
      }).then((res)=>{
        console.log(res.data)
        if(res.data.data==1){
          this.$message({
            message: '修改成功',
            type: 'success'
          });
        }
        if(res.data.data==0){
          this.$message({
            message: '修改失败',
            type: 'warning'
          });

        }
      }).catch((error)=>{
        console.log(error)
      })

    }



  }

}
</script>

<style scoped>

</style>