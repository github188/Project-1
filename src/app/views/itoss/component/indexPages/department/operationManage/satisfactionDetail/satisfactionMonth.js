import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import ProjectSatisfaction from './satisfactionMonth/projectSatisfaction';
import UnitSatisfaction from './satisfactionMonth/unitSatisfaction';
import EngineerSatisfaction from './satisfactionMonth/engineerSatisfaction';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';
var SatisfactionMonthDetail = React.createClass({
	 getInitialState:function(){
						return{
							page:'UnitSatisfaction'
						}
					},
	componentDidMount:function(){
					$(".unitSLAfaultClick").css({'color':'#349ef0','borderBottom':'4px solid #349ef0'})
				       $('.topLeftNewFault>li').click(function(){
					      $(this).css({'color':'#349ef0','borderBottom':'4px solid #349ef0'}).siblings('li').css({'color':'black','borderBottom':'none'})
				      })
//		  	customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
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
				  case "ProjectSatisfaction":
				 	dispatch(OperationManage.get_customeSatisfactionScoreData(paramProject));
                     break;	
                  case "UnitSatisfaction":
				 	dispatch(OperationManage.get_customeSatisfactionScoreData(paramUnit));
                     break;	
                  case "EngineerSatisfaction":
				 	dispatch(OperationManage.get_customeSatisfactionScoreData(paramEngineer));
                     break;	
				             };
		      },	
			conFunction:function(){
				const { dispatch } = this.props;
				var page = this.state.page;			
				switch(page){
						case 'ProjectSatisfaction':
						  return(<ProjectSatisfaction
						  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
						   	key='ProjectSatisfaction'/>)
					 	   break;
		   		 	   case 'UnitSatisfaction':
					 	    return(<UnitSatisfaction
						  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
					 	    	key='UnitSatisfaction'/>)
						 	break;
						case 'EngineerSatisfaction':
							 return(<EngineerSatisfaction
						  	customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
							 	key='EngineerSatisfaction'/>)
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
						    							  	<div className='txtFauleMangerleft'>月满意度评分</div>		   									   
					    							  </div>	 	
				    			 	</nav>
				    			 	<div className="headerLeftNewFault">
				    			 		  <ul className='topLeftNewFault'>
										     <li className='topLeftNewFaultClick'  onClick={this.toggle.bind(this,'ProjectSatisfaction')}>项目排名</li>
											 <li className='unitSLAfaultClick'  onClick={this.toggle.bind(this,'UnitSatisfaction')}>单位排名</li>
											 <li className=''  onClick={this.toggle.bind(this,'EngineerSatisfaction')}>工程师排名</li>
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
	  const {customeSatisfactionScoreData} = state.operationReducer;	
		  return {
		  customeSatisfactionScoreData:customeSatisfactionScoreData
		  }
		}
export default connect(mapStateToProps)(SatisfactionMonthDetail)