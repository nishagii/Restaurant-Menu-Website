import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
<<<<<<< HEAD
  const [category,setCategory]=useState("All");


  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
=======
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={ category} setCategory={setCategory} />
>>>>>>> 25e04c1 (added the active dynamic class name for the menu list items)
    </div>
  );
};


export default Home;
