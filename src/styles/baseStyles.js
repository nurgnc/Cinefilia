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
  min-height: ${(props) => props.height};
  @media (max-width: 1400px) {
    width: 1200px;

  }
`;

export const MarginVertical = styled.div`
  margin: 4rem auto;
  width: ${(props) => props.width};
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
  background: ${(props) => props.backGround};
  border-radius: ${(props) => props.radius};
  flex-wrap: ${(props) => props.wrap};
  & > svg {
    margin-right: 10px;
  }
  & > ul {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.resFlexDirection};
    align-items: ${(props) => props.resAlign};
    justify-content: ${(props) => props.resJustify};
    flex-wrap: wrap;
  }
`;

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(${(props) => props.col}, 5fr);
  grid-gap: 30px;
  @media (max-width: 768px) {
    display: inline-grid;
    grid-template-columns: repeat(2, 5fr);
    grid-gap: 15px;
  }
  @media (max-width: 620px) {
    display: inline-grid;
    grid-template-columns: repeat(1, 5fr);
    grid-gap: 15px;
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

export const CenterText = styled.p`
text-align: center;
color: #686D76;
`;
