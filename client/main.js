import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './App.js';

import 'normalize.css/normalize.css';

import './utils/userAgent.js';
import remv from './utils/remv.js';

// 初始化rem基础单位
remv();

if (appTheme === 'ios') {
  import 'framework7/dist/css/framework7.ios.min.css';
  import 'framework7/dist/css/framework7.ios.colors.min.css';
} else {
  import 'framework7/dist/css/framework7.material.min.css';
  import 'framework7/dist/css/framework7.material.colors.min.css';
}

Meteor.startup(() => {
  render(<App themeType={appTheme} />, document.getElementById('app'));
});
