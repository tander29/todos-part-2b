import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todolist from './todos.json'


class ToDoItem extends Component {
  constructor(props) {
    super(props)
    this.state = { completed: false, text: "Task" }
  }
  render() {
    return (

      <li className={this.props.status ? 'completed' : null}>
        <div className='view'>
          {/* this is using this.props for now, and not status, so I can see it is working, since we aren't doing the functionality yet */}
          <input className='toggle' type='checkbox' checked={this.props.status} />
          <label>{this.props.task}</label>
        </div>
      </li>
    )
  }
}

class ToDoList extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { completed: false, text: "Task" }
  // }
  // the es6 way below, todos in the state is equal to state = {todos: todos}
  // item of same name
  state = { todolist }


  render() {
    this.state = { todolist }
    return (
      todolist.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} />)
    )
  }

}


class App extends Component {
  render() {
    return (
      <body>
        <section className='todoapp'>
          <header className='header'>
            <h1>todos</h1>
            <input className='new-todo' placeholder='What needs to be done?' autoFocus />
          </header>

          {/* This section should be hidden by default and shown when there are todos */}
          <section className='main'>
            <ul className='todo-list'>


              <ToDoList />

            </ul>

          </section>

          <footer className='footer'>
            <span className='todo-count'><strong>0</strong> item(s) left</span>
            <button className="clear-completed">Clear completed</button>
          </footer>




        </section>
      </body>
    );
  }
}

export default App;
