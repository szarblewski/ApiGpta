const mongoose = require('mongoose');
mongoose.pluralize(null);
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB', err);
    console.log(process.env.MONGO_URL);
});