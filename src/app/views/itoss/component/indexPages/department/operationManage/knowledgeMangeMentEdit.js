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

const EditKnowledgeMangeMent = React.createClass({	
	             mixins: [History],			
                  getInitialState: function () {
			        return {
			            parentIndex: 0,
			            subIndex:0,
			            parentIndexEdit:0,
			            subIndexEdit:0  
			        }
			    },
               //编辑知识库的 保存
			 edit_knowledgeData:function edit_knowledgeData(){
			   	const { dispatch } = this.props;
			    var knowledgeManagerData = this.props.knowledgeManagerData;
			    var faultSubData = this.props.faultSubData;
			 
		    	var knowledgeFaultBigClass = $("#editknowledgeFaultBigClass").find(".rw-input").text();
		    
		    	var knowledgeFaultSmallClass = $("#editknowledgeFaultSmallClass").find(".rw-input").text();		    
		    	var knowledgeTheme = $("#editknowledgeTheme").val();
		    	var knowledgePhenomenon = $("#editknowledgePhenomenon").val();
		    	var knowledgeAnalysis = $("#editknowledgeAnalysis").val();
		    	var knowledgeSolution = $("#editknowledgeSolution").val();
		    	var knowledgeAnalysisSum = $("#editknowledgeAnalysisSum").val();
		    	var knowledgeReviewDesc = $("#editknowledgeReviewDesc").val();
				    
		    	var param =[knowledgeFaultBigClass,knowledgeFaultSmallClass,knowledgeTheme,knowledgePhenomenon,knowledgeAnalysis,knowledgeSolution,knowledgeAnalysisSum,knowledgeReviewDesc]
                 console.log('编辑页面的传值')
                 console.log(param)
		        dispatch(OperationManage.edit_knowledgeData(param)); 
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
				        $("#editknowledgeFaultBigClass").find(".rw-input").text(e.pName);
				        $("#editknowledgeFaultSmallClass").find(".rw-input").text("请选择");
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
				        $("#editknowledgeFaultSmallClass").find(".rw-input").text(e.cName);
				       
				         dispatch(dictActions.setFaultSubId(id));
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
								
								  <div className='knowledgerNewTopTitle'>编辑知识</div>
								   <span className='knowledgerNewTopBtn'>
								   <button className='sureknowledgerNew' onClick={this.edit_knowledgeData}>保存</button>
								   </span>					
								</div>
								<form  style={{"height":'800px'}}>
									<div className='FaultnewFormtop1'>
										<span className='FaultnewFormtopleft'>
											<label htmlFor="user" className='newFormPlable' >故障大类<b>*</b></label>
                                               <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list} value={list[parentIndex]} textField="pName" onSelect={this.addFaultTypeSelect} onChange={this.onChangeDropDown} id="editknowledgeFaultBigClass"/>
											
										{/*<input type="text" name="" className='faultBigClass' id="knowledgeFaultBigClass"/>*/}
										</span>
										<span className='FaultnewFormtopright'>
											<label htmlFor="user" className='newFormPlable' >故障细类<b>*</b></label>
                                                <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list1[parentIndex]} value={list1[subIndex]} textField="cName" onSelect={this.addSubFaultTypeSelect} onChange={this.onChangeDropDown} id="editknowledgeFaultSmallClass"/>
											
										{/*<input type="text" name="userID" className='faultBigClass' id="knowledgeFaultSmallClass" />*/}
										</span>
									</div>
									<div className='FaultnewFormtop2'>									     
											 <label htmlFor="user" className='newFormPlable'>主题<b>*</b></label>
											 <textarea className='textareaFaultNew' id="editknowledgeTheme"></textarea>										
									</div>								
								    <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障现象<b>*</b></label>
											 
											 <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id="editknowledgePhenomenon"></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg02.png'/>
											   
											   </div>
											 </div>
											 
											
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障分析<b>*</b></label>
											 <textarea className='textareaFaultNew' id="editknowledgeAnalysis"></textarea>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>解决步骤<b>*</b></label>
											
											  <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id='editknowledgeSolution'></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg03.png'/>
											   
											   </div>
											 </div>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>分析总结<b>*</b></label>
											 <textarea className='textareaFaultNew' id='editknowledgeAnalysisSum'></textarea>
										
									</div>
									{/*<div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>审核说明<b>*</b></label>
											 <textarea className='textareaFaultNew' id='editknowledgeReviewDesc'></textarea>
										
								</div>*/}
								 
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
export default connect(mapStateToProps)(EditKnowledgeMangeMent)
