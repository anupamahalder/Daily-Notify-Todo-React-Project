import PropTypes from 'prop-types';

// list item component
const Todo = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <div className="join join-vertical">
            <input type="checkbox" id={todo.id} onChange={()=>toggleSelect(todo.id)}
             checked="checked" className="checkbox" />
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <button className="ml-auto" color={todo.isComplete ? "text-red-500":"text-green-500"} onClick={()=>toggleComplete(todo.id)}>
            {todo.isComplete ? "Completed" : "Running"}
            </button>
        </div>
    );
};
//adding prop types
Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}

const ListView = ({todos=[], toggleSelect, toggleComplete}) => {
    if (todos === undefined) {
        console.error("Warning: todos prop is undefined in ListView.");
        // You can throw an error if needed
        // throw new Error("todos prop is required in ListView.");
    }
    
    // console.log(todos);
    console.log(todos);
    return (
        <div className="join join-vertical">
            {
                todos.map(todo => (
                    <Todo
                    key={todo.id}
                    todo = {todo} 
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                    />
                ))
            }
        </div>
    );
};
//adding prop types
ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}
export default ListView;