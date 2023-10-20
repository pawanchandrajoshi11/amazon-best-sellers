import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const { author, title, img, id } = book;
          return (
            <Book
              key={id}
              author={author}
              title={title}
              img={img}
              number={index}
            />
          );
        })}
      </section>
    </>
  );
      }
      
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<BookList />);
      