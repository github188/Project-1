require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactWidgets = require('react-widgets');
import { connect } from 'react-redux';
var _this = this;
var AssetsHardCountRepair = React.createClass({
	getInitialState: function() {
        return {
            
        }
    },
    componentWillMount:function(){
    	//调用组织机构查询接口nb
		
    },

    componentDidMount:function(){ 
      $("#assetsHardRepairList").bootstrapTable({
            columns: [
                {
                    title: '序号',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '资产编码',
                    field: 'SLA_TITLE',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '设备名称',
                    field: 'PROJECT_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '资产归属',
                    field: 'UNITTYPE_NAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '项目名称',
                    field: 'SERVICECONTENT',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '产品类型',
                    field: 'RESPONSETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '品牌名称',
                    field: 'RESPONSETIME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '维保剩余天数',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                },{
                    title: '状态',
                    field: 'STATUSNAME',
                    halign: 'left',
                    align: 'left',
                    sortable: true
                }
            ],
        });
      $("#assetsHardRepairList thead>tr").css({ "background": "#d8e1e5" });
    },
	
    render: function () {
        

    return (
		
            <div className="hardCountRepair" >
                <form className="form-horizontal" role="form">
                    <div className="form-group"> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>维修单号</label> 
                        <div className="col-md-4" style={{"left":"-54px"}}> 
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>处理人</label> 
                        <div className="col-md-4" style={{"left":"-46px"}}> 
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
                    </div>
                    <div className="form-group"> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>处理时间</label> 
                        <div className="col-md-4"> 
                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>检测人</label> 
                        <div className="col-md-4"> 
                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
                    </div>
                    <div className="form-group"> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>检测时间</label> 
                        <div className="col-md-4"> 
                        <span style={{"margin-left":"-75px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>维修方式</label> 
                        <div className="col-md-4"> 
                        <span style={{"margin-left":"-67px","margin-right":"14px","display":"inline-block","color":"red"}}>*</span>
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
                    </div>
                    <div className="form-group"> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>维修厂家</label> 
                        <div className="col-md-4" style={{"left":"-54px"}}> 
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}} /></div> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-46px"}}>联系人</label> 
                        <div className="col-md-4" style={{"left":"-46px"}}> 
                        <input className="" type="text" id="" style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
                    </div>
                    <div className="form-group"> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>联系电话</label> 
                        <div className="col-md-4" style={{"left":"-54px"}}> 
                        <input className="" type="text" id=""  style={{"width":"322px","height":"34px","border":"1px solid #ccc","border-radius":"4px"}}/></div> 
                    </div>
                    <div className="form-group"> 
                        <label for="" className="col-sm-2 control-label" style={{"left":"-58px"}}>故障描述</label> 
                        <div className="col-md-10" style={{"left":"-54px"}}> 
                        <input className="" type="text" id=""  style={{"width":"826px","height":"34px","display":"inline-block","border-radius":"4px","border":"1px solid #ccc"}}/></div> 
                    </div>
                </form>
             
                    <div className="col-md-12">
                    <table id="assetsHardRepairList"
                           data-toggle='table'
                           data-classes='table table-no-bordered table-hover'
                           data-resizable='true'>
                    </table>
                </div>
           
            </div>
         
  )}
});

function mapStateToProps(state) {
    const {} =state.operationReducer;
  return {
      
  }
}
export default connect(mapStateToProps)(AssetsHardCountRepair)
