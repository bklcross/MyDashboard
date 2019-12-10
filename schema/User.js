const mongoose = require('mongoose');
const Schema = mongoose.Schema;

UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: "Task"
    }
})

module.exports = mongoose.model("User", UserSchema);