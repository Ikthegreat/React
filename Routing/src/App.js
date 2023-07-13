import "./App.css";
import Home from "./home/Home";
import TrainerList from "./pt/TrainerList";
import TrainerDetail from "./pt/TrainerDetail";
import PersonalTrainingRoom from "./pt/PersonalTrainingRoom";

import GroupList from "./gx/GroupList";
import GroupDetail from "./gx/GroupDetail";
import GroupExerciseRoom from "./gx/GroupExerciseRoom";

import ArticleList from "./community/ArticleList";
import ArticleDetail from "./community/ArticleDetail";

import GymList from "./gym/GymList";
import GymDetail from "./gym/GymDetail";

import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained" style={{ marginRight: "10px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Button>
        <Button variant="contained" style={{ marginRight: "10px" }}>
          <Link to="/trainer" style={{ textDecoration: "none" }}>
            Trainer
          </Link>
        </Button>
        <Button variant="contained" style={{ marginRight: "10px" }}>
          <Link to="/group" style={{ textDecoration: "none" }}>
            Group
          </Link>
        </Button>
        <Button variant="contained" style={{ marginRight: "10px" }}>
          <Link to="/community" style={{ textDecoration: "none" }}>
            community
          </Link>
        </Button>
        <Button variant="contained">
          <Link to="/gym" style={{ textDecoration: "none" }}>
            Gym
          </Link>
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainer" element={<TrainerList />} />
        <Route path="/trainer/detail" element={<TrainerDetail />} />
        <Route path="/room/trainer" element={<PersonalTrainingRoom />} />
        <Route path="/group" element={<GroupList />} />
        <Route path="/group/detail" element={<GroupDetail />} />
        <Route path="/room/group" element={<GroupExerciseRoom />} />
        <Route path="/community" element={<ArticleList />} />
        <Route path="/community/detail" element={<ArticleDetail />} />
        <Route path="/gym" element={<GymList />} />
        <Route path="/gym/detail" element={<GymDetail />} />
      </Routes>
    </div>
  );
}

export default App;
