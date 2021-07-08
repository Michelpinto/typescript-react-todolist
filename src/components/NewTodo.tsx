import React, { useRef } from "react";
import { Form, Div1, Button } from "./styles";

interface addTodoProps {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<addTodoProps> = ({ onAddTodo }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        onAddTodo(enteredText);
    };

    return (
        <Form onSubmit={todoSubmit}>
            <Div1>
                <input
                    type="text"
                    id="todo-text"
                    placeholder="New todo"
                    ref={textInputRef}
                />
            </Div1>
            <Button type="submit">Add todo</Button>
        </Form>
    );
};

export default NewTodo;
