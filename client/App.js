
import React from 'react';
import PropTypes from 'prop-types';
import { Framework7App, Views, View, Pages, Page, Tabs, Tab, Toolbar, Link, Navbar } from 'framework7-react';

import Home from '/client/pages/Home';
import Me from '/client/pages/Me';

import { routes } from '/client/router';

const MainViews = (props, context) => {
	return (
		<Views navbarFixed>
			<View id="main-view" main dynamicNavbar={true} url="/">
        { context.framework7AppContext.theme.ios && <Navbar title="Carrect" /> }
				<Pages>
					<Page toolbarFixed>
            { context.framework7AppContext.theme.material && <Navbar title="Carrect" /> }
            <Tabs>
              <Tab id="Home" active><Home /></Tab>
              <Tab id="Me"><Me /></Tab>
            </Tabs>
            <Toolbar tabbar bottom>
              <Link tabLink="#Home" active>Home</Link>
              <Link tabLink="#Me">Me</Link>
            </Toolbar>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

export default App = (props) => (
  <Framework7App themeType={props.themeType} routes={routes}>
    <MainViews />
  </Framework7App>
)

App.propTypes = {
	themeType: PropTypes.string
};
