<script src="../util/api.js"></script>
<template>
  <div class="out-container" >


<!--    <el-row :gutter="20" class="container">-->
<!--      <el-col :span="10" :offset="6"> -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm container">
          <h1 style="color: #303133">欢迎使用</h1>
        <el-form-item label="用户名" prop="name" style="color: #ffffff">
          <el-input v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
 </el-form>
    <el-button @click="$router.push('home/test1')">点我 </el-button>
<!--</el-col>-->
<!--    </el-row>-->

<!--    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--      <el-form-item label="用户名" prop="name">-->
<!--        <el-input v-model="ruleForm.name" ></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码" prop="pass">-->
<!--        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="确认密码" prop="checkPass">-->
<!--        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="年龄" prop="age">-->
<!--        <el-input v-model.number="ruleForm.age"></el-input>-->
<!--      </el-form-item>-->

<!--      <el-form-item label="活动时间" required>-->
<!--        <el-col :span="11">-->
<!--          <el-form-item prop="date1">-->
<!--            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
<!--          </el-form-item>-->
<!--        </el-col>-->

<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->

  </div>

</template>

<script>
import axios from "axios";
import {postRequest} from "@/util/api";
import {getRequest} from "@/util/api";
import {postKeyValueRequest} from "@/util/api";

export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value > 1800) {
            callback(new Error('必须小于1800岁哥！'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name:'',
        pass: '',
        checkPass: '',
        age: '',
        date1: '',
      },

      id:1,
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        name:[
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      }
    };
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: radial-gradient(300% 100% at top,#14253e 10%,#75517d 40%,#e98296 65%,#f7eca7) fixed')
  },
  beforeDestroy () {
    console.log('已经销毁'),
    document.querySelector('body').setAttribute('style', 'background:none')
  },
  methods: {
    dd(){
    getRequest('/hello',{}).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          postKeyValueRequest('/doLogin',{
            username:this.ruleForm.name,
            password:this.ruleForm.pass
          }).then((res)=>{
            console.log(res.data)
            this.$store.state.userInfo=res.data
            this.$store.state.sum=1

          }).catch((error)=>{
            console.log(error)
          })
          this.$router.push('/home/test2')

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

}
}
</script>

<style scoped>
body{
  background:none;
}
.container{
  /*background-color:#38476f;*/
  margin: 70px auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
  transition: 0.3s;
  width: 30%;
  border-radius: 15px;
  padding: 30px 50px 20px 20px;
}
.el-form-item__label{
  color: #d93434;
  font-weight:bold ;
}

</style>