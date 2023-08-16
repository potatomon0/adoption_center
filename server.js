const express = require('express')
const app = express()
const methodOverride = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
const Cats = require('./models/cats.js')
const Dogs = require('./models/dogs.js')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    next()
})
app.use(express.json())
app.use(methodOverride('_method'));
//----------ROUTES-------------
app.get('/', (req, res) => {
    res.render('Menu')
})
app.get('/catlist', (req, res) => {
    Cats.find({}).then((allCats) => {
        res.render('CatList', {
            cats: allCats
        })
    })
})
app.get('/doglist', (req, res) => {
    Dogs.find({}).then((allDogs) => {
        res.render('DogList', {
            dogs: allDogs
        })
    })
})
app.post('/catlist', async (req, res) => {
    if (req.body.HadFirstCheckUp === 'on') {
        req.body.HadFirstCheckUp = true;
    } else {
        req.body.HadFirstCheckUp = false;
    }
    Cats.create(req.body)
    res.redirect('/catlist')
})
app.post('/doglist', (req, res) => {
    Dogs.create(req.body)
    res.redirect('/doglist')
})
app.get('/catlist/newcat', (req, res) => {
    res.render('NewCat')
})
app.get('/doglist/newdog', (req, res) => {
    res.render('NewDog')
})
//------DELETE---------
app.delete('/catlist/:id', (req, res) => {
    Cats.findByIdAndRemove(req.params.id).then(
        res.redirect('/catlist'))
})
app.delete('/doglist/:id',(req,res)=>{
    Dogs.findByIdAndDelete(req.params.id).then(
        res.redirect('/doglist')
    )
})
//-------EDIT-------------
app.get('/catlist/:id/edit', async (req, res) => {
    foundCat = await Cats.findById(req.params.id)
    res.render('EditCat', {
        cat: foundCat
    })
})
app.get('/doglist/:id/edit', (req,res)=>{
    Dogs.findById(req.params.id).then((dog)=>{
        res.render('EditDog',{
            dog:dog
        })
    })
})
// app.get('/catlist/:id/edit',async(req,res)=>{
//     Cats.findById(req.params.id).then((foundCat)=>{
//         res.render('EditCat',{
//             cat:foundCat
//         })
//     })
// })
//---------UPDATE-------------
app.put('/catlist/:id', async (req, res) => {
    try {
        if (req.body.HadFirstCheckUp === 'on') {
            req.body.HadFirstCheckUp = true;
        } else {
            req.body.HadFirstCheckUp = false;
        }
        await Cats.findByIdAndUpdate(req.params.id, req.body)
        console.log(req.body)
        res.redirect(`/catlist/${req.params.id}`)
    } catch (err) {
        console.error(err)
    }
})
app.put('/doglist/:id',(req,res)=>{
    Dogs.findByIdAndUpdate(req.params.id,req.body).then(
        res.redirect(`/doglist/${req.params.id}`)
    )
})
//--------SHOW LIST------------
app.get('/catlist/:id', async (req, res) => {
    const eachCat = await Cats.findById(req.params.id)
    res.render('ShowCat', {
        cat: eachCat
    })
})
app.get('/doglist/:id', (req, res) => {
    Dogs.findById(req.params.id).then((dog) => {
        res.render('ShowDog', {
            dog: dog
        })
    }
    )
})

app.listen(3000, (req, res) => {
    console.log('Listening to 3k...')
})