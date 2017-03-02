var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap');

var ReactRouter = require('react-router');
import AssetsHardCountBorrow from '../component/indexPages/department/Mengban/AssetsHardCountBorrow';

var AssetsHardCountBorrowModel = React.createClass({
  render:function(){
    return (
		<div className="modal fade" id="assetsHardCountBorrowModel" tabindex="-1" role="dialog" aria-labelledby="assetsHardCountBorrowModelLabel">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content" style={{"width":"990px","margin-left":"-194px"}}>
		      <div className="modal-header" style={{"background":"#64c4dd"}}>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 className="modal-title" id="myModalLabel" >借用出库</h4>
		      </div>
		      <div className="modal-body" style={{"width":"990px"}}>
		        <AssetsHardCountBorrow />
		      </div>
		      <div className="modal-footer" style={{"border":"none"}}>
		        <button type="button" className="btn btn-success">保存</button>
		        <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
		      </div>
		    </div>
		  </div>
		</div>
    )
  }
});

module.exports = AssetsHardCountBorrowModel;
