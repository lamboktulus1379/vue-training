<template>
  <div id="userImage">
    <p>Email: {{ userEmail }}</p>
    <p>Password: {{ userPassword }}</p>
    <p>Gender: {{userGender}}</p>
    <p>Hobby:</p>
    <ul>
      <li v-for="(hobby, index) in userHobby" :key="index">{{ hobby }}</li>
    </ul>
    <p>Place of Birth: {{ userPlaceOfBirth}}</p>
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

  props: [
    "userEmail",
    "userPassword",
    "userGender",
    "userHobby",
    "userPlaceOfBirth",
    "userToken"
  ]
};
</script>

