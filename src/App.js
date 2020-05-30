import React, { Component } from 'react';

import RequestForm from './saRequestForm'
import { withAuthenticator } from '@aws-amplify/ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">
          <RequestForm />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
