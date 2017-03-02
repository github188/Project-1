import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import SLAReachRate from './performanceManageMentSLAReachRate';
//import CustomeSatisfactionScore from './performanceManageMentCustomeSatisfactionScore';
//import CustomeComplaintsRanking from './performanceManageMentCustomeComplaintsRanking';

import SLAReachRateQuarter from './SLAReachRate/SLAReachRateQuarter';
import SLAReachRateWeek from './SLAReachRate/SLAReachRateWeek';
import SLAReachRateMonth from './SLAReachRate/SLAReachRateMonth';
import SLAReachRateYear from './SLAReachRate/SLAReachRateYear';

import SatisfactionScoreQuarter from './satisfactionScore/satisfactionScoreQuarter';
import SatisfactionScoreWeek from './satisfactionScore/satisfactionScoreWeek';
import SatisfactionScoreMonth from './satisfactionScore/satisfactionScoreMonth';
import SatisfactionScoreYear from './satisfactionScore/satisfactionScoreYear';

import ComplaintsRankingQuarter from './complaintsRanking/complaintsRankingQuarter';
import ComplaintsRankingWeek from './complaintsRanking/complaintsRankingWeek';
import ComplaintsRankingMonth from './complaintsRanking/complaintsRankingMonth';
import ComplaintsRankingYear from './complaintsRanking/complaintsRankingYear';
import * as OperationManage from "../../../../../../actions/operation_action";
import Store from '../../../../../../server/store';
import { connect } from 'react-redux';
var PerformanceManageMent = React.createClass({
		           getInitialState:function(){
							return{
								pageSla:'SLAReachRateMonth',
								pageScore:'SatisfactionScoreMonth',
								pageRanking:'ComplaintsRankingMonth'
							}
					},
				componentDidMount:function(){
							$(".CompletionUnitTopMonthSla").css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'})
		                    $(".CompletionUnitTopQuarterSla").hover(function(){    
							      $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
							   })
		                    $(".CompletionUnitTopWeekSla").hover(function(){
							     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
							    })
		                    $(".CompletionUnitTopMonthSla").hover(function(){
							     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
							   
		                    })
		                       $(".CompletionUnitTopYearSla").hover(function(){
							     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
							   
		                    })
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
                   },
  toggleSla:function(pageSla){
			  this.setState({pageSla:pageSla})
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
			  
				switch(pageSla){
				  case "SLAReachRateQuarter":
					dispatch(OperationManage.get_SLAReachRateData(paramQuarter));
                     break;	
                  case "SLAReachRateWeek":
				      dispatch(OperationManage.get_SLAReachRateData(paramWeek));
                     break;	
                  case "SLAReachRateMonth":
					dispatch(OperationManage.get_SLAReachRateData(paramMonth));
                     break;	            
                  case "SLAReachRateYear":
					 dispatch(OperationManage.get_SLAReachRateData(paramYear));
                     break;	
				             };
		      },	
			conFunctionSla:function(){
				const { dispatch } = this.props;
				var pageSla = this.state.pageSla;			
				switch(pageSla){
						case 'SLAReachRateQuarter':
						  return(<SLAReachRateQuarter
						  	SLAReachRateData={this.props.SLAReachRateData}
						   	key='SLAReachRateQuarter'/>)
					 	   break;
		   		 	   case 'SLAReachRateWeek':
					 	    return(<SLAReachRateWeek
						  	SLAReachRateData={this.props.SLAReachRateData}
					 	    	key='SLAReachRateWeek'/>)
						 	break;
						case 'SLAReachRateMonth':
							 return(<SLAReachRateMonth
						  	SLAReachRateData={this.props.SLAReachRateData}
							 	key='SLAReachRateMonth'/>)
							 break;
						case 'SLAReachRateYear':
							 return(<SLAReachRateYear
						  	SLAReachRateData={this.props.SLAReachRateData}
							 	key='SLAReachRateYear'/>)
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
							 	key='SatisfactionScoreMonth'/>)
							 break;
						case 'SatisfactionScoreYear':
							 return(<SatisfactionScoreYear
						  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
							 	key='SatisfactionScoreYear'/>)
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
								     routeSlaPage:function(){
								        this.props.routeSlaPage();
								     },
								        routeSlaPageMonth:function(){
								        this.props.routeSlaPageMonth();
								    },
								         routeSlaPageQuarter:function(){
								        this.props.routeSlaPageQuarter();
								    },
								         routeSlaPageYear:function(){
								        this.props.routeSlaPageYear();
								    },
								    //mayidu
								      routeSatisfactionPageWeek:function(){
								        this.props.routeSatisfactionPageWeek();
								    },
								        routeSatisfactionPageMonth:function(){
								        this.props.routeSatisfactionPageMonth();
								    },
								        routeSatisfactionPageQuarter:function(){
								        this.props.routeSatisfactionPageQuarter();
								    },
								         routeSatisfactionPageYear:function(){
								        this.props.routeSatisfactionPageYear();
								    }, 
								    //投诉
								      routeComplaintsWeek:function(){
								        this.props.routeComplaintsWeek();
								    },
								        routeComplaintsMonth:function(){
								        this.props.routeComplaintsMonth();
								    },
								        routeComplaintsQuarter:function(){
								        this.props.routeComplaintsQuarter();
								    },
								         routeComplaintsYear:function(){
								        this.props.routeComplaintsYear();
								    }, 
  render: function() {
    return (
    		<div className = 'PerformanceManger'>
				       <aside className='asideFauleManger'></aside>
				       <section className='sectionFauleManger'>
				    			 	<nav className='navFauleManger'>
				    			 		        <div className='usermanagerNavLeft'>
					    			 		        	<div className='fauleMangerline'><span></span></div>
						    							  	<div className='txtFauleMangerleft'>绩效管理</div>		   									   
					    							  </div>	 	
				    			 	</nav>
				    			 	<div className='SLAReachRate'>
				    			 	   
				    			 	   	      <div className='CompletionUnitTopList'>
							      		      		<span className="CompletionUnitTopListTxt">SLA达成率</span>
										         	<ul >
										         		<li className='CompletionUnitTopWeekSla'  onMouseOver={this.toggleSla.bind(this,'SLAReachRateWeek')} onClick={this.routeSlaPage}>本周</li>
										         		<li className='CompletionUnitTopMonthSla' onMouseOver={this.toggleSla.bind(this,'SLAReachRateMonth')} onClick={this.routeSlaPageMonth}>本月</li>
										         		<li className='CompletionUnitTopQuarterSla' onMouseOver={this.toggleSla.bind(this,'SLAReachRateQuarter')} onClick={this.routeSlaPageQuarter}>本季度</li>
										         		<li className='CompletionUnitTopYearSla' onMouseOver={this.toggleSla.bind(this,'SLAReachRateYear')} onClick={this.routeSlaPageYear}>本年度</li>
										         	</ul>
										       </div>  
									    		<div className = 'Completion-unit-top'>
													{this.conFunctionSla()}		
											    </div>	
				    			 	</div>
				    			 	<div className='customeSatisfactionScore'>
				    			 		      <div className='CompletionUnitTopList'>
								      		      <span className="CompletionUnitTopListTxt">客户满意度评分</span>
											         	<ul >
								
											         		<li className='CompletionUnitTopWeekScore'  onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreWeek')} onClick={this.routeSatisfactionPageWeek}>本周</li>
											         		<li className='CompletionUnitTopMonthScore' onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreMonth')} onClick={this.routeSatisfactionPageMonth}>本月</li>
											         		<li className='CompletionUnitTopQuarterScore' onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreQuarter')} onClick={this.routeSatisfactionPageQuarter}>本季度</li>
											         		
											         		<li className='CompletionUnitTopYearScore' onMouseOver={this.toggleScore.bind(this,'SatisfactionScoreYear')} onClick={this.routeSatisfactionPageYear}>本年度</li>
											         		
											         	</ul>
											       </div>  
										    		<div className = 'Completion-unit-top'>
														 	{this.conFunctionScore()}			
												    </div>	
				    			 	</div>
				    			 	<div className='customeComplaintsRanking'>
				    			 		    <div className='CompletionUnitTopList'>
							      		      <span className="CompletionUnitTopListTxt">客户投诉量排名</span>
										         	<ul >
										         		<li className='CompletionUnitTopWeekRanking'  onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingWeek')} onClick={this.routeComplaintsWeek}>本周</li>
										         		<li className='CompletionUnitTopMonthRanking' onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingMonth')} onClick={this.routeComplaintsMonth}>本月</li>
										         		<li className='CompletionUnitTopQuarterRanking' onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingQuarter')} onClick={this.routeComplaintsQuarter}>本季度</li>			         		
										         		<li className='CompletionUnitTopYearRanking'  onMouseOver={this.toggleRanking.bind(this,'ComplaintsRankingYear')} onClick={this.routeComplaintsYear}>本年度</li>
										         	</ul>
										       </div>  
									    		<div className = 'Completion-unit-top'>
													 	{this.conFunctionRanking()}			
											    </div>	
				    			 	</div>
				    			 	
				    			 	
				    			 
    			    	</section>   	
		    </div>				
  )}
});
function mapStateToProps(state) {
	  const {knowledgeManagerData,
	  	flowPicData,
	  	customerComplaintsData,
	  	customeSatisfactionScoreData,
	  	SLAReachRateData
	  } = state.operationReducer;
		  return {
		    knowledgeManagerData:knowledgeManagerData,
			flowPicData:flowPicData,
			customerComplaintsData:customerComplaintsData,
			customeSatisfactionScoreData:customeSatisfactionScoreData,
			SLAReachRateData:SLAReachRateData
		  }
		}
export default connect(mapStateToProps)(PerformanceManageMent)
//export default PerformanceManageMent