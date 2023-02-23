import React from "react";
import Articles from "./articles";

const styles = {
  marginTop: "60px",
  padding: "20px",
};

const ArticlesContainer = ({ articles }) => {
  return (
    <div style={styles}>
      <Articles articles={articles} />
    </div>
  );
};

export default ArticlesContainer;
