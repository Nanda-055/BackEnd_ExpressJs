const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const router = require('./roots')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
  extended:true
}))

app.use('/',router)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})