const Book = ({ author, title, img, children, number }) => {
    return (
        <>

    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4
        style={{
            color: "#617d98",
            fontSize: "0.75rem",
            marginTop: "0.5rem",
            letterSpacing: "2px",
        }}
        >
        {author}{" "}
      </h4>
      {children}
          <span className="number">{`# ${number + 1}`}</span>
      </article>
          </>
  );
};
export default Book;
