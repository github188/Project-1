/**
* 工单管理:工单列表、工单详情、工单新建 相关的reducer方法
*/

import { combineReducers } from 'redux'
import {
  SET_FAULTTYPES, SET_FAULTSUBTYPES, SET_SERVICENAME, SET_SERVICEDATA, SET_FAULTTYPEID,
  SET_FAULTSUBTYPEID, SET_SERVICEID, SET_FLOWLEVEL, SET_ASSETS, SET_HANDLEASSETSID,
  SET_WORKORDERLIST, SET_COLORSPANNUM1, SET_COLORSPANNUM2, SET_COLORSPANNUM3, SET_COLORSPANNUM4,
  SET_COLORSPANNUM5, SET_COLORSPANNUM6, SET_COLORSPANNUM7, SET_COLORSPANNUM8, SET_PICLIST,
  SET_PICLIST2, SET_CURWORKORDERDATA, SET_CURWORKORDERID, SET_CURWORKORDERSTATUS, SET_CURWORKORDERFLOWID,
  SET_CURWORKORDERGROUPID, SET_ORDERDETAILDATA, SET_DELAYLIST, SET_DELAYINDEX, SET_CURDELAYID,
  SET_CREATEORDERINFO, SET_FLOWPICDATA, SET_FLOWDESIGNPICDATA, SET_WORKFLOWTABLE, SET_WORKFLOWDETAILTABLE,
  SET_FLOWNAME, SET_FLOWOBJECTS, SET_WORKTHEME, SET_WORKDESCRIPTION, SET_WORKFLOWTYPES,
  SET_FLOWDEIGNRESULTDATA, SET_CURWORKFLOWID, SET_TOUCHWORKORDERDATA, SET_TOUCHWORKORDERDATA_MONITORDATA, SET_CURSTATEPARAM, SET_PERMISSIONS_OPERATION,
  SET_AUTOMATICWORKORDER, SET_EQUIPMENTTYPE, SET_MONITORTYPE_OPERATION, SET_ALLFAULTS, SET_ISBUNDER,
  SET_WORKORDERFILTERLIST, SET_TOUCHEQUIPMENTDATA, SET_TOUCHFAULTSUBID, SET_DUTYGROUPS, SET_DUTYGROUPARRS,
  SET_DUTYUSERS, SET_CURDUTYGROUP, SET_CURDATADUTYGROUP, SET_DUTYUSERLIST, SET_DUTYDUTYLIST,
  SET_DUTYECCDATA, SET_CALENDARDATA, SET_ISSIGN, SET_GETCALENDARDATAFLAG, SET_SELECTEDCALENDARDATE,
  SET_DUTYLOGS, SET_DUTYSIGNINS, SET_CLICKEDDUTYLOG, SET_CANUPDATE, SET_SELECTEDWORKORDERTEMPLATE,
  SET_WORKORDERTEMPLATEOPERATIONFLAG, SET_WORKORDERTEMPLATEINFOCHANGEFLAG,
  SET_WORKFLOWDETAIL_CURRENT,SET_WORKORDERTEMPLATES_MAINFORM,SET_WORKORDERTEMPLATES_SHEETFORM,SET_BUSOBDEFFIELD_OPERATION_DETAIL,SET_BUSOBDEFFIELD_OPERATION_HANDLE,
  SET_WORKORDERTEMPLATES_MAINDATA,SET_WORKORDERTEMPLATES_SHEETDATA,SET_SLAINFODATA,SET_SLAINFOID,SET_ASSETSSTATUSSID,SET_ASSETSSTATUSSDATA,
SET_ECCTASKPLANID,SET_ECCTASKPLANDATA,SET_UNITTYPEDATA,SET_UNITTYPEID,SET_COMPANYDATA,SET_COMPANYID,SET_PROJECTUNITID,SET_PROJECTUNITDATA,SET_SERVICECATALOGID,SET_SERVICECATALOGDATA,SET_SERVICEITEMDATA,SET_SERVICEITEMID,SET_SLASTATUSDATA,SET_SLASTATUSID,SET_SLAROWID,SET_SLASTATUSCODE,SET_SLAROWCOMPANYID,SET_SLAROWPROJECTID,SET_SLAROWUNITTYPEID,SET_SLAROWSTATUSID,SET_SLAROWBIGSERVICEID,SET_SLAROWSERVICESUBID,SET_SLAROWWORKTIMEID,SET_SLAROWSTARTTIMEVAL,SET_SLAROWENDTIMEVAL,SET_SLAROWSERVICETYPE,SET_FAULESTATUSDATA,SET_FAULESTATUSID,SET_FAULEWORKORDERTYPEID,SET_FAULEWORKORDERTYPEDATA,SET_FAULEWORKORDERNAMEID,SET_FAULEWORKORDERNAMEDATA,SET_WORKORDERSOURCEID,SET_WORKORDERSOURCEDATA,SET_SLAINFODATAS,SET_SLAINFOIDS,SET_FAULESERVICECITEMID,SET_FAULESERVICECATALOGID,SET_UNITSTAFFINFOIDS,SET_UNITSTAFFINFODATAS,SET_FAULEUNITID,SET_FAULETYPEID,SET_FAULEAREAID,SET_FAULEFAULTTYPEID,SET_FAULEFAULTTYPEDATA,SET_FAULEBIGFAULTTYPEID,SET_FAULEBIGFAULTTYPEDATA,SET_FAULEFAULTSUBTYPEID,SET_FAULEFAULTSUBTYPEDATA,SET_FAULEKNOWLEDGEID,SET_FAULEKNOWLEDGEDATA,
SET_TOPICINFOLISTDATA,SET_TOPICINFOLISTID,SET_TOPICOBJECTDATA,SET_TOPICOBJECTTREE,
  SET_REFRESHTOPICOBJECTTREE,SET_TOPICOBJECTTREEDATA,SET_HANDLETOPICOBJECT,SET_ISCLICKTREECHANGE,SET_STATICTOPICOBJECTDATA,SET_BEFORETOPICOBJECTDATA,SET_ISEDITTOPICOBJECTDATA,
  SET_TOPICCONTENT,SET_TOPICNAME,SET_TOPICSTATUS,SET_TOPICREVIEWDESC,SET_DUTYTABLEDATA,SET_DUTYTABLEID,SET_DUTYMANAGEDATA,SET_DUTYMANAGEID,SET_DUTYPERSONINFO,SET_KNOWLEDGEMANAGERDATA, SET_DELETEKNOWLEDGEID, SET_FAULTSUBID, SET_FAULTSUBPID,
  SET_REVIEWSTATUSCODE, SET_CUSTOMERCOMPLAINTSDATA, SET_CUSTOMERCOMPLAINTSDATAMONTH, SET_CUSTOMERCOMPLAINTSDATAQUARTER, SET_CUSTOMERCOMPLAINTSDATAYEAR,
  SET_CUSTOMESATISFACTIONSCOREDATA, SET_SLAREACHRATEDATA, SET_FILTERSLAREACHRATEDATA,SET_TOPICOBJECTFLAGDATA,SET_NEXTWORKFLOWID,SET_NEXTWORKFLOWDATA,SET_WORKFLOWTYPEID,SET_WORKFLOWTYPEDATA,SET_FAULEROWUSERNAME,SET_FAULETOUSER,SET_FAULETOID,SET_FAULEFLOWACTION,SET_FAULEFROMID,SET_WORKORDERRECIDDATA,SET_WORKORDERRECIDID,SET_UNITSTAFFNUMBER,SET_TASKORDERLISTID,SET_TASKORDERLISTDATA,SET_COMPLAINTORDERLISTDATA,SET_COMPLAINTORDERLISTID,SET_TASKWORKORDERTYPEDATA,SET_TASKWORKORDERTYPEID,SET_ROWSTATUS,SET_COMPLAINTAREAID,SET_COMPLAINTAREADATA,SET_COMPLAINTCHILDAREADATA,SET_COMPLAINTCHILDAREAID,SET_COMPLAINTWORKORDERTYPEDATA,SET_COMPLAINTWORKORDERTYPEID,SET_TEMPLATECODE,SET_ORDERDETAILSDATA,SET_ORDERDETAILSID
} from '../actions/operation_action'

