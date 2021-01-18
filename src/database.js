const mongoose = require('mongoose')

const mongoUrl = "mongodb://localhost:27017/shopping-list"

const connect = async () => {
    await mongoose.connect(mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    console.log('Connected to MongoDB')
}

const disconnect = async () => {
    await mongoose.connection.close()
    console.log('Disconnected from MongoDB')
}

module.exports = {
    connect,
    disconnect
}