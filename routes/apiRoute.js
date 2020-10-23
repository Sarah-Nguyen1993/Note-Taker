const savedNotes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req,res){
        res.json(savedNotes)
    });
   
    app.post("/api/notes", function(req,res){
        let newNote = req.body;
        let uniqueId = savedNotes.length;
        newNote.id = uniqueId;
        savedNotes.push(newNote)
        fs.writeFile("./db/db.json", JSON.stringify(savedNotes),function(err) {
            if (err) throw err;
        });
        res.json(savedNotes);
        console.log(savedNotes);
    }); 

    app.delete("/api/notes/:id", function(req,res){
        console.log(req.params.id)
        const deletedNote = savedNotes.splice(req.params.id,1);
        console.log(savedNotes);
        fs.writeFile("./db/db.json", JSON.stringify(savedNotes),function(err) {
            if (err) throw err;
        });
        res.json(savedNotes);
        })
        
        
}