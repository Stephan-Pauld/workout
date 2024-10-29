import React from 'react';
import { Calendar } from 'lucide-react';

interface DayTabsProps {
  selectedDay: string | null;
  onSelectDay: (day: string) => void;
}

export function DayTabs({ selectedDay, onSelectDay }: DayTabsProps) {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];

  return (
    <div className="bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-sm sticky top-[88px] z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex overflow-x-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => onSelectDay(day)}
              className={`flex items-center px-8 py-4 border-b-2 text-sm font-medium whitespace-nowrap ${
                selectedDay === day
                  ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Calendar className={`w-4 h-4 mr-2 ${
                selectedDay === day ? "text-indigo-600" : "text-gray-400"
              }`} />
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}