function canUpdate(state = "true",action) {
  switch (action.type) {
      case SET_CANUPDATE:
          return action.data
      default:
          return state
  }
}

function faultTypes(state = [], action) {
    switch (action.type) {
        case SET_FAULTTYPES:
            return action.faultTypes
        default:
            return state
    }
}

function faultSubTypes(state = [], action) {
    switch (action.type) {
        case SET_FAULTSUBTYPES:
            return action.faultSubTypes
        default:
            return state
    }
}

function serviceName(state = [], action) {
    switch (action.type) {
        case SET_SERVICENAME:
            return action.serviceName
        default:
            return state
    }
}

function serviceData(state = [], action) {
    switch (action.type) {
        case SET_SERVICEDATA:
            return action.serviceData
        default:
            return state
    }
}

function faultTypeId(state = "", action) {
    switch (action.type) {
        case SET_FAULTTYPEID:
            return action.faultTypeId
        default:
            return state
    }
}

function faultSubTypeId(state = "", action) {
    switch (action.type) {
        case SET_FAULTSUBTYPEID:
            return action.faultSubTypeId
        default:
            return state
    }
}

function serviceId(state = "", action) {
    switch (action.type) {
        case SET_SERVICEID:
            return action.serviceId
        default:
            return state
    }
}

function flowLevel(state = "", action) {
    switch (action.type) {
        case SET_FLOWLEVEL:
            return action.flowLevel
        default:
            return state
    }
}

function assets(state = [], action) {
    switch (action.type) {
        case SET_ASSETS:
            return action.assets
        default:
            return state
    }
}

function handleAssetsId(state = '', action) {
    switch (action.type) {
        case SET_HANDLEASSETSID:
            return action.handleAssetsId
        default:
            return state
    }
}

function workOrderList(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERLIST:
            return action.workOrderList
        default:
            return state
    }
}

function colorSpanNum1(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM1:
            return action.colorSpanNum1
        default:
            return state
    }
}

function colorSpanNum2(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM2:
            return action.colorSpanNum2
        default:
            return state
    }
}

function colorSpanNum3(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM3:
            return action.colorSpanNum3
        default:
            return state
    }
}

function colorSpanNum4(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM4:
            return action.colorSpanNum4
        default:
            return state
    }
}

function colorSpanNum5(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM5:
            return action.colorSpanNum5
        default:
            return state
    }
}

function colorSpanNum6(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM6:
            return action.colorSpanNum6
        default:
            return state
    }
}

function colorSpanNum7(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM7:
            return action.colorSpanNum7
        default:
            return state
    }
}

function colorSpanNum8(state = "0", action) {
    switch (action.type) {
        case SET_COLORSPANNUM8:
            return action.colorSpanNum8
        default:
            return state
    }
}

function picList(state = [], action) {
    switch (action.type) {
        case SET_PICLIST:
            return action.picList
        default:
            return state
    }
}

function picList2(state = [], action) {
    switch (action.type) {
        case SET_PICLIST2:
            return action.picList2
        default:
            return state
    }
}

function curWorkOrderData(state = null, action) {
    switch (action.type) {
        case SET_CURWORKORDERDATA:
            return action.curWorkOrderData
        default:
            return state
    }
}

function curWorkOrderId(state = "", action) {
    switch (action.type) {
        case SET_CURWORKORDERID:
            return action.curWorkOrderId
        default:
            return state
    }
}

function curWorkOrderStatus(state = "", action) {
    switch (action.type) {
        case SET_CURWORKORDERSTATUS:
            return action.curWorkOrderStatus
        default:
            return state
    }
}

function curWorkOrderFlowId(state = "", action) {
    switch (action.type) {
        case SET_CURWORKORDERFLOWID:
            return action.curWorkOrderFlowId
        default:
            return state
    }
}

function curWorkOrderGroupID(state = "", action) {
    switch (action.type) {
        case SET_CURWORKORDERGROUPID:
            return action.curWorkOrderGroupID
        default:
            return state
    }
}

function orderDetailData(state = "", action) {
    switch (action.type) {
        case SET_ORDERDETAILDATA:
            return action.orderDetailData
        default:
            return state
    }
}

function delayList(state = [], action) {
    switch (action.type) {
        case SET_DELAYLIST:
            return action.delayList
        default:
            return state
    }
}

function delayIndex(state = "", action) {
    switch (action.type) {
        case SET_DELAYINDEX:
            return action.delayIndex
        default:
            return state
    }
}

function curDelayId(state = "", action) {
    switch (action.type) {
        case SET_CURDELAYID:
            return action.curDelayId
        default:
            return state
    }
}

