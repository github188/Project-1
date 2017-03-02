/**
 * Created by 明长然 on 2017/2/3.
 * 运维管理-任务管理新建
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var SwscTaskAddManagementPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={6666}/>
        );
    }
});

module.exports = SwscTaskAddManagementPage;