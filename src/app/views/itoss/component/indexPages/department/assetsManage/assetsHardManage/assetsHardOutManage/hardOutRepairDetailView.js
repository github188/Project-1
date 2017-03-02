//资产硬件出库详情 20170222 程艳鸿
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
		
const HardOutRepairDetailView = React.createClass({
	componentDidMount:function(){ 
    },
	render:function(){
		return(
            <div className="hardOutRepairDetail" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                <div className="hardOutRepairDetail_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="hardOutRepairDetail_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="hardOutRepairDetail_head_left" style={{"width":"180px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件维修出库详情
                        </div>
						<div className="hardOutRepairDetail_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#49acf9","color":"#fff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
					</div>
                    <div className="hardOutRepairDetail_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                        <form className="form-horizontal" role="form">
		                    <div className="form-group"> 
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>维修单号</label> 
		                        <div className="col-md-4" style={{"left":"-54px"}}> 
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
		                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>联系电话</label> 
		                        <div className="col-md-4"> 
		                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
		                        <input className="" type="text" id="" style={{"width":"340px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
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
export default connect(myStateToProps)(HardOutRepairDetailView);
