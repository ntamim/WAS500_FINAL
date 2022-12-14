const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    name:{
            type:String,
            required:true,
        },
     author_name:{
        type:String,
        required:true,
     },
     description:{
        type:String,
        required:true,
     },
     image:{
        type:String,
        required:true,
     }

}) ;

//const book = mongoose.model("book", booksSchema);

const collections = mongoose.model("book", booksSchema );
module.exports = collections
