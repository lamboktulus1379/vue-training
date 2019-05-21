<template>
  <div class="quiz">
    <h1>Prepare yourself Bro!</h1>
    <boxQuiz :questions="questions"></boxQuiz>

    <div class="game-board">
      <div v-for="(item, key) in boards" :key="key">
        {{ }}
        <input maxlength="1" v-for="(val, key2) in item" :key="key2" :value="val">
      </div>
    </div>
  </div>
</template>

<script>
import boxQuiz from "../components/boxQuiz";
export default {
  data: () => {
    return {
      boards: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],

      questions: [
        {
          text: "Inside which HTML element do we put the JavaScript?",
          options: [
            { content: "<javascript>", mark: 10 },
            { content: "<js>", mark: 10 },
            { content: "<script>", mark: 10 },
            { content: "<scripting>", mark: 10 }
          ],
          answerIndex: 2
        },
        {
          text:
            "What is the correct JavaScript syntax to change the content of the HTML element below ? <p id='demo'>This is a demonstration.</p>",
          options: [
            {
              content:
                "document.getElementById('demo').innerHTML = 'Hello World!'",
              mark: 10
            },
            {
              content: "document.getElement('p').innerHTML = 'Hello World!",
              mark: 10
            },
            { content: "#demo.innerHTML = 'Hello World!", mark: 10 },
            {
              content:
                "document.getElementByName('p').innerHTML = 'Hello World!",
              mark: 10
            }
          ],
          answerIndex: 0
        },
        {
          text: "Where is the correct place to insert a JavaScript?",
          options: [
            {
              content: "The <head> section",
              mark: 10
            },
            {
              content: " The <body> section",
              mark: 10
            },
            {
              content:
                " Both the <head> section and the <body> section are correct",
              mark: 10
            }
          ],
          answerIndex: 2
        },
        {
          text:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
          options: [
            {
              content: "<script src='xxx.js'>",
              mark: 10
            },
            {
              content: "<script name='xxx.js'>",
              mark: 10
            },
            {
              content: "<script href='xxx.js'",
              mark: 10
            }
          ],
          answerIndex: 0
        },
        {
          text: "The external JavaScript file must contain the <script> tag.",
          options: [
            {
              content: "True",
              mark: 10
            },
            {
              content: "False",
              mark: 10
            }
          ],
          answerIndex: 1
        }
      ]
    };
  },

  components: {
    boxQuiz
  },

  methods: {
    selectItem($event) {
      window.getSelection();
    },
    createGameBoard() {
      for (let i = 0; i < 9; i++) {
        let existed = [];
        for (let j = 0; j < 9; j++) {
          while (this.boards[i][j] === 0) {
            let val = Math.floor(Math.random() * 9) + 1;
            if (existed.includes(val)) {
            } else {
              this.boards[i][j] = val;
              existed.push(val);
            }
          }
        }
      }
    }
  },

  beforeMount() {
    this.createGameBoard();
  }
};
</script>

<style lang="scss" scoped>
.game-board {
  margin: 15px;

  div {
    display: flex;
    flex-flow: row;
    justify-content: center;
    justify-items: center;

    input {
      display: flex;
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      text-align: center;
      font-size: 1.5em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  }
}
</style>
