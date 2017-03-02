/**
* 各功能模块，路由地址配置
*/

var React = require('react');
//var Router = require('react-router');
//var Route = Router.Route;
//var DefaultRoute = Router.DefaultRoute;
//var RouteHandler = Router.RouteHandler;

var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./views/pages/app');
import StartForm from './views/component/startfrom';
import register from './views/component/register';//注册页面
import twoCodeLogin from './views/component/twoCodeLogin';
import CityIndex from './views/itoss/page/indexPages/indexPage1'; //市级首页
import AindexPage from './views/itoss/page/indexPages/indexPage2'; //㿅级首页
//import Aindex from './views/itoss/component/indexPages/department/Aindex/Aindex'//领导首页
import SystemPage from './views/itoss/page/systemManage/systemManage'//系统设置
import OperationManagePage  from './views/itoss/page/operationManage/operationManagePage';//运维管理菜单页面
//斿长然  20161223  服务级别协议相关代码start
import SwscSLAAddDetailPage  from './views/itoss/page/operationManage/swscSLAAddDetailPage';//服务级别协议新建页面
import SwscSLAEditDetailPage  from './views/itoss/page/operationManage/swscSLAEditDetailPage';//服务级别协议编辑页面

//斿长然  20161223  服务级别协议相关代码end
//斿长然  20161223  故障管理相关代码start
import SwscFauleAddManageMentPage from './views/itoss/page/operationManage/swscFauleAddManageMentPage';
//斿长然  20161223  故障管理相关代码end

//斿长然  20170203  任务管理相关代码start
import SwscTaskAddManagementPage from './views/itoss/page/operationManage/swscTaskAddManagementPage';
import SwscTaskEditManagementPage from './views/itoss/page/operationManage/swscTaskEditManagementPage';
//斿长然  20170203  任务管理相关代码end

//斿长然  20170206  投诉管理相关代码start
import SwscComplaintAddManagementPage from './views/itoss/page/operationManage/swscComplaintAddManagementPage';
import SwscComplaintEditManagementPage from './views/itoss/page/operationManage/swscComplaintEditManagementPage';
//斿长然  20170206  投诉管理相关代码end
//2017111刘家顺 路由页面
import SwscNewKnowledgeMangeMent  from './views/itoss/page/operationManage/swscNewKnowledgeMangeMent'//新建知识库
import SwscPutKnowledgeMangeMent  from './views/itoss/page/operationManage/swscPutKnowledgeMangeMent'//发布知识库
import SwscReviewedKnowledgeMangeMent  from './views/itoss/page/operationManage/swscReviewedKnowledgeMangeMent'//审核知识库
import SwscDetailKnowledgeMangeMent  from './views/itoss/page/operationManage/swscDetailKnowledgeMangeMent'//详情知识库
import SwscEditKnowledgeMangeMent  from './views/itoss/page/operationManage/swscEditKnowledgeMangeMent'//编辑知识库
import ReportMangmentFrom  from './views/itoss/component/indexPages/department/operationManage/swscReportMangmentFrom'//报表管理 表
import ReportMangmentPie  from './views/itoss/component/indexPages/department/operationManage/swscReportMangmentPie'//报表管理 图
//曹志强	20170110  公告管理相关代码
import AnnouceManageAddPage  from './views/itoss/page/operationManage/swscAnnounceManage/annouceManageAddPage';//堿加公告管理菜单页面
//曹志强 20170206 资产管理
import AssetManagePage from './views/itoss/page/assetManage/assetManagePage';
//import AssetManagePage from './views/itoss/page/assetManage/swscAssetstsHardMange/swscAssetsHardInMange/assetManagePage';
//程艳鸿	20170209   资产管理采购入库
import SwscPurchaseNewPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscPurchaseNewPage';
import SwscBorrowNewPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscBorrowNewPage';//资产硬件管理-新建借用页面
import SwscRepairNewPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscRepairNewPage';//资产硬件管理-新建维修页面
import SwscPurchaseDetailPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscPurchaseDetailPage';//资产硬件管理-采购入库详情界面
import SwscBorrowDetailPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscBorrowDetailPage';//资产硬件管理-借用入库详情界面
import SwscRepairDetailPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscRepairDetailPage';//资产硬件管理-维修入库详情界面
import PurchaseHardInAuditPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/purchaseHardInAuditPage';//资产硬件管理-采购入库审核界面
import BorrowHardInAuditPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/borrowHardInAuditPage';//资产硬件管理-借用入库审核界面
import RepairHardInAuditPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/repairHardInAuditPage';//资产硬件管理-维修入库审核界面
import PurchaseHardInEditPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/purchaseHardInEditPage';//资产硬件管理-采购入库审核界面
import BorrowHardInEditPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/borrowHardInEditPage';//资产硬件管理-借用入库审核界面
import RepairHardInEditPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardInManage/repairHardInEditPage';//资产硬件管理-维修入库审核界面
//程艳鸿 20170221 硬件资产出库
import HardOutBorrowPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardOutManage/hardOutBorrowPage';//硬件资产出库借用界面
import HardOutRepairPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardOutManage/hardOutRepairPage';//资产硬件出库维修页面
import HardTransferPage from './views/itoss/page/assetManage/swscAssetsHardMange/swscAssetsHardTransferManage/hardTransferPage';//硬件资产调拨界面
import MonitorPage from './views/itoss/page/equipmentManage/monitorPage'; //资源监测-统计监俧平台
import CreateResourcePage from './views/itoss/page/equipmentManage/createResourcePage'; //资源监测-统计监俧平台-添加资源
import CreateMonitorPage from './views/itoss/page/equipmentManage/createMonitorPage'; //资源监测-统计监俧平台-添加监测器

