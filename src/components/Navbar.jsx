import React from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/contact">Contact</Link>
      </button>
      <button>
        <Link to="/favs">Favs</Link>
      </button>

      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
