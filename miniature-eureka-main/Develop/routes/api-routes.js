const router=require('express').Router()
const {notes}=reqire('../../db/notesEle')
const {createNote}=require('./operateFunction')

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/api/notes', (req, res) => {
    
    req.body.id=notes.length.toString();
    let note=createNote(req.body,notes);
    res.json(notes)
  });

 
  module.exports=router