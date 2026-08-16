import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
    image: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate required fields before adding a new book.
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Book title is required.";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author name is required.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!formData.rating) {
      newErrors.rating = "Rating is required.";
    } else if (
      Number(formData.rating) < 1 ||
      Number(formData.rating) > 5
    ) {
      newErrors.rating = "Rating must be between 1 and 5.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = {
      id: Date.now(),
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category,
      rating: Number(formData.rating),
      description: formData.description.trim(),
      image:
        formData.image.trim() ||
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
    };

    // Add the new book to Redux and redirect to Browse Books.
    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <main className="add-book-page">
      <section className="add-book-container">
        <div className="add-book-heading">
          <p className="hero-tag">READORA LIBRARY</p>

          <h1>Add a New Book 📚</h1>

          <p>
            Expand the Readora collection by adding a new book.
          </p>
        </div>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Book Title *</label>

            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter book title"
              value={formData.title}
              onChange={handleChange}
            />

            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="author">Author *</label>

            <input
              id="author"
              name="author"
              type="text"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
            />

            {errors.author && (
              <span className="error-message">{errors.author}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category *</label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
                <option value="Mystery">Mystery</option>
              </select>

              {errors.category && (
                <span className="error-message">{errors.category}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating *</label>

              <input
                id="rating"
                name="rating"
                type="number"
                min="1"
                max="5"
                step="0.1"
                placeholder="1 - 5"
                value={formData.rating}
                onChange={handleChange}
              />

              {errors.rating && (
                <span className="error-message">{errors.rating}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Book Cover URL</label>

            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://example.com/book-cover.jpg"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>

            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Write a short description of the book..."
              value={formData.description}
              onChange={handleChange}
            />

            {errors.description && (
              <span className="error-message">
                {errors.description}
              </span>
            )}
          </div>

          <button type="submit" className="submit-book-btn">
            + Add Book to Readora
          </button>
        </form>
      </section>
    </main>
  );
}

export default AddBook;