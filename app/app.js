const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true})); 



app.use(cors());
app.get('/', (req, res, next) => {
    res.status(200).json({message: "Server is up and running"})
});




app.use((req, res, next) => {             // if there are no routes or weird ones a=then it goes here //error handler
    const error = new Error("Not Found")
    error.status = 404; 
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
                message: error.message,
                status: error.status,
        },
});
});
module.exports = app;

