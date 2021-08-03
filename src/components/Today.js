import React, {useState} from 'react';
import { AiFillDelete } from 'react-icons/ai';
// import { AiFillEdit } from 'react-icons/ai';


export default function Today(props) {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    // const [edit, setEdit] = useState({
    //     id: null,
    //     value: ''
    // })
    
    let addTodo = task => {
        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTodo = [task, ...todoList]
        setTodoList(newTodo)
        console.log( ...todoList)
    }

    let handleTodo = (e) => {
        setTodo(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setTodo('');
        addTodo({
            id: ~~(Math.random() * 1000000),
            text: todo,
        })
    }

    let completeTodo = id => {
        let updatedTodos = todoList.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodoList(updatedTodos)
        console.log(updatedTodos)
    }

    let removeTodo = id => {
        const removeArr = [...todoList].filter(todo => todo.id !== id)

        setTodoList(removeArr)
    }

    // let updateTodo = (todoId, newValue) => {
    //     if (!newValue.text || /^\s*$/.test(newValue.text)) {
    //         return;
    //     }

    //     setTodoList(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    // }

    // let submitUpdate = value => {
    //     updateTodo(edit.id, value)
    //     setEdit({
    //         id: null,
    //         value: ''
    //     })
    // }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className='add-form center'>

                <input autoFocus value={todo} name='text' onChange={handleTodo} className='name-input' type='text' id='name' placeholder='Task...'/>

                <input onClick={props.addTodo} className='submit-input' type='submit' value='Add'/>

            </form>

            <div>
                <h2 className='center column todo-title'>To-Do List:</h2>
                {todoList.map((todo, index) => {
                    return (
                    <div key={index}  className={todo.isComplete ? 'todo-container center completed' : 'todo-container center'}>
                        
                        <div onClick={() => completeTodo(todo.id)}>

                            <h1 className='todo-name' >{todo.text} </h1>

                            {/* <AiFillEdit onClick={() => setEdit( {id: todo.id, value: todo.text} )} className='edit-icon'/> */}

                        </div>

                        <AiFillDelete onClick={() => removeTodo(todo.id)} className='delete-icon'/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}