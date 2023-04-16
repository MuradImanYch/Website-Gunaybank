const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const feedbackRouter = require('./routes/feedback');
const orderRouter = require('./routes/order');
const newsRouter = require('./routes/news');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/contacts', feedbackRouter);
app.use('/order', orderRouter);
app.use('/news', newsRouter);

app.listen(8080, () => {
    console.log('Server on 8080 is running...');
});