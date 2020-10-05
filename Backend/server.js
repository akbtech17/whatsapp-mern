//importing
import express from 'express';






//app-config
const app = express();
const port = process.env.PORT || 9000;


//middleware

//Db config

//????

//api routes
app.get('/', (req,res) => res.status(200).send("Hello_world"));

//listener
app.listen(port, ()=> console.log(`Listnening to localhost ${port}`));

