require('bootstrap');
import React from 'react'
var ReactRouter = require('react-router');
var History = ReactRouter.History;

import { connect } from 'react-redux'
import * as flowDesignAction from '../../../../../actions/flowdesign_action'

import FlowDesignEditFormView from './flowDesignEditFormView';

var FlowDesignEditView = React.createClass({
  mixins: [History],
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },
  // componentWillMount: function() {
  //   var data1 = this.props.currFlowData;
  //   var currflowname ="";
  //   if(data1){
  //     if(typeof(data1)=='string'){
  //        currflowname = data1;
  //     }else {
  //       currflowname = data1.name;
  //     }
  //   }
  //   //this.getFlux().actions.YFTFlowDesignActions.get_flowDesignPicDataByName_flow(currflowname);
  //   this.props.dispatch(flowDesignAction.get_flowDesignPicDataByName_flow(currflowname));
  // },
  componentDidMount: function() {
      var data1 = this.props.currFlowData;
      var currflowname ="";
      if(data1){
        if(typeof(data1)=='string'){
           currflowname = data1;
        }else {
          currflowname = data1.name;
        }
      }
      //this.getFlux().actions.YFTFlowDesignActions.get_flowDesignPicDataByName_flow(currflowname);
      //this.props.dispatch(flowDesignAction.get_flowDesignPicDataByName_flow(currflowname));
  },
  render:function(){
    //var fl = this.getFlux();
    var data1 = this.props.currFlowData;
    var currflowname ="";
    if(data1){
      if(typeof(data1)=='string'){
         currflowname = data1;
      }else {
        currflowname = data1.name;
      }

    }
    const { dispatch } = this.props;
    return (
    	<div>
    		<div style={{"background":"#edf5f8","height":"34px"}}>
    			<div style={{"width":"56%","height":"34px","padding-top":"15px","margin":"0 auto","background":"#edf5f8","color":"#999999"}}><span style={{"color":"#349ef0"}}>运维管理</span>  > 流程引擎  > 新建流程 </div>
    		</div>
        <div id='flowDesignEditView' className='overviewDiv' style={{"position":"relative","width":"100%","height":"100%","padding-bottom":"16px","padding-top":"1px","background":"#edf5f8"}}>
          
          <FlowDesignEditFormView
          	//当前流程名称
          	flowName={currflowname} 
          	//模板流程的状态、角色、详情等信息
          	flowDesignPicData={this.props.flowDesignPicData} 
          	//工单流程类型（故障工单、现场服务流程、服务台等）
          	flowDeignResultData={this.props.flowDeignResultData}
            update_flowDesignPicData_flow={data =>dispatch(flowDesignAction.update_flowDesignPicData_flow(data))}
            delete_flowDesignPicData_flow={param => dispatch(flowDesignAction.delete_flowDesignPicData_flow(param))}
            currFlowData={this.props.currFlowData} flowOnlyShow={this.props.flowOnlyShow} flowPanelState={this.props.flowPanelState}
            set_flowPanel={param => dispatch(flowDesignAction.set_flowPanel(param))}
            //添加模板时将用户选择的工单主模板和处理表单
            workOrderTemplatesId = {this.props.workOrderTemplatesId}
            //设置流程设计的处理表单id
            flowDesignTemplatesId = {this.props.flowDesignTemplatesId}
          />
        </div>
      </div>
    );
  }
});

function mapResourceState(state) {
  const {currFlowData,flowDesignPicData,flowDeignResultData,flowOnlyShow,flowPanelState,workOrderTemplatesId,flowDesignTemplatesId  } = state.flowDesignReducer
  return {
    currFlowData:currFlowData,
    flowDesignPicData:flowDesignPicData,
    flowDeignResultData:flowDeignResultData,
    flowOnlyShow:flowOnlyShow,
    flowPanelState:flowPanelState,
    workOrderTemplatesId:workOrderTemplatesId,
    flowDesignTemplatesId:flowDesignTemplatesId
  }
}

export default connect(mapResourceState)(FlowDesignEditView)
