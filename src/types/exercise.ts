export interface WeightHistory {
  weight: number;
  difficulty: number;
  date: string;
}

export interface ExerciseHistory {
  [exerciseName: string]: WeightHistory[];
}