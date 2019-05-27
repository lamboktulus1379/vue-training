<template>
  <div class="box-products">
    <input type="text" placeholder="Search products" @input="searchItem">
    <table>
      <tr>
        <th
          @click="sortProducts(dh)"
          v-for="(dh, index) in Object.keys(dataHead[0])"
          :key="index"
        >{{ dh.charAt(0).toUpperCase() + dh.slice(1) }}</th>
        <th colspan="2">Action</th>
      </tr>
      <template v-for="db in perPage">
        <tr v-if="currentPage*db-1 < dataTemp.length" :key="db">
          <td v-for="(dv, keyObject) in dataTemp[(currentPage*db)-1]" :key="`d-${keyObject}`">
            <input v-if="checkIdData(db)" v-model="tempInput[keyObject]">
            <label v-else>{{ dv }}</label>
          </td>
          <td @click="changeData(db)" v-if="editIndex===db">Save</td>
          <td @click="changeIdData(db)" v-else>Edit</td>
          <td @click="cancelEdit" v-if="editIndex===db">Cancel</td>
          <td v-else @click="deleteData(db)">Delete</td>
        </tr>
      </template>
      <template>
        <tr class="products-pagination">
          <td :colspan="Object.keys(dataHead[0]).length + 2">
            <span
              :class="{spanActive: cekPage(indexPage) }"
              @click="movePage(indexPage)"
              v-for="(indexPage) in Math.ceil(dataTemp.length/perPage)"
              :key="`p-${indexPage}`"
            >{{ indexPage }}</span>
          </td>
        </tr>
      </template>
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
      dataTemp: [],

      currentPage: 1,
      perPage: 2,
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
    cancelEdit() {
      this.editIndex = -1;
    },
    movePage(idx) {
      this.currentPage = idx;
      this.editIndex = -1;
    },
    cekPage(idx) {
      if (this.currentPage == idx) {
        return true;
      }
      return false;
    },
    deleteData(idx) {
      this.dataTemp.splice(idx - 1, 1);
    },
    changeData() {
      this.dataTemp[this.editIndex - 1] = this.tempInput;
      this.editIndex = -1;
    },
    changeIdData(idxClick) {
      this.editIndex = idxClick;
      this.tempInput = this.dataTemp[this.editIndex + this.currentPage - 2];
    },
    checkIdData(idx) {
      if (idx == this.editIndex) {
        return true;
      }
      return false;
    },
    sendProduct() {
      this.dataTemp.push(this.productInput);
      this.currentPage = Math.ceil(this.dataTemp.length / this.perPage);
    },
    sortProducts(dHead) {
      if (this.dataTemp.length < 1) {
        this.dataHead = this.dataHead.sort((a, b) =>
          a.dHead > b.dHead ? 1 : -1
        );
      } else {
        this.dataTemp = this.dataTemp.sort((a, b) =>
          a.dHead > b.dHead ? 1 : -1
        );
      }
    },
    searchItem($event) {
      this.dataTemp = this.dataHead.filter(function(dh) {
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
      console.log(this.dataTemp, $event.target.value);
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
    this.dataTemp.push(...this.dataHead);
    //console.log(Object.keys(this.dataHead[0]));

    // for (let i = this.currentPage; i < this.perPage; i++) {
    //   this.appendData.push(this.dataHead[this.currentPage]);
    // }

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
  width: 100%;
  margin-top: 15px;
  min-height: 200px;
  padding: 0;
  border-collapse: collapse;
  th,
  td {
    border-bottom: 1px solid #ccc;
  }
  th {
    padding: 10px;
    background: #5dbcd2;
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
    background: #ccc;
  }
  tr:nth-child(even) td {
    background: #fff;
  }
  tr:last-child td {
    border: none;
    background: none;
  }
  .products-pagination {
    td {
      text-align: center;
    }
  }
  span {
    box-sizing: border-box;
    text-align: center;
    border-radius: 50%;
    width: 20px;
    margin: 5px;
    padding: 2.5px;
    height: 20px;
  }
  .spanActive {
    font-weight: bold;
    background: #ccc;
  }
  span:hover {
    cursor: pointer;
  }
}
</style>
