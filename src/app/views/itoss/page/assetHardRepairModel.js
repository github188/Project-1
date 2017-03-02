var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var ReactRouter = require('react-router');
import AssetHardRepairModel from '../component/indexPages/department/assetsManage/assetsHardManage/assetsHardInManage/assetHardRepairModel';

var AssetHardBorrowModel = React.createClass({
  render:function(){
    return (
      <div className="modal fade" id="selectHardRepairModal" tabIndex="-1" role="dialog" aria-labelledby="selectHardModalLabel" aria-hidden="true">
        <div className="modal-dialog">
              <AssetHardRepairModel />
        </div>
      </div>
    );
  }
});

module.exports = AssetHardBorrowModel;
