import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./articles.css";
import { Link } from "react-router-dom";
import { APIContext } from "./../App";

const Articles = ({ articles }) => {
  const { monthNames, handleClick } = useContext(APIContext);

  function formatDate(publishedDate) {
    const date = publishedDate.slice(0, 10);
    const month = date.slice(5, 8).startsWith(0)
      ? date.slice(2, 3)
      : date.slice(5, 7);

    return `${monthNames[month - 1]} ${date.slice(-2)}, ${date.slice(0, 4)}`;
  }

  return (
    <Row xs={1} md={3} lg={5} className="g-4">
      {/* {Array.from({ length: 7 }).map((_, idx) => (  //? Testing */}
      {articles.map((article, index) => (
        <Link key={index} to={`/${article.source.id}`} className="links">
          <Col
            onClick={() => handleClick(article)}
            className={article.status === "read" ? "" : "card-border"}
          >
            <Card className="card">
              {article.status === "not read" ? (
                <span className="badge">New</span>
              ) : (
                ""
              )}
              <Card.Img
                variant="top"
                src={article.image}
                // style={{ height: "135px" }}
                className="card-image"
              />
              <Card.Body>
                <Card.Text>{formatDate(article.publishedAt)}</Card.Text>
                <Card.Title
                  className="card-title"
                  style={{
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {article.title}
                </Card.Title>
                <Card.Text
                  className="card-description"
                  style={{
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {article.description}
                </Card.Text>
                <Card.Text className="text-muted">
                  Source: {article.source.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      ))}
    </Row>
  );
};

export default Articles;
