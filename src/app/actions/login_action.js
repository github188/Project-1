/**
 * 登录页相关action
 */
// import fetch from 'isomorphic-fetch'
var oData = require('../server/odata');
var Store = require('../server/store');
var base64 = require('../utils/base64.js');

export const SET_ERROR_MSG = 'SET_ERROR_MSG'
// export const GET_TOKEN = 'GET_TOKEN'
// export const GET_SELECTEDROLEPERMISSION = 'GET_SELECTEDROLEPERMISSION'
export const SET_LOGIN_TYPE = 'SET_LOGIN_TYPE'

export function setErrorMsg(msg) {
    return {
        type: SET_ERROR_MSG,
        msg
    }
}

export function setLoginType(loginType) {
    return {
        type: SET_LOGIN_TYPE,
        loginType
    }
}

function getVersion() {
    oData.getVersion(function(data) {
        Store.set("Version",data);
    });
}

// function receiveGetCurrentPermissions(data) {
//     return dispatch => {
//         if(data.results.length == 0){
//             // _this.emit("change");
//             // _this.errorMsg = '获取用户权限出错, 请重新登录。';
//             // return;
//             return dispatch(setErrorMsg('获取用户权限出错, 请重新登录。'))
//         };
//         var permissionsValue =  data.results[0].PERMISSIONS;
//         permissionsValue = encodeURI(permissionsValue);
//         permissionsValue = base64.base64encode(permissionsValue);
//         Store.set("PERMISSIONS",permissionsValue);
//         dispatch(navToPage());
//         // _this.errorMsg = '';
//         // _this.emit("change");
//         return dispatch(setErrorMsg(''))
//     }
// }

//function receiveGetCurrentPermissions(data) {
//	var msgError = "";
//  if(data.results.length == 0){
//      return msgError = '获取用户权限出错, 请重新登录。';
//  };
//  console.log("=====================开始调用页面分发函数======================");
//  var permissionsValue =  data.results[0].PERMISSIONS;
//  permissionsValue = encodeURI(permissionsValue);
//  permissionsValue = base64.base64encode(permissionsValue);
//  Store.set("PERMISSIONS",permissionsValue);
//  navToPage();
//  console.log("=============运行结束================");
//  return msgError;
//}

