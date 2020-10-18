import React from 'react'
import ListItem from './ListItem'

const styles = {
    list:{
        transform: "translateX(25%)",
        width:"100%",
        margin: "auto",
    }
}

export default function todoList(props){
    return(
        <div style = {styles.list}>
            { props.todos.map((todo, index) =>{
               return <ListItem todo = {todo} key = {todo.id} index = {index} onChange = {props.onToggle} />
            })}
        </div>
    )
}