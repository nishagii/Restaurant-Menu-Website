import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");

  const [userName, setUserName] = useState("");

  const handleInputChange = (event) => {
    const name = event.target.value;
    setUserName(name);
    setWelcomeMessage(`Welcome, ${name}!`);
  };

  return (
    <div>
      <div className="welcome-message">
        <h1>{welcomeMessage}</h1>
        <input
          className="name-input"
          type="text"
          value={userName}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
    <br />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};


export default Home;
