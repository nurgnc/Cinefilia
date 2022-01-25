import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardBody = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  position: absolute;
  width: 300px;
  background: rgb(255, 255, 255, 0.8);
  border-radius: 0 0 15px 15px;
  // bottom: 0;
  opacity: 0;
  & > p {
    color: black;
  }
`;

export const CardImg = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > img {
    border-radius: 15px;
    object-fit: fill;
    min-height: 500px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
  max-width: 300px;
  flex-direction: column;
  &:hover ${CardBody} {
    opacity: 1;
  }
  &:hover ${CardImg} {
    // filter: blur(3px);
    // -webkit-filter: blur(3px);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
`;

export const CardReview = styled.div`
display: flex;
flex-directions: row;
justify-content: space-between;
  align-items: flex-start;
background-color: #fff;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin: 20px auto;
`;

export const CardReviewBody = styled.div`
padding: 10px 15px;
`;

export const ImgReview = styled.img`
max-width: 100px;
height: auto;
border-radius: 50%;
padding: 2rem 15px;
`;
