import React from 'react';
import { ChevronRight, Dumbbell } from 'lucide-react';
import { WorkoutDay } from '../data/workouts';

interface WorkoutCardProps {
  day: string;
  workout: WorkoutDay;
  onClick: () => void;
}

export function WorkoutCard({ day, workout, onClick }: WorkoutCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-lg">
            <Dumbbell className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{day}</h3>
            <p className="text-sm text-gray-600">{workout.focus}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          {workout.supersets.length} supersets • {' '}
          {workout.finisher ? 'Includes finisher' : 'No finisher'}
        </p>
      </div>
    </div>
  );
}