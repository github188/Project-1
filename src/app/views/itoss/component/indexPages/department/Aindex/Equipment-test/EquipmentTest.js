import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import EquipmentTestTxt from './EquipmentTestTxt';
//import EquipmentTestPicture from './EquipmentTestPicture';
import ComplaintsRankingQuarter from '../../operationManage/complaintsRanking/complaintsRankingQuarter';
import ComplaintsRankingWeek from '../../operationManage/complaintsRanking/complaintsRankingWeek';
import ComplaintsRankingMonth from '../../operationManage/complaintsRanking/complaintsRankingMonth';
import ComplaintsRankingYear from '../../operationManage/complaintsRanking/complaintsRankingYear';

import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';


var EquipmentTest = React.createClass({
		      getInitialState:function(){
							return{
								pageScore:'ComplaintsRankingMonth'
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
			 	   var customerComplaintsData=this.props.customerComplaintsData
				},
			 componentDidUpdate:function(){   	
			      var customerComplaintsData=this.props.customerComplaintsData
			    },  
				componentDidMount:function(){
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
	
  render: function() {
    return (
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
    		
    		
    		
					   {/*<p className='Equipment-test-top'></p>
							<div className ='Equipment-test-cnt'>
									<div className ='Equipment-test-cnt-left'>
											<EquipmentTestPicture/>
									</div>
									<div className ='Equipment-test-cnt-right'>
									  <EquipmentTestTxt/>	
									</div>
						</div>*/}
			</div>	
  )}
});
//export default EquipmentTest
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
export default connect(mapStateToProps)(EquipmentTest)
