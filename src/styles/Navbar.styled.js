import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.bg};
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
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

export const DropDownList = styled.div`
  display: ${(props) => props.display};
  top: 4.4rem;
  width: 8rem;
  position: absolute;
  transition: all 0.15s linear;
  background-color: rgba(255,255,255,.9);
  padding: 5px 15px;;
  border-radius: 0 0 5px 5px;
  z-index: 10;
  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  }
`;

export const DropDown = styled.div`
  width: 8rem;
  background-color: rgba(255,255,255,.7);
  padding: 5px 15px;;
  border-radius: 5px 5px 0 0;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }
`;

export const ThemeButtons = styled.button`
border-radius: 70%;
margin-right: 10px;
padding: 5px 8px;
border: none;
& > svg {
  transform: ${(props) => (props.theme === 'dark' ? 'rotate(270deg)' : 'rotate(0deg)')}
}
&:hover svg {
  transition: transform .7s ease-in-out;
  transform: ${(props) => (props.theme === 'dark' ? 'rotate(0deg)' : 'rotate(270deg)')}
}

`;
export const LogOutButton = styled.button`
 border-radius: 70%;
padding: 5px 8px;
border: none;
 `;
