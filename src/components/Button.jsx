import React from 'react'

export default function Button({children, link}) {
  return (
    <div className=' border-2 border-black rounded-md hover:bg-slate-400 border-solid w-fit px-3 py-1'>
        <a href={link} target='_blank'>
            {children} 
        </a>
    </div>
  )
}
