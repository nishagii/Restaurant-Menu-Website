import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a deectable array of dishes</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="menu-list-items">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
