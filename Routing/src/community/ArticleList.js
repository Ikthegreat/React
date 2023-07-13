import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const ArticleList = () => {
  return (
    <div className="ArticleList">
      여기가 Article List 화면 입니다.
      <nav>
        <Button variant="contained">
          <Link to="/community/detail" style={{ textDecoration: "none" }}>
            Detail
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default ArticleList;
