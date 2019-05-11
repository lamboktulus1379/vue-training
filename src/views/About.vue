<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Our Team</h3>
   
   <div :style="boxWrapper">
     <boxContent :boxName='item.name' :boxPrice='item.position' v-for="(item, index) in items" :key="index">
     </boxContent>
    </div>
  </div>
</template>
<script>
  import boxContent from '../components/boxContent'
  export default {
    data: () =>{
      return {
          boxWrapper: {
            display: 'flex',
            'flexWrap': 'wrap'
          },

          items: [
            {name: "Andi", position:"Programmer"},
            {name: "Budi", position:"Programmer"},
            {name: "Indra", position:"Programmer"},
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
    },
  }
</script>
