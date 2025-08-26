const Event= require('../modules/Events');
async function addEvent(req, res) {
    try{
        console.log('Adding Event:', req.body);
        let event=new Event(req.body);
        await event.save();
        res.end('Book added successfully');
    }catch (error) {
        res.status(500).send('Error adding book');
    }
  }

  async function getEvents(req, res) {
    try {
        console.log('Fetching all books');
        const event = await Event.find({});
        res.json(event);
     }
    catch (error) {
        res.status(500).send('Error fetching books');
    }
}
    async function editEvent(req, res, eventId) {
    try {
        console.log('Editing EVENT  with ID:', eventId);
        const event = await Event.findOne({ bookId: eventId });
        if (!event) {
            return res.status(404).send('Event not found');
        }
        // Logic to update the book details
        event.eventName = req.body.eventName ;
        event.eventType = req.body.eventType;
        event.place = req.body.place;
        event.dateOfEvent = req.body.dateOfEvent;
        event.organisiedBy = req.body.organisiedBy;
        // For example, you can update the book's name or price
        res.json(book);
    } catch (error) {


        res.status(500).send('Error editing event');
    }
}   

  module.exports = {  
      addEvent,
      getEvents,
      editEvent
  };


