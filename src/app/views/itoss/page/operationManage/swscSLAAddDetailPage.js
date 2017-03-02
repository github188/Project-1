/**
 * Created by MingChangran 2016/12/23.
 * 运维管理-服务级别协议新建
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var SwscSLAAddDetailPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={901}/>
        );
    }
});

module.exports = SwscSLAAddDetailPage;