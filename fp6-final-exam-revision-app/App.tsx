
import React, { useState, useCallback, useMemo } from 'react';
import { examData } from './data';
import { QuestionType, UserAnswers } from './types';
import QuestionItem from './components/QuestionItem';
import TransformationItem from './components/TransformationItem';
import TrueFalseItem from './components/TrueFalseItem';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswerChange = useCallback((id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const totalQuestions = useMemo(() => {
    return examData.sections.reduce((acc, section) => acc + section.questions.length, 0);
  }, []);

  const calculateScore = () => {
    let correctCount = 0;
    
    examData.sections.forEach(section => {
      section.questions.forEach(q => {
        const userAns = answers[q.id] || "";
        
        if (q.type === QuestionType.TRANSFORMATION) {
          const normalize = (str: string) => str.toLowerCase().trim().replace(/[.,?]/g, '');
          const correctOptions = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
          if (correctOptions.some(ans => normalize(ans) === normalize(userAns))) {
            correctCount++;
          }
        } else {
          if (userAns === q.correctAnswer) {
            correctCount++;
          }
        }
      });
    });

    const calculatedScore = (10 * correctCount) / totalQuestions;
    setScore(Number(calculatedScore.toFixed(2)));
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetExam = () => {
    setAnswers({});
    setIsSubmitted(false);
    setScore(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight">{examData.title}</h1>
            <p className="text-blue-100 text-sm opacity-90 mt-1">Review your semester knowledge effectively.</p>
          </div>
          {isSubmitted && score !== null && (
            <div className="bg-white text-blue-700 px-6 py-2 rounded-full font-black text-xl shadow-inner border-2 border-blue-200 flex items-center gap-2 animate-bounce">
              <i className="fas fa-star text-yellow-400"></i>
              Điểm của bạn: {score}/10
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {examData.sections.map((section, sIdx) => (
          <section key={sIdx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide">{section.title}</h2>
              <p className="text-slate-500 text-sm mt-1 italic">{section.instructions}</p>
            </div>
            
            <div className="p-6 space-y-6">
              {section.questions.map((q) => {
                if (q.type === QuestionType.MCQ) {
                  return (
                    <QuestionItem
                      key={q.id}
                      question={q}
                      selectedAnswer={answers[q.id] || ''}
                      isSubmitted={isSubmitted}
                      onAnswerChange={handleAnswerChange}
                    />
                  );
                }
                if (q.type === QuestionType.TRANSFORMATION) {
                  return (
                    <TransformationItem
                      key={q.id}
                      question={q}
                      value={answers[q.id] || ''}
                      isSubmitted={isSubmitted}
                      onAnswerChange={handleAnswerChange}
                    />
                  );
                }
                if (q.type === QuestionType.TRUE_FALSE) {
                  return (
                    <TrueFalseItem
                      key={q.id}
                      question={q}
                      value={answers[q.id] || ''}
                      isSubmitted={isSubmitted}
                      onAnswerChange={handleAnswerChange}
                    />
                  );
                }
                return null;
              })}
            </div>
          </section>
        ))}

        {/* Action Button Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-10">
          {!isSubmitted ? (
            <button
              onClick={calculateScore}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 text-lg flex items-center gap-3 w-full md:w-auto"
            >
              <i className="fas fa-paper-plane"></i>
              NỘP BÀI & CHẤM ĐIỂM
            </button>
          ) : (
            <button
              onClick={resetExam}
              className="bg-slate-800 hover:bg-slate-900 text-white font-black px-12 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 text-lg flex items-center gap-3 w-full md:w-auto"
            >
              <i className="fas fa-undo"></i>
              LÀM LẠI BÀI TẬP
            </button>
          )}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="bg-slate-100 border-t border-slate-200 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">The End of Revision Exam</p>
          <p className="text-slate-400 text-sm">FP6 Revision Guide - Practice makes perfect.</p>
        </div>
      </footer>

      {/* Persistent Bottom Bar for progress */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 py-3 px-4 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 w-full">
            <div className="h-2 flex-1 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-500" 
                style={{ width: `${(Object.keys(answers).length / totalQuestions) * 100}%` }}
              ></div>
            </div>
            <span className="text-slate-600 font-bold text-sm whitespace-nowrap">
              {Object.keys(answers).length} / {totalQuestions} câu đã làm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
