import mongoose from "mongoose";

const localDBUrl = "mongodb://127.0.0.1/DailyFly_db"
mongoose.connect(localDBUrl)
const db = mongoose.connection

db.on('error' , console.error.bind(console , `ERROR CONNECTING TO ${localDBUrl}`))
db.once('open', ()=>console.log(`SUUCESSFULLY CONNECTED TO ${localDBUrl}`))

export default db