function receiveGetCurrentPermissions(data) {
    return (dispatch, getState) => {
        if(data.results.length == 0){
            return dispatch(setErrorMsg('获取用户权限出错, 请重新登录。'))
        };
        var state = getState();
        var permissionsValue =  data.results[0].PERMISSIONS;
        permissionsValue = encodeURI(permissionsValue);
        permissionsValue = base64.base64encode(permissionsValue);
        Store.set("PERMISSIONS",permissionsValue);
        dispatch(navToPage());
        return dispatch(setErrorMsg(''))
    }
}
function receiveGetCurrentPermissionsRegister(data) {
        var permissionsValue =  data.results[0].PERMISSIONS;
        permissionsValue = encodeURI(permissionsValue);
        permissionsValue = base64.base64encode(permissionsValue);
        Store.set("PERMISSIONS",permissionsValue);
        navToPageRegister()
        return "";
}
function receiveRegister(data) {
        var permissionsValue =  data.results[0].PERMISSIONS;
        permissionsValue = encodeURI(permissionsValue);
        permissionsValue = base64.base64encode(permissionsValue);
        Store.set("PERMISSIONS",permissionsValue);
        navToPageEmploy()
        return "";
}
function navToPage(){
	return dispatch => {
	    var bShowDepartmentIndex = false, bShowCityIndex = false;
	    var bShowEquipmentmanage = false, bShowMonitor = false, bShowAlarm = false, bShowAlarmRules = false,bShowTemplateset = false,bShowAlarmRulesIssue = false, bShowAlarmEvent = false, bShowAlarmUpgrade = false, bShowAlarmlog = false;
	    var bShowEquipmentmanageGrafana = false;
	    var bShowEquipmentmanageSetting = false, bShowAlarmConfig = false, bShowMonitorset = false, bShowResourceset = false;
	    var bShowEquipmentmanageView = false, bShowTopologyView = false;
	    var bShowAssetmanage = false, bShowAsset = false, bShowAssetStatistic = false, bShowAssetList = false,bShowAssetMonitorsync = false,bShowAssetMaintain = false, bShowMaintain = false, bShowMaintainList = false;
	    var bShowNetworktopology = false, bShowTopologynav = false;
	    var bShowOperationmanage = false, bShowWorkordermanage = false, bShowCreateworkorder = false, bShowWorkspace = false, bShowSla = false, bShowSlaList = false;
	    var bShowNoticemanage = false, bShowNoticehistorylist = false, bShowNoticesubmitlist = false, bShowNoticeapproval = false, bShowNoticelist = false;
	    var bShowRepository = false, bShowRepositorylist = false, bShowRepositoryapproval = false, bShowFlowdesign = false;
	    var bShowDutyManagement = false,bShowCalendar = false,bShowRotaset = false;
	    var bShowReportmanage = false, bShowVideoReport = false, bShowCameravideocheck = false, bShowCameraofflinereport = false, bShowCameramedialostreport = false, bShowCameravideolostreport = false, bShowCameravideorealtimereport = false, bShowCameraonlinetrendsreport = false;
	    var bShowNovideoReport = false, bShowDvrstatisticsreport = false, bShowNvrstatisticsreport = false, bShowEncoderstatisticsreport = false, bShowServerstatisticsreport = false, bShowNetworkstatisticsreport = false, bShowFirewallstatisticsreport = false, bShowDatabasestatisticsreport = false;
	    var bShowWorkorderReport = false, bShowWorkorderStatisticReport = false,bShowAssetReport = false, bShowAssetstatisticReport = false, bShowAssetmaintainReport = false, bShowBillingReport = false, bShowAssessmentstatisticReport = false;
	    var bShowDepVideoReport = false,bShowDepNovideoReport = false,bShowDepWorkorderReport = false;
	    var bShowSystemmanage = false, bShowGroupmanage = false, bShowUserlist = false, bShowRoleManage = false, bShowDataDict = false, bShowOnLineUserList = false, bsoftwarelicence=false,bShowPswModify=false
	
	    var temp = Store.get("PERMISSIONS");
	    temp = base64.base64decode(temp);
	    temp = decodeURI(temp);
	    var permissionsValue = eval(temp);
	    //首页
	    var level = localStorage.getItem("LEVEL");//1 领导首页;2 工程师首页
	    for(var i = 0; i < permissionsValue.length; i++) {
	        if(permissionsValue[i].resourceType == "/indexPages") {
	            if(level == 1){
	                bShowDepartmentIndex = true;
	            }else if(level == 2){
	                bShowCityIndex = true;
	            }
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage") {
	            bShowEquipmentmanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/monitor") {
	            bShowMonitor = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm") {
	            bShowAlarm = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm/alarmrule") {
	            bShowAlarmRules = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm/templateset") {
	            bShowTemplateset = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm/alarmrulesissue") {
	            bShowAlarmRulesIssue = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm/alarmevent") {
	            bShowAlarmEvent = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm/reporterror") {
	            bShowAlarmUpgrade = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/alarm/alarmlog") {
	            bShowAlarmlog = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/grafana") {
	            bShowEquipmentmanageGrafana = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/setting") {
	            bShowEquipmentmanageSetting = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/setting/alarmconfig") {
	            bShowAlarmConfig = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/setting/monitorset") {
	            bShowMonitorset = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/setting/resourceset") {
	            bShowResourceset = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/view") {
	            bShowEquipmentmanageView = true;
	        }
	        else if(permissionsValue[i].resourceType == "/equipmentmanage/view/topologyview") {
	            bShowTopologyView = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage") {
	            bShowAssetmanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/asset") {
	            bShowAsset = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/asset/statistic") {
	            bShowAssetStatistic = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/asset/assetlist") {
	            bShowAssetList = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/asset/monitorsync") {
	            bShowAssetMonitorsync = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/asset/assetmaintain") {
	            bShowAssetMaintain = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/maintain") {
	            bShowMaintain = true;
	        }
	        else if(permissionsValue[i].resourceType == "/assetmanage/maintain/maintainlist") {
	            bShowMaintainList = true;
	        }
	        else if(permissionsValue[i].resourceType == "/networktopology") {
	            bShowNetworktopology = true;
	        }
	        else if(permissionsValue[i].resourceType == "/networktopology/topologynav") {
	            bShowTopologynav = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage") {
	            bShowOperationmanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/workordermanage") {
	            bShowWorkordermanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/workordermanage/createworkorder") {
	            bShowCreateworkorder = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/workordermanage/workspace") {
	            bShowWorkspace = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/sla") {
	            bShowSla = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/sla/slalist") {
	            bShowSlaList = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/noticemanage") {
	            bShowNoticemanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/noticemanage/noticehistorylist") {
	            bShowNoticehistorylist = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/noticemanage/noticesubmitlist") {
	            bShowNoticesubmitlist = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/noticemanage/noticeapproval") {
	            bShowNoticeapproval = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/noticemanage/noticelist") {
	            bShowNoticelist = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/repository") {
	            bShowRepository = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/repository/repositorylist") {
	            bShowRepositorylist = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/repository/repositoryapproval") {
	            bShowRepositoryapproval = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/flowdesign") {
	            bShowFlowdesign = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/dutymanagement") {
	            bShowDutyManagement = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/dutymanagement/calendar") {
	            bShowCalendar = true;
	        }
	        else if(permissionsValue[i].resourceType == "/operationmanage/dutymanagement/rotaset") {
	            bShowRotaset = true;
	        }
	        else if(permissionsValue[i].resourceType == "/reportmanage") {
	            bShowReportmanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/reportmanage/video") {
	          if(level == 1){
	            bShowDepVideoReport = true;
	          }else if(level == 2){
	            bShowVideoReport = true;
	          }
	        }
	        else if(permissionsValue[i].resourceType == "/reportmanage/novideo") {
	          if(level == 1){
	            bShowDepNovideoReport = true;
	          }else if(level == 2){
	            bShowNovideoReport = true;
	          }
	        }
	        else if(permissionsValue[i].resourceType == "/reportmanage/workorder") {
	          if(level == 1){
	            bShowDepWorkorderReport = true;
	          }else if(level == 2){
	            bShowWorkorderReport = true;
	          }
	        }
	        else if(permissionsValue[i].resourceType == "/reportmanage/asset") {
	            bShowAssetReport = true;
	        }
	        else if(permissionsValue[i].resourceType == "/reportmanage/billing") {
	            bShowBillingReport = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage") {
	            bShowSystemmanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage/groupmanage") {
	            bShowGroupmanage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage/userlist") {
	            bShowUserlist = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage/rolemanage") {
	            bShowRoleManage = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage/datadict") {
	            bShowDataDict = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage/onlineuser") {
	            bShowOnLineUserList = true;
	        }
	        else if(permissionsValue[i].resourceType == "/systemmanage/softwarelicence") {
	            bsoftwarelicence = true;
	        }else if(permissionsValue[i].resourceType == "/systemmanage/passwordmodify"){
	            bShowPswModify=true;
	        }
	    }
	
	    if(level == 2){
	        if(bShowCityIndex) {
	            window.location.href = '#/operationManage/operationManagePage';
	            return false;
	        }
	    }else if(level == 1){
	        if(bShowDepartmentIndex){
	            window.location.href = '#/operationManage/operationManagePage';
	            return false;
	        }
	    }
	
	    //资源监测
	    if(bShowMonitor) {
	        window.location.href = '#/equipmentManage/MonitorPage';
	    }
	    else if(bShowAlarm) {
	        if(bShowAlarmRules) {
	            window.location.href = '#/equipmentManage/alarmRulePage';
	        }
	        if(bShowTemplateset) {
	            window.location.href = '#/equipmentManage/templateSetPage';
	        }
	        else if(bShowAlarmRulesIssue) {
	            window.location.href = '#/equipmentManage/alarmRulesIssuePage';
	        }
	        else if(bShowAlarmEvent) {
	            window.location.href = '#/equipmentManage/alarmEventPage';
	        }
	        else if(bShowAlarmUpgrade) {
	            window.location.href = '#/equipmentManage/reportError';
	        }
	        else if(bShowAlarmlog) {
	            window.location.href = '#/equipmentManage/alarmLogPage';
	        }
	    }
	    else if(bShowEquipmentmanageGrafana) {
	        window.location.href = '#/equipmentManage/DashboardCenter';
	    }
	    else if(bShowEquipmentmanageSetting) {
	        if(bShowAlarmConfig) {
	            window.location.href = '#/equipmentManage/alarmConfigPage';
	        }
	        else if(bShowMonitorset) {
	            window.location.href = '#/equipmentManage/monitorSetPage';
	        }
	        else if(bShowResourceset) {
	            window.location.href = '#/equipmentManage/resourceSetPage';
	        }
	    }
	    else if(bShowEquipmentmanageView) {
	        if(bShowTopologyView) {
	            window.location.href = '#/equipmentManage/topologyPage';
	        }
	    }
	    //资产管理
	    else if(bShowAsset) {
	        if(bShowAssetStatistic) {
	            window.location.href = '#/assetManage/statistic';
	        }
	        else if(bShowAssetList) {
	            window.location.href = '#/assetManage/assetList';
	        }
	        else if(bShowAssetMonitorsync) {
	            window.location.href = '#/assetManage/monitorSync';
	        }
	        else if(bShowAssetMaintain) {
	            window.location.href = '#/assetManage/assetMaintain';
	        }
	    }
	    else if(bShowMaintain) {
	        if(bShowMaintainList) {
	            window.location.href = '#/assetManage/maintain';
	        }
	    }
	    //网络拓扑
	    else if(bShowNetworktopology) {
	        if(bShowTopologynav) {
	            window.location.href = '#/networkTopology/topologyNav';
	        }
	    }
	    //运维管理
	    else if(bShowWorkordermanage) {
	        if(bShowWorkspace) {
	            window.location.href = '#/operationManage/myWorkSpace';
	        }
	        else if(bShowCreateworkorder) {
	            window.location.href = '#/operationManage/createOperation';
	        }
	    }
	    else if(bShowSla) {
	        if(bShowSlaList) {
	            window.location.href = '#/baseManage/slaList';
	        }
	    }
	    else if(bShowNoticemanage) {
	        if(bShowNoticehistorylist) {
	            window.location.href = '#/baseManage/noticeHistoryList';
	        }
	        else if(bShowNoticesubmitlist) {
	            window.location.href = '#/baseManage/noticeSubmitList';
	        }
	        else if(bShowNoticeapproval) {
	            window.location.href = '#/baseManage/noticeApproval';
	        }
	        else if(bShowNoticelist) {
	            window.location.href = '#/baseManage/noticeList';
	        }
	    }
	    else if(bShowRepository) {
	        if(bShowRepositorylist) {
	            window.location.href = '#/baseManage/repositoryList';
	        }
	        else if(bShowRepositoryapproval) {
	            window.location.href = '#/baseManage/repositoryApproval';
	        }
	    }
	    else if(bShowFlowdesign) {
	        window.location.href = '#/operationManage/flowDesign';
	    }
	    else if(bShowDutyManagement) {
	        if(bShowCalendar) {
	            window.location.href = '#/operationManage/dutymanagement/calendar';
	        }
	        else if(bShowRotaset) {
	            window.location.href = '#/operationManage/dutymanagement/rotaset';
	        }
	    }
	    //报表管理
	    else if(bShowVideoReport) {
	           window.location.href = '#/reportManage/videoReport/cameraVideoCheck';
	    }
	    else if(bShowDepVideoReport) {
	      //厅级
	      window.location.href = '#/reportManage/depvideoReport/cameraVideoCheck';
	    }
	    else if(bShowNovideoReport) {
	            window.location.href = '#/reportManage/nonVideoReport/dvrStatisticsReportPage';
	    }
	    else if(bShowDepNovideoReport) {
	      //厅级
	      window.location.href = '#/reportManage/depNonVideoReport/depDvrStatisticsReportPage';
	    }
	    else if(bShowWorkorderReport){
	            window.location.href = '#/reportManage/orderStatisticsReport';
	    }
	    else if(bShowDepWorkorderReport){
	        //厅级
	        window.location.href = '#/reportManage/depOrderReport';
	    }
	    else if(bShowAssetReport) {
	            window.location.href = '#/reportManage/assetStatistic';
	    }
	    else if(bShowBillingReport){
	            window.location.href = '#/reportManage/chargeStatisticsReport';
	    }
	    //系统设置
	    else if(bShowGroupmanage) {
	        window.location.href = '#/systemManage/groupManage';
	    }
	    else if(bShowUserlist) {
	        window.location.href = '#/systemManage/userListPage';
	    }
	    else if(bShowRoleManage) {
	        window.location.href = '#/systemManage/roleManagePage';
	    }
	    else if(bShowDataDict) {
	        window.location.href = '#/systemManage/dataDictPage';
	    }
	    else if(bShowOnLineUserList) {
	        window.location.href = '#/systemManage/onLineUserListPage';
	    }
	    else if(bsoftwarelicence) {
	        window.location.href = '#/systemManage/infoPage';
	    }
	    //曹志强 20161206 增加修改密码连接，待修改
	    else if(bShowPswModify) {
	        window.location.href = '#/systemManage/infoPage';
	    }
	    else{
	        return dispatch(setErrorMsg('没有权限不能进入系统。'))
	    }
    }
}



