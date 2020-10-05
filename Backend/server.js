//importing
import express from 'express';
import mongoose from 'mongoose';



//app-config
const app = express();
const port = process.env.PORT || 9000;


//middleware

//DB config
const connect_url = 'mongodb+srv://anshulbansal17:94@nsH11@cluster0.ullmx.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connect_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//????

//api routes
app.get('/', (req,res) => res.status(200).send("Hello_world"));

//listener
app.listen(port, ()=> console.log(`Listnening to localhost ${port}`));

