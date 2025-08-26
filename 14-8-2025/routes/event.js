const express= require('express');
const router=express.Router();
const eventController = require('../controllers/EventController');

router.post('/add/event', (req, res) => {
    // Logic to add a book
    eventController.addEvent(req, res);
    res.send('Event added successfully');
}); 

router.get('/get/events', (req, res) => {
    // Logic to get all books
    eventController.getEvents(req, res);
});
router.get('/get/event/:id', (req, res) => {
    // Logic to get a book by ID
    const eventId = req.params.id;
    eventController.getEventById(req, res, eventId);
});
router.put("event/edit/:id",(req,res)=>{
    // Logic to edit a book by ID
    const eventId = req.params.id;
    console.log('Editing book with ID:', eventId);
    eventController.editBook(req, res, eventId);
})

module.exports = router;