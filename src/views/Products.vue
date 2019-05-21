<template>
  <div class="vw-products">
    <h1>Products</h1>
    <boxProducts :dataHead="products"></boxProducts>

    <div class="products-graph">
      <canvas id="box-graph-canvas" width="480" height="640"></canvas>

      <button @click="dGraph()">Graph</button>
    </div>
  </div>
</template>

<script>
import boxProducts from "../components/boxProducts";
import boxGraph from "../components/boxGraph";
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

  methods: {
    dGraph() {
      this.drawGraph();
    }
  },

  components: {
    boxProducts,
    boxGraph
  }
};
</script>
<style lang="sass" scoped>
    
</style>
