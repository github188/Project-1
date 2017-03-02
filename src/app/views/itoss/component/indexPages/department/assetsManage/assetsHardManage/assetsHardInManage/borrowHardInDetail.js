//新建借用入库页面
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import * as assetAction from "../../../../../../../../actions/assetManage_action";
		
const BorrowHardInDetailView = React.createClass({
	mixins:[History],
	getInitialState: function () {
		return {
			disabled:true,
			assetCode:""
		}
	},
	componentDidMount:function(){ 

    },
  goBack:function(){
		const {dispatch} = this.props;
  	dispatch(assetAction.setGoBack("AssetsHardInManageMent"));
  	this.history.goBack();
	},
	render:function(){
				return(
            <div className="borrowHardInDetail" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                <div className="borrowHardInDetail_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="borrowHardInDetail_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="borrowHardInDetail_head_left" style={{"width":"120px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件借用入库
                        </div>
                      <div className="borrowHardInDetail_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                    </div>
                    <div className="borrowHardInDetail_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="borrowHardInDetail_content_middle_left" style={{"width":"424px","display":"inline-block"}}>
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
                            <div className="borrowHardInDetail_content_middle_right" style={{"width":"424px","display":"inline-block","margin-left":"74px","height":"147px"}}>
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label" style={{"textAlign":"left"}}>处理人
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
    return{}
}
export default connect(myStateToProps)(BorrowHardInDetailView);
