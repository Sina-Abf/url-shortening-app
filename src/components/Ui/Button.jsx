import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`bg-Cyan hover:bg-lightCyan transition-colors duration-300 text-white rounded-full px-6 py-2 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
