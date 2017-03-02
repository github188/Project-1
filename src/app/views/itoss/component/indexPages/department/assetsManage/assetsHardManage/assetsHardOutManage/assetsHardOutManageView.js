//硬件资产出库页面 20170122 程艳鸿
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import ReactWidgets from "react-widgets";
import {connect} from "react-redux";
function editPic(value,row){
    if(row.STATUSCODE == 1){
        return '<a class="assetsHardOutMentEdit" href="javascript:void(0)" title="待审核"><img src="img/images/review.png"/></a>';
    }else if(row.STATUSCODE == 3){
        return '<a class="assetsHardOutMentEdit" href="javascript:void(0)" title="编辑"><img src="img/images/系统-1用户管理_08.png"/></a>';
    }else {
        return "";
    }
}
function deletePic(){
    return '<a class="assetsHardOutMentDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
var _this;
window.hardOutManageMentTableEvent = {
    'click .assetsHardOutMentEdit':function (e, value, row, index) {
        
    },
    'click .assetsHardOutMentDelete':function (e, value, row, index) {
        $("#deleteAssetsHardOut").modal("show");
    }
};
let refreshBtnObj,optionObj1,optionObj2,optionObj,addBtnObj,btnSpan;
const AssetsHardOutManageView = React.createClass({
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
        $("#assetsHardOutTableList").bootstrapTable({
            columns: [
                {
                    field: 'state',
                    checkbox: true
                },
                {
                    title: '资产编码',
                    field: 'SLA_TITLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '设备名称',
                    field: 'PROJECT_NAME',
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
                    title: '产品型号',
                    field: 'UNITTYPE_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '采购费用',
                    field: 'SOLUTIONTIME',
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
                    title: '出库类型',
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
                },{
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: hardOutManageMentTableEvent,
                    formatter: editPic
                },{
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: hardOutManageMentTableEvent,
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
        addBtnObj = document.createElement('div');
        addBtnObj.setAttribute('class', 'assCreatSelect');
        addBtnObj.onclick=function (){
        	$(".newTarget").slideToggle(100);
        };
        btnSpan = document.createElement('span');
        btnSpan.setAttribute('class','btn btn-success');
        btnSpan.innerHTML = "新建出库";
        optionObj = document.createElement("ul");
        optionObj.setAttribute('class', 'newTarget');
        optionObj1 = document.createElement("li");
        optionObj1.setAttribute('class', 'assetsNewLi');
        optionObj1.setAttribute('value', '借用出库');
        optionObj1.setAttribute('title', '借用出库');
        optionObj1.innerHTML = "借用出库";
        optionObj1.onclick=function (){
        	_this.history.pushState(null,"assetManage/swscAssetsHardMange/swscAssetsHardOutManage/hardOutBorrowPage");
        };
        optionObj2 = document.createElement("li");
        optionObj2.setAttribute('class', 'assetsNewLi');
        optionObj2.setAttribute('id', 'purchaseHardIn');
        optionObj2.setAttribute('value', '维修出库');
        optionObj2.setAttribute('title', '维修出库');
        optionObj2.innerHTML = "维修出库";
        optionObj2.onclick=function (){
        	_this.history.pushState(null,"assetManage/swscAssetsHardMange/swscAssetsHardOutManage/hardOutRepairPage");
        };
        addBtnObj.appendChild(btnSpan);
        addBtnObj.appendChild(optionObj);
        optionObj.appendChild(optionObj1);
        optionObj.appendChild(optionObj2);
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        $(".assCreatSelect").css({"margin-right":"5px"});
        $("#assetsHardOut").on("change",function () {
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
    deleteAssetsHardOutData:function () {
        $("#deleteAssetsHardOut").modal("hide");
    },
    deleteAssetsHardOutDataAll:function () {
        let rowIds = [];
        let rowIdArr = $("#assetsHardOutTableList").bootstrapTable("getSelections");
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
        $("#deleteAssetsHardOutAll").modal("hide");
    },
    toggleSelect:function () {
       $(".batchState_select").slideToggle(100);
    },
    batchAudit:function (){
    	let rowIds = [];
                let rowIdArr = $("#assetsHardOutTableList").bootstrapTable("getSelections");
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
    batchDelete:function(){
    	let rowIdArr = $("#assetsHardOutTableList").bootstrapTable("getSelections");
            	if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的硬件资产。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                $("#deleteAssetsHardOutAll").modal("show");
    },
    render: function () {
        return (
            <div className="assetRightView">
                {/*删除硬件资产------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteAssetsHardOut" tabindex="-1" role="dialog" aria-hidden="true">
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
                                <button type="button" className="btn btn-success" onClick={this.deleteAssetsHardOutData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除硬件资产组------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteAssetsHardOutAll" tabindex="-1" role="dialog" aria-hidden="true">
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
                                <button type="button" className="btn btn-success" onClick={this.deleteAssetsHardOutDataAll}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assetRightViewTitle">
                    <span className="titleLeft"></span>
                    硬件资产出库
                </div>
                <div className="selectBox">
                    <select className="allType" name="assetsHardOut" id="assetsHardOut">
                        <option value="全部状态">全部状态</option>
                        <option value="审核通过">待审核</option>
                        <option value="审核通过">审核通过</option>
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
                    <table id="assetsHardOutTableList"
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
export default connect(mapStateToProps)(AssetsHardOutManageView);

