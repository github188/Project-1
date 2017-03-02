//硬件资产入库页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import ReactWidgets from "react-widgets";
import {connect} from "react-redux";
function editPic(value,row){
    //审核通过：4；审核未通过：1；待审核：0
    if(row.reviewCode == 0){
        return '<a class="assetsHardInMentEdit" href="javascript:void(0)" title="待审核"><img src="img/images/review.png"/></a>';
    }else if(row.reviewCode == 1){
        return '<a class="assetsHardInMentEdit" href="javascript:void(0)" title="审核未通过"><img src="img/images/publish.png"/></a>';
    }else {
        return "";
    }
}
function deletePic(){
    return '<a class="assetsHardInMentDelete" href="javascript:void(0)" title="删除"><img src="img/images/系统-1用户管理_03.png"/></a>';
}
var _this;
window.assetsHardInMentTableEvent = {
    'click .assetsHardInMentEdit':function (e, value, row, index) {
        let jsonStr = {};
        	let dataStr = [];
        	jsonStr.PROCESSID = row.prorecId;
        	jsonStr.STORAGETYPE = row.storageType;
        	jsonStr.RECID = row.recId;
        	jsonStr.UNITNAME = row.useUnitID;
        	jsonStr.UNITPEOPLE = row.useProple;
        	jsonStr.UNITPHONE = row.useUnitPhone;
        	dataStr.push(jsonStr);
        	_this.props.setAssetCode(row.assetsCode);
        	_this.props.setHardWareInreviewData(JSON.stringify(dataStr));
        if(row.storageType == "采购入库"){
        	if(row.reviewCode == 1){
        		_this.props.setProjectId(row.projectID);
        		_this.props.setOrganizationId(row.unitId);
        		_this.props.setBrandId(row.brandId);
        		_this.props.setLocationId(row.physicalLocation);
        		_this.props.setMagUnitId(row.assetsAttributionID);
        		_this.props.setProductTypeId(row.productType);
        		_this.props.setProductChildTypeId(row.subProductType);
        		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/purchaseHardInEditPage');
        		$("#recId").val(row.recId);
        		$("#reviewDesc").val(row.reviewDesc);
	    		$("#prorecId").val(row.prorecId);
	    		$("#projectNameSelect").find(".rw-input").text(row.projectName);
	    		$("#operatUnitSelect").find(".rw-input").text(row.unitName);
	    		$("#brandNameSelect").find(".rw-input").text(row.brandName);
	    		$("#locationNameSelect").find(".rw-input").text(row.physicalLocationName);
	    		$("#magUnitSelect").find(".rw-input").text(row.assetsAttributionName);
	    		$("#productTypeSelect").find(".rw-input").text(row.productTypeName);
	    		$("#productChildTypeSelect").find(".rw-input").text(row.subProductTypeName);
        	}else{
        		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/purchaseHardInAuditPage');
        	}
        	
        	$("#assetHandleTime").val(row.createdDateTime);
	    	$("#assetCode").val(row.assetsCode);
	    	$("#assetCodePic").val(row.assetsCode);
	    	$("#constructType").val(row.constructionType);
	    	$("#assetOwner").val(row.assetsAttributionName);
	    	$("#contractNum").val(row.contractNumber);
	    	$("#chargeOwner").val(row.partyA);
	    	$("#phoneOwner").val(row.partyAPhone);
	    	$("#purchasePhone").val(row.purchaserPhone);
	    	$("#purchaseMoney").val(row.cost);
	    	
	    	$("#productParentType").val(row.productTypeName);
	    	$("#productChildType").val(row.subProductTypeName);
	    	$("#productTypeNum").val(row.productModel);
	    	$("#installAddress").val(row.installAddress);
	    	$("#equipmentInit").val(row.manufacturerInfo);
	    	$("#moduleCount").val(row.modelNumber);
	    	$("#serialNum").val(row.serialNumber);
	    	$("#assetHandler").val(row.createdBy);
	    	
	    	$("#assetName").val(row.assetsName);
	    	$("#projectName").val(row.projectName);
	    	$("#operatUnit").val(row.unitName);
	    	$("#operatPeople").val(row.unitPeople);
	    	$("#operatPhone").val(row.unitPhone);
	    	
	    	$("#buyer").val(row.purchaser);
	    	$("#buyDate").val(row.assetsYear);
	    	$("#maintenTime").val(row.warrantyPeriod);
	    	$("#brandName").val(row.brandName);
	    	$("#ipAddress").val(row.ipAddress);
	    	$("#phyAddress").val(row.physicalLocationName);
	    	
	    	$("#supPhone").val(row.supplierPhone);
	    	$("#assetUse").val(row.assetsUse);
	    	$("#remark").val(row.noteInfo);
        }else if(row.storageType == "借用入库"){
        	if(row.reviewCode == 1){
        		_this.props.setEditMagUnitId(row.useUnitID);
        		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/borrowHardInEditPage');
        		$("#reviewDesc").val(row.reviewDesc);
        		$("#magUnitSelect").find(".rw-input").text(row.useUnitName);
        		$("#prorecId").val(row.prorecId);
        	}else{
        		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/borrowHardInAuditPage');
        	}
        	$("#assetHandleTime").val(row.createdDateTime);
    		$("#borrowUnit").val(row.useUnitName);
    		$("#borrowerPhone").val(row.consigneePhone);
    		$("#assetHandler").val(row.createdBy);
    		$("#borrower").val(row.consignee);
    		$("#remark").val(row.pnote);
        }else if(row.storageType == "维修入库"){
        	if(row.reviewCode == 1){
        		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/repairHardInEditPage');
        		$("#prorecId").val(row.prorecId);
        		$("#amID").val(row.amID);
        		$("#reviewDesc").val(row.reviewDesc);
        	}else{
        		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/repairHardInAuditPage');
        	}
        	$("#assetHandleTime").val(row.createdDateTime);
    		$("#assetHandler").val(row.createdBy);
    		
    		$("#repairNum").val(row.fileNumber);
    		$("#repairFactory").val(row.mname);
    		$("#repairPhone").val(row.contactsPhone);
    		$("#costRepair").val(row.maintenancePay);
    		
    		$("#repairPeople").val(row.contacts);
    		$("#remark").val(row.checkResult);
    		$("#showPictrue").attr('src',row.maintenanceForm); 
        }
    },
    'click .assetsHardInMentDelete':function (e, value, row, index) {
   			$("#deleteAssetsHardIn").modal("show");
        var prorecId = row.prorecId;
        _this.props.setHardWarestorageId(prorecId);
    }
};
let refreshBtnObj,downloadBtnObj,optionObj1,optionObj2,optionObj3,optionObj4,addBtnObj;
const AssetsHardInManageView = React.createClass({
	
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return{
            rowIdsCount:0
        }
    },
    componentDidUpdate:function () {
				let bdata = this.props.hardWareStorageData;
        $("#assetsHardInTableList").bootstrapTable("load",bdata);
    },
    onDblClickRow:function(row){
    	this.props.setAssetCode(row.assetsCode);
    	var storageType = row.storageType;
    	if(storageType == "采购入库"){
    		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscPurchaseDetailPage');
    		$("#assetHandleTime").val(row.createdDateTime);
	    	$("#assetCode").val(row.assetsCode);
	    	$("#assetCodePic").val(row.assetsCode);
	    	$("#constructType").val(row.constructionType);
	    	$("#assetOwner").val(row.assetsAttributionName);
	    	$("#contractNum").val(row.contractNumber);
	    	$("#chargeOwner").val(row.partyA);
	    	$("#phoneOwner").val(row.partyAPhone);
	    	$("#purchasePhone").val(row.purchaserPhone);
	    	$("#purchaseMoney").val(row.Cost);
	    	
	    	$("#productParentType").val(row.productTypeName);
	    	$("#productChildType").val(row.subProductTypeName);
	    	$("#productTypeNum").val(row.productModel);
	    	$("#installAddress").val(row.installAddress);
	    	$("#equipmentInit").val(row.manufacturerInfo);
	    	$("#moduleCount").val(row.modelNumber);
	    	$("#serialNum").val(row.serialNumber);
	    	$("#assetHandler").val(row.createdBy);
	    	
	    	$("#assetName").val(row.assetsName);
	    	$("#projectName").val(row.projectName);
	    	$("#operatUnit").val(row.unitName);
	    	$("#operatPeople").val(row.unitPeople);
	    	$("#operatPhone").val(row.unitPhone);
	    	
	    	$("#buyer").val(row.purchaser);
	    	$("#buyDate").val(row.assetsYear);
	    	$("#maintenTime").val(row.warrantyPeriod);
	    	$("#brandName").val(row.brandName);
	    	$("#ipAddress").val(row.ipAddress);
	    	$("#phyAddress").val(row.physicalLocationName);
	    	
	    	$("#supPhone").val(row.supplierPhone);
	    	$("#assetUse").val(row.assetsUse);
	    	$("#remark").val(row.noteInfo);
    	}else if(storageType == "借用入库"){
    		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscBorrowDetailPage');
    		$("#assetHandleTime").val(row.createdDateTime);
    		$("#borrowUnit").val(row.useUnitName);
    		$("#borrowerPhone").val(row.consigneePhone);
    		$("#assetHandler").val(row.createdBy);
    		$("#borrower").val(row.consignee);
    		$("#remark").val(row.pnote);
    	}else if(storageType == "维修入库"){
    		_this.history.pushState(null,'assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscRepairDetailPage');
    		$("#assetHandleTime").val(row.createdDateTime);
    		$("#assetHandler").val(row.createdBy);
    		
    		$("#repairNum").val(row.fileNumber);
    		$("#repairFactory").val(row.mname);
    		$("#repairPhone").val(row.contactsPhone);
    		$("#costRepair").val(row.maintenancePay);
    		
    		$("#repairPeople").val(row.contacts);
    		$("#remark").val(row.checkResult);
    		$("#showPictrueDetail").attr('src',row.maintenanceForm); 
    	}
    },
    componentDidMount: function () {
        $("#assetsHardInTableList").bootstrapTable({

            columns: [
                {
                    field: 'state',
                    checkbox: true
                },
                {
                    title: '资产编码',
                    field: 'assetsCode',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }, {
                    title: '设备名称',
                    field: 'assetsName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '资产归属',
                    field: 'assetsAttributionName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '项目名称',
                    field: 'projectName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '产品子类型',
                    field: 'subProductTypeName',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '采购费用',
                    field: 'cost',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '采购日期',
                    field: 'assetsYear',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '维保剩余天数',
                    field: 'wpFlagTime',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '入库类型',
                    field: 'storageType',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '状态',
                    field: 'reviewStatus',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },
                {
                    title: '编辑',
                    halign: 'left',
                    align: 'left',
                    events: assetsHardInMentTableEvent,
                    formatter: editPic
                }, {
                    title: '删除',
                    halign: 'left',
                    align: 'left',
                    events: assetsHardInMentTableEvent,
                    formatter: deletePic
                }
            ],
            onDblClickRow: this.onDblClickRow,
//			onClickRow:	this.onDblClickRow,
            data: [],
            //onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        var _this = this;
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '刷新');
        refreshBtnObj.innerHTML = "刷新";
        refreshBtnObj.onclick = function () {
         _this.props.get_HardWareStorageData("");
        };
        addBtnObj = document.createElement('select');
        addBtnObj.setAttribute('id', 'assCreatSelect');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'select');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '新建入库');
        addBtnObj.innerHTML = "新建入库";
        optionObj1 = document.createElement("option");
        optionObj1.setAttribute('class', 'options');
        optionObj1.setAttribute('type', 'option');
        optionObj1.setAttribute('value', '新建入库');
        optionObj1.setAttribute('title', '新建入库');
        optionObj1.innerHTML = "新建入库";
        optionObj2 = document.createElement("option");
        optionObj2.setAttribute('class', 'options');
        optionObj2.setAttribute('type', 'option');
        optionObj2.setAttribute('value', '采购入库');
        optionObj2.setAttribute('title', '采购入库');
        optionObj2.innerHTML = "采购入库";
        optionObj3 = document.createElement("option");
        optionObj3.setAttribute('class', 'options');
        optionObj3.setAttribute('type', 'option');
        optionObj3.setAttribute('value', '借用入库');
        optionObj3.setAttribute('title', '借用入库');
        optionObj3.innerHTML = "借用入库";
        optionObj4 = document.createElement("option");
        optionObj4.setAttribute('class', 'options');
        optionObj4.setAttribute('type', 'option');
        optionObj4.setAttribute('value', '维修入库');
        optionObj4.setAttribute('title', '维修入库');
        optionObj4.innerHTML = "维修入库";
        addBtnObj.appendChild(optionObj1);
        addBtnObj.appendChild(optionObj2);
        addBtnObj.appendChild(optionObj3);
        addBtnObj.appendChild(optionObj4);
        downloadBtnObj = document.createElement('button');
        downloadBtnObj.setAttribute('class', 'btn btn-refresh');
        downloadBtnObj.setAttribute('type', 'button');
        downloadBtnObj.setAttribute('name', 'add');
        downloadBtnObj.setAttribute('title', '下载模板');
        downloadBtnObj.innerHTML = "下载模板";
        downloadBtnObj.onclick = function () {
            /*----新建SLA--*/
        //    alert("新建++++++++++++++++++++");
//          _this.history.pushState(null,'operationManage/slaAddDetail');
        };
        var btnGroup = document.getElementsByClassName('fixed-table-toolbar')[0].childNodes[1];
        btnGroup.appendChild(refreshBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(addBtnObj, btnGroup.childNodes[0]);
        btnGroup.appendChild(downloadBtnObj, btnGroup.childNodes[0]);
        $(".form-control").css({ "display": "inline-block", "width": "243px" });
        $("#assetsHardInTableList thead>tr").css({ "background": "#d8e1e5" });
        $(".btn").css({"margin-bottom":"4px"});
        $("#assCreatSelect").css({"appearance":"none"});
       // $("#assCreatSelect").css({"width":"92px","appearance":"none","border-radius":"4px","background-color":"#5cb85c","border":"none","padding":"0 16px"});
        $(".options").css({"background-color":"#fff","color":"#000"});
        $("#assCreatSelect").on("change",function(){
        	let val = $(this).val();
            if(val == "采购入库"){
              	_this.history.pushState(null,"assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscPurchaseNewPage");
            }else if(val == "维修入库"){
                _this.history.pushState(null,"assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscRepairNewPage");
            }else if(val == "借用入库"){
                _this.history.pushState(null,"assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscBorrowNewPage");
            }
        })
        $("#assetsHardIn").on("change",function () {
            let statusCode = "";
            let val = $(this).val();
            if(val == "审核通过"){
                statusCode = 4;
            }else if(val == "审核未通过"){
                statusCode = 1;
            }else if(val == "待审核"){
                statusCode = 0;
            }else if(val == "全部状态"){
                statusCode = "";
            }
            _this.props.get_HardWareStorageData(statusCode);
        });
        $("#assetsHardInType").on("change",function () {
            let val = $(this).val();
            let rowIds = [];
            if(val == "批量删除"){
            	let rowIdArr = $("#assetsHardInTableList").bootstrapTable("getSelections");
            	for (let i = 0;i<rowIdArr.length;i++){
		            rowIds.push(rowIdArr[i].prorecId);
		            _this.setState({rowIdsCount:i+1});
		        }
            	if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的硬件资产入库记录。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                $("#deleteAssetsHardInAll").modal("show");
            }else if(val == "批量审核"){
                let rowIds = [];
		        let dataStr = [];
                let rowIdArr = $("#assetsHardInTableList").bootstrapTable("getSelections");
                if(rowIdArr.length == 0){
		        	setTimeout(function(){
		                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
		                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量审核的硬件资产入库记录。"
		                $('#publicMessageModal').modal('show');
		        	},100);
		        	return;
		        }
                for (let i = 0;i<rowIdArr.length;i++){
		        	var jsonStr = {};
                    jsonStr.PROCESSID = _rowIdArr[_i].prorecId;
                    jsonStr.STORAGETYPE = _rowIdArr[_i].storageType;
                    jsonStr.RECID = _rowIdArr[_i].recId;
                    jsonStr.UNITNAME = _rowIdArr[_i].useUnitID;
                    jsonStr.UNITPEOPLE = _rowIdArr[_i].useProple;
                    jsonStr.UNITPHONE = _rowIdArr[_i].useUnitPhone;
                    dataStr.push(jsonStr);
                }
                let rowIdss = dataStr.join(",");
                let result = JSON.stringify(rowIdss);
                let filter = [
                    {key:"ALLDATA",value:result},
                    {key:"STATUSCODE",value:"4"}
                ];
                _this.props.edit_hardWareStorageData(filter);
            }
        })
    },
    deleteAssetsHardInData:function () {
        _this.props.delete_hardWareStorageData("");
        $("#deleteAssetsHardIn").modal("hide");
    },
    deleteAssetsHardInDataAll:function () {
        let rowIds = [];
        let rowIdArr = $("#assetsHardInTableList").bootstrapTable("getSelections");
        if(rowIdArr.length == 0){
        	setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择需要批量删除的硬件资产入库信息。"
                $('#publicMessageModal').modal('show');
        	},100);
        	return;
        }
        for (let i = 0;i<rowIdArr.length;i++){
            rowIds.push(rowIdArr[i].prorecId);
            _this.setState({rowIdsCount:i+1});
        }
        let rowIdss = rowIds.join(",");
        $("#deleteAssetsHardInAll").modal("hide");
        _this.props.delete_hardWareStorageData(rowIdss);
    },
    render: function () {
        return (
            <div className="">
                {/*删除硬件资产------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteAssetsHardIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除硬件资产记录</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除此删除硬件资产入库记录吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteAssetsHardInData}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*删除硬件资产组------------------------------------模态弹窗*/}
                <div className="modal fade" id="deleteAssetsHardInAll" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ "width": "340px", "margin": "auto" }}>
                            <div className="modal-header" style={{ "background": "#64c4dd" }}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">删除硬件资产记录</h4>
                            </div>
                            <div className="modal-body">
                                您确定要删除这{_this.state.rowIdsCount}条数据吗？
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.deleteAssetsHardInDataAll}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assetsHardInTitle" style={{"font-size":"16px","height":"20px","margin":"16px 0 0 16px"}}>
                    <span style={{"width":"4px","height":"16px","background-color":"#8eddf2","display":"inline-block","margin-right":"10px"}}></span>
                    硬件资产入库(代办 {this.props.hardWareStorageCount})
                </div>
                <div style={{"position":"absolute","top":"70px","left":"233px","zIndex":"1"}}>
                    <select name="assetsHardIn" id="assetsHardIn">
                        <option value="全部状态">全部状态</option>
                        <option value="待审核">待审核</option>
                        <option value="审核通过">审核通过</option>
                        <option value="审核未通过">审核未通过</option>
                    </select>
                    <select name="assetsHardInType" id="assetsHardInType" style={{"marginLeft":"20px"}}>
                        <option value="全部状态">批量操作</option>
                        <option value="批量审核">批量审核</option>
                        <option value="批量删除">批量删除</option>
                    </select>
                </div>
                {/*列表*/}
                <div className="col-md-12">
                    <table id="assetsHardInTableList"
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
export default connect(mapStateToProps)(AssetsHardInManageView);

