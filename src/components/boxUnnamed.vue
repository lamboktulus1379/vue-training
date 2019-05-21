<template>
  <div class="box-unnamed">
    Full Name :
    <input v-model="userFullName" @input="retFullName">
    <br>Email :
    <input
      :class="{isNotCorretData: isNotCorretData}"
      v-model="userEmail"
      @keyup="retEmail"
      @blur="retEmailMask"
    >
    <br>Salary:
    <input v-model="userSalary" @input="retSalary">
    <br>Date In:
    <input v-model="userDateIn">
    <br>Date Out:
    <input v-model="userDateOut" @blur="retDifference">
    <br>

    <p ref="emailMask"></p>
    <p ref="currentDate">{{ currentDate }}</p>
    <p ref="timeDifference">{{ currentDate }}</p>
    <p ref="timeDifference">{{ currentDate }}</p>
    <p>{{ this.getDevice() }}</p>

    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userFullName: "",
      userEmail: "",
      userSalary: "",
      userDateIn: "12/29/2019",
      userDateOut: "12/30/2019",
      isNotCorretData: true,
      currentDate: ""
    };
  },

  methods: {
    retEmailMask() {
      this.$refs.emailMask.innerHTML = this.maskEmail2(this.userEmail);
    },
    registerUser() {},
    retFullName() {
      this.userFullName = this.capitalizeWord(this.userFullName);
    },
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
