import React from 'react'

function Button({ children, onClick ,step, isNext}) {
    

  return (
  <>
    {isNext ? (
  <button onClick={onClick} className={`px-6 py-2 ${step === 3 ? 'bg-gray-300' : 'bg-purple-500'} text-white rounded-full  transition-colors`}>
            {children}
    </button>
    ):(
          <button onClick={onClick} className={`px-6 py-2 ${step === 1 ? 'bg-gray-300' : 'bg-purple-500'} text-white rounded-full  transition-colors`}>
            {children}
    </button>
    )}
  </>
 
  )
}

export default Button