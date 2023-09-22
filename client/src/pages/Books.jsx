import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Books = () => {
  const [books, setBooks] = useState([]);

  const [showPage, setShowPage] = useState(false);


  useEffect(() => {
    setShowPage(true);

    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{width:"100%", height:"100%"}}
  >
    <h1>Broken SyAr Book Shop</h1>
    <div className="books">
      {books.length === 0 ? (
                  <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>

        <div className="noBook">
          Please add a book
        </div>
        </Link>
      ) : (
        books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))
      )}
    </div>
  </motion.div>
  );
};

export default Books;
