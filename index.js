const express = require('express')
    , bodyParser = require('body-parser')
    , morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(morgan('tiny'));

const routes = '(finance|career|health|time|com|personal|network|travel|cook|self)';

// routers
app.get(`/:name${routes}?`, (req, res) => {
    let name = req.params.name;
    
    if (!name) return res.render('index');
    res.render(name);
});

app.listen(PORT, () => {
    console.log(`watching on http://localhost:${PORT}`);
});