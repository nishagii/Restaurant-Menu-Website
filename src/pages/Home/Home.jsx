import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");
  const [userName, setUserName] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setWelcomeMessage("Good Morning!");
    } else if (hours < 18) {
      setWelcomeMessage("Good Afternoon!");
    } else {
      setWelcomeMessage("Good Evening!");
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
          placeholder=" Enter your name here"
        />
      </div>
      <div className="clock">
        <h2>Current Time: {currentTime}</h2>
      </div>
    <br />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      {/* <FoodDisplay category={category} /> */}
      <Footer />
    </div>
  );
};


export default Home;
