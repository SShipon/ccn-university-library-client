/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardApprove = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Attach JWT token here
      }
    })
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books.");
        setLoading(false);
      });
  }, []);

  const approveBook = async (bookId) => {
  try {
    const response = await axios.patch(`http://localhost:5000/api/books/approve/${bookId}`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`  // Attach JWT token here
      }
    });
    alert(response.data.message);
    setBooks(books.map(book => book._id === bookId ? { ...book, status: 'approved' } : book));
  } catch (error) {
    console.error("Approval Error:", error);
    alert('Failed to approve book');
  }
};


const rejectBook = async (bookId) => {
  try {
    const response = await axios.patch(`http://localhost:5000/api/books/reject/${bookId}`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`  // Attach JWT token here
      }
    });
    alert(response.data.message);
    setBooks(books.map(book => book._id === bookId ? { ...book, status: 'rejected' } : book));
  } catch (error) {
    console.error("Reject Error:", error);
    alert('Failed to reject book');
  }
};


  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading books...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Book Approval Dashboard</h1>
      <div className="overflow-x-auto shadow-lg border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Author</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book._id} className="border-b hover:bg-gray-100">
                <td className="py-4 px-4">{book.title}</td>
                <td className="py-4 px-4">{book.author}</td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold 
                    ${book.status === 'pending' ? 'bg-yellow-200 text-yellow-700' :
                    book.status === 'approved' ? 'bg-green-200 text-green-700' :
                    'bg-red-200 text-red-700'}`}>
                    {book.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-center">
                  {book.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => approveBook(book._id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-700 transition-all"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectBook(book._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-sm text-gray-500">No action needed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardApprove;
