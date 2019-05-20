<template>
  <div class="box-unnamed">
    Email :
    <input :class="{isNotCorretData: isNotCorretData}" v-model="userEmail" @keyup="retEmail">
    <br>Salary:
    <input v-model="userSalary" @input="retSalary">
    <br>Date In:
    <input v-model="userDateIn">
    <br>Date Out:
    <input v-model="userDateOut" @blur="retDifference">
    <br>
    <p>{{ currentDate }}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userEmail: "",
      userSalary: "",
      userDateIn: "12/29/2019",
      userDateOut: "12/30/2019",
      isNotCorretData: true,
      currentDate: ""
    };
  },

  methods: {
    retEmail() {
      if (this.checkEmail(this.userEmail)) {
        this.isNotCorretData = false;
      } else {
        this.isNotCorretData = true;
      }
    },
    retSalary(e) {
      this.userSalary = this.parseThousand(this.userSalary);
    },
    retDifference() {
      console.log(this.timeDifference(this.userDateIn, this.userDateOut));
      this.currentDate = this.convertTimeFormat(this.userDateOut);
      this.getDevice();
    }
  }
};
</script>

<style lang="scss" scoped>
.isNotCorretData {
  color: red;
}
</style>
