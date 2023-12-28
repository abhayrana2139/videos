import React, { useState } from 'react'

const PlayButton = ({ onPlay, onPause }) => {
 const [playing, setplaying] = useState(false)
    const handleClick = () => {

        if (playing)
            onPause();
        else
            onPlay();
    setplaying(!playing)



    }
    return (
        <div>
            <button onClick={handleClick} className='bg-black text-white rounded  items-center  flex '> <div className='p-1 m-1
             text-xs justify-center flex items-center'> { playing ? "Play  <"  : ' pause ||'}    </div></button>
        </div>
    )
}

export default PlayButton