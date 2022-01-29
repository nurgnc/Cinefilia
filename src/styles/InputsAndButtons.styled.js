import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const SearchBar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border: 1px solid;
border-color: ${({ theme }) => theme.border};
border-radius: 15px;
width: 100%;
padding: 5px 15px;
box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
`;
export const SearchInput = styled.input`
border: none;
border-radius: 15px;
width: 100%;
&:focus { 
    outline: none !important;
}
 `;

export const ResetButton = styled(AiOutlineCloseCircle)`
color: ${({ theme }) => theme.border};
cursor: pointer;
border: none;
border-radius: 15px;
 `;

export const TimeButtons = styled.div`
 display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border: 1px solid;
border-color: ${({ theme }) => theme.border};
border-radius: 5px;
 `;

export const TimeButton = styled.button`
 background-color: ${(props) => (props.active === 'active' ? props.theme.border : 'transparent')};
 color: ${(props) => (props.active === 'active' ? '#fff' : props.theme.border)};
 border: none;
 padding: 10px;
 cursor: pointer;
 font-size: 14px;
 font-weight: 600;
 `;

export const TrendingContent = styled.div`
 display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
 `;
