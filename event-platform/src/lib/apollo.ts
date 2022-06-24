import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q436wj2sx001z41qlqdh6o/master',
  cache: new InMemoryCache()
})