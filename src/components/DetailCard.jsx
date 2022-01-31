import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCard,
  CardImg,
  CardBody,
  GrayText,
} from '../styles/Detail.styled';
import { img300, defaultImg } from '../api';

function DetailCard({
  id, img, characterName, originalName,
}) {
  const noPicture = img === null ? `${defaultImg}` : `${img300}${img}`;
  return (
    <StyledCard key={id}>
      <CardImg>
        <img src={noPicture} alt={originalName} />
      </CardImg>
      <CardBody>
        <GrayText>
          {characterName}
          {' '}
          (
          {originalName}
          )
        </GrayText>
      </CardBody>
    </StyledCard>
  );
}

DetailCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  characterName: PropTypes.string,
  originalName: PropTypes.string,
};
DetailCard.defaultProps = {
  id: '',
  img: '',
  characterName: '',
  originalName: '',
};

export default DetailCard;
