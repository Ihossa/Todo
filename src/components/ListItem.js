import React, { useContext } from 'react'
import Context from '../context'

const styles = {
    ListItem:{
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid black",
        borderRadius:"4px",
        padding: "4px",
        margin: "5px"

    }
}

export default function ListItem({todo, index, onChange}){
    const { removeTodo } = useContext(Context)
    let classes = []

    if(todo.completed){
        classes.push('done')
    }
    return(
        <div style = {styles.ListItem}>
            <div>
                <input  checked = {todo.completed} type="checkbox"  onChange = {() => onChange(todo.id)}/>
                <span>{index + 1}</span>
                <span className = {classes.join(' ')}>{todo.title}</span>
            </div>
            <button onClick = {removeTodo.bind(null, todo.id)}>X</button>
        </div>
    )
}