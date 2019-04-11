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
  name: 'PersonUpdate',
  inputFields: {
    personId: {
      type: GraphQLNonNull(GraphQLID),
      requiredIdType: 'Person',
    },
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
    await PersonService.update(data);
    return {personId: data.personId};
  },
});
