import styled from 'styled-components';

export const SortContent = styled.div`
border: 1px solid;
border-color: ${({ theme }) => theme.border};
padding: 2em 20px;
border-radius: 15px;
margin-bottom: 2em;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
& > h3 {
  margin-top: 0;
}
& > select {
  padding: 8px 10px;
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .8px;
  color: ${({ theme }) => theme.border};
  &:focus-visible, &:focus {
    background: #9D9D9D;
    color: #fff;
  }  
  & > option {
    font-size: 15px;
  }
}

`;

export const FilterContent = styled.div`
border: 1px solid;
border-color: ${({ theme }) => theme.border};
padding: 2em 20px;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
& > h3 {
  margin-top: 0;
}
`;

export const GenreButton = styled.button`
margin: 0 5px .9em;
padding: 8px 15px;
cursor: pointer;
border-radius: 15px;
border: 1px solid;
border-color: ${({ theme }) => theme.border};
box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
font-size: 14px;
font-weight: 600;
letter-spacing: .5px;
color: ${(props) => (props.active === 'active' ? '#fff' : props.theme.border)};
background: ${(props) => (props.active === 'active' ? props.theme.border : '#fff')};
&:hover {
  color: #fff;
  background: ${({ theme }) => theme.border};
}
`;

export const FilterButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 2em auto;
width: 80%;
border: 1px solid;
border-color: ${({ theme }) => theme.border};
padding: 10px 15px;
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
`;

export const DateInput = styled.input`
padding: 5px 8px;
`;

export const LoadButton = styled.button`
margin: 2em auto;
width: 100%;
border: 1px solid;
border-color: ${({ theme }) => theme.border};
padding: 10px 15px;
color: #fff;
background-color: ${({ theme }) => theme.border};
border-radius: 15px;
border: none;
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
cursor: pointer;
box-shadow: rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px, rgb(17 17 26 / 10%) 0px 24px 80px;
& > div {
  & > svg {
    margin-right: 10px;
  }
}
`;
