import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo')
})
router.get('/nosostros', (req, res) => {
    res.render('nosotros')
})

export default router
