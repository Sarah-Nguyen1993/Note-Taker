let savedNotes = require("../db/db.json");
const fs = require("fs");
const shortid = require("shortid");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(savedNotes);
    });
    app.post("/api/notes", function (req, res) {
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: shortid.generate()
        };
        savedNotes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(savedNotes), function (err) {
            if (err) throw err;
        });
        res.json(savedNotes);
    });

    app.delete("/api/notes/:id", function (req, res) {
        const deletedID = req.params.id;
        console.log(deletedID);
        const remainingNotes = savedNotes.filter(note => note.id !== deletedID)
        console.log(remainingNotes);
        fs.writeFile("./db/db.json", JSON.stringify(remainingNotes), function (err) {
            if (err) throw err
        });
        res.json(remainingNotes)
    })     
}