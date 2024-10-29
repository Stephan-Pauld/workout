import React, { useState } from 'react';
import { Save, Star, PlayCircle, History, Pencil, Trash2, X, Check } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { WeightHistory } from '../types/exercise';
import { format } from 'date-fns';

interface ExerciseTrackerProps {
  exerciseName: string;
  sets: number;
  reps: string;
  onSave: (weight: number, difficulty: number) => void;
  onEdit: (index: number, weight: number, difficulty: number) => void;
  onDelete: (index: number) => void;
  videoUrl?: string;
  weightHistory: WeightHistory[];
}

export function ExerciseTracker({ 
  exerciseName, 
  sets, 
  reps, 
  onSave, 
  onEdit,
  onDelete,
  videoUrl,
  weightHistory 
}: ExerciseTrackerProps) {
  const [weight, setWeight] = useState<number>(weightHistory[0]?.weight || 0);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editWeight, setEditWeight] = useState<number>(0);
  const [editDifficulty, setEditDifficulty] = useState<number>(0);

  const handleStartEdit = (index: number, record: WeightHistory) => {
    setEditingIndex(index);
    setEditWeight(record.weight);
    setEditDifficulty(record.difficulty);
  };

  const handleSaveEdit = (index: number) => {
    onEdit(index, editWeight, editDifficulty);
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <>
      <div className="glass-card rounded-xl p-6 mb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{exerciseName}</h3>
            <p className="text-sm text-gray-600">{sets} sets × {reps} reps</p>
          </div>
          <button
            onClick={() => setIsVideoOpen(true)}
            className="p-2 text-indigo-600 rounded-lg"
            title="Watch tutorial"
          >
            <PlayCircle className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="input-field"
              min="0"
              step="2.5"
            />
            {weightHistory.length > 0 && (
              <div className="mt-2">
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                  <History className="w-4 h-4" />
                  <span>Previous weights:</span>
                </div>
                <div className="space-y-1">
                  {weightHistory.map((record, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm bg-gray-50 rounded-md px-3 py-1">
                      {editingIndex === idx ? (
                        <>
                          <div className="flex items-center gap-2 flex-1">
                            <input
                              type="number"
                              value={editWeight}
                              onChange={(e) => setEditWeight(Number(e.target.value))}
                              className="w-20 px-2 py-1 rounded border"
                              min="0"
                              step="2.5"
                            />
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <Star
                                  key={rating}
                                  className={`w-4 h-4 cursor-pointer ${
                                    rating <= editDifficulty
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                  onClick={() => setEditDifficulty(rating)}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 ml-2">
                            <button
                              onClick={() => handleSaveEdit(idx)}
                              className="p-1 text-green-600 hover:bg-green-50 rounded"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="p-1 text-gray-600 hover:bg-gray-50 rounded"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-4">
                            <span className="text-gray-600">{record.weight} lbs</span>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <Star
                                  key={rating}
                                  className={`w-3 h-3 ${
                                    rating <= record.difficulty
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-xs">
                              {format(new Date(record.date), 'MMM d, yyyy')}
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleStartEdit(idx, record)}
                                className="p-1 text-indigo-600 hover:bg-indigo-50 rounded"
                              >
                                <Pencil className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => onDelete(idx)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Star
                  key={rating}
                  className={`w-6 h-6 cursor-pointer ${
                    rating <= difficulty
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setDifficulty(rating)}
                />
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => onSave(weight, difficulty)} className="btn-primary">
          <Save className="w-4 h-4 mr-2" />
          Save Progress
        </button>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
        exerciseName={exerciseName}
      />
    </>
  );
}