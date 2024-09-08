import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

const SimpleMenuLink = ({ name, path }) => {
  return (
        <Button
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "#2fbfeb",
            },
          }}>
            <Link to={path} style={{ color: 'inherit', textDecoration: 'none' }}>
                {name}
            </Link>
        </Button>
  );
};

export default SimpleMenuLink;