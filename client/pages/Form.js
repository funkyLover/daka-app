
import React, { Component } from 'react';
import { Page, Navbar } from 'framework7-react';

export default class Form extends Component {
  render() {
    return (
        <Page name="Form">
            <Navbar backLink="Back" title="Forms" sliding />
        </Page>
    );
  }
};
