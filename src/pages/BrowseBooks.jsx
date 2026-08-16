import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);

  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Mystery"
  ];

  // Filter the library using category selection and title or author search.
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      !category ||
      category === "All" ||
      book.category.toLowerCase() === category.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="browse-page">
      <section className="browse-header">
        <p className="hero-tag">READORA LIBRARY</p>

        <h1>Browse Books 📚</h1>

        <p>
          Discover stories, ideas and adventures from our growing collection.
        </p>
      </section>

      <section className="section">

        {/* Search books by title or author. */}
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by book title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category filter buttons. */}
        <div className="filter-buttons">
          {categories.map((item) => (
            <Link
              key={item}
              to={item === "All" ? "/books" : `/books/${item}`}
              className={
                (!category && item === "All") ||
                category?.toLowerCase() === item.toLowerCase()
                  ? "filter-btn active"
                  : "filter-btn"
              }
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="results-heading">
          <h2>
            {category ? `${category} Books` : "All Books"}
          </h2>

          <span>{filteredBooks.length} books found</span>
        </div>

        {/* Display filtered books or a message when no books match. */}
        {filteredBooks.length > 0 ? (
          <div className="book-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div>📚</div>
            <h2>No books found</h2>
            <p>Try another title, author or category.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default BrowseBooks;