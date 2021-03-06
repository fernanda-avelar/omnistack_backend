const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
mongoose.connect(
    "mongodb+srv://omnistack:omnistack@omnistack-onan0.mongodb.net/database",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
