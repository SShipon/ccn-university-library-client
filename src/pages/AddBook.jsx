import { useState } from "react";

const AddBooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    imageUrl: "",
    publishedYear: "",
    availableCopies: "",
    rating: "",
    status: "approved",
    department: "Bangla",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve token from localStorage
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage

    // If the token doesn't exist, show an error message
    if (!token) {
      setError("You need to be logged in to add a book.");
      return;
    }

    // Make the POST request with the token in the Authorization header
    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Handle the response based on the backend status
      if (response.ok) {
        setSuccessMessage("Book added successfully!");
        setFormData({
          title: "",
          author: "",
          category: "",
          description: "",
          imageUrl: "",
          publishedYear: "",
          availableCopies: "",
          rating: "",
          status: "approved",
          department: "Bangla",
        });
      } else {
        setError(data.message || "An error occurred while adding the book.");
      }
    } catch (error) {
      setError("Something went wrong: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Add a New Book</h2>

      {/* Display success or error messages */}
      {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
        {/* Title and Author */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Category and Image URL */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Published Year and Available Copies */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Published Year:</label>
            <input
              type="number"
              name="publishedYear"
              value={formData.publishedYear}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Available Copies:</label>
            <input
              type="number"
              name="availableCopies"
              value={formData.availableCopies}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Rating and Department */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Rating:</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Department:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="EEE">EEE</option>
              <option value="Civil">Civil</option>
              <option value="Law">Law</option>
              <option value="English">English</option>
              <option value="Business">Business</option>
              <option value="CSE">CSE</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Bangla">Bangla</option>
              <option value="Related Subjects">Related Subjects</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
