import express from 'express'
import router from './routers/index.js'
import './setting.js'
import connectDB from './database/db.js'
import bodyprs from 'body-parser'
// end imports
const app = express()
await connectDB()
// end consts
app.use(bodyprs.json())
app.use(bodyprs.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')
// end midlewaers
app.use(router)

app.use((req, res, next) => {
	res.redirect('index')
	next()
})
// end roters
const port = process.env.port || 3000

app.listen(port, () => console.log('http://localhost:' + port))
// end listensk
