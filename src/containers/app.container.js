import React, { Component } from 'react';
import poweredby from './../assets/poweredby.svg'
import {
  Switch,
  Route,
} from 'react-router-dom';
import * as routes from './../constants/routes';
import { auth } from './../api/firebase';

import {
  Wrapper, 
  Scrollable, 
  Layout, 
  Part,
  Row,
  Header, 
  HeaderLeft,
  Menu,
  MenuItem
} from '../components/layout';

class App extends Component {
  render() {
    return (
    <Wrapper>
      <Layout>
      <Part flex={'0 1 auto'}>
        <Header>
          <HeaderLeft>Scenema</HeaderLeft>
          <Menu>
            <MenuItem>Discover</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Signup</MenuItem>
            <MenuItem><img src={poweredby} height="48" /></MenuItem>
          </Menu>
        </Header>
      </Part>
      <Part>
        <Scrollable>
          <Switch>
            <Route exact path={routes.LANDING} />
          </Switch>
          <Row>
            Hello
          </Row>
        </Scrollable>
      </Part>
      <Part flex={'0 1 auto'}>
        <Row>
          Footer
        </Row>
      </Part>
      </Layout>
    </Wrapper>
    );
  }
}

export default App;