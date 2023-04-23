import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #CACACA;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color:  #FFF;
  width: 80%;
  min-height: 350px;
`

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
`

export const Column = styled.div`
  width: 100%;
  height: 120%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`
