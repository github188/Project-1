//硬件资产入库页面
import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute} from 'react-router';
import {connect} from 'react-redux'
//var ReactRouter = require('react-router');
//var History = ReactRouter.History;
import AssetsHardInManageMent from './assetsHardManage/assetsHardInManage/assetsHardInManageView';
//import AssetsHardCancelManageMent from './assetsHardManage/assetsHardCancelManageView';
import AssetsHardCountManageMent from './assetsHardManage/assetsHardCountManage/assetsHardCountManageView';
//import AssetsHardInvaildManageMent from './assetsHardManage/assetsHardInvalidManageView';
import AssetsHardOutManageMent from './assetsHardManage/assetsHardOutManage/assetsHardOutManageView';
import AssetsHardTransferManageMent from './assetsHardManage/assetsHardTransferManage/assetsHardTransferManageView';
//import AssetsHardTransferManageMent from './assetsHardManage/assetsHardTransferManageView';
//import AnnounceManageMentView  from './assetsHardManage/assetsHardInManageView';
import AssetsCountManageMent  from './assetsCountQueryView';
import Store from '../../../../../../server/store';
import * as assetAction from "../../../../../../actions/assetManage_action";
import * as dataDictAction from "../../../../../../actions/dataDict_action";
import * as systemAction from "../../../../../../actions/system_action";

