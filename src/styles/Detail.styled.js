import styled from 'styled-components';

export const CardBody = styled.div`
  flex: 1;
  padding: 10px 10px 2rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 300px;
  background: rgb(255, 255, 255, 0.8);
  border-radius: 0 0 15px 15px;
  & > h4 {
    margin-bottom: 0px;
  }
`;

export const CardImg = styled.div`
  flex: 1;
  & > img {
    border-radius: 15px;
    object-fit: contain;
    height: 450px;

  }
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: auto;
  max-width: 300px;
  height: 450px;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Genre = styled.button`
border: 1px solid;
border-color: ${(props) => props.randomBg};
background-color: ${(props) => props.randomBg};
border: none;
padding: 10px 15px;
margin-right: 15px;
margin-bottom: 15px;
border-radius: 10px;
font-size: 16px;
color: #fff;
letter-spacing: 2px;
// -webkit-text-stroke: .5px #000;
text-shadow: -1px -1px 0 #DBDBDB, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
font-weight: 500;
box-shadow: rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px, rgb(17 17 26 / 10%) 0px 24px 80px;
`;

export const GrayText = styled.span`
color: #686D76;
font-weight: 600;
`;

export const CrewElement = styled.div`
border: 1px solid;
border-color: ${(props) => props.randomBorder};
padding: 1.5rem 1.8rem;
border-radius: 10px;
text-align: center;
box-shadow: rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px, rgb(17 17 26 / 10%) 0px 24px 80px;
&:hover {
background-color: ${(props) => props.randomBorder};
color: #fff;
}
&:hover ${GrayText} {
color: #fff;

}
& > h4 {
  margin-top: 0;
}
`;

export const OverView = styled.div`
font-size: 18px;
font-weight: 600;
line-height: 40px;
letter-spacing: 1px;
color: #595260;
  & > blockquote {
    font-style: italic;
    line-height: 1.618;
    font-size: 1.2em;
    width: 40em;
    position: relative;
    margin: 0;
    padding: 50px 100px 40px 40px;
    @media (max-width: 768px) {
      width: 20em;
      padding: 50px 30px 30px 30px;
    }
  }
  & > blockquote::before {
    content: open-quote;
    top: 0;
    left: 0;
  }
  
  & > blockquote::after {
    content: close-quote;
    bottom: 0;
    right: 5rem;
  }
  & > blockquote::before,
  & > blockquote::after {
    background-color: #cccccc;
    display: block;
    width: 35px;
    height: 35px;
    line-height: 1.618;
    font-size: 1.5em;
    border-radius: 100%;
    text-align: center;
    position: absolute;
  }
`;

export const Poster = styled.img`
  border-radius: 15px;
  box-shadow: rgb(17 17 26 / 10%) 0px 8px 24px, rgb(17 17 26 / 10%) 0px 16px 56px, rgb(17 17 26 / 10%) 0px 24px 80px;
`;

export const LineTitle = styled.h2`
  width: 100%;
  margin: 0 auto 2em;
  overflow: hidden;
  text-align: center;
  font-weight:600;
  letter-spacing: 1px;
  color: #9D9D9D;
    &:before, &:after {
      content: "";
      display: inline-block;
      width: 50%;
      margin: 0 .5em 0 -55%;
      vertical-align: middle;
      border-bottom: 1px solid;
    }
    &:after {
      margin: 0 -55% 0 .5em;
    }
`;
