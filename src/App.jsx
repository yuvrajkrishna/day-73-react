import React, { useState } from 'react'

const App = () => {
  const [marks,setMarks]=useState([88,76,90,67,28])
 
  function graceStudent(elem){
    const newMarks = marks.map(function(elem){
      return elem + 5;
    })
    setMarks(newMarks)
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
