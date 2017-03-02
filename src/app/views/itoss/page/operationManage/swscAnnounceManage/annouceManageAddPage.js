/**
 * Created by 曹志强  on 2016/12/26
 */
require('bootstrap');

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
// var Fluxxor = require('fluxxor');
// var FluxMixin = Fluxxor.FluxMixin(React),
//     StoreWatchMixin = Fluxxor.StoreWatchMixin;

// var SideBar = require('../../component/sidebar');
var HomePage = require('../../homePage');
// var PortalPage = require('../portalPage');

var AnnouceManageAddPage = React.createClass({
    render: function() {
        return (
            <HomePage pageId={90}/>
        );
    }
});

module.exports = AnnouceManageAddPage;