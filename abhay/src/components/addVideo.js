import { useState } from "react"
import videos from "../data"

const AddVideo = ({addvideos})=>{

const [addVideo, setaddVideo] = useState({title : "",
channelname : "pc gaming",
Views : "",
time : "7 months",
verified : true
})
const handleClick = (e) =>{

    e.preventDefault()

  addvideos(addVideo)


}

const handlechange = (e) =>{

    setaddVideo({...addVideo , 
        [ e.target.name]  : e.target.value
    })
    


}

    return (
        <div className="bg-yellow-200 flex justify-center items-center leading-5 space-y-5 h-auto w-screen">

<form className="h-auto  space-y-2 text-center ">
<label>Name</label><input onChange={handlechange} name = "time" type="text" placeholder="Name"></input><br></br>
<label>Title</label> <input onChange={handlechange} name = "title" type="text" placeholder="title"></input><br></br>
<lable>Views</lable><input onChange={handlechange}  name="Views" type="text" placeholder="views"></input><br></br>

<button onClick={handleClick} type="submit" className="bg-black rounded text-white">
    ADD
</button>

</form>
        </div>


    )





}



export default AddVideo