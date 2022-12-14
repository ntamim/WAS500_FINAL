const mongoose = require("mongoose");


  //const url ="mongodb+srv://lab5:lab5@lab5.hcax9nj.mongodb.net/?retryWrites=true&w=majority";
  const username = "lab5";
  const password = "lab5";
  const cluster = "lab5.hcax9nj";
  const dbname = "lab5";
 
mongoose.connect( `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`).then((ans) => {
    console.log("Connected Successfully")
}).catch((err) => {
    console.log("Error in the Connection")
})
