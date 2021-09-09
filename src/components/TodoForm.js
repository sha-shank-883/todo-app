import React, { useState, useEffect, useRef } from 'react';

// //  get localstorage
// const getLocalItems = () => {
//     let list = localStorage.getItem('lists') ;
//     console.log(list);

//     if (list ) {
//         return JSON.parse(localStorage.getItem('lists'));
//     } else {
//         return [];
//     }

// }


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    // localStorage.setItem('value', input);
    // localStorage.getItem('',);



    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    // // Add data to localStorage
    // useEffect (() => {
    //     localStorage.setItem('lists', JSON.stringify(input))
    // }, [input]);

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Update your item'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    
                    <button className='todo-button edit '> Update </button>
                </>
            ) :


                (
                    <>

                        <input
                            type='text'
                            placeholder='Add a todo'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button'> Add todo </button>
                    </>
                )}




     
{/* 
<div className='logo' >  <p>  Shashank Singhal
&copy; 2021           </p>
    
</div> */}

        </form>

        

    );
};


export default TodoForm;
