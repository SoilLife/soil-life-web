const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('pages/index');
});

/* SOILS 101 */
app.get('/soils101/genesis', function (req, res) {
  res.render('pages/soils101/genesis');
});
app.get('/soils101/habitat', function (req, res) {
  res.render('pages/soils101/habitat');
});
app.get('/soils101/biology', function (req, res) {
  res.render('pages/soils101/biology');
});
app.get('/soils101/chemistry', function (req, res) {
  res.render('pages/soils101/chemistry');
});
app.get('/soils101/nutrition', function (req, res) {
  res.render('pages/soils101/nutrition');
});
app.get('/soils101/health', function (req, res) {
  res.render('pages/soils101/health');
});

/* SIXF */
app.get('/food', function (req, res) {
  res.render('pages/food');
});
app.get('/fiber', function (req, res) {
  res.render('pages/fiber');
});
app.get('/filter', function (req, res) {
  res.render('pages/filter');
});
app.get('/foundation', function (req, res) {
  res.render('pages/foundation');
});
app.get('/farmaceuticals', function (req, res) {
  res.render('pages/farmaceuticals');
});
app.get('/fun', function (req, res) {
  res.render('pages/fun');
});

app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.get('/media', function (req, res) {
  res.render('pages/media');
});

/* GET INVOLVED */
var getInvolved = require('./public/getinvolved.json');
app.get('/get-involved/home', function (req, res) {
  res.render('pages/get_involved/home', { cards: getInvolved.home });
});

app.get('/get-involved/community', function (req, res) {
  res.render('pages/get_involved/community', { cards: getInvolved.community });
});

app.get('/get-involved/legislation', function (req, res) {
  res.render('pages/get_involved/legislation', { cards: getInvolved.legislation });
});

app.get('/get-involved/education', function (req, res) {
  res.render('pages/get_involved/education', { cards: getInvolved.education });
});

app.get('/get-involved/donations', function (req, res) {
  res.render('pages/get_involved/donations', { cards: getInvolved.donations });
});

app.get('/get-involved/socialmedia', function (req, res) {
  res.render('pages/get_involved/socialmedia', { cards: getInvolved.socialmedia });
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`app is running on port ${port}...`);
});
