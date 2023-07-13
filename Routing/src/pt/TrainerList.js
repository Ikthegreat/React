import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const TrainerList = () => {
  return (
    <div className="TrainerList">
      여기가 Trainer List 화면 입니다.
      <nav>
        <Button variant="contained">
          <Link to="/trainer/detail" style={{ textDecoration: "none" }}>
            Detail
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default TrainerList;
