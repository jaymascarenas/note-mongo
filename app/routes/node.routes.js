module.exports = (app) => {
  const notes = require('../controllers/note.controller');

  // new Note
  app.post('/notes', notes.create);

  // all Notes
  app.get('/notes', notes.findAll);

  // single Note with noteId
  app.get('/notes/:noteId', notes.findOne);

  // Update Note with noteId
  app.put('/notes/:noteId', notes.update);

  // Delete a Note with noteId
  app.delete('/notes/:noteId', notes.delete);

}