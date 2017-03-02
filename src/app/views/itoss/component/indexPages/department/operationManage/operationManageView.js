import React from 'react'
require('bootstrap');
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import {connect} from 'react-redux'
//var ReactRouter = require('react-router');
//var History = ReactRouter.History;
//import * as operationActions from "../../../../../../actions/operation_action";
import * as dataDictActions from "../../../../../../actions/dataDict_action";
//import ShowHide from '../System/ShowHide/ShowHide';
//import FauleManger from './FauleManger/FauleManger';
//import ComplaintManger from './ComplaintManger/ComplaintManger';
//import TaskMager from './TaskMager/TaskMager';
//import SlaManger from './SlaManger/SlaManger';
import KnowledgeManageMent from './knowledgeManageMent';
import ReportManagement from './reportManagement';
//import Announcements from './Announcements/Announcements';
import PerformanceManageMent from './performanceManageMent';
import PerformanceSLAWeek from './SLADetail/SLAWeek';
import PerformanceSLAMonth from './SLADetail/SLAMonth';
import PerformanceSLAYear from './SLADetail/SLAYear';
import PerformanceSLAQuarter from './SLADetail/SLAQuerter';

import SatisfactionWeek from './satisfactionDetail/satisfactionWeek';
import SatisfactionMonth from './satisfactionDetail/satisfactionMonth';
import SatisfactionYear from './satisfactionDetail/satisfactionYear';
import SatisfactionQuarter from './satisfactionDetail/satisfactionQuarter';

import ComplaintsWeek from './complaintsDetail/complaintsWeek';
import ComplaintsMonth from './complaintsDetail/complaintsMonth';
import ComplaintsYear from './complaintsDetail/complaintsYear';
import ComplaintsQuarter from './complaintsDetail/complaintsQuarter';
import * as operationActions from "../../../../../../actions/operation_action";
import SLAManageMent from "./slaManageMent";
import FauleManageMent from "./fauleManageMent";
import TaskManagement from "./taskManagement/taskManagement";
import ComplaintManagement from "./complaintManagement/complaintManagement";
import Store from '../../../../../../server/store';
import WorkflowManageMent from '../../../operationManage/flowDesignManage/flowListView';
import WatchDutyManageMent from './watchDutyManageView/watchDutyManageMent';
import DutyCalendarManageMent from './watchDutyManageView/dutyCalendarManageMent';
import AnnounceManageMentView  from './announceManage/announceManageMentView';
//import WatchManger from './WatchManger/WatchManger';
//import DutyCalendarManger from './DutyCalendarManger/DutyCalendarManger';

