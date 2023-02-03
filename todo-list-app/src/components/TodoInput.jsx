import { useRef, useState } from "react";
import styled from "styled-components";

function TodoInput({ dispatch, todos }) {
  const [text, setText] = useState("");
  const nextId = useRef(4);

  const handleText = (e) => {
    setText(e.target.value);

    // 핸들텍스트가 왜 필요한걸까? 인풋의 값변화를 감지해줘야 하는 이유?
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("할 일을 입력하세요.");
      return;
    }

    dispatch({ type: "CREATE_TODO", id: nextId.current++, text: text });
    setText("");

    // focus 설정을 안했는데도 focus가 가는 이유는??
  };

  /* 
//이 파일에서 작업하면 안됨, item에서

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };
 */
  /* const handleRemove = () => {
    dispatch({ type: "TOGGLE_TODO", id: text.id });
  }; */

  return (
    <Container>
      <form>
        <Input
          type="text"
          placeholder="할 일을 입력하세요."
          onChange={handleText}
          value={text}
        />
        <Button onClick={handleSubmit}>+</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  justify-content: center;
  /* align-items: center; */

  overflow: hidden;

  form {
    display: flex;
    align-items: center;
  }
`;

const Input = styled.input`
  display: block;
  flex: 1;

  width: 320px;
  height: 100%;

  padding: 5px;
  outline: none;

  border: none;
  background-color: #495057;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: lighter;

  ::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 100%;
  padding: 5px;

  outline: none;
  border: none;

  font-size: 1.3rem;
  color: #fff;

  background-color: #868e96;

  cursor: pointer;
`;

export default TodoInput;
