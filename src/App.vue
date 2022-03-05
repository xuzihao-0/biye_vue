<template>
  <div id="app">

  <router-view></router-view>

  </div>
</template>
<script>
  import {postKeyValueRequest} from "@/util/api";
  import {getRequest} from "@/util/api";

  export default {
    name:'App',
    data(){
      return{
        loginform:{
          username:'admin',
          password:'123'
        },
        id:{
          id:1
        },
        info:{}

      }
    },
    methods:{
      login(){
        postKeyValueRequest('/doLogin',this.loginform).then((res)=>{
          if (res){
            console.log(res)
            this.info=res
            console.log('fdsfds')
            this.$router.replace('/home')
          }
            }

        )

      },
      hello(){
        getRequest('/hello',this.id).then((res)=>{
          console.log(res)
          this.$router.push('/login')
        }).catch((error)=>{
          console.log(res)
        })

      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
