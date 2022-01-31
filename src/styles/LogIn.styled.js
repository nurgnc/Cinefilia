import styled from 'styled-components';

export const BgDark = styled.div`
background: #000;
`;

export const FormContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: ${(props) => props.width};
background-color: rgba(255,255,255,.7);
height: 40vh;
border-radius: 15px;
box-shadow: rgba(255, 255, 255, 0.2) 0px 10px 60px;
`;

export const UserNameContent = styled.div`
& > input {
  padding: 15px 15px;
  border-radius: 15px;
  border: none;
  width: 30em;
  background: #fff;
}
`;
export const PasswordContent = styled.div`
& > input {
  padding: 15px 15px;
  border-radius: 15px;
  border: none;
  width: 30em;
  background: #fff;
}`;
export const LogInButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 60%;
border: 1px solid;
border-color: ${({ theme }) => theme.border};
padding: 8px 15px;
color: #fff;
background-color: ${({ theme }) => theme.border};
border-radius: 15px;
border: none;
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
cursor: pointer;
box-shadow: rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px, rgb(17 17 26 / 10%) 0px 24px 80px;
  &:hover {
    transition: transform .5s ease-in-out;
    transform: scale(1.1);
  }
  & > svg {
    margin-right: 10px;
  }
`;

export const BgContent = styled.div`
width: ${(props) => props.width};

`;
