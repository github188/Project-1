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
			
     onChangeDropDown:function () {

    },
     //发布知识库
			 put_knowledgeData:function put_knowledgeData(){
			   	const { dispatch } = this.props;			    
		    	var putknowledgeFaultBigClass = $("#putknowledgeFaultBigClass").find(".rw-input").text();
		    	var putknowledgeFaultSmallClass = $("#putknowledgeFaultSmallClass").find(".rw-input").text();
		    	var putknowledgeTheme = $("#putknowledgeTheme").val();
		    	var putknowledgePhenomenon = $("#putknowledgePhenomenon").val();
		    	var putknowledgeAnalysis = $("#putknowledgeAnalysis").val();
		    	var putknowledgeSolution = $("#putknowledgeSolution").val();
		    	var putknowledgeAnalysisSum = $("#putknowledgeAnalysisSum").val();
		    	
		    
		    var param =[putknowledgeFaultBigClass,putknowledgeFaultSmallClass,putknowledgeTheme,putknowledgePhenomenon,putknowledgeAnalysis,putknowledgeSolution,putknowledgeAnalysisSum]
            console.log('发布知识库点击事件的值')
            console.log(param)
		        dispatch(OperationManage.put_knowledgeData(param));

			    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));
			    this.history.pushState(null,'operationManage/operationManagePage');
				
	            dispatch(OperationManage.get_knowledgeManagerData());
	            //   dispatch(OperationManage.setFaultid(faultid));
                //	 dispatch(OperationManage.setFaultsubid(faultsubid));
		    },
		    //编辑下拉框
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
				        $("#putknowledgeFaultBigClass").find(".rw-input").text(e.pName);
				        $("#putknowledgeFaultSmallClass").find(".rw-input").text("请选择");
//				        this.props.setFaultSubPid(id);
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
				        $("#putknowledgeFaultSmallClass").find(".rw-input").text(e.cName);
				       
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
				<div className='putknowledgerFaultnewBody' style={{"width":"100%","height":"100%","background":"#eef5f8"}}>
				<div className='putknowledgerFaultnewBodyMid' style={{"width":"980px","height":"100%","background":"white","position":"relative","top":"20px"}}>
					<div className='putKnowledgerFaultnew'>
								
								<div className='putKnowledgerNewTop'>
								
								  <div className='knowledgerNewTopTitle'>知识详情</div>
								    <span className='knowledgerNewTopBtn'>
								   		<div className='putknowledger' onClick={this.put_knowledgeData}>
									     	    <span className='putknowledgerclick'>发布知识</span>
										</div>
								         <button className='sureknowledgerNew' onClick={this.back_knowledgeData}>返回</button>
								   
								   </span>
								
								</div>
										<form>
									<div className='FaultnewFormtop1'>
										<span className='FaultnewFormtopleft'>
											<label htmlFor="user" className='newFormPlable' >故障大类<b>*</b></label>
                                               <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list} value={list[parentIndex]} textField="pName" onSelect={this.editFaultTypeSelect} onChange={this.onChangeDropDown} id="putknowledgeFaultBigClass" disabled={true}/>
										{/*<input type="text" name="" className='faultBigClass' id="putknowledgeFaultBigClass"/>*/}
										</span>
										<span className='FaultnewFormtopright'>
											<label htmlFor="user" className='newFormPlable' >故障细类<b>*</b></label>
                                                <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list1[parentIndex]} value={list1[subIndex]} textField="cName" onSelect={this.editSubFaultTypeSelect} onChange={this.onChangeDropDown} id="putknowledgeFaultSmallClass" disabled={true}/>
										{/*<input type="text" name="userID" className='faultBigClass' id="putknowledgeFaultSmallClass" />*/}
										</span>
									</div>
									<div className='FaultnewFormtop2'>									     
											 <label htmlFor="user" className='newFormPlable'>主题<b>*</b></label>
											 <textarea className='textareaFaultNew' id="putknowledgeTheme" disabled={true}></textarea>										
									</div>								
								    <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障现象<b>*</b></label>
											 
											 <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id="putknowledgePhenomenon" disabled={true}></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg02.png'/>
											   
											   </div>
											 </div>
											 
											
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障分析<b>*</b></label>
											 <textarea className='textareaFaultNew' id="putknowledgeAnalysis" disabled={true}></textarea>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>解决步骤<b>*</b></label>
											
											  <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id='putknowledgeSolution' disabled={true}></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg03.png'/>
											   
											   </div>
											 </div>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>分析总结<b>*</b></label>
											 <textarea className='textareaFaultNew' id='putknowledgeAnalysisSum' disabled={true}></textarea>
										
									</div>
								 
								</form>
								<div className='putKnowledgeDetailsPass' style={{"display":"none"}}>
								 <span className='putKnowledgeDetailsPassTxt'>审核已经通过</span>
								</div>
					              </div>
						</div>		
					</div>
					
				)},

		});
 function mapStateToProps(state) {
	  const {knowledgeManagerData,faultid,faultsubid} = state.operationReducer;	
	   const {faultSubData,faultSubId,faultSubPid} = state.dataDictReducer;	
		  return {
		    knowledgeManagerData:knowledgeManagerData,
		    faultid:faultid,
		    faultsubid:faultsubid,
		    faultSubData,
		    faultSubId,
		    faultSubPid
		
		  }
		}
export default connect(mapStateToProps)(NewKnowledgeMangeMent)
