import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
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
  // width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
  & > img {
    margin-right: 10px;
  }
  & > span {
    font-size: 25px;
    letter-spacing: 2px;
    @media (max-width: 768px) {
      display: ${(props) => props.responsive};
    }

  }
`;
export const Logo = styled.img`
  width: 10rem;
  height: auto;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const DropDownList = styled.div`
  display: ${(props) => props.display};
  top: 4.1em;
  width: 9rem;
  position: absolute;
  transition: all 0.15s linear;
  background-color: rgba(255,255,255);
  padding: 5px 15px;;
  border-radius: 0 0 5px 5px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
    & > li {
      padding: 10px 0;
      width: 100%;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.border};
        font-weight: 600;
      }
    }
  }
  }
`;

export const DropDown = styled.div`
  width: 9rem;
  background-color: rgba(255,255,255,.7);
  padding: 5px 15px;;
  border-radius: 5px 5px 0 0;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
color: rgba(255,255,255,.7);
padding-bottom: 5px;
&:hover {
  color: #fff;
}
`;

export const ThemeButtons = styled.button`
border-radius: 70%;
margin: 0 10px;
padding: 8px 10px;
border: none;
background: #fff;
cursor: pointer;
& > svg {
  transform: ${(props) => (props.theme === 'dark' ? 'rotate(270deg)' : 'rotate(0deg)')};
}
&:hover svg {
  transition: transform .7s linear;
  transform: ${(props) => (props.theme === 'dark' ? 'rotate(0deg)' : 'rotate(270deg)')}
}

`;
export const LogOutButton = styled.button`
  border-radius: 70%;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  background: #fff;
  &:hover svg {
    transition: transform .5s ease-in-out;
    transform: scale(1.1);
  }
 `;

export const SearchButton = styled.button`
  border-radius: 70%;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  background: #fff;
    &:hover svg {
      transition: transform .5s ease-in-out;
      transform: scale(1.1);
    }
`;

export const SearchContent = styled.div`
width: 300px;
& > input {
  width: 300px;
  padding: 10px 15px;
  border: none;
  &:focus-visible {
    outline: none;
  }
}
`;

export const MovieLink = styled(Link)`
font-size: 14px;
color: #686D76;
margin-left: 8px;
`;

export const SearchResults = styled.ul`
position: absolute;
z-index: 10;
  width: 330px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  padding-left: 0;
  margin: 0;
  & > li {
    padding: 0 8px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: lightgrey;
    }
    &:hover>svg, &:hover ${MovieLink} {
      color: ${({ theme }) => theme.border};
      font-weight: 600;
    }
    &> svg {
      color: #686D76;
    }
  }
`;
