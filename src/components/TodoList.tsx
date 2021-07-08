import React from "react";
import { List, BtnIcon, Text } from "./styles";
import { RiCloseCircleLine } from "react-icons/ri";

interface TodoProps {
    items: {
        id: string;
        text: string;
    }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoProps> = ({ items, onDeleteTodo }) => {
    return (
        <ul>
            {items.map((todo) => (
                <List key={todo.id}>
                    <Text>{todo.text}</Text>
                    <BtnIcon onClick={onDeleteTodo.bind(null, todo.id)}>
                        <RiCloseCircleLine />
                    </BtnIcon>
                </List>
            ))}
        </ul>
    );
};

export default TodoList;
