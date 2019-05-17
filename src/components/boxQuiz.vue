<template>
  <div class="box-quiz">
    <ol v-if="questionsTemp.length > 0" class="box-quiz-question">
      <li>
        {{ questionsTemp[currentQuestion].text }}
        <ol class="box-quiz-option">
          <li
            v-for="(option, indexOption) in questionsTemp[currentQuestion].options"
            :key="indexOption"
          >
            <input
              @input="saveAnswer(currentQuestion, indexOption)"
              :value="indexOption"
              :name="currentQuestion"
              type="radio"
            >
            {{ option.content }}
          </li>
        </ol>
      </li>
    </ol>
    <template>
      <div class="question-page">
        <button v-if="currentQuestion > 0" @click="previousQuestion">Previous</button>
        <button v-if="currentQuestion < questionsTemp.length - 1" @click="nextQuestion">Next</button>
        <button v-else @click="finishQuiz">Finish Quiz</button>
      </div>
    </template>

    <template>
      <p ref="userMark"></p>
    </template>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      questionsTemp: [],
      userAnswers: [],
      currentQuestion: 0
    };
  },
  props: ["questions"],

  methods: {
    saveAnswer(qNumber, qAnswer) {
      this.userAnswers[qNumber] = qAnswer;

      console.log(this.userAnswers.length);
    },
    nextQuestion() {
      if (this.currentQuestion < this.questionsTemp.length - 1) {
        this.currentQuestion++;
      }
    },
    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    finishQuiz() {
      let count = 0;
      for (let i = 0; i < this.questionsTemp.length; i++) {
        if (this.questionsTemp[i].answerIndex == this.userAnswers[i]) {
          count++;
        }
      }
      if (count == 5) {
        his.$refs.userMark.innerHTML =
          "Great, You answer all questions correctly." + count;
      } else {
        this.$refs.userMark.innerHTML = "Your correct answer is " + count;
      }
    }
  },
  mounted() {
    this.questionsTemp.push(...this.questions);
    //console.log(this.questionsTemp);
  }
};
</script>

<style lang="scss" scoped>
ol {
  list-style: none;
}
</style>
