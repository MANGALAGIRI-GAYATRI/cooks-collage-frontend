import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cooks Collage</title>
        <link rel="stylesheet" href="index.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Russo+One" />
      </head>
      <body>
        <section id="hero">
          <div className="about">
            <h1>Come Lets learn some kitchen tips..</h1>
            <p>Lets make the cooking easy with some tips..</p>
            <NavLink to="/tips" className="btn">Tips</NavLink>
          </div>
        </section>
        <section id="about">
          <div className="about">
            <h2>About Us</h2>
            <p>
              Welcome to our Recipe Blog, where we share our love for cooking and delicious food with you. Whether you're a seasoned chef or a beginner in the kitchen, you'll find inspiration and guidance here to create memorable meals for yourself and your loved ones.
            </p>
          </div>
        </section>
        <section id="contact">
          <div className="about">
            <h2>Contact Us</h2>
            <p>Email:cookscollage@deliciousrecipes.com</p>
            <p>Phone: 987654321</p>
          </div>
        </section>
        <footer>
          <p>&copy; 2024 Delicious Recipes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Home;
