import React, { Component } from 'react';
import './App.css';
import Item from './Item'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { done: props.lists.done, todo: props.lists.todo }
  }

  deleteTodoTask(index) {
    let _newTodo = this.state.todo.slice()
    _newTodo.splice(index, 1)
    this.setState((prevState, props) =>({
      done: prevState.done,
      todo: _newTodo
    }))
  }

  completeTodoTask(task, index) {
    this.setState((prevState, props) => ({
      done: prevState.done.concat(task),
      todo: prevState.todo.filter((e, i) => i !== index)
    }))
  }

  modifyTodoTask(index, newTask) {
    let _todo = this.state.todo
    let newTodo = _todo[index]
    newTodo.title = newTask.title
    newTodo.subtitle = newTask.subtitle
    newTodo.content = newTask.content

    _todo[index] = newTodo

    // newTodo[index].isEditable = !newTodo[index].isEditable;
    this.setState((prevState, props) => ({
      done: prevState.done,
      todo: _todo
    }))
  }

  render() {
    let todos = this.state.todo.map((task, i) => {
      return (
        <Item
          key={task.title}
          onModify={(v) => this.modifyTodoTask(i, v)}
          onComplete={(v) => this.completeTodoTask(task, i, v)}
          onDelete={(v) => this.deleteTodoTask(i)}
          title={task.title}
          subtitle={task.subtitle}
          isEditable={task.isEditable}>
            {task.content}
        </Item>
        )
    })

    let dones = this.state.done.map((task, i) => {
      return (
      <Item
        key={task.title}
        isComplete={true}
        title={task.title}
        subtitle={task.subtitle}
        isEditable={task.isEditable}>
          {task.content}
      </Item>
      )
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
