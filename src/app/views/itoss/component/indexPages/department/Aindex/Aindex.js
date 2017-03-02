import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import AssetStatus from './Asset-status/AssetStatus';
import antd from 'antd';
import { Progress } from 'antd';
//import EquipmentToday from './Equipment-today/EquipmentToday';
//import Rank from './Rank/Rank';
//import CompletionUnit from './Completion-unit/CompletionUnit';
//import AssetStatus  from './AssetStatus/AssetStatus';
import SingleClass from './Single-class/SingleClass';
//import EquipmentTest from './Equipment-test/EquipmentTest';
import ComplaintsRankingQuarter from '../operationManage/complaintsRanking/complaintsRankingQuarter';
import ComplaintsRankingWeek from '../operationManage/complaintsRanking/complaintsRankingWeek';
import ComplaintsRankingMonth from '../operationManage/complaintsRanking/complaintsRankingMonth';
import ComplaintsRankingYear from '../operationManage/complaintsRanking/complaintsRankingYear';

import SatisfactionScoreQuarter from '../operationManage/satisfactionScore/satisfactionScoreQuarter';
import SatisfactionScoreWeek from '../operationManage/satisfactionScore/satisfactionScoreWeek';
import SatisfactionScoreMonth from '../operationManage/satisfactionScore/satisfactionScoreMonth';
import SatisfactionScoreYear from '../operationManage/satisfactionScore/satisfactionScoreYear';

