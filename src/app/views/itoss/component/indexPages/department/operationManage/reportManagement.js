import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, History} from 'react-router';
import Store from '../../../../../../server/store';
import * as OperationManage from "../../../../../../actions/operation_action";
import { connect } from 'react-redux';
var ReportManagement = React.createClass({
				componentDidMount:function(){
				$(".reportMangentLineChildren").hover(function(){
				 $(this).children('.reportLineChidShade').toggle()
				});
//				$('.reportLineChidShadeImngImg').click(function(){
//				
//				})
//				$('.reportLineChidShadeFormImg').click(function(){
//				
//				})
			},
  render: function() {
    return (
    			<div className = 'PerformanceManger'>
				       <aside className='asideFauleManger'></aside>
				       <section className='sectionFauleManger'>
				    			 	<nav className='navFauleManger'>
				    			 		        <div className='usermanagerNavLeft'>
					    			 		        	<div className='fauleMangerline'><span></span></div>
						    							  	<div className='txtFauleMangerleft'>报表管理</div>		   									   
					    							  </div>	 	
				    			 	</nav>
				    			 				<div className="reportMangent">
																<div className="reportMangentLine">
																		<div className="reportMangentLineChildren">
																			<div className="reportLineChidShade">
																			    <Link to="/reportMangmentFrom"  target="view_window" >
							 													    <div className="reportLineChidShadeFormImg">
							 													    	<img  src="./img/lefticon/baobiao_03.png"  />
							 													    </div>
																				  </Link>
																			    <Link to="/reportMangmentPie"  target="view_window" >
																				    <div className="reportLineChidShadeImngImg">
																				        <img src="./img/lefticon/baobiao_05.png" />
																				    </div>
																				</Link>
																			</div>
																		    <span>单位满意度评分报表</span>
							
																		</div>  
																		<div className="reportMangentLineChildren">
																			 	<div className="reportLineChidShade">
																			    <Link to="/reportMangmentFrom"  target="view_window" >
							 													    <div className="reportLineChidShadeFormImg">
							 													    	<img  src="./img/lefticon/baobiao_03.png"/>
							 													    </div>
																				</Link>
																			    <Link to="/reportMangmentPie"  target="view_window" >
																				    <div className="reportLineChidShadeImngImg">
																				        <img src="./img/lefticon/baobiao_05.png" />
																				    </div>
																				</Link>
																			</div>
																		    <span>单位SLA达成率报表</span>
							
																		</div>  
																		<div className="reportMangentLineChildren">
																				<div className="reportLineChidShade">
																			    <Link to="/reportMangmentFrom"  target="view_window" >
							 													    <div className="reportLineChidShadeFormImg">
							 													    	<img  src="./img/lefticon/baobiao_03.png" />
							 													    </div>
																				  </Link>
																			    <Link to="/reportMangmentPie"  target="view_window" >
																				    <div className="reportLineChidShadeImngImg">
																				        <img src="./img/lefticon/baobiao_05.png" />
																				    </div>
																				</Link>
																			</div>
																		    <span>客户投诉量报表</span>
																		</div>  
																		<div className="reportMangentLineChildren">
																		  	<div className="reportLineChidShade">
																			    <Link to="/reportMangmentFrom"  target="view_window" >
							 													    <div className="reportLineChidShadeFormImg">
							 													    	<img  src="./img/lefticon/baobiao_03.png"/>
							 													    </div>
																				</Link>
																			    <Link to="/reportMangmentPie"  target="view_window" >
																				    <div className="reportLineChidShadeImngImg">
																				        <img src="./img/lefticon/baobiao_05.png" />
																				    </div>
																				</Link>
																			</div>
																		    <span>故障管理报表</span>
																		</div>  
																</div>
														
													    </div>
				    			 	
				    			 	
    			    	</section>   	
		    </div>			
      )
    }
});
 function mapStateToProps(state) {
	  const {customeSatisfactionScoreData, SLAReachRateData} = state.operationReducer
		  return {
		    customeSatisfactionScoreData:customeSatisfactionScoreData,
		    SLAReachRateData:SLAReachRateData
		  }
		}
export default connect(mapStateToProps)(ReportManagement)
