/**
* Created by 程艳鸿  2017/02/09.
* 新建采购入库
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var SwscPurchaseNewManage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={4}/>
        );
    },
});

module.exports = SwscPurchaseNewManage;
