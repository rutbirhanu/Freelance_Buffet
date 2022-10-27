const express = require("express")
const app = express()
const data = require("./routes")
require("dotenv").config()
const connectDB = require("./db/connect")
const cors = require("cors")

app.use(express.json())
app.use("/api/v1/freelance", data)
app.use(cors())

const start = async () => {
    try {
        await connectDB(process.env.MONGO_CONNECTION_STRING)
        app.listen(process.env.PORT || 5000,() => { console.log("listening to port 5000") })
    }
    catch (err) {
        console.log(err) 
    }
    // 192.168.1.8
}

start()
