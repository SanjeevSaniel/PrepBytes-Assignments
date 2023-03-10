import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import Navbar from "./common/navbar";
import ArticlesContainer from "./components/articlesContainer";
import ArticleDetails from "./components/articleDetails";
import Footer from "./common/footer";

export const APIContext = createContext();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [articles, setArticles] = useState([]);

  const handleClick = (article) => {
    const data = JSON.parse(sessionStorage.getItem("articles"));
    const articleViewed = data.filter((d) => d.source.id === article.source.id);
    articleViewed[0].status = "read";

    // TODO: New Articles
    const resultNotRead = data
      .filter((d) => d.status === "not read")
      .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));

    // TODO: Read Articles
    const resultRead = data
      .filter((d) => d.status === "read")
      .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));

    const updatedArticles = [...resultNotRead, ...resultRead];
    const sortedByStatus = updatedArticles.sort((a, b) =>
      a.status < b.status ? -1 : 1
    );
    console.log(sortedByStatus);

    setArticles(sortedByStatus);
    sessionStorage.setItem("articles", JSON.stringify(sortedByStatus));
  };

  const fetchData = () => {
    const cachedData = JSON.parse(sessionStorage.getItem("articles"));
    console.log(cachedData);

    let result;
    if (cachedData !== null) {
      result = cachedData;
      console.log("Old", cachedData);
    } else {
      result = require("./api/articles.json");
      result = result.map((article) => ({
        status: "not read",
        ...article,
      }));
      sessionStorage.setItem("articles", JSON.stringify(result));
      console.log("New", result);
    }

    setArticles(
      result
        .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
        .sort((a, b) => (a.status < b.status ? -1 : 1))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <APIContext.Provider value={{ monthNames, handleClick }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticlesContainer articles={articles} />} />
          <Route path="/:id" element={<ArticleDetails articles={articles} />} />
        </Routes>
        <Footer />
      </div>
    </APIContext.Provider>
  );
}

export default App;
