import styled from 'styled-components';

export const Title = styled.h1`
color: ${({ theme }) => theme.border};
text-align: center;
letter-spacing: 2px;
`;

export const ListContent = styled.ul`
color: #000;
& > li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: 2.5em;
  color: #787A91;
  & > svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.border};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
}
`;