import AlarmLogPage from './views/itoss/page/equipmentManage/alarmLogPage';//资源监测-告警-告警日志
import AlarmRulePage from './views/itoss/page/equipmentManage/alarmRulePage';//资源监测-告警-告警规则
import AlarmRulesIssuePage from './views/itoss/page/equipmentManage/alarmRulesIssuePage';//资源监测-告警-㿅级升级配置
import AlarmEventPage from './views/itoss/page/equipmentManage/alarmEventPage';//资源监测-告警-告警事件列表
import AddAlarmRulePage from './views/itoss/page/equipmentManage/addAlarmRulePage';//资源监测-告警-新建告警规则
import EditAlarmRulePage from './views/itoss/page/equipmentManage/editAlarmRulePage';//资源监测-告警-编辑告警规则
import ReportError from './views/itoss/page/equipmentManage/reportErrorPage';//资源监测-告警-告警升级列表

import AlarmConfigPage from './views/itoss/page/equipmentManage/alarmConfigPage';//资源监测-设置-视频阀值设置

import SettingManage from './views/itoss/page/equipmentManage/settingManage';//资源监测-设置-资源设置、资源监测-告警-模板设置、资源监测-设置-其他监测器设置

import DashboardManage from './views/itoss/page/equipmentManage/dashboardManage.js';//资源监测-仪表板中心
import ViewManage from './views/itoss/page/equipmentManage/viewManage';//资源监测-视图

//reset by Yuchen
import AssetStatistic from './views/itoss/page/assetManage/statisticPage';//资产统计
import AssetListPage from './views/itoss/page/assetManage/assetManageListPage';//资产统计列表
import AssetCreateView from './views/itoss/page/assetManage/createViewPage';//新建资产
import AssetMaintain from './views/itoss/page/assetManage/maintainPage';//资产维修清单
import AssetMaintainCreate from './views/itoss/page/assetManage/maintainCreatePage';//新建资产维修单
import AssetMonitor from './views/itoss/page/assetManage/monitorPage'; //资产监俧同步
import AssetDetail from './views/itoss/page/assetManage/detailPage';//资产详情
import AssetAssetMaintain from './views/itoss/page/assetManage/assetMaintainPage';//资产维保
import AssetMaintainDetail from './views/itoss/page/assetManage/maintainDetailPage';//维修单详情

