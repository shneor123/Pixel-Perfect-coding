import React from 'react';

import { Routes, Route } from 'react-router'
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import routes from './routes'

export function RootCmp() {
  return (
    <section className="App main-container">
    <Navigation />
      <Routes>
        {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
      </Routes>
      <Footer/>
    </section>
  );
}
