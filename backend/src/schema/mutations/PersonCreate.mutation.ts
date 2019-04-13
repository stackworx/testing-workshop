import {mutationWithClientMutationId} from 'graphql-relay';
import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLResolveInfo,
  GraphQLString,
} from 'graphql';
import {transformGlobalIds} from '@stackworx/graphql';

import {outputFields} from './PersonShared.mutation';
import {PersonService} from '../../services/PersonService';

export default mutationWithClientMutationId({
  name: 'PersonCreate',
  inputFields: {
    firstName: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  outputFields,
  mutateAndGetPayload: async (
    rawData: any,
    _context: any,
    info: GraphQLResolveInfo
  ) => {
    const data = transformGlobalIds(rawData, info);
    const {id: personId} = await PersonService.create(data);
    console.log(personId);
    return {personId};
  },
});
