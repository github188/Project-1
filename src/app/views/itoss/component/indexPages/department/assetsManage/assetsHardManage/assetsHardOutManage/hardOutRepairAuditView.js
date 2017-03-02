//硬件维修出库审核
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
		
const HardOutRepairAuditView = React.createClass({
	componentDidMount:function(){  
            $("#hardOutRepAuditSwiOFF").click(function(){ 
                $("#hardOutRepAuditSwiOFF").hide();   
                $("#hardOutRepAuditSwiON").show();
                $("#barCodeHardOutRepAudit").show();
            });
            $("#hardOutRepAuditSwiON").click(function(){    
                $("#hardOutRepAuditSwiOFF").show();
                $("#hardOutRepAuditSwiON").hide();
                $("#barCodeHardOutRepAudit").hide();
            });
      $("#hardOutRepairAudit_select li").on("mouseover",function () {
            $(this).css("backgroundColor","#349ff1");
            $(this).css("color","#ffffff");
	        });
	    $("#hardOutRepairAudit_select li").on("mouseout",function () {
	        $(this).css("backgroundColor","#ffffff");
	        $(this).css("color","#349ff1");
	    });
    },
    toggleSelect:function () {
       $("#hardOutRepairAudit_select").toggle(200);
    },
    _noReviewShow:function(){
		$("#hardOutRepairAuditModel").modal("show");
		$("#hardOutRepairAudit_select").hide();
	},
	render:function(){
		return(
            <div className="hardOutRepairAudit" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
            {/*---------------------------审核未通过原因------------------------*/}
             <div className="modal fade" id="hardOutRepairAuditModel" tabindex="-1" role="dialog" aria-labelledby="hardOutRepairAuditModelLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{"width":"450px"}}>
                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title" id="hardOutRepairAuditModelLabel">审核不通过原因</h4>
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
            
                <div className="hardOutRepairAudit_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="hardOutRepairAudit_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","position":"relative"}}>
                        <div className="hardOutRepairAudit_head_left" style={{"width":"180px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件维修出库审核
                        </div>
                        <div style={{"display":"inline-block","position":"absolute","margin-top":"-34px","margin-left":"200px"}}>
                            <span style={{"margin-right":"10px","color":"#999999","margin-left":"14px"}}>扫码录入</span>
                            <img id="hardOutRepAuditSwiOFF" src="./img/assets/assetsSwitchOFF.png" style={{"margin-top":"-4px"}} />
                            <img id="hardOutRepAuditSwiON" src="./img/assets/assetsSwitchON.png" style={{"display":"none","margin-top":"-4px"}}/>
                        </div>
                        <div className="hardOutRepairAudit_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#49acf9","color":"#fff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
                        <div className="hardOutRepairAudit_head_right" style={{"zIndex":"222","position":"absolute","right":"70px","top":"17px"}}><span style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1","display":"block","right":"60px","cursor":"pointer"}} onClick={this.toggleSelect}>审核出库</span>
	                      <ul id="hardOutRepairAudit_select" style={{"position":"absolute","top":"32px","left":"0","display":"none","cursor":"pointer"}}>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this._reviewShow}>审核通过</li>
	                          <li style={{"width":"92px","height":"32px","color":"#349ff1","lineHeight":"32px","textAlign":"center","border":"1px solid #349ff1"}} onClick={this._noReviewShow}>审核不通过</li>
	                      </ul>
                        </div>
                    </div>
                    <div className="hardOutRepairAudit_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
                            <div className="form-group" id="barCodeHardOutRepAudit" style={{"display":"none"}}> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>条形码</label> 
		                        <div className="col-md-4" style={{"margin-left":"-54px"}}> 
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 	                        
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-60px"}}>维修单</label> 
		                        <div className="col-md-4" style={{"margin-left":"-54px"}}>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"margin-left":"6px"}}>经办人</label> 
		                        <div className="col-md-4"> 
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>经办时间</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>检测人</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>检测时间</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>维修方式</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>维修厂家</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>联系人</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
		                    </div>
		                    <div className="form-group">
                                <label htmlFor="" className="col-sm-4 control-label" style={{"textAlign":"left","margin-left":"20px"}}>故障描述
                                <span style={{"display":"inline-block","color":"red","margin-left":"12px"}}>*</span>
                                </label>
                                <div className="col-sm-6">
                                    <textarea type="" style={{"width":"845px","margin-left":"-240px","height":"100px"}} id="" className="form-control" name="" placeholder=""/>
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
export default connect(myStateToProps)(HardOutRepairAuditView);
