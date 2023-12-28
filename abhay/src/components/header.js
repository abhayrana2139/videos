import React, { useState } from 'react'
import { Button } from '@mui/material'

const Header = () => {
   
  const [Profile, setProfile] = useState()
  const [goBack, setgoBack] = useState()


const useMeS2 = function(){

  if(goBack){

  }
  else{
    setgoBack(!goBack)
  }
}

const useMeS = function(){
  if (!Profile)
 
  setProfile(Profile)

}

  
  

  return (
    <div className='w-screen bg-black  h-auto space-x-3 justify-around flex m-auto'>
    <Button> Home</Button>
    <Button> Help</Button>
    <Button onCanPlay={useMeS} > {Profile ? <> <div>1 <div onClick={useMeS2}>go back</div> </div></>: <><div>2</div></>} </Button>


    </div>
  )
}

export default Header