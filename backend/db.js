const mongoose = require('mongoose');
const {MONGODB_URL} = require('/config');

async function connection ()
{
    try 
    {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch (e)
    {
        console.error(r);
    }
}

connection();

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}