function createOrderInfo(state = null, action) {
    switch (action.type) {
        case SET_CREATEORDERINFO:
            return action.createOrderInfo
        default:
            return state
    }
}

function flowPicData(state = "", action) {
    switch (action.type) {
        case SET_FLOWPICDATA:
            return action.flowPicData
        default:
            return state
    }
}

function flowDesignPicData(state = "", action) {
    switch (action.type) {
        case SET_FLOWDESIGNPICDATA:
            return action.flowDesignPicData
        default:
            return state
    }
}

function workFlowTable(state = "", action) {
    switch (action.type) {
        case SET_WORKFLOWTABLE:
            return action.workFlowTable
        default:
            return state
    }
}

function workFlowDetailTable(state = "", action) {
    switch (action.type) {
        case SET_WORKFLOWDETAILTABLE:
            return action.workFlowDetailTable
        default:
            return state
    }
}

function flowName(state = [], action) {
    switch (action.type) {
        case SET_FLOWNAME:
            return action.flowName
        default:
            return state
    }
}

function flowObjects(state = [], action) {
    switch (action.type) {
        case SET_FLOWOBJECTS:
            return action.flowObjects
        default:
            return state
    }
}

function workTheme(state = "", action) {
    switch (action.type) {
        case SET_WORKTHEME:
            return action.workTheme
        default:
            return state
    }
}

function workDescription(state = "", action) {
    switch (action.type) {
        case SET_WORKDESCRIPTION:
            return action.workDescription
        default:
            return state
    }
}

function workFlowTypes(state = [], action) {
    switch (action.type) {
        case SET_WORKFLOWTYPES:
            return action.workFlowTypes
        default:
            return state
    }
}

function flowDeignResultData(state = [], action) {
    switch (action.type) {
        case SET_FLOWDEIGNRESULTDATA:
            return action.flowDeignResultData
        default:
            return state
    }
}

function curWorkFlowId(state = "", action) {
    switch (action.type) {
        case SET_CURWORKFLOWID:
            return action.curWorkFlowId
        default:
            return state
    }
}

function touchWorkOrderData(state = null, action) {
    switch (action.type) {
        case SET_TOUCHWORKORDERDATA:
            return action.touchWorkOrderData
        case SET_TOUCHWORKORDERDATA_MONITORDATA:
            return Object.assign({}, state, {
                monitorData: action.monitorData
            });
        default:
            return state
    }
}

function curstateparam(state = "", action) {
    switch (action.type) {
        case SET_CURSTATEPARAM:
            return action.curstateparam
        default:
            return state
    }
}

function permissions(state = "", action) {
    switch (action.type) {
        case SET_PERMISSIONS_OPERATION:
            return action.permissions
        default:
            return state
    }
}

function automaticWorkOrder(state = [], action) {
    switch (action.type) {
        case SET_AUTOMATICWORKORDER:
            return action.automaticWorkOrder
        default:
            return state
    }
}

function equipmentType(state = [], action) {
    switch (action.type) {
        case SET_EQUIPMENTTYPE:
            return action.equipmentType
        default:
            return state
    }
}

function monitorType(state = [], action) {
    switch (action.type) {
        case SET_MONITORTYPE_OPERATION:
            return action.monitorType
        default:
            return state
    }
}

function allFaults(state = [], action) {
    switch (action.type) {
        case SET_ALLFAULTS:
            return action.allFaults
        default:
            return state
    }
}

function isBunder(state = 0, action) {
    switch (action.type) {
        case SET_ISBUNDER:
            return action.isBunder
        default:
            return state
    }
}

function workOrderFilterList(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERFILTERLIST:
            return action.workOrderFilterList
        default:
            return state
    }
}

function touchEquipmentData(state = [], action) {
    switch (action.type) {
        case SET_TOUCHEQUIPMENTDATA:
            return action.touchEquipmentData
        default:
            return state
    }
}

function touchFaultSubId(state = "", action) {
    switch (action.type) {
        case SET_TOUCHFAULTSUBID:
            return action.touchFaultSubId
        default:
            return state
    }
}

function dutyGroups(state = [], action) {
    switch (action.type) {
        case SET_DUTYGROUPS:
            return action.dutyGroups
        default:
            return state
    }
}

function dutyGroupArrs(state = [], action) {
    switch (action.type) {
        case SET_DUTYGROUPARRS:
            return action.dutyGroupArrs
        default:
            return state
    }
}

function dutyUsers(state = [], action) {
    switch (action.type) {
        case SET_DUTYUSERS:
            return action.dutyUsers
        default:
            return state
    }
}

function curDutyGroup(state = null, action) {
    switch (action.type) {
        case SET_CURDUTYGROUP:
            return action.curDutyGroup
        default:
            return state
    }
}

function curDataDutyGroup(state = null, action) {
    switch (action.type) {
        case SET_CURDATADUTYGROUP:
            return action.curDataDutyGroup
        default:
            return state
    }
}

function dutyUserList(state = [], action) {
    switch (action.type) {
        case SET_DUTYUSERLIST:
            return action.dutyUserList
        default:
            return state
    }
}

function dutyDutyList(state = [], action) {
    switch (action.type) {
        case SET_DUTYDUTYLIST:
            return action.dutyDutyList
        default:
            return state
    }
}

function dutyEccData(state = "", action) {
    switch (action.type) {
        case SET_DUTYECCDATA:
            return action.dutyEccData
        default:
            return state
    }
}

function calendarData(state = [], action) {
    switch (action.type) {
        case SET_CALENDARDATA:
            return action.calendarData
        default:
            return state
    }
}

function isSign(state = false, action) {
    switch (action.type) {
        case SET_ISSIGN:
            return action.isSign
        default:
            return state
    }
}

function getCalendarDataFlag(state = false, action) {
    switch (action.type) {
        case SET_GETCALENDARDATAFLAG:
            return action.getCalendarDataFlag
        default:
            return state
    }
}

function selectedCalendarDate(state = "", action) {
    switch (action.type) {
        case SET_SELECTEDCALENDARDATE:
            return action.selectedCalendarDate
        default:
            return state
    }
}

function dutyLogs(state = [], action) {
    switch (action.type) {
        case SET_DUTYLOGS:
            return action.dutyLogs
        default:
            return state
    }
}

function dutySignIns(state = [], action) {
    switch (action.type) {
        case SET_DUTYSIGNINS:
            return action.dutySignIns
        default:
            return state
    }
}

