import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';
import {forwardConnectionArgs} from 'graphql-relay';

import {nodeField} from './Relay';

import Mutations from './mutations';
import dbCall from './dbCall';
import {Person} from './Person.graphql';

const {connectionType: PersonConnection} = connectionDefinitions({
  nodeType: Person,
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    people: {
      args: {
        ...forwardConnectionArgs,
      },
      type: PersonConnection,
      sqlPaginate: true,
      orderBy: {
        firstname: 'asc',
      },
      resolve: dbCall,
    },
    node: nodeField,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: Mutations,
});

export default new GraphQLSchema({
  query,
  mutation,
});
