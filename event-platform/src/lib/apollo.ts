import { ApolloClient, InMemoryCache } from "@apollo/client";


console.log('url', import.meta.env.VITE_API_URL)
console.log('token', import.meta.env.VITE_API_ACCESS_TOKEN)

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})