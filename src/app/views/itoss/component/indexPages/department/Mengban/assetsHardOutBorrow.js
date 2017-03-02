
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactWidgets = require('react-widgets');
import { connect } from 'react-redux';
var _this = this;
var AssetsHardOutBorrow = React.createClass({
	getInitialState: function() {
        return {
            
        }
    },
    componentWillMount:function(){
    },
    componentDidMount:function(){ 
      $("#hardOutBorrowModelList").bootstrapTable({
            columns: [
                {
                    title: '序号',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '资产编码',
                    field: 'SLA_TITLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '设备名称',
                    field: 'PROJECT_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '资产归属',
                    field: 'UNITTYPE_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '项目名称',
                    field: 'SERVICECONTENT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '产品类型',
                    field: 'RESPONSETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '品牌名称',
                    field: 'RESPONSETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '维保剩余天数',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '状态',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }
            ],
        });
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[4].childNodes[0];
        btnGroup.removeAttribute("class","pull-right search");
        btnGroup.setAttribute("class","pull-left search");
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $(".btn-refresh").css({ "margin-bottom": "2px","margin-left":"10px"});
        $("#hardOutBorrowModelList thead>tr").css({ "background": "#daf1f8" });
        $(".fixed-table-container ").css({"height":"300px","overflow":"auto"});
       
    },
render: function () {
    return (
    	<div className="col-md-12 hardCountRepairMod">
			<table id="hardOutBorrowModelList"
			    data-toggle='table'
			    data-classes='table table-no-bordered table-hover'
			    data-page-size='10'
			    data-search='true'
			    data-resizable='true'>
			</table>
		</div>
            
  )}
});

function mapStateToProps(state) {
    const {} =state.operationReducer;
  return {
      
  }
}
export default connect(mapStateToProps)(AssetsHardOutBorrow)
