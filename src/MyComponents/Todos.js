import React from "react";
import Todo from './Todo'

function Todos(props){
 
    let myStyle = {
        display:"flex",
        justifyContent:"flex-start",
        flexWrap : "wrap"
        
        
    }
    return(
        <div className="container" >
            <h3 className="text-center">All Tasks</h3>
            <div className="containter" style={myStyle} >
            {
                props.alltodos.length === 0 ? "No Task to Display" :
            props.alltodos.map((item) =>{
               return <Todo task = {item} key={item.sno} onDelete = {props.onDelete}/>
            })}
            
          
        </div>

            </div>
           
    )
}

export default Todos