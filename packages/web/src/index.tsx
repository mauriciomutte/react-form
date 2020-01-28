import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const Index = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

render(<Index />, document.getElementById('root'));
