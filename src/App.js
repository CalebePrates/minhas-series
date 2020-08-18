import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Genres from './pages/Genres';
import CreateGenres from './pages/CreateGenres';
import EditGenres from './pages/EditGenres';

const Home = () =>{
  return(
    <h1>Home</h1>
  )
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Genres} />
        <Route path='/generos/novo' exact component={CreateGenres} />
        <Route path='/generos/:id' exact component={EditGenres} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
