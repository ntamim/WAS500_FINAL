const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const router = require("./routes/router");

app.use('/' ,express.static('./public'));
app.use("/" ,router  );





app.get('*' , (req, res, next) => {
  res.status(404).render( "../views/pageNotFound.ejs"  );
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

