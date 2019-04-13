import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import {nodeInterface} from './Relay';

export const Person = new GraphQLObjectType({
  name: 'Person',
  uniqueKey: 'id',
  sqlTable: 'person',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Person'),
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      sqlColumn: 'first_name',
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      sqlColumn: 'last_name',
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
      sqlDeps: ['first_name', 'last_name'],
      resolve: (parent) => `${parent.first_name} ${parent.last_name}`,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      sqlColumn: 'email',
    },
  }),
});
