<template>
  <div class="box-task">
    <template>
      <div class="container">
        <h3>Here your task</h3>
      </div>
    </template>
    <div class="wrapper">
      <div class="aside-task">
        <ul>
          <li>All Task</li>
          <li>Completed</li>
          <li>Important</li>
        </ul>
      </div>
      <div class="main-task">
        <template>
          <template>
            <div class="box-task-container">
              <template>
                <div
                  v-for="(task, indexTask) in taskContentTemps"
                  :key="indexTask"
                  class="box-content"
                  :style="{opacity: task.attach < 2 ? '1':'0.75'}"
                >
                  <template v-if="indexTask===indexEdit">
                    <div class="task-content">
                      <input type="text" placeholder="Title" v-model="taskInputTemps.name">
                    </div>
                    <div class="task-content">
                      <input
                        type="text"
                        placeholder="Description"
                        v-model="taskInputTemps.description"
                      >
                    </div>
                    <div class="task-content">
                      <button @click="saveEditTask(indexTask)">Save</button>
                      <button @click="cancelEditTask">Cancel</button>
                    </div>
                  </template>
                  <template v-else>
                    <div class="task-content">
                      <h3 :style="{color: task.attach < 2 ? '#171717':'#ccc'}">{{ task.name}}</h3>
                    </div>
                    <div class="task-content">
                      <span v-if="task.attach===1">Good</span>
                      <span v-else>{{ timeExpired(task.start, task.end, indexTask) }}</span>
                    </div>
                    <div class="task-content">{{ task.description}}</div>
                    <div class="task-content">
                      <template v-if="task.attach < 2">
                        <button @click="deleteTask(indexTask)">Delete</button>
                        <button @click="editTask(indexTask)">Edit</button>
                      </template>
                      <template v-else>
                        <button>Details</button>
                        <button @click="deleteTask(indexTask)">Remove</button>
                      </template>
                    </div>
                    <div
                      v-if="task.attach < 2"
                      :style="{background: task.attach===1 ? '#5dbcd2' : '#c74808'}"
                      class="task-content"
                      @click="taskCompleted(indexTask)"
                    >{{ task.attach===1 ? "Completed" : "Pending"}}</div>

                    <div v-else :style="{background: '#ccc'}" class="task-content">:(</div>
                  </template>
                </div>
              </template>

              <template v-if="hasClick">
                <div class="box-content">
                  <div class="task-content">
                    <input type="text" placeholder="Title" v-model="taskInputTemps.name">
                  </div>
                  <div class="task-content"></div>
                  <div class="task-content flex-expand">
                    <input
                      type="text"
                      placeholder="Description"
                      v-model="taskInputTemps.description"
                    >
                  </div>
                  <div class="task-content">
                    <button @click="createTask">Create</button>
                    <button @click="cancelTask">Cancel</button>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="box-content">
                  <button @click="addTask" class="flex-expand-button">+</button>
                </div>
              </template>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  data: () => {
    return {
      taskContentTemps: [],
      hasClick: false,
      indexEdit: null,

      taskInputTemps: {
        name: "",
        start: "29/05/2019, 10am",
        end: "30/05/2019, 10am",
        description: "",
        attach: 0
      }
    };
  },

  props: ["taskContents"],

  methods: {
    addTask() {
      this.hasClick = true;
    },
    createTask() {
      if (
        this.taskInputTemps.name.length > 0 &&
        this.taskInputTemps.description.length > 0
      ) {
        this.taskContentTemps.push(this.taskInputTemps);
        this.taskInputTemps = {
          name: "",
          start: "29/05/2019, 10am",
          end: "30/05/2019, 10am",
          description: "",
          attach: 0
        };
        this.hasClick = false;
      }
    },
    cancelTask() {
      this.hasClick = false;
    },
    editTask(iTask) {
      this.indexEdit = iTask;

      this.taskInputTemps.name = this.taskContentTemps[iTask].name;
      this.taskInputTemps.description = this.taskContentTemps[
        iTask
      ].description;
    },
    saveEditTask(iTask) {
      this.taskContentTemps[iTask] = this.taskInputTemps;
      this.indexEdit = null;
      this.taskInputTemps = {
        name: "",
        start: "29/05/2019, 10am",
        end: "30/05/2019, 10am",
        description: "",
        attach: 0
      };
    },
    cancelEditTask() {
      this.indexEdit = null;
      this.taskInputTemps = {
        name: "",
        start: "29/05/2019, 10am",
        end: "30/05/2019, 10am",
        description: "",
        attach: 0
      };
    },
    deleteTask(indexTask) {
      this.taskContentTemps.splice(this.taskContentTemps[indexTask], 1);
    },
    taskCompleted(iTask) {
      this.taskContentTemps[iTask].attach = 1;
    },
    timeExpired(start, end, iTask) {
      let retExpired = "";
      let dateEnd = end.split(",")[0].trim();
      let timeEnd = end.split(",")[1].trim();

      let timeMilliSecondStart = new Date();
      let timeMilliSecondEnd = new Date(
        dateEnd.split("/")[2],
        dateEnd.split("/")[1] - 1,
        dateEnd.split("/")[0],
        timeEnd.substring(0, 2),
        0,
        0
      );

      let timeToEnd = parseInt(
        timeMilliSecondEnd.getTime() - timeMilliSecondStart.getTime()
      );

      if (timeToEnd < 1) {
        retExpired = "Expired";

        this.taskContentTemps[iTask].attach = 5;
      } else {
        retExpired =
          this.convertMilliseconds(timeToEnd).day +
          ":" +
          this.convertMilliseconds(timeToEnd).hour +
          ":" +
          this.convertMilliseconds(timeToEnd).minute +
          ":" +
          this.convertMilliseconds(timeToEnd).seconds +
          " left.";
      }

      return retExpired;
    }
  },

  beforeMount() {
    this.taskContentTemps.push(...this.taskContents);
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.container {
  background: #f5f5f5;
  height: 50px;
  h3 {
    text-align: center;
    padding: 5px;
  }
}
.wrapper {
  display: flex;
  flex-flow: row;

  .aside-task {
    width: 20%;
    box-shadow: 1px 1px 1px #ccc;
    background: #f5f5f5;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 5px 5px;
        color: #5dbcd2;
        font: normal bold 14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .main-task {
    width: 80%;

    .box-task-container {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      padding: 0 5px;

      .box-content {
        display: flex;
        flex-flow: column;
        border: 1px solid #ccc;
        width: 200px;
        min-height: 150px;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 10px;
        margin-right: 5px;
        box-shadow: 2px 2px 2px #ccc;

        .task-content {
          width: 100%;
          border: 1px solid #f5f5f5;
          display: flex;
          flex-flow: row;
          //   flex: 1 1 0;
          justify-content: center;
          align-items: center;

          button {
            width: 100%;
            text-align: center;
          }

          input {
            width: 100%;
            outline: none;
            border: none;
            font-size: 17px;
            text-align: center;
            background: none;
            height: 100%;
          }

          &:first-child {
            padding: 7.5px 0;
            border-bottom: 1px solid #ccc;
            background: white;

            h3 {
              font: bold 17px "Gill Sans", "Gill Sans MT", Calibri,
                "Trebuchet MS", sans-serif;
            }
          }
          &:nth-child(2) {
            border-bottom: 1px solid #ccc;
            text-align: left;
            min-height: 25px;
            span {
              font: italic 0.75em "Courier New", Courier, monospace;
            }
          }
          &:nth-child(3) {
            min-height: 75px;
            padding: 5px;
          }
          &:last-child {
            padding: 5px 0;
            color: white;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .flex-expand {
      flex: 1 1 0;
    }

    .flex-expand-button {
      flex: 1 1 100%;
      width: 100%;
      font-size: 48px;
      background: none;
      cursor: pointer;
    }
  }
}
</style>
