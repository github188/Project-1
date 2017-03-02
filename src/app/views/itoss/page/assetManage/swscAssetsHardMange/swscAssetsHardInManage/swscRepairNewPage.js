/**
* Created by 程艳鸿  2017/02/09.
* 新建维修入库
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var SwscRepairNewManage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={3}/>
        );
    },
});

module.exports = SwscRepairNewManage;
