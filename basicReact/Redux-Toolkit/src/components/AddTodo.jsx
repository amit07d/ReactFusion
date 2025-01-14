import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("Todo cannot be empty!");
            return;
        }
        dispatch(addTodo(input));
        setInput(""); // Reset input only after dispatch
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                aria-label="Todo Input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                disabled={!input.trim()}
                className={`text-white py-2 px-6 rounded text-lg ${
                    input.trim() ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-500 cursor-not-allowed"
                }`}
                aria-label="Add Todo Button"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
