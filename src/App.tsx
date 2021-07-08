import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

const Title = styled.h1`
    color: #3d5389;
    margin: 8rem 0;
    font-size: 3rem;
    font-weight: 500;
`;

const TodoBox = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 3rem;
    border: 2px solid #3d5389;
    border-radius: 5px;
    box-shadow: 5px 5px 18px -10px rgba(0, 0, 0, 0.62);
`;

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos((prevTodos) => [
            { id: Math.random().toString(), text: text },
            ...prevTodos,
        ]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <Container>
            <Title>Todo List react-typescript</Title>
            <TodoBox>
                <NewTodo onAddTodo={todoAddHandler} />
                <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
            </TodoBox>
        </Container>
    );
};

export default App;
