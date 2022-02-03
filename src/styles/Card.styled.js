import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardBody = styled.div`
  flex: 1;
  position: absolute;
  border-radius: 0 0 15px 15px;
  top:0px;
  left:0px;
  background-color: rgba(255,255,255,.7);
  width:100%;
  height:100%;
  transition: all .7s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > p {
    color: black;
  }
`;

export const CardOverview = styled.p`
  display: ${(props) => props.responsive};
`;
export const CardImg = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100%;
  transition: all .5s cubic-bezier(.8,.5,.2,1.4);
  box-shadow: 0px 2px 3px rgba(0,0,0,.3);
  & > img {
    border-radius: 15px;
    // object-fit: fill;
    min-height: 450px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-basis: 300px;
  flex: 1;
  flex-grow: 0;
  transition: all .5s cubic-bezier(.8,.5,.2,1.4);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  align-items: center;
  border-radius: 15px;
  max-width: 300px;
  height: 440px;
  flex-direction: column;
  &:hover {
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);    
    transform: scale(.97);
  }
  &:hover ${CardBody} {
    left:0px;
    transition: all .7s ease-in-out;
    clip-path: circle(75%);
  }
  &:hover ${CardImg} {
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);
    transform: scale(1.6) rotate(20deg);
    filter: blur(2px);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  font-size: 30px;
`;

export const CardReview = styled.div`
  width: 100%;
  min-height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(255,255,255,.3);
  border-radius: 15px;
  margin: 20px 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CardReviewBody = styled.div`
padding: 0px 15px 10px;
`;

export const ImgAvatar = styled.img`
min-width: ${(props) => props.width};
height: auto;
border-radius: 50%;
padding: 1rem 15px;
margin-right: 20px;
`;

export const ReleaseDate = styled.span`
 color: #141E61;
 margin-left: 5px;
 font-weight: 600;
`;
