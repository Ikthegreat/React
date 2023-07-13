import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const GroupList = () => {
  return (
    <div className="GroupList">
      여기가 Group List 화면 입니다.
      <nav>
        <Button variant="contained">
          <Link to="/group/detail" style={{ textDecoration: "none" }}>
            Detail
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default GroupList;