function navToPageRegister(){
	window.location.href = '#/operationManage/operationManagePage';
}
function navToPageEmploy(){
	window.location.href = '#/cityIndex';
}

function receiveGetToken(data) {
    return dispatch => {
        if(data.result == "error"){
            // _this.errorMsg = data.errorMsg;
            // _this.emit("change");
            // return;
            return dispatch(setErrorMsg(data.errorMsg));
        }
        getVersion();
        if(localStorage.getItem("multi_roles") == "1") {
            // _this.emit("change");
            $('#selectRoleModal').modal('show');
        }
        else {
            if(data.results == undefined) {
                return dispatch(setErrorMsg("无法获取token，登录失败。"));
            };
            if(!data.results[0].USER_ID){
              return dispatch(setErrorMsg("无法获取用户信息，登录失败。"));
            };
            Store.set("USER_ID",data.results[0].USER_ID);
            Store.set("USERNAME",data.results[0].USERNAME);
            Store.set("LEVEL",data.results[0].LEVEL);//1是厅级  2是市级
            Store.set("GROUP_NAME",data.results[0].GROUP_NAME);//安全群群组名
            Store.set("GROUP_ID",data.results[0].GROUP_ID);//安全群群组ID
            Store.set("DIAGNOSIS",data.results[0].DIAGNOSIS);//诊断平台地址
            Store.set("PHONE",data.results[0].PHONE);//用户手机
            Store.set("TELEPHONE",data.results[0].TELEPHONE);//固定电话

            //获取操作权限 filters 格试 [{key:"ROLE_NAME",value:""},{key:"GROUP_NAME",value:""}];
            var filters = [
                {key:"ROLE_NAME",value:Store.get("CURRENT_ROLENAME")},
                {key:"GROUP_NAME",value:Store.get("GROUP_NAME")},
                {key:"COMPANY",value:"OMS"}
            ];
            oData.GetCurrentPermissions(filters, data => dispatch(receiveGetCurrentPermissions(data)));
            // dispatch(navToPage());
        }
    }
}

