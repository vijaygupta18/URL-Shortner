const express=require('express')
const mongoose = require('mongoose')
const app = express()
const ShortUrl = require('./public/url')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// db section//
const uri="mongodb+srv://vijay:kDh2pU1W6bUDzhS0@clustertest.pyn38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true
})

  
  //db section close

// routes section


app.get('/', async (req, res) => {
  const urlcollection = await ShortUrl.find().sort({_id:-1}).limit(1);
  res.render('index', {urlcollection: urlcollection })
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.listen(process.env.PORT || 5000);
