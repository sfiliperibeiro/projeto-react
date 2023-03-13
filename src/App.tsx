import React from "react";
import Meal from "./components/App Food/Meal";
import "./css/style.css";
import Recipe from "./components/App Food/Recipe";
import { Routes, Route } from "react-router-dom";
import DarkMode from "./components/DarkMode/DarkMode";
import Likes from "./components/Likes/Likes";
import "./css/App.css";
import "./css/index.css";
import "./css/style.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <div className="lik">
          <Likes />
        </div>

        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:recipeId" element={<Recipe />} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
