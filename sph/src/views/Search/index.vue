<template>
  <div>
    <el-card class="box-card">
      <Excel @getResult="getResult"/>
      <el-table :data="dataShow" border style="width: 100%">
        <el-table-column prop="学号" label="学号" width="180"></el-table-column>
        <el-table-column prop="学生" label="学生" width="180"></el-table-column>
        <el-table-column prop="成绩" label="地址"></el-table-column>
      </el-table>
      <!-- 处理xlsx组件 -->
      
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="pageSizes"
          :page-size="page"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
         
        ></el-pagination>
      </div>
     
    </el-card>
  </div>
</template>

<script>
  import Excel from '../Search/Excel.vue';
  export default {
    data() {
      return {
        tableData: [],
        employees: [],
        currentPage1: 1,
        pageSizes: [3, 5, 10, 30],
        page: 5,
        total: 0,
        pageNum: 1,
        dataShow: [],
      };
    },
    components: {
      Excel
    },
    // created() {
    //   // this.queryData();
    //   this.getList();
    // },
    methods: {
      getResult(res){
          this.employees = JSON.parse(JSON.stringify(res))
          this.tableData = JSON.parse(JSON.stringify(res))
          // console.log(res,this.employees)
          this.getList()
      },
      getList() {
        // es6过滤得到满足搜索条件的展示数据list
        this.total = this.tableData.length;
        this.pageNum = Math.ceil(this.total / this.page) || 1;
        // console.log(this.pageNum)
        // console.log(this.employees);
        for (let i = 0; i < this.pageNum; i++) {
          this.tableData[i] = this.employees.slice(
            this.page * i,
            this.page * (i + 1),
          );
          // console.log(  this.tableData[i])
        }
        //  获取到数据后显示的第一页内容
        this.dataShow = this.tableData[this.currentPage1 - 1];
        //  console.log(this.dataShow,'+++');
        //返回数据
        return this.dataShow;
      },

     

      //分页操作，  每页多少条
      handleSizeChange(val) {
        this.page = val;
        console.log(`每页 ${val} 条`);
        this.getList();
      },
      //分页操作,当前第几页
      handleCurrentChange(val) {
        this.currentPage1 = val;
        console.log(`当前页: ${val}`);
        this.getList();
      },
    },
  };
</script>

<style lang='less' scoped>
  .block{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
