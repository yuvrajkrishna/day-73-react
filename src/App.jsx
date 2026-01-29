import React, { useState } from 'react'

const App = () => {
  const [marks,setMarks]=useState([30,76,12,67,28])
 
  function graceStudent(elem){
    const newMarks = marks.map(function(elem){
      if(elem <= 30){
        return elem+5
      }
      else{
        return elem;
      }
    })
    setMarks(newMarks)
  }
  return (
    <div>
      {
        marks.map(function(elem,idx){
          return <h1 key={idx}>Student  {idx+1} = {elem} ({elem>30?'PASS':'FAIL'})</h1>
        })
        
      }
      <button onClick={graceStudent}>Give them grace</button>
    </div>
  )
}

export default App
