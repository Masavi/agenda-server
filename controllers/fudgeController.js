let agenda = require('../agenda');
const { Fudge } = require('../models');

module.exports = {
  create: async (req, res) => {
      Fudge
        .create(req.body)
        .then( async (result) => {
          await agenda.now('create fudge');   
          res.send({ result });
        })
        .catch((err) => console.log('😣', err));
  }
}
