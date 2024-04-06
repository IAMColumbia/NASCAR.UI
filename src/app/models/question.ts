export class Question{
    Question: string;
    Answer1: string;
    Answer2: string;
    Answer3: string;
    CorrectAnswer: string;

    constructor(question: string, answer1: string, answer2: string, answer3: string, correctAnswer: string){
        this.Question = question;
        this.Answer1 = answer1;
        this.Answer2 = answer2;
        this.Answer3 = answer3;
        this.CorrectAnswer = correctAnswer;
    }
}