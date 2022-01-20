import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8rem;
  background-color: ${({ theme }) => theme.colors.navBg};
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  & > h6 {
    font-size: 18px;
    font-weight: 600;
    margin-right: 15px;
  }
  & > a {
    color: ${({ theme }) => theme.colors.textColor};
    margin-left: 10px;
  }
`;
