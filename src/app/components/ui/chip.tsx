import React from 'react'

interface chipProps{
    text: string,
    color: string
}

export default function Chip(props:chipProps) {
  return (
    <div className={`bg-${props.color}-600 text-${props.color}-100 opacity-90 font-bold px-2 rounded-xl text-sm`}>
        {props.text}
    </div>
  )
}