function oDataGetToken(user) {
    return dispatch => {
  		Store.set('roles',"")
  		oData.getToken(user, data => dispatch(receiveGetToken(data)));
    }
}

export function getToken(user) {
  return dispatch => {
      return dispatch(oDataGetToken(user))
  }
}

//曹志强  20161103 获取用户信息
export function getUserInfo()
{
	Store.set("serviceUrl", '/bods.svc/');
//  var data = oData.getUserToken();
    var resultStr = oData.getLoginUser();
    if (resultStr != undefined && resultStr.d.results.length > 0)
    {
    	Store.set_JsonData("allUserInfo", resultStr.d.results);
    }
}

//曹志强  20161103 判断该用户是否已存在
export function isExitUser(uname)
{
	var flag = "1";
    var dataStr = Store.get_JsonData("allUserInfo");
    if(dataStr != undefined && dataStr.length > 0)
    {
    	//dataStr 是一个Object对象，对象中有多个用户信息
    	for(var i = 0; i< dataStr.length; i++)
    	{
    		var loginId = dataStr[i].LOGIN_ID;
    		var out_flag = dataStr[i].OUT_FLAG;
    		if(out_flag && loginId == uname)
        	{
        		flag = 0;
        		break;
        	}
        	else
        	{
        		flag = 4;
        	}
    	}
    }
    else
    {
    	flag = "3";
    }
    return flag;
}

