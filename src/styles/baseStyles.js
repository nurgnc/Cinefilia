import styled from 'styled-components';

export const ContainerFluid = styled.div`
  width: 100%;
  margin: 0;
`;

export const Container = styled.div`
  width: 1500px;
  max-width: 100%;
  padding: 0.75rem;
  margin: 0 auto;
`;

export const MarginVertical = styled.div`
  margin: 4rem auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  & > ul {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 5fr);
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 5fr);
    grid-gap: 15px;
    text-align: center;
  }
`;

export const HomeWrapper = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // height: 61rem;
`;

export const Width = styled.div`
  width: ${(props) => props.value};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Margin = styled.div`
margin-right: ${(props) => props.mr};
margin-left: ${(props) => props.ml};
margin-top: ${(props) => props.mt};
margin-bottom: ${(props) => props.mb};
`;

export const Padding = styled.div`
padding-right: ${(props) => props.pr};
padding-left: ${(props) => props.pl};
padding-top: ${(props) => props.pt};
padding-bottom: ${(props) => props.pb};
`;

export const BgContent = styled.div`
background-color: ${(props) => props.bgColor};
padding: 2em 0;
`;
