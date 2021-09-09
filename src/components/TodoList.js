import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';



//  get localstorage
const getLocalItems = () => {
    let list = localStorage.getItem('lists') ;
    console.log(list);

    if (list ) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }

}

function TodoList() {
    const [ todos, setTodos ] = useState(getLocalItems());

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };
    // Add data to localStorage
    useEffect (() => {
        localStorage.setItem('lists', JSON.stringify(todos))
    }, [todos]);

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                 />
        </div>
    );
}

export default TodoList;
