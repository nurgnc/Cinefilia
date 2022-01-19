import styled from "styled-components";
import bg from "../assets/img/bg-8.jpg";

export const ContainerFluid = styled.div`
  width: 100%;
  margin: 0;
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0.75rem;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const HomeWrapper = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 61rem;
`;
