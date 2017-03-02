//硬件资产调拨页面 20170224 程艳鸿
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import ReactWidgets from "react-widgets";
import {connect} from "react-redux";
function editPic(value,row){
    if(row.STATUSCODE == 1){
        return '<a class="assetsHardTransferMentEdit" href="javascript:void(0)" title="待审核"><img src="img/images/review.png"/></a>';
    }else if(row.STATUSCODE == 3){
        return '<a class="assetsHardTransferMentEdit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
    }else {
        return "";
    }
}
function deletePic(){
    return '<a class="assetsHardTransferMentDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
var _this;
window.hardTransferManageMentTableEvent = {
    'click .assetsHardTransferMentEdit':function (e, value, row, index) {
        
    },
    'click .assetsHardTransferMentDelete':function (e, value, row, index) {
        $("#deleteAssetsHardTransfer").modal("show");
    }
};
let refreshBtnObj,addBtnObj;
const AssetsHardTransferManageView = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return{
            isOk: 1
        }
    },
    componentDidUpdate:function () {
    },
    componentDidMount: function () {
        $("#assetsHardTransferTableList").bootstrapTable({
            columns: [
                {
                    field: 'state',
                    checkbox: true
                },{
                    title: '调拨单号',
                    field: 'SLA_TITLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '资产编码',
                    field: 'PROJECT_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '设备名称',
                    field: 'SERVICECONTENT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '项目名称',
                    field: 'RESPONSETIME',
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
                    title: '调拨说明',
                    field: 'SOLUTIONTIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '状态',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: hardTransferManageMentTableEvent,
                    formatter: editPic
                },{
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: hardTransferManageMentTableEvent,
                    formatter: deletePic
                }
            ],
            data: [],
            exportDataType: "all"
        });
        var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success righBbtn');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建调拨');
        addBtnObj.innerHTML = "新建调拨";
        addBtnObj.onclick = function () {
        	_this.history.pushState(null,"assetManage/swscAssetsHardMange/swscAssetsHardTransferManage/hardTransferPage");
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        //$(".btn").css({"margin-bottom":"4px"});
        $("#assetsHardTransfer").on("change",function () {
            let statusCode = "";
            let val = $(this).val();
            if(val == "全部状态"){
                statusCode = 0;
            }else if(val == "待审核"){
                statusCode = 1;
            }else if(val == "审核通过"){
                statusCode = 2;
            }else if(val == "审核未通过"){
                statusCode = 3;
            }
        });
        
    },
    deleteAssetsHardTransferData:function () {
        $("#deleteAssetsHardTransfer").modal("hide");
    },
    deleteAssetsHardTransferDataAll:function () {
        let rowIds = [];
        let rowIdArr = $("#assetsHardTransferTableList").bootstrapTable("getSelections");
        if(rowIdArr.length == 0){
        	setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的硬件资产。"
                $('#publicMessageModal').modal('show');
        	},100);
        	return;
        }
        for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].SLAID);
            _this.setState({rowIdsCount:i+1});
        }
        let rowIdss = rowIds.join(",");
        let filter = [
        ];
        $("#deleteAssetsHardTransferAll").modal("hide");
    },
    batchDelete:function(){
    	let rowIdArr = $("#assetsHardTransferTableList").bootstrapTable("getSelections");
            	if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的硬件资产。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                $("#deleteAssetsHardTransferAll").modal("show");
    },
    batchAudit:function(){
    	let rowIds = [];
                let rowIdArr = $("#assetsHardTransferTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量审核的硬件资产。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                for (let i = 0;i<rowIdArr.length;i++){
                    rowIds.push(rowIdArr[i].SLAID);
                }
                let rowIdss = rowIds.join(",");
                let filter = [
                ];
    },
    toggleSelect:function () {
       $(".batchState_select").slideToggle(100);
    },
    render: function () {
        return (
            <div className="assetRightView">
                {/*删除硬件资产------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteAssetsHardTransfer" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title">删除硬件资产</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此删除硬件资产数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteAssetsHardTransferData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除硬件资产组------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteAssetsHardTransferAll" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title">删除硬件资产</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除这{_this.state.rowIdsCount}条数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteAssetsHardTransferDataAll}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assetRightViewTitle" >
                    <span className="titleLeft"></span>
                    硬件资产调拨（待办 <span style={{"color":"#8eddf2"}}>11</span> ）
                </div>
                <div className="selectBox">
                    <select name="assetsHardTransfer" className="allType" id="assetsHardTransfer">
                        <option value="全部状态">全部状态</option>
                        <option value="待审核">待审核</option>
                        <option value="待审核">审核通过</option>
                        <option value="审核未通过">审核未通过</option>
                    </select>
                    <div className="batchState" onClick={this.toggleSelect}>批量操作<img src="img/batch.png"/>
	                    <ul className="batchState_select">
	                        <li className="batchAudit" onClick={this.batchAudit}>批量审核</li>
	                        <li className="batchDelete" onClick={this.batchDelete}>批量删除</li>
	                    </ul>
                    </div>
                </div>
                {/*列表*/}
                <div className="col-md-12">
                    <table id="assetsHardTransferTableList"
                    	className="assetsViewTable"
                           data-toggle='table'
                           data-search='true'
                           data-classes='table table-no-bordered table-hover'
                           data-show-export="true"
                           data-show-refresh='false'
                           data-show-toggle='true'
                           data-show-columns='true'
                           data-pagination='true'
                           data-page-size='10'
                           data-resizable='true'>
                    </table>
                </div>
            </div>
        )
    }
		});
function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps)(AssetsHardTransferManageView);

