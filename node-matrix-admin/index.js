const express = require('express');
const path = require('path');

const port = 8081;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    return res.render('index');
})

app.get('/charts', (req, res) => {
    return res.render('charts');
})

app.get('/widgets', (req, res) => {
    return res.render('widgets');
})

app.get('/index2', (req, res) => {
    return res.render('index2');
})

app.get('/pages-button', (req, res) => {
    return res.render('pages-button');
})

app.get('/pages-calendar', (req, res) => {
    return res.render('pages-calendar');
})

app.get('/pages-button', (req, res) => {
    return res.render('pages-button');
})

app.get('/pages-chat', (req, res) => {
    return res.render('pages-chat');
})

app.get('/pages-gallery', (req, res) => {
    return res.render('pages-gallery');
})

app.get('/pages-invoice', (req, res) => {
    return res.render('pages-invoice');
})

app.get('/tables', (req, res) => {
    return res.render('tables');
})

app.get('/grid', (req, res) => {
    return res.render('grid');
})

app.get('/error-403', (req, res) => {
    return res.render('eroor-403');
})

app.get('/error-404', (req, res) => {
    return res.render('eroor-404');
})

app.get('/error-405', (req, res) => {
    return res.render('eroor-405');
})

app.get('/error-500', (req, res) => {
    return res.render('eroor-500');
})

app.get('/form-basic', (req, res) => {
    return res.render('form-basic');
})

app.get('/icon-fontawesome', (req, res) => {
    return res.render('icon-fontawesome');
})

app.get('/icon-material', (req, res) => {
    return res.render('icon-material');
})

app.listen(port, (err) => {
    if (!err) {
        console.log("server start.");
        console.log("http://localhost:" + port);
    }
});