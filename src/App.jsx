import React, { useState } from 'react'

const App = () => {
  const arr = ['sarthak','harsh','sharda','ankit'];
  let [num,setNum] = useState(0)
  return (
    <div>
      <h1>{arr[num]}</h1>
      <button onClick={()=>{
        if(num<arr.length-1){
        setNum(num+1);
        }
        else{
          setNum(num=0);
        }
      }}>change user</button>
    </div>
  )
}

export default App
