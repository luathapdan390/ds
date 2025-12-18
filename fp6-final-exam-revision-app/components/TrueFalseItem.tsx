
import React from 'react';
import { Question } from '../types';

interface TrueFalseItemProps {
  question: Question;
  value: string;
  isSubmitted: boolean;
  onAnswerChange: (id: string, value: string) => void;
}

const TrueFalseItem: React.FC<TrueFalseItemProps> = ({
  question,
  value,
  isSubmitted,
  onAnswerChange,
}) => {
  const isCorrect = value === question.correctAnswer;

  return (
    <div className={`p-4 rounded-lg border transition-all ${
      isSubmitted 
        ? (isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200') 
        : 'bg-white border-slate-200'
    }`}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-slate-700 font-medium">{question.questionText}</p>
        <div className="flex gap-2">
          {['True', 'False'].map((label) => {
            const isSelected = value === label;
            return (
              <button
                key={label}
                disabled={isSubmitted}
                onClick={() => onAnswerChange(question.id, label)}
                className={`px-4 py-2 rounded-md font-bold transition-all ${
                  isSelected 
                    ? (isSubmitted 
                        ? (isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white')
                        : (label === 'True' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'))
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                } disabled:opacity-80`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      {isSubmitted && (
        <div className={`mt-2 text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
           <i className={`fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} mr-1`}></i>
           {isCorrect ? 'Đúng' : 'Sai'}
        </div>
      )}
    </div>
  );
};

export default TrueFalseItem;
