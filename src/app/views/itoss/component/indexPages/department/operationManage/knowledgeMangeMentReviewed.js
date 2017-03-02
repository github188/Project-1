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
   

const ReviewedKnowledgeMangeMent = React.createClass({		
	     mixins: [History],
         getInitialState: function () {
			        return {
			            parentIndex: 0,
			            subIndex:0,
			            parentIndexEdit:0,
			            subIndexEdit:0  
			        }
			    },
			
	             componentDidMount:function(){
					 			 $(".reviewedknowledgerclick").click(function(){
	                    	       $('.reviewedknowledgerList').toggle(100)
							    });
							
					 			
				},
     //审核知识库通过
			 reviewedPass_knowledgeData:function reviewedPass_knowledgeData(){
			 	$(".reviewedKnowledgeDetailsPassTxt").css("display","block")
			 	$("#reviewedPass_knowledgeDataTxt").text('审核通过')
			   	const { dispatch } = this.props;		    
		    	var putknowledgeFaultBigClass = $("#reviewedknowledgeFaultBigClass").find(".rw-input").text();
		    	var putknowledgeFaultSmallClass = $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text();
		    	var putknowledgeTheme = $("#reviewedknowledgeTheme").val();
		    	var putknowledgePhenomenon = $("#reviewedknowledgePhenomenon").val();
		    	var putknowledgeAnalysis = $("#reviewedknowledgeAnalysis").val();
		    	var putknowledgeSolution = $("#reviewedknowledgeSolution").val();
		    	var putknowledgeAnalysisSum = $("#reviewedknowledgeAnalysisSum").val();
		    	
		    
			    var param =[putknowledgeFaultBigClass,putknowledgeFaultSmallClass,putknowledgeTheme,putknowledgePhenomenon,putknowledgeAnalysis,putknowledgeSolution,putknowledgeAnalysisSum]
	            console.log('审核通过的值')
	            console.log(param)
		        dispatch(OperationManage.reviewedPass_knowledgeData(param));
						
			    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));				

			    this.history.pushState(null,'operationManage/operationManagePage');
	            dispatch(OperationManage.get_knowledgeManagerData());
			    
		    },
		     //不通过审核知识库通过
			 reviewedNo_knowledgeData:function reviewedNo_knowledgeData(){
			 	$("#noPassReviewedknowledgerWhy").modal("show")   
			 	$(".reviewedKnowledgeDetailsNoPassTxt").css("display","block")
			 	 	$("#reviewedNo_knowledgeDataTxt").text('审核未通过')
		    },
		    //模态框确定
		    noPassReviewedknowledgerSure:function(){
		    	
		    	const { dispatch } = this.props;		    
		    	var putknowledgeFaultBigClass = $("#reviewedknowledgeFaultBigClass").find(".rw-input").text();
		    	var putknowledgeFaultSmallClass = $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text();
		    	var putknowledgeTheme = $("#reviewedknowledgeTheme").val();
		    	var putknowledgePhenomenon = $("#reviewedknowledgePhenomenon").val();
		    	var putknowledgeAnalysis = $("#reviewedknowledgeAnalysis").val();
		    	var putknowledgeSolution = $("#reviewedknowledgeSolution").val();
		    	var putknowledgeAnalysisSum = $("#reviewedknowledgeAnalysisSum").val();
		    	var noPassReviewedknowledgerWhyDetail=$("#noPassReviewedknowledgerWhyDetail").val();
//		    	REVIEWDESC
			    var param =[putknowledgeFaultBigClass,putknowledgeFaultSmallClass,putknowledgeTheme,putknowledgePhenomenon,putknowledgeAnalysis,putknowledgeSolution,putknowledgeAnalysisSum,noPassReviewedknowledgerWhyDetail]	      
		        dispatch(OperationManage.reviewedNo_knowledgeData(param));
			    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));				
				$("#noPassReviewedknowledgerWhy").modal("hide")  
			    this.history.pushState(null,'operationManage/operationManagePage');
	            dispatch(OperationManage.get_knowledgeManagerData());
		    
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
				        $("#reviewedknowledgeFaultBigClass").find(".rw-input").text(e.pName);
				        $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text("请选择");
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
				        $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text(e.cName);
				       
				         dispatch(dictActions.setFaultSubId(id));
				    },
		     back_knowledgeData:function back_knowledgeData(){ 
			 		const { dispatch } = this.props;
			    dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));
			    this.history.pushState(null,'operationManage/operationManagePage');
	            dispatch(OperationManage.get_knowledgeManagerData());
	             dispatch(OperationManage.setFlowPicData("KnowledgeManageMent"));	
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
				<div className='reviewedknowledgerFaultnewBody' style={{"width":"100%","height":"100%","background":"#eef5f8"}}>
				<div className='reviewedknowledgerFaultnewBodyMid' style={{"width":"980px","height":"auto","background":"white","position":"relative","top":"20px"}}>
					<div className='reviewedKnowledgerFaultnew' style={{"height":"100%"}}>
								
								<div className='reviewedKnowledgerNewTop'>
								
								  <div className='knowledgerNewTopTitle'>知识详情</div>
								   <span className='knowledgerNewTopBtn'>
									   <div className='reviewedknowledger' >
									     	<span className='reviewedknowledgerclick'>审核知识</span>
										   	<ul className='reviewedknowledgerList'>
										   		<li className='passReviewedknowledgerList' onClick={this.reviewedPass_knowledgeData}>审核通过</li>
										   		<li className='noPassReviewedknowledgerList' onClick={this.reviewedNo_knowledgeData}>审核不通过</li>
										   	</ul>
									   </div>
								       <button className='sureknowledgerNew' onClick={this.back_knowledgeData}>返回</button>
									   
								   </span>		

								</div>
										<form id="fileupload" action="//jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data">
									<div className='FaultnewFormtop1'>
										<span className='FaultnewFormtopleft'>
											<label htmlFor="user" className='newFormPlable' >故障大类<b>*</b></label>
                                              <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list} value={list[parentIndex]} textField="pName" onSelect={this.editFaultTypeSelect} onChange={this.onChangeDropDown} id="reviewedknowledgeFaultBigClass" disabled={true} />
											
										 {/*<input type="text" name="" className='faultBigClass' id="putknowledgeFaultBigClass"/>*/}
										</span>
										<span className='FaultnewFormtopright'>
											<label htmlFor="user" className='newFormPlable' >故障细类<b>*</b></label>
                                              <ReactWidgets.DropdownList className="dataDictDropDown faultBigClass" data={list1[parentIndex]} value={list1[subIndex]} textField="cName" onSelect={this.editSubFaultTypeSelect} onChange={this.onChangeDropDown} id="reviewedknowledgeFaultSmallClass"  disabled={true} />
											
										 {/* <input type="text" name="userID" className='faultBigClass' id="putknowledgeFaultSmallClass" />*/}
										</span>
									</div>
									<div className='FaultnewFormtop2'>									     
											 <label htmlFor="user" className='newFormPlable'>主题<b>*</b></label>
											 <textarea className='textareaFaultNew' id="reviewedknowledgeTheme" 	disabled={true}></textarea>										
									</div>								
								    <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障现象<b>*</b></label>
											 
											 <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id="reviewedknowledgePhenomenon" 	disabled={true}></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg02.png'/>
											   
											   </div>
											 </div>
											 
											
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>故障分析<b>*</b></label>
											 <textarea className='textareaFaultNew' id="reviewedknowledgeAnalysis" 	disabled={true}></textarea>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>解决步骤<b>*</b></label>
											
											  <div  className='textareaFaultNewFatherImg'>
											 
											   <textarea className='textareaFaultNew' id='reviewedknowledgeSolution' 	disabled={true}></textarea>
											 
											   <div className='textareaFaultNewImg'>
											   	     <img src='img/lefticon/knowledgeimg03.png'/>
											   
											   </div>
											 </div>
										
									</div>
									 <div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>分析总结<b>*</b></label>
											 <textarea className='textareaFaultNew' id='reviewedknowledgeAnalysisSum' 	disabled={true}></textarea>
										
									</div>
								 
								</form>
								<div className='putKnowledgeDetailsPass reviewedKnowledgeDetailsPassTxt' style={{"display":"none"}}>
								 <span className='putKnowledgeDetailsPassTxt' id="reviewedPass_knowledgeDataTxt"></span>
								</div>
								<div className='putKnowledgeDetailsPass reviewedKnowledgeDetailsNoPassTxt' style={{"display":"none"}}>
								 <span className='putKnowledgeDetailsPassTxt' id="reviewedNo_knowledgeDataTxt"></span>
								</div>
								 
							
								 
					              </div>
						</div>	
						 <div className="modal fade" id="noPassReviewedknowledgerWhy" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		                    <div className="modal-dialog">
		                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
		                            <div className="modal-header" style={{"background":"#64c4dd"}}>
		                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
		                                <h4 className="modal-title" id="myModalLabel">审核说明</h4>
		                            </div>
		                            <div className="modal-body">
		                                <div style={{"width":"400px"}}>
		                                    <form className="form-horizontal" role="form" style={{"height":'800px'}}>
			                                    <div className="form-group">
			                                        <label for="noPassReviewedknowledgerWhyDetail" className="col-sm-6 control-label"style={{"textAlign":"left","width":'100px'}}>未通过原因</label>
			                                        <b style={{"color":"red","display":"inline-block","margin-left":"-110px","margin-top":"10px"}}>*</b>
			                                        <div className="col-sm-6">
			                                             <textarea className="form-control" id="noPassReviewedknowledgerWhyDetail" name="noPassReviewedknowledgerWhyDetail" placeholder="" style={{"width":"260px","height":"100px"}}>
			                                               就是不通过
			                                            </textarea>
			                                        </div>
			                                        <p id="" style={{"position":"absolute","left":"358px","color":"red"}}></p>
			                                    </div>
			                                  </form>
		                                </div>
		                            </div>
		                            <div className="modal-footer">
		                                <button type="button" className="btn btn-success" onClick={this.noPassReviewedknowledgerSure}>确定</button>
		                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
		                            </div>
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
export default connect(mapStateToProps)(ReviewedKnowledgeMangeMent)
