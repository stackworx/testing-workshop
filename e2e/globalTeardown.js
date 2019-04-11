require('ts-node').register({
  /* options */
});

const {knex} = require('../backend/src/db');

module.exports = async () => {
  await new Promise((resolve) => {
    knex.destroy(() => {
      resolve();
    });
  });
};
