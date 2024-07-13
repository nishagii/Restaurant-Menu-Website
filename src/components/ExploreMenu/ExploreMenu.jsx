import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
<<<<<<< HEAD
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
              <img className={category===item.menu_name? "active":" "} src={item.menu_image} alt="" />
=======
            <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className="menu-list-items">
              <img className={ category===item.menu_name?"active":""} src={item.menu_image} alt="" />
>>>>>>> 25e04c1 (added the active dynamic class name for the menu list items)
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
