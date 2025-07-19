// src/features/books/hooks/useAddBook.js
import { useState } from "react";
import axios from "axios";

export const useAddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    imageUrl: "",
    publishedYear: "",
    availableCopies: "",
    rating: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.rating) > 5) {
      alert("Rating cannot be more than 5!");
      return;
    }

    try {
      const bookData = {
        ...formData,
        publishedYear: Number(formData.publishedYear),
        availableCopies: Number(formData.availableCopies),
        rating: Number(formData.rating),
        createdAt: new Date(),
      };

      const response = await axios.post("https://ccn-university-library-server-production.up.railway.app/api/books", bookData);
      if (response.status === 201) {
        alert("Book Added Successfully!");
        setFormData({
          title: "",
          author: "",
          category: "",
          description: "",
          imageUrl: "",
          publishedYear: "",
          availableCopies: "",
          rating: "",
          country: "",
        });
      }
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book!");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
};
