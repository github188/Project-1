/**
* Created by caozhiqiang  2017/02/06.
*/

var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var ReactRouter = require('react-router');

var History = ReactRouter.History;


var HomePage = require('../homePage');

var AssetManagePage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={0}/>
        );
    },
});

module.exports = AssetManagePage;