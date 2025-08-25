"use client";

import React from "react";

const Home = () => {
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
      <h1 style={{ height: "100vh" }}>feature/PROD-develop</h1>
      <p>交わした約束も一人じゃできないって事。</p>
    </div>
  );
};

export default Home;
