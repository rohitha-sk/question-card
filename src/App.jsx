import React, { useState } from 'react'

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
            <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Top circles */}
        <div className="flex justify-between items-center mb-16">
          <div className={`w-10 h-10 rounded-full ${step === 1 ? 'bg-purple-500' : 'bg-gray-300'} text-white flex items-center justify-center font-semibold`}>
            { questions[0].id }
          </div>
          <div className={`w-10 h-10 rounded-full ${step === 2 ? 'bg-purple-500' : 'bg-gray-300'} text-white flex items-center justify-center font-semibold`}>
            { questions[1].id } 
          </div>
          <div className={`w-10 h-10 rounded-full ${step === 3 ? 'bg-purple-500' : 'bg-gray-300'} text-white flex items-center justify-center font-semibold`}>
            { questions[2].id }
          </div>
        </div>

        {/* Middle text */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800">{step}. {question.question}</h2>
        </div>

        {/* Bottom buttons */}
        <div className="flex justify-between">
          <button onClick={handlePrevious} className={`px-6 py-2 ${step === 1 ? 'bg-gray-300' : 'bg-purple-500'} text-white rounded-full  transition-colors`}>
            Previous
          </button>
          <button onClick={handleNext}  className={`px-6 py-2 ${step ===3 ? 'bg-gray-300' : 'bg-purple-500'} text-white rounded-full  transition-colors`}>
            Next
          </button>
        </div>
        </div>
          )
        }
      </div>
    </div>
  )
}

export default App