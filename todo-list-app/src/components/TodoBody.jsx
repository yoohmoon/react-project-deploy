import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoBody({ todos, dispatch }) {
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  return (
    <Container>
      <ul onClick={handleToggle}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  border-bottom: 1px solid #bbb;
`;

export default TodoBody;
