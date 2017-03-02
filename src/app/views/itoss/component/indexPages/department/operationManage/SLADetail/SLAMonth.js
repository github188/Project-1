import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import ProjectSLA from './SLAMonth/projectSLA';
import UnitSLA from './SLAMonth/unitSLA';
import EngineerSLA from './SLAMonth/engineerSLA';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';
var PerformanceSLAMonth = React.createClass({
	 getInitialState:function(){
						return{
							page:'unitSLA'
						}
					},
	componentDidMount:function(){
					$(".unitSLAfaultClick").css({'color':'#349ef0','borderBottom':'4px solid #349ef0'})
				       $('.topLeftNewFault>li').click(function(){
					      $(this).css({'color':'#349ef0','borderBottom':'4px solid #349ef0'}).siblings('li').css({'color':'black','borderBottom':'none'})
				      })
	                },
			toggle:function(page){
			  this.setState({page:page})
	          const { dispatch } = this.props;
	            var unit = 'unit'
				  var project='project'
				  var engineer = 'engineer'
                  var month = 'month'
			     var paramUnit = [unit,month];
			     var paramProject = [project,month];
			     var paramEngineer = [engineer,month];
				switch(page){
				  case "projectSLA":
				 	dispatch(OperationManage.get_SLAReachRateData(paramProject));
                     break;	
                  case "unitSLA":
				 	dispatch(OperationManage.get_SLAReachRateData(paramUnit));
                     break;	
                  case "engineerSLA":
				 	dispatch(OperationManage.get_SLAReachRateData(paramEngineer));
                     break;	
				             };
		      },	
			conFunction:function(){
				const { dispatch } = this.props;
				var page = this.state.page;			
				switch(page){
						case 'projectSLA':
						  return(<ProjectSLA
						  	SLAReachRateData={this.props.SLAReachRateData}
						   	key='projectSLA'/>)
					 	   break;
		   		 	   case 'unitSLA':
					 	    return(<UnitSLA
						  	SLAReachRateData={this.props.SLAReachRateData}
					 	    	key='unitSLA'/>)
						 	break;
						case 'engineerSLA':
							 return(<EngineerSLA
						  	SLAReachRateData={this.props.SLAReachRateData}
							 	key='engineerSLA'/>)
							 break;
					
							 };	
	},
  render: function() {
    return (
    		<div className = 'PerformanceManger'>
				       <aside className='asideFauleManger'></aside>
				       <section className='sectionFauleManger'>
				    			 	<nav className='navFauleManger'>
				    			 		              <div className='usermanagerNavLeft'>
					    			 		        	    <div className='fauleMangerline'><span></span></div>
						    							  	<div className='txtFauleMangerleft'>月SLA达成率</div>		   									   
					    							  </div>	 	
				    			 	</nav>
				    			 	<div className="headerLeftNewFault">
				    			 		  <ul className='topLeftNewFault'>
										     <li className='topLeftNewFaultClick'  onClick={this.toggle.bind(this,'projectSLA')}>项目排名</li>
											 <li className='unitSLAfaultClick'  onClick={this.toggle.bind(this,'unitSLA')}>单位排名</li>
											 <li className=''  onClick={this.toggle.bind(this,'engineerSLA')}>工程师排名</li>
										  </ul>
										   <ul className='topRightNewFault'>
											{/* <li>
											   <button  type="button" className='printNewFault'>打印</button>
											 </li>
											 <li>
											   <button type="button" className='sureNewFault'>保存</button>
											</li>*/}
										   </ul>
					    			 		
				    			 	 </div>
				    			 	<div className=''> {this.conFunction()}</div>
    			    	</section>   	
		    </div>				
  )},
     });
function mapStateToProps(state) {
	  const {SLAReachRateData} = state.operationReducer;	
		  return {
		  SLAReachRateData:SLAReachRateData
		  }
		}
export default connect(mapStateToProps)(PerformanceSLAMonth)