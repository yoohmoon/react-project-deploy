import styled from "styled-components";
import {
  AiFillDelete,
  AiFillCheckSquare,
  AiOutlineCheckSquare,
} from "react-icons/ai";

function TodoItem({ todo, dispatch }) {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_TODO", id: todo.id });
  };

  return (
    <ListItem>
      <CheckButtons onClick={handleToggle}>
        {todo.done ? (
          <AiFillCheckSquare color="#9c88ff" />
        ) : (
          <AiOutlineCheckSquare color="#9c88ff" />
        )}
      </CheckButtons>
      <ListTitle done={todo.done}>{todo.text}</ListTitle>
      <ButtonWrapper>
        <AiFillDelete onClick={handleRemove} color="red" />
      </ButtonWrapper>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CheckButtons = styled.div`
  display: flex;
  align-items: center;
`;

const ListTitle = styled.span`
  flex: 1;
  margin-left: 5px;
  text-decoration: ${({ done }) => done && "line-through"};
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  svg {
    opacity: 0;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

// ${{done} && "line-through"};

export default TodoItem;
