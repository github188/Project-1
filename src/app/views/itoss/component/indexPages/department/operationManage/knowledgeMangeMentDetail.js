import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactRouter = require('react-router');
var ReactWidgets = require('react-widgets');
import Store from '../../../../../../server/store';
import * as OperationManage from "../../../../../../actions/operation_action";
import onDblClickRow from './knowledgeManageMent';

import { connect } from 'react-redux';
var History = ReactRouter.History;

const DetailKnowledgeMangeMent = React.createClass({	
	mixins: [History],
     onDblClickRow:function(row){
     	 	const { dispatch } = this.props;
     	    dispatch(OperationManage.get_knowledgeManagerData());
			console.log('子页面的每行的数据')	
			console.log(row)				
		     $("#detailknowledgeFaultBigClass").val(row.FNAME);
		     $("#detailknowledgeFaultSmallClass").val(row.FFNAME);
		     $("#detailknowledgeTheme").val(row.THEME);
		     $("#detailknowledgePhenomenon").val(row.FAULTPHENOMENON);
		     $("#detailknowledgeAnalysis").val(row.FAULTANALYSIS);
		     $("#detailknowledgeSolution").val(row.SOLVINGSTEPS);
		     $("#detailknowledgeAnalysisSum").val(row.ANALYSISSUMMARY);
		     
		},
     // 详情页 
			 back_knowledgeData:function back_knowledgeData(){ 
			 	const { dispatch } = this.props;
			    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));
			    this.history.pushState(null,'operationManage/operationManagePage');
	            dispatch(OperationManage.get_knowledgeManagerData());
		   },   
			render:function(){	
				return(
				<div className='knowledgerFaultnewBody' style={{"width":"100%","height":"100%","background":"#eef5f8"}}>
				<div className='knowledgerFaultnewBodyMid' style={{"width":"980px","height":"auto","background":"white","position":"relative","top":"20px"}}>
					<div className='knowledgerFaultnew'>							
								<div className='knowledgerNewTop'>
								
								  <div className='knowledgerNewTopTitle'>知识详情</div>
								   <span className='knowledgerNewTopBtn'>
								   <button className='sureknowledgerNew' onClick={this.back_knowledgeData}>返回</button>
								   </span>					
								</div>
								<form  style={{"height":'800px'}} >
									<div className='FaultnewFormtop1'>
										<span className='FaultnewFormtopleft'>
											<label htmlFor="user" className='newFormPlable' >故障大类<b>*</b></label>
											<input type="text" name="" className='faultBigClass' id="detailknowledgeFaultBigClass" disabled={true}/>
										</span>
										<span className='FaultnewFormtopright'>
											<label htmlFor="user" className='newFormPlable' >故障细类<b>*</b></label>
											<input type="text" name="userID" className='faultBigClass' id="detailknowledgeFaultSmallClass" disabled={true} />
										</span>
									</div>
									<div className='FaultnewFormtop2'>									     
											 <label htmlFor="user" className='newFormPlable'>主题<b>*</b></label>
											 <textarea className='textareaFaultNew' id="detailknowledgeTheme" disabled={true}></textarea>										
									</div>								
								    <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障现象<b>*</b></label>
											 
											 <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id="detailknowledgePhenomenon" disabled={true}></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg02.png'/>
											   
											   </div>
											 </div>
											 
											
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障分析<b>*</b></label>
											 <textarea className='textareaFaultNew' id="detailknowledgeAnalysis" disabled={true}></textarea>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>解决步骤<b>*</b></label>
											
											  <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id='detailknowledgeSolution' disabled={true}></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg03.png'/>
											   
											   </div>
											 </div>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>分析总结<b>*</b></label>
											 <textarea className='textareaFaultNew' id='detailknowledgeAnalysisSum' disabled={true}></textarea>
										
									</div>
								 
								</form>
									</div>
								</div>		
					</div>
					
				)},

		});
 function mapStateToProps(state) {
	  const {knowledgeManagerData,faultid,faultsubid} = state.operationReducer;	

		  return {
		    knowledgeManagerData:knowledgeManagerData,
		    faultid:faultid,
		    faultsubid:faultsubid

		
		  }
		}
export default connect(mapStateToProps)(DetailKnowledgeMangeMent)
