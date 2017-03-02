/**
 * Created by MingChangran 2016/12/23.
 * 运维管理-服务级别协议编辑
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('../homePage');

var SwscSLAEditDetailPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={902}/>
        );
    }
});

module.exports = SwscSLAEditDetailPage;