//曹志强  20161103 判断电话是否存在
export function isExitPhone(phone)
{
	var flag = "1";//ORANIZATION_NAME
        var dataStr = Store.get_JsonData("allUserInfo");
        if(dataStr != undefined && dataStr.length > 0)
        {
        	//dataStr 是一个Object对象，对象中有多个用户信息
        	for(var i = 0; i< dataStr.length; i++)
        	{
        		var phoneStr = dataStr[i].PHONE;
        		var out_flag = dataStr[i].OUT_FLAG;
        		if(out_flag && phone == phoneStr)
	        	{
	        		flag = 0;
	        		break;
	        	}
	        	else
	        	{
	        		flag = 4;
	        	}
        	}
        }
        else
        {
        	flag = "3";
        }
    return flag;
}

//曹志强  20161103 获取单位和角色信息接口
export function getRoleInfo(param)
{
	var org_arry = [];
	var words = "";
	var resultStr = oData.getLoginUnit(param);
    if (resultStr != undefined && resultStr.d.results.length > 0)
    {
    	console.log("words=" + JSON.stringify(resultStr.d.results));
//  	for(var i = 0; i< resultStr.d.results.length; i++){
//  		if(resultStr.d.results.OUT_FLAG == "true"){
//  			org_arry[i] = resultStr.d.results[i].ORANIZATION_NAME + "," + esultStr.d.results[i].ROLE_NAME;
//  		}
//  	}
    }
    return resultStr.d.results;
}

