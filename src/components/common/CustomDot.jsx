import React from 'react';

const CustomDot = ({ onClick, active }) => (
  <button
    className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${active ? 'bg-blue-600' : 'bg-gray-400'}`}
    onClick={onClick}
    aria-label="Carousel dot"
    style={{ outline: 'none' }}
  />
);

export default CustomDot;