function clickedDutyLog(state = null, action) {
    switch (action.type) {
        case SET_CLICKEDDUTYLOG:
            return action.clickedDutyLog
        default:
            return state
    }
}

function selectedWorkOrderTemplate(state = null, action) {
    switch (action.type) {
        case SET_SELECTEDWORKORDERTEMPLATE:
            return action.selectedWorkOrderTemplate
        default:
            return state
    }
}

function workOrderTemplateOperationFlag(state = "add", action) {
    switch (action.type) {
        case SET_WORKORDERTEMPLATEOPERATIONFLAG:
            return action.workOrderTemplateOperationFlag
        default:
            return state
    }
}

function workOrderTemplateInfoChangeFlag(state = false, action) {
    switch (action.type) {
        case SET_WORKORDERTEMPLATEINFOCHANGEFLAG:
            return action.workOrderTemplateInfoChangeFlag
        default:
            return state
    }
}

function workFlowDetailCurrent(state = [], action) {
    switch (action.type) {
        case SET_WORKFLOWDETAIL_CURRENT:
            return action.workFlowDetailCurrent
        default:
            return state
    }
}

function workOrderTemplatesMainForm(state = null, action) {
    switch (action.type) {
        case SET_WORKORDERTEMPLATES_MAINFORM:
            return action.workOrderTemplatesMainForm
        default:
            return state
    }
}

function workOrderTemplatesSheetForm(state = null, action) {
    switch (action.type) {
        case SET_WORKORDERTEMPLATES_SHEETFORM:
            return action.workOrderTemplatesSheetForm
        default:
            return state
    }
}

function busObDefFieldDetail(state = [], action) {
  switch (action.type) {
    case SET_BUSOBDEFFIELD_OPERATION_DETAIL:
      return action.busObDefFieldDetail;
    default:
      return state;
  }
}

function busObDefFieldHandle(state = [], action) {
  switch (action.type) {
    case SET_BUSOBDEFFIELD_OPERATION_HANDLE:
      return action.busObDefFieldHandle;
    default:
      return state;
  }
}

function workOrderTemplatesMainData(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERTEMPLATES_MAINDATA:
            return action.workOrderTemplatesMainData
        default:
            return state
    }
}

