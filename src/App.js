import './App.css';
import Header from './components/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './components/home';
import Details from './components/details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  const [items, setItems] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  useEffect(() => {
    const getbaddata = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    getbaddata()
  }, [query])
  return (
    <div className="App">
      <Router>
        <Header getQuery={(q) => setQuery(q)} />
        <Switch>
          <Route exact path="/">
            <Home isLoading={isloading} items={items} />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
