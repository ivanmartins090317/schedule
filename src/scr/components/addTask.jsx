import React, {useState} from 'react'

import Button from './Button.jsx'

import  './addTask-input.css'






const Addtask = ({handleTaskAddition}) =>{
  const [inputData, setInputData] = useState("")

  const hadleInputChange =(e) => {
    
     setInputData(e.target.value)
    
  }

  const handleAddTaskClick = () =>{
    handleTaskAddition(inputData)
    
    setInputData('')
  }
  
  return(
    <div className="addTask-container">
       <input 
          onChange={hadleInputChange}
          value={inputData}
          className="addTask-input"type="text" />

       <div className="button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
    </div> 
       
   </div>
 )
}

export default Addtask