//曹志强  20161111 验证用户 是否存在，首先用户ID和电话号码是否重复，然后完成注册
export function getRegisterInfo(user)
{
	var flag = "1";
	//获取平台所有用户ID和电话号码信息
	getUserInfo();
	//判断用户是否存在
	if(isExitUser(user.username) == "4")
	{
		//判断电话号码是否存在
		if(isExitPhone(user.phone) == "4")
		{
    		//开始执行保存注册信息接口
    		console.log("================开始执行保存信息接口操作==============");
    		var resultData = oData.saveRegisterInfo(user);
    		if(resultData.OUT_FLAG)
    		{
    			//获取token及角色名称
    			var tokenData = oData.getUserToken();
    			if(tokenData.result == "ok")
    			{
    				Store.set("token", tokenData.token);
      				let user_role = tokenData.roles;//角色
      				let group_name = user.employer;//单位名称
      				const companyName = "'OMS'";
      				//调用获取功能列表接口
      				//获取操作权限 filters 格试 [{key:"ROLE_NAME",value:""},{key:"GROUP_NAME",value:""}];
			        var filters = [
			            {key:"ROLE_NAME",value:user_role},
			            {key:"GROUP_NAME",value:group_name},
			            {key:"COMPANY",value:"OMS"}
			        ];
			        //进入领导首页
			        if(user.title == "管理员" || user.title == "监理" || user.title == "甲方"){
			        	Store.set("LEVEL","1");
			        	oData.GetCurrentPermissions(filters, function(data){
			        		receiveGetCurrentPermissionsRegister(data);
			        	});
			        }else{
			        	Store.set("LEVEL","2");
			        	oData.GetCurrentPermissions(filters, function(data){
			        		receiveRegister(data);
			        	});
			        }
			        
    			}
    		}
    		else
    		{
    			flag = "4";//注册失败
    		}
		}
		else
		{
			flag = "3";//电话号码已存在
		}
    }
	else
	{
		flag = "2";//用户ID已存在
	}
	console.log("flag==" + flag);
    return flag;
}

