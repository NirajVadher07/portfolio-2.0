// components/Backdrop.js
import React from 'react';

const Backdrop = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center text-white transition-opacity ease-in duration-500 z-50" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      {children}
    </div>

  )
};

export default Backdrop;
