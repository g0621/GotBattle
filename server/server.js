const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const battleRoutes = require('./routes/battle.routes');


if(process.env.NODE_ENV === undefined || process.env.NODE_ENV !== 'production')require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const dbURI = process.env.ATLAS_URI;
mongoose.connect(dbURI,{useUnifiedTopology:true, useNewUrlParser : true,useCreateIndex : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB connected Successfully');
});

app.use('/api/battle',battleRoutes);

app.use(express.static(path.join(__dirname,'..','build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'build'))
})
app.listen(port, () => {
    console.log(`server up on port : ${port}`);
});

