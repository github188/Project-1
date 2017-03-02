import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import YunWei from './YunWei/YunWei';	
import Aindex from './Aindex/Aindex';	
import Assets from './Assets/Assets';	
import NetWork from './NetWork/NetWork';	
import Equipment from './Equipment/Equipment';	
import System from './System/System';	
import NewUser from './Mengban/NewUser';
import * as OperationManage from "../../../../../actions/operation_action";
import Store from '../../../../../server/store';
import { connect } from 'react-redux';
const HomeLead = React.createClass({
				getInitialState:function(){
						return{
							page:'Aindex'
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
						 	   var customeSatisfactionScoreData=this.customeSatisfactionScoreData
						      var customerComplaintsData=this.customerComplaintsData
						 	  console.log('shouye222222componentWillMount，首页 customeSatisfactionScoreData')
						 	  console.log(customeSatisfactionScoreData)
						 	  console.log(customerComplaintsData)
							},
			          componentDidMount:function(){ 
					     var customerComplaintsData = this.props.customerComplaintsData;
					 	 var customeSatisfactionScoreData = this.props.customeSatisfactionScoreData
//					 	   console.log('初始值111 componentDidMount HomeLead customeSatisfactionScoreData')
//					 	   console.log(customeSatisfactionScoreData)
	//				 	   console.log('初始值111 SLAReachRateData')
	//				 	     console.log(SLAReachRateData)
						 $(".top-left-nav1").css('background', '#009fcc');
						
	                     $(".top-left-nav").click(function(){
	                    	  $(this).each(function(){
						      $(this).css({'background':'#009fcc',"color":"white"}).siblings().css({"background":"#00adda","color":"#ddf7fe"});
						    })	
	                     });
	                     $('.top-right>li').click(function(){
	                    	 $(this).each(function(){
						     $(this).css({'background':'#009fcc',"color":"white"}).siblings().css({"background":"#00adda","color":"#ddf7fe"});
	                     })
	                     })
                     },
  	//刘家顺	20170112   方法
				toggle:function(page){
					  var unit = 'unit'
                      var month ='month'
					  var paramMonth = [unit,month];
					  this.setState({page:page});
					  const {dispatch} = this.props;
					  switch(page){
						case "Aindex":
							 dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))
					 	     dispatch(OperationManage.get_customerComplaintsData(paramMonth))
					 	     dispatch(OperationManage.get_SLAReachRateData(paramMonth))
							break;
//						case "YunWei":
//							dispatch(operationActions.get_slaInfoData());
//							break;
//	         			case "Assets":
//					    	dispatch(operationActions.get_topicInfoListData(""));
//							break;
//						case "NetWork":
//							dispatch(operationActions.get_dutyTableData());
//							dispatch(operationActions.get_dutyPerson());
//							break;
//						case "Equipment":
//							var filter = [{key:"TIME", value:"2017-01-01"}];
//							dispatch(operationActions.get_calendarData(filter));
//							break;
//						 case "System":
//	                      dispatch(OperationManage.get_knowledgeManagerData());
//	                         break;	
					};
				},
  	//刘家顺	20170112   组件
			conFunction:function(page){
				var page = this.state.page;
						switch(page){
						case 'Aindex':
								return	(<Aindex
					    customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
					    customerComplaintsData={this.props.customerComplaintsData}
									/>);
							break;
							case 'YunWei':
								return	(<YunWei />);
							break;
							case 'Assets':
								return	(<Assets/>);
							break;
							case 'NetWork':
								return	(<NetWork />);
							break;
							case 'Equipment':
								return	(<Equipment />);
							break;
							case 'System':
								return	(<System />);
							break;
						}
				
			},
			render:function(){
				 return(
				 		<div className = 'container'>	
				 			<div className='top'>	 	
				 				<ul className="top-left">
				 					<li className='top-left-nav top-left-nav1' onClick={this.toggle.bind(this,'Aindex')}>首页</li>
				 					<li className='top-left-nav' onClick={this.toggle.bind(this,'YunWei')}>运维</li>
				 					<li className='top-left-nav' onClick={this.toggle.bind(this,'Assets')}>资产</li>
				 					<li className='top-left-nav' onClick={this.toggle.bind(this,'NetWork')}>网络</li>
				 					<li className='top-left-nav' onClick={this.toggle.bind(this,'Equipment')}>设备</li>
				 					<li className='top-left-nav' onClick={this.toggle.bind(this,'System')}>系统</li>		 					
				 				</ul>	
				 				<div></div>
				 				<ul className='top-right'>
				 					<li className='search' ref='search' onClick={this.onClick1} >
				 					<a className='top-right-txt' >搜索</a>
				 					</li>
				 					<li className='phone' ref='phone' onClick={this.onClick2}>
				 					<a className='top-right-txt' >手机版</a>
				 					</li>
				 					<li className='news' ref='news' onClick={this.onClick3}>
				 					<span className='news-list'>
				 					<a id='new-list-val'>3</a>
				 					</span>
				 					</li>
				 					<li className='top-right-last' ref='topRightLast' onClick={this.onClick4}>
				 					<a className='top-right-loader'>Leader</a>
				 					</li>
				 				</ul>		
				 			</div>
				 			<div className='top-search-hidden' ref='topsearchhidden' >
				 				<input type='text' id='top-search-hidden-search' placeholder='&nbsp;&nbsp;搜索'/>
				 				<input type='submit' id='top-search-hidden-button' value=''/>
				 			</div>
				 			<div className='top-phone-hidden' ref='topPhoneHidden'>
				 			</div>				 			
				 			<div className='top-news-hidden' ref='topNewsHidden'>
				 			<li></li>
				 			</div>
				 			<div className='top-loader-hidden' ref='topLoaderHidden'>
				 			
				 			<Link className='top-loader-hidden-txt' to="/LoginPage1">退出</Link>
				 			</div>			 			
				 			<div className='mid'>{this.conFunction()}</div>
			 		</div>
				 	)
			},
			//点击事件
			    onClick1: function() {
		        var $topsearchhidden = this.refs.topsearchhidden; 
		        var $search = this.refs.search
		        if($topsearchhidden.style.display=='block'){
		        	 $topsearchhidden.style.display='none';
//		        	$search.style.background="#00adda url('../img/images/search_03.png') noRepeat center";
		        }else{
		        	$topsearchhidden.style.display='block';
		        	$search.style.background="#009fcc url('../img/images/search_03.png') noRepeat center";
		        }
		    },
		   onClick2: function() {
		        var topPhoneHidden = this.refs.topPhoneHidden; 
		        var phone = this.refs.phone
		        if(topPhoneHidden.style.display=='block'){
		        	 topPhoneHidden.style.display='none';
//		        	phone.style.background="#00adda url('../img/images/search_03.png') noRepeat center";
		        }else{
		        	topPhoneHidden.style.display='block';
//		        	phone.style.background="#009fcc url('../img/images/search_03.png') noRepeat center";
		        }
		    },
		    onClick3: function() {
		        var topNewsHidden = this.refs.topNewsHidden; 
		        var news = this.refs.news
		        if(topNewsHidden.style.display=='block'){
		        	 topNewsHidden.style.display='none';
//		        	news.style.background="#00adda url('../img/images/search_03.png'') noRepeat center";
		        }else{
		        	topNewsHidden.style.display='block';
//		        	news.style.background="#009fcc url('../img/images/search_03.png'') noRepeat center";
		        }
		    },
		    onClick4: function() {
		        var topLoaderHidden = this.refs.topLoaderHidden; 
		        var topRightLast = this.refs.topRightLast
		        if(topLoaderHidden.style.display=='block'){
		        	 topLoaderHidden.style.display='none';
		        	 topRightLast.style.background="#00adda ";
		        	 topRightLast.style.color="white";
		        }else{
		        	topLoaderHidden.style.display='block';
		        	topRightLast.style.background="white";
		        	topRightLast.style.color="black";
		        }
		    },
		
		})
//export default HomeLead
function mapStateToProps(state) {
	  const {customerComplaintsData, customeSatisfactionScoreData} = state.operationReducer;
		  return {
			customerComplaintsData:customerComplaintsData,
			customeSatisfactionScoreData:customeSatisfactionScoreData
		  }
		}
export default connect(mapStateToProps)(HomeLead)

