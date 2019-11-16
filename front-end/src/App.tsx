import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Burger from './components/Burger'

export default () => {
  const Home = lazy(() => import('./pages/Home'))
  const About = lazy(() => import('./pages/About'))
  const Destinations = lazy(() => import('./pages/Destinations'))
  const Destination = lazy(() => import('./pages/Destination'))
  const Contact = lazy(() => import('./pages/Contact'))
  const NotFound = lazy(() => import('./pages/NotFound'))
  // tambahin pagenya disini

  return (
    <Suspense fallback>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Burger />
        <Switch>
          <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/contact' render={() => <Contact />} />
          <Route exact path='/destinations' render={() => <Destinations />} />
          <Route path='/destination/:name' render={() => <Destination />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}