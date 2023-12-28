import React from 'react';
const Buttons = ({ value, onClick }) => {
  return (
    <div>
    <button onClick={onClick}>{value}</button></div>
  );
};
export default Buttons;