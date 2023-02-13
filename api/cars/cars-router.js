const router = require('express').Router();
const Car = require('./cars-model');

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const data = await Car.getAll();
        res.json(data);
    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        res.status(200).json({ message: 'still working on this one...' })
    } catch(err) {
        next(err)
    }
})

router.post('/:id', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {
        res.status(200).json({ message: 'still working on this one...' })
    } catch(err) {
        next(err)
    }
})

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
    })
})

module.exports = router;