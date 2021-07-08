import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    font-size: 1.5rem;

    justify-content: center;
`;

export const Div1 = styled.div`
    & label {
        color: #3d5389;
    }

    & input {
        padding: 0.5rem;
        outline: none;
        border-radius: 2.5px;
        border: 2px solid #3d5389;
    }

    & input::placeholder {
        color: #3d5389;
        opacity: 0.5;
    }
`;

export const Button = styled.button`
    background-color: #3d5389;
    color: #fff;
    margin-left: 1rem;
    padding: 0.5rem;
    border-radius: 2.5px;
    border: none;
`;

export const List = styled.li`
    list-style: none;
    padding: 1rem 0;
    font-size: 1.5rem;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;

    &:first-child {
        margin-top: 2rem;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const Text = styled.span`
    color: #3d5389;
`;

export const BtnIcon = styled.button`
    background: none;
    color: #3d5389;
    border: none;
    font-size: 2rem;
`;
