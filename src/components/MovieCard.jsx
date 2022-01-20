import {
  StyledCard,
  MovieLink,
  CardImg,
  CardBody,
} from "../styles/Card.styled";
import { img_300 } from "../api";

const MovieCard = ({ data }) => {
  return (
    <StyledCard>
      <CardImg>
        <img src={`${img_300}${data?.poster_path}`} alt={data?.title} />
      </CardImg>
      <CardBody>
        <MovieLink to={`/movies/${data?.id}`}>{data?.title}</MovieLink>
        <p>{data?.release_date}</p>
      </CardBody>
    </StyledCard>
  );
};

export default MovieCard;
