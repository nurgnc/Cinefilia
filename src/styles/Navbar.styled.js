import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  background: ${({ theme }) => theme.colors.navBg};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  margin-left: 1.5rem;
  & > span {
    margin-left: 5px;
  }
`;
export const Logo = styled.img`
  width: 10rem;
  height: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;