function workOrderTemplatesSheetData(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERTEMPLATES_SHEETDATA:
            return action.workOrderTemplatesSheetData
        default:
            return state
    }
}
//明长然 20161222  服务级别协议相关代码  START
function slaInfoData(state = [], action) {
    switch (action.type){
        case SET_SLAINFODATA:
            return action.slaInfoData;
        default:
            return state;
    }
}
function slaInfoId(state = "", action) {
    switch (action.type){
        case SET_SLAINFOID:
            return action.slaInfoId;
        default:
            return state;
    }
}
function assetsStatussData(state = [], action) {
    switch (action.type){
        case SET_ASSETSSTATUSSDATA:
            return action.assetsStatussData;
        default:
            return state;
    }
}
function assetsStatussId(state = "", action) {
    switch (action.type){
        case SET_ASSETSSTATUSSID:
            return action.assetsStatussId;
        default:
            return state;
    }
}
function ecctaskplanData(state = [], action) {
    switch (action.type){
        case SET_ECCTASKPLANDATA:
            return action.ecctaskplanData;
        default:
            return state;
    }
}
function ecctaskplanId(state = "", action) {
    switch (action.type){
        case SET_ECCTASKPLANID:
            return action.ecctaskplanId;
        default:
            return state;
    }
}
function unitTypeData(state = [], action) {
    switch (action.type){
        case SET_UNITTYPEDATA:
            return action.unitTypeData;
        default:
            return state;
    }
}
function unitTypeId(state = "", action) {
    switch (action.type){
        case SET_UNITTYPEID:
            return action.unitTypeId;
        default:
            return state;
    }
}
function companyData(state = [], action) {
    switch (action.type){
        case SET_COMPANYDATA:
            return action.companyData;
        default:
            return state;
    }
}
function companyId(state = "", action) {
    switch (action.type){
        case SET_COMPANYID:
            return action.companyId;
        default:
            return state;
    }
}
function projectUnitData(state = [], action) {
    switch (action.type){
        case SET_PROJECTUNITDATA:
            return action.projectUnitData;
        default:
            return state;
    }
}
function projectUnitId(state = "", action) {
    switch (action.type){
        case SET_PROJECTUNITID:
            return action.projectUnitId;
        default:
            return state;
    }
}
function serviceCatalogData(state = [], action) {
    switch (action.type){
        case SET_SERVICECATALOGDATA:
            return action.serviceCatalogData;
        default:
            return state;
    }
}
function serviceCatalogId(state = "", action) {
    switch (action.type) {
        case SET_SERVICECATALOGID:
            return action.serviceCatalogId;
        default:
            return state;
    }
}
function serviceItemData(state = [], action) {
    switch (action.type){
        case SET_SERVICEITEMDATA:
            return action.serviceItemData;
        default:
            return state;
    }
}
function serviceItemId(state = "", action) {
    switch (action.type){
        case SET_SERVICEITEMID:
            return action.serviceItemId;
        default:
            return state;
    }
}
function slaStatusId(state = "", action) {
    switch (action.type){
        case SET_SLASTATUSID:
            return action.slaStatusId;
        default:
            return state;
    }
}
function slaStatusData(state = [], action) {
    switch (action.type){
        case SET_SLASTATUSDATA:
            return action.slaStatusData;
        default:
            return state;
    }
}
function slaRowId(state = "", action) {
    switch (action.type){
        case SET_SLAROWID:
            return action.slaRowId;
        default:
            return state;
    }
}
function slaStatusCode(state = "", action) {
    switch (action.type){
        case SET_SLASTATUSCODE:
            return action.slaStatusCode;
        default:
            return state;
    }
}
function slaRowCompanyId(state = "", action) {
    switch (action.type){
        case SET_SLAROWCOMPANYID:
            return action.slaRowCompanyId;
        default:
            return state;
    }
}
function slaRowProjectId(state = "", action) {
    switch (action.type){
        case SET_SLAROWPROJECTID:
            return action.slaRowProjectId;
        default:
            return state;
    }
}
function slaRowUnitTypeId(state = "", action) {
    switch (action.type){
        case SET_SLAROWUNITTYPEID:
            return action.slaRowUnitTypeId;
        default:
            return state;
    }
}
function slaRowStatusId(state = "", action) {
    switch (action.type){
        case SET_SLAROWSTATUSID:
            return action.slaRowStatusId;
        default:
            return state;
    }
}
function slaRowBigServiceId(state = "", action) {
    switch (action.type){
        case SET_SLAROWBIGSERVICEID:
            return action.slaRowBigServiceId;
        default:
            return state;
    }
}
function slaRowServiceSubId(state = "", action) {
    switch (action.type){
        case SET_SLAROWSERVICESUBID:
            return action.slaRowServiceSubId;
        default:
            return state;
    }
}
function slaRowWorkTimeId(state = "", action) {
    switch (action.type){
        case SET_SLAROWWORKTIMEID:
            return action.slaRowWorkTimeId;
        default:
            return state;
    }
}
function slaRowStartTimeVal(state = "", action) {
    switch (action.type){
        case SET_SLAROWSTARTTIMEVAL:
            return action.slaRowStartTimeVal;
        default:
            return state;
    }
}
function slaRowEndTimeVal(state = "", action) {
    switch (action.type){
        case SET_SLAROWENDTIMEVAL:
            return action.slaRowEndTimeVal;
        default:
            return state;
    }
}
function slaRowServiceType(state = "", action) {
    switch (action.type){
        case SET_SLAROWSERVICETYPE:
            return action.slaRowServiceType;
        default:
            return state;
    }
}
//明长然 20161222  服务级别协议相关代码  END
//明长然 20170105  故障管理相关代码 start
function fauleStatusData(state = [], action) {
    switch (action.type) {
      case SET_FAULESTATUSDATA:
          return action.fauleStatusData;
      default:
          return state;

    }
}
function fauleStatusId(state = "", action) {
    switch (action.type) {
      case SET_FAULESTATUSID:
          return action.fauleStatusId;
      default:
        return state;
    }
}
function fauleWorkOrderTypeData(state = [], action) {
    switch (action.type) {
      case SET_FAULEWORKORDERTYPEDATA:
          return action.fauleWorkOrderTypeData;
      default:
          return state;
    }
}
function fauleWorkOrderTypeId(state = "", action) {
    switch (action.type) {
      case SET_FAULEWORKORDERTYPEID:
          return action.fauleWorkOrderTypeId;
      default:
          return state;
    }
}
function fauleWorkOrderNameData(state = [], action) {
  switch (action.type) {
    case SET_FAULEWORKORDERNAMEDATA:
      return action.fauleWorkOrderNameData;
    default:
      return state;
  }
}
function fauleWorkOrderNameId(state = "", action) {
  switch (action.type) {
    case SET_FAULEWORKORDERNAMEID:
      return action.fauleWorkOrderNameId;
    default:
      return state;
  }
}
function workOrderSourceData(state = [], action) {
  switch (action.type) {
    case SET_WORKORDERSOURCEDATA:
      return action.workOrderSourceData;
    default:
      return state;
  }
}
function workOrderSourceId(state = "", action) {
  switch (action.type) {
    case SET_WORKORDERSOURCEID:
      return action.workOrderSourceId;
    default:
      return state;
  }
}
function slaInfoDatas(state = [], action) {
    switch (action.type){
        case SET_SLAINFODATAS:
            return action.slaInfoDatas;
        default:
            return state;
    }
}
function slaInfoIds(state = "", action) {
    switch (action.type){
        case SET_SLAINFOIDS:
            return action.slaInfoIds;
        default:
            return state;
    }
}
function fauleServiceCatalogId(state = "", action) {
    switch (action.type){
        case SET_FAULESERVICECATALOGID:
            return action.fauleServiceCatalogId;
        default:
            return state;
    }
}
function fauleServiceItemId(state = "", action) {
    switch (action.type){
        case SET_FAULESERVICECITEMID:
            return action.fauleServiceItemId;
        default:
            return state;
    }
}
function unitStaffInfoDatas(state = [], action) {
    switch (action.type){
        case SET_UNITSTAFFINFODATAS:
            return action.unitStaffInfoDatas;
        default:
            return state;
    }
}
function unitStaffInfoIds(state = "", action) {
    switch (action.type){
        case SET_UNITSTAFFINFOIDS:
            return action.unitStaffInfoIds;
        default:
            return state;
    }
}
function fauleUnitId(state = "", action) {
    switch (action.type){
        case SET_FAULEUNITID:
            return action.fauleUnitId;
        default:
            return state;
    }
}
function fauleAreaId(state = "", action) {
    switch (action.type){
        case SET_FAULEAREAID:
            return action.fauleAreaId;
        default:
            return state;
    }
}
function fauleTypeId(state = "", action) {
    switch (action.type){
        case SET_FAULETYPEID:
            return action.fauleTypeId;
        default:
            return state;
    }
}
function fauleBigFaultTypeData(state = [], action) {
    switch (action.type){
        case SET_FAULEBIGFAULTTYPEDATA:
            return action.fauleBigFaultTypeData;
        default:
            return state;
    }
}
function fauleBigFaultTypeId(state = "", action) {
    switch (action.type){
        case SET_FAULEBIGFAULTTYPEID:
            return action.fauleBigFaultTypeId;
        default:
            return state;
    }
}
function fauleFaultSubTypeData(state = [], action) {
    switch (action.type){
        case SET_FAULEFAULTSUBTYPEDATA:
            return action.fauleFaultSubTypeData;
        default:
            return state;
    }
}
function fauleFaultSubTypeId(state = "", action) {
    switch (action.type){
        case SET_FAULEFAULTSUBTYPEID:
            return action.fauleFaultSubTypeId;
        default:
            return state;
    }
}
function fauleFaultTypeData(state = [], action) {
    switch (action.type){
        case SET_FAULEFAULTTYPEDATA:
            return action.fauleFaultTypeData;
        default:
            return state;
    }
}
function fauleFaultTypeId(state = "", action) {
    switch (action.type){
        case SET_FAULEFAULTTYPEID:
            return action.fauleFaultTypeId;
        default:
            return state;
    }
}
function fauleKnowledgeData(state = [], action) {
    switch (action.type){
        case SET_FAULEKNOWLEDGEDATA:
            return action.fauleKnowledgeData;
        default:
            return state;
    }
}
function fauleKnowledgeId(state = "", action) {
    switch (action.type){
        case SET_FAULEKNOWLEDGEID:
            return action.fauleKnowledgeId;
        default:
            return state;
    }
}
function nextWorkFlowData(state = [], action) {
    switch (action.type){
        case SET_NEXTWORKFLOWDATA:
            return action.nextWorkFlowData;
        default:
            return state;
    }
}
function nextWorkFlowId(state = "", action) {
    switch (action.type){
        case SET_NEXTWORKFLOWID:
            return action.nextWorkFlowId;
        default:
            return state;
    }
}
function workFlowTypeData(state = [], action) {
    switch (action.type){
        case SET_WORKFLOWTYPEDATA:
            return action.workFlowTypeData;
        default:
            return state;
    }
}
function workFlowTypeId(state = "", action) {
    switch (action.type){
        case SET_WORKFLOWTYPEID:
            return action.workFlowTypeId;
        default:
            return state;
    }
}
function fauleRowUserName(state = "", action) {
    switch (action.type){
        case SET_FAULEROWUSERNAME:
            return action.fauleRowUserName;
        default:
            return state;
    }
}
function fauleFlowAction(state = "", action) {
    switch (action.type){
        case SET_FAULEFLOWACTION:
            return action.fauleFlowAction;
        default:
            return state;
    }
}
function fauleFromId(state = "", action) {
    switch (action.type){
        case SET_FAULEFROMID:
            return action.fauleFromId;
        default:
            return state;
    }
}
function fauleToId(state = "", action) {
    switch (action.type){
        case SET_FAULETOID:
            return action.fauleToId;
        default:
            return state;
    }
}
function fauleToUser(state = "", action) {
    switch (action.type){
        case SET_FAULETOUSER:
            return action.fauleToUser;
        default:
            return state;
    }
}
function workOrderRecIdData(state = [], action) {
    switch (action.type){
        case SET_WORKORDERRECIDDATA:
            return action.workOrderRecIdData;
        default:
            return state;
    }
}
function workOrderRecIdId(state = "", action) {
    switch (action.type){
        case SET_WORKORDERRECIDID:
            return action.workOrderRecIdId;
        default:
            return state;
    }
}
function unitStaffNumber(state = "", action) {
    switch (action.type){
        case SET_UNITSTAFFNUMBER:
            return action.unitStaffNumber;
        default:
            return state;
    }
}
function templateCode(state = "", action) {
    switch (action.type){
        case SET_TEMPLATECODE:
            return action.templateCode;
        default:
            return state;
    }
}
//明长然 20170105  故障管理相关代码 end
//明长然 20170203  任务管理相关代码 start
function taskOrderListData(state = [], action) {
    switch (action.type){
        case SET_TASKORDERLISTDATA:
            return action.taskOrderListData;
        default:
            return state;
    }
}
function taskOrderListId(state = "", action) {
    switch (action.type){
        case SET_TASKORDERLISTID:
            return action.taskOrderListId;
        default:
            return state;
    }
}
function taskWorkOrderTypeData(state = [], action) {
    switch (action.type){
        case SET_TASKWORKORDERTYPEDATA:
            return action.taskWorkOrderTypeData;
        default:
            return state;
    }
}
function taskWorkOrderTypeId(state = "", action) {
    switch (action.type){
        case SET_TASKWORKORDERTYPEID:
            return action.taskWorkOrderTypeId;
        default:
            return state;
    }
}
function rowStatus(state = "", action) {
    switch (action.type){
        case SET_ROWSTATUS:
            return action.rowStatus;
        default:
            return state;
    }
}
function orderDetailsData(state = [], action) {
    switch (action.type){
        case SET_ORDERDETAILSDATA:
            return action.orderDetailsData;
        default:
            return state;
    }
}
function orderDetailsId(state = "", action) {
    switch (action.type){
        case SET_ORDERDETAILSID:
            return action.orderDetailsId;
        default:
            return state;
    }
}
//明长然 20170203  任务管理相关代码 end
//明长然 20170206  投诉管理相关代码 start
function complaintOrderListData(state = [], action) {
    switch (action.type){
        case SET_COMPLAINTORDERLISTDATA:
            return action.complaintOrderListData;
        default:
            return state;
    }
}
function complaintOrderListId(state = "", action) {
    switch (action.type){
        case SET_COMPLAINTORDERLISTID:
            return action.complaintOrderListId;
        default:
            return state;
    }
}
function complaintAreaData(state = [], action) {
    switch (action.type){
        case SET_COMPLAINTAREADATA:
            return action.complaintAreaData;
        default:
            return state;
    }
}
function complaintAreaId(state = "", action) {
    switch (action.type){
        case SET_COMPLAINTAREAID:
            return action.complaintAreaId;
        default:
            return state;
    }
}
function complaintChildAreaData(state = [], action) {
    switch (action.type){
        case SET_COMPLAINTCHILDAREADATA:
            return action.complaintChildAreaData;
        default:
            return state;
    }
}
function complaintChildAreaId(state = "", action) {
    switch (action.type){
        case SET_COMPLAINTCHILDAREAID:
            return action.complaintChildAreaId;
        default:
            return state;
    }
}
function complaintWorkOrderTypeData(state = [], action) {
    switch (action.type){
        case SET_COMPLAINTWORKORDERTYPEDATA:
            return action.complaintWorkOrderTypeData;
        default:
            return state;
    }
}
function complaintWorkOrderTypeId(state = "", action) {
    switch (action.type){
        case SET_COMPLAINTWORKORDERTYPEID:
            return action.complaintWorkOrderTypeId;
        default:
            return state;
    }
}
//明长然 20170206  投诉管理相关代码 end
//曹志强		20161226	获取公告管理查询数据reducer
function topicInfoListData(state = [], action) {
    switch (action.type) {
        case SET_TOPICINFOLISTDATA:
            return action.topicInfoListData
        default:
            return state
    }
}
//曹志强		20161226	获取公告管理查询数据Id reducer
function topicInfoListId(state = "", action) {
    switch (action.type) {
        case SET_TOPICINFOLISTID:
            return action.topicInfoListId
        default:
            return state
    }
}
//曹志强		20161228	公告管理发送对象 reducer  
function topicObjectData(state = [], action) {
    switch (action.type) {
        case SET_TOPICOBJECTDATA:
            return action.topicObjectData
        default:
            return state
    }
}
//曹志强		20161228	公告管理发送对象树 reducer   
function topicObjectTree(state = [], action) {
    switch (action.type) {
        case SET_TOPICOBJECTTREE:
            return action.topicObjectTree
        default:
            return state
    }
}
//曹志强		20161228	刷新公告管理发送对象树 reducer   SET_TOPICOBJECTTREEDATA
function refreshTopicObjectTree(state = [], action) {
    switch (action.type) {
        case SET_REFRESHTOPICOBJECTTREE:
            return action.refreshTopicObjectTree
        default:
            return state
    }
}
//曹志强		20161228	刷新公告管理发送对象树 reducer   
function topicObjectTreeData(state = [], action) {
    switch (action.type) {
        case SET_TOPICOBJECTTREEDATA:
            return action.topicObjectTreeData
        default:
            return state
    }
}
//曹志强		20161228	刷新公告管理发送对象树 reducer    SET_ISCLICKTREECHANGE
function handleTopicObject(state = [], action) {
    switch (action.type) {
        case SET_HANDLETOPICOBJECT:
            return action.handleTopicObject
        default:
            return state
    }
}
//曹志强		20161228	刷新公告管理发送对象树 reducer    
function isClickTreeChange(state = [], action) {
    switch (action.type) {
        case SET_ISCLICKTREECHANGE:
            return action.isClickTreeChange
        default:
            return state
    }
}
//曹志强		20161228	创建获取未选数据的reducer
function staticTopicObject(state = [], action) {
    switch (action.type) {
        case SET_STATICTOPICOBJECTDATA:
            return action.staticTopicObject
        default:
            return state
    }
}
//曹志强		20161228	创建获取已选数据的reducer
function beforeTopicObject(state = [], action) {
    switch (action.type) {
        case SET_BEFORETOPICOBJECTDATA:
            return action.beforeTopicObject
        default:
            return state
    }
}
//曹志强		20161228	创建公告管理时候为编辑或查询reducer
function isEditTopicObjectData(state = false, action) {
    switch (action.type) {
        case SET_ISEDITTOPICOBJECTDATA:
            return action.isEditTopicObjectData
        default:
            return state
    }
}
//曹志强		20161228	创建公告管理公告名称reducer
function topicName(state = "", action) {
    switch (action.type) {
        case SET_TOPICNAME:
            return action.topicName
        default:
            return state
    }
}
//曹志强		20161228	创建公告管理公告内容reducer
function topicContent(state = "", action) {
    switch (action.type) {
        case SET_TOPICCONTENT:
            return action.topicContent
        default:
            return state
    }
}
//曹志强		20161228	创建公告管理公告内容reducer
function topicStatus(state = "", action) {
    switch (action.type) {
        case SET_TOPICSTATUS:
            return action.topicStatus
        default:
            return state
    }
}
//曹志强		20161228	创建公告管理审核不通过原因reducer
function topicReviewDesc(state = "", action) {
    switch (action.type) {
        case SET_TOPICREVIEWDESC:
            return action.topicReviewDesc
        default:
            return state
    }
}
//程艳鸿 20170103 值班管理组 
function dutyTableData(state = [], action) {
    switch (action.type) {
        case SET_DUTYTABLEDATA:
            return action.dutyTableData
        default:
            return state
    }
}
//程艳鸿 20170103 值班管理组 
function dutyTableId(state = "", action) {
    switch (action.type) {
        case SET_DUTYTABLEID:
            return action.dutyTableId
        default:
            return state
    }
}
//程艳鸿 20170103 值班管理组 
function dutyManageData(state = [], action) {
    switch (action.type) {
        case SET_DUTYMANAGEDATA:
            return action.dutyManageData
        default:
            return state
    }
}
//程艳鸿 20170103 值班管理组 
function dutyManageId(state = "", action) {
    switch (action.type) {
        case SET_DUTYMANAGEID:
            return action.dutyManageId
        default:
            return state
    }
}SET_DUTYPERSONINFO
//程艳鸿 20170103 值班管理组 
function dutyPersonInfo(state = "", action) {
    switch (action.type) {
        case SET_DUTYPERSONINFO:
            return action.dutyPersonInfo
        default:
            return state
    }
}
//刘家顺 20161222获取知识库信息
function knowledgeManagerData(state = [], action) {
    switch (action.type) {
        case SET_KNOWLEDGEMANAGERDATA:
            return action.knowledgeManagerData
        default:
            return state
    }
}
//刘家顺 20161222 删除知识库id
function deleteKnowledgeId(state = [], action) {
    switch (action.type) {
        case SET_DELETEKNOWLEDGEID:
            return action.deleteKnowledgeId
        default:
            return state
    }
}
////刘家顺 20161224 添加知识库故障大类id
//function faultid(state = [], action) {
//  switch (action.type) {
//      case SET_FAULTID:
//          return action.faultid
//      default:
//          return state
//  }
//}
////刘家顺 20161224 添加知识库故障细类id
//function faultsubid(state = [], action) {
//  switch (action.type) {
//      case SET_FAULTSUBID:
//          return action.faultsubid
//      default:
//          return state
//  }
//}
//、刘家顺 20161227 添加知识库故障细类id
function faultSubId(state = "", action) {
    switch (action.type) {
        case SET_FAULTSUBID:
            return action.faultSubId
        default:
            return state
    }
}

