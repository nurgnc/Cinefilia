import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
// css
import { ScrollToTopBtn } from '../styles/InputsAndButtons.styled';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <div>
      <ScrollToTopBtn type="button" onClick={scrollToTop} opacity={isVisible ? '1' : '0'}>
        <MdOutlineKeyboardArrowUp size={30} />
      </ScrollToTopBtn>
    </div>
  );
}

export default ScrollToTop;
