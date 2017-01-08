const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByOneAndRemove({_id: "58721d438248b3ee9a6ffd8f"}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove("58721d438248b3ee9a6ffd8f").then((todo) => {
    console.log(todo);
});
