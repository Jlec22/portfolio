import React from 'react';
import './HoverText.css';

type HoverTextProps = {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const HoverText: React.FC<React.PropsWithChildren<HoverTextProps>> = ({ text, children, onClick }) => {
  return (
    <button type="button" className="text-hover-effect" onClick={onClick}>
      {children ?? text ?? 'HoverText'}
    </button>
  );
};

export default HoverText;
