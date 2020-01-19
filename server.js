// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1
const routes = require('./routes/api');


const MONGODB_URI ='mongodb+srv://mill:Eka@32775@mill-4kbzl.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', (()=>{
console.log('Mongoose is connected!!');
}));

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// http request logger
app.use(morgan('tiny'));

// routes file
app.use('/api', routes);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`server is running on ${PORT}`));