function receiveQueryGetUserInfo(data) {
    return dispatch => {
        if(data.results.length == 0){
            // _this.emit("change");
            // _this.errorMsg = '请求用户信息出错, 请重新登录。';
            // return;
            return dispatch(setErrorMsg('请求用户信息出错, 请重新登录。'))
        };
        Store.set("USER_ID",data.results[0].USER_ID);
        Store.set("USERNAME",data.results[0].USERNAME);
        Store.set("LEVEL",data.results[0].LEVEL);//1是厅级  2是市级
        Store.set("GROUP_NAME",data.results[0].GROUP_NAME);//安全群群组名
        Store.set("GROUP_ID",data.results[0].GROUP_ID);//安全群群组ID
        Store.set("DIAGNOSIS",data.results[0].DIAGNOSIS);//诊断平台地址
        Store.set("PHONE",data.results[0].PHONE);//用户手机
        Store.set("TELEPHONE",data.results[0].TELEPHONE);//固定电话
        //获取操作权限 filters 格试 [{key:"ROLE_NAME",value:""},{key:"GROUP_NAME",value:""}];
        var filters = [
            {key:"ROLE_NAME",value:Store.get("CURreceiveGetCurrentPermissionsRENT_ROLENAME")},
            {key:"GROUP_NAME",value:Store.get("GROUP_NAME")},
            {key:"COMPANY",value:"OMS"}
        ];
        oData.GetCurrentPermissions(filters, data => dispatch(receiveGetCurrentPermissions(data)));
        $('#selectRoleModal').modal('hide');
        // dispatch(navToPage());
    }
}

function receiveSelectUserRole(data) {
    return dispatch => {
        if(data.flag == "0"){
            // _this.errorMsg = '角色验证失败, 请重新选择角色。';
            // _this.emit("change");
            // return;
            return dispatch(setErrorMsg('角色验证失败, 请重新选择角色。'))
        };
        oData.queryGetUserInfo(Store.get("localUserName"), data => dispatch(receiveQueryGetUserInfo(data)));
    }
}

function oDataGetSelectUserRole(filters) {
    return dispatch => {
  		Store.set('roles',"")
  		oData.SelectUserRole(filters, data => dispatch(receiveSelectUserRole(data)));
    }
}

export function getSelectedRolePermission() {
  return dispatch => {
      var filters = [{key:"ROLE_ID",value:Store.get("CURRENT_ROLENAME")}];
      return dispatch(oDataGetSelectUserRole(filters))
  }
}
