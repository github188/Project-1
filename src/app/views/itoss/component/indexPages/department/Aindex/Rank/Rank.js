import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import antd from 'antd';
import { Progress } from 'antd';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';

var Rank = React.createClass({
	componentDidMount:function(){
          var customeSatisfactionScoreData = this.props.customeSatisfactionScoreData;
		    	console.log("SLARDataMonthEnginer进度条")
         	 console.log(customeSatisfactionScoreData)
         	 console.log(customeSatisfactionScoreData[0].NAME)
	},
		 componentDidUpdate:function(){   	
			      var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
			    }, 
	  	componentDidMount:function(){
	  			     var unit = 'unit'
             		 var month ='month'
						  var paramMonth = [unit,month];
	         		 const { dispatch } = this.props;
			 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))
         			 var customeSatisfactionScoreData = this.props.customeSatisfactionScoreData;
//        console.log("SLARDataMonthEnginer进度条")
//        console.log(customeSatisfactionScoreData)
//        console.log(customeSatisfactionScoreData[0].NAME)
//                 $("#SatisfactionRankIndex0").html(customeSatisfactionScoreData[0].NAME) 
//                 $("#SatisfactionRankIndex1").html(customeSatisfactionScoreData[1].NAME)  
//                 $("#SatisfactionRankIndex2").html(customeSatisfactionScoreData[2].NAME)  
//                 $("#SatisfactionRankIndex3").html(customeSatisfactionScoreData[3].NAME)  
//                 $("#SatisfactionRankIndex4").html(customeSatisfactionScoreData[4].NAME)  
//                 $("#SatisfactionRankIndex5").html(customeSatisfactionScoreData[5].NAME)  
//                 $("#SatisfactionRankIndex6").html(customeSatisfactionScoreData[6].NAME)  
//                 $("#SatisfactionRankIndex7").html(customeSatisfactionScoreData[7].NAME)  
//					             parseFloat(customeSatisfactionScoreData[2].COUNT), 
//					             parseFloat(customeSatisfactionScoreData[3].COUNT),
//					             parseFloat(customeSatisfactionScoreData[4].COUNT), 
//					             parseFloat(customeSatisfactionScoreData[5].COUNT),
//					             parseFloat(customeSatisfactionScoreData[6].COUNT),
//					             parseFloat(customeSatisfactionScoreData[7].COUNT)
//					             
					          
    },
  render: function() {
  	
    return (
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
//                     					<Progress percent={ parseFloat(customeSatisfactionScoreData[0].COUNT)} strokeWidth={15} />
//										    <Progress percent={parseFloat(customeSatisfactionScoreData[1].COUNT)} strokeWidth={15} status="" />
//										    <Progress percent={parseFloat(customeSatisfactionScoreData[2].COUNT)} strokeWidth={15} status="" />
//										    <Progress percent={parseFloat(customeSatisfactionScoreData[3].COUNT)} strokeWidth={15} />
//												<Progress percent={parseFloat(customeSatisfactionScoreData[4].COUNT)} strokeWidth={15} />
//												<Progress percent={parseFloat(customeSatisfactionScoreData[5].COUNT)} strokeWidth={15} />
//										   <Progress percent={parseFloat(customeSatisfactionScoreData[6].COUNT)} strokeWidth={15} status="" />
	                    	               {/*<Progress percent={90} strokeWidth={15} />
										    <Progress percent={80} strokeWidth={15} status="" />
										    <Progress percent={59} strokeWidth={15} status="" />
										    <Progress percent={50} strokeWidth={15} />
											<Progress percent={40} strokeWidth={15} />
											<Progress percent={30} strokeWidth={15} />
										    <Progress percent={20} strokeWidth={15} status="" />*/}
										</div>
																 	 
									</div> 
				</div>					
  )}
});
//export default Rank
function mapStateToProps(state) {
	  const {customeSatisfactionScoreData} = state.operationReducer;
		  return {
			customeSatisfactionScoreData:customeSatisfactionScoreData
		  }
		}
export default connect(mapStateToProps)(Rank)
