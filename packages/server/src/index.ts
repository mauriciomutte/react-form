import app from './app';
import { connect } from './database';

(async () => {
  await connect();
  
  app.listen('4000', () => {
    console.log('\n🚀  GraphQL-demo server listen at: http://localhost:4000');
    console.log(`🚀  Server ready at: http://localhost:4000/graphql \n`)
  });
})();