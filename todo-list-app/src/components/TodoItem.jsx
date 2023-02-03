import styled from "styled-components";

function TodoItem({ todo }) {
  return <ListItem>{todo.text}</ListItem>;
}

const ListItem = styled.li`
  padding: 5px;
`;

export default TodoItem;
