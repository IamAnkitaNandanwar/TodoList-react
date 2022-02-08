
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {

  let initTodo;
  if (localStorage.getItem("todolist") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todolist"))
  }
  const ondelete = (para) => {

    settodolist(todolist.filter((e) => {
      return e !== para;
    }))
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }

  const addTodo = (title, descp) => {
    let sno;
    if (todolist.length === 0) {
      sno = 0;
    } else {
      sno = todolist[todolist.length - 1].sno + 1;
    }
    const newtodo = {
      sno: sno,
      title: title,
      descp: descp
    }
    settodolist([...todolist, newtodo]);
  }

  const [todolist, settodolist] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist])

  return (
    <>
      <Router>
        <Header title="MyTodoList" searchBar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todolist} ondelete={ondelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
