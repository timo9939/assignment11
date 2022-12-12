
const fs = require("fs");
const path = require("path");


function createNote(body,notesList){
    const note=body;
    notesList.push(note);
    console.log(JSON.stringify(notesList));
    fs.appendFile(
        path.join(__dirname, '../db/note.json'),
        JSON.stringify(notesList),
        function(err, result) {
            if(err) console.log('error', err);
        }
    )
    console.log('fs.writefile run')
        return note;

}




module.exports=createNote