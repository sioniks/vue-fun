const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.use('/dist', express.static('dist/'))
app.get('/*', function (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port)

console.log('Server start.....')