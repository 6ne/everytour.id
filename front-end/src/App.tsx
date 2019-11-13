import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => {
  const Home = lazy(() => import('./pages/Home'))
  const About = lazy(() => import('./pages/About'))
  const Tour = lazy(() => import('./pages/Tour'))
  const Destination = lazy(() => import('./pages/Destination'))
  const Contact = lazy(() => import('./pages/Contact'))
  // tambahin pagenya disini

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/tour' render={() => <Tour />} />
          <Route exact path='/contact' render={() => <Contact />} />
          <Route exact path='/destination/:name' render={() => <Destination />} />
          {/* <Route render={() => <Home />} /> */}

          {
            /* tambahin route nya disini */
          }
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}