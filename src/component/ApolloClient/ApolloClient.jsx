"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
const ApolloClientPage = ({ children }) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:3000/admin-api",
    credentials: "include",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientPage;
