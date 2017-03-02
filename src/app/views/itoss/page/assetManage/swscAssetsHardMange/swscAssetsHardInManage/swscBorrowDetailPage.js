/**
* Created by 程艳鸿  2017/02/09.
* 新建借用入库
*/

var React = require('react');
require('bootstrap');

var HomePage = require('../../../homePage');

var SwscBorrowNewManage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={5}/>
        );
    },
});

module.exports = SwscBorrowNewManage;
