import styled from "styled-components";
import "./App.css";
import Todo from "./todo/Todo";

function App() {
  return (
    <Container>
      <Todo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9ecef;
  height: 100vh;
`;

export default App;
