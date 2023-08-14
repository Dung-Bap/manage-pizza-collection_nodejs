/** @format */

const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/dungbap_dominospizza_dev"
        );

        console.log("connect successfully");
    } catch (error) {
        console.log("connect failure");
    }
};

module.exports = { connect };
