// This hooks up React to Apollos mongoDB server 

import React from "react"
import App from './App'
import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

const httpLink = createHttpLink({
  // TODO: Should cahnge for production
  // points to graphQL server
  uri: 'http://localhost:5000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)