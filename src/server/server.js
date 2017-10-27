import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('dist'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.get('/', (req, res) => {
  res.render('home', { title: 'Welcome to the homepage' })
})

app.listen(3000, () => console.log("Server listening..."));