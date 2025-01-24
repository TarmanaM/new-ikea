import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "nav" ;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "default" }) => {
  

  const variants = {
    default: "",
    nav: "bg-transparent text-gray-800 hover:bg-gray-100",
    
  };

  const buttonStyle = `${variants[variant]}`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};
