/**
 * Created by 明长然 on 2017/2/6.
 * 运维管理-投诉管理编辑
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var SwscComplaintEditManagementPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={6671}/>
        );
    }
});

module.exports = SwscComplaintEditManagementPage;