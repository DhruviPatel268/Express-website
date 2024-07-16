const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use('images', express.static('image'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/view/about.html')
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/view/home.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/view/contact.html')
})
app.get('*',(req,res)=>{
  res.send('<h1>404 Not Found</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})