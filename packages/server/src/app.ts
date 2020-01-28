import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { ApolloServer } from 'apollo-server-koa';

import { typeDefs, resolvers } from './schema';

const app = new Koa();
const apollo = new ApolloServer({ typeDefs, resolvers });

app.use(bodyParser());
app.use(cors());

apollo.applyMiddleware({ app });

export default app;