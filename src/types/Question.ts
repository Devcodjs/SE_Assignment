export type QuestionType = "mcq" | "integer" | "coding";
export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer?: number | string;
};
