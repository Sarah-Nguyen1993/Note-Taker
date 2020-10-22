const savedNotes = require("../../../db/db.json");
const fs = require("fs");
const path = require("path");
module.exports = function(app){
    app.get("/api/notes"), function(req,res){
    };
    app.get("/api/notes/:id", function(req,res){
    })
    app.post("/api/notes"), function(req,res){
    };
    app.post("/api/notes/:id"), function(req,res){
    }
}