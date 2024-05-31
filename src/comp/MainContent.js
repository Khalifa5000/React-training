import React from "react";
import "./MainContent.css";

const MainContent = ({ pageName, content, describe }) => {
  return (
    <main className="main-content">
    <h2> {pageName} </h2>   
      <br/>
      {content}
      <br/>
      {describe}

    </main>
  );
};

export default MainContent;
