<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Our Team</h3>
   
   <div :style="boxWrapper">
     <boxContent :boxName='item.title' :boxPrice='item.completed' v-for="(item, index) in items" :key="index">
     </boxContent>
    </div>
  </div>
</template>
<script>
  import boxContent from '../components/boxContent'
  import axios from 'axios'

  export default {
    data: () =>{
      return {
          boxWrapper: {
            display: 'flex',
            'flexWrap': 'wrap'
          },

          items: [
            {name: "Shoes", price:"$10"},
            {name: "Shirt", price:"$5"},
            {name: "Socks", price:"$2"},
            {name: "Hat", price:"$1"},
            {name: "Jacket", price:"$7"},
          ],

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
      boxContent,
      navigationMenu,
    },
    
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((data1) => {
          this.items = data1.data
        })
        .catch((error)=> {
        })
    }
  }
</script>
