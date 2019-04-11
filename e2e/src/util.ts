import {Person} from '../../backend/src/models';
import {knex} from '../../backend/src/db';

export async function setup() {
  // Delete all existing
  await Person.query(knex).delete();

  await Person.query(knex).insertGraph([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'nobodyknows@gmail.com',
    },
  ]);
}

export const tearDown = async () => {
  await knex.destroy();
};
