import PlayButton from "./PlayButton"




const Videos = ({ title, Channelname, Views, time ,verified,id, deleteVideo }) => {
 
    
   
    return (


        <div className='h-auto w-[100%] '>
            <div className=''>
         <div className='justify-end flex '> <button onClick={()=>{deleteVideo(id)}} className=' font-extrabold bg-blue-600 rounded w-7 h-5  absolute  text-white m-0  flex items-center p-2 '>X</button></div>   
                <h1 className='font-mono text-white bg-black '> {title} </h1>
            </div>
            <div> <img src='https://th.bing.com/th/id/OIP.Z5KSd1La1eFWiz5y34UrUgHaKE?rs=1&pid=ImgDetMain'></img></div>
            <div className='leading-10'> {Channelname} {verified && "✅"}   </div>
            <div className='flex justify-between text-xs font-thin'> Views.. {Views}  <div> {time} </div></div>

                   </div>

        


    )
}

export default Videos