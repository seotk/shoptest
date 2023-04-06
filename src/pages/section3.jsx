import { Outlet } from "react-router-dom";
import styled from "styled-components";
function Section3() {
  let Box = styled.div`
    background-color: tomato;
    width: 500px;
    height: 50px;
  `;
  let Btn = styled.button`
    background-color: ${(props) => props.bg};
    padding: 1rem;
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  `;
  return (
    <>
      <section className="sec3 mw">
        <Box>ТОНКИЙ ПОДХОД К СВОЕМУ ДЕЛУ</Box>
        <p>
          Каждое украшение, начиная от эскиза и заканчивая готовым ювелирным
          изделием, мы создаем вручную, раскручивая витиеватую нить собственной
          фантазии
        </p>
      </section>
      <Btn bg="orange">오렌지</Btn>
      <Btn bg="blue">파란색</Btn>
      <Outlet></Outlet>
    </>
  );
}
export default Section3;
