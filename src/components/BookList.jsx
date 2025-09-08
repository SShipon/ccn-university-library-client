

const BookList = () => {

const books = [
{
_id: "64a111111111111111111111",
title: "Introduction to Electronics",
author: "John Smith",
category: "Engineering",
description: "A beginner-friendly electronics guide.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353493/____Spoken_Fighter-Rahat_Khan-5ef69-426406_cmpcxo.jpg",
publishedYear: 2015,
availableCopies: 5,
rating: 4,
status: "approved",
department: "EEE",
},
{
_id: "64a222222222222222222222",
title: "Civil Engineering Basics",
author: "Emily Davis",
category: "Engineering",
description: "Core concepts of civil engineering.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353155/rokimg_20151014_103993_razpgx.gif",
publishedYear: 2018,
availableCopies: 3,
rating: 5,
status: "approved",
department: "Civil",
},
{
_id: "64a333333333333333333333",
title: "Law of the Land",
author: "Michael Johnson",
category: "Law",
description: "An introduction to legal systems.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353362/5caba99f4_158551_wwitjr.jpg",
publishedYear: 2020,
availableCopies: 4,
rating: 4,
status: "pending",
department: "Law",
},
{
_id: "64a444444444444444444444",
title: "Shakespeare Explained",
author: "Sarah Brown",
category: "Literature",
description: "Understanding Shakespeare’s works.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353363/A_Book_of_350_Paragraphs_Writing-Md_Rafiqul_Islam-38e07-263297_lxialb.jpg",
publishedYear: 2016,
availableCopies: 7,
rating: 3,
status: "approved",
department: "English",
},
{
_id: "64a555555555555555555555",
title: "Startup Business Guide",
author: "Robert Lee",
category: "Business",
description: "Building your own startup step by step.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353363/Essential_Word_Book_Vocabulary_And_Pronu-Sagar_Ahmed-5343e-236510_rvbkcd.jpg",
publishedYear: 2019,
availableCopies: 2,
rating: 4,
status: "approved",
department: "Business",
},
{
_id: "64a666666666666666666666",
title: "Data Structures in C",
author: "David Miller",
category: "Computer Science",
description: "Essential data structures explained.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353364/Magic_Rules_of_English_Pronunciation-Md_Farid_Ahmed-a397b-322080_o7mave.jpg",
publishedYear: 2014,
availableCopies: 6,
rating: 5,
status: "approved",
department: "CSE",
},
{
_id: "64a777777777777777777777",
title: "Advanced Mathematics",
author: "Laura Wilson",
category: "Mathematics",
description: "Higher-level math concepts.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353365/Programming_Contest_Somossa_o_Somadhan-Md_Mahbubul_Hasan-52b29-224503_lkodjg.png",
publishedYear: 2017,
availableCopies: 8,
rating: 4,
status: "approved",
department: "Mathematics",
},
{
_id: "64a888888888888888888888",
title: "Modern Bangla Literature",
author: "Anik Rahman",
category: "Literature",
description: "Recent trends in Bangla literature.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353155/download_ebsmzl.jpg",
publishedYear: 2021,
availableCopies: 5,
rating: 5,
status: "approved",
department: "Bangla",
},
{
_id: "64a999999999999999999999",
title: "Interdisciplinary Studies",
author: "Nadia Karim",
category: "Education",
description: "A look at related academic subjects.",
imageUrl: "https://res.cloudinary.com/dau8sazoh/image/upload/v1757353155/rokimg_20151014_103993_razpgx.gif",
publishedYear: 2013,
availableCopies: 3,
rating: 4,
status: "pending",
department: "Related Subjects",
},

];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 ">
      {books.map((book) => (
        <div
          key={book._id}
          className=" rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-green-200"
        >
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600 text-sm">by {book.author}</p>
            <div className="mt-2 flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={index < book.rating ? "text-yellow-400" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default BookList;