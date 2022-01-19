import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8rem;
  background-color: ${({ theme }) => theme.colors.navBg};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

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
