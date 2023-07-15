import React from "react";
import Reusebla from "../reUsable/Reusebla";

const Cards = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg",
      title: "title one",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing el",
    },
    {
      id: 2,
      image:
        "https://e0.pxfuel.com/wallpapers/355/72/desktop-wallpaper-cartoon-boy-iphone-cute-cartoon-boys-thumbnail.jpg",
      title: "title two",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing el",
    },
    {
      id: 3,
      image:
        "https://e0.pxfuel.com/wallpapers/900/942/desktop-wallpaper-cartoon-cartoon-new-cartoon-boy-cartoon-letest-cartoon-cute-cartoon-cute-bay-cartoon-kartoon-thumbnail.jpg",
      title: "title three",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing el",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/99/5f/fe/995ffe375f0c4129e515212b1ffbf756.jpg",
      title: "title four",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing el",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {cards.map((item) => (
        <Reusebla key={item.id} item={item}></Reusebla>
      ))}
    </div>
  );
};

export default Cards;
