const express = require('express')
const users = require('./routes/users')

const app = express()
app.set('port', 3000)
app.set('title', 'MyApp')

app.use(express.urlencoded({extended:false}))

app.use('/', users)

app.listen(app.get('port'), () => console.log(`mi ${app.get('title')} esta accediendo por el puerto : ${app.get('port')}`))

module.exports = app