import { useState } from 'react';
import './App.css';
import AddVideo from './components/addVideo';
import videoDb from './data';
import VideoList from './components/VideoList';


function App() {



const addvideos = (addVideo) =>{


  setvideos([...videos , {...addVideo, id: videos.length+1}])

}    

 function deleteVideo(id){
  setvideos(videos.filter(video=> video.id!==id))

}



 const [videos, setvideos] = useState(videoDb)


  return (

    <div className='w-auto h-auto m-10  leading-9 space-y-10  '>   
    <AddVideo addvideos = {addvideos}/>
    <VideoList videos ={videos} deleteVideo={deleteVideo}  />
    </div>

    



  );
}

export default App;
