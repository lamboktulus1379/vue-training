<template>
  <div class="select">
    <select @change="$emit('input', $event.target.value)">
      <option v-for="(city, index) in cities" :key="index" :value="city">{{ city }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },
  props: ["cities"]
};
</script>

