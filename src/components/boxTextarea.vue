<template>
  <div class="box-textarea">
    <textarea rows="1" v-model="paraInput" @keyup="cekKey($event)"/>
    <!-- <textarea rows="1" v-model="paraInput" @keyup="checkText($event)"/> -->
    <p v-html="paragraph"></p>
    <p>{{ paraInput}}</p>
    <p>Your speed is: {{ userSpeed }}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      startIndex: 0,
      wordLength: 0,
      paraInput: "",
      paraInputTemp: "",
      userSpeed: "",
      paragraph:
        "Technology has forever changed the world we live in. We're online, in one way or another, all day long. Our phones and computers have become reflections of our personalities, our interests, and our identities. They hold much that is important to us",

      paragraphTemp:
        "Technology has forever changed the world we live in. We're online, in one way or another, all day long. Our phones and computers have become reflections of our personalities, our interests, and our identities. They hold much that is important to us",

      paraTemp: "Technology",

      netAPI: null
    };
  },

  methods: {
    cekKey($event) {
      let keyKode = $event.which || $event.keyCode;

      if (keyKode == 32) {
        this.wordLength += this.paraInput.trim().length + 1;
        this.userSpeed = this.wordLength / 5 + " Word Per Minute.";

        if (this.paraInput.length > 0) {
          if (this.paragraph.includes(this.paraInput)) {
            this.paragraph = this.paragraph.replace(
              this.paraInput,
              `<b>${this.paraInput}</b>`
            );
            this.paraInputTemp += this.paraInput + " ";
            this.paraInput = "";
          }
        } else {
          this.paraInput = "";
        }
      }
    },

    mounted() {},

    checkText($event) {
      if (this.paraTemp.includes(this.paraInput)) {
        this.paragraph = this.paragraph.replace(
          this.paraInput,
          `<b>${this.paraInput}</b>`
        );
        console.log("aaa");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
  width: 500px;
  max-width: l;
}

.color-para {
  color: orange;
}
</style>
