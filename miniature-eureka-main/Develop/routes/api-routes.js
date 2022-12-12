const router=require('express').Router()
const notes=require('../db/db')
const createNote=require('./operateFunction')

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    
    req.body.id=notes.length.toString();
    let note=createNote(req.body,notes);
    res.json(note)
  });

 
module.exports=router