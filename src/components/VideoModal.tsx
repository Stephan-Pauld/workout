import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  exerciseName: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, exerciseName }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {exerciseName}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          {videoUrl ? (
            <iframe
              className="absolute inset-0 w-full h-full rounded-b-2xl"
              src={videoUrl}
              title={`${exerciseName} tutorial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-b-2xl">
              <p className="text-gray-500">No video available yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}