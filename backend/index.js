const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');

const port = 3000;
const app = express();

app.use('/api/v1', mainRouter);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`listening on ${port}`);
});