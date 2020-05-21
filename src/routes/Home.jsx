import React from "react";
import NavbarPublic from "./NavbarPublic";
// import styles from "./Home.module.css";
import HomePageBg from "../components/static/HomePageBg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavbarPublic />
      <HomePageBg />
      <Footer />
    </>
  );
};

export default Home;
