import React from 'react'
import Videos from './Videos'
import PlayButton from './PlayButton'

const VideoList =({videos,deleteVideo}) => {
  return (
 

  <div className='w-auto h-auto grid grid-cols-3 gap-4 space-x-3 leading-9 space-y-8 '>
   {
          videos.map((video) => 
          
      
      
  
          <Videos
            id = {video.id}
            title={video.title}
            Channelname={video.channelname}
            Views={video.views}
            time={video.time}
            verified={video.verified}
            deleteVideo= {deleteVideo}
         >
         
         <PlayButton   onPlay ={()=>{console.log("play")}}  onPause ={()=>{console.log( "pause")}} >
         
         </PlayButton>
         
         </Videos>

           
         
         
        )
        
        
        }
       
      

     

  </div>

     


  )
}

export default VideoList