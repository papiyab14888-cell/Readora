import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  // Find the selected book using the dynamic URL id.
  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <main className="details-page">
        <div className="not-found-book">
          <h1>Book Not Found 📚</h1>
          <p>Sorry, we couldn't find the book you're looking for.</p>

          <Link to="/books" className="primary-btn">
            ← Back to Browse
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="details-page">
      <div className="details-container">
        <div className="details-image">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="details-content">
          <span className="category">{book.category}</span>

          <h1>{book.title}</h1>

          <p className="details-author">
            Written by <strong>{book.author}</strong>
          </p>

          <div className="details-rating">
            ⭐ {book.rating}
            <span> / 5</span>
          </div>

          <div className="description">
            <h2>About this book</h2>

            <p>{book.description}</p>
          </div>

          <Link to="/books" className="primary-btn">
            ← Back to Browse
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BookDetails;