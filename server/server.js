const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");

let app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log("Started on port 3000");
});



// let otherTodo = new Todo({
//     text: "Something to do"
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("Unable to save todo");
// });

// User model
// Email property - require - trim - set type = string - set minlength to 1

// let otherUser = new User({
//     email: "test@example.com"
// });

// otherUser.save().then((doc) => {
//     console.log("User saved", doc);
// }, (e) => {
//     console.log("Unable to save User");
// });
