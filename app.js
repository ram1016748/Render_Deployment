const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Ram Chowdary");
    res.end();
});

const port = process.env.PORT || 5000;

app.listen (port, console.log(`server started on port ${port}`));

