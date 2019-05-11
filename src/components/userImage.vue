<template>
  <div id="userImage">
    <p>Email: {{ userEmail }}</p>
    <p>Token: {{ userToken }}</p>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      cookieName: "userToken"
    };
  },
  methods: {},

  props: ["userEmail", "userToken"]
};
</script>

