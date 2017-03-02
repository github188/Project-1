/**
* Created by 曹志强  2017/02/22.
* 硬件资产借用入库审核
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var borrowHardInAuditPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={8}/>
        );
    },
});

module.exports = borrowHardInAuditPage;