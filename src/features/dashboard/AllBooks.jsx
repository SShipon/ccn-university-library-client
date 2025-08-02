import { useBooks } from "../../hooks/useBooks";


const AllBooks = () => {
  const {
    books,
    loading,
    editingBook,
    setEditingBook,
    handleEditClick,
    handleEditChange,
    handleEditSubmit,
    handleDelete,
  } = useBooks();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📚 All Books</h2>

      {loading && <p className="text-center p-6">Loading Books...</p>}

      {!loading && books.length === 0 && <p>No books found!</p>}

      {!loading && books.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Book Name</th>
                <th className="p-2">Author</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="border-t">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{book.title}</td>
                  <td className="p-2">{book.author}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                      onClick={() => handleEditClick(book)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-white p-6 rounded-lg w-full max-w-md"
          >
            <h3 className="text-xl font-bold mb-4">Edit Book</h3>

            <input
              type="text"
              name="title"
              value={editingBook.title}
              onChange={handleEditChange}
              placeholder="Title"
              className="w-full mb-3 p-2 border rounded"
              required
            />

            <input
              type="text"
              name="author"
              value={editingBook.author}
              onChange={handleEditChange}
              placeholder="Author"
              className="w-full mb-3 p-2 border rounded"
              required
            />

            {/* অন্যান্য ইনপুট ফিল্ডও এখানে যোগ করো */}

            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => setEditingBook(null)}
              className="ml-2 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AllBooks;