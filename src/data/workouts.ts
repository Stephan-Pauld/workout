export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  videoUrl?: string;
}

export interface Superset {
  exercises: Exercise[];
}

export interface WorkoutDay {
  focus: string;
  supersets: Superset[];
  finisher?: string[];
  abs?: { superset: string[] }[];
}

export interface WorkoutPlan {
  [key: string]: WorkoutDay;
}

export const workoutPlan: WorkoutPlan = {
  "Day 1": {
    focus: "Chest and Triceps",
    supersets: [
      {
        exercises: [
          {
            name: "Dumbbell Bench Press",
            sets: 4,
            reps: "8-12",
            videoUrl: undefined, // Add your YouTube URL here
          },
          {
            name: "Dumbbell Flyes",
            sets: 4,
            reps: "12-15",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            videoUrl: undefined,
          },
          {
            name: "Push-Ups on Bench",
            sets: 3,
            reps: "failure",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Skull Crushers",
            sets: 3,
            reps: "10-12",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Close-Grip Bench Press",
            sets: 3,
            reps: "10-12",
            videoUrl: undefined,
          },
        ],
      },
    ],
    finisher: [
      "Bench Dips to Failure - 3 sets",
      "Dumbbell Pull-Over - 12-15 reps",
    ],
  },
  "Day 2": {
    focus: "Back and Biceps",
    supersets: [
      {
        exercises: [
          {
            name: "Dumbbell Bent-Over Rows",
            sets: 4,
            reps: "8-12",
            videoUrl: "https://www.youtube.com/embed/6gvmcqr226U",
          },
          {
            name: "Dumbbell Pull-Over",
            sets: 4,
            reps: "12-15",
            videoUrl: "https://www.youtube.com/embed/FK4rHfWKEac",
          },
        ],
      },
      {
        exercises: [
          {
            name: "One-Arm Dumbbell Row",
            sets: 3,
            reps: "10-12",
            videoUrl: "https://www.youtube.com/embed/dFzUjzfih7k",
          },
          {
            name: "Dumbbell Reverse Flyes",
            sets: 3,
            reps: "12-15",
            videoUrl: "https://www.youtube.com/embed/hf7jnF45N_I",
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Bicep Curls",
            sets: 3,
            reps: "10-12",
            videoUrl: "https://www.youtube.com/embed/HnHuhf4hEWY",
          },
          {
            name: "Dumbbell Hammer Curls",
            sets: 3,
            reps: "10-12",
            videoUrl: "https://www.youtube.com/embed/fM0TQLoesLs",
          },
        ],
      },
    ],
    finisher: ["Dumbbell Concentration Curls - 3 sets to failure"],
  },
  "Day 3": {
    focus: "Legs and Abs",
    supersets: [
      {
        exercises: [
          {
            name: "Dumbbell Goblet Squats",
            sets: 4,
            reps: "12-15",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Walking Lunges",
            sets: 4,
            reps: "12 per leg",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Romanian Deadlifts",
            sets: 3,
            reps: "10-12",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Step-Ups",
            sets: 3,
            reps: "12 per leg",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Sumo Squats",
            sets: 3,
            reps: "15",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Calf Raises",
            sets: 3,
            reps: "15-20",
            videoUrl: undefined,
          },
        ],
      },
    ],
    abs: [
      {
        superset: [
          "Dumbbell Russian Twists - 12 reps per side",
          "Weighted Leg Raises - 15 reps",
        ],
      },
    ],
    finisher: ["5 sets of 20-second squat jumps with 10-second rest"],
  },
  "Day 4": {
    focus: "Shoulders and Triceps",
    supersets: [
      {
        exercises: [
          {
            name: "Dumbbell Shoulder Press",
            sets: 4,
            reps: "8-12",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Lateral Raises",
            sets: 4,
            reps: "12-15",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Front Raises",
            sets: 3,
            reps: "12-15",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Rear Delt Flyes",
            sets: 3,
            reps: "12-15",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Tricep Kickbacks",
            sets: 3,
            reps: "12-15",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Overhead Tricep Extension",
            sets: 3,
            reps: "10-12",
            videoUrl: undefined,
          },
        ],
      },
    ],
    finisher: ["Dumbbell Upright Row - 3 sets to failure"],
  },
  "Day 5": {
    focus: "Full Body (High-Intensity)",
    supersets: [
      {
        exercises: [
          {
            name: "Dumbbell Thrusters",
            sets: 4,
            reps: "10-12",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Renegade Rows",
            sets: 4,
            reps: "12 per arm",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Goblet Squats",
            sets: 3,
            reps: "15",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Push-Ups",
            sets: 3,
            reps: "failure",
            videoUrl: undefined,
          },
        ],
      },
      {
        exercises: [
          {
            name: "Dumbbell Burpees",
            sets: 3,
            reps: "10",
            videoUrl: undefined,
          },
          {
            name: "Dumbbell Farmers Walk",
            sets: 3,
            reps: "1-minute",
            videoUrl: undefined,
          },
        ],
      },
    ],
    finisher: [
      "5-minute AMRAP: 10 Dumbbell Swings, 10 Dumbbell Step-Ups, 10 Dumbbell Bicep Curls",
    ],
  },
};
