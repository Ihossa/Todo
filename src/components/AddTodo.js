import React, {useState} from 'react'

export default function AddTodo({onCreate}){
    const[value, setValue] = useState();

    function submitHandler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
        
    }

    return(
        <form onSubmit = {submitHandler}>
            <input type = "text" onChange = {event => setValue(event.target.value)}/>
            <button>Add todo</button>
        </form>
    )
}