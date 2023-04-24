import React, { useState, useEffect } from "react";
import HeroImage from "../images/hero.jpg";

const Home = () => {
  return (
    <div>
      
      <div className="text-center">
	  <h1 className="mb-5">Welcome to Takin' Quizzes!!</h1>
        <img
          src={HeroImage}
          alt="Image of a woman ready to take a quiz"
          className="hero-img img-fluid"
        />
      </div>
    </div>
  );
};

export default Home;
