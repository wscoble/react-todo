import React, { Component } from 'react';
import './App.css';
import Item from './Item'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { done: props.lists.done, todo: props.lists.todo }
  }

  completeTodoTask(task, index) {
    console.log(index, task)
    this.setState((prevState, props) => ({
      done: prevState.done.concat(task),
      todo: prevState.todo.splice(index, 1)
    }))
  }

  render() {
    let todos = this.state.todo.map((task, i) => {
      return <Item key={i} onComplete={() => this.completeTodoTask(task, i)} title={task.title} subtitle={task.subtitle}>{task.content}</Item>
    })

    let dones = this.state.done.map((task, i) => {
      return <Item key={i} showComplete={false} title={task.title} subtitle={task.subtitle}>{task.content}</Item>
    })

    return (
      <div>
        <div>
          <h2>TODO:</h2>
          {todos}
        </div>
        <div>
          <h2>DONE!</h2>
          {dones}
        </div>
      </div>
    );
  }
}

export default App;
