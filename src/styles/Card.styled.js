import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const CardImg = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  & > img {
    border-radius: 15px 15px 0 0;
  }
`;

export const CardBody = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`;
export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
`;
