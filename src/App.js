import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const AllData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Rimsha',
    id: 1528817084360,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      AllData: AllData,
    }
  }

  addItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
       AllData: [...this.state.AllData, newItem]
    })
  }  

  toggleItem = (id) => {
    const newList = this.state.AllData.map(item => {
      if (item.id === id) {
        return ({
          ...item, completed: !item.completed
        })
      } else {
        return(item);
      }
    })
    this.setState({
      AllData: newList 
    })
  }

  clearCompleted = () => {
    const newList = this.state.AllData.filter(item => {
      return(item.completed === false)
    })

    this.setState({
      AllData: newList
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='Container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} AllData={this.state.AllData} />
      </div>
    );
  }
}


export default App;
