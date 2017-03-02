//新建借用入库页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
var Store = require('../../../../../../../../server/store');
import * as assetAction from "../../../../../../../../actions/assetManage_action";
		
const BorrowHardInEdit = React.createClass({
	mixins: [History],
	getInitialState:function () {
        return{
            magUnitIndex:0,
            magUnitId:""
        }
    },
	componentWillMount:function(){
		this.setState({magUnitId:this.props.editMagUnitId});
	},
	componentDidUpdate:function () {
       	let bdata = this.props.hardWareSelectedBorrowData;
        $("#borrowNewTableList").bootstrapTable("load",bdata);
    },
	componentDidMount:function(){ 
        $("#assetHandleTime").val((new Date()).Format("yyyy-MM-dd"));
        $("#assetHandler").val(Store.get("localUserName"));
//      $("#magUnitSelect").find(".rw-input").text("请选择");
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
    saveSelectHard:function(){
        	
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
	saveBorrowAsset:function(){
		let filter = [];
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
		var borrowUnit = $("#borrowUnit").val();
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
		var prorecId = $("#prorecId").val();
		if(prorecId == null || prorecId.trim() == ""){
			$.showPublicDialog('提示','请您填写流程ID!');
			$("#prorecId").focus();
            $("#prorecId").css("outline", "none");
            $("#prorecId").css("border", "1px solid red");
            return;
		}else{
			$("#prorecId").css("border", "1px solid #d0d0d0");
		}
		filter.push({key: "PROCESSID", value: prorecId});
		filter.push({key: "ISEDIT", value: "true"});
		const {dispatch} = this.props;
		dispatch(assetAction.edit_hardWareStorageData(filter));
	  	dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
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
						<div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="slaAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66px","top":"17px","cursor":"pointer"}} onClick={this.saveBorrowAsset}>保存</div>
                    </div>
                    <div className="slaAdd_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="slaAdd_content_middle_left" style={{"width":"424px","display":"inline-block"}}>
                                {/*<form className="form-horizontal" role="form">*/}
                                    <div className="form-group">
                                        <label htmlFor="assetHandleTime" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办时间
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="date" style={{"width":"340px","margin-left":"-20px"}} id="assetHandleTime" className="form-control" name="assetHandleTime" placeholder="" disabled="true"/>
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
                                {/*</form>*/}
                            </div>
                            <div className="slaAdd_content_middle_right" style={{"width":"424px","display":"inline-block","margin-left":"74px","height":"147px"}}>
                               {/* <form className="form-horizontal" role="form">*/}
                                    <div className="form-group">
                                        <label htmlFor="assetHandler" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办人
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="assetHandler" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetHandler" placeholder="" disabled="true"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="borrower" className="col-sm-4 control-label" style={{"textAlign":"left"}}>提货人
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="borrower" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="borrower" placeholder=""/>
                                            <input type="hidden" id="prorecId"/>
                                            <input type="hidden" id="borrowUnit"/>
                                        </div>
                                    </div>
                                {/*</form>*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="remark" className="col-sm-4 control-label" style={{"textAlign":"left"}}>备注
                                </label>
                                <div className="col-sm-6">
                                    <textarea type="text" style={{"width":"842px","margin-left":"-202px"}} id="remark" className="form-control" name="remark" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="reviewDesc" className="col-sm-4 control-label" style={{"textAlign":"left"}}>审核不通过原因
                                </label>
                                <div className="col-sm-6">
                                    <textarea type="text" style={{"width":"842px","margin-left":"-202px"}} id="reviewDesc" className="form-control" name="reviewDesc" placeholder="" disabled="true"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
			}
		})
//export default BorrowNewView;
function myStateToProps(state) {
  	const{magUnitData,editMagUnitId} = state.dataDictReducer;
  	const{hardWareSelectedBorrowData} = state.assetManageReducer;
    return{
    	magUnitData:magUnitData,
    	hardWareSelectedBorrowData:hardWareSelectedBorrowData
    }
}
export default connect(myStateToProps)(BorrowHardInEdit);
