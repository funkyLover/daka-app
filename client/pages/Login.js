
import React, { Component } from 'react';
import { Page, Navbar } from 'framework7-react';

export default class Login extends Component {
  render() {
    return (
        <Page name="Login">
            <Navbar backLink="Back" title="Login" sliding />
        </Page>
    );
  }
};
