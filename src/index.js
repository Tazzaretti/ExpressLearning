const express = require("express");
const morgan = require('morgan')
const path = require('path')
require('ejs')

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')
const app = express();

//settings
app.set('case sensitive routing', true);
app.set('appName', 'Express Course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use(HomeRoutes)
app.use(UserRoutes)



// routes
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
