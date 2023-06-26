const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const connectDb = async () => {
try {
    
await mongoose.connect(process.env.MONGO_URL)
console.log('connect to mongo db database'.bgMagenta.white)

} catch (error) {
    console.log(`${error}`.bgRed.white);
}

}

module.exports = connectDb