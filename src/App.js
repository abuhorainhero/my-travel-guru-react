import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import data from './FackData/FackDataPlace';
import TravelPlace from './components/TravelPlace/TravelPlace';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const PlaceContext = createContext();

function App() {
  const [place, setPlace] = useState(data[0]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <PlaceContext.Provider value={[place, setPlace, loggedInUser, setLoggedInUser]} >

      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/place/:placeName">
            <PlaceDetails />
          </Route>

          <PrivateRoute path="/travel-place">
            <TravelPlace />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>

    </PlaceContext.Provider>
  );
}

export default App;
