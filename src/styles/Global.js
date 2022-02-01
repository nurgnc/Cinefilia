import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    background: #EFEFEF;
  }
  img {
    max-width: 100%;
  }
  a {
    color: #141E61;
    text-decoration: none;
  }
  .slick-prev:before,
  .slick-next:before
  { 
    color: gray !important;
    font-size: 25px;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-slide > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
`;

export default GlobalStyles;
