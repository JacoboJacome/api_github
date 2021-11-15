import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <header className="h-16 bg-red-800 flex items-center mi-clase">
      <Link to="/api_github/">
          <h2 className="ml-10 text-4xl hover:text-gray-200	text-white">Github API</h2>
      </Link>
    </header>
  );
};

export default Header;
