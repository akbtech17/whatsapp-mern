//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js'
import Pusher from 'pusher';



//app-config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: '1084949',
    key: 'dbb968f748401ec8df3f',
    secret: '066c33f21eeaaf7136df',
    cluster: 'ap2',
    encrypted: true
  });


//middleware
app.use(express.json());

//DB config
const connect_url = 'mongodb+srv://anshulbansal17:94@nsH11@cluster0.ullmx.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connect_url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('db is connected');

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log(change);

        if(change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
            })
        }
        else {
            console.log('error triggering Pusher')   
        }
    })

    
})

//????

//api routes
app.get('/', (req,res) => res.status(200).send("Hello_world"));

////api route for getting a new whtsapp message
app.get('/messages/sync', (req,res) => {
    Messages.find((err,data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
}); 


//api route for poting a new whtsapp message 
app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})

//listener
app.listen(port, ()=> console.log(`Listnening to localhost ${port}`));

