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
              align="center"
              prop="taskName"
              label="名称"
              sortable
              width="200"
              >
          </el-table-column>
          <el-table-column
              align="center"
              prop="beginDay"
              label="日期"
              width="110"
              sortable
              >
          </el-table-column>
          <el-table-column
              align="center"
              prop="endDay"
              label="日期"
              sortable
              width="110"
              >
          </el-table-column>
          <el-table-column
              align="center"
              prop="taskDay"
              label="任务总天数"
              sortable
              width="130">
          </el-table-column>
          <el-table-column
              align="center"
              prop="taskValue"
              sortable
              width="140"
              label="任务价值"
              >

          </el-table-column>
          <el-table-column
              align="center"
              prop="taskDescription"
              label="任务描述">
          </el-table-column>

        </el-table>

      </el-col>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-pagination
          background
          @current-change="currentChange"
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
    this.getTotalGoing()
    console.log("form被创建了！！！！！！！！！！！！！！！！！")

  },
  mounted() {
    //在创建时获取数据
    this.getTables()

  },

  methods:{
    getTables(){
      axios.get("find_task_going_page",{
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
      axios.get("get_total",{
        params:{
          uid:this.$store.state.userInfo.id,
          tag:1
        }
      }).then((res)=>{
        console.log("输出分页总数")
        console.log(res.data.data)
        this.total=res.data.data
      }).catch((error)=>{
        console.log(error.data)
      })

    },
    currentChange(cuPage){
      this.current=cuPage
      this.getTables()


    }
  },

}
</script>

<style scoped>

</style>