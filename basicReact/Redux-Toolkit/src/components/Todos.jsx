import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const handleUpdate = (id, newText) => {
        if (newText.trim() === '') {
            alert('Todo text cannot be empty.');
            return;
        }
        dispatch(updateTodo({ id, text: newText }));
        setEditId(null);
        setEditText('');
    };

    return (
        <>
            <div className="text-white text-2xl font-bold mb-4">Todos</div>
            <ul className="list-none">
                {todos.map(({ id, text, completed }) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={id}
                    >
                        {editId === id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="bg-zinc-700 text-white px-2 py-1 rounded"
                            />
                        ) : (
                            <div
                                className={`text-white ${completed ? 'line-through' : ''}`}
                                onClick={() => dispatch(toggleTodo({ id }))}
                            >
                                {text}
                            </div>
                        )}
                        <div className="flex gap-2">
                            {editId === id ? (
                                <button
                                    onClick={() => handleUpdate(id, editText)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setEditId(id);
                                        setEditText(text);
                                    }}
                                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                                >
                                    Edit
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
