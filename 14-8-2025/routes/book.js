const express= require('express');
const router=express.Router();
const bookController = require('../controllers/BookController');

router.post('/add/book', (req, res) => {
    // Logic to add a book
    bookController.addBook(req, res);
    res.send('Book added successfully');
}); 

router.get('/get/books', (req, res) => {
    // Logic to get all books
    bookController.getBooks(req, res);
});
router.get('/get/book/:id', (req, res) => {
    // Logic to get a book by ID
    const bookId = req.params.id;
    bookController.getBookById(req, res, bookId);
});
router.put("book/edit/:id",(req,res)=>{
    // Logic to edit a book by ID
    const bookId = req.params.id;
    console.log('Editing book with ID:', bookId);
    bookController.editBook(req, res, bookId);
})

module.exports = router;