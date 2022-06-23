import React from 'react'
import { ImMagicWand } from 'react-icons/im'

function RandomButton({ onClick, text }){
  return(
    <button title="Random" className="random-button" onClick={()=>onClick()}>
     <ImMagicWand />
    </button>
  ) 
}

export default RandomButton