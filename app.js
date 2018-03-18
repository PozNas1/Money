const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.use(express.static('public'));
 