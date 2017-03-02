'use strict';

import React, { PropTypes } from 'react'
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
import { connect } from 'react-redux'
import * as loginActions from '../../actions/login_action'

var StartForm = require('../component/startfrom.js');

var startPage = React.createClass({
    componentDidMount: function() {
        if(document.getElementById('loginStartPage') != null) {
            document.getElementById('loginStartPage').style.height = $(window).height() + 'px';
        };
    },
    render : function(){
        const { loginType } = this.props;
        return(
            <div id="loginStartPage" className="loginPage">
                <StartForm />
            </div>
        );
    }
});

$(window).resize(function () {
    if(document.getElementById('loginStartPage') != null) {
        document.getElementById('loginStartPage').style.height = $(window).height()+ 'px';
    }
});

export default startPage
