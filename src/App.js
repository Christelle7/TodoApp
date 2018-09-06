import React, { Component } from 'react';
import './App.css';
import Task from './Components/Tasks';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  state = {
    tasks:[
      {
        id:0,
        taskName:'task 1',
      },
      {
        id:1,
        taskName:'task 2',
      }
    ],

    inputText:''

  }

  // this function is called everytime the value in text input is changed
  // and updates state.inputText value to current value in text input
  handleTextChange=(e)=>{
    // This prevents the default browser event from occuring
    e.preventDefault();

    // this copies the current state of the object
    const newState={...this.state};

    // this gets current text input value ( e.target.value)
    newState.inputText= e.target.value;

    // this update the state object , and will re-render components 
    this.setState(newState);
  };
  
  handleSubmit=(e)=>{
    e.preventDefault();
    const newState={...this.state};
    // adds a new task to state.tasks array
    // id give it a unique value thru the method used
    newState.tasks.push({
      id: Date.now().toString(),
      taskName:newState.inputText
    });
    // this resets the text input form to blank after submit
    newState.inputText = '';
    // set the new state
      this.setState(newState);
  }
    handleDeleteTask =(index)=>{
      const newState={...this.state};
      newState.tasks.splice(index,1);
      this.setState(newState);
    }

  listTasks = () => {
    return this.state.tasks.map((task,index)=> {
      return <Task
        taskName={task.taskName} 
        onDelete={()=>{this.handleDeleteTask(index)}}
        key={task.id} />
    });
  };
  render() {
    return (
      <div className="App">
        <h1> On the Grind </h1>
        <div>
          <form onSubmit ={this.handleSubmit}> 
            {/* <input type ="text" value={this.state.inputText} onChange={this.handleTextChange} /> */}
            <TextField
              value={this.state.inputText}                    
              onChange={this.handleTextChange}
              id="with-placeholder"
              label=" GET TO IT"
              placeholder=" "
              margin="normal"
        />
            <button className="buttonStyle"> Add </button>
          </form>
        </div>
         {this.listTasks()}
      </div>
    );
  }
}

export default App;
