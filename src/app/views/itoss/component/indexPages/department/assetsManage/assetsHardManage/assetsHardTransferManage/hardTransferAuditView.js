//硬件资产调拨审核 20170124 程艳鸿
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
		
const HardTransferAuditView = React.createClass({
	componentDidMount:function(){ 
            $("#hardTransferAudit_select li").on("mouseover",function () {
            $(this).css("backgroundColor","#349ff1");
            $(this).css("color","#ffffff");
	        });
	        $("#hardTransferAudit_select li").on("mouseout",function () {
	            $(this).css("backgroundColor","#ffffff");
	            $(this).css("color","#349ff1");
	        });
    },
    toggleSelect:function () {
       $("#hardTransferAudit_select").toggle(200);
    },
   
    noReviewModle:function(){
		$("#hardTransferAuditModel").modal("show");
		$("#hardTransferAudit_select").hide();
	},
	render:function(){
		return(
            <div className="hardTransferAudit" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
            {/*---------------------------审核未通过原因------------------------*/}
             <div className="modal fade" id="hardTransferAuditModel" tabindex="-1" role="dialog" aria-labelledby="hardTransferAuditModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"450px"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="hardTransferAuditModelLabel">审核不通过原因</h4>
                            </div>
                            <div className="modal-body">
                                <textarea cols="51" rows="6"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" >保存</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="hardTransferAudit_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 1px 25px"}}>
                    <div className="hardTransferAudit_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                        <div className="hardTransferAudit_head_left" style={{"width":"180px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件资产调拨审核
                        </div>
                        <div className="hardTransferAudit_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="hardTransferAudit_head_right" style={{"zIndex":"222","position":"absolute","right":"70px","top":"17px"}}><span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","right":"60px","cursor":"pointer"}} onClick={this.toggleSelect}>审核调拨</span>
	                      <ul id="hardTransferAudit_select" style={{"position":"absolute","top":"32px","left":"0","display":"none","cursor":"pointer"}}>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this._reviewShow}>审核通过</li>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.noReviewModle}>审核不通过</li>
	                      </ul>
                        </div>
                    </div>
                    <div className="hardTransferAudit_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>调拨单号</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>经办人</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>经办时间</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>资产归属</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>单位负责人</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>负责人电话</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
                            <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>调拨说明</label> 
		                        <div className="col-md-10" style={{"left":"-54px"}}> 
		                        <textarea className="" type="text" id=""  style={{"width":"845px","height":"100px","display":"inline-block","border-radius":"4px","border":"1px solid #ccc"}}/></div> 
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
export default connect(myStateToProps)(HardTransferAuditView);
