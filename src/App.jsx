import React, { useState } from 'react'
import Men from './Men';
import Women from './Women';
const App = () => {
  const [gender,setGender] = useState('Male')
  function changeGender(){
    if(gender == "Male"){
      setGender('Female');
      
    }
    else{
      setGender('Male');
      
    }
  }
  return <div className='parent'>
    <h1>{gender}</h1>
    <button onClick={changeGender}>Change Gender</button>
    {gender == "Male" ? <Men/> : <Women/>}
     
  </div>
}

export default App
