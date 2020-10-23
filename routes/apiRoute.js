const savedNotes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req,res){
      return res.json(savedNotes)
    });
    app.post("/api/notes", function(req,res){
        let newNote = req.body;
        savedNotes.push(newNote);
        assignID();
        fs.writeFile("./db/db.json", JSON.stringify(savedNotes),function(err) {
            if (err) throw err;
        });
        res.json(savedNotes);
        console.log(savedNotes);
    }); 

    app.delete("/api/notes/:id", function(req,res){
       const deletedID = req.params.id;
       console.log(deletedID);
       const deletedNote = savedNotes.splice(deletedID,1);
       console.log(savedNotes);
       assignID();
       fs.writeFile("./db/db.json", JSON.stringify(savedNotes), function (err) {
        if (err)  throw err
        });
        res.json(savedNotes);
        })
        
    
    function assignID() {
        for (i = 0; i < savedNotes.length; i ++) {
            savedNotes[i].id = i;
        }
    }       
}
