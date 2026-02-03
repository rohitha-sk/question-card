import React, { useState } from 'react'
import Button from './components/Button';
import Card from './components/Card';

const questions = [
  {
    id: 1,
    question: "What is your favorite programming language?"
  },
  {
    id: 2,
    question: "How many years of experience do you have in software development?"
  },
  {
    id: 3,
    question: "Which frontend framework do you prefer the most?"
  }
];




function App() {
    const[openCard, setOpenCard] = useState(true);
    const[step, setStep] = useState(1);
    const[question, setQuestion] = useState(questions[0]);


    function handleNext() {
      if(step === 3) return;  
      setStep(step + 1);
      setQuestion(questions[step]);
    }
    function handlePrevious() {
      if(step === 1) return;
      setStep(step - 1);
      setQuestion(questions[step - 2]);
    }

    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md min-h-[300px]">
        {/* Toggle button */}
        <button onClick={() => setOpenCard(!openCard)} className="cursor-pointer absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 text-3xl font-bold">
          ×
        </button>
        {
          openCard && (
            <Card questions={questions} step={step} question={question} handleNext={handleNext} handlePrevious={handlePrevious} />
          )
        }
      </div>
    </div>
  )
}

export default App