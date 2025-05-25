import React from "react";

interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title = "Welcome" }) => {
  return (
    <div className="home-container">
      <h1>{title}</h1>
      <p>This is a functional component example</p>
    </div>
  );
};

export default Home;
