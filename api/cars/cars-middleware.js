const Car = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  const car = await Car.getById(req.params.id);
  if(!car) {
    next({ status: 404, message: `car with id ${req.params.id} is not found` });
  } else {
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;
  const missingArray = [];
  if(!vin || !make || !model || !mileage) {
    if(!vin) {
      missingArray.push('vin')
    }
    if(!make) {
      missingArray.push('make')
    }
    if(!model) {
      missingArray.push('model')
    }
    if (!mileage) {
      missingArray.push('mileage')
    }

    const missingMsg = `${missingArray.join(', ')} ${missingArray.length === 1 ? 'is' : 'are'} missing`

    next({ status: 400, message: missingMsg })
  } else {
    req.vin = vin.trim();
    req.make = make.trim();
    req.model = model.trim();
    req.mileage = mileage;
    next()
  }  
};

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.vin);

  if(!isValidVin) {
    next({ status: 400, message: `vin ${req.vin} is invalid` })
  } else {
    next()
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const car = await Car.getByVin(req.vin);

    if(car) {
      next({ status: 400, message: `vin ${req.vin} already exists` })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};