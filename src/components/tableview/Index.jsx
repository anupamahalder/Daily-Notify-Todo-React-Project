import PropTypes from 'prop-types';
const RowItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <tr>
            <td scope="row">
            <input type="checkbox" id={todo.id} onChange={()=>toggleSelect(todo.id)}
             checked="checked" className="checkbox" />
            </td>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>{todo.text}</td>
            <td>
            <button className="ml-auto" color={todo.isComplete ? "text-red-500":"text-green-500"} onClick={()=>toggleComplete(todo.id)}>
            {todo.isComplete ? "Completed" : "Running"}
            </button>
            </td>
        </tr>
    );
};
//adding prop types
RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}

const TableView = ({todos=[], toggleSelect, toggleComplete}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo =>(
                        <RowItem
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            toggleSelect={toggleSelect}
                        />
                    ))
                }
            </tbody>
        </table>
    );
};
//adding prop types
TableView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}
export default TableView;