

export const questions = [
  {
    text: 'React Native cho phép viết 1 lần code và chạy được cả Android lẫn iOS.',
    answer: true,
  },
  {
    text: 'useState là một React Hook dùng để quản lý trạng thái (state).',
    answer: true,
  },
  {
    text: 'Trong React Native, phải dùng thẻ <div> để tạo layout giống HTML.',
    answer: false,
  },
  {
    text: 'Expo là một công cụ giúp phát triển và chạy thử app React Native dễ dàng hơn.',
    answer: true,
  },
  {
    text: 'StyleSheet.create() dùng để định nghĩa style cho component.',
    answer: true,
  },
];

export class QuizBrain {
  constructor(questionList) {
    this.questionList = questionList;
    this.questionIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questionList[this.questionIndex];
  }

  checkAnswer(userPickedAnswer) {

    if (this.isFinished()) return;

    const correctAnswer = this.getCurrentQuestion().answer;
    if (userPickedAnswer === correctAnswer) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.isFinished()) return;
    this.questionIndex++;
  }

  isFinished() {
    return this.questionIndex >= this.questionList.length;
  }

  getProgressText() {
    return `Câu ${this.questionIndex + 1}/${this.questionList.length}`;
  }

  getScoreText() {
    return `Điểm: ${this.score}/${this.questionList.length}`;
  }
}
