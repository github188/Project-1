import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactRouter = require('react-router');
var ReactWidgets = require('react-widgets');
import Store from '../../../../../../server/store';
import * as OperationManage from "../../../../../../actions/operation_action";
import * as dictActions from '../../../../../../actions/dataDict_action';
import { connect } from 'react-redux';
var History = ReactRouter.History;

const NewKnowledgeMangeMent = React.createClass({	
	             mixins: [History],			
                  getInitialState: function () {
			        return {
			            parentIndex: 0,
			            subIndex:0,
			            parentIndexEdit:0,
			            subIndexEdit:0  
			        }
			    },
               //保存事件 增加知识库
			 add_knowledgeData:function add_knowledgeData(){
			   	const { dispatch } = this.props;
			    var knowledgeManagerData = this.props.knowledgeManagerData;
			    var faultSubData = this.props.faultSubData;
			    for(var i=0;i<knowledgeManagerData.length;i++){
			    	console.log(knowledgeManagerData[i])
			    	var faultid=knowledgeManagerData[i].FAULTID;
                    var faultsubid=knowledgeManagerData[i].FAULTSUBID;
			    }
			     
			  	 for(var i=0;i<faultSubData.length;i++){
			    	
			    	var faultid=faultSubData[i].pId;
                    var faultsubid=faultSubData[i].cId;
                    console.log('这是级联的id')
                    console.log(faultid)
			     }	    
		    	var knowledgeFaultBigClass = $("#knowledgeFaultBigClass").find(".rw-input").text();
		    
		    	var knowledgeFaultSmallClass = $("#knowledgeFaultSmallClass").find(".rw-input").text();		    
		    	var knowledgeTheme = $("#knowledgeTheme").val();
		    	var knowledgePhenomenon = $("#knowledgePhenomenon").val();
		    	var knowledgeAnalysis = $("#knowledgeAnalysis").val();
		    	var knowledgeSolution = $("#knowledgeSolution").val();
		    	var knowledgeAnalysisSum = $("#knowledgeAnalysisSum").val();
				    
		    	var param =[knowledgeFaultBigClass,knowledgeFaultSmallClass,knowledgeTheme,knowledgePhenomenon,knowledgeAnalysis,knowledgeSolution,knowledgeAnalysisSum]
                 console.log(param)
                  if(knowledgeTheme==""||knowledgePhenomenon == ""||knowledgeAnalysis == ""||knowledgeSolution ==""||knowledgeAnalysisSum==""){
						setTimeout(function(){
							document.getElementById('publicMessageModelTitle').innerHTML = "提示"
							document.getElementById('publicMessageModalcontent').innerHTML = "请填写完整填完信息"
							$('#publicMessageModal').modal('show');
						},100);
						return false;
					 }
//              if(THEME!==""||FAULTPHENOMENON !== ""||ANALYSISSUMMARY !== ""||FAULTANALYSIS !==""|| SOLVINGSTEPS!==""){}
		        dispatch(OperationManage.add_knowledgeData(param)); 
			    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));
			    this.history.pushState(null,'operationManage/operationManagePage');
	            dispatch(OperationManage.get_knowledgeManagerData());
	            dispatch(dictActions.get_faultTypeDetailAllData());
		    },
		     
					 addFaultTypeSelect: function(e) {
					 	const { dispatch } = this.props;
				        var faultSubData = this.props.faultSubData;
				        var id = e.pId;
				        var that = this;
				        for (var i = 0; i < faultSubData.length; i++) {
				            var pid = faultSubData[i].pId;
				            if (id == pid) {
				                that.setState({ parentIndex: i });
				            };
				        };
				        $("#knowledgeFaultBigClass").find(".rw-input").text(e.pName);
				        $("#knowledgeFaultSmallClass").find(".rw-input").text("请选择");
				        dispatch(dictActions.setFaultSubPid(id));
				    },
				    addSubFaultTypeSelect: function(e) {
				    	const { dispatch } = this.props;
				        var faultSubData = this.props.faultSubData;
				        var id = e.cId;
				        var that = this;
				        for (var i = 0; i < faultSubData.length; i++) {
				            var cid = faultSubData[i].cId;
				            if (id == cid) {
				                that.setState({ subIndex: i });
				            };
				        };
				        $("#knowledgeFaultSmallClass").find(".rw-input").text(e.cName);
				       
				         dispatch(dictActions.setFaultSubId(id));
				    },
				    	 back_knowledgeData:function back_knowledgeData(){ 
			 		    const { dispatch } = this.props;
					    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));
					    this.history.pushState(null,'operationManage/operationManagePage');
			            dispatch(OperationManage.get_knowledgeManagerData());
				    },
			render:function(){	
				var parents = this.props.faultSubData;
		        var parentIndex = this.state.parentIndex;
		        var parentIndexEdit = this.state.parentIndexEdit;
		        var subIndex = this.state.subIndex;
		        var subIndexEdit = this.state.subIndexEdit;
		        var list = [],list1=[];
		        var list = parents;
		        for (var i = 0; i < parents.length; i++) {
		            list1.push(parents[i].list1);
		        };
				return(
				<div className='knowledgerFaultnewBody' style={{"width":"100%","height":"100%","background":"#eef5f8"}}>
				<div className='knowledgerFaultnewBodyMid' style={{"width":"980px","height":"auto","background":"white","position":"relative","top":"20px"}}>
					<div className='knowledgerFaultnew' style={{"height":"100%"}}>							
								<div className='knowledgerNewTop'>
								  <div className='knowledgerNewTopTitle'>新建知识</div>
									   <span className='knowledgerNewTopBtn'>
										   <button className='sureknowledgerNew' onClick={this.add_knowledgeData} style={{"float":"left"}}>保存</button>
										   <button className='sureknowledgerNew' onClick={this.back_knowledgeData} style={{"float":"right","background":"gray"}}>返回</button>
									   </span>					
								</div>
								<form   style={{"height":'800px'}}>
									<div className='FaultnewFormtop1'>
										<span className='FaultnewFormtopleft'>
											<label htmlFor="user" className='newFormPlable' >故障大类<b>*</b></label>
                                               <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list} value={list[parentIndex]} textField="pName" onSelect={this.addFaultTypeSelect} onChange={this.onChangeDropDown} id="knowledgeFaultBigClass"/>
										{/*<input type="text" name="" className='faultBigClass' id="knowledgeFaultBigClass"/>*/}
										</span>
										<span className='FaultnewFormtopright'>
											<label htmlFor="user" className='newFormPlable' >故障细类<b>*</b></label>
                                                <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list1[parentIndex]} value={list1[subIndex]} textField="cName" onSelect={this.addSubFaultTypeSelect} onChange={this.onChangeDropDown} id="knowledgeFaultSmallClass"/>
										{/*<input type="text" name="userID" className='faultBigClass' id="knowledgeFaultSmallClass" />*/}
										</span>
									</div>
									<div className='FaultnewFormtop2' style={{"position":"relative","z-index":'1'}}>									     
											 <label htmlFor="user" className='newFormPlable'>主题<b>*</b></label>
											 <textarea className='textareaFaultNew' id="knowledgeTheme"></textarea>										
									</div>								
								    <div className='FaultnewFormtop2'>
											 <label htmlFor="user" className='newFormPlable'>故障现象<b>*</b></label>
											 <div  className='textareaFaultNewFatherImg'>
											   <textarea className='textareaFaultNew' id="knowledgePhenomenon"></textarea>
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg02.png'/>
											   </div>
											 </div>
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障分析<b>*</b></label>
											 <textarea className='textareaFaultNew' id="knowledgeAnalysis"></textarea>
										
									</div>
									 <div className='FaultnewFormtop2'>
											 <label htmlFor="user" className='newFormPlable'>解决步骤<b>*</b></label>
											  <div  className='textareaFaultNewFatherImg'>
											   <textarea className='textareaFaultNew' id='knowledgeSolution'></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg03.png'/>
											   
											   </div>
											 </div>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>分析总结<b>*</b></label>
											 <textarea className='textareaFaultNew' id='knowledgeAnalysisSum'></textarea>
										
									</div>
								 
								</form>
									</div>
								</div>		
					</div>
					
				)},

		});
 function mapStateToProps(state) {
	  const {knowledgeManagerData} = state.operationReducer;	
	  //故障二级联动
	  const {faultSubData,faultSubId,faultSubPid} = state.dataDictReducer;	
	  
		  return {
		    knowledgeManagerData:knowledgeManagerData,
		    faultSubId:faultSubId,
		    faultSubPid:faultSubPid,
		    faultSubData:faultSubData
		
		  }
		}
export default connect(mapStateToProps)(NewKnowledgeMangeMent)
