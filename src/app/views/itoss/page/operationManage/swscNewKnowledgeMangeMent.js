/**
 * Created by SHIN on 2015/12/29.
 * 新建知识可以
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var KnowledgeMangeMentNew = React.createClass({
    render: function() {
        return (
            <HomePage pageId={96} target="view_window"/>
        );
    }
});

module.exports = KnowledgeMangeMentNew;
