export class Quiz {
    constructor(questions) {
        this.questions = questions
        this.score = 0
        this.questionIndex = 0
    }

    getCurrentQuestion() {
        return this.questions[this.questionIndex]
    }

    validateAndContinue(answer) {            
      this.score += this.getCurrentQuestion().questionPoints(answer);
      this.questionIndex++;      
    }

    maxPoints(){
      let max = 0;
      this.questions.forEach(q => {
        max += q.points[0];
      });
      return max;
    }

    percentage(){
      return Math.round( (this.score / this.maxPoints() * 100) );
    }

    isEnded() {
        //go to hell
        //gallina tiene huevos
        return this.questions.length === this.questionIndex
    }

}