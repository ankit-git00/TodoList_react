import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import {Footer}  from './MyComponents/Footer';
import React,{useState, useEffect} from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import {About} from './MyComponents/About';

function App() {
  
let initTodo;

if(localStorage.getItem("todos") === null)
initTodo=[];
else
initTodo= JSON.parse(localStorage.getItem("todos"));

  const[todos, setTodos] = useState(initTodo);

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const onDelete = (task) => {
    console.log("I am ondelete of" , {task} );

    setTodos(todos.filter( (element)=>{ // filter is create a new array where each element should meet the condition i.e ( the element != task )
      return element!==task;
    })); 
        // Deleting this way doesn't work in react , we have to use hook for the changes to reflect
    // let index = todos.indexOf(task);
    // todos.splice(index,1);
    }

    const addTodo = (title,desc) => {
      console.log("I am adding this todo", title, desc);

      let sno = todos.length ? todos[todos.length-1].sno +1 : 0;
      const myTodo={
        sno: sno,
        title : title,
        desc : desc,
      }

      setTodos([...todos, myTodo]);
      console.log(sno)
    }

   


  return (
    <>
    <Router>
    <Header  searchBar= {true} />

    <Routes>
    <Route exact path="/" render={()=>{
      return(
        <>
    <AddTodo addTodo ={ addTodo }  />
   <Todos alltodos = {todos} onDelete={onDelete} />
        </>
      )
    }}/>
    
    <Route exact path="/about" render={() =>{
      return <About/>
    }}/>

    </Routes>
  
    <Footer />
    </Router>
   
   </>
   
  );
};

export default App;
