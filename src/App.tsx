import React, { useState } from 'react';
import { workoutPlan } from './data/workouts';
import { WorkoutDetail } from './components/WorkoutDetail';
import { DayTabs } from './components/DayTabs';
import { Dumbbell } from 'lucide-react';

function App() {
  const [selectedDay, setSelectedDay] = useState<string>("Day 1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-2xl shadow-lg">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Workout Tracker
              </h1>
              <p className="text-gray-600">Track your daily workout progress</p>
            </div>
          </div>
        </div>
      </div>

      <DayTabs selectedDay={selectedDay} onSelectDay={setSelectedDay} />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {selectedDay && workoutPlan[selectedDay] && (
          <WorkoutDetail
            day={selectedDay}
            workout={workoutPlan[selectedDay]}
            onBack={() => {}}
          />
        )}
      </div>
    </div>
  );
}

export default App;