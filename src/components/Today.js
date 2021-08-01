import React, {useState} from 'react';

export default function Today() {
    const [todos, setTodos] = useState([
        {id: 1, name: 'shower'},
        {id: 2, name: 'eat'}
    ])
    return (
        <div>
            <form className='add-form center'>
                <label htmlFor='name'>ADD TO DO</label>
                <input className='name-input' type='text' id='name' placeholder='NAME'/>
                <input className='submit-input' type='submit' value='SUBMIT'/>
            </form>

            <div className='center column'>
                <h2>TODAY'S TO-DOS:</h2>
                {todos.map((item) => {
                    <h3>{item.name}</h3>
                })}
            </div>
        </div>
    )
}