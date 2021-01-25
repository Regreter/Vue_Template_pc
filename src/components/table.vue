<template>
  <div class="table">
    <!-- <el-table
      :data="tableData"
      border
      style="width: 100%"
      >
      <el-table-column
        prop="question"
        label="问题">
      </el-table-column>
      <el-table-column
        label="正确  不正确  不知道"
        width="100px">
         <template solt-scope="scope">
          <el-radio :label="scope.$index" v-model="radio"></el-radio>
         </template>
        
      </el-table-column>
    </el-table> -->
    <table>
      <tr>
        <td>1).问题一</td>
        <td><input type="radio" value="1" name="correct" checked="true" color="#FFCC33" /></td>
        <td><input type="radio" name="correct" color="#FFCC33" /></td>
        <td><input type="radio" name="correct" color="#FFCC33" /></td>
      </tr>
      <tr>
        <td>2).问题二</td>
        <td><input type="radio" value="1" name="correct" checked="true" color="#FFCC33" /></td>
        <td><input type="radio" name="correct" color="#FFCC33" /></td>
        <td><input type="radio" name="correct" color="#FFCC33" /></td>
      </tr>
    </table>
    <h2>{{Question.Name}}</h2>
    <button @click="childValue(tableData)">按钮</button>
  </div>
</template>

<script>
export default {
  props: {
    Question: Object,
  },
  mounted() {
    console.log(this.Question);
    
  },
  data() {
    return {
      correct: '',
      radio1: '1',
      checkTrue: Boolean,
      checkFalse: Boolean,
      checkNotKnow: Boolean,
      radio: Boolean,
      tableData: [{
        question: '1).问题一',
        radio: '1'
      }]
    };
  },
  methods: {
    childValue(tableData) {
      this.$emit('childValue', tableData)
    }
  }
}
</script>
<style scoped>

</style>