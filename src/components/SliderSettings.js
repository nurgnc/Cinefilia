const settingsMainSlider = {
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  adaptiveHeight: true,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const settingsActorSlider = {
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export { settingsMainSlider, settingsActorSlider };
