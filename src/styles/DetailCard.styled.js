import styled from 'styled-components';

export const CardBody = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 300px;
  background: rgb(255, 255, 255, 0.8);
  border-radius: 0 0 15px 15px;
  & > h4 {
    margin-bottom: 0px;
  }
`;

export const CardImg = styled.div`
  flex: 1;
  & > img {
    border-radius: 15px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
  max-width: 300px;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