import TopologyNavPage from './views/itoss/page/networkTopology/topologyNavPage';//网络拓扑-拓扑导航

// var TestFlow = require('./views/itoss/page/testFlow');
// var TestTree = require('./views/itoss/page/testTree');
// var TestBar = require('./views/itoss/page/testNavbar');
//
// var DashBoardPage = require('./views/itoss/page/assetManage/dashBoardPage');//资产管理仪表盘
import MyOperationWorkSpace  from './views/itoss/page/operationManage/myOperationWorkSpace';//工单管理-工作台
import CreateOperationPage from './views/itoss/page/operationManage/createOperationPage';//新建工单
import EditOperationPage from './views/itoss/page/operationManage/editOperationPage';//编辑工单
import FlowDesignPage from './views/itoss/page/operationManage/flowDesignPage';//流程设计
import FlowDesignEditPage from './views/itoss/page/operationManage/flowDesignEditPage';//流程编辑
import DutyManageCalendarPage from './views/itoss/page/operationManage/dutyManageCalendarPage';//值班管理-值班日㿆
import DutyManageRotaSetPage from './views/itoss/page/operationManage/dutyManageRotaSetPage';//值班管理-值班表设置

import AutoWorkOrderRulesPage from './views/itoss/page/operationManage/autoWorkOrderRulesPage';//自动工单规则

import WorkOrderTemplateListPage from './views/itoss/page/operationmanage/workOrderTemplateListPage';//工单模板列表
import CreateWorkOrderTemplatePage from './views/itoss/page/operationmanage/createWorkOrderTemplatePage';//创建工单模板

var SlaManage = require('./views/itoss/page/baseManage/slaManage');//服务级别协议
var NoticeManage = require('./views/itoss/page/baseManage/noticeManage');////发布管理
var Repository = require('./views/itoss/page/baseManage/repository');////知识库


//视频类设备报表
import CameraVideoCheckReportPage from './views/itoss/page/reportManage/videoReport/cameraVideoCheckReportPage';//报表管理-摄影机视频考核
import CameraOfflineStatisticsReportPage from './views/itoss/page/reportManage/videoReport/cameraOfflineStatisticsReportPage';//报表管理-摄像机离线状态详细统计报表
import CameraMediaLostStatisticsReportPage from './views/itoss/page/reportManage/videoReport/cameraMediaLostStatisticsReportPage';//报表管理-摄像机录像丢失详细统计报表
import CameraVideoLostStatisticsReportPage from './views/itoss/page/reportManage/videoReport/cameraVideoLostStatisticsReportPage';//报表管理-摄像机视频丢失详细统计报表
import CameraVideoQualityStatisticsReportPage from './views/itoss/page/reportManage/videoReport/cameraVideoQualityStatisticsReportPage';//报表管理-摄像机视频质量嬿时统计
import CameraOnlineTrendsReportPage from './views/itoss/page/reportManage/videoReport/cameraOnlineTrendsReportPage';//报表管理-摄像机在线趋势图

//㿅级视频类设备报表
import DepCameraVideoCheckReportPage from './views/itoss/page/reportManage/depVideoReport/cameraVideoCheckReportPage';//㿅级报表管理-摄影机视频考核

//雿视频类设备报表
import DVRStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/DVRStatisticsReportPage';//DVR统计报表
import NVRStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/NVRStatisticsReportPage';//NVR统计报表
import EncoderStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/encoderStatisticsReportPage';//编码器统计报表
import ServerStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/serverStatisticsReportPage';//服务器统计报表
import NetworkStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/networkStatisticsReportPage';//网络设备统计报表
import FirewallStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/firewallStatisticsReportPage';//防火墙统计报表
import DatabaseStatisticsReportPage from './views/itoss/page/reportManage/nonVideoReport/databaseStatisticsReportPage';//数据库统计报表

import DepStatisticsReportPage from './views/itoss/page/reportManage/depNonVideoReport/depStatisticsReportPage';//雿视频类设备报表

