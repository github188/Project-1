import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import CompletionUnitTopList from './CompletionUnitTopList';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';

import SatisfactionScoreQuarter from '../../operationManage/satisfactionScore/satisfactionScoreQuarter';
import SatisfactionScoreWeek from '../../operationManage/satisfactionScore/satisfactionScoreWeek';
import SatisfactionScoreMonth from '../../operationManage/satisfactionScore/satisfactionScoreMonth';
import SatisfactionScoreYear from '../../operationManage/satisfactionScore/satisfactionScoreYear';


var CompletionUnit = React.createClass({
	      getInitialState:function(){
							return{
								pageScore:'SatisfactionScoreMonth'
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
			 	      dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))
					 	   var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
						},
				 componentDidUpdate:function(){   	
			      var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
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
  render: function() {
    return (
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
  )}
});
//export default CompletionUnit
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
export default connect(mapStateToProps)(CompletionUnit)