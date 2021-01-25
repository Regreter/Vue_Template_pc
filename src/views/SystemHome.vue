<template>
  <div class="">
    <div class="search">
      <el-input v-model="searchInput"></el-input>
      <el-button @click="toSearch">搜索</el-button>
    </div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="number"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市">
      </el-table-column>
      <el-table-column
        prop="area"
        label="区">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="50">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, scope.$index)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑表格" :visible.sync="edit" width="30%">
      <el-form label-width="80px">
        <el-form-item label="序号">
          <el-input v-model="editObj.number" readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-input v-model="editObj.date" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="editObj.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="省" prop="province">
          <el-select v-model="editObj.province" 
                     placeholder="请选择"
                     @change="changeProvince">
            <el-option
              v-for="item in Province"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="市" prop="city">
          <el-select v-model="editObj.city" 
                     placeholder="请选择"
                     @change="changeCity">
            <el-option
              v-for="item in City"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="区" prop="area">
          <el-select v-model="editObj.area" 
                     placeholder="请选择"
                     @change="changeCity">
            <el-option
              v-for="item in Area"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="editDo">确 定</el-button>
      </span>
    </el-dialog>

    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="currentPage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
import provinceData from "../common/province";
import cityData from "../common/city";
import areaData from "../common/area";
export default {
  data() {
    return {
      readonly: Boolean(true), // 文本框设置只读
      editObj: {
        number: '',
        date: '',
        name: '',
        province: '',
        city: '',
        area: ''
      },
      tableData: [{
        number: 1,
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        area: '上海市普陀区金沙江路 1518 弄'
      }, 
      {
        number: 2,
        date: '2016-05-04',
        name: '李小发',
        province: '上海',
        city: '普陀区',
        area: '上海市普陀区金沙江路 1517 弄'
      }, {
        number: 3,
        date: '2016-05-01',
        name: '刘四二',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        number: 4,
        date: '2016-05-04',
        name: '王俊峰',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        number: 5,
        date: '2016-05-01',
        name: '马小跳',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        number: 6,
        date: '2016-05-04',
        name: '赵大龙',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        number: 7,
        date: '2016-05-01',
        name: '陈二狗',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        number: 8,
        date: '2016-05-03',
        name: '吴三桂',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      edit:false,
      index: '',
      currentPage:1,  //默认是当前页
      pageSize:4,   //默认一个页面显示多少
      Province: provinceData,
      Area: [],
      City: [],
      searchInput: '',
    }
  },
  watch: {
    searchInput: function() {
      console.log('===');
      if (this.searchInput == '') {
        console.log('---');
        this.tableData = [{
          number: 1,
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          area: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
          number: 2,
          date: '2016-05-04',
          name: '李小发',
          province: '上海',
          city: '普陀区',
          area: '上海市普陀区金沙江路 1517 弄'
        }, {
          number: 3,
          date: '2016-05-01',
          name: '刘四二',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          number: 4,
          date: '2016-05-04',
          name: '王俊峰',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          number: 5,
          date: '2016-05-01',
          name: '马小跳',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          number: 6,
          date: '2016-05-04',
          name: '赵大龙',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          number: 7,
          date: '2016-05-01',
          name: '陈二狗',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          number: 8,
          date: '2016-05-03',
          name: '吴三桂',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄'
        }];
      }
    }
  },
  mounted() {
  },
  methods: {
    // 编辑
    handleClick(row, $index) {
      this.edit = true;
      this.index = $index;
      this.editObj.number = row.number;
      this.editObj.date = row.date;
      this.editObj.name = row.name;
      this.editObj.province = row.province;
      this.editObj.city = row.city;
      this.editObj.area = row.area;
    },
    sizeChange(val) {
      this.pageSize = val;
    },
    currentChange(val) {
      this.currentPage = val;
    },
    // 编辑确定按钮
    editDo() {
      this.tableData[this.index].date = this.editObj.date;
      this.tableData[this.index].name = this.editObj.name;
      for(let i in this.Province) {
        if (this.editObj.province == this.Province[i].value) {
          this.tableData[this.index].province = this.Province[i].label;
          break;
        }
      }
      for(let i in this.City) {
        if (this.editObj.city == this.City[i].value) {
          this.tableData[this.index].city = this.City[i].label;
          break;
        }
      }
      for(let i in this.Area) {
        if (this.editObj.area == this.Area[i].value) {
          this.tableData[this.index].area = this.Area[i].label;
          break;
        }
      }
      this.edit = false;
    },
    // 根据省份选择城市
    changeProvince(val) {
      cityData.forEach((element) => {
        if (element[0].value.substring(0,2) == val) {
          this.City = element;
          this.editObj.city = this.City[0].label;
          console.log(this.City);
        }
      })
    },
    // 根据城市选择地区
    changeCity(val) {
      areaData.forEach((element) => {
        element.forEach((el) => {
          if (el[0].value.substring(0, 4) == val) {
            this.Area = el;
            this.editObj.area = this.Area[0].label;
            console.log(this.Area);
          }
        });
      });
    },
    // 模糊搜索
    searchAll(a, x) {
      let arr = [];
      if (x) {
        a.filter((value) => {
          if (value.name.includes(x)) {
            arr.push(value);
            this.tableData = arr;
            console.log(this.tableData);
          }
        })
      }
    },
    toSearch() {
      this.searchAll(this.tableData, this.searchInput);
    }
  }
}
</script>
<style scoped>
  .search {
    display: grid;
    grid-template-columns: 80% 20%;
    grid-column-gap: 20px;
    margin: 0 20px 20px 80%;
  }
  .el-pagination {
    margin: 10px 20px 20px 70%;
  }
</style>