const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:27017/MacroPlace2'

module.exports = () => {
    const connect = async() => {
        await mongoose.connect(
            DB_URI, {
                keepAlive: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR');
                } else {
                    console.log('Conexion correcta')
                }
            }
        )
    }
    connect();
}