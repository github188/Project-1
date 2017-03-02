require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactWidgets = require('react-widgets');
import { connect } from 'react-redux';
var _this = this;
var AssetsHardCountHandle = React.createClass({
	getInitialState: function() {
        return {
            
        }
    },
    componentWillMount:function(){
    	//调用组织机构查询接口nb
		
    },
	componentDidMount:function(){ 
      $("#assetsHardHandleList").bootstrapTable({
            columns: [
                {
                    title: '经办时间',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '经办人',
                    field: 'SLA_TITLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '审核人',
                    field: 'PROJECT_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '处理方式',
                    field: 'UNITTYPE_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '处理内容',
                    field: 'SERVICECONTENT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }
            ],
        });
      $("#assetsHardHandleList thead>tr").css({ "background": "#d8e1e5" });
    },

    
	
render: function () {
    return (
		<div className="hardCountHandle col-md-12" >        
            <table id="assetsHardHandleList"
                data-toggle='table'
                data-classes='table table-no-bordered table-hover'
                data-resizable='true'>
            </table>
        </div>           
  )}
});

function mapStateToProps(state) {
  return {
      
  }
}
export default connect(mapStateToProps)(AssetsHardCountHandle)
