import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <Link to={`recyclerview`}>
        <Button>Recycler view</Button>
      </Link>
    </>
  );
};

export default Header;
