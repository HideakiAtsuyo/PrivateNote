globalThis.PN = {
    mongoose: require("mongoose"),
    model: null
}

globalThis.PN.model = require("./Models/note.js");

require('dotenv').config();

var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.set("X-Powered-By", "https://github.com/HideakiAtsuyo");
    next();
});

app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

server.listen(PORT, () => {
    console.clear();
    globalThis.PN.mongoose.set('strictQuery', false);
    globalThis.PN.mongoose.connect(process.env.MONGOOSE_URL, { retryWrites: true, w: "majority" }).then(() => {
        console.log("Connected to DB!");
    }).catch(e => {
        console.log(e);
    });
    console.log(`Listening on port: ${PORT}\nhttp://127.0.0.1:${PORT}/`);
});