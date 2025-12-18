
import React from 'react';
import { Question } from '../types';

interface TransformationItemProps {
  question: Question;
  value: string;
  isSubmitted: boolean;
  onAnswerChange: (id: string, value: string) => void;
}

const TransformationItem: React.FC<TransformationItemProps> = ({
  question,
  value,
  isSubmitted,
  onAnswerChange,
}) => {
  const normalize = (str: string) => str.toLowerCase().trim().replace(/[.,?]/g, '');
  
  const isCorrect = Array.isArray(question.correctAnswer) 
    ? question.correctAnswer.some(ans => normalize(ans) === normalize(value))
    : normalize(question.correctAnswer) === normalize(value);

  return (
    <div className={`p-4 rounded-lg border transition-all ${
      isSubmitted 
        ? (isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200') 
        : 'bg-white border-slate-200 shadow-sm'
    }`}>
      <div className="space-y-2">
        <p className="text-slate-600 text-sm font-medium">Đề bài: "{question.prompt}"</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-bold text-slate-800 whitespace-nowrap">→ {question.questionText}</span>
          <input
            type="text"
            disabled={isSubmitted}
            value={value}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            className={`flex-1 p-2 border-b-2 bg-transparent outline-none transition-all ${
              isSubmitted 
                ? (isCorrect ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700')
                : 'border-slate-300 focus:border-blue-500'
            }`}
            placeholder="Nhập câu trả lời của bạn..."
          />
        </div>
        {isSubmitted && (
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              <i className={`fas ${isCorrect ? 'fa-check' : 'fa-times'} mr-1`}></i>
              {isCorrect ? 'Đúng' : 'Sai'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransformationItem;
