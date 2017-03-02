﻿//维修入库页面     程艳鸿     20170209
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import * as assetAction from "../../../../../../../../actions/assetManage_action";
import AssetHardRepairModel from '../../../../../../page/assetHardRepairModel';
		
const RepairNewView = React.createClass({
	mixins: [History],
	componentWillMount:function(){
		
	},
	componentDidUpdate:function () {
       	let bdata = this.props.hardWareSelectedRepairData;
        $("#repairHardInNewTableList").bootstrapTable("load",bdata);
    },
	componentDidMount:function(){ 
  		   $("#repairHardInNewTableList").bootstrapTable({
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
			          	title: '产品类型',
			            field: 'subProductTypeName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '采购费用',
			            field: 'Cost',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '维保剩余天数',
			            field: 'wpFlagTime',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '状态',
			            field: 'statusName',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        $("#repairHardInNewTableList thead>tr").css({"background": "#daf1f8"});
        
    },
    selectRepairHardAssets:function(){
    	const {dispatch} = this.props;
    	dispatch(assetAction.get_hardRepairAssetOfCode(""));
        $("#selectHardRepairModal").modal("show");
    },
    saveSelectRepairHard:function(parameter){
       let filter = [];
       let verifyFilter = [];
		filter.push({key: "STORAGETYPE", value: "维修入库"});
		var repairNum = $("#repairNum").val();
		if(repairNum == null || repairNum.trim() == ""){
			$.showPublicDialog('提示','请您填写维修单号!');
			$("#repairNum").focus();
            $("#repairNum").css("outline", "none");
            $("#repairNum").css("border", "1px solid red");
            return;
		}else{
			$("#repairNum").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "FILENUMBER", value: repairNum});
		var assetHandler = $("#assetHandler").val();
		if(assetHandler == null || assetHandler.trim() == ""){
			$.showPublicDialog('提示','请您填写经办人!');
			$("#assetHandler").focus();
            $("#assetHandler").css("outline", "none");
            $("#assetHandler").css("border", "1px solid red");
            return;
		}else{
			$("#assetHandler").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CREATEBY", value: assetHandler});
		var assetHandleTime = $("#assetHandleTime").val();
		if(assetHandleTime == null || assetHandleTime.trim() == ""){
			$.showPublicDialog('提示','请您填写经办时间!');
			$("#assetHandleTime").focus();
            $("#assetHandleTime").css("outline", "none");
            $("#assetHandleTime").css("border", "1px solid red");
            return;
		}else{
			$("#assetHandleTime").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CREATETIME", value: assetHandleTime});
		var costRepair = $("#costRepair").val();//提货人电话
		if(costRepair == null || costRepair.trim() == ""){
			$.showPublicDialog('提示','请您填写维修费用!');
			$("#costRepair").focus();
            $("#costRepair").css("outline", "none");
            $("#costRepair").css("border", "1px solid red");
            return;
		}else{
			$("#costRepair").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "MAINTENANCEPAY", value: costRepair});
		var repairFactory = $("#repairFactory").val();//维修厂家
		if(repairFactory == null || repairFactory.trim() == ""){
			$.showPublicDialog('提示','请您填写维修厂家!');
			$("#repairFactory").focus();
            $("#repairFactory").css("outline", "none");
            $("#repairFactory").css("border", "1px solid red");
            return;
		}else{
			$("#repairFactory").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "MAINTENANCEUNIT", value: repairFactory});
		var repairPeople = $("#repairPeople").val();//维修联系人
		if(repairPeople == null || repairPeople.trim() == ""){
			$.showPublicDialog('提示','请您填写维修联系人!');
			$("#repairPeople").focus();
            $("#repairPeople").css("outline", "none");
            $("#repairPeople").css("border", "1px solid red");
            return;
		}else{
			$("#repairPeople").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CONTACTS", value: repairPeople});
		var repairFactory = $("#repairFactory").val();//维修厂家
		if(repairFactory == null || repairFactory.trim() == ""){
			$.showPublicDialog('提示','请您填写维修联系人!');
			$("#repairFactory").focus();
            $("#repairFactory").css("outline", "none");
            $("#repairFactory").css("border", "1px solid red");
            return;
		}else{
			$("#repairFactory").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "MAINTENANCEUNIT", value: repairFactory});
		var repairPhone = $("#repairPhone").val();//维修联系电话
		if(repairPhone == null || repairPhone.trim() == ""){
			$.showPublicDialog('提示','请您填写维修联系电话!');
			$("#repairPhone").focus();
            $("#repairPhone").css("outline", "none");
            $("#repairPhone").css("border", "1px solid red");
            return;
		}else{
			$("#repairPhone").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CONTACTSNUMBER", value: repairPhone});
		var remark = $("#remark").val();//维修联系人
		if(remark == null || remark.trim() == ""){
			$.showPublicDialog('提示','请您填写维修结论!');
			$("#remark").focus();
            $("#remark").css("outline", "none");
            $("#remark").css("border", "1px solid red");
            return;
		}else{
			$("#remark").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CHECKRESULT", value: remark});
		var imageUrl = $("#pictrueUrl").val();
		if(imageUrl != undefined && imageUrl != null && imageUrl.trim() != ""){
			filter.push({key: "MAINTENANCEFORM", value: imageUrl});
		}
		//获取被选中的值
		let rowIdArr = $("#repairHardInNewTableList").bootstrapTable("getSelections");
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
        filter.push({key: "ASSETSIDS", value: rowIdss});
        //校验参数传递参数值
        verifyFilter.push({key: "ASSETSTATUS", value: "维修"});
		verifyFilter.push({key: "ASSETSRECIDS", value: rowIdss});
		verifyFilter.push({key: "TABLENAME", value: "HardWareAssets"});
		const {dispatch} = this.props;
		dispatch(assetAction.verify_statusForBindAssets(verifyFilter,filter));
	  	if(parameter == "aa"){
	  		$("#assetHandleTime").val("");
    		$("#assetHandler").val("");
    		
    		$("#repairNum").val("");
    		$("#repairFactory").val("");
    		$("#repairPhone").val("");
    		$("#costRepair").val("");
    		
    		$("#repairPeople").val("");
    		$("#remark").val("");
    		$("#showPictrue").attr('src',""); 
		}else{
			dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  		this.history.goBack();
		}
    },
    deleteRepairHardAssets:function(){
    	const {dispatch} = this.props;
		var data = this.props.hardWareSelectedRepairData;
		if(data != null && data.length){
			let rowIdArr = $("#repairHardInNewTableList").bootstrapTable("getSelections");
			if(rowIdArr.length == 0){
	        	setTimeout(function(){
	                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	                document.getElementById('publicMessageModalcontent').innerHTML = "请选择资产信息。"
	                $('#publicMessageModal').modal('show');
	        	},100);
				return;
			}	
			let rowIds = [];
			let asstsId = [];
	    	for (let i = 0;i<rowIdArr.length;i++){
	            rowIds.push(rowIdArr[i].recId);
	        }
	        let rowIdss = rowIds.join(",");
	        for(var j=0;j<data.length; j++){
	        	//删除选中的数据
	        	if(rowIdss.indexOf(data[j].recId) < 0){
	        		asstsId.push(data[j].recId);
	        	}
	        }
	        dispatch(assetAction.get_hardAssetRepairOfCode(asstsId));
		}
    },
    goBack:function(){
    	const {dispatch} = this.props;
		dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
    },
    uploadPicAction:function(){
		$("#uploadImagesModal").modal("show");
		this.initFileInput("file-Portrait", "/upload/hardwarefileresource");
	},
	initFileInput:function(ctrlName, uploadUrl) {    
	    var control = $('#' + ctrlName); 
	    control.fileinput({
	        language: 'zh', //设置语言
	        uploadUrl: uploadUrl, //上传的地址
	        allowedFileExtensions : ['jpg', 'png','gif'],//接收的文件后缀
	        showUpload: true, //是否显示上传按钮
	        showCaption: false,//是否显示标题
	        browseClass: "btn btn-primary", //按钮样式    
	        ///showPreview:false,	//演示
	         //dropZoneEnabled: false,//是否显示拖拽区域
	        //minImageWidth: 50, //图片的最小宽度
	        //minImageHeight: 50,//图片的最小高度
	        //maxImageWidth: 1000,//图片的最大宽度
	        //maxImageHeight: 1000,//图片的最大高度
	        //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
	        //minFileCount: 0,
	        maxFileCount: 10,	////表示允许同时上传的最大文件个数
	        enctype: "multipart/form-data",
	        validateInitialCount:true,
	        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
	        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>"
//	        uploadExtraData:function (previewId, index) {
//				var obj = {}; 
//				$('#uploadPic').find('input').each(function() { 
//					var id = $(this).attr('id'), val = $(this).val();
//					obj[id] = val; 
//				}); 
//				return obj; 
//			}
	    });
	    $("#uploadPic").on("fileuploaded", function(event, data, previewId, index) {
					var path = data.response;
//					path = path.replace(/\\/g, "/");
					$("#pictrueUrl").val(path.url);
					$("#showPictrue").attr('src',path.url); 
			});
	},
	saveAndAdd:function(){
		this.saveSelectRepairHard("aa");
	},
	render:function(){
				return(
            <div className="assetsHardInRepairAdd" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                <div className="assetsHardInRepairAdd_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="assetsHardInRepairAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="assetsHardInRepairAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件维修入库
                        </div>
                        <div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66px","top":"17px","cursor":"pointer"}} onClick={this.saveSelectRepairHard}>保存</div>
                        <div className="slaAdd_head_right" style={{"width":"98px","height":"32px","border":"1px solid #74ce84","color":"#74ce84","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"132px","top":"17px","cursor":"pointer"}} onClick={this.saveAndAdd}>保存并新增</div>
                    </div>
                    <div className="slaAdd_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="slaAdd_content_middle_left" style={{"width":"424px","display":"inline-block"}}>
                                {/*<form className="form-horizontal" role="form">*/}
                                	<div className="form-group">
                                        <label htmlFor="repairNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维修单号
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="repairNum" className="form-control" name="repairNum" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="assetHandleTime" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办时间
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="assetHandleTime" className="form-control" name="assetHandleTime" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="repairFactory" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维修厂家
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="repairFactory" className="form-control" name="repairFactory" placeholder=""/>
                                            {/*<ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} id="projectName" className="form-control" data={projectUnitDataArr} value={projectUnitDataArr[projectUnitIndex]} textField='name' onSelect={this.setProjectUnitDataId} defaultValue={"请选择"}/>*/}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="repairPhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维修电话
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                        	<input type="text" style={{"width":"340px","margin-left":"-20px"}} id="repairPhone" className="form-control" name="repairPhone" placeholder=""/>
                                        </div>
                                    </div>
                                {/*</form>*/}
                            </div>
                            <div className="slaAdd_content_middle_right" style={{"width":"424px","display":"inline-block","margin-left":"74px","height":"196px"}}>
                                <div className="form-group">
                                    <label htmlFor="assetHandler" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办人
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" id="assetHandler" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetHandler" placeholder=""/>
                                        {/*<ReactWidgets.DropdownList style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="organization" data={companyDataArr} value={companyDataArr[companyDataIndex]} textField='FDNAME' onSelect={this.setCompanyDataId} defaultValue={"请选择"} AutoPostBack={true} onChange={this._selectProjectUnit}/>*/}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="costRepair" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维修费用
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" id="costRepair" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="costRepair" placeholder=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="repairPeople" className="col-sm-4 control-label" style={{"textAlign":"left"}}>联系人
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" id="repairPeople" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="repairPeople" placeholder=""/>
                                        <input type="hidden" id = "pictrueUrl"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                        <label htmlFor="remark" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维修结论
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <textarea type="text" style={{"width":"842px","margin-left":"-202px"}} id="remark" className="form-control" name="remark" placeholder=""/>
                                        </div>
                            </div>
                        </form>
                    </div>
                    <div className="slaAdd_content_bottom" style={{"width":"928px"}}>
                        <button style={{"width":"90px","height":"34px","border":"none","color":"#fff","display":"inline-block","background-color":"#349EF0"}} onClick={this.selectRepairHardAssets}>
                            选择资产
                        </button>
                        <button style={{"width":"90px","height":"34px","border":"1px solid #349EF0","background-color":"#fff","color":"#349EF0","display":"inline-block","margin-left":"10px"}} onClick={this.deleteRepairHardAssets}>
                            删除
                        </button>
                    </div>
                    <div style={{"width":"966px","margin-top":"10px"}}>
	                    <table id="repairHardInNewTableList"
	                           data-classes='table table-no-bordered table-hover'
	                           data-show-refresh='false'
	                           data-pagination='true'
	                           data-page-size='10'
	                           data-resizable='true'>
	                    </table>
                	</div>
                	<div style={{"width":"966px","margin-top":"10px"}}>
                		<button style={{"width":"140px","height":"34px","border":"1px solid #349EF0","background-color":"#fff","color":"#349EF0","display":"inline-block"}} onClick={this.uploadPicAction}>
                			上传维保单
                		</button>
                		<span style={{"color":"#a8a8a8","font-size":"14px","margin-left":"10px"}}>图片大小不得超过1M.附件支持的格式有:jpg,bmp,png,gif</span>
                	</div>
                	<div style={{"width":"966px","margin-top":"10px"}}>
                		<img src="" id="showPictrue" width="200" height="200"/>
                	</div>
                	<div className="modal fade" id="uploadImagesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                    <div className="modal-dialog">
	                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
	                            <div className="modal-header" style={{"background":"#64c4dd"}}>
	                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
	                                <h4 className="modal-title" id="myModalLabel">上传图片</h4>
	                            </div>
	                            <div className="modal-body">
	                            	<form id="uploadPic" class="bs-example bs-example-form" role="form" enctype="multipart/form-data">
		                            	<div class="control-group">
	                                    	<div class="row" style={{"height": "500px"}}>
										        						<input id="file-Portrait" type="file" multiple class="file-loading"/>
			    												</div>
		                              	</div>
		                            </form>
	                            </div>
	                            <div className="modal-footer">
	                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
	                            </div>
	                        </div>
	                    </div>
					</div>
                	<AssetHardRepairModel />
                </div>
            </div>
        )
			}
		})
function myStateToProps(state) {
    const {hardWareSelectedRepairData} =state.assetManageReducer;
    return{
    	hardWareSelectedRepairData:hardWareSelectedRepairData
    }
}
export default connect(myStateToProps)(RepairNewView);