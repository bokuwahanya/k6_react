import React from 'react'

export default function TaillButton({caption, handleClick, color}) {

    const colorobj = {
        'blue' : "bg-blue-800",
        'yellow' : "bg-yellow-800",
        'green' : "bg-green -800" 
    }
    const hColor = {
        'blue' : "hover:bg-blue-400",
        'yellow' : "hover:bg-yellow-400",
        'green' : "hover:bg-green -400" 
    }
    
    const bColor = `p-2 x-4 py-2  rounded-md 
                    ${hColor[color]} m-2
                    ${colorobj[color]} text-white`

  return (
    <button className= {bColor}
                     onClick={handleClick}>
    {caption}
    </button>
  )
}
