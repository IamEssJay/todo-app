import React, { useEffect, useState } from "react";
import{AiOutlinePlus} from 'react-icons/ai';
import Todo from "./Todo";
import {db} from "./Firebase";
import { query,collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore";
const style={
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#41295a] to-[#2F0743]`,
  container:`bg-gradient-to-r from-[#C04848] to-[#480048] max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading:`text-3xl font-bold text-center text-white p-2`,
  form:`flex justify-between`,
  input:`border p-2 w-full text-xl `,
  button:`border p-4 ml-2 bg-[#6a3093] text-slate-100`,
  count:`text-center p-2 text-white`

}

function App() {

  const[todos,setTodos]=useState([])
  const[input, setInput]=useState('')


  // C todo
  const createTodo = async (e) =>{
   e.preventDefault(e);
    if(input===""){
      alert('Please enter a valid task ')
      return
    }
    await addDoc(collection(db, 'todo'),{
      text:input,
      completed:false,
    })
    setInput('')
  };
  // R todo
  useEffect(()=>{
    const q= query(collection(db,'todo'))
    const unsubscribe= onSnapshot(q,(querySnapshot)=>{
      let todosarr=[]
      querySnapshot.forEach((doc)=>{
        todosarr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosarr)
    })
    return()=> unsubscribe()
  },[])
  // U todo
  const toggleComplete= async(todo)=>{
    await updateDoc(doc(db, 'todo', todo.id), {
      completed: !todo.completed
    })

  }
  // D todo
  const deleteTodo = async(id)=>{
    await deleteDoc(doc(db,'todo',id))
  }

  return (
    <div className={style.bg}>
     <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form  onSubmit={createTodo} className={style.form}>
        <input  value={input} 
        onChange={(e)=>setInput(e.target.value)} 
        className={style.input} 
        type="text" 
        placeholder="Add Todo"/>
        <button className={style.button}><AiOutlinePlus size={30}/></button>
      </form>
      <ul>
        {todos.map((todo, index)=>(
           <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          )
        )}
      </ul>
      {todos.length<1 ? null: <p className={style.count}>{`You have ${todos.length} todos`}</p>}
     </div>
    </div>
  );
}

export default App;
