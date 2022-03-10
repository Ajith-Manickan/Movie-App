import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { CgPlayListAdd } from 'react-icons/cg';
import TodoList from './TodoList';
import DB from './db/firebase.js';
import firebase from 'firebase';

function Todo() {
  const [input, setInput] = useState('');
  const [rating,Setrating]= useState('')
  const [genre,Setgenre]=useState('')
  const [todos, setTodos] = useState([]);

  // fetch data from firebase
  useEffect(() => {
    DB.collection('todos')
      .orderBy('time', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().time));
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            date: doc.data().date,
            rating:doc.data().rating,
            genre:doc.data().genre,
          }))
        );
      });
  }, []);

  //input todo
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  //   // console.log(input);
  // };

  // date
  const toDate = () => {
    let date = new Date();
    const today = date.toDateString();
    return today;
  };

  // button Add todo
  const addTodos = (e) => {
    // console.log('object');

    //if empty
    if (input === '' && rating &&genre) {
      e.preventDefault();
      console.log('Type Something ');
      alert('Type something and Rating must be lessthan 10')
    } else {
      //insert into firebase
      e.preventDefault();
      DB.collection('todos').add({
        todo: input,
        rating,
        genre,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        date: toDate(),
      });
      //separate
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>
        Movie Details Admin
        <span role="img" aria-label="fire">
          
        </span>
      </h1>

      <form>
        <label > enter movie name</label> <br/>
<input type='text' value={input} onChange={((e)=>{setInput(e.target.value)})}></input>
<br></br>

<label > Genre</label> <br/>
<input type='text' value={genre} onChange={((e)=>{Setgenre(e.target.value)})}></input>
<br></br>


<label > Rating</label> <br/>
<input type='number' value={rating} onChange={((e)=>{Setrating(e.target.value)})}></input>
        
       
        <span className="space"></span>
        <br></br>
        <br></br>
        <Button
          onClick={addTodos}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!input}
        >
          <CgPlayListAdd className="add-btn" /> Add
        </Button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} />
        ))}
      </ul>
    
    </div>
  );
}

export default Todo;
