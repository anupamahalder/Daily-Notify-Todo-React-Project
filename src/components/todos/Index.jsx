import { useState } from "react";
import ListView from "../listview/Index";
import TableView from "../tableview/Index";

const Index = () => {
    const myTodos = [
        {
            id: 5,
            text: 'Learning Todo APP',
            description: 'Lorem4',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 3,
            text: 'Learning Web APP',
            description: 'Lorem4',
            time: new Date(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 4,
            text: 'Learning Python APP',
            description: 'Lorem4',
            time: new Date(),
            isComplete: false,
            isSelect: false
        }
    ];
    const [todos, setTodos] = useState(myTodos);
    const toggleSelect = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, isSelect: !todo.isSelect } : todo
            )
        );
    };

    const toggleComplete = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };
    return (
        <div>
            <ListView todos={todos} toggleSelect={toggleSelect} toggleComplete={toggleComplete}/>
            <h1>Table view</h1>
            <TableView todos={todos} toggleComplete={toggleComplete} toggleSelect={toggleSelect}/>
        </div>
    );
};

export default Index;