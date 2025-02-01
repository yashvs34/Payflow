const express = require('express');
const cors = require('cors');
const {mainRouter} = require('./routes/mainRouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', mainRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});