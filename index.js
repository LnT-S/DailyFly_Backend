import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8000

import db from './config/mongoose.js'

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res) => {
    return res.json({
        message: 'SERVER RUNNING'
    })
})

try {
    app.listen(PORT, err => {
        if(err){
            console.log("ERROR CONNECTING TO PORT ",PORT)
            return
        }
        console.log('SUCCESSFULLY CONNECTED TO PORT ',PORT)
    })
} catch (error) {
    console.log("ERROR CONNECTING TO PORT ",PORT)
}