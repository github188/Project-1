//新建借用入库页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
var Store = require('../../../../../../../../server/store');
import * as assetAction from "../../../../../../../../actions/assetManage_action";
import AssetHardBorrowModel from '../../../../../../page/assetHardBorrowModel';
		
const BorrowNewView = React.createClass({
	mixins: [History],
	getInitialState:function () {
        return{
            magUnitIndex:0,
            magUnitId:""
        }
    },
	componentWillMount:function(){
		
	},
	componentDidUpdate:function () {
       	let bdata = this.props.hardWareSelectedBorrowData;
        $("#borrowNewTableList").bootstrapTable("load",bdata);
    },
	componentDidMount:function(){ 
  		   $("#borrowNewTableList").bootstrapTable({
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
//          onClickRow: this.onClickRow,
            exportDataType: "all"
        });
        $("#borrowNewTableList thead>tr").css({"background": "#daf1f8"});
        $("#assetHandleTime").val((new Date()).Format("yyyy-MM-dd"));
        $("#assetHandler").val(Store.get("localUserName"));
        $("#magUnitSelect").find(".rw-input").text("请选择");
        $(document).ready(function() {
            $("#assetsHardSwiOFFTwo").click(function(){    
                $("#assetsHardSwiONTwo").show();
                $("#assetsHardSwiOFFTwo").hide();
            });
            $("#assetsHardSwiONTwo").click(function(){    
                $("#assetsHardSwiOFFTwo").show();
                $("#assetsHardSwiONTwo").hide();
            });
        });
    },
    selectBorrowHardAssets:function(){
    	const {dispatch} = this.props;
    	dispatch(assetAction.get_hardAssetOfCode(""));
        $("#selectHardModal").modal("show");
    },
    //资产归属回显
	setMagUnitId:function(e){
		var magUnitData = this.props.magUnitData;
        var pid = e.RECID;
        var that = this;
        for(var i=0;i<magUnitData.length;i++){
            var magUnitId = magUnitData[i].RECID;
            if(pid == magUnitId){
                that.setState({magUnitIndex:i+1});
            };
        };
        $("#magUnitSelect").find(".rw-input").text(e.UNITNAME);
        this.setState({magUnitId:pid});
	},
	goBack:function(){
		const {dispatch} = this.props;
		dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
	},
	saveBorrowAsset:function(parameter){
		let filter = [];
		let verifyFilter = [];
		filter.push({key: "STORAGETYPE", value: "借用入库"});
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
		var magUnitId = this.state.magUnitId;
		if(magUnitId == null || magUnitId.trim() == ""){
			$.showPublicDialog('提示','请您选择借用单位!');
			$("#magUnitSelect").focus();
            $("#magUnitSelect").css("outline", "none");
            $("#magUnitSelect").css("border", "1px solid red");
            return;
		}else{
			$("#magUnitSelect").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "USEUNITID", value: magUnitId});
		var borrower = $("#borrower").val();//提货人
		if(borrower == null || borrower.trim() == ""){
			$.showPublicDialog('提示','请您填写提货人姓名!');
			$("#borrower").focus();
            $("#borrower").css("outline", "none");
            $("#borrower").css("border", "1px solid red");
            return;
		}else{
			$("#borrower").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CONSIGNEE", value: borrower});
		var borrowerPhone = $("#borrowerPhone").val();//提货人电话
		if(borrowerPhone == null || borrowerPhone.trim() == ""){
			$.showPublicDialog('提示','请您填写提货人姓名!');
			$("#borrowerPhone").focus();
            $("#borrowerPhone").css("outline", "none");
            $("#borrowerPhone").css("border", "1px solid red");
            return;
		}else{
			$("#borrowerPhone").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "CONSIGNEEPHONE", value: borrowerPhone});
		var remark = $("#remark").val();//备注
		if(remark != undefined && remark != null && remark.trim() != ""){
			filter.push({key: "NOTEINFO", value: remark.trim()});
		}
		//获取被选中的值
		let rowIdArr = $("#borrowNewTableList").bootstrapTable("getSelections");
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
        verifyFilter.push({key: "ASSETSTATUS", value: "借用"});
		verifyFilter.push({key: "ASSETSRECIDS", value: rowIdss});
		verifyFilter.push({key: "TABLENAME", value: "HardWareAssets"});
		const {dispatch} = this.props;
		dispatch(assetAction.verify_statusForBindAssets(verifyFilter,filter));
	  	if(parameter == "aa"){
	  		dispatch(assetAction.setHardWareSelectedBorrowData(""));
			$("#magUnitSelect").find(".rw-input").text("请选择");
			
			$("#assetHandleTime").val("");
    		$("#borrowerPhone").val("");
    		$("#assetHandler").val("");
    		$("#borrower").val("");
    		$("#remark").val("");
		}else{
			dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  		this.history.goBack();
		}
	},
	deleteBorrowHardAssets:function(){
		const {dispatch} = this.props;
		var data = this.props.hardWareSelectedBorrowData;
		if(data != null && data.length){
			let rowIdArr = $("#borrowNewTableList").bootstrapTable("getSelections");
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
	        dispatch(assetAction.get_hardBorrowAssetOfCode(asstsId));
		}
	},
	saveAndAdd:function(){
		this.saveBorrowAsset("aa");
	},
	render:function(){
				//资产归属选择
        var magUnitIndex = this.state.magUnitIndex;
        var parents = this.props.magUnitData;
        var magUnitList = [];
        magUnitList.push({RECID:"",UNITNAME:""});
        for(var i=0;i<parents.length;i++){
            magUnitList.push(parents[i]);
        };
				return(
            <div className="assetsHardInBorrowAdd" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}> 
                <div className="assetsHardInBorrowAdd_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="assetsHardInBorrowAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="assetsHardInBorrowAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件借用入库
                        </div>
                        <div style={{"display":"inline-block","position":"absolute","margin-top":"-34px","margin-left":"140px"}}>
                            <span style={{"margin-right":"10px","color":"#999999","margin-left":"14px"}}>扫码录入</span>
                            <img id="assetsHardSwiOFFTwo" src="./img/assets/assetsSwitchOFF.png" style={{"margin-top":"-4px"}} />
                            <img id="assetsHardSwiONTwo" src="./img/assets/assetsSwitchON.png" style={{"display":"none","margin-top":"-4px"}}/>
                        </div>
						<div className="hardInBorrowAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="hardInBorrowAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66px","top":"17px","cursor":"pointer"}} onClick={this.saveBorrowAsset}>保存</div>
                        <div className="hardInBorrowAdd_head_right" style={{"width":"98px","height":"32px","border":"1px solid #74ce84","color":"#74ce84","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"132px","top":"17px","cursor":"pointer"}} onClick={this.saveAndAdd}>保存并新增</div>
                    </div>
                    <div className="hardInBorrowAdd_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="form-group" id="barCodeHardInBro" style={{"display":"none"}}>
                                <label htmlFor="" className="col-sm-2 control-label" style={{"textAlign":"left"}}>条形码
                                </label>
                                <div className="col-sm-3">
                                    <input type="text" style={{"width":"340px","margin-left":"-33px"}} id="" className="form-control" name="" placeholder=""/>
                                </div>
                            </div>
                            <div className="hardInBorrowAdd_content_middle_left" style={{"width":"424px","display":"inline-block"}}>
                                    <div className="form-group">
                                        <label htmlFor="assetHandleTime" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办时间
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="assetHandleTime" className="form-control" name="assetHandleTime" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borrowUnit" className="col-sm-4 control-label" style={{"textAlign":"left"}}>借用单位
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6" style={{"width":"372px","margin-left":"130px","margin-top":"-27px"}}>
                                            <ReactWidgets.DropdownList className="dataDictDropDown form-control" data={magUnitList} value={magUnitList[magUnitIndex]} textField="UNITNAME" onSelect={this.setMagUnitId} onChange={this.onChangeDropDown} id="magUnitSelect"/>
		                                </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borrowerPhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>提货人电话
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                        	<input type="text" style={{"width":"340px","margin-left":"-20px"}} id="borrowerPhone" className="form-control" name="borrowerPhone" placeholder=""/>
                                        </div>
                                    </div>
                            </div>
                            <div className="hardInBorrowAdd_content_middle_right" style={{"width":"424px","display":"inline-block","margin-left":"74px","height":"147px"}}> 
                                    <div className="form-group">
                                        <label htmlFor="assetHandler" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办人
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="assetHandler" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetHandler" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borrower" className="col-sm-4 control-label" style={{"textAlign":"left"}}>提货人
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                             <input type="text" id="borrower" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="borrower" placeholder=""/>
                                        </div>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="remark" className="col-sm-4 control-label" style={{"textAlign":"left"}}>备注
                                </label>
                                <div className="col-sm-6">
                                    <textarea type="text" style={{"width":"842px","margin-left":"-202px"}} id="remark" className="form-control" name="remark" placeholder=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="hardInBorrowAdd_content_bottom" style={{"width":"928px"}}>
                        <button style={{"width":"90px","height":"34px","border":"none","color":"#fff","display":"inline-block","background-color":"#349EF0"}} onClick={this.selectBorrowHardAssets}>
                            选择资产
                        </button>
                        <button style={{"width":"90px","height":"34px","border":"1px solid #349EF0","background-color":"#fff","color":"#349EF0","display":"inline-block","margin-left":"10px"}} onClick={this.deleteBorrowHardAssets}>
                            删除
                        </button>
                    </div>
                    <div style={{"width":"966px","margin-top":"10px"}}>
                    <table id="borrowNewTableList"
                           data-classes='table table-no-bordered table-hover'
                           data-show-refresh='false'
                           data-pagination='true'
                           data-page-size='10'
                           data-resizable='true'>
                    </table>
                </div>
                <AssetHardBorrowModel />
                </div>
            </div>
        )
			}
		})
//export default BorrowNewView;
function myStateToProps(state) {
		const{magUnitData} = state.dataDictReducer;
  	const{hardWareSelectedBorrowData} = state.assetManageReducer;
    return{
    	magUnitData:magUnitData,
    	hardWareSelectedBorrowData:hardWareSelectedBorrowData
    }
}
export default connect(myStateToProps)(BorrowNewView);
