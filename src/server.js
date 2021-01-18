const express = require('express')
const database = require('./database')

const userRouter = require('./routers/user')

const app = express()
app.use(express.json())
app.use('/api/v1/users', userRouter)


const port = process.env.PORT || 3000

async function main() {

    await database.connect()

    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })

    process.on('SIGINT', () =>  {
        database.disconnect()
        console.log('Process terminated')
        process.exit(0)
    })
}

main()