import * as OperationManage from "../../../../../../actions/operation_action";
import Store from '../../../../../../server/store';
import { connect } from 'react-redux';
const Aindex = React.createClass({
	              getInitialState:function(){
							return{
								pageScore:'SatisfactionScoreMonth',
								pageRanking:'ComplaintsRankingMonth'
							}
					},
					componentWillMount:function(){
					          		const { dispatch } = this.props;
				                      var unit = 'unit'
			                    	  var week = 'week'
			                    	  var month ='month'
			                    	  var quarter ='quarter'
			                    	  var year ='year'
									  var paramWeek = [unit,week];
									  var paramMonth = [unit,month];
									  var paramQuarter = [unit,quarter];
									  var paramYear = [unit,year];
								dispatch(OperationManage.get_customerComplaintsData(paramMonth))	 		
						 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))
						 	   var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
						      var customerComplaintsData=this.props.customerComplaintsData
							},
								componentDidMount:function(){
									      var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
									       console.log('初始值222222最终页面，首页 customeSatisfactionScoreData')
											 	   console.log(customeSatisfactionScoreData)
									           	$(".CompletionUnitTopMonthScore").css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'})
								                    $(".CompletionUnitTopQuarterScore").hover(function(){    
													      $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
													   })
								                    $(".CompletionUnitTopWeekScore").hover(function(){
													     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
													    })
								                    $(".CompletionUnitTopMonthScore").hover(function(){
													     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
													   
								                    })
								                       $(".CompletionUnitTopYearScore").hover(function(){
													     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
													     })
								                   var customerComplaintsData=this.props.customerComplaintsData
										               	$(".CompletionUnitTopMonthRanking").css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'})
									                    $(".CompletionUnitTopQuarterRanking").hover(function(){    
														      $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
														   })
									                    $(".CompletionUnitTopWeekRanking").hover(function(){
														     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
														    })
									                    $(".CompletionUnitTopMonthRanking").hover(function(){
														     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
														   
									                    })
									                       $(".CompletionUnitTopYearRanking").hover(function(){
														     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
														   
									                    })
				  $("#SatisfactionRankIndex0").html(customeSatisfactionScoreData[0].NAME) 
                   $("#SatisfactionRankIndex1").html(customeSatisfactionScoreData[1].NAME)  
                   $("#SatisfactionRankIndex2").html(customeSatisfactionScoreData[2].NAME)  
                   $("#SatisfactionRankIndex3").html(customeSatisfactionScoreData[3].NAME)  
                   $("#SatisfactionRankIndex4").html(customeSatisfactionScoreData[4].NAME)  
                   $("#SatisfactionRankIndex5").html(customeSatisfactionScoreData[5].NAME)  
                   $("#SatisfactionRankIndex6").html(customeSatisfactionScoreData[6].NAME)  
                   $("#SatisfactionRankIndex7").html(customeSatisfactionScoreData[7].NAME)        
										},
							conFunctionScore:function(){
									const { dispatch } = this.props;
									var pageScore = this.state.pageScore;			
									switch(pageScore){
											case 'SatisfactionScoreWeek':
											  return(<SatisfactionScoreWeek
											  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
											   	key='SatisfactionScoreWeek'/>)
										 	   break;
							   		 	   case 'SatisfactionScoreQuarter':
										 	    return(<SatisfactionScoreQuarter
											  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
										 	    	key='SatisfactionScoreQuarter'/>)
											 	break;
											case 'SatisfactionScoreMonth':
												 return(<SatisfactionScoreMonth
											  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
											  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
												 	key='SatisfactionScoreMonth'/>)
												 break;
											case 'SatisfactionScoreYear':
												 return(<SatisfactionScoreYear
											  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
												 	key='SatisfactionScoreYear'/>)
												 break;	 
												 };	
						},
						toggleScore:function(pageScore){
							  this.setState({pageScore:pageScore})
					          const { dispatch } = this.props;
					             var unit = 'unit'
				               var week = 'week'
				              var month ='month'
				               var quarter ='quarter'
				               var year ='year'
										  var paramWeek = [unit,week];
										  var paramMonth = [unit,month];
										  var paramQuarter = [unit,quarter];
										  var paramYear = [unit,year];
								switch(pageScore){
								  case "SatisfactionScoreWeek":
							 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramWeek))
				                     break;	
				                  case "SatisfactionScoreMonth":
							 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))
				                     break;	
				                  case "SatisfactionScoreQuarter":
							 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramQuarter))
				                     break;	
				                  case "SatisfactionScoreYear":
							 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramYear))
				                     break;	               
								             };
						      },	
						      			conFunctionRanking:function(){
											const { dispatch } = this.props;
											var pageRanking = this.state.pageRanking;			
											switch(pageRanking){
													case 'ComplaintsRankingQuarter':
													  return(<ComplaintsRankingQuarter
													  	customerComplaintsData={this.props.customerComplaintsData}
													   	key='ComplaintsRankingQuarter'/>)
												 	   break;
									   		 	   case 'ComplaintsRankingWeek':
												 	    return(<ComplaintsRankingWeek
													  	customerComplaintsData={this.props.customerComplaintsData}
												 	    	key='ComplaintsRankingWeek'/>)
													 	break;
													case 'ComplaintsRankingMonth':
														 return(<ComplaintsRankingMonth
													  	customerComplaintsData={this.props.customerComplaintsData}
														 	key='ComplaintsRankingMonth'/>)
														 break;
													case 'ComplaintsRankingYear':
														 return(<ComplaintsRankingYear
													  	customerComplaintsData={this.props.customerComplaintsData}
														 	key='ComplaintsRankingYear'/>)
														 break;	 
														 };	
											},
												toggleRanking:function(pageRanking){
												  this.setState({pageRanking:pageRanking})
										          const { dispatch } = this.props;
										             var unit = 'unit'
									               var week = 'week'
									               var month ='month'
									               var quarter ='quarter'
									              var year ='year'
															  var paramWeek = [unit,week];
															  var paramMonth = [unit,month];
															  var paramQuarter = [unit,quarter];
															  var paramYear = [unit,year];
													switch(pageRanking){
													  case "ComplaintsRankingQuarter":
														dispatch(OperationManage.get_customerComplaintsData(paramQuarter))	 		
									                     break;	
									                  case "ComplaintsRankingWeek":
														dispatch(OperationManage.get_customerComplaintsData(paramWeek))	 		
									                     break;	
									                  case "ComplaintsRankingMonth":
														dispatch(OperationManage.get_customerComplaintsData(paramMonth))	 		
									                     break;	
									                  case "ComplaintsRankingYear":
														dispatch(OperationManage.get_customerComplaintsData(paramYear))	 		
									                     break;	               
													             };
											      },	
			render:function(){
				   var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
				 var customerComplaintsData=this.props.customerComplaintsData
				return(
						<div className='index-page'>
							<div className='leftAindex'>
							<div className = 'Asset-status'>
							<p className='Asset-status-top'></p>
							<p className ='Asset-status-cnt'>
							</p>
								<ul className="Asset-status-bottom">
									<li >
										<span className="Asset-status-roll green"></span> 
										<span >在线</span>
										<span ><input type="text" id="zaixian" defaultValue="33" />
										%</span>
									</li>			
									<li>
										<span className="Asset-status-roll pink"></span>
										<span >库存</span>
										<span ><input type="text" id='kucun' defaultValue="33" />%
										</span>
									</li>
									<li className='Asset-status-bottom-last'>
										<span className="Asset-status-roll purple"></span>
										<span >维修</span>
										<span ><input type="text" id='weixiu' defaultValue="34"/>%
										</span>
									</li>		
								</ul>	
							
						</div>	
							<div className = 'Satisfaction-ranking'>
			    						<p className='Satisfaction-ranking-top'></p>
												<div className ='Satisfaction-ranking-cnt'>
													<ul className='Satisfaction-ranking-cnt-left'>
															<li id="SatisfactionRankIndex0"></li>
															<li id="SatisfactionRankIndex1"></li>
															<li id="SatisfactionRankIndex2"></li>
															<li id="SatisfactionRankIndex3"></li>
															<li id="SatisfactionRankIndex4"></li>
															<li id="SatisfactionRankIndex5"></li>
															<li id="SatisfactionRankIndex6"></li>
															<li id="SatisfactionRankIndex7"></li>
													</ul>
													<div className='Satisfaction-ranking-cnt-right'> 
			                        <Progress percent={ parseFloat(customeSatisfactionScoreData[0].COUNT)} strokeWidth={15} />
													    <Progress percent={parseFloat(customeSatisfactionScoreData[1].COUNT)} strokeWidth={15} status="active" />
													    <Progress percent={parseFloat(customeSatisfactionScoreData[2].COUNT)} strokeWidth={15}  />
													    <Progress percent={parseFloat(customeSatisfactionScoreData[3].COUNT)} strokeWidth={15} status="active"/>
															<Progress percent={parseFloat(customeSatisfactionScoreData[4].COUNT)} strokeWidth={15} status="active"/>
															<Progress percent={parseFloat(customeSatisfactionScoreData[5].COUNT)} strokeWidth={15} status="active"/>
													    <Progress percent={parseFloat(customeSatisfactionScoreData[6].COUNT)} strokeWidth={15}  />
													    <Progress percent={parseFloat(customeSatisfactionScoreData[7].COUNT)} strokeWidth={15}  />
													    
				                    	         {/*  <Progress percent={90} strokeWidth={15} />
													        <Progress percent={80} strokeWidth={15} status="active" />
													        <Progress percent={59} strokeWidth={15} status="active" />
													        <Progress percent={50} strokeWidth={15} />
																<Progress percent={40} strokeWidth={15} />
															<Progress percent={30} strokeWidth={15} />
													        <Progress percent={20} strokeWidth={15} status="active" />*/}
													</div>
												</div> 
									</div>		
							
								<SingleClass key='SingleClass1'/>
							</div>
							<div className='rightAindex'>
								 				 <div className = 'Completion-unit' id="RightCompletionUnit">
											 			{/*<CompletionUnitTopList/>*/}
											 				<div className='customeSatisfactionScore'>
										    			 		      <div className='CompletionUnitTopList'>
														      		      <span className="CompletionUnitTopListTxt">客户满意度评分</span>
																	         	<ul >
																	         		<li className='CompletionUnitTopWeekScore'  onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreWeek')} >本周</li>
																	         		<li className='CompletionUnitTopMonthScore' onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreMonth')} >本月</li>
																	         		<li className='CompletionUnitTopQuarterScore' onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreQuarter')} >本季度</li>
																	         		<li className='CompletionUnitTopYearScore' onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreYear')} >本年度</li>
																	         	</ul>
																	       </div>  
																    		<div className = 'Completion-unit-top'>
																				 	{this.conFunctionScore()}			
																		    </div>	
										    			 	</div>
											 				
															<ul className="Completion-unit-bottom">
																	<li >
																		<span className="Completion-unit-bottom-grey"></span> 
																		&nbsp;
																		<span >工单总数</span>
																	</li>	
																	
																	<li>
																		<span className="Completion-unit-bottom-pink"></span>
																		&nbsp;<span >工单完成数</span>
																	</li>
																	
															</ul>	
										</div>		
									<div className ='Equipment-test' id="complaintsRankingClass">
						    					<div className='customeComplaintsRanking'>
										    			 		    <div className='CompletionUnitTopList'>
													      		      <span className="CompletionUnitTopListTxt">客户投诉量排名</span>
																         	<ul >
																         		<li className='CompletionUnitTopWeekRanking'  onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingWeek')} >本周</li>
																         		<li className='CompletionUnitTopMonthRanking' onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingMonth')} >本月</li>
																         		<li className='CompletionUnitTopQuarterRanking' onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingQuarter')} >本季度</li>			         		
																         		<li className='CompletionUnitTopYearRanking'  onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingYear')} >本年度</li>
																         	</ul>
																       </div>  
															    		<div className = 'Completion-unit-top'>
																			 	{this.conFunctionRanking()}			
																	    </div>	
										    			 	</div>
									</div>	
								
							</div>								
						</div>
					)
			},	
			
		})



//export default Aindex
function mapStateToProps(state) {
	  const {
	  	customerComplaintsData,
	  	customeSatisfactionScoreData,
	  	SLAReachRateData
	  } = state.operationReducer;
		  return {
			customerComplaintsData:customerComplaintsData,
			customeSatisfactionScoreData:customeSatisfactionScoreData,
			SLAReachRateData:SLAReachRateData
		  }
		}
export default connect(mapStateToProps)(Aindex)

