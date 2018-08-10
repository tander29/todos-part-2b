import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todolist from './todos.json'


class ToDoItem extends Component {

  render() {
    return (

      <li className={this.props.status ? 'completed' : null}>
        <div className='view'>
          {/* this is using this.props for now, and not status, so I can see it is working, since we aren't doing the functionality yet */}
          <input className='toggle' type='checkbox' checked={this.props.status} onChange={this.props.toggleCheck} />
          <label>{this.props.task}</label>
          <button className="destroy" onClick={this.props.deleteOne} />
        </div>
      </li>
    )
  }
}

class ToDoList extends Component {


  state = { todolist: todolist, key: 200 }

  handleNewTask = (event) => {

    if (event.keyCode === 13) {

      this.state.todolist.push({ title: event.target.value, completed: false, id: this.state.key++, userID: 1 })
      this.setState({ todolist: this.state.todolist })
      this.setState({ key: this.state.key++ })

    }


  }

  toggleCheck = (id) => (event) => {


    let arrayClicked = this.state.todolist.filter(todo => todo.id === id)
    let item = arrayClicked.pop()

    item.completed = !item.completed


    let newArray = this.state.todolist.map(todo => {
      if (todo.id === id.id) { return todo = item } else { return todo }
    })

    this.setState({ todolist: newArray })
    console.log(this.state)
  }



  deleteOne = (id) => (event) => {

    let arrayClicked = this.state.todolist.filter(todo => todo.id === id)
    let item = arrayClicked.pop()


    console.log("delete me", item)
    let index = this.state.todolist.indexOf(item)
    console.log(index)
    let newArray = this.state.todolist.slice()
    newArray.splice(index, 1)
    // console.log(newArray)

    this.setState({ todolist: newArray }, () => console.log(this.state))

  }

  deleteAll = (event) => {
    let newArray = this.state.todolist.filter(todo => todo.completed === false)
    console.log(newArray)
    console.log('ginger')
    this.setState({ todolist: newArray })
    console.log(this.state)
  }

  render() {
    // const todolist = this.todolist

    return (

      <main>
        <section className='todoapp'>
          <header className='header'>
            <h1>todos</h1>
            <input className='new-todo' placeholder='What needs to be done?' onKeyDown={this.handleNewTask} autoFocus />
          </header>

          {/* This section should be hidden by default and shown when there are todos */}
          <section className='main'>
            <ul className='todo-list'>

              {this.state.todolist.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} deleteOne={this.deleteOne(todo.id)} toggleCheck={this.toggleCheck(todo.id)} />)}

            </ul>

          </section>

          <footer className='footer'>
            <span className='todo-count'><strong>0</strong> item(s) left</span>
            <button className="clear-completed" onClick={this.deleteAll}>Clear completed</button>
          </footer>

        </section>
      </main>


    )
  }

}


class App extends Component {
  render() {
    return (

      <ToDoList />

    );
  }
}

export default App;
