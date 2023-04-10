const { Router } =  require('express')
const router = Router();


router.get('/', (req, res, next) => {
    res.render('index');
});


//Login form
router.get('/signup', (req, res, nex) => {
    res.render('signup')
});

//Login send form
router.post('/signup', (req, res, nex) => {
    console.log(req.body)
    res.send('registrando...')
});


//Register form
router.get('/signin', (req, res, nex) => {

})

//Register  send form
router.post('/signin', (req, res, nex) => {

})


module.exports = router;