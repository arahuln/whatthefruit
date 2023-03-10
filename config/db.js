const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect('mongodb://127.0.0.1:27017/wtf', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
};

module.exports = connectDB;
