const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();
const methodOverride = require('method-override');
const postRouter = require('./routes/post-routes');
const postApiRouter = require('./routes/api-post-routes');
const contactRouter = require('./routes/contact-routes');
const createPath = require("./helpers/create-path");

const errorMsg = chalk.bgWhite.redBright;
const successMsg = chalk.bgGreen.white;

const app = express();

app.set('view engine', 'ejs');

mongoose
    .connect(process.env.MONGO_URL, {useNewUrlParser: true})
    .then(res => console.log(successMsg('Connected to db')))
    .catch(error => console.log(errorMsg(error)));

app.listen(process.env.PORT || 3000, 'localhost', (error) => {
    error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({extended: false}));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), {title});
});

app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});

app.use(postRouter);
app.use(postApiRouter);
app.use(contactRouter);

app.use((req, res) => {
    const title = 'Error';
    res
        .status(404)
        .render(createPath('error'), {title});
});
