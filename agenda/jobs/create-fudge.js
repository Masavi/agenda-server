const { Fudge } = require('../../models');

module.exports = function(agenda) {
    agenda.define('create fudge', function(job, done) {
        console.log('🤡');
        try {
          Fudge.create({ title: 'Ajua!' })
            .then(res => {
              console.log('✅\n', res);
              done();
            })
        } catch (error) {
          console.log('🚫', err);
          done();
        }
    });
};