<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行的任务" name="first">
        <div>
          <Form></Form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已完成的任务" name="second">
        <div>
          <form-finished></form-finished>
        </div>

      </el-tab-pane>
      <el-tab-pane label="已删除的任务" name="third">
        <div>
          <form-delete></form-delete>
        </div>

      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <div>
          <form-test></form-test>




        </div>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Test2 from "@/components/Test2"
import FormFinished from "@/components/FormFinished";
import FormDelete from "@/components/FormDelete";
import {getRequest, postRequest} from "@/util/api";
import FormTest from "@/components/FormTest";
import {postKeyValueRequest} from "@/util/api";
import {postRequest1} from "@/util/api";
import axios from "axios";


export default {

  name: "Test1",
  data() {
    return {
      activeName: 'first',
      input: '',
      info: {
        id: 1,
        name: 'xsdfdks',
        ars: [1, 2, 3, 4, 5]
      },
      infos: {
        name: "hahahh",
        age: 12
      }

    }

  },
  components: {
    Form,
    Test2,
    FormFinished,
    FormDelete,
    FormTest
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    dd() {
      postRequest('/jsontest', this.info
      ).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })

    },
    dd1() {
      postRequest1('/jsontest1', this.info
      ).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })

    },
    dd2() {
      // postRequest('/ars',this.info).then((res)=>{
      //   console.log(res)
      // }).catch((err)=>{
      //   console.log(err)
      // })  这是post请求 后端用对象接受
      getRequest('/getTset', this.info.id).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
      //   postRequest('/ars1',this.info.ars).then((res)=>{
      //     console.log(res)
      //   }).catch((err)=>{
      //     console.log(err)
      //   }) 这是参数为数组，后端用数组接受
    },
    hh() {
      //测试前后端交互 axios 使用ajax 发送数据时就会转换为json 数组 所以不需要额外转换
      axios.post("/register/hi", this.infos).then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }

    //
    //   postRequest('/ars1',this.info.ars).then((res)=>{
    //     console.log(res)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    //   postRequest('/ars',this.info.ars).then((res)=>{
    //     console.log(res)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // },
  },


}
</script>

<style scoped>

</style>