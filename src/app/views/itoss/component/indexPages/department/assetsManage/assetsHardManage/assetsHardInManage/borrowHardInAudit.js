//新建借用入库待审核页面
require('bootstrap');
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import * as assetAction from "../../../../../../../../actions/assetManage_action";
		
const BorrowHardInAuditView = React.createClass({
	mixins:[History],
	getInitialState: function () {
		return {
			disabled:true,
			assetCode:""
		}
	},
	componentDidMount:function(){ 
  	
    },
  toggleSelect:function () {
     $("#borrowHardInAudit_select").toggle(200);
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
		let filter = [];
		const {dispatch} = this.props;
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
            <div className="borrowHardInAudit" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
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
                <div className="borrowHardInAudit_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="borrowHardInAudit_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                        <div className="borrowHardInAudit_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件借用入库
                        </div>
                        <div className="borrowHardInAudit_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="borrowHardInAudit_head_right" style={{"zIndex":"222","position":"absolute","right":"70px","top":"17px"}}><span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","right":"60px","cursor":"pointer"}} onClick={this.toggleSelect}>审核入库</span>
	                      <ul id="borrowHardInAudit_select" style={{"position":"absolute","top":"32px","left":"0","display":"none","cursor":"pointer"}}>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.reviewShow}>审核通过</li>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.noReviewModle}>审核不通过</li>
	                      </ul>
                        </div>
                    </div>
                    <div className="borrowHardInAudit_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="borrowHardInAudit_content_middle_left" style={{"width":"424px","display":"inline-block"}}>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label" style={{"textAlign":"left"}}>入库时间
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="assetHandleTime" className="form-control" name="assetHandleTime" placeholder="" disabled={this.state.disabled}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label" style={{"textAlign":"left"}}>借用单位
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" style={{"width":"340px","margin-left":"-20px"}} id="borrowUnit" className="form-control" name="borrowUnit" placeholder="" disabled={this.state.disabled}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label" style={{"textAlign":"left"}}>提货人电话
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                        	<input type="text" style={{"width":"340px","margin-left":"-20px"}} id="borrowerPhone" className="form-control" name="borrowerPhone" placeholder="" disabled={this.state.disabled}/>     
                                        </div>
                                    </div>
                            </div>
                            <div className="borrowHardInAudit_content_middle_right" style={{"width":"424px","display":"inline-block","margin-left":"74px","height":"147px"}}>
                               {/* <form className="form-horizontal" role="form">*/}
                                    <div className="form-group">
                                        <label htmlFor="organization" className="col-sm-4 control-label" style={{"textAlign":"left"}}>处理人
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="assetHandler" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="assetHandler" placeholder="" disabled={this.state.disabled}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label" style={{"textAlign":"left"}}>提货人
                                        <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" id="borrower" style={{"width":"340px","margin-left":"-20px"}} className="form-control" name="borrower" placeholder="" disabled={this.state.disabled}/>
                                        </div>
                                    </div>
                            </div>
                            <div className="form-group">
                                        <label htmlFor="" className="col-sm-4 control-label" style={{"textAlign":"left"}}>备注
                                        </label>
                                        <div className="col-sm-6">
                                            <textarea type="text" style={{"width":"842px","margin-left":"-202px","height":"100px"}} id="remark" className="form-control" name="remark" placeholder="" disabled={this.state.disabled}/>
                                        </div>
                            </div>
                        </form>
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
export default connect(myStateToProps)(BorrowHardInAuditView);
