/**
 * Created by 明长然 on 2017/2/6.
 * 运维管理-投诉管理新建
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var SwscComplaintAddManagementPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={6670}/>
        );
    }
});

module.exports = SwscComplaintAddManagementPage;