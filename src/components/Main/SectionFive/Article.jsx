import React from "react";
import "./Article.scss";
import { articleData } from "./ArticleData";
import MainButton from "../../MainButton/MainButton";

const Article = () => {
  return (
    <>
      {articleData.map((article, index) => (
        <div
          key={index + 7178}
          className='article-container'
          style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
        >
          <img src={article.mainImg} alt='graficas-article-fotocasa' />
          <div style={{paddingLeft: index % 2 != 0 ? '5rem' : '0rem', paddingRight: index % 2 === 0 ? '5rem' : '0rem'}} className='side-section-article'>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",

              }}
            >
              <img
                style={{
                  padding: "0.1rem",
                  width: "35px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow:
                    "0 2px 4px rgba(44, 68, 174, 0.4), inset 0 0 20px rgba(34, 34, 123, 0.2)",
                }}
                src={article.img}
                alt={article.mayus}
              />

              <p style={{width:'150%', paddingLeft: "1rem", fontSize:'13px', color:'gray' }}>{article.mayus}</p>
            </span>
            <h3 style={{width:'130%' }} >{article.h2}</h3>
            <p style={{width:'130%', fontSize:'19px'}}>{article.p}</p>
            <MainButton
              className={"section-five-main-button"}
              text={article.textButton}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;
