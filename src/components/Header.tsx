import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <nav>
      <Link to={`/infinity`}>
        <Button variant="outlined">Infinity Scroll</Button>
      </Link>
      <Link to={`/lazyimage`}>
        <Button variant="outlined">LazyImage</Button>
      </Link>
      <Link to={`/loginform`}>
        <Button variant="outlined">LoginForm</Button>
      </Link>
      <Link to={`/select`}>
        <Button variant="outlined">Compound Pattern</Button>
      </Link>
      <Link to={`/recyclerview`}>
        <Button variant="outlined">Recycler view</Button>
      </Link>
    </nav>
  );
};

export default Header;
