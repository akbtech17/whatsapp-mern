import mongoose from 'mongoose';

//setting up schema 
const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    recieved: Boolean,
});

//setting up collection
export default mongoose.model('messagecontents', whatsappSchema);
