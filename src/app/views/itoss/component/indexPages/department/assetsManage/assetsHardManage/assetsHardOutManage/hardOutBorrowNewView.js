//新建硬件借用出库 
import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from "react-redux";
import AssetsHardOutBorrowModel from '../../../../../../page/assetsHardOutBorrowModel';
var ReactWidgets = require('react-widgets');
		
const HardOutBorrowView = React.createClass({
	componentDidMount:function(){ 
  		   $("#hardOutBorrowNewList").bootstrapTable({
            columns: [
	                  {
                    field: 'state',
                    checkbox: true
                	},{
			          	title: '资产编码',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '项目名称',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '设备名称',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '产品类型',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '维保剩余天数',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '运维负责人',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '运维负责人电话',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '资产归属',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			          	title: '状态',
			            field: 'ROLE_DESC',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
        $("#hardOutBorrowNewList thead>tr").css({"background": "#daf1f8","height":""});
    	$("#hardOutBorrowNewSwiOFF").click(function(){ 
            $("#hardOutBorrowNewSwiOFF").hide();   
            $("#hardOutBorrowNewSwiON").show();
            $("#barCodeHardOutBroNew").show();
        });
        $("#hardOutBorrowNewSwiON").click(function(){    
            $("#hardOutBorrowNewSwiOFF").show();
            $("#hardOutBorrowNewSwiON").hide();
            $("#barCodeHardOutBroNew").hide();
        });    
    },
    selectBorrowHardOut:function()
        {
        	$("#assetsHardOutBorrowModel").modal("show");
        },
	render:function(){
		return(
            <div className="hardOutBorrowNew" style={{"width":"100%","height":"inherit","padding-bottom":"32px","padding-top":"1px","backgroundColor":"#edf5f8"}}>
                <div className="hardOutBorrowNew_content" style={{"margin":"16px auto","height":"auto","width":"1016px","backgroundColor":"#ffffff","padding":"0 26px 0 25px"}}>
                    <div className="hardOutBorrowNew_head" style={{"width":"966px","borderBottom":"1px solid #ebecee","overflow":"hidden","position":"relative"}}>
                        <div className="hardOutBorrowNew_head_left" style={{"width":"140px","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1"}}>
                            硬件借用出库
                        </div>
                      	<div style={{"display":"inline-block","position":"absolute","margin-top":"-34px","margin-left":"160px"}}>
                            <span style={{"margin-right":"10px","color":"#999999","margin-left":"14px"}}>扫码出库</span>
                            <img id="hardOutBorrowNewSwiOFF" src="./img/assets/assetsSwitchOFF.png" style={{"margin-top":"-4px"}} />
                            <img id="hardOutBorrowNewSwiON" src="./img/assets/assetsSwitchON.png" style={{"display":"none","margin-top":"-4px"}}/>
                        </div>
						<div className="hardOutBorrowNew_head_right" style={{"width":"60px","height":"32px","backgroundColor":"49acf9","color":"#fff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
						<div className="hardOutBorrowNew_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66px","top":"17px","cursor":"pointer"}} onClick={this.goBack}>打印</div>
                        <div className="hardOutBorrowNew_head_right" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"133px","top":"17px","cursor":"pointer"}} onClick={this.goBack}>保存</div>
                        <div className="hardOutBorrowNew_head_right" style={{"width":"98px","height":"32px","border":"1px solid #74ce84","color":"#74ce84","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"199px","top":"17px","cursor":"pointer"}} onClick={this._saveAdd}>保存并新增</div>
                    </div>
                    <div className="hardOutBorrowNew_content_middle" style={{"width":"966px","margin-top":"20px"}}>
                    	<form className="form-horizontal" role="form">
                    		<div className="form-group" id="barCodeHardOutBroNew" style={{"display":"none"}}> 
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
                    <div className="hardOutBorrowNew_content_bottom" style={{"width":"928px"}}>
                        <button style={{"width":"90px","height":"34px","border":"none","color":"#fff","display":"inline-block","background-color":"#349EF0"}} onClick={this.selectBorrowHardOut}>
                            选择资产
                        </button>
                        <button style={{"width":"90px","height":"34px","border":"1px solid #349EF0","background-color":"#fff","color":"#349EF0","display":"inline-block","margin-left":"10px"}}>
                            删除
                        </button>
                    </div>
                    <div style={{"width":"966px","margin-top":"10px"}}>
                    <table id="hardOutBorrowNewList"
                           data-classes='table table-no-bordered table-hover'
                           data-show-refresh='false'
                           data-pagination='true'
                           data-page-size='10'
                           data-resizable='true'>
                    </table>
                </div>
                </div>
                <AssetsHardOutBorrowModel/>
            </div>
        )
			}
		})
function myStateToProps(state) {
    return{}
}
export default connect(myStateToProps)(HardOutBorrowView);
