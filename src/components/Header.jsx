import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 dark:text-gray-500">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-500">
        {title}
      </p>
    </div>
  );
};

export default Header;
