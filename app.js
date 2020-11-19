//Init express
const express = require('express');
const app = express();
var cors = require('cors')

var corsOptions = {
    origin: 'https://alert-covid.ovh',
  }

app.use(cors(corsOptions))

//Port to use
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//Routes imports
const authRoutes = require('./routes/authRoutes');


app.use('/auth', authRoutes);


//Controllers imports
const authController = require('./controllers/authController');
