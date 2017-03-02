//硬件借用出库审核 20170122 程艳鸿
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
		
const HardOutBorrowAuditView = React.createClass({
	componentDidMount:function(){ 
            $("#hardOutBroAuditSwiOFF").click(function(){ 
                $("#hardOutBroAuditSwiOFF").hide();   
                $("#hardOutBroAuditSwiON").show();
                $("#barCodeHardOutBroAudit").show();
            });
            $("#hardOutBroAuditSwiON").click(function(){    
                $("#hardOutBroAuditSwiOFF").show();
                $("#hardOutBroAuditSwiON").hide();
                $("#barCodeHardOutBroAudit").hide();
            });
            $("#hardOutBorrowAudit_select li").on("mouseover",function () {
            $(this).css("backgroundColor","#349ff1");
            $(this).css("color","#ffffff");
	        });
	        $("#hardOutBorrowAudit_select li").on("mouseout",function () {
	            $(this).css("backgroundColor","#ffffff");
	            $(this).css("color","#349ff1");
	        });
    },
    toggleSelect:function () {
       $("#hardOutBorrowAudit_select").toggle(200);
    },
   
    noReviewModle:function(){
		$("#hardOutBorrowAuditModel").modal("show");
		$("#hardOutBorrowAudit_select").hide();
	},
	render:function(){
		return(
            <div className="hardOutBorrowAudit" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
            {/*---------------------------审核未通过原因------------------------*/}
             <div className="modal fade" id="hardOutBorrowAuditModel" tabindex="-1" role="dialog" aria-labelledby="hardOutBorrowAuditModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"450px"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="hardOutBorrowAuditModelLabel">审核不通过原因</h4>
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
            
                <div className="hardOutBorrowAudit_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="hardOutBorrowAudit_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                        <div className="hardOutBorrowAudit_head_left" style={{"width":"180px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件借用出库审核
                        </div>
                        <div style={{"display":"inline-block","position":"absolute","margin-top":"-34px","margin-left":"200px"}}>
                            <span style={{"margin-right":"10px","color":"#999999","margin-left":"14px"}}>扫码录入</span>
                            <img id="hardOutBroAuditSwiOFF" src="./img/assets/assetsSwitchOFF.png" style={{"margin-top":"-4px"}} />
                            <img id="hardOutBroAuditSwiON" src="./img/assets/assetsSwitchON.png" style={{"display":"none","margin-top":"-4px"}}/>
                        </div>
                        <div className="hardOutBorrowAudit_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#49acf9","color":"#fff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="hardOutBorrowAudit_head_right" style={{"zIndex":"222","position":"absolute","right":"70px","top":"17px"}}><span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","right":"60px","cursor":"pointer"}} onClick={this.toggleSelect}>审核出库</span>
	                      <ul id="hardOutBorrowAudit_select" style={{"position":"absolute","top":"32px","left":"0","display":"none","cursor":"pointer"}}>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this._reviewShow}>审核通过</li>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this.noReviewModle}>审核不通过</li>
	                      </ul>
                        </div>
                    </div>
                    <div className="hardOutBorrowAudit_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="form-group" id="barCodeHardOutBroAudit" style={{"display":"none"}}> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>条形码</label> 
		                        <div className="col-md-4" style={{"margin-left":"-54px"}}> 
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 	                        
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>处理时间</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>处理人</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>借用单位</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>借用人</label> 
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
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>送货人</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>送货电话</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
                            <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>备注</label> 
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
export default connect(myStateToProps)(HardOutBorrowAuditView);
