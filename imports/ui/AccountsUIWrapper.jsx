// Meteor
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

///////////////////////////////////////////////////////////////////////////////////////////////////
//
//>     C O M P O N E N T      C O M P O N E N T      C O M P O N E N T      C O M P O N E N T
//
///////////////////////////////////////////////////////////////////////////////////////////////////
export default class AccountsUIWrapper extends Component {
  //----------------------------------------------------------------------
  // ...
  //----------------------------------------------------------------------
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  //----------------------------------------------------------------------
  // ...
  //----------------------------------------------------------------------
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  //======================================================================
  // RENDER ==============================================================
  //======================================================================
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
}
