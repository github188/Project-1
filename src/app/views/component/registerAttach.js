'use strict';
require('bootstrap');
import React, { PropTypes } from 'react';
import * as loginActions from '../../actions/login_action';
import register from './register';
var Store = require('../../server/store');
var base64 = require('../../utils/base64.js');
var ReactRouter = require('react-router');
var Router = ReactRouter;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;
var History = require('react-router').History;
import { connect } from 'react-redux';

var registerPage = React.createClass({
	
	mixins: [History],
    getInitialState: function(){
    	console.log("===============开始执行===============");
        return {
            showMainDiv: true
        }
    },
    componentDidMount: function() {
        const { dispatch } = this.props;
    },
    handleOnSubmit:function(e){
	   	e.preventDefault();
		const { dispatch } = this.props;
	   	var loginid = document.getElementById('username').value;
	    loginid = loginid.toLowerCase();//转成小写字符
	    var user = {};
	    user.username = loginid;
	    user.password = document.getElementById('password').value;
	    user.password_r = document.getElementById('password_r').value;
	    user.name = document.getElementById('name').value;
	    user.phone = document.getElementById('phone').value;
	    user.email = document.getElementById('email').value;
	    user.employer = document.getElementById('employer').value;
	    user.title = document.getElementById('title').value;
	    console.log("username:" + user.username);
	    console.log("password:" + user.password);
	    console.log("passwordd:" + user.password_r);
	    console.log("user.name:" + user.name);
	    console.log("user.phone:" + user.phone);
	    console.log("user.email:" + user.email);
	    console.log("user.employer:" + user.employer);
	    console.log("user.title:" + user.title);
	    dispatch(loginActions.getRegisterToken());
	    console.log("========================执行完毕=====================");
   },
     render: function(){
     	const { errorMsg } = this.props;
     	return(
     		<register handleSubmit={e => this.handleOnSubmit(e)} errorMsg={errorMsg}/>
     	);
     }
});

registerPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { errorMsg } = state.loginReducer;

  return {
    errorMsg
  }
}

export default connect(mapStateToProps)(registerPage)