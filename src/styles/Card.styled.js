import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
  padding: 20px;
  flex-direction: column;
  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ProductLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textColor};
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
`;
