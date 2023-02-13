const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/dealer.db3'
  },
  useNullAsDefault: true
});

const getAll = () => {
  return db('cars');
};

const getById = (id) => {
  return db('cars').where('cars_id', id).first();
};

const create = async (car) => {
  const [id] = await db('cars').insert(car);
  return getById(id);
};

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first();
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};