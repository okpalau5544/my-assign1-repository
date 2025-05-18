use("bookstore");

const bookId = "67cf128ec0059080ff344298";

db.books.remove({ _id: new ObjectId(bookId) });

db.books.find().forEach(function (book) {
  print(book.name);
});