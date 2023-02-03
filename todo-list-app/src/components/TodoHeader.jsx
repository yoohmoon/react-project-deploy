// 타이틀, 날짜, 해야 할 일 카운트 영역
import styled from "styled-components";

function TodoHeader({ todos }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", { dateStyle: "full" });

  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <Container>
      <h1>일정 관리</h1>
      <Wrapper>
        <DateText>{dateStr}</DateText>
        <CountText>
          완료: {doneCount}/{todos.length}
        </CountText>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  border-bottom: 1px solid #bbb;

  h1 {
    text-align: center;
    background-color: #9c88ff;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  padding: 5px;
`;

const DateText = styled.h3``;

const CountText = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`;

export default TodoHeader;
