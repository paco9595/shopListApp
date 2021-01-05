import React, {useEffect} from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {Home, List, Login} from './src/views';
import {Header} from './src/components';

const App = () => {
  return (
    <NativeRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/List" component={List} />
      </Switch>
    </NativeRouter>
  );
};

export default App;
