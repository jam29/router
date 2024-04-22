const express = require('express')
const jsonfile = require('jsonfile')
const router = express.Router()



//middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('oiseau chargé à : ', (new Date()).toLocaleDateString("fr-FR"))
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.render('birdshomp',{ txt:"Birds home page"})
})

// define the about route
router.get('/about', (req, res) => {
  res.render('birdsabout',{ txt:"a propos des birds"})
})

// define form for birds creation
router.get('/formcreate', (req, res) => {
  res.render('birdform')
})

router.post('/record', (req, res) => {
      console.log(req.body) 
      jsonfile.writeFile('models/birds.json',req.body,{ flag:'a',EOL:',' , finalEOL: false })
              .then( () => res.send('bird recorded successfully'))
              .catch( (err) => res.send('error recording'))
})


module.exports = router