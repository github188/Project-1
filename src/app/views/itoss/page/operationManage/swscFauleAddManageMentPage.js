/**
 * Created by MingChangran 2016/12/23.
 * 事件管理-故障管理新建
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var SwscFauleAddManageMent = React.createClass({
    render: function() {
        return (
            <HomePage pageId={81}/>
        );
    }
});

module.exports = SwscFauleAddManageMent;
