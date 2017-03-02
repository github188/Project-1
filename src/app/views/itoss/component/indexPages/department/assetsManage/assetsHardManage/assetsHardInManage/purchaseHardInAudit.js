//我是采购入库待审核页面
require('bootstrap');
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import * as assetAction from "../../../../../../../../actions/assetManage_action";

const PurchaseHardInAuditView = React.createClass({
	mixins:[History],
	getInitialState: function () {
		return {
			disabled:true,
			assetCode:""
		}
	},
	componentDidMount:function(){
		var assetCode = this.props.assetCode;
		this.setState({assetCode:assetCode});
		var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 96,//设置宽高
        height : 96
	    });
	    qrcode.makeCode(this.state.assetCode);
	},
	toggleSelect:function () {
       $("#purchaseAdd_select").toggle(200);
    },
	handleQRClick:function(){
		$("#assetsHardInQR").show();
		$("#assetsHardInQRBuild").hide();
	},
	goBack:function(){
		const {dispatch} = this.props;
	  	dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
	},
	reviewShow:function(){
		let filter = [];
		const {dispatch} = this.props;
		var dataStr = this.props.hardWareInreviewData;
		filter.push({key: "ALLDATA", value: dataStr});
		filter.push({key: "STATUSCODE", value: "4"});
		dispatch(assetAction.edit_hardWareStorageData(filter));
	  	dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
	},
	noReviewModle:function(){
		$("#reviewAssetInModal").modal("show");
	},
	reviewShowNo:function(){
		$("#reviewAssetInModal").modal("hide");
		const {dispatch} = this.props;
		let filter = [];
		var dataStr = this.props.hardWareInreviewData;
		var reviewDesc = $("#reviewVal").val();
		filter.push({key: "ALLDATA", value: dataStr});
		filter.push({key: "REVIEWDESC", value: reviewDesc});
		filter.push({key: "STATUSCODE", value: "1"});
		dispatch(assetAction.edit_hardWareStorageData(filter));
		dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
	  	this.history.goBack();
	},
			render:function(){
				return(
            <div className="assetsHardInPurchaseAdd" style={{"width":"100%","height":"auto","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
            	<div className="modal fade" id="reviewAssetInModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="myModalLabel">审核不通过原因</h4>
                            </div>
                            <div className="modal-body">
		                        <textarea name="reviewVal" id="reviewVal" cols="50" rows="6"></textarea>
		                    </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={this.reviewShowNo}>确定</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assetsHardInPurchaseAdd_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="assetsHardInPurchaseAdd_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                        <div className="assetsHardInPurchaseAdd_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件采购入库
                        </div>
                        <div className="assetsHardInPurchaseAdd_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="HardInPurchaseEdit_head_right" style={{"zIndex":"222","position":"absolute","right":"70px","top":"17px"}}><span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","right":"60px","cursor":"pointer"}} onClick={this.toggleSelect}>审核入库</span>
	                      <ul id="purchaseAdd_select" style={{"display":"none","position":"absolute","top":"32px","left":"0","cursor":"pointer"}}>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.reviewShow}>审核通过</li>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.noReviewModle}>审核不通过</li>
	                      </ul>
                        </div>
                    </div>
                    <div className="assetsHardInPurchaseAdd_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="assetsHardInPurchaseAdd_content_middle_left" style={{"width":"424px","display":"inline-block","height":"776px"}}>
                                    <div className="form-group">
                                <label className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办时间
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="assetHandleTime" name="assetHandleTime" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assetCode" className="col-sm-4 control-label" style={{"textAlign":"left"}}>资产编码
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="assetCode" name="assetCode" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="constructType" className="col-sm-4 control-label" style={{"textAlign":"left"}}>承建类型
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                	<input type="text" style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="constructType" name="constructType" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assetOwner" className="col-sm-4 control-label" style={{"textAlign":"left"}}>资产归属
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                	<input type="text" style={{"width":"340px","margin-left":"-20px"}} className="form-control" id="assetOwner" name="assetOwner" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contractNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>合同单号
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="contractNum" className="form-control" name="contractNum" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="chargeOwner" className="col-sm-4 control-label" style={{"textAlign":"left"}}>业主负责人
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="chargeOwner" className="form-control" name="chargeOwner" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneOwner" className="col-sm-4 control-label" style={{"textAlign":"left"}}>业主负责人电话
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="phoneOwner" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="phoneOwner" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="purchasePhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购人电话
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="purchasePhone" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="purchasePhone" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="purchaseMoney" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购费用
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="purchaseMoney" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="purchaseMoney" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="productParentType" className="col-sm-4 control-label" style={{"textAlign":"left"}}>产品类型
                                	<span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="productParentType" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="productParentType" placeholder="" disabled={this.state.disabled}/>
                            	</div>
                            </div>	
                            <div className="form-group">
                                <label htmlFor="productChildType" className="col-sm-4 control-label" style={{"textAlign":"left"}}>产品子类型
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="productChildType" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="productChildType" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="productTypeNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>产品型号
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="productTypeNum" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="productTypeNum" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="installAddress" className="col-sm-4 control-label" style={{"textAlign":"left"}}>安装地址
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="installAddress" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="installAddress" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="equipmentInit" className="col-sm-4 control-label" style={{"textAlign":"left"}}>设备原厂商
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="equipmentInit" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="equipmentInit" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="moduleCount" className="col-sm-4 control-label" style={{"textAlign":"left"}}>模块数
                                </label>
                                <div className="col-sm-6">
                                    <input type="text" id="moduleCount" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="moduleCount" placeholder="" disabled={this.state.disabled}/>
                                </div>
                            </div>
                            </div>
                            <div className="hardInPurchaseAdd_content_middle_right" style={{"width":"424px","display":"inline-block","height":"776px","margin-left":"74px"}}>
                                    <div className="form-group">
                                    <label htmlFor="assetHandler" className="col-sm-4 control-label" style={{"textAlign":"left"}}>经办人
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" id="assetHandler" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetHandler" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="assetName" className="col-sm-4 control-label" style={{"textAlign":"left"}}>设备名称
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" id="assetName" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetName" placeholder="" disabled={this.state.disabled}/> 
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="projectName" className="col-sm-4 control-label" style={{"textAlign":"left"}}>项目名称
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" id="projectName" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="projectName" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="operatUnit" className="col-sm-4 control-label" style={{"textAlign":"left"}}>运维单位
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="operatUnit" className="form-control" name="operatUnit" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="operatPeople" className="col-sm-4 control-label" style={{"textAlign":"left"}}>运维负责人
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="operatPeople" className="form-control" name="operatPeople" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="operatPhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>运维负责人电话
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="operatPhone" className="form-control" name="operatPhone" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="buyer" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购人
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="buyer" className="form-control" name="buyer" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="buyDate" className="col-sm-4 control-label" style={{"textAlign":"left"}}>采购日期
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="buyDate" className="form-control" name="buyDate" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maintenTime" className="col-sm-4 control-label" style={{"textAlign":"left"}}>维保期
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="maintenTime" className="form-control" name="maintenTime" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brandName" className="col-sm-4 control-label" style={{"textAlign":"left"}}>品牌名称
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="brandName" className="form-control" name="brandName" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="serialNum" className="col-sm-4 control-label" style={{"textAlign":"left"}}>序列号
                                    <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="serialNum" className="form-control" name="serialNum" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ipAddress" className="col-sm-4 control-label" style={{"textAlign":"left"}}>IP地址
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="ipAddress" className="form-control" name="ipAddress" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phyAddress" className="col-sm-4 control-label" style={{"textAlign":"left"}}>物理位置
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="phyAddress" className="form-control" name="phyAddress" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="supPhone" className="col-sm-4 control-label" style={{"textAlign":"left"}}>设备供应商电话
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="supPhone" style={{"width":"340px","margin-left":"-20px"}} id="supPhone" className="form-control" name="supPhone" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="assetUse" className="col-sm-4 control-label" style={{"textAlign":"left"}}>资产用途
                                    </label>
                                    <div className="col-sm-6">
                                        <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="assetUse" className="form-control" name="assetUse" placeholder="" disabled={this.state.disabled}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="hardInPurchaseAdd_content_bottom" style={{"width":"928px"}}>
                        
                        <div className="hardInPurchaseAdd_content_middle_bottom" style={{"width":"966px"}}>
                          <div className="form-group">
	                            <label htmlFor="remark" className="col-sm-4 control-label" style={{"textAlign":"left"}}>备注
	                            </label>
	                            <div className="col-sm-6">
	                                <textarea type="text" style={{"width":"842px","margin-left":"-204px","height":"100px"}} id="remark" className="form-control" name="remark" placeholder="" disabled={this.state.disabled}/>
	                            </div>
	                        </div>
                          <div className="form-group" style={{"width":"452px","display":"inline-block","margin-left":"2px","margin-top":"20px"}}>
	                            <label htmlFor="" className="col-sm-4 control-label" style={{"textAlign":"left"}}>二维码
	                            </label>
	                            <button id="assetsHardInQRBuild" style={{"width":"140px","height":"34px","border":"1px solid #74ce84","color":"#74ce84","display":"inline-block","background-color":"#fff","margin-left":"-20px"}} onClick={this.handleQRClick}>
	                            生成二维码
	                            </button>
	                            <div id="assetsHardInQR" style={{"display":"none","width":"600px"}}>
	                                <div id="qrcode" style={{"display":"inline-block","float":"left"}}>
	                                	<span style={{"display":"block","margin-top":"10px","font-size":"13px"}} id="">{this.state.assetCode}</span>
	                                </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
			}
		})
function myStateToProps(state) {
  const {assetCode,hardWareInreviewData} =state.assetManageReducer;
    return {
    	assetCode:assetCode,
    	hardWareInreviewData:hardWareInreviewData
    }
}
export default connect(myStateToProps)(PurchaseHardInAuditView);