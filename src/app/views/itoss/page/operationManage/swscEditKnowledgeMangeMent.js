/**
 * Created by SHIN on 2015/12/29.
 * 编辑知识库
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var KnowledgeMangeMentEdit = React.createClass({
    render: function() {
        return (
            <HomePage pageId={991} target="view_window"/>
        );
    }
});

module.exports = KnowledgeMangeMentEdit;
