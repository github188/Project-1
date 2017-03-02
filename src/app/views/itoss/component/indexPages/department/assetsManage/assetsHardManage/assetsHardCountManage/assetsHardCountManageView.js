//硬件资产统计页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import ReactWidgets from "react-widgets";
import {connect} from "react-redux";
import AssetsHardCountRepairModel from '../../../../../../page/AssetsHardCountRepairModel';
import AssetsHardCountVerifiModel from '../../../../../../page/AssetsHardCountVerifiModel';
import AssetsHardCountRejectModel from '../../../../../../page/AssetsHardCountRejectModel';
import AssetsHardCountAllotModel from '../../../../../../page/AssetsHardCountAllotModel';
import AssetsHardCountBorrowModel from '../../../../../../page/AssetsHardCountBorrowModel';
import AssetsHardCountHandleModel from '../../../../../../page/AssetsHardCountHandleModel';
function deletePic(){
    return '<a class="assetsHardCountMentDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
window.assetsHardCountManageMentTableEvent = {
    'click .deletePic':function (e, value, row, index) {
       
        $("#deleteSLAModal").modal("show");
    }
};
var _this;
let refreshBtnObj,dealBtnObj,handleBtnObj,optionObj1,optionObj2,optionObj3,optionObj4,moreBtnObj,optionObj5,optionObj,btnSpan;
const AssetsHardCountManageView = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return{
            isOk: 1
        }
    },
    componentDidUpdate:function () {
        $("#assetsHardCountTableList").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
        $("#assetsHardCountTableList").bootstrapTable({
            columns: [
                {
                    field: 'state',
                    checkbox: true
                },{
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
                    title: '采购日期',
                    field: 'STATUSNAME',
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
                    title: '位置',
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
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: assetsHardCountManageMentTableEvent,
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
        
        dealBtnObj = document.createElement('div');
        dealBtnObj.setAttribute('class', 'assDealSelect');
        dealBtnObj.onclick=function (){
        	$(".newCountTarget").slideToggle(100);
        };
        btnSpan = document.createElement('span');
        btnSpan.setAttribute('class','btn btn-success');
        btnSpan.innerHTML = "&nbsp;&nbsp;&nbsp;处理&nbsp;&nbsp;&nbsp;";
        optionObj = document.createElement("ul");
        optionObj.setAttribute('class', 'newCountTarget');
        optionObj1 = document.createElement("li");
        optionObj1.setAttribute('class', 'assetsNewLi');
        optionObj1.setAttribute('value', '资产维修');
        optionObj1.setAttribute('title', '资产维修');
        optionObj1.innerHTML = "资产维修";
        optionObj1.onclick=function (){
        	$("#assetsHardCountRepairModel").modal("show");
        };
        optionObj2 = document.createElement("li");
        optionObj2.setAttribute('class', 'assetsNewLi');
        optionObj2.setAttribute('value', '资产借用');
        optionObj2.setAttribute('title', '资产借用');
        optionObj2.innerHTML = "资产借用";
        optionObj2.onclick=function (){
       		$("#assetsHardCountBorrowModel").modal("show");
        };
        optionObj3 = document.createElement("li");
        optionObj3.setAttribute('class', 'assetsNewLi');
        optionObj3.setAttribute('value', '资产调拨');
        optionObj3.setAttribute('title', '资产调拨');
        optionObj3.innerHTML = "资产调拨";
        optionObj3.onclick=function (){
       		$("#assetsHardCountAllotModel").modal("show");
        };
        optionObj4 = document.createElement("li");
        optionObj4.setAttribute('class', 'assetsNewLi');
        optionObj4.setAttribute('value', '资产报废');
        optionObj4.setAttribute('title', '资产报废');
        optionObj4.innerHTML = "资产报废";
        optionObj4.onclick=function (){
       		$("#assetsHardCountRejectModel").modal("show");
        };
        optionObj5 = document.createElement("li");
        optionObj5.setAttribute('class', 'assetsNewLi');
        optionObj5.setAttribute('value', '资产核销');
        optionObj5.setAttribute('title', '资产核销');
        optionObj5.innerHTML = "资产核销";
        optionObj5.onclick=function (){
       		$("#assetsHardCountVerifiModel").modal("show");
        };
        moreBtnObj = document.createElement('button');
        moreBtnObj.setAttribute('class', 'btn btn-refresh moreTerm');
        moreBtnObj.setAttribute('id', 'moreBtn');
        moreBtnObj.setAttribute('type', 'button');
        moreBtnObj.setAttribute('name', 'add');
        moreBtnObj.setAttribute('title', '更多条件');
        moreBtnObj.innerHTML = "更多条件";
        moreBtnObj.onclick = function () {          
            $("#hardMoreModal").show();
            $("#moreBtn").css({"height":"43px","background-color":"#aac0ae"});
            $("#hardMoreModal").css({"top":"74px"});
        };
        handleBtnObj = document.createElement('button');
        handleBtnObj.setAttribute('class', 'btn btn-refresh handleRecord');
        handleBtnObj.setAttribute('type', 'button');
        handleBtnObj.setAttribute('name', 'add');
        handleBtnObj.setAttribute('title', '处理记录');
        handleBtnObj.innerHTML = "处理记录";
        handleBtnObj.onclick = function () {
                setTimeout(function(){
                    $('#assetsHardCountHandleModel').modal('show');
                },100);
        };
        dealBtnObj.appendChild(btnSpan);
        dealBtnObj.appendChild(optionObj);
        optionObj.appendChild(optionObj1);
        optionObj.appendChild(optionObj2);
        optionObj.appendChild(optionObj3);
        optionObj.appendChild(optionObj4);
        optionObj.appendChild(optionObj5);
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        console.log(document.getElementsByClassName('fixed-table-toolbar'));
        btnGroup.appendChild(moreBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(dealBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(handleBtnObj, btnGroup.childNodes[0]);
       // $(".form-control").css({ "display": "inline-block", "width": "243px" });
     //   $(".btn").css({"margin-bottom":"4px"});
        $("#assetsHardCount").on("change",function () {
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
    batchAudit:function(){
    	let rowIds = [];
                let rowIdArr = $("#assetsHardCountTableList").bootstrapTable("getSelections");
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
    	let rowIdArr = $("#assetsHardCountTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的硬件资产。"
                        $('#publicMessageModal').modal('show');
                    },100);
                    return;
                }
                $("#deleteAssetsHardCountAll").modal("show");
    },
    _closeMoreModal:function () {
      $("#hardMoreModal").hide();
      $("#moreBtn").css({"height":"34px","background-color":"#d8e1e5"});
    },
	toggleSelect:function () {
       $(".batchState_select").slideToggle(100);
    },
    _checkMoreCondition:function () {
        $("#hardMoreModal").hide();
        $("#moreBtn").css({"height":"34px","background-color":"#d8e1e5"});
    },
    render:function(){
        return(
            <div className="assetRightCountView">
           		<div className="assetRightCountViewTitle">
                    <span className="countTitleLeft"></span>
                    硬件资产统计
                </div>
            	<div id="hardMoreModal" className="moreModel">
                	<div className="form-group"> 
		                <label for="" className="col-sm-1 control-label">资产编码</label> 
		                <div className="col-md-3 moreDiv"> 
		                <input className="form-control" type="text"/></div> 
		                <label for="" className="col-sm-1 control-label moreLabelMid">设备名称</label> 
		                <div className="col-md-3 moreDivMid"> 
		                <input className="form-control" type="text"/></div> 
		                <label for="" className="col-sm-1 control-label moreLabel">状态</label> 
		                <div className="col-md-3 moreDiv"> 
		                <input className="form-control" type="text"/></div> 
		            </div>
		            <div className="form-group"> 
		                <label for="" className="col-sm-1 control-label">项目名称</label> 
		                <div className="col-md-3 moreDiv"> 
		                <input className="form-control" type="text"/></div> 
		                <label for="" className="col-sm-1 control-label moreLabelMid">产品型号</label> 
		                <div className="col-md-3 moreDivMid"> 
		                <input className="form-control" type="text"/></div> 
		                <label for="" className="col-sm-1 control-label moreLabel">品牌名称</label> 
		                <div className="col-md-3 moreDiv"> 
		                <input className="form-control" type="text"/></div> 
		            </div>
		            <div className="form-group"> 
		                <label for="" className="col-sm-1 control-label">采购日期</label> 
		                <div className="col-md-3 moreDiv"> 
		                <input className="form-control" type="text"/></div> 
		                <label for="" className="col-sm-1 control-label moreLabelMid">维保剩余天数</label> 
		                <div className="col-md-3 moreDivMid"> 
		                <input className="form-control" type="text"/></div> 
		                <label for="" className="col-sm-1 control-label moreLabel">资产归属</label> 
		                <div className="col-md-3 moreDiv"> 
		                <input className="form-control" type="text"/></div> 
		            </div>
		            <div id="buttonGroups" style={{"margin":"0 auto","width":"13%"}}>
	                    <button type="button" className="btn btn-default" style={{"color":"#85c5f6"}} onClick={this._checkMoreCondition}>查询</button>
	                    <button type="reset" className="btn btn-default" style={{"marginLeft":"10%","color":"#85c5f6"}} onClick={this._resetMoreModal}>重置</button>
	                    <button type="button" className="btn btn-default" style={{"marginLeft":"10%"}} onClick={this._closeMoreModal}>取消</button>
                	</div>
            	</div>
                {/*列表*/}
                <div className="col-md-12">
                    <table id="assetsHardCountTableList"
                    	className="assetsCountViewTable"
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
                <AssetsHardCountRepairModel />  
                <AssetsHardCountVerifiModel />
                <AssetsHardCountRejectModel />
                <AssetsHardCountAllotModel />
                <AssetsHardCountBorrowModel />
                <AssetsHardCountHandleModel />
            </div>
            
        )
    }
}); 
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(AssetsHardCountManageView);
