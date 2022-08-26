/* export class Question {
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    isCorrectAnswer(choice) {
        return choice === this.answer
    }
} */

export class Question {
  constructor(text, choices, points) {
      this.text = text
      this.choices = choices
      this.points = points
  }
  
  questionPoints(choice) {
      return this.points[choice];
  }
}