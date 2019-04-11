import joinMonster from 'join-monster';
import {fromGlobalId, nodeDefinitions} from 'graphql-relay';

import options from './dbOptions';
import {knex} from '../db';

type Where<TContext, TArgs> = (
  table: string,
  args: TArgs,
  context: TContext,
  sqlASTNode: any
) => string | void;

function condition(type: string, id: number): number | Where<any, any> {
  switch (type) {
    case 'Person':
      return id;
    default:
      throw new Error(`Invalid type: ${type}.`);
  }
}

const {nodeField, nodeInterface} = nodeDefinitions<any>(
  // resolve the ID to an object
  (globalId, context, resolveInfo) => {
    // parse the globalID
    const {type, id} = fromGlobalId(globalId);

    if (!context.user) {
      // Only return data for authenticated users
      return null;
    }

    // pass the type name and other info. `joinMonster` will find the type from the name and write the SQL
    // @ts-ignore
    return joinMonster.getNode(
      type,
      resolveInfo,
      context,
      condition(type, parseInt(id, 10)),
      (sql: string) => knex.raw(sql),
      options
    );
  },
  // determines the type. Join Monster places that type onto the result object on the "__type__" property
  (obj) => obj.__type__
);

export {nodeInterface, nodeField};
