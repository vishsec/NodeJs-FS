
require('dotenv').config();
const mongoose = require("mongoose");
const User = require("../models/userModel")

const connect = async ()=>{
    await mongoose.connect(process.env.mongo)
};

const disconnect = async () => {
    return await mongoose.connection.close()
}

const findUser = async (obj) => { //json obj
    await User.findOne(obj)
}

const saveUser = async (newUser) => {
    return await newUser.save();
}



module.exports = { connect, disconnect, findUser, saveUser };