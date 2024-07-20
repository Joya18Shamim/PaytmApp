const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://joyashamim_123:zNTzjNsVLzOs6CtJ@cluster10.tbgpkwe.mongodb.net/paytm")

// Create a schema for users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password: {
        type: String,
        required: true,
        minLength:6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength:60
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength:60
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});


const Account = mongoose.model('Account',accountSchema);
const User = mongoose.model('User',userSchema);

console.log("connected");

module.exports = {
    User,
    Account
};