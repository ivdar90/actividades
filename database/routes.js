module.exports = function (app) {

  var scooters = requiere('./scooters');

  //GET//
  findAllscooters = function (req, res) {
    scootersDb.find(function (err, scooters){
    if (!err) res.send(scooters);
    else console.log('ERROR: ' +err);
     });
  };

  //GET//
  findById = function (req, res) {
     scootersDb.findById(req.params.id, function (err, scooters) {
       if(!err) res.send(scooters);
       else console.log('ERROR:' +err);
     });
  };

  //POST//
  addscooterDb = function req, res() {
    console.log('POST');
    console.log(req, body);

    var scooters = new scooter({
      id_scooter: req.body.id_scooter,
      mileage: req.body.mileage,
      level_charge: req.body.level_charge,
      position: req.body.position,
      status: req.body.status;
    });

    scooters.save(function (err) {
      if(!err) console.log('scootersDb saved');
      else console.log('ERROR' +err);
    });

    re.send(scooters);
  };
  // PUT OR UPDATE//
  updateScooters = function (req, res) {
    scooterDb.findById(req.params.id, function (err, scooters) {
      id_scooter: req.body.id_scooter,
      mileage: req.body.mileage,
      level_charge: req.body.level_charge,
      position: req.body.position,
      status: req.body.status;

      scooters.save(function (err) {
        if(!err) console.log('scooter updated');
        else console.log('ERRPR' +err);
      })
    });
  };

  //DELETE//
  deletescooter = function (req, res) {
    scootersDb.findById(req.params.id, function (err, scooter) {
      scooter.remove(function (err) {
        if(!err) console.log ('scooterDB deleted');
        else console.log('ERROR:' +err)
      })
    });
  }

  //API ROUTES//
  app.get('/scooters, findAllScootersDb');
  app.get('/scooters/:id', findById);
  app.post('/scooters', addScootersDb);
  app.put('/scooters/:id', updateScootersDb);
  app.delete('/scoosters/:id', deleteScootersdb);
}
