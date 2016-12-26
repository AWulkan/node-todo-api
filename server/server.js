const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

let Todo = mongoose.model("Todo", {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// let newTodo = new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved todo ", doc);
// }, (e) => {
//     console.log("Unable to save todo");
// });


let otherTodo = new Todo({
    text: "Feed the cat",
    completed: false,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log("Unable to save todo");
});