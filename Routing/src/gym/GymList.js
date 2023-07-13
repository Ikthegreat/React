import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const GymList = () => {
  return (
    <div className="GymList">
      여기가 Gym List 화면 입니다.
      <nav>
        <Button variant="contained">
          <Link to="/gym/detail" style={{ textDecoration: "none" }}>
            Detail
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default GymList;
