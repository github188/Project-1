/**
* Created by 程艳鸿  2017/02/21.
* 新建硬件借用出库
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var HardOutBorrowNewManage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={21}/>
        );
    },
});

module.exports = HardOutBorrowNewManage;
