import React, { useState, useRef, useEffect } from 'react';

const Player = ({src, onTimeUpdate}) => {

    const [playing, setPlaying] = useState(false);


    const audioRef = useRef();
    

    const handlePlay = () =>  {
        setPlaying(!playing);
    }


    useEffect(() => {
        if (playing) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [playing]);

    

    return (<div className="music-player">
      <audio ref={audioRef} src={src} onTimeUpdate={(e) => onTimeUpdate(e.target.currentTime)}/>
      <button onClick={handlePlay} className= {playing ? 'play-button pause' : 'play-button play'}></button>
    </div>)
}

export default Player;