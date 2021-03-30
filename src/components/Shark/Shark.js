import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Tiger from './Tiger'
import White from './White'

export default function Shark() {
  const { path } = useRouteMatch()


  return (
    <>
      <h2>Shark</h2>
      <Switch>
        <Route path={`${path}/tiger`}>
          <Tiger />
        </Route>
        <Route path={`${path}/white`}>
          <White />
        </Route>
      </Switch>
    </>
  );
}