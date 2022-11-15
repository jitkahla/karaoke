import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import Player from './components/Player';
import './style.css';
import lyricLines from './lyric-lines';
import Lyrics from './components/Lyrics';

const App = () => {

const [index, setIndex] = useState(-1);

const handleTimeUpdate = (currentTime) => {
  
  if (currentTime < lyricLines[0].time || index === lyricLines.length - 1) {
    return
  }
  if (currentTime > lyricLines[index + 1].time){
  setIndex(index + 1)
   // console.log('Current time is :' + currentTime + ', current index is: ' + index)
  };

}

  return (
    <div className="container">
      <Player src={'fools-garden-lemon-tree.mp3'} onTimeUpdate={handleTimeUpdate}/>
      <Lyrics lines={lyricLines} currentLineIndex={index}/>
      
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
