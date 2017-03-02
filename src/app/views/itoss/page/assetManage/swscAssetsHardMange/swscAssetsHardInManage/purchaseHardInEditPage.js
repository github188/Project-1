/**
* Created by 曹志强  2017/02/22.
* 硬件资产采购入库审核
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var purchaseHardInEditPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={10}/>
        );
    },
});

module.exports = purchaseHardInEditPage;