import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => {
  const Home = lazy(() => import('./pages/Home'))
  const About = lazy(() => import('./pages/About'))
  const Destination = lazy(() => import('./pages/Destination'))
  // tambahin pagenya disini

  return (
    <BrowserRouter basename="/">
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Route exact path='/'
            render={() => <Home/>} />
          <Route exact path='/about'
            render={() => <About />} />
          <Route exact path='/destination/:name'
            render={() => <Destination />} />
          {
            /* tambahin route nya disini */
          }
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}