function faultSubPid(state = "", action) {
    switch (action.type) {
        case SET_FAULTSUBPID:
            return action.faultSubPid
        default:
            return state
    }
}
////刘家顺 20161228 添加知识库状态码
function reviewStatusCode(state = [], action) {
    switch (action.type) {
        case SET_REVIEWSTATUSCODE:
            return action.reviewStatusCode
        default:
            return state
    }
}
////刘家顺 20161230 获取绩效管理投诉量 日
function customerComplaintsData(state = [], action) {
    switch (action.type) {
        case SET_CUSTOMERCOMPLAINTSDATA:
            return action.customerComplaintsData
        default:
            return state
    }
}
////刘家顺 20161230 获取绩效管理投诉量 月
function customerComplaintsDatamonth(state = [], action) {
    switch (action.type) {
        case SET_CUSTOMERCOMPLAINTSDATAMONTH:
            return action.customerComplaintsDatamonth
        default:
            return state
    }
} 
////刘家顺 20161230 获取绩效管理投诉量 季度
function customerComplaintsDataquarter(state = [], action) {
    switch (action.type) {
        case SET_CUSTOMERCOMPLAINTSDATAQUARTER:
            return action.customerComplaintsDataquarter
        default:
            return state
    }
}
////刘家顺 20161230 获取绩效管理投诉量 年
function customerComplaintsDatayear(state = [], action) {
    switch (action.type) {
        case SET_CUSTOMERCOMPLAINTSDATAYEAR:
            return action.customerComplaintsDatayear
        default:
            return state
    }
}
////刘家顺 20170103 客户满意度评分 
function customeSatisfactionScoreData(state = [], action) {
    switch (action.type) {
        case SET_CUSTOMESATISFACTIONSCOREDATA:
            return action.customeSatisfactionScoreData
        default:
            return state
    }
}

