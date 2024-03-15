import React from 'react'

interface chipProps{
    text: string,
    color: string
}

export default function Chip(props:chipProps) {

  const { text, color } = props;
  
  return (
    <div className={`bg-${color}-600 text-${color}-100 opacity-90 font-bold px-2 rounded-xl text-xs`}>
        {text}
    </div>
  )
}