const AssetsManageView = React.createClass({
	//mixins: [History],
			getInitialState:function(){
				return{
					page:"AssetsCountManageMent"
				}
			},
	componentWillMount:function(){
				const {dispatch} = this.props;
				var weeks='week'
				var months='month'
				var quarters='quarter'
				var years='year'
				var week=[weeks]
				var month=[months]
				var quarter=[quarters]
				var year=[years]
				dispatch(assetAction.get_hardOrSoftWareStatisticsData()); 
				dispatch(assetAction.get_softWareStatisticsData()); 
				dispatch(assetAction.get_sparePartsData());
				dispatch(assetAction.get_hardWareOverdueAssetsData());
				dispatch(assetAction.get_softWareOverdueAssetsData());
				dispatch(assetAction.get_hardWareFaultRateData(week));
				
				var goBack = this.props.goBack;
				if(goBack != null && goBack!= "" && goBack != undefined){
					this.setState({page:goBack});
				}
	},
	componentDidMount:function(){
				var flag =true;
				var flag1 =true;
				var flag2 =true;
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
				$('.sparePartsManagerClick').click(function(){
					 $(".hidSparePartsManger").slideToggle("slow");
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
					  if(flag2){
					 	$('.spareParts').eq(2).hide();
					 	$('.sparePartsHid').eq(2).show();
					 	flag2 = false;
					 }else{
					 	$('.spareParts').eq(2).show();
					 	$('.sparePartsHid').eq(2).hide();
					 	flag2 = true;
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
			actionCall:function(param){
				const {dispatch} = this.props;
				this.setState({page:param});
				var weeks='week'
				var months='month'
				var quarters='quarter'
				var years='year'
				var week=[weeks]
				var month=[months]
				var quarter=[quarters]
				var year=[years]
				switch(param){
					case "AssetsCountManageMent":
						dispatch(assetAction.get_softWareStatisticsData());  
					 	dispatch(assetAction.get_hardOrSoftWareStatisticsData());
					 	dispatch(assetAction.get_sparePartsData());
					 	dispatch(assetAction.get_hardWareOverdueAssetsData());
					 	dispatch(assetAction.get_softWareOverdueAssetsData());
					 	dispatch(assetAction.get_hardWareFaultRateData(week));
					break;
					case "AssetsHardInManageMent":
						dispatch(assetAction.get_HardWareStorageData());
						dispatch(dataDictAction.get_projectData());
						dispatch(systemAction.get_organizationData());
						dispatch(dataDictAction.get_brandData());
						dispatch(dataDictAction.get_locationData());
						dispatch(dataDictAction.get_magUnitData());
						dispatch(dataDictAction.get_productTypes());
						dispatch(dataDictAction.get_productChildTypes());
					break;							
				};
			
			},
			AssetsCountManageMentWeek:function(){
				const {dispatch} = this.props;
				var weeks='week'
				var months='month'
				var quarters='quarter'
				var years='year'
				var week=[weeks]
				var month=[months]
				var quarter=[quarters]
				var year=[years]
				dispatch(assetAction.get_hardWareFaultRateData(week));
			},
			AssetsCountManageMentMonth:function(){
				var weeks='week'
				var months='month'
				var quarters='quarter'
				var years='year'
				var week=[weeks]
				var month=[months]
				var quarter=[quarters]
				var year=[years]
				const {dispatch} = this.props;
				dispatch(assetAction.get_hardWareFaultRateData(month));
				
			},
			AssetsCountManageMentQuarter:function(){
				var weeks='week'
				var months='month'
				var quarters='quarter'
				var years='year'
				var week=[weeks]
				var month=[months]
				var quarter=[quarters]
				var year=[years]
				const {dispatch} = this.props;
				dispatch(assetAction.get_hardWareFaultRateData(quarter));
				
			},
			AssetsCountManageMentYear:function(){
				var weeks='week'
				var months='month'
				var quarters='quarter'
				var years='year'
				var week=[weeks]
				var month=[months]
				var quarter=[quarters]
				var year=[years]
				const {dispatch} = this.props;
				dispatch(assetAction.get_hardWareFaultRateData(year));
				
			},
	//程艳鸿		20170206    组件调用方法
			conFunction:function(){
				const {dispatch} = this.props;
				var param = this.state.page;
				switch(param){
					//资产统计查询
				 	case 'AssetsCountManageMent':
				 	return	(
						 						 		<AssetsCountManageMent
								 hardOrSoftWareStatisticsData = {this.props.hardOrSoftWareStatisticsData}
								 softWareStatisticsData = {this.props.softWareStatisticsData}
								 sparePartsData = {this.props.sparePartsData}
								 hardWareOverdueAssetsData = {this.props.hardWareOverdueAssetsData}
								 softWareOverdueAssetsData = {this.props.softWareOverdueAssetsData}
								 hardWareFaultRateData = {this.props.hardWareFaultRateData}
								 AssetsCountManageMentWeek = {this.AssetsCountManageMentWeek}
								 AssetsCountManageMentMonth = {this.AssetsCountManageMentMonth}
								 AssetsCountManageMentQuarter = {this.AssetsCountManageMentQuarter}
								 AssetsCountManageMentYear = {this.AssetsCountManageMentYear}
								 
						 		/>
				 	);
				 	break;
					//硬件资产-硬件资产统计
				 	case 'AssetsHardCountManageMent':
				 	return	(
					 		<AssetsHardCountManageMent
					 		/>
				 	);
				 	break;
				 //硬件资产入库
				 	case 'AssetsHardInManageMent':
				 	return	(
					 		<AssetsHardInManageMent
					 			hardWareStorageData={this.props.hardWareStorageData}
					 			hardWareStorageCount={this.props.hardWareStorageCount}
								setHardWarestorageId={(param) => dispatch(assetAction.setHardWarestorageId(param))}
					 			delete_hardWareStorageData={(param) => dispatch(assetAction.delete_hardWareStorageData(param))}
					 			get_HardWareStorageData={(param) => dispatch(assetAction.get_HardWareStorageData(param))}
					 			setAssetCode={(param) => dispatch(assetAction.setAssetCode(param))}
					 			setHardWareInreviewData={(param) => dispatch(assetAction.setHardWareInreviewData(param))}
					 			edit_hardWareStorageData={(param) => dispatch(assetAction.edit_hardWareStorageData(param))}
					 			setEditMagUnitId={(param) => dispatch(dataDictAction.setEditMagUnitId(param))}
					 			setProjectId={(param) => dispatch(dataDictAction.setProjectId(param))}
					 			setOrganizationId={(param) => dispatch(systemAction.setOrganizationId(param))}
					 			setBrandId={(param) => dispatch(dataDictAction.setBrandId(param))}
					 			setLocationId={(param) => dispatch(dataDictAction.setLocationId(param))}
					 			setMagUnitId={(param) => dispatch(dataDictAction.setMagUnitId(param))}
					 			setProductTypeId={(param) => dispatch(dataDictAction.setProductTypeId(param))}
					 			setProductChildTypeId={(param) => dispatch(dataDictAction.setProductChildTypeId(param))}
					 		/>
				 	);
				 	break;
				 	//硬件资产出库
				 	case 'AssetsHardOutManageMent':
				 	return (<AssetsHardOutManageMent 
					 		/>
					 	)
				 	break;
				 	//硬件资产调拨
				 	case 'AssetsHardTransferManageMent':
				 	return	(
					 		<AssetsHardTransferManageMent 
					 		/>
				 	);
				 	break;
				 	//硬件资产报废
				 	case 'AssetsHardInvaildManageMent':
				 	return	(
					 		<AssetsHardInvaildManageMent 
					 		/>
				 	);
				 	break;
				 	//硬件资产核销
				 	case 'AssetsHardCancelManageMent':
				 	return	(
					 		<AssetsHardCancelManageMent 
					 		/>
				 	);
				 	break;
				 	//软件资产-软件资产统计
//				 	case 'AssetsSoftCountManageMent':
//				 	return	(
//					 		<AssetsSoftCountManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//软件资产入库
//				 	case 'AssetsSoftInManageMent':
//				 	return	(
//					 		<AssetsSoftInManageMent 
//					 		/>
//				 	);
//				 	break;
//				    //软件资产出库
//				 	case 'AssetsSoftOutManageMent':
//				 	return	(
//					 		<AssetsSoftOutManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//软件资产维护
//				 	case 'AssetsSoftMaintManageMent':
//				 	return	(
//					 		<AssetsSoftMaintManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//软件资产报废
//				 	case 'AssetsSoftValidManageMent':
//				 	return	(
//					 		<AssetsSoftValidManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//备品备件-备品备件统计
//				 	case 'AssetsSpareCountManageMent':
//				 	return	(
//					 		<AssetsSpareCountManageMent 
//					 		/>
//				 	);
//				 	break;
//				    //备品备件申购
//				    case 'AssetsSpareBuyManageMent':
//				 	return	(
//					 		<AssetsSpareBuyManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//备品备件入库
//				 	case 'AssetsSpareInManageMent':
//				 	return	(
//					 		<AssetsSpareInManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//备品备件出库
//				 	case 'AssetsSpareOutManageMent':
//				 	return	(
//					 		<AssetsSpareOutManageMent 
//					 		/>
//				 	);
//				 	break;
//				 	//资产报表
//				 	case 'AssetsReportManageMent':
//				 	return	(
//					 		<AssetsReportManageMent 
//					 		/>
//				 	);
//				 	break;
				};
			},
			render:function(){
				return(
					<div className='assets' style={{"width":"100%","min-height":"1070px","background":"#eef5f8","display":"-webkit-box","position":"relative","font-family":"微软雅黑"}}>
						<div className='systemleft'>
							<div className='systemTop'>
							   <b>资产管理</b>
							</div>
							<section>
									<ul className='systemleftlist'>
										<li style={{"display":this.state.assetsCountManageMent}} onClick={this.actionCall.bind(this,'AssetsCountManageMent')}>
											<img className='imgleft'  src='img/assets/assetsCount.png' />
											<img className='imgleft imgleftLight'  src='img/assets/assetsCountHover.png' />
											<b>资产统计查询</b>
										</li>
										<li className='fatherEventMangrHide' onClick={this.actionCall.bind(this,'AssetsHardCountManageMent')} >
										    <img className='imgleft' src='img/assets/assetsHard.png' />
										    <img className='imgleft imgleftLight' src='img/assets/assetsHardHover.png' />
											<b>硬件资产</b>
										    <img className='imgright' id='lightEventM' src='img/lefticon/lefticon0ba.png'/>
										    <img className='imgrightHid' id='dimEventM' src='img/lefticon/lefticon0b.png'/>
										</li>
										     <div className='hidEventMangr' style={{"display":this.state.EventManagement}}>
												 <div className='hoverEvenManger fauleManger' onClick={this.actionCall.bind(this,'AssetsHardCountManageMent')}>
												    <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												    <img className='imgright2 imgrightHid2 ' src='img/assets/assetsNavSecondHover.png' />	
													<b className='hoverHidShow'>硬件资产统计</b>
												 </div>
											     <div className='hoverEvenManger taskMager' onClick={this.actionCall.bind(this,'AssetsHardInManageMent')}>
											           <img className='imgright2' src='img/assets/assetsNavSecond.png' />
											           <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
												       <b className='hoverHidShow'>硬件资产入库</b>
											     </div>
											     <div className='hoverEvenManger complaintManger' onClick={this.actionCall.bind(this,'AssetsHardOutManageMent')}>
												     <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												     <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
												     <b className='hoverHidShow'>硬件资产出库</b>	
											     </div>
											     <div className='hoverEvenManger complaintManger' onClick={this.actionCall.bind(this,'AssetsHardTransferManageMent')}>
												     <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												     <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
												     <b className='hoverHidShow'>硬件资产调拨</b>	
											     </div>
											     <div className='hoverEvenManger complaintManger' onClick={this.actionCall.bind(this,'AssetsHardInvaildManageMent')}>
												     <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												     <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
												     <b className='hoverHidShow'>硬件资产报废</b>	
											     </div>
											     <div className='hoverEvenManger complaintManger' onClick={this.actionCall.bind(this,'AssetsHardCancelManageMent')}>
												     <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												     <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
												     <b className='hoverHidShow'>硬件资产核销</b>	
											     </div>
										     </div>
										<li style={{"display":this.state.assetsSoftCountManageMent}} className='dutyMangerclick' onClick={this.actionCall.bind(this,'AssetsSoftCountManageMent')}>
											<img className='imgleft'  src='img/assets/assetsSoft.png' />
											<img className='imgleft imgleftLight'  src='img/assets/assetsSoftHover.png' />
											<b>软件资产</b>
											 <img className='imgright'  src='img/lefticon/lefticon0ba.png'/>
											 <img className='imgrightHid' src='img/lefticon/lefticon0b.png'/>
										</li>
											<div className='hidReportManger'>
												 <div className='hoverEvenManger' onClick={this.actionCall.bind(this,'AssetsSoftCountManageMent')}>
												     <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												     <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
													 <b className='hoverHidShow'>软件资产统计</b> 	
												 </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSoftInManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>软件资产入库</b>
											     </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSoftOutManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>软件资产出库</b>
											     </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSoftMaintManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>软件资产维护</b>
											     </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSoftValidManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>软件资产报废</b>
											     </div>
											</div>  
										<li style={{"display":this.state.assetsSpareCountManageMent}} className='sparePartsManagerClick' onClick={this.actionCall.bind(this,'AssetsSpareCountManageMent')}>
											<img className='imgleft'  src='img/assets/assetsSpare.png' />
											<img className='imgleft imgleftLight'  src='img/assets/assetsSpareHover.png' />
											<b>备品备件</b>
											 <img className='imgright'  src='img/lefticon/lefticon0ba.png'/>
											 <img className='imgrightHid' src='img/lefticon/lefticon0b.png'/>
										</li>
											<div className='hidSparePartsManger'>
												 <div className='hoverEvenManger' onClick={this.actionCall.bind(this,'AssetsSpareCountManageMent')}>
												     <img className='imgright2' src='img/assets/assetsNavSecond.png' />
												     <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />
													 <b className='hoverHidShow'>备品备件统计</b> 	
												 </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSpareBuyManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>备品备件申购</b>
											     </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSpareInManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>备品备件入库</b>
											     </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.actionCall.bind(this,'AssetsSpareOutManageMent')}>
												       <img className='imgright2' src='img/assets/assetsNavSecond.png' />	
												       <img className='imgright2 imgrightHid2' src='img/assets/assetsNavSecondHover.png' />	
												      <b className='hoverHidShow'>备品备件出库</b>
											     </div>
											</div> 	
										<li style={{"display":this.state.assetsReportManageMent}} onClick={this.actionCall.bind(this,'AssetsReportManageMent')}>
											<img className='imgleft'  src='img/lefticon/lefticon11.png' />
											<img className='imgleft imgleftLight'  src='img/lefticon/lefticon11a.png' />
											<b>资产报表</b>
										</li>										
							        </ul>														
							</section>
						</div>						
						<div className='rightAssets'>{this.conFunction()}</div>
					</div>
			)
			}
		});
function mapStateToProps(state) {
	const {hardOrSoftWareStatisticsData,softWareStatisticsData,sparePartsData,hardWareOverdueAssetsData,softWareOverdueAssetsData,hardWareFaultRateData,hardWareStorageData,hardWareStorageCount,goBack} = state.assetManageReducer;
	return {
		hardOrSoftWareStatisticsData:hardOrSoftWareStatisticsData,
		softWareStatisticsData:softWareStatisticsData,
		sparePartsData:sparePartsData,
		hardWareOverdueAssetsData:hardWareOverdueAssetsData,
		softWareOverdueAssetsData:softWareOverdueAssetsData,
		hardWareFaultRateData:hardWareFaultRateData,
		hardWareStorageData:hardWareStorageData,
		hardWareStorageCount:hardWareStorageCount,
		goBack:goBack
		
	}
}
export default connect(mapStateToProps)(AssetsManageView);