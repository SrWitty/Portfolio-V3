import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const arrowStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease',
    zIndex: 9999 // Ensure the button appears on top of other content
  };

  return (
    <div style={arrowStyle}>
      {isVisible && (
        <button className="btn btn-primary rounded-circle" onClick={scrollToTop} style={{ backgroundColor: '#695CFE', borderColor: '#007bff' }}>
          <FontAwesomeIcon icon={faArrowUp} style={{ color: '#fff' }} />
        </button>
      )}
    </div>
  );
}

export default Arrow;
