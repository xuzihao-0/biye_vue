<template>
  <div>

    <div>
      <el-row>
        <el-col :span="8">
          <el-input
              size="small"
              style="width: 300px;margin-right: 8px"
              placeholder="请输入内容"
              suffix-icon="el-icon-plus"
              v-model="input"
              clearable>
          </el-input>
          <el-button type="primary" round size="small" :style="{display:display}">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <el-row style="margin-top: 20px">
      <el-col :span="24">
        <el-table
            :data="tableData"
            stripe
            height="400"
            :default-sort = "{prop: 'beginDay', order: 'descending'}"
            style="width: 100%">
          <el-table-column
              prop="taskName"
              label="名称"
              align="center"

              sortable
              width="200"
              >
          </el-table-column>
          <el-table-column
              prop="beginDay"
              label="日期"
              align="center"
              width="110"
              sortable
              >
          </el-table-column>
          <el-table-column
              prop="endDay"
              label="日期"
              sortable
              align="center"
              width="110"
              >
          </el-table-column>
          <el-table-column
              prop="taskDay"
              label="任务总天数"
              sortable
              align="center"
              width="130">
          </el-table-column>
          <el-table-column
              prop="taskValue"
              sortable
              width="140"
              align="center"
              label="任务价值"
              >

          </el-table-column>
          <el-table-column
              prop="taskDescription"
              align="center"
              label="任务描述">
          </el-table-column>

        </el-table>

      </el-col>
    </el-row>
    <el-row style="margin-top: 40px">
      <el-pagination
          background
          @current-change="getCount"
          layout="prev, pager, next"
          :total="total">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data(){
    return{
      input:'',
      display:'',
      tableData: [],
      total:100,
      size:10,
      current:1
    }
  },
  created() {
    //在创建时获取数据
    this.getTotalGoing()

    this.getTables()
  },
  methods:{
    getTables(){
      axios.get("find_delete_page",{
        params:{
          uid:this.$store.state.userInfo.id,
          size:this.size,
          current:this.current
        }
      }).then((res)=>{
        this.tableData=res.data.data,
        console.log(res.data.data)
      }).catch((error)=>{
        console.log(error)
      })
    },
    getTotalGoing(){
      //获取分页总数
      axios.get("get_total_delete",{
        params:{
          uid:this.$store.state.userInfo.id
        }
      }).then((res)=>{
        console.log("输出分页总数")
        console.log(res.data.data)
        alert(res.data.data)
        this.total=res.data.data
      }).catch((error)=>{
        console.log(error.data)
      })

    },
    getCount(cuPage){
      this.current=cuPage
      this.getTables()


    }
  },



}
</script>

<style scoped>

</style>