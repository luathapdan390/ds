
export enum QuestionType {
  MCQ = 'MCQ',
  TRANSFORMATION = 'TRANSFORMATION',
  CLOZE = 'CLOZE',
  TRUE_FALSE = 'TRUE_FALSE'
}

export interface Question {
  id: string;
  section: string;
  type: QuestionType;
  prompt?: string;
  questionText?: string;
  options?: string[];
  correctAnswer: string | string[]; // Array for multiple possible correct transformation answers
  image?: string;
}

export interface ExamData {
  title: string;
  sections: Section[];
}

export interface Section {
  title: string;
  instructions: string;
  questions: Question[];
  passage?: string; // For Cloze or Reading sections
}

export interface UserAnswers {
  [key: string]: string;
}
