"use client";

import Home from "./home/page";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);

  console.log("yap", isLogin);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = null;
    // const token = "1234567890";
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          <Header isLogin={isLogin} />
          <Home />
        </>
      ) : (
        <>
          <Header isLogin={isLogin} />
          <div>love me like you do</div>
          <Footer />
        </>
      )}
    </>
  );
}
