/**
 * Created by  on 2016/01/20.
 * 流程设计
 */
require('bootstrap');
import React from 'react'
var ReactWidgets = require('react-widgets');
var ReactRouter = require('react-router');
import { connect } from 'react-redux';
var History = ReactRouter.History;
var Store = require('../../../../../server/store');
var base64 = require('../../../../../utils/base64.js');
var operationAction = require('../../../../../actions/operation_action');

var FlowDesignEditButton = React.createClass({
  mixins: [History],
  deleteFlowData:function(){
    this.props.deleteFlowData();
  },
  saveFlowData:function(){
  	const {dispatch} = this.props;
   this.props.saveFlowData();
   dispatch(operationAction.setFlowPicData("WorkflowManageMent"));
  },
  goBack:function(){
  	const {dispatch} = this.props;
  	dispatch(operationAction.setFlowPicData("WorkflowManageMent"));
  	this.history.goBack();
  },
  backtoSpace:function(){
    this.history.pushState(null,'operationManage/flowDesign');
  },
  setFlowPanl:function(e){
      var btntext= document.getElementById('operationmanageflowdesignedit').innerText;
      if(btntext=='设计'){
           //this.getFlux().actions.YFTFlowDesignActions.set_flowPanel(1);
           this.props.set_flowPanel(1);
           document.getElementById('operationmanageflowdesignedit').innerText="查看";
      }else {
           //this.getFlux().actions.YFTFlowDesignActions.set_flowPanel(0);
           this.props.set_flowPanel(0);
           document.getElementById('operationmanageflowdesignedit').innerText="设计";
      }
  },
  componentWillMount:function(){
  },
  componentDidMount: function() {
    var temp = Store.get("PERMISSIONS");
    try {
        temp = base64.base64decode(temp);
        temp = decodeURI(temp);
        var index1 =temp.indexOf("/operationmanage/flowdesign/add");
        var data1 = this.props.currFlowData;
        var currflowname ="";
        if(data1){
          if(typeof(data1)=='string'){
             currflowname = "";
          }else {
            currflowname = data1.name;
          }
        }
        var hidebtn = this.props.flowOnlyShow;

        if(hidebtn==1){
              $("#operationmanageflowdesigndelete").hide();
              $("#operationmanageflowdesignedit").hide();
              $("#operationmanageflowdesignupdate").hide();
              $("#operationmanageflowdesigngoback").hide();
        }
    } catch (e) {
      console.log(e);
    } finally { }
    $("#operaTips").on("mouseover",function () {
        $("#tipBox").show();
    });
    $("#operaTips").on("mouseout",function () {
        $("#tipBox").hide();
    });
   },
  render:function(){
    var data1 = this.props.currFlowData;
    var showtip =  this.props.flowPanelState;
    var btnsjtxt = "设计"
    if(showtip==1){
      btnsjtxt = "查看";
    }
    var currflowname ="";
    if(data1){
      if(typeof(data1)=='string'){
         currflowname = data1+"（新建）";
      }else {
        currflowname = data1.name;
      }
    }
    var flowName = "流程设计-"+currflowname;
    return (
        <div className="operationButtons" style={{"width":"100%","borderBottom":"1px solid #ebecee","position":"relative"}}>
        	<div style={{"background":"#009fcc","top":"20px","left":"-280px","width":"200px","height":"50px","position":"absolute","padding-left":"20px","padding-top":"13px"}}><img src="./img/流程引擎-白.png"/><span style={{"text-align":"center","color":"#ffffff","margin-left":"20px","font-size":"16px"}}>流程引擎</span></div>
        	
            <div className="slaAdd_head_left" style={{"display":"inline-block","width":"auto","height":"57px","borderBottom":"3px solid #349ff1","fontSize":"18px","lineHeight":"60px","textAlign":"center","color":"#349ff1","padding":"0 24px"}}>
                {flowName}
            </div>
            <div id="operaTips" className="operaTips" style={{"color":"#999999","display":"inline-block","margin-left":"20px","cursor":"pointer"}}><img src="./img/流程设计提示.png" style={{"margin-right":"8px"}}/>如何新建流程</div>
            <div id="tipBox" style={{"position":"absolute","top":"-25px","left":"360px","display":"none","background":"url(./img/流程设计Tips.png) no-repeat","width":"340px","height":"124px","zIndex":"1","font-size":"16px","padding":"24px","color":"#ffffff"}}>在空白处点击左键，创建一个角色并可以对角色进行分配对象的操作，从而定义各个角色之间的工单流转。</div>
        	<div className="slaAdd_head_right" id="operationmanageflowdesigngoback" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"0","top":"17px","cursor":"pointer"}} onClick={this.goBack}>返回</div>
        	<div className="slaAdd_head_right" id="operationmanageflowdesigndelete" style={{"width":"60px","height":"32px","backgroundColor":"#ccc","color":"#333","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"66","top":"17px","cursor":"pointer"}} onClick={this.deleteFlowData}>删除</div>
        	<div className="slaAdd_head_right" id="operationmanageflowdesignupdate" style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"132px","top":"17px","cursor":"pointer"}} onClick={this.saveFlowData}>保存</div>
    	    <div className="slaAdd_head_right" id="operationmanageflowdesignedit"  style={{"width":"60px","height":"32px","backgroundColor":"#74ce84","color":"#ffffff","lineHeight":"32px","textAlign":"center","borderRadius":"5px","position":"absolute","right":"198px","top":"17px","cursor":"pointer"}} onClick={this.setFlowPanl}>{btnsjtxt}</div>
    	</div>
    );
  }
});

function mapStateToProps(state) {
  const {flowPicData} = state.operationReducer;

  return {
  	flowPicData:flowPicData
  }
}
export default connect(mapStateToProps)(FlowDesignEditButton)