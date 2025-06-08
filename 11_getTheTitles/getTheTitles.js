const books = [
  {
    title: "Before I Let Go",
    author: "Kennedy Ryan",
  },
  { title: "Honey & Spice", author: "Bolu Babalola" },
];

const getTheTitles = function (array) {
  console.log(array);
  const bookTitles = array.map((item) => {
    return item.title;
  });

  return bookTitles;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
