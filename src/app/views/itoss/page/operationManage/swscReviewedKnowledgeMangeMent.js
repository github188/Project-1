/**
 * Created by SHIN on 2015/12/29.
 * 知识
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var KnowledgeMangeMentReviewed = React.createClass({
    render: function() {
        return (
            <HomePage pageId={98} target="view_window"/>
        );
    }
});

module.exports = KnowledgeMangeMentReviewed;
