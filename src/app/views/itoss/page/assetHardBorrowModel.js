var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var ReactRouter = require('react-router');
import AssetBorrowModel from '../component/indexPages/department/assetsManage/assetsHardManage/assetsHardInManage/assetHardBorrowModel';

var AssetHardBorrowModel = React.createClass({
  render:function(){
    return (
      <div className="modal fade" id="selectHardModal" tabIndex="-1" role="dialog" aria-labelledby="selectHardModalLabel" aria-hidden="true">
        <div className="modal-dialog">
              <AssetBorrowModel />
        </div>
      </div>
    );
  }
});

module.exports = AssetHardBorrowModel;
