import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";

const MainLayout = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return clearTimeout();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Header />
      <div className="container">
        <div className="main">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
