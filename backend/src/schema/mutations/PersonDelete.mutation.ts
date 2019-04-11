import {mutationWithClientMutationId} from 'graphql-relay';
import {GraphQLNonNull, GraphQLID, GraphQLResolveInfo} from 'graphql';
import {transformGlobalIds} from '@stackworx/graphql';

import {PersonService} from '../../services/PersonService';

export default mutationWithClientMutationId({
  name: 'PersonDelete',
  inputFields: {
    personId: {
      type: GraphQLNonNull(GraphQLID),
      requiredIdType: 'Person',
    },
  },
  outputFields: {},
  mutateAndGetPayload: async (
    rawData: any,
    _context: any,
    info: GraphQLResolveInfo
  ) => {
    const data = transformGlobalIds(rawData, info);
    await PersonService.delete(data);
    return {};
  },
});
