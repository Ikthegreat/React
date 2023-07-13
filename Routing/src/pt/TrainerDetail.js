import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const TrainerDetail = () => {
  return (
    <div className="TrainerDetail">
      여기가 Trainer Detail 화면 입니다.
      <nav>
        <Button variant="contained">
          <Link to="/room/trainer" style={{ textDecoration: "none" }}>
            PT Room
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default TrainerDetail;
