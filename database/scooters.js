var mongoose = requiere('mongoose'),
    schema = mongoose.schema;

var scooters = new schema({
  id_scooter: String,
  mileage: String,
  level_charge: String,
  position: {
    type: String,
      ['lat', 'lon'];
    }
  status: true

});

module.exports = mongoose.model('scootersDb', scooters);
