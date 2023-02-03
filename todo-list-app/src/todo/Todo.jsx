import { useReducer } from "react";
import styled from "styled-components";
import TodoBody from "../components/TodoBody";
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    //   [{},{},...] 배열 내 특정 요소만 수정하는 것이라서 { 중괄호 }만 써주는건가?

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

function Todo() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: "React 공부", done: true },
    { id: 2, text: "Typescript 공부", done: false },
    { id: 3, text: "Javascript 공부", done: false },
  ]);

  return (
    <Container>
      <TodoHeader todos={todos} />
      <TodoBody todos={todos} dispatch={dispatch} />
      <TodoInput todos={todos} dispatch={dispatch} />
    </Container>
  );
  //   todos={todos}를 props로 설정하는 경우와, dispatch={dispatch}로 설정하는 경우는 어떤 차이가 있지?
  // todos={todos} 는 상태값?!을 전달하는 경우임. 그 안에 initial state인 배열을 전달받게 되는 거인듯.
  //   고칠 점: TodoInput에는 todos={todos} 안 보내도 됨.
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 80%;
  background-color: #fff;

  border-radius: 7px;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  overflow: hidden;
`;

export default Todo;
