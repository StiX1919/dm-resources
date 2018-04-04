require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");

const {
  getResources,
  addResource,
  getTopics
} = require(`${__dirname}/controllers/resourceCtrl`);

const port = 3001;

const app = express();

//SAVED FOR BUILD
//app.use(express.static(`${__dirname}/public/build`));
//

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.get("/api/resources", getResources);
app.post("/api/resources", addResource);

app.get("/api/topics", getTopics);

//LISTENING
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
