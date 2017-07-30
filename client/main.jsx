// Meteor
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// Application
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

///////////////////////////////////////////////////////////////////////////////////////////////////
//
//>      R E N D E R       R E N D E R       R E N D E R       R E N D E R       R E N D E R
//
///////////////////////////////////////////////////////////////////////////////////////////////////
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
