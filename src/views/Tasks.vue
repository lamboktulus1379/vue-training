<template>
  <div class="tasks">
    <boxTasks :taskContents="tasks"></boxTasks>
  </div>
</template>

<script>
import boxTasks from "../components/boxTask";
export default {
  data: () => {
    return {
      tasks: [
        {
          name: "Bug Fixed",
          start: "25/05/2019, 10am",
          end: "25/05/2019, 10am",
          description: "Fix navigation.",
          attach: 0
        },

        {
          name: "New feature",
          start: "26/05/2019, 10am",
          end: "27/05/2019, 10am",
          description: "Add sticky navigation.",
          attach: 0
        },

        {
          name: "New application",
          start: "27/05/2019, 10am",
          end: "28/05/2019, 10am",
          description: "Add gallery menu.",
          attach: 0
        },
        {
          name: "Research assignment",
          start: "28/05/2019, 10am",
          end: "29/05/2019, 10am",
          description:
            "Determine ways to bust those caches after every update of the website.",
          attach: 0
        },

        {
          name: "Performance improvement",
          start: "29/05/2019, 10am",
          end: "30/05/2019, 10am",
          description: "Think critically.",
          attach: 0
        }
      ]
    };
  },

  components: {
    boxTasks
  }
};
</script>

<style lang="scss" scoped>
</style>
