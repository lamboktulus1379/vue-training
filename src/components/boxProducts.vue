<template>
  <div class="box-products">
    <input type="text" placeholder="Search products" @input="searchItem">
    <table>
      <tr>
        <th
          @click="sortProducts(dh)"
          v-for="(dh, indexA) in Object.keys(dataHead[0])"
          :key="indexA"
        >{{ dh.charAt(0).toUpperCase() + dh.slice(1) }}</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(db, indexA) in tempData" :key="`r-${indexA}`">
        <td v-for="(dv, index) in db" :key="`d-${index}`">
          <input v-if="indexA === editIndex" v-model="tempInput[index]">
          <label v-else>{{ dv }}</label>
        </td>
        <td @click="changeData()" v-if="editIndex===indexA">Save</td>
        <td @click="retId(indexA)" v-else>Edit</td>
        <td @click="delData(indexA)">Delete</td>
      </tr>
    </table>
    <template>
      <input type="text" placeholder="Product name" v-model="productInput.name">
      <input type="text" placeholder="Price" v-model="productInput.price">
      <input type="text" placeholder="Quantity" v-model="productInput.quantity">
      <input type="text" placeholder="Description" v-model="productInput.description">

      <button @click="sendProduct">Add</button>
    </template>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tempData: [],

      editIndex: -1,

      productInput: {
        name: "",
        price: "",
        quantity: "",
        description: ""
      },
      tempInput: {
        name: "",
        price: "",
        quantity: "",
        description: ""
      }
    };
  },
  props: ["dataHead"],
  methods: {
    delData(idx) {
      this.tempData.splice(idx, 1);
    },
    changeData() {
      this.tempData[this.editIndex] = this.tempInput;
      this.editIndex = -1;
    },
    retId(idxClick) {
      this.editIndex = idxClick;
      this.tempInput = this.tempData[this.editIndex];
    },
    editProduct(idx) {
      if (idx == this.editIndex) {
        return true;
      }
      return false;
    },
    sendProduct() {
      this.tempData.push(this.productInput);
    },
    sortProducts(dHead) {
      if (this.tempData.length < 1) {
        this.dataHead = this.dataHead.sort((a, b) =>
          a.dHead > b.dHead ? 1 : -1
        );
      } else {
        this.tempData = this.tempData.sort((a, b) =>
          a.dHead > b.dHead ? 1 : -1
        );
      }
    },
    searchItem($event) {
      this.tempData = this.dataHead.filter(function(dh) {
        if (
          Object.values(dh)
            .join(" ")
            .search($event.target.value) > -1
        ) {
          console.log("Values: ", Object.values(dh));
          console.log("Join: ", Object.values(dh).join(","));
          return true;
        }
      });
      console.log(this.tempData, $event.target.value);
    }
  },

  computed: {
    addProducts: function() {
      this.productInput.name = this.pName;
      this.productInput.price = this.pPrice;
      this.productInput.quantity = this.pQuantity;
      this.productInput.description = this.pDescription;

      console.log("computed");
    }
  },

  mounted() {
    //console.log(Object.keys(this.dataHead[0]));
    this.tempData.push(...this.dataHead);
    //a = [{asd:asd}, {asd:asd} , {asd:asd} , {asd:asd} , {asd:asd}]
    //b = []
    //b.push(a)
    //[[{asd:asd}, {asd:asd} , {asd:asd} , {asd:asd} , {asd:asd}]]
    //b.push(...a)
    //[{asd:asd}, {asd:asd} , {asd:asd} , {asd:asd} , {asd:asd}, {asd:asd}, {asd:asd} , {asd:asd} , {asd:asd} , {asd:asd}]
  }
};
</script>

<style lang="scss" scoped>
table {
  margin-top: 15px;
  padding: 0;
  border-collapse: collapse;
  th,
  td {
    border-bottom: 1px solid #ccc;
  }
  th {
    padding: 10px;
  }
  th:hover {
    cursor: pointer;
  }
  td {
    padding: 5px;
  }
  td:hover {
    cursor: pointer;
  }
  tr:nth-child(odd) td {
    background: #fff;
  }
  tr:nth-child(even) td {
    background: #ccc;
  }
}
</style>
