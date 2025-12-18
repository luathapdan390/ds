
import React from 'react';
import { Question } from '../types';

interface QuestionItemProps {
  question: Question;
  selectedAnswer: string;
  isSubmitted: boolean;
  onAnswerChange: (id: string, value: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  selectedAnswer,
  isSubmitted,
  onAnswerChange,
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;
  
  const getOptionLabel = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className={`p-4 rounded-lg border transition-all ${
      isSubmitted 
        ? (isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200') 
        : 'bg-white border-slate-200 hover:border-blue-300'
    }`}>
      <div className="flex items-start gap-3">
        <span className="font-bold text-slate-500 whitespace-nowrap">{question.questionText}</span>
        <div className="flex-1">
          {question.prompt && <p className="mb-3 text-slate-700 font-medium">{question.prompt}</p>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {question.options?.map((option, idx) => {
              const label = getOptionLabel(idx);
              const isSelected = selectedAnswer === label;

              return (
                <button
                  key={label}
                  disabled={isSubmitted}
                  onClick={() => onAnswerChange(question.id, label)}
                  className={`flex items-center gap-3 p-3 rounded-md text-left transition-all ${
                    isSelected 
                      ? (isSubmitted 
                          ? (isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white')
                          : 'bg-blue-600 text-white shadow-md') 
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  } disabled:cursor-default`}
                >
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full border font-bold ${
                    isSelected ? 'bg-white text-slate-900 border-transparent' : 'bg-white text-slate-400 border-slate-200'
                  }`}>
                    {label}
                  </span>
                  <span className="flex-1">{option}</span>
                  {isSubmitted && isSelected && (
                    <i className={`fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} text-lg`}></i>
                  )}
                </button>
              );
            })}
          </div>
          
          {isSubmitted && (
            <div className={`mt-3 flex items-center gap-2 font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
               <i className={`fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
               <span>{isCorrect ? 'Đúng' : 'Sai'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
