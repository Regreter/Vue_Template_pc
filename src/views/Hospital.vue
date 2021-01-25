<template>
  <div class="">
    <h2>医院管理</h2>
    <table-check @childValue="childValue" :Question="Question"></table-check>
  </div>
</template>

<script>
import tableCheck from '../components/table.vue'
export default {
  components: {
    tableCheck
  },
  data() {
    return {
      Question: {
        ID: '1',
        Name: '问题一',
        Answer: '',
        Option: [{
          ID: '11',
          Name: '选项一'
        },{
          ID: '12',
          Name: '选项二'
        },{
          ID: '13',
          Name: '选项三'
        }]
      }
    };
  },
  methods: {
    childValue(childValue) {
      console.log(childValue);
    }
  }
}
</script>
<style scoped>

</style>