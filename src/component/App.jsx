import React from 'react';
import ReactDOM from "react-dom";
import Node from "./Node";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_CONTINENTS = gql`{
    continents{
        name
        countries{
        name
        languages{
          name
        }
      }
    }
  }`;

function App() {
  
  const {data, loading, error} = useQuery(LIST_CONTINENTS, {client});

  
  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <div className="App"> 
    
     {data.continents.map((datum, index) => {
      return (<Node key={index} data = {datum} originalExpand = {false}/>)
     })}
    </div>
  );
}

export default App;