import OrderStatisticsReport from './views/itoss/page/reportManage/orderReport/orderReportPage.js';//市级工单报表
import DepOrderReportView from './views/itoss/page/reportManage/depOrderReport/depOrderReportPage.js';//㿅级工单报表

import AssetStatisticReport from './views/itoss/page/reportManage/assetReport/assetStatisticPage';//资产统计报表
import AssetMaintainPage from './views/itoss/page/reportManage/assetReport/assetMaintainPage';//资产统计报表

import ChargeStatisticsReport from './views/itoss/page/reportManage/chargeReport/chargeReportPage.js';//计费考核统计

import SystemGroupAddPage from './views/itoss/page/systemManage/systemGroupAddPage.js';//系统组织管理
import SystemUserListPage from './views/itoss/page/systemManage/systemUserListPage.js';//用户管理列表
import SystemUserAddPage from './views/itoss/page/systemManage/systemUserAddPage.js';//添加用户
import SystemRoleManagePage from './views/itoss/page/systemManage/systemRoleManagePage.js';//角色和权限管理
import DataDictPage from './views/itoss/page/dataDicPages/dataDictPage.js';//数据字典
import SystemOnLineUserListPage from './views/itoss/page/systemManage/systemOnlineUserListPage.js';//在线用户
import SystemInfoPage from './views/itoss/page/systemManage/systemInfoPage.js';//软件许可

import ExportInPage from './views/itoss/page/exportInPage.js'

var AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={StartForm}/>
        <Route path="twoCodeLogin" component={twoCodeLogin}/>
        <Route path='StartForm' component={StartForm}/>
        <Route path='register' component={register}/>
        <Route path='AindexPage' component={AindexPage}/>
        <Route path="cityIndex" component={CityIndex}/>
        <Route path="cityIndex/:token/:loginid/:loginrole" component={CityIndex}></Route>
        //系统管理
        <Route path="SystemPage" component={SystemPage}/>
        //运维管理
        
		<Route path="operationManage/operationManagePage" component={OperationManagePage}></Route>
            //斿长然  20161223  服务级别协议相关代码start
            <Route path="operationManage/slaAddDetail" component={SwscSLAAddDetailPage}></Route>
            <Route path="operationManage/slaEditDetail" component={SwscSLAEditDetailPage}></Route>
            //斿长然  20161223  服务级别协议相关代码end
            //斿长然  20161223  故障管理相关代码start
            <Route path="operationManage/fauleAddManageMent" component={SwscFauleAddManageMentPage}></Route>
        {/*<Route path="operationManage/fauleFieldServiceTemplate" component={SwscFauleAddManageMentPage}></Route>*/}
            //斿长然  20161223  故障管理相关代码end
            //斿长然  20170203 任务管理相关代码start
            <Route path="operationManage/taskManagement/taskAddManagement" component={SwscTaskAddManagementPage}></Route>
            <Route path="operationManage/taskManagement/taskEditManagement" component={SwscTaskEditManagementPage}></Route>
            //斿长然  20160203  任务管理相关代码end
            //斿长然  20170206 投诉管理相关代码start
            <Route path="operationManage/complaintManagement/complaintAddManagement" component={SwscComplaintAddManagementPage}></Route>
            <Route path="operationManage/complaintManagement/complaintEditManagement" component={SwscComplaintEditManagementPage}></Route>
            //斿长然  20160206  投诉管理相关代码end
            //曹志强	20170110	公告管理相关代码
		<Route path="operationManage/annouceManageAddPage" component={AnnouceManageAddPage}></Route>
        //2017111 绩效 报表知识库 刘家顺
		<Route path="operationManage/knowledgeMangeMentNew" component={SwscNewKnowledgeMangeMent}></Route>
        <Route path="operationManage/knowledgeMangeMentPut" component={SwscPutKnowledgeMangeMent}></Route>
        <Route path="operationManage/knowledgeMangeMentReviewed" component={SwscReviewedKnowledgeMangeMent}></Route>
        <Route path="operationManage/knowledgeMangeMentDetail" component={SwscDetailKnowledgeMangeMent}></Route>
        <Route path="operationManage/knowledgeMangeMentEdit" component={SwscEditKnowledgeMangeMent}></Route>
        <Route path="ReportMangmentFrom"    component={ReportMangmentFrom}></Route>
        <Route path="ReportMangmentPie"    component={ReportMangmentPie}></Route>
        //曹志强		20170206	硬件资产代码
		<Route path="assetManage/assetManagePage" component={AssetManagePage}></Route>
