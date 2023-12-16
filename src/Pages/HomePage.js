import React from "react";
import Header from "../Elements/Header/Header";
import Content from "../Elements/Content/Content";
import getList from "../API/getList";

const HomePage = () => {
  getList("Blogs");
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default HomePage;
