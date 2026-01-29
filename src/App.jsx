import React, { useState } from 'react'

const App = () => {
  const marks = [88,76,90,67,28];
  let [num,setNum] = useState(0)
  function graceStudent(){
    console.log("de diya grace");
  }
  return (
    <div>
      {
        marks.map(function(elem,idx){
          return <h1 key={idx}>Student  {idx+1} = {elem}</h1>
        })
        
      }
      <button onClick={graceStudent}>Give them grace</button>
    </div>
  )
}

export default App
