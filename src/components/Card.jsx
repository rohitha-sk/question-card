import React from 'react'
import Button from './Button'

function Card({ questions, step, question, handleNext, handlePrevious }) {
  return (
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
          <Button onClick={handlePrevious} step={step} isNext={false}>
            Previous
          </Button>
          <Button onClick={handleNext} step={step} isNext={true}>
            Next
          </Button>
        </div>
        </div>
  )
}

export default Card