const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const controller = require('./authController')


const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async() => {
    try {

await mongoose.connect(`mongodb+srv://fayz:fayz1105@cluster0.uqsj2.mongodb.net/newRegDB?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}
start()