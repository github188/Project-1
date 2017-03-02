/**
* Created by 曹志强  2017/02/22.
* 硬件资产维修入库审核
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var repairHardInAuitPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={9}/>
        );
    },
});

module.exports = repairHardInAuitPage;