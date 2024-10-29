import React from 'react';
import { WorkoutDay } from '../data/workouts';
import { ExerciseTracker } from './ExerciseTracker';
import { Dumbbell } from 'lucide-react';
import { useExerciseHistory } from '../hooks/useExerciseHistory';

interface WorkoutDetailProps {
  day: string;
  workout: WorkoutDay;
  onBack: () => void;
}

export function WorkoutDetail({ day, workout }: WorkoutDetailProps) {
  const { saveProgress, editHistory, deleteHistory, getHistory } = useExerciseHistory();

  const handleSaveProgress = (exerciseName: string, weight: number, difficulty: number) => {
    saveProgress(exerciseName, weight, difficulty);
  };

  const handleEditHistory = (exerciseName: string, index: number, weight: number, difficulty: number) => {
    editHistory(exerciseName, index, weight, difficulty);
  };

  const handleDeleteHistory = (exerciseName: string, index: number) => {
    deleteHistory(exerciseName, index);
  };

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-xl p-8">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl shadow-md">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{workout.focus}</h2>
            <p className="text-indigo-600 font-medium">
              {workout.supersets.length} supersets • {' '}
              {workout.finisher ? 'Includes finisher' : 'No finisher'}
            </p>
          </div>
        </div>
      </div>

      {workout.supersets.map((superset, idx) => (
        <div key={idx} className="glass-card rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Superset {idx + 1}
          </h3>
          <div className="space-y-4">
            {superset.exercises.map((exercise, exerciseIdx) => (
              <ExerciseTracker
                key={exerciseIdx}
                exerciseName={exercise.name}
                sets={exercise.sets}
                reps={exercise.reps}
                videoUrl={exercise.videoUrl}
                weightHistory={getHistory(exercise.name)}
                onSave={(weight, difficulty) => 
                  handleSaveProgress(exercise.name, weight, difficulty)
                }
                onEdit={(index, weight, difficulty) =>
                  handleEditHistory(exercise.name, index, weight, difficulty)
                }
                onDelete={(index) =>
                  handleDeleteHistory(exercise.name, index)
                }
              />
            ))}
          </div>
        </div>
      ))}

      {workout.finisher && (
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Finisher
          </h3>
          <div className="space-y-3">
            {workout.finisher.map((exercise, idx) => (
              <p key={idx} className="text-gray-700 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                {exercise}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}