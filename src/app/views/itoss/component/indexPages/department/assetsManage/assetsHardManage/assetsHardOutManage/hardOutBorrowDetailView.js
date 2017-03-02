//硬件资产借用出库详情  20170122 程艳鸿
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
		
const HardOutBorrowDetailView = React.createClass({
	componentDidMount:function(){ 
    },
    
	render:function(){
		return(
            <div className="hardOutBorrowDetail" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                <div className="hardOutBorrowDetail_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="hardOutBorrowDetail_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="hardOutBorrowDetail_head_left" style={{"width":"180px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件借用出库详情
                        </div>
						<div className="hardOutBorrowDetail_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#49acf9","color":"#fff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
					</div>
                    <div className="hardOutBorrowDetail_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                    	<form className="form-horizontal" role="form">
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
export default connect(myStateToProps)(HardOutBorrowDetailView);
