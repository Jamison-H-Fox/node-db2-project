const Car = require('./cars-model');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'still working on this one' });
})

router.get('/:id', (req, res, next) => {
    res.status(200).json({ message: 'still working on this one' });
})

router.post('/:id', (req, res, next) => {
    res.status(200).json({ message: 'still working on this one' });
})

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
    })
})

module.exports = router;