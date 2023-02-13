/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
  await knex('cars').insert([
    {
      vin: '19UUB6F47MA001205',
      make: 'Chevrolet',
      model: 'Colorado',
      mileage: 76584,
      title: 'clean',
      transmission: 'automatic'
    },
    {
      vin: 'WAUD2AFR5GA006594',
      make: 'Volkswagen',
      model: 'Atlas',
      mileage: 54973,
      title: 'clean',
      transmission: 'automatic'
    },
    {
      vin: '1G4GC5ED8BF110305',
      make: 'Ford',
      model: 'F-150',
      mileage: 137865,
      title: 'clean',
      transmission: 'automatic'
    },
    {
      vin: '2C3CCAAG4KH609925',
      make: 'Chrysler',
      model: '300',
      mileage: 46732,
      title: 'clean',
      transmission: 'automatic'
    },
    {
      vin: '1FMCU0GDXKUB61912',
      make: 'Ford',
      model: 'Escape',
      mileage: 51435,
      title: 'clean',
      transmission: 'automatic'
    },
    {
      vin: 'ZFF79ALA2J0230138',
      make: 'Ferrari',
      model: '488 GTB',
      mileage: 9500,
      title: 'clean',
      transmission: 'automatic'
    },
  ]);
};
