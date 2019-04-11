import {GraphQLNonNull} from 'graphql';
import {MutationConfig} from 'graphql-relay';

import dbCall from '../dbCall';
import {Person} from '../Person.graphql';

export const outputFields: MutationConfig['outputFields'] = {
  person: {
    type: GraphQLNonNull(Person),
    where: (personTable, _args, {personId}) => {
      return `${personTable}.id = ${personId}`;
    },
    resolve: (parent, args, context, resolveInfo) => {
      if (!parent.personId) {
        throw new Error('Missing ID required to resolve Person');
      }

      return dbCall(
        parent,
        args,
        {...context, personId: parent.personId},
        resolveInfo
      );
    },
  },
};
