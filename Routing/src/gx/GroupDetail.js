import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const GroupDetail = () => {
  return (
    <div className="GroupDetail">
      여기가 Group Detail 화면 입니다.
      <nav>
        <Button variant="contained">
          <Link to="/room/group" style={{ textDecoration: "none" }}>
            PT Room
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default GroupDetail;