////刘家顺 20170105 SLA
function SLAReachRateData(state = [], action) {
    switch (action.type) {
        case SET_SLAREACHRATEDATA:
            return action.SLAReachRateData
        default:
            return state
    }
}
////刘家顺 20170105 SLA
function filterSLAReachRateData(state = [], action) {
    switch (action.type) {
        case SET_FILTERSLAREACHRATEDATA:
            return action.filterSLAReachRateData
        default:
            return state
    }
}
////曹志强 20170105 SLA
function topicObjectFlagData(state = [], action) {
    switch (action.type) {
        case SET_TOPICOBJECTFLAGDATA:
            return action.topicObjectFlagData
        default:
            return state
    }
}
const operationReducer = combineReducers({
    faultTypes,
    faultSubTypes,
    serviceName,
    serviceData,
    faultTypeId,
    faultSubTypeId,
    serviceId,
    flowLevel,
    assets,
    handleAssetsId,
    workOrderList,
    colorSpanNum1,
    colorSpanNum2,
    colorSpanNum3,
    colorSpanNum4,
    colorSpanNum5,
    colorSpanNum6,
    colorSpanNum7,
    colorSpanNum8,
    picList,
    picList2,
    curWorkOrderData,
    curWorkOrderId,
    curWorkOrderStatus,
    curWorkOrderFlowId,
    curWorkOrderGroupID,
    orderDetailData,
    delayList,
    delayIndex,
    curDelayId,
    createOrderInfo,
    flowPicData,
    flowDesignPicData,
    workFlowTable,
    workFlowDetailTable,
    flowName,
    flowObjects,
    workTheme,
    workDescription,
    workFlowTypes,
    flowDeignResultData,
    curWorkFlowId,
    touchWorkOrderData,
    curstateparam,
    permissions,
    automaticWorkOrder,
    equipmentType,
    monitorType,
    allFaults,
    isBunder,
    workOrderFilterList,
    touchEquipmentData,
    touchFaultSubId,
    dutyGroups,
    dutyGroupArrs,
    dutyUsers,
    curDutyGroup,
    curDataDutyGroup,
    dutyUserList,
    dutyDutyList,
    dutyEccData,
    calendarData,
    isSign,
    getCalendarDataFlag,
    selectedCalendarDate,
    dutyLogs,
    dutySignIns,
    clickedDutyLog,
    canUpdate,
    selectedWorkOrderTemplate,
    workOrderTemplateOperationFlag,
    workOrderTemplateInfoChangeFlag,
    workFlowDetailCurrent,
    workOrderTemplatesMainForm,
    workOrderTemplatesSheetForm,
    busObDefFieldDetail,
    busObDefFieldHandle,
    workOrderTemplatesMainData,
    workOrderTemplatesSheetData,
    slaInfoData,
    slaInfoId,
    assetsStatussData,
    assetsStatussId,
    ecctaskplanData,
    ecctaskplanId,
    unitTypeData,
    unitTypeId,
    companyData,
    companyId,
    projectUnitData,
    projectUnitId,
    serviceCatalogData,
    serviceCatalogId,
    serviceItemData,
    serviceItemId,
    slaStatusData,
    slaStatusId,
    slaRowId,
    slaStatusCode,
    slaRowCompanyId,
    slaRowProjectId,
    slaRowUnitTypeId,
    slaRowStatusId,
    slaRowBigServiceId,
    slaRowServiceSubId,
    slaRowWorkTimeId,
    slaRowStartTimeVal,
    slaRowEndTimeVal,
    slaRowServiceType,
    fauleStatusId,
    fauleStatusData,
    fauleWorkOrderTypeId,
    fauleWorkOrderTypeData,
    fauleWorkOrderNameId,
    fauleWorkOrderNameData,
    workOrderSourceData,
    workOrderSourceId,
    slaInfoDatas,
    slaInfoIds,
    fauleServiceCatalogId,
    fauleServiceItemId,
    unitStaffInfoDatas,
    unitStaffInfoIds,
    fauleTypeId,
    fauleAreaId,
    fauleUnitId,
    fauleFaultTypeData,
    fauleFaultTypeId,
    fauleBigFaultTypeId,
    fauleBigFaultTypeData,
    fauleFaultSubTypeData,
    fauleFaultSubTypeId,
    fauleKnowledgeData,
    fauleKnowledgeId,
    topicInfoListData,
    topicInfoListId,
    topicObjectData,
    topicObjectTree,
    refreshTopicObjectTree,
    topicObjectTreeData,
    handleTopicObject,
    isClickTreeChange,
    staticTopicObject,
    beforeTopicObject,
    isEditTopicObjectData,
    topicName,
    topicContent,
    topicStatus,
    topicReviewDesc,
    dutyTableData,
    dutyTableId,
    dutyManageData,
    dutyManageId,
    dutyPersonInfo,
    knowledgeManagerData,
    deleteKnowledgeId,
    faultSubId,
    faultSubPid,
    reviewStatusCode,
    customerComplaintsData,
    customerComplaintsDatamonth,
    customerComplaintsDataquarter,
    customerComplaintsDatayear,
    customeSatisfactionScoreData,
    SLAReachRateData,
    filterSLAReachRateData,
    topicObjectFlagData,
    nextWorkFlowData,
    nextWorkFlowId,
    workFlowTypeId,
    workFlowTypeData,
    fauleRowUserName,
    fauleFlowAction,
    fauleFromId,
    fauleToUser,
    fauleToId,
    workOrderRecIdData,
    workOrderRecIdId,
    unitStaffNumber,
    taskOrderListId,
    taskOrderListData,
    complaintOrderListData,
    complaintOrderListId,
    taskWorkOrderTypeData,
    taskWorkOrderTypeId,
    rowStatus,
    complaintAreaData,
    complaintAreaId,
    complaintChildAreaData,
    complaintChildAreaId,
    complaintWorkOrderTypeData,
    complaintWorkOrderTypeId,
    templateCode,
    orderDetailsData,
    orderDetailsId
})

export default operationReducer
