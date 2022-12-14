const express = require("express");
const router = express.Router();
const path = require("path");
const collections = require('../models/booksModel')
const bodyparser = require('body-parser'); 
const dbConnection = require('../db/dbConnction')


router.use(bodyparser.urlencoded({extended:true}));

// GET / - return the index.html file
router.get("/" , (req, res)=>{
    res.render( "../views/Index.ejs");
});

router.get("/home" , (req, res)=>{
    res.render( "../views/Index.ejs");
});

router.get("/books" , async(req, res)=>{
    const books = await collections.find()  
 res.render( "../views/AllBooks.ejs" , {books});   
 });
router.get("/book/:id" ,async(req ,res)=>{
    const {id} = req.params
    const book = await collections.findById(id)  
    res.render( "../views/BookDetails.ejs" , {book});  });


router.get("/admin" ,async(req, res)=>{
    const books = await collections.find()  
  res.render( "../views/Adminpage.ejs" , {characters:books});
  
});

router.get("/edit/:id" ,async(req, res)=>{
    let {id} = req.params 
      const book = await collections.findById(id)
        res.render( "../views/EditBook.ejs" , {book});
      
});

router.get("/delete/:id" , async(req, res)=>{
      
    let {id} = req.params 
    const ress = await collections.findByIdAndDelete(id)
    res.redirect('/admin')
});

router.get("/storeedit" , async(req, res)=>{  
        
    let id = [req.query.id || []].flat().toString(); 
    let name = [req.query.name || []].flat().toString(); 
    let author_name = [req.query.author_name || []].flat().toString(); 
    let description = [req.query.description || []].flat().toString(); 
   
    const book = await collections.findById(id)
    book.name = name;
    book.author_name = author_name
    book.description = description
    const edit = book.save()
    if( edit){
    
        res.redirect('/admin');
   }
});
router.get("/insert" , async(req , res)=>{
    res.render('../views/AddNewBook.ejs')
});

router.get("/storeadd" , async (req,res)=>{

         
    let name = [req.query.name || []].flat().toString(); 
    let author_name = [req.query.author_name || []].flat().toString(); 
    let description = [req.query.description || []].flat().toString(); 
    try{
  
    const bookmode2 = new  collections({

        name:name,
        author_name:author_name,
        description:description,
        image:"book2.png",
    });
    const result2 = await  bookmode2.save();
    if(result2){
        res.redirect('/admin');
    }
}catch(error){
   
   res.send(error.message);
}

});



// export
module.exports = router;
