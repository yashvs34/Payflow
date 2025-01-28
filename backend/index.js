const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/mainRouter');

app.use('/api/v1', mainRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});