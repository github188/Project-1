import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import AllWorkOrder from './AllWorkOrder';
import OvertimeWorkOrder from './OvertimeWorkOrder';
import DissatisfiedWorkOrder from './DissatisfiedWorkOrder';

var SingleClass = React.createClass({
			getInitialState:function(){
					return{
						page:'OvertimeWorkOrder'
					}
					},
			  render: function() {
			  		var page = this.state.page;
					var content = [];
					 switch(page){
					 	case 'AllWorkOrder':
					 	content.push(<AllWorkOrder/>)
					 	break;
					 	case 'OvertimeWorkOrder':
					 	content.push(<OvertimeWorkOrder/>)
					 	break;
					 	case 'DissatisfiedWorkOrder':
					 	content.push(<DissatisfiedWorkOrder/>)
					 	break;
					   }					 
			    return (
			    		<div className ='Single-class' id='leandTab'>
								<ul className='Single-class-top'>
								 	<li className='AllWorkOrder' >
										 		<p className='AllWorkOrdertxt'>45</p>
										 		<span>所有工单</span> 	
								 	</li>
								 	<li className='overtimeorder' >
									 	 
										 		<p className='overtimeordertxt'>20</p>
										 		<span>超时工单</span>
								 	</li>
								 	<li className='DissatisfiedWorkOrder' >
									 
										 		<p className='DissatisfiedWorkOrdertxt'>10</p>
										 		<span>不满意工单</span>
								 	</li>
								</ul>
								
								<div className='Single-class-txt'>{content}</div>
						  </div>			
			  )},			  		  
			  toggle:function(page){
				this.setState({
					page:page
				})
			},
			  
});
export default SingleClass
