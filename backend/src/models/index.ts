import {Model} from 'objection';

import {knex} from '../db';

Model.knex(knex);

export class Person extends Model {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  static get tableName() {
    return 'person';
  }

  static get relationMappings() {
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: Person,
        join: {
          from: 'person.id',
          to: 'person.parentId',
        },
      },
    };
  }
}
