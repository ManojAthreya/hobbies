const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//load user model
require('./models/User');

//Passport Config
require('./config/passport')(passport);

//load routes
const index = require('./routes/index');
const auth = require('./routes/auth');


//Load Keys
const keys = require('./config/keys');

//Map global promises
mongoose.Promise = global.Promise;

//Mongoose Connect
mongoose.connect(keys.mongoURI, {
    useMongoClient:true
})
 .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));

const app = express();

//Handlebars Middleware
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global vars
app.use((req,res,next) => {
   res.locals.user = req.user || null;
   next();
});

//Use routes
app.use('/',index);
app.use('/auth',auth);


const port = process.env.PORT || 5555;

app.listen(port, () => {
     console.log(`Server started on port ${port}`)
});