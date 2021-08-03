// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// feel free to change this component.js into TodoList.js
const TodoList = props => {

    const handleClick = () => {
        props.clearCompleted()
    }

    return(
        <div className='your-list'>
            <h2>List Items : MVP</h2>
            <button onClick={handleClick}>Clear All Completed</button>
            <div>
                {props.AllData.map(item => {
                    return (
                        <Todo 
                            toggleItem={props.toggleItem}
                            key={item.id}
                            item={item} 
                        />
                    )
                })}   
            </div>
        </div>
    )
}

export default TodoList;