/**
 * Created by SHIN on 2015/12/29.
 * 发布知识库
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var KnowledgeMangeMentDetail = React.createClass({
    render: function() {
        return (
            <HomePage pageId={99} target="view_window"/>
        );
    }
});

module.exports = KnowledgeMangeMentDetail;
