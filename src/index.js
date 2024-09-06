const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const SortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes');
const db = require('./config/db');

//connect to Database
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//custom middlewares
app.use(SortMiddleware);

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: require('./app/helpers/handlebars'),
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
