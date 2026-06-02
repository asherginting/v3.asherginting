import React from "react";

interface IIcon {
  className: string;
}

const CodeIcon: React.FC<IIcon> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="m14 4-4 16" />
    </svg>
  );
};

export default CodeIcon;
