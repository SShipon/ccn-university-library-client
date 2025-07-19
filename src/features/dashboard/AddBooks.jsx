// src/features/books/AddBooks.jsx

import { useAddBook } from "../../hooks/AddBooks";


const AddBooks = () => {
  const { formData, handleChange, handleSubmit } = useAddBook();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
        
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" name="title" placeholder="Book Title" value={formData.title} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
          <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input type="number" name="publishedYear" placeholder="Published Year" value={formData.publishedYear} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
          <input type="number" name="availableCopies" placeholder="Available Copies" value={formData.availableCopies} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input type="number" name="rating" step="0.1" max="5" placeholder="Rating (out of 5)" value={formData.rating} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
          <input type="text" name="country" placeholder="Country / Location" value={formData.country} onChange={handleChange} required className="w-full md:w-1/2 p-3 border rounded-lg" />
        </div>

        <div>
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} rows="4" required className="w-full p-3 border rounded-lg"></textarea>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
