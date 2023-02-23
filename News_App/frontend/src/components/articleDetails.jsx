import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "./../App";

const styles = {
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  margin: "5rem auto auto",
  maxWidth: "50rem",
  padding: "2rem",
};

const contentStyles = {
  fontSize: "1.2rem",
};

const ArticleDetails = ({ articles }) => {
  const { monthNames } = useContext(APIContext);
  const { id } = useParams();

  function formatDate(publishedDate) {
    const date = publishedDate.slice(0, 10);
    const month = date.slice(5, 8).startsWith(0)
      ? date.slice(2, 3)
      : date.slice(5, 7);

    return `${monthNames[month - 1]} ${date.slice(-2)}, ${date.slice(0, 4)}`;
    // return month;
  }
  return (
    <div>
      {articles
        .filter((article) => article.source.id === parseInt(id))
        .map((article) => (
          <section key={id} style={styles}>
            <h2>{article.title}</h2>
            <p>Published on: {formatDate(article.publishedAt)}</p>
            <p>Source: {article.source.name}</p>
            <img src={article.image} alt={article.title} />
            <div style={{ margin: "1rem" }}>
              <p style={contentStyles}>{article.description}</p>
              <p style={contentStyles}>{article.content}</p>
            </div>
          </section>
        ))}
    </div>
  );
};

export default ArticleDetails;
