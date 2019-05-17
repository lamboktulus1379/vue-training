<template>
  <div class="vw-products">
    <h1>Products</h1>
    <boxProducts :dataHead="products"></boxProducts>
  </div>
</template>

<script>
import boxProducts from "../components/boxProducts";
export default {
  data: () => {
    return {
      products: [
        {
          name: "Kipas Angin 1",
          price: "250",
          quantity: "2",
          description: "Kecepatan Rata-rata 20km/jam"
        },
        {
          name: "Kipas Angin 2",
          price: "350",
          quantity: "3",
          description: "Kecepatan Rata-rata 25km/jam"
        },
        {
          name: "Kipas Angin 3",
          price: "300",
          quantity: "4",
          description: "Kecepatan Rata-rata 30km/jam"
        },
        {
          name: "Kipas Angin 4",
          price: "800",
          quantity: "9",
          description: "Kecepatan Rata-rata 70km/jam"
        }
      ]
    };
  },

  components: {
    boxProducts
  }
};
</script>
<style lang="sass" scoped>
    
</style>