import * as dictActions from '../../../../../../actions/dataDict_action';
import * as OperationManage from "../../../../../../actions/operation_action";
		const OperationManageView = React.createClass({
						mixins: [History],
			getInitialState:function(){
				return{
					page:'FauleManageMent',
					EventManageMent:"none",
					SLAManageMent:"none",
					KnowledgeManageMent:"KnowledgeManageMent",
					AnnounceManageMent:"none",
					PerformanceManageMent:"PerformanceManageMent",
					WatchDutyManageMent:"none",
					ReportManagement:"ReportManagement",
					WorkflowManageMent:"none",
					PerformanceSLAWeek:"PerformanceSLAWeek",
					PerformanceSLAMonth:"PerformanceSLAMonth",
					PerformanceSLAQuarter:"PerformanceSLAQuarter",
					PerformanceSLAYear:"PerformanceSLAYear",
					SatisfactionWeek:"SatisfactionWeek",
					SatisfactionMonth:"SatisfactionMonth",
					SatisfactionYear:"SatisfactionYear",
					SatisfactionQuarter:"SatisfactionQuarter"
				}
			},
			componentWillMount:function(){
				//获取用户权限
				var workOrderMenu = Store.get_JsonData("workOrderMenu");
				if(workOrderMenu != null && workOrderMenu != "" && workOrderMenu.length > 0){
					for(var i = 0; i< workOrderMenu.length; i++){
						if(workOrderMenu[i].toUrl == "operationManage/myWorkSpace"){
							this.setState({EventManageMent:""});
							this.setState({WorkflowManageMent:""});
						}else if(workOrderMenu[i].toUrl == "baseManage/slaList"){
							this.setState({SLAManageMent:""});
						}else if(workOrderMenu[i].toUrl == "baseManage/repositoryList"){
							this.setState({KnowledgeManageMent:""});
						}else if(workOrderMenu[i].toUrl == "baseManage/noticeHistoryList"){
							this.setState({AnnounceManageMent:""});
						}else if(workOrderMenu[i].toUrl == "baseManage/PerformanceManageMent"){
							this.setState({PerformanceManageMent:""});
						}else if(workOrderMenu[i].toUrl == "baseManage/WatchDutyManger"){
							this.setState({WatchDutyManageMent:""});
						}else if(workOrderMenu[i].toUrl == "operationManage/dutymanagement/calendar"){
							this.setState({WatchDutyManageMent:""});
						}else if(workOrderMenu[i].toUrl == "operationManage/ReportManagement"){
							this.setState({ReportManagement:""});
						}
					}
				}
				var flowPicData = this.props.flowPicData;
				console.log("flowPicData==" + flowPicData);
				if(flowPicData != null && flowPicData!= "" && flowPicData != undefined){
					this.setState({page:flowPicData});
				}
					//20170101 刘家顺点击绩效管理初试页面，默认月
					      var unit = 'unit'
                    	  var month ='month'
						  var paramMonth = [unit,month];
	         		 const { dispatch } = this.props;
			 	    dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))
			 	    dispatch(OperationManage.get_customerComplaintsData(paramMonth))
			 	    dispatch(OperationManage.get_SLAReachRateData(paramMonth))
               	     var SLAReachRateData = this.SLAReachRateData;		  
		             var customerComplaintsData = this.customerComplaintsData;
				 	 var customeSatisfactionScoreData = this.customeSatisfactionScoreData
				let filters = [
					{key:"PARAM",value:4}
				]
				dispatch(operationActions.get_workOrderList(filters));
			},
			componentDidMount:function(){
				var flag =true;
				var flag1  =true;
				$('.fatherEventMangrHide').click(function(){
					 $(".hidEventMangr").slideToggle("slow"); 
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
					 if(flag){
					 	 $('#lightEventM').hide();
					 	 $('#dimEventM').show();
					 	flag = false;
					 }else{
					 	 $('#lightEventM').show();
					 	  $('#dimEventM').hide();
					 	flag = true;
					 };		
				});					
				$('.dutyMangerclick').click(function(){
					 $(".hidReportManger").slideToggle("slow");
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
					  if(flag1){
					 	 $('.imgright').eq(1).hide();
					 	 $('.imgrightHid').eq(1).show();
					 	flag1 = false;
					 }else{
					 	 $('.imgright').eq(1).show();
					 	   $('.imgrightHid').eq(1).hide();
					 	flag1 = true;
					 };		
				});				
				$('.systemleftlist>li').mouseover(function(){
					$(this).children('.imgleft').eq(0).hide();
					$(this).children('.imgleft').eq(1).show();
				});
				$('.systemleftlist>li').mouseout(function(){
					$(this).children('.imgleft').eq(0).show();
					$(this).children('.imgleft').eq(1).hide();
				});
				$('.hoverEvenManger').mouseover(function(){
					$(this).children('.imgright2').eq(0).hide();
					$(this).children('.imgright2').eq(1).show();
				});	
				$('.hoverEvenManger').mouseout(function(){
					$(this).children('.imgright2').eq(0).show();
					$(this).children('.imgright2').eq(1).hide();
				});								
				$('.systemleftlist>li').click(function () {
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn");
					 $('.hoverEvenManger').removeClass("hoverOn");
					 
					 $(this).children('b').addClass("bColor");
					 $('.hoverEvenManger').children('b').removeClass("bColor");
					 $(this).siblings('li').children('b').removeClass("bColor");
					 $(this).children('.imgright2').eq(0).hide();
					$(this).children('.imgright2').eq(1).show();
			    });			     
			 	$('.hoverEvenManger').click(function () {			
			 		 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
			 		 $('.systemleftlist>li').removeClass("hoverOn")
			 		 $(this).children('b').addClass("bColor");
			 		 $(this).siblings('.hoverEvenManger').children('b').removeClass("bColor");
					 $('.systemleftlist>li').children('b').removeClass("bColor");	
					 $(this).children('.imgright2').eq(0).hide();
					$(this).children('.imgright2').eq(1).show();
			    });			 			 				
			},
			//20170101 刘家顺sla详情页周，默认单位周
	         routeSlaPage:function(){
		          this.setState({page:"PerformanceSLAWeek"}); 
                   var unit = 'unit'
                   var week = 'week'
                   var month = 'month'
                   var year =  'year'
                   var quarter = 'quarter'
			       var paramUnitWeek = [unit,week];
			       var paramUnitMonth = [unit,month];
			       var paramUnitYear = [unit,year];
			       var paramUnitQuarter = [unit,quarter];
	         	   const { dispatch } = this.props;
					 dispatch(OperationManage.get_SLAReachRateData(paramUnitWeek))	
//             	   var SLAReachRateData = this.SLAReachRateData;		  
		     },
		     //20170101 刘家顺sla详情页周，默认单位月
			 routeSlaPageMonth:function(){
		         this.setState({page:"PerformanceSLAMonth"}); 
		          var unit = 'unit'
                   var week = 'week'
                   var month = 'month'
                   var year =  'year'
                   var quarter = 'quarter'
			       var paramUnitWeek = [unit,week];
			       var paramUnitMonth = [unit,month];
			       var paramUnitYear = [unit,year];
			       var paramUnitQuarter = [unit,quarter];
	         	   const { dispatch } = this.props;
				 dispatch(OperationManage.get_SLAReachRateData(paramUnitMonth))	 		
//             	   var SLAReachRateData = this.SLAReachRateData;	
			 },
		     //20170101 刘家顺sla详情页周，默认单位季度
			 routeSlaPageQuarter:function(){
		         this.setState({page:"PerformanceSLAQuarter"}); 
		          var unit = 'unit'
                   var week = 'week'
                   var month = 'month'
                   var year =  'year'
                   var quarter = 'quarter'
			       var paramUnitWeek = [unit,week];
			       var paramUnitMonth = [unit,month];
			       var paramUnitYear = [unit,year];
			       var paramUnitQuarter = [unit,quarter];
	         	   const { dispatch } = this.props;
					 dispatch(OperationManage.get_SLAReachRateData(paramUnitQuarter))
//             	   var SLAReachRateData = this.SLAReachRateData;	
					},
		     //20170101 刘家顺sla详情页周，默认单位年
			 routeSlaPageYear:function(){
		         this.setState({page:"PerformanceSLAYear"}); 
		          var unit = 'unit'
                   var week = 'week'
                   var month = 'month'
                   var year =  'year'
                   var quarter = 'quarter'
			       var paramUnitYear = [unit,year];
	         	   const { dispatch } = this.props;
					 dispatch(OperationManage.get_SLAReachRateData(paramUnitYear))	 		
//             	   var SLAReachRateData = this.SLAReachRateData;	
				  },
			//20170101 刘家顺满意度详情
			 routeSatisfactionPageWeek:function(){
				 this.setState({page:"SatisfactionWeek"}); 
			 	 var unit = 'unit'
                 var week = 'week'
			     var paramUnit = [unit,week];
		         const { dispatch } = this.props;
				 dispatch(OperationManage.get_customeSatisfactionScoreData(paramUnit));
		     },
		     //20170101 刘家顺
			 routeSatisfactionPageMonth:function(){
			 	 this.setState({page:"SatisfactionMonth"}); 
			 	 const { dispatch } = this.props;
	             var unit = 'unit'
                 var month = 'month'
			     var paramUnit = [unit,month];
				 dispatch(OperationManage.get_customeSatisfactionScoreData(paramUnit));
			 },
			 //20170101 刘家顺
			 routeSatisfactionPageQuarter:function(){
			 	this.setState({page:"SatisfactionQuarter"});
		         const { dispatch } = this.props;
	             var unit = 'unit'
                 var quarter = 'quarter'
			     var paramUnit = [unit,quarter];
				 dispatch(OperationManage.get_customeSatisfactionScoreData(paramUnit));
					},
		     //20170101 刘家顺
			 routeSatisfactionPageYear:function(){
		         this.setState({page:"SatisfactionYear"}); 
		            const { dispatch } = this.props;
	             var unit = 'unit'
                 var year = 'year'
			     var paramUnit = [unit,year];
				 dispatch(OperationManage.get_customeSatisfactionScoreData(paramUnit));
				  },
			////20170101 刘家顺 投诉量
			 routeComplaintsWeek:function(){
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
				 var paramUnit = [unit,week];
		         this.setState({page:"ComplaintsWeek"}); 
				dispatch(OperationManage.get_customerComplaintsData(paramWeek)); 
				
		     },
		     //20170101 刘家顺
			 routeComplaintsMonth:function(){
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
				 var paramUnit = [unit,week];
		         this.setState({page:"ComplaintsMonth"}); 
				 dispatch(OperationManage.get_customerComplaintsData(paramMonth));                    
			 },
			 //20170101 刘家顺
			 routeComplaintsQuarter:function(){
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
				 var paramUnit = [unit,week];
		         this.setState({page:"ComplaintsQuarter"}); 
				 dispatch(OperationManage.get_customerComplaintsData(paramQuarter)); 
					},
			  //20170101 刘家顺
			 routeComplaintsYear:function(){
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
				 var paramUnit = [unit,week];
		         this.setState({page:"ComplaintsYear"}); 
				 dispatch(OperationManage.get_customerComplaintsData(paramYear)); 
				 },
			//曹志强		20161220    Action调用方法
			actionCall:function(param){
				const {dispatch} = this.props;
				  var unit = 'unit'
                 var week = 'week'
                 var month ='month'
                 var quarter ='quarter'
                 var year ='year'
				 var paramWeek = [unit,week];
				 var paramMonth = [unit,month];
				 var paramQuarter = [unit,quarter];
				 var paramYear = [unit,year];
				 var paramUnit = [unit,week];
				this.setState({page:param});
				switch(param){
					case "SLAManageMent":
						dispatch(operationActions.get_slaInfoData());
						break;
          case "FauleManageMent":
						let filters = [
							{key:"PARAM",value:4},
                            {key:"WORKFLOW_ID",value:"Troubleshoot"}
						];
						dispatch(operationActions.get_fauleStatusData());
						dispatch(operationActions.get_workOrderList(filters));
						dispatch(operationActions.get_fauleWorkOrderTypeData());
            break;
					case "TaskManagement":
                        let filters1 = [
                            {key:"PARAM",value:4},
                            {key:"WORKFLOW_ID",value:"EmergencySurvey"}
                        ];
                        dispatch(operationActions.get_workOrderList(filters1));
						//dispatch(operationActions.get_taskOrderList());
						break;
					case "ComplaintManagement":
                        let filters2 = [
                            {key:"PARAM",value:4},
                            {key:"WORKFLOW_ID",value:"ComplaintWorkOrder"}
                        ];
                        dispatch(operationActions.get_workOrderList(filters2));
						//dispatch(operationActions.get_complaintOrderList());
						break;
						 case "KnowledgeManageMent":
                    dispatch(OperationManage.get_knowledgeManagerData());
                     break;	
                  case "PerformanceManageMent":
					dispatch(OperationManage.get_customerComplaintsData(paramMonth)) 		
                    dispatch(OperationManage.get_customeSatisfactionScoreData(paramMonth))	
                    dispatch(OperationManage.get_SLAReachRateData(paramMonth))
                     break;	
//               case "PerformanceSLAWeek":
//                 	dispatch(OperationManage.get_SLAReachRateData(paramUnit));
//                   break;	    
//               case "PerformanceSLAMonth":
//                  dispatch(OperationManage.get_knowledgeManagerData(paramMonth));
//                   break;
//              单位满意度详情页
//               case "SatisfactionWeek":
//				 	dispatch(OperationManage.get_SLAReachRateData(paramWeek));                    
//                   break;	  
//               case "SatisfactionMonth":
//				 	dispatch(OperationManage.get_SLAReachRateData(paramMonth));                    
//                   break;	 
//               case "SatisfactionQuarter":
//				 	dispatch(OperationManage.get_SLAReachRateData(paramQuarter));                    
//                   break;	 
//               case "SatisfactionYear":
//				 	dispatch(OperationManage.get_SLAReachRateData(paramYear));                    
//                   break;	   
//                投诉量详情页初试页面
                 case "ComplaintsWeek":
				 	dispatch(OperationManage.get_customerComplaintsData(paramWeek));                    
                     break;	  
                 case "ComplaintsMonth":
				 	dispatch(OperationManage.get_customerComplaintsData(paramMonth));                    
                     break;	 
                 case "ComplaintsQuarter":
				 	dispatch(OperationManage.get_customerComplaintsData(paramQuarter));                    
                     break;	 
                 case "ComplaintsYear":
				 	dispatch(OperationManage.get_customerComplaintsData(paramYear));                    
                     break;	  
//              case "ReportManageMent":
//				 	dispatch(OperationManage.get_reportManageMent());                    
//                   break;	     
				};
			},
			//刘家顺 20161222 删除知识库管理的 知识库id
		    setDeleteKnowledgeId: function setDeleteKnowledgeId(data) {
		        const { dispatch } = this.props;
		        dispatch(OperationManage.setDeleteKnowledgeId(data));
		    },
		    //刘家顺 20161228 状态码知识库管理的 状态码
		    setReviewStatusCode: function setReviewStatusCode(data) {
		        const { dispatch } = this.props;
		        dispatch(OperationManage.setReviewStatusCode(data));
		    },
		    //刘家顺 20161229 编辑的id 级联
		    setFaultSubPid:function setFaultSubPid(data){
		        const { dispatch } = this.props;
		    	dispatch(dictActions.setFaultSubPid(data));
		    },
		     //刘家顺 20161229 编辑的id 级联
		     setFaultSubId:function setFaultSubId(data){
		        const { dispatch } = this.props;
		    	dispatch(dictActions.setFaultSubId(data));
		    },
		    //刘家顺 20161222 删除知识库管理的方法
			delete_knowledgeData:function delete_knowledgeData(){
		        const { dispatch } = this.props;
		        dispatch(OperationManage.delete_knowledgeData());
		  },
			//曹志强		20161220    组件调用方法
			conFunction:function(){
				const {dispatch} = this.props;
				var param = this.state.page;
				switch(param){
					//事件管理-故障管理
				 	case 'FauleManageMent':
				 	return	(
					 		<FauleManageMent
								get_workOrderList={(data) => dispatch(operationActions.get_workOrderList(data))}
								workOrderList={this.props.workOrderList}
								setFauleStatusId={(data) => dispatch(operationActions.setFauleStatusId(data))}
								fauleStatusData={this.props.fauleStatusData}
								setFauleWorkOrderTypeId={(data) => dispatch(operationActions.setFauleWorkOrderTypeId(data))}
								fauleWorkOrderTypeData={this.props.fauleWorkOrderTypeData}
					 		/>
				 	);
				 	break;
				 	//事件管理-任务管理
				 	case 'TaskManagement':
				 	return	(
					 		<TaskManagement
								taskOrderListData = {this.props.taskOrderListData}
								workOrderList={this.props.workOrderList}
								delete_workOrderCommon = {(data) => dispatch(operationActions.delete_workOrderCommon(data))}
								get_workOrderList={(data) => dispatch(operationActions.get_workOrderList(data))}
								get_taskOrderList = {(data)=>dispatch(operationActions.get_taskOrderList(data))}
								setRowStatus = {(data) => dispatch(operationActions.setRowStatus(data))}
					 		/>
				 	);
				 	break;
				 	//事件管理-投诉管理
				 	case 'ComplaintManagement':
				 	return	(
					 		<ComplaintManagement
								workOrderList={this.props.workOrderList}
								delete_workOrderCommon = {(data) => dispatch(operationActions.delete_workOrderCommon(data))}
								get_workOrderList={(data) => dispatch(operationActions.get_workOrderList(data))}
								complaintOrderListData = {this.props.complaintOrderListData}
								get_complaintOrderList = {(data) => dispatch(operationActions.get_complaintOrderList(data))}
					 		/>
				 	);
				 	break;
				 	//服务级别协议管理
				 	case 'SLAManageMent':
			 	return	(
					 		<SLAManageMent
										   slaInfoData = {this.props.slaInfoData}
										   setSLAInfoId = {(data) => dispatch(operationActions.setSLAInfoId(data))}
										   get_slaInfoData = {(data) => dispatch(operationActions.get_slaInfoData(data))}
										   setSlaRowId = {(data) => dispatch(operationActions.setSlaRowId(data))}
                                           setSlaStatusCode = {(data) => dispatch(operationActions.setSlaStatusCode(data))}
										   setSlaRowCompanyId = {(data) => dispatch(operationActions.setSlaRowCompanyId(data))}
										   setSlaRowProjectId = {(data) => dispatch(operationActions.setSlaRowProjectId(data))}
										   setSlaRowUnitTypeId = {(data) => dispatch(operationActions.setSlaRowUnitTypeId(data))}
										   setSlaRowStatusId = {(data) => dispatch(operationActions.setSlaRowStatusId(data))}
										   setSlaRowBigServiceId = {(data) => dispatch(operationActions.setSlaRowBigServiceId(data))}
										   setSlaRowServiceSubId = {(data) => dispatch(operationActions.setSlaRowServiceSubId(data))}
										   setSlaRowWorkTimeId = {(data) => dispatch(operationActions.setSlaRowWorkTimeId(data))}
										   setSlaRowStartTimeVal = {(data) => dispatch(operationActions.setSlaRowStartTimeVal(data))}
										   setSlaRowEndTimeVal = {(data) => dispatch(operationActions.setSlaRowEndTimeVal(data))}
										   setSLaRowServiceType = {(data) => dispatch(operationActions.setSLaRowServiceType(data))}
										   edit_slaInfoData = {(data) => dispatch(operationActions.edit_slaInfo(data))}
										   delete_slaInfoData = {(data) => dispatch(operationActions.delete_slaInfoData(data))}
					 		/>
			 	);
			 	break;
				 	//知识库管理
				 	case 'KnowledgeManageMent':
				 	return	(
					 		<KnowledgeManageMent
									 knowledgeManagerData={this.props.knowledgeManagerData}
					 		get_knowledgeManagerData={()=>dispatch(OperationManage.get_knowledgeManagerData())}	 		
					 		setDeleteKnowledgeId={this.setDeleteKnowledgeId}
					 		setReviewStatusCode={this.setReviewStatusCode}
					 		delete_knowledgeData={this.delete_knowledgeData}
					 		add_knowledgeData={this.add_knowledgeData}
					 		get_faultTypeDetailAllData={()=>dispatch(dictActions.get_faultTypeDetailAllData())}	 		
					 		setFaultSubPid={this.setFaultSubPid}
					 		setFaultSubId={this.setFaultSubId}
					 		key='KBM'
					 		/>
				 	);
				 	break;
				 	//公告管理
				 	case 'AnnounceManageMent':
				 	return	(
					 		<AnnounceManageMentView
					 		topicInfoListData={this.props.topicInfoListData}
					 		get_topicInfoListData={()=>dispatch(operationActions.get_topicInfoListData())}
					 		setTopicInfoListId={(param)=>dispatch(operationActions.setTopicInfoListId(param))}
					 		delete_topicInfoListData={(param)=>dispatch(operationActions.delete_topicInfoListData(param))}
					 		setIsEditTopicObjectData={(param)=>dispatch(operationActions.setIsEditTopicObjectData(param))}
					 		setTopicName={(param)=>dispatch(operationActions.setTopicName(param))}
					 		setTopicContent={(param)=>dispatch(operationActions.setTopicContent(param))}
					 		setTopicStatus={(param)=>dispatch(operationActions.setTopicStatus(param))}
					 		get_topicInfoListData={(param)=>dispatch(operationActions.get_topicInfoListData(param))}
					 		edit_topicInfoData={(param)=>dispatch(operationActions.edit_topicInfoData(param))}
					 		setTopicReviewDesc={(param)=>dispatch(operationActions.setTopicReviewDesc(param))}
					 		setTopicObjectFlagData={(param)=>dispatch(operationActions.setTopicObjectFlagData(param))}
					 		/>
				 		)
				 	break;
				 	//绩效管理
				 	case 'PerformanceManageMent':
				 	return	(
					 		<PerformanceManageMent
					SLAReachRateData={this.props.SLAReachRateData}	
					customerComplaintsData={this.props.customerComplaintsData} 		
					customeSatisfactionScoreData={this.props.customeSatisfactionScoreData}
					
					  routeSlaPage={this.routeSlaPage}
					  routeSlaPageMonth={this.routeSlaPageMonth}
				      routeSlaPageQuarter={this.routeSlaPageQuarter}
				      routeSlaPageYear={this.routeSlaPageYear}
					 routeSatisfactionPageWeek={this.routeSatisfactionPageWeek}
				     routeSatisfactionPageMonth={this.routeSatisfactionPageMonth}
				     routeSatisfactionPageQuarter={this.routeSatisfactionPageQuarter}
				     routeSatisfactionPageYear={this.routeSatisfactionPageYear}	
                     routeComplaintsWeek={this.routeComplaintsWeek}
				     routeComplaintsMonth={this.routeComplaintsMonth}
				     routeComplaintsQuarter={this.routeComplaintsQuarter}
				     routeComplaintsYear={this.routeComplaintsYear}		
					 		key='PerformanceManger'
					 		/>
				 	);
				 	break;
				 	//值班管理
				 	case 'WatchDutyManageMent':
				 	return (<WatchDutyManageMent 
					 			dutyTableData = {this.props.dutyTableData}
					 			dutyTableId = {this.props.dutyTableId}
					 			dutyManageId = {this.props.dutyManageId}
					 			dutyManageData = {this.props.dutyManageData}
								setDutyTableId = {(data) => dispatch(operationActions.setDutyTableId(data))}
								get_dutyTableData = {() => dispatch(operationActions.get_dutyTableData())}
								set_dutyTable = {(data) =>dispatch(operationActions.set_dutyTable(data))}
								get_dutyPerson = {() => dispatch(operationActions.get_dutyPerson())}
								setDutyManageId = {(data) =>dispatch(operationActions.setDutyManageId(data))}
//								setDutyPersonInfo={(data) => dispatch(operationAction.setDutyPersonInfo(data))}
					 		/>
					 	)
				 	break;
//				 	值班日历管理
				 	case 'DutyCalendarManageMent':
				 	return	(
					 		<DutyCalendarManageMent 
					 		setGetCalendarDataFlag={getCalendarDataFlag=>dispatch(operationActions.setGetCalendarDataFlag(getCalendarDataFlag))}
					 		calendarData={this.props.calendarData}
					 		get_calendarData={(filter)=>dispatch(operationActions.get_calendarData(filter))}
					 		setSelectedCalendarDate={(filter)=>dispatch(operationActions.setSelectedCalendarDate(filter))}
					 		/>
				 	);
				 	break;
//				 	break;
				 	//报表管理
				 	case 'ReportManageMent':
				 	return	(
				 		<ReportManagement 
					 		key='ReportManagement'
					 		/>
				 	);
				 	break;
					//报表管理
				 	case 'WorkflowManageMent':
				 	return	(
					 		<WorkflowManageMent 
					 			
					 		/>
				 	);
				 	break;
				 		//sla管理详情页
				 	case 'PerformanceSLAWeek':
				 	return	(
					 		<PerformanceSLAWeek 
					SLAReachRateData={this.props.SLAReachRateData} 		
					 		/>
				 	);
				 	break;
				 	case 'PerformanceSLAMonth':
				 	return	(
					 		<PerformanceSLAMonth 
					 		SLAReachRateData={this.SLAReachRateData}	
					 		/>
				 	);
				 	break;
				 	case 'PerformanceSLAQuarter':
				 	return	(
					 		<PerformanceSLAQuarter 
					 		SLAReachRateData={this.SLAReachRateData}	
					 		/>
				 	);
				 	break;
				 	case 'PerformanceSLAYear':
				 	return	(
					 		<PerformanceSLAYear 
					 		SLAReachRateData={this.SLAReachRateData}	
					 		/>
				 	);
				 	break;
				// 满意度详情页
				 	case 'SatisfactionWeek':
				 	return	(
					 		<SatisfactionWeek 
						  	customeSatisfactionScoreData={this.customeSatisfactionScoreData}
					 		
					 		/>
				 	);
				 	break;
				 	case 'SatisfactionMonth':
				 	return	(
					 		<SatisfactionMonth 
						  	customeSatisfactionScoreData={this.customeSatisfactionScoreData}
					 		/>
				 	);
				 	break;
				 	case 'SatisfactionQuarter':
				 	return	(
					 		<SatisfactionQuarter 
						  	customeSatisfactionScoreData={this.customeSatisfactionScoreData}
					 		/>
				 	);
				 	break;
				 	case 'SatisfactionYear':
				 	return	(
					 		<SatisfactionYear 
						  	customeSatisfactionScoreData={this.customeSatisfactionScoreData}
					 		/>
				 	);
				 	break;
				//投诉量详情页 
				case 'ComplaintsWeek':
				 	return	(
					 		<ComplaintsWeek 
					 	customerComplaintsData={this.props.customerComplaintsData}
					 	
					 		/>
				 	);
				 	break;
				 	case 'ComplaintsMonth':
				 	return	(
					 		<ComplaintsMonth 
					 	customerComplaintsData={this.props.customerComplaintsData}	
					 		/>
				 	);
				 	break;
				 	case 'ComplaintsQuarter':
				 	return	(
					 		<ComplaintsQuarter 
					 	customerComplaintsData={this.props.customerComplaintsData}	
					 		/>
				 	);
				 	break;
				 	case 'ComplaintsYear':
				 	return	(
					 		<ComplaintsYear 
					 	customerComplaintsData={this.props.customerComplaintsData}	
					 		/>
				 	);
				 	break;
				};
			},
			render:function(){
				return(
					<div className='yuwei2'>
						<div className='systemleft'>
							<div className='systemTop'>
							   <b>运维管理</b>
							</div>
							<section>
									<ul className='systemleftlist'>
										<li className='fatherEventMangrHide' onClick={this.actionCall.bind(this,'FauleManageMent')} >
										  <img className='imgleft' src='img/lefticon/lefticon0.png' />
										  <img className='imgleft imgleftLight' src='img/lefticon/lefticon0a.png' />
												<b>事件管理</b>
										  <img className='imgright' id='lightEventM' src='img/lefticon/lefticon0ba.png'/>
										  <img className='imgrightHid' id='dimEventM' src='img/lefticon/lefticon0b.png'/>
										</li>
										     <div className='hidEventMangr' style={{"display":this.state.EventManagement}}>
												 <div className='hoverEvenManger fauleManger' onClick={this.actionCall.bind(this,'FauleManageMent')}>
												    <img className='imgright2' src='img/lefticon/lefticon1.png' />
												    <img className='imgright2 imgrightHid2 ' src='img/lefticon/lefticon1a.png' />	
													 <b className='hoverHidShow'>故障管理</b>
												 </div>
											     <div className='hoverEvenManger taskMager' onClick={this.actionCall.bind(this,'TaskManagement')}>
											           <img className='imgright2' src='img/lefticon/lefticon2.png' />
											           <img className='imgright2 imgrightHid2' src='img/lefticon/lefticon2a.png' />
												       <b className='hoverHidShow'>任务管理</b>
											     </div>
											     <div className='hoverEvenManger complaintManger' onClick={this.actionCall.bind(this,'ComplaintManagement')}>
												     <img className='imgright2' src='img/lefticon/lefticon3.png' />
												     <img className='imgright2 imgrightHid2' src='img/lefticon/lefticon3a.png' />
												     <b className='hoverHidShow'>投诉管理</b>	
											     </div>
										     </div>
										<li style={{"display":this.state.SLAManageMent}} onClick={this.actionCall.bind(this,'SLAManageMent')}>
											<img className='imgleft'  src='img/lefticon/lefticon4.png' />
											<img className='imgleft imgleftLight'  src='img/lefticon/lefticon4a.png' />
											<b>SLA管理</b>
										</li>										
										<li style={{"display":this.state.KnowledgeManageMent}} onClick={this.actionCall.bind(this,'KnowledgeManageMent')}>
											<img className='imgleft'  src='img/lefticon/lefticon5.png' />
											<img className='imgleft imgleftLight'  src='img/lefticon/lefticon5a.png' />
											
											<b>知识库管理</b>
										</li>										
										<li style={{"display":this.state.AnnounceManageMent}}  onClick={this.actionCall.bind(this,'AnnounceManageMent')}>
											<img className='imgleft'  src='img/lefticon/lefticon6.png' />
											<img className='imgleft imgleftLight'  src='img/lefticon/lefticon6a.png' />
											
											<b>公告管理</b>
										</li>										
										<li style={{"display":this.state.PerformanceManageMent}}  onClick={this.actionCall.bind(this,'PerformanceManageMent')}>
											<img className='imgleft'  src='img/lefticon/lefticon7.png' />
											<img className='imgleft imgleftLight'  src='img/lefticon/lefticon7a.png' />
											<b>绩效管理</b>
										</li>										
										<li style={{"display":this.state.WatchDutyManageMent}} className='dutyMangerclick' onClick={this.actionCall.bind(this,'WatchDutyManageMent')}>
											<img className='imgleft'  src='img/lefticon/lefticon8.png' />
											<img className='imgleft imgleftLight'  src='img/lefticon/lefticon8a.png' />
											<b>值班管理</b>
											 <img className='imgright'  src='img/lefticon/lefticon0ba.png'/>
											 <img className='imgrightHid' src='img/lefticon/lefticon0b.png'/>
										</li>
											<div className='hidReportManger'>
												 <div className='hoverEvenManger watchManger' onClick={this.actionCall.bind(this,'WatchDutyManageMent')}>
												     <img className='imgright2' src='img/lefticon/lefticon9.png' />
												     <img className='imgright2 imgrightHid2' src='img/lefticon/lefticon9a.png' />
													 <b className='hoverHidShow'>值班表管理</b> 	
												 </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'DutyCalendarManageMent')}>
												       <img className='imgright2' src='img/lefticon/lefticon10.png' />	
												       <img className='imgright2 imgrightHid2' src='img/lefticon/lefticon10a.png' />	
												      <b className='hoverHidShow'>值班日历管理</b>
											     </div>
											</div>
										<li style={{"display":this.state.ReportManagement}} onClick={this.actionCall.bind(this,'ReportManageMent')}>
											<img className='imgleft' id='abc' src='img/lefticon/lefticon11.png' />
											<img className='imgleft imgleftLight' id='abv' src='img/lefticon/lefticon11a.png' />	
											<b>报表管理</b>
										</li>	
										<li style={{"display":this.state.WorkflowManageMent}} onClick={this.actionCall.bind(this,'WorkflowManageMent')}>
											<img className='imgleft' id='abc' src='img/lefticon/lefticon11.png' />
											<img className='imgleft imgleftLight' id='abv' src='img/lefticon/lefticon11a.png' />	
											<b>流程引擎</b>
										</li>	
							        </ul>														
							</section>
						</div>						
						<div className='rightYunwei2'>{this.conFunction()}</div>
					</div>
			)}
		});
function mapStateToProps(state) {
	const {slaInfoData,slaInfoId,flowPicData,workOrderList,fauleStatusData,fauleWorkOrderTypeData,topicInfoListData,dutyManageData,dutyManageId,dutyTableData,calendarData,knowledgeManagerData,customerComplaintsData,customeSatisfactionScoreData,SLAReachRateData,taskOrderListData,complaintOrderListData} = state.operationReducer;
	return {
		slaInfoData:slaInfoData,
		slaInfoId:slaInfoId,
		flowPicData:flowPicData,
		workOrderList:workOrderList,
		fauleStatusData:fauleStatusData,
		fauleWorkOrderTypeData:fauleWorkOrderTypeData,
		topicInfoListData,topicInfoListData,
  	dutyManageData:dutyManageData,
		dutyManageId:dutyManageId,
		dutyTableData:dutyTableData,
		calendarData:calendarData,
		knowledgeManagerData:knowledgeManagerData,
			customerComplaintsData:customerComplaintsData,
			customeSatisfactionScoreData:customeSatisfactionScoreData,
			SLAReachRateData:SLAReachRateData,
        taskOrderListData:taskOrderListData,
        complaintOrderListData:complaintOrderListData
	}
}
export default connect(mapStateToProps)(OperationManageView);