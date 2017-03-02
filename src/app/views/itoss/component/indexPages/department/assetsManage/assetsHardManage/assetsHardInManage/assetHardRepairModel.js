//新建借用入库页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
var Store = require('../../../../../../../../server/store');
var ReactWidgets = require('react-widgets');
import * as assetAction from "../../../../../../../../actions/assetManage_action";

const AssetHardRepairModel = React.createClass({
	getInitialState:function () {
        return{
        }
    },
	componentWillMount:function(){
		
	},
	componentDidUpdate:function () {
       	let bdata = this.props.hardWareSelectedData;
        $("#repairNewTableModelList").bootstrapTable("load",bdata);
    },
	componentDidMount:function(){ 
  		   $("#repairNewTableModelList").bootstrapTable({
            columns: [
	                  {
                    field: 'state',
                    checkbox: true
                	},{
			          	title: '资产编码',
			            field: 'assetsCode',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '设备名称',
			            field: 'assetsName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '资产归属',
			            field: 'assetsAttributionName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '项目名称',
			            field: 'projectName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '产品型号',
			            field: 'productModel',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '品牌名称',
			            field: 'brandName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '采购日期',
			            field: 'assetsYear',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '维保剩余天数',
			            field: 'warrantyPeriod',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '物理位置',
			            field: 'physicalLocationName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '状态',
			            field: 'statusName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        $("#repairNewTableModelList thead>tr").css({"background": "#daf1f8"});
        
    },
    selectAssetsInfo:function(){
    	const {dispatch} = this.props;
    	let rowIdArr = $("#repairNewTableModelList").bootstrapTable("getSelections");
    	if(rowIdArr.length == 0){
        	setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择资产信息。"
                $('#publicMessageModal').modal('show');
        	},100);
			return;
		}
    	let rowIds = [];
    	for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].recId);
        }
        let rowIdss = rowIds.join(",");
    	dispatch(assetAction.get_hardAssetRepairOfCode(rowIdss));
    	$("#selectHardRepairModal").modal("hide");
    },
	render:function(){
		return(
            <div className="assetsHardInRepairAdd" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
            	{/*选择资产------------------------------------模态弹窗*/}
            	<div style={{"width":"966px","margin-top":"10px"}}>
                    <table id="repairNewTableModelList"
                           data-classes='table table-no-bordered table-hover'
                           data-show-refresh='false'
                           data-pagination='true'
                           data-page-size='10'
                           data-resizable='true'>
                    </table>
                </div>
                <div className="modal-footer fromBottom">
                	<button type="button" className="btn btn-success newSure" onClick={this.selectAssetsInfo}>选择</button>
                	<button type="button" className="btn btn-default newCox" data-dismiss="modal">取消</button>
            	</div>
            </div>
        )
			}
		})
function myStateToProps(state) {
  	const{hardWareSelectedData} = state.assetManageReducer;
    return{
    	hardWareSelectedData:hardWareSelectedData
    }
}
export default connect(myStateToProps)(AssetHardRepairModel);
