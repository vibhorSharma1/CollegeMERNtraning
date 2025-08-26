const Book= require('../modules/Books');
async function addBook(req, res) {
    try{
        console.log('Adding book:', req.body);
        let book=new Book(req.body);
        await book.save();
        res.end('Book added successfully');
    }catch (error) {
        res.status(500).send('Error adding book');
    }
  }

  async function getBooks(req, res) {
    try {
        console.log('Fetching all books');
        const books = await Book.find({});
        res.json(books);
     }
    catch (error) {
        res.status(500).send('Error fetching books');
    }
}
    async function editBook(req, res, bookId) {
    try {
        console.log('Editing book with ID:', bookId);
        const book = await Book.findOne({ bookId: bookId });
        if (!book) {
            return res.status(404).send('Book not found');
        }
        // Logic to update the book details
        book.bookName = req.body.name ;
        book.isBnNo = req.body.isBnNo ;
        book.authorName = req.body.authorName ;
        book.price = req.body.price;
        book.save();
        // For example, you can update the book's name or price
        res.json(book);
    } catch (error) {


        res.status(500).send('Error editing book');
    }
}   

  module.exports = {  
      addBook,
      getBooks,
      editBook
  };


