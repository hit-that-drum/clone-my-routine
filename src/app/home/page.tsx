"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title = "Welcome" }) => {
  // const [data, setData] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post("/api/notion");
  //       setData(response.data);
  //     } catch (err) {
  //       setError("Failed to fetch data");
  //       console.error("Error fetching data:", err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log("data", data);

  return (
    <div className="home-container">
      <h1 style={{ height: "100vh" }}>{title}</h1>
    </div>
  );
};

export default Home;
