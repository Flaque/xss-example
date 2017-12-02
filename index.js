const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Setup express
app.set("views", "./views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup in-memory state
let state = {
  messages: []
};

// Routes
app.get("/", (req, res) =>
  res.render("index", { messages: state.messages.reverse() })
);
app.post("/new", (req, res) => {
  if (req.body && req.body.text) {
    state.messages.push({
      text: req.body.text
    });
  }

  res.redirect("/");
});

// Launch server
app.listen(3000, () => console.log("Example app listening on port 3000!"));
