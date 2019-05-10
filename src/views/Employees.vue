<template>
  <div class="users">
    <h1>This is an about Employees</h1>
    <h3>Our Employees</h3>
   <div :style="employeeWrapper">
     <boxContent 
      v-for="(employee, index) in employeees" :key="index"
      :employeeName='employee.title' 
      :employeeAddress='employee.id'
      :employeeImage='employee.thumbnailUrl'>
     
     </boxContent>
    </div>
  </div>
</template>
<script>
  import boxContent from '../components/boxEmployee'
  import axios from 'axios'

  export default {
    data: () =>{
      return {
          employeeWrapper: {
            display: 'flex',
            'flexWrap': 'wrap'
          },

          employeees: [],

          boxContainer: {
            width: '300px',
            height: '300px',
            border: '1px solid #ccc',
            background: 'green'
          },
          todos:[]
      }
    },

    components: {
      boxContent
    },
    
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((data1) => {
          this.employeees = data1.data
        })
        .catch((error)=> {
        })
    }
  }
</script>