//		<Route path="swscAssetsHardInMange/assetManagePage" component={AssetManagePage}></Route>
		//程艳鸿      20170209    硬件资产管理采购入库
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscPurchaseNewPage" component={SwscPurchaseNewPage}></Route>
		//程艳鸿      20170209    硬件资产管理借用入库
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscBorrowNewPage" component={SwscBorrowNewPage}></Route>
		//程艳鸿      20170209    硬件资产管理维修入库
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscRepairNewPage" component={SwscRepairNewPage}></Route>
		//程艳鸿      20170220    硬件资产管理采购入库详情界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscPurchaseDetailPage" component={SwscPurchaseDetailPage}></Route>
		//程艳鸿      20170220    硬件资产管理借用入库详情界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscBorrowDetailPage" component={SwscBorrowDetailPage}></Route>
		//程艳鸿      20170220    硬件资产管理维修入库详情界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/swscRepairDetailPage" component={SwscRepairDetailPage}></Route>
		//程艳鸿      20170220    硬件资产管理采购入库审核界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/purchaseHardInAuditPage" component={PurchaseHardInAuditPage}></Route>
		//程艳鸿      20170220    硬件资产管理借用入库审核界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/borrowHardInAuditPage" component={BorrowHardInAuditPage}></Route>
		//程艳鸿      20170220    硬件资产管理维修入库审核界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/repairHardInAuditPage" component={RepairHardInAuditPage}></Route>
		//程艳鸿      20170220    硬件资产管理采购入库审核不通过编辑界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/purchaseHardInEditPage" component={PurchaseHardInEditPage}></Route>
		//程艳鸿      20170220    硬件资产管理借用入库审核不通过编辑界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/borrowHardInEditPage" component={BorrowHardInEditPage}></Route>
		//程艳鸿      20170220    硬件资产管理维修入库审核不通过编辑界面
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardInManage/repairHardInEditPage" component={RepairHardInEditPage}></Route>
		//程艳鸿      20170221    硬件资产借用
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardOutManage/hardOutBorrowPage" component={HardOutBorrowPage}></Route>
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardOutManage/hardOutRepairPage" component={HardOutRepairPage}></Route>
		//程艳鸿      20170224    硬件资产调拨
		<Route path="assetManage/swscAssetsHardMange/swscAssetsHardTransferManage/hardTransferPage" component={HardTransferPage}></Route>
        <Route path="equipmentManage/MonitorPage" component={MonitorPage}></Route>
        <Route path="equipmentManage/CreateResourcePage" component={CreateResourcePage}></Route>
        <Route path="equipmentManage/CreateMonitorPage" component={CreateMonitorPage}></Route>
        <Route path="equipmentManage/alarmLogPage" component={AlarmLogPage}></Route>
        <Route path="equipmentManage/alarmRulePage" component={AlarmRulePage}></Route>
        <Route path="equipmentManage/alarmEventPage" component={AlarmEventPage}></Route>
        <Route path="equipmentManage/alarmRulesIssuePage" component={AlarmRulesIssuePage}></Route>
        <Route path="equipmentManage/addAlarmRulePage" component={AddAlarmRulePage}></Route>
        <Route path="equipmentManage/editAlarmRulePage" component={EditAlarmRulePage}></Route>
        <Route path="equipmentManage/reportError" component={ReportError}></Route>
        <Route path="equipmentManage/templateSetPage" component={SettingManage.TemplateSet}></Route>
        <Route path="equipmentManage/DashboardCenter" component={DashboardManage.DashboardCenter}></Route>
        <Route path="equipmentManage/monitorSetPage" component={SettingManage.MonitorSet}></Route>
        <Route path="equipmentManage/resourceSetPage" component={SettingManage.ResourceSet}></Route>
        <Route path="equipmentManage/alarmConfigPage" component={AlarmConfigPage}></Route>
        <Route path="equipmentmanage/topologyPage" component={ViewManage.TopologyPage}></Route>

        <Route path="networkTopology/topologyNav" component={TopologyNavPage}></Route>

        <Route path="assetManage/statistic" component={AssetStatistic}></Route>
        <Route path="assetManage/assetList" component={AssetListPage}></Route>
        <Route path="assetManage/monitorSync" component={AssetMonitor}></Route>
        <Route path="assetManage/assetMaintain" component={AssetAssetMaintain}></Route>
        <Route path="assetManage/maintain" component={AssetMaintain}></Route>
        <Route path="assetManage/createview" component={AssetCreateView}></Route>
        <Route path="assetManage/detail" component={AssetDetail}></Route>
        <Route path="assetManage/createMaintain" component={AssetMaintainCreate}></Route>
        <Route path="assetManage/maintainDetail" component={AssetMaintainDetail}></Route>

        <Route path="operationManage/myWorkSpace" component={MyOperationWorkSpace}></Route>
        <Route path="operationManage/autoWorkOrderRules" component={AutoWorkOrderRulesPage}></Route>
        <Route path="operationManage/createOperation" component={CreateOperationPage}></Route>
        <Route path="operationManage/editOperation" component={EditOperationPage}></Route>
        <Route path="operationManage/dutymanagement/calendar" component={DutyManageCalendarPage}></Route>
        <Route path="operationManage/dutymanagement/rotaset" component={DutyManageRotaSetPage}></Route>
        <Route path="operationmanage/workOrderTemplateList" component={WorkOrderTemplateListPage}></Route>
        <Route path="operationmanage/createWorkOrderTemplate" component={CreateWorkOrderTemplatePage}></Route>

        <Route path="baseManage/slaList" component={SlaManage.SlaList}></Route>
        <Route path="baseManage/slaAdd" component={SlaManage.SlaAdd}></Route>
        <Route path="baseManage/slaDetails" component={SlaManage.SlaDetails}></Route>
        <Route path="baseManage/noticeList" component={NoticeManage.NoticeList}></Route>
        <Route path="baseManage/noticeInfo" component={NoticeManage.NoticeInfo}></Route>
        <Route path="baseManage/noticeApproval" component={NoticeManage.NoticeApproval}></Route>
        <Route path="baseManage/noticeHistoryList" component={NoticeManage.NoticeHistoryList}></Route>
        <Route path="baseManage/noticeSubmitList" component={NoticeManage.NoticeSubmitList}></Route>
        <Route path="baseManage/noticeSubmitDetails" component={NoticeManage.NoticeSubmitDetails}></Route>
        <Route path="baseManage/noticeListDetails" component={NoticeManage.NoticeListDetails}></Route>
        <Route path="baseManage/noticeApprovalDetails" component={NoticeManage.NoticeApprovalDetails}></Route>
        <Route path="baseManage/noticeHistoryListDetails" component={NoticeManage.NoticeHistoryListDetails}></Route>

        <Route path="operationManage/flowDesign" component={FlowDesignPage}></Route>
        <Route path="operationManage/flowDesignEdit" component={FlowDesignEditPage}></Route>

        <Route path="baseManage/repositoryList" component={Repository.RepositoryList}></Route>
        <Route path="baseManage/repositoryDetails" component={Repository.RepositoryDetails}></Route>
        <Route path="baseManage/repositoryListDetails" component={Repository.RepositoryListDetails}></Route>
        <Route path="baseManage/repositoryAdd" component={Repository.RepositoryAdd}></Route>
        <Route path="baseManage/repositoryApproval" component={Repository.RepositoryApproval}></Route>

        <Route path="reportManage/videoReport/cameraVideoCheck" component={CameraVideoCheckReportPage}></Route>
        <Route path="reportManage/videoReport/cameraOfflineReport" component={CameraOfflineStatisticsReportPage}></Route>
        <Route path="reportManage/videoReport/cameraMediaLostReport" component={CameraMediaLostStatisticsReportPage}></Route>
        <Route path="reportManage/videoReport/cameraVideoLostReport" component={CameraVideoLostStatisticsReportPage}></Route>
        <Route path="reportManage/videoReport/cameraVideoRealTimeReport" component={CameraVideoQualityStatisticsReportPage}></Route>
        <Route path="reportManage/videoReport/cameraOnlineTrendsReport" component={CameraOnlineTrendsReportPage}></Route>

        <Route path="reportManage/depvideoReport/cameraVideoCheck" component={DepCameraVideoCheckReportPage}></Route>

        <Route path="reportManage/nonVideoReport/dvrStatisticsReportPage" component={DVRStatisticsReportPage}></Route>
        <Route path="reportManage/nonVideoReport/nvrStatisticsReportPage" component={NVRStatisticsReportPage}></Route>
        <Route path="reportManage/nonVideoReport/encoderStatisticsReportPage" component={EncoderStatisticsReportPage}></Route>
        <Route path="reportManage/nonVideoReport/serverStatisticsReportPage" component={ServerStatisticsReportPage}></Route>
        <Route path="reportManage/nonVideoReport/networkStatisticsReportPage" component={NetworkStatisticsReportPage}></Route>
        <Route path="reportManage/nonVideoReport/firewallStatisticsReportPage" component={FirewallStatisticsReportPage}></Route>
        <Route path="reportManage/nonVideoReport/databaseStatisticsReportPage" component={DatabaseStatisticsReportPage}></Route>

        <Route path="reportManage/depNonVideoReport/depDvrStatisticsReportPage" component={DepStatisticsReportPage.DVRStatisticsReportPage}></Route>
        <Route path="reportManage/depNonVideoReport/depNvrStatisticsReportPage" component={DepStatisticsReportPage.NVRStatisticsReportPage}></Route>
        <Route path="reportManage/depNonVideoReport/depEncoderStatisticsReportPage" component={DepStatisticsReportPage.EncoderStatisticsReportPage}></Route>
        <Route path="reportManage/depNonVideoReport/depServerStatisticsReportPage" component={DepStatisticsReportPage.ServerStatisticsReportPage}></Route>
        <Route path="reportManage/depNonVideoReport/depNetworkStatisticsReportPage" component={DepStatisticsReportPage.NetworkStatisticsReportPage}></Route>
        <Route path="reportManage/depNonVideoReport/depFirewallStatisticsReportPage" component={DepStatisticsReportPage.FirewallStatisticsReportPage}></Route>
        <Route path="reportManage/depNonVideoReport/depDatabaseStatisticsReportPage" component={DepStatisticsReportPage.DatabaseStatisticsReportPage}></Route>

        <Route path="reportManage/orderStatisticsReport" component={OrderStatisticsReport}></Route>
        <Route path="reportManage/depOrderReport" component={DepOrderReportView}></Route>
        <Route path="reportManage/chargeStatisticsReport" component={ChargeStatisticsReport}></Route>

        <Route path="reportManage/assetStatistic" component={AssetStatisticReport}></Route>
		    <Route path="reportManage/assetMaintain" component={AssetMaintainPage}></Route>

        <Route path="systemManage/groupManage" component={SystemGroupAddPage}></Route>
        <Route path="systemManage/userListPage" component={SystemUserListPage}></Route>
        <Route path="systemManage/userAddPage" component={SystemUserAddPage}></Route>
        <Route path="systemManage/roleManagePage" component={SystemRoleManagePage}></Route>
        <Route path="systemManage/onLineUserListPage" component={SystemOnLineUserListPage}></Route>
        <Route path="systemManage/dataDictPage" component={DataDictPage}></Route>
        <Route path="systemManage/infoPage" component={SystemInfoPage}></Route>

        <Route path="exportIn" component={ExportInPage}></Route>
    </Route>
);

module.exports = AppRoutes;
