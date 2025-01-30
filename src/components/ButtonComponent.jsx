import React from 'react'

export default function ButtonComponent({value, ...props}) {
  return (
    <button
      {...props}
      // onClick={onClick}
      className="px-4 py-2 text-xs md:text-base rounded-md bg-black text-stone-100 hover:bg-stone-60 hover:text-stone-10"
    >{value}</button>
  )
}