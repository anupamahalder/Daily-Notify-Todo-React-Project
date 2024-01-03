import PropTypes from 'prop-types';
const Index = ({todo, toggleSelect, toggleComplete}) => {
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
Index.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}
export default Index;