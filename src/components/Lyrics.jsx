import React, { useState, useRef, useEffect } from 'react';

const Lyrics = ({lines, currentLineIndex}) => {

const lineRef = useRef();

useEffect(() => {
  if (currentLineIndex >= 0) {
  lineRef.current.scrollIntoView({
    block: 'start', 
    inline: 'nearest', 
    behavior: 'smooth'
  }) }
}, [currentLineIndex]);

    return (
        <div className='lyrics'>
      {lines.map((line, index) => <p className={index === currentLineIndex ? 'current-line' : null} key={line.time} ref={index === currentLineIndex ? lineRef : null}>{line.text}</p>)}
      </div>
    )
}

export default Lyrics;