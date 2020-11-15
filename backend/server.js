const express = require('express');
const { body } = require('express-validator');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();

//connect the database
connectDB();
//initialise middleware
app.use(express.json());

app.use(cors())

app.get('/',(req,res) => res.send('testing api running'));

//define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;
app.listen(PORT , () =>console.log('serer started on port ' + PORT));
