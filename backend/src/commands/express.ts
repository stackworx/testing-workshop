import {Request, default as express} from 'express';
import {ApolloServer} from 'apollo-server-express';

import schema from '../schema';
import config from '../config';

const port = config.get('port');

const server = new ApolloServer({
  schema,
  context: ({req}: {req: Request}) => {
    return req;
  },
  introspection: true,
  playground: true,
});

const app = express();
server.applyMiddleware({app});

app.listen(port, () => {
  console.log(`Express Started on port: ${port}.`);
  console.log(config.toString());
});
