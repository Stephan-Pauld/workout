import { useState, useEffect } from 'react';
import { WeightHistory, ExerciseHistory } from '../types/exercise';

const STORAGE_KEY = 'exercise_history';
const MAX_HISTORY = 4;

export function useExerciseHistory() {
  const [history, setHistory] = useState<ExerciseHistory>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const saveProgress = (exerciseName: string, weight: number, difficulty: number) => {
    setHistory(prev => {
      const exerciseHistory = prev[exerciseName] || [];
      const newEntry: WeightHistory = {
        weight,
        difficulty,
        date: new Date().toISOString(),
      };

      const updatedHistory = [newEntry, ...exerciseHistory].slice(0, MAX_HISTORY);

      return {
        ...prev,
        [exerciseName]: updatedHistory,
      };
    });
  };

  const editHistory = (exerciseName: string, index: number, weight: number, difficulty: number) => {
    setHistory(prev => {
      const exerciseHistory = [...(prev[exerciseName] || [])];
      exerciseHistory[index] = {
        ...exerciseHistory[index],
        weight,
        difficulty,
      };

      return {
        ...prev,
        [exerciseName]: exerciseHistory,
      };
    });
  };

  const deleteHistory = (exerciseName: string, index: number) => {
    setHistory(prev => {
      const exerciseHistory = [...(prev[exerciseName] || [])];
      exerciseHistory.splice(index, 1);

      return {
        ...prev,
        [exerciseName]: exerciseHistory,
      };
    });
  };

  const getHistory = (exerciseName: string): WeightHistory[] => {
    return history[exerciseName] || [];
  };

  return { saveProgress, editHistory, deleteHistory, getHistory };
}