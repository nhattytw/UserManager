import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import EditUserModal from './components/EditUserModal';


const user = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache({})
})

function App() {

  return (
    <ApolloProvider client={user}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<EditUserModal />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
