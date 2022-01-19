import styled from "styled-components";

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
