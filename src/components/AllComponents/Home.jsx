import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import WrapperContainer from "../wrapperContainer/WrapperContainer";

const Home = () => {
  return (
    <div>
      <WrapperContainer navHead>
        <NavBar />
        <Header />
      </WrapperContainer>
      <div className=" bg-gray-100 w-full">
        <WrapperContainer></WrapperContainer>
      </div>
    </div>
  );
};

export default Home;
