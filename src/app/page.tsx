"use client";

import Home from "./home/page";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);

  console.log("isLogin", isLogin);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = null;
    if (token) {
      setIsLogin(true);
    }
  }, []);
  
  if (!isLogin) {
    return <div>NOT LOGIN</div>
  }

  return (
    <>
      {isLogin ? (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ) : (
        <div>yap</div>
      )}
    </>
  );
}
