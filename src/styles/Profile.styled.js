import styled from 'styled-components';

export const TableContent = styled.div`
  & > table { 
    width: 100%; 
    border-collapse: collapse;
    text-align: center;

  & > tbody{
    tr:nth-of-type(odd) { 
      background: #DBE3E5; 
    }
    & > tr {
      & > td {
        padding: 6px; 
        border: 1px solid #ccc; 
        text-align: left; 
      }
    }
  } 
  & > thead {
    & > tr{
     & > th { 
        background: ${({ theme }) => theme.bg};
        color: white; 
        font-weight: bold; 
        padding: 6px; 
        border: 1px solid #ccc; 
        text-align: left; 
      }
    }
  }
}
`;

export const FilterContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
margin-bottom: 2em;
& > select {
  padding: 8px 10px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .8px;
  & > option {
    font-size: 15px;
  }
}
`;

export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
`;
