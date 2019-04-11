import joinMonster from 'join-monster';
import {GraphQLResolveInfo} from 'graphql';
import options from './dbOptions';
import {knex} from '../db';

export default (
  _parent: any,
  _args: {[key: string]: any},
  context: {[key: string]: any},
  resolveInfo: GraphQLResolveInfo
) =>
  joinMonster(
    resolveInfo,
    context,
    async (sql: string) => {
      const result = await knex.raw(sql);
      return result.rows;
    },
    // @ts-ignore
    options
  );
