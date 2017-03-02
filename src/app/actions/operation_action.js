/**
* 工单管理:工单列表、工单详情、工单新建 相关的action方法
*/

var oData = require('../server/odataOperation');
var Store = require('../server/store');
var util = require('../utils/dateChange.js');
import * as requestDataActions from './requestData_action'
import * as navActions from './navbar_action'

export const SET_FAULTTYPES = 'SET_FAULTTYPES'
export const SET_FAULTSUBTYPES = 'SET_FAULTSUBTYPES'
export const SET_SERVICENAME = 'SET_SERVICENAME'
export const SET_SERVICEDATA = 'SET_SERVICEDATA'
export const SET_FAULTTYPEID = 'SET_FAULTTYPEID'
export const SET_FAULTSUBTYPEID = 'SET_FAULTSUBTYPEID'
export const SET_SERVICEID = 'SET_SERVICEID'
export const SET_FLOWLEVEL = 'SET_FLOWLEVEL'
export const SET_ASSETS = 'SET_ASSETS'
export const SET_HANDLEASSETSID = 'SET_HANDLEASSETSID'
export const SET_WORKORDERLIST = 'SET_WORKORDERLIST'
export const SET_COLORSPANNUM1 = 'SET_COLORSPANNUM1'
export const SET_COLORSPANNUM2 = 'SET_COLORSPANNUM2'
export const SET_COLORSPANNUM3 = 'SET_COLORSPANNUM3'
export const SET_COLORSPANNUM4 = 'SET_COLORSPANNUM4'
export const SET_COLORSPANNUM5 = 'SET_COLORSPANNUM5'
export const SET_COLORSPANNUM6 = 'SET_COLORSPANNUM6'
export const SET_COLORSPANNUM7 = 'SET_COLORSPANNUM7'
export const SET_COLORSPANNUM8 = 'SET_COLORSPANNUM8'
export const SET_PICLIST = 'SET_PICLIST'
export const SET_PICLIST2 = 'SET_PICLIST2'
export const SET_CURWORKORDERDATA = 'SET_CURWORKORDERDATA'
export const SET_CURWORKORDERID = 'SET_CURWORKORDERID'
export const SET_CURWORKORDERSTATUS = 'SET_CURWORKORDERSTATUS'
export const SET_CURWORKORDERFLOWID = 'SET_CURWORKORDERFLOWID'
export const SET_CURWORKORDERGROUPID = 'SET_CURWORKORDERGROUPID'
export const SET_ORDERDETAILDATA = 'SET_ORDERDETAILDATA'
export const SET_DELAYLIST = 'SET_DELAYLIST'
export const SET_DELAYINDEX = 'SET_DELAYINDEX'
export const SET_CURDELAYID = 'SET_CURDELAYID'
export const SET_CREATEORDERINFO = 'SET_CREATEORDERINFO'
export const SET_FLOWPICDATA = 'SET_FLOWPICDATA'
export const SET_FLOWDESIGNPICDATA = 'SET_FLOWDESIGNPICDATA'
export const SET_WORKFLOWTABLE = 'SET_WORKFLOWTABLE'
export const SET_WORKFLOWDETAILTABLE = 'SET_WORKFLOWDETAILTABLE'
export const SET_FLOWNAME = 'SET_FLOWNAME'
export const SET_FLOWOBJECTS = 'SET_FLOWOBJECTS'
export const SET_WORKTHEME = 'SET_WORKTHEME'
export const SET_WORKDESCRIPTION = 'SET_WORKDESCRIPTION'
export const SET_WORKFLOWTYPES = 'SET_WORKFLOWTYPES'
export const SET_FLOWDEIGNRESULTDATA = 'SET_FLOWDEIGNRESULTDATA'
export const SET_CURWORKFLOWID = 'SET_CURWORKFLOWID'
export const SET_TOUCHWORKORDERDATA = 'SET_TOUCHWORKORDERDATA'
export const SET_TOUCHWORKORDERDATA_MONITORDATA = 'SET_TOUCHWORKORDERDATA_MONITORDATA'
export const SET_CURSTATEPARAM = 'SET_CURSTATEPARAM'
export const SET_PERMISSIONS_OPERATION = 'SET_PERMISSIONS_OPERATION'
export const SET_AUTOMATICWORKORDER = 'SET_AUTOMATICWORKORDER'
export const SET_EQUIPMENTTYPE = 'SET_EQUIPMENTTYPE'
export const SET_MONITORTYPE_OPERATION = 'SET_MONITORTYPE_OPERATION'
export const SET_ALLFAULTS = 'SET_ALLFAULTS'
export const SET_ISBUNDER = 'SET_ISBUNDER'
export const SET_WORKORDERFILTERLIST = 'SET_WORKORDERFILTERLIST'
export const SET_TOUCHEQUIPMENTDATA = 'SET_TOUCHEQUIPMENTDATA'
export const SET_TOUCHFAULTSUBID = 'SET_TOUCHFAULTSUBID'
export const SET_DUTYGROUPS = 'SET_DUTYGROUPS'
export const SET_DUTYGROUPARRS = 'SET_DUTYGROUPARRS'
export const SET_DUTYUSERS = 'SET_DUTYUSERS'
export const SET_CURDUTYGROUP = 'SET_CURDUTYGROUP'
export const SET_CURDATADUTYGROUP = 'SET_CURDATADUTYGROUP'
export const SET_DUTYUSERLIST = 'SET_DUTYUSERLIST'
export const SET_DUTYDUTYLIST = 'SET_DUTYDUTYLIST'
export const SET_DUTYECCDATA = 'SET_DUTYECCDATA'
export const SET_CALENDARDATA = 'SET_CALENDARDATA'
export const SET_ISSIGN = 'SET_ISSIGN'
export const SET_GETCALENDARDATAFLAG = 'SET_GETCALENDARDATAFLAG'
export const SET_SELECTEDCALENDARDATE = 'SET_SELECTEDCALENDARDATE'
export const SET_DUTYLOGS = 'SET_DUTYLOGS'
export const SET_DUTYSIGNINS = 'SET_DUTYSIGNINS'
export const SET_CLICKEDDUTYLOG = 'SET_CLICKEDDUTYLOG'
export const SET_CANUPDATE = 'SET_CANUPDATE'
export const SET_SELECTEDWORKORDERTEMPLATE = 'SET_SELECTEDWORKORDERTEMPLATE'
export const SET_WORKORDERTEMPLATEOPERATIONFLAG = 'SET_WORKORDERTEMPLATEOPERATIONFLAG'
export const SET_WORKORDERTEMPLATEINFOCHANGEFLAG = 'SET_WORKORDERTEMPLATEINFOCHANGEFLAG'
export const SET_WORKFLOWDETAIL_CURRENT = 'SET_WORKFLOWDETAIL_CURRENT'
export const SET_WORKORDERTEMPLATES_MAINFORM = 'SET_WORKORDERTEMPLATES_MAINFORM'
export const SET_WORKORDERTEMPLATES_SHEETFORM = 'SET_WORKORDERTEMPLATES_SHEETFORM'
export const SET_BUSOBDEFFIELD_OPERATION_DETAIL = 'SET_BUSOBDEFFIELD_OPERATION_DETAIL' //保存业务对象字段(工单主业务对象)
export const SET_BUSOBDEFFIELD_OPERATION_HANDLE = 'SET_BUSOBDEFFIELD_OPERATION_HANDLE' //保存业务对象字段(工单处理表单业务对象)
export const SET_WORKORDERTEMPLATES_MAINDATA = 'SET_WORKORDERTEMPLATES_MAINDATA'
export const SET_WORKORDERTEMPLATES_SHEETDATA = 'SET_WORKORDERTEMPLATES_SHEETDATA'

//明长然 20161222  服务级别协议相关代码  START
export const SET_SLAINFODATA = "SET_SLAINFODATA";
export const SET_SLAINFOID = "SET_SLAINFOID";
export const SET_PROJECTDATA = "SET_PROJECTDATA";
export const SET_PROJECTID = "SET_PROJECTID";
export const SET_ASSETSSTATUSSDATA = "SET_ASSETSSTATUSSDATA";
export const SET_ASSETSSTATUSSID = "SET_ASSETSSTATUSSID";
export const SET_ECCTASKPLANDATA = "SET_ECCTASKPLANDATA";
export const SET_ECCTASKPLANID = "SET_ECCTASKPLANID";
export const SET_UNITTYPEDATA = "SET_UNITTYPEDATA";
export const SET_UNITTYPEID = "SET_UNITTYPEID";
export const SET_COMPANYDATA = "SET_COMPANYDATA";
export const SET_COMPANYID = "SET_COMPANYID";
export const SET_PROJECTUNITDATA = "SET_PROJECTUNITDATA";
export const SET_PROJECTUNITID = "SET_PROJECTUNITID";
export const SET_SERVICECATALOGDATA = "SET_SERVICECATALOGDATA";
export const SET_SERVICECATALOGID = "SET_SERVICECATALOGID";
export const SET_SERVICEITEMDATA = "SET_SERVICEITEMDATA";
export const SET_SERVICEITEMID = "SET_SERVICEITEMID";
export const SET_SLASTATUSDATA = "SET_SLASTATUSDATA";
export const SET_SLASTATUSID = "SET_SLASTATUSID";
export const SET_SLAROWID = "SET_SLAROWID";
export const SET_SLASTATUSCODE = "SET_SLASTATUSCODE";
export const SET_SLAROWCOMPANYID = "SET_SLAROWCOMPANYID";
export const SET_SLAROWPROJECTID = "SET_SLAROWPROJECTID";
export const SET_SLAROWUNITTYPEID = "SET_SLAROWUNITTYPEID";
export const SET_SLAROWSTATUSID = "SET_SLAROWSTATUSID";
export const SET_SLAROWBIGSERVICEID = "SET_SLAROWBIGSERVICEID";
export const SET_SLAROWSERVICESUBID = "SET_SLAROWSERVICESUBID";
export const SET_SLAROWWORKTIMEID = "SET_SLAROWWORKTIMEID";
export const SET_SLAROWSTARTTIMEVAL = "SET_SLAROWSTARTTIMEVAL";
export const SET_SLAROWENDTIMEVAL = "SET_SLAROWENDTIMEVAL";
export const SET_SLAROWSERVICETYPE = "SET_SLAROWSERVICETYPE";
//明长然 20161222  服务级别协议相关代码  END
//明长然 20170105  故障管理相关代码  start
export const SET_FAULESTATUSDATA = "SET_FAULESTATUSDATA";
export const SET_FAULESTATUSID = "SET_FAULESTATUSID";
export const SET_FAULEWORKORDERTYPEDATA = "SET_FAULEWORKORDERTYPEDATA";
export const SET_FAULEWORKORDERTYPEID = "SET_FAULEWORKORDERTYPEID";
export const SET_FAULEWORKORDERNAMEDATA = "SET_FAULEWORKORDERNAMEDATA";
export const SET_FAULEWORKORDERNAMEID = "SET_FAULEWORKORDERNAMEID";
export const SET_WORKORDERSOURCEDATA = "SET_WORKORDERSOURCEDATA";
export const SET_WORKORDERSOURCEID = "SET_WORKORDERSOURCEID";
export const SET_SLAINFODATAS = "SET_SLAINFODATAS";
export const SET_SLAINFOIDS = "SET_SLAINFOIDS";
export const SET_FAULESERVICECITEMID = "SET_FAULESERVICECITEMID";
export const SET_FAULESERVICECATALOGID = "SET_FAULESERVICECATALOGID";
export const SET_UNITSTAFFINFODATAS = "SET_UNITSTAFFINFODATAS";
export const SET_UNITSTAFFINFOIDS = "SET_UNITSTAFFINFOIDS";
export const SET_FAULEUNITID = "SET_FAULEUNITID";
export const SET_FAULEAREAID = "SET_FAULEAREAID";
export const SET_FAULETYPEID = "SET_FAULETYPEID";
export const SET_FAULEBIGFAULTTYPEDATA = "SET_FAULEBIGFAULTTYPEDATA";
export const SET_FAULEBIGFAULTTYPEID = "SET_FAULEBIGFAULTTYPEID";
export const SET_FAULEFAULTSUBTYPEDATA = "SET_FAULEFAULTSUBTYPEDATA";
export const SET_FAULEFAULTSUBTYPEID = "SET_FAULEFAULTSUBTYPEID";
export const SET_FAULEFAULTTYPEDATA = "SET_FAULEFAULTTYPEDATA";
export const SET_FAULEFAULTTYPEID = "SET_FAULEFAULTTYPEID";
export const SET_FAULEKNOWLEDGEDATA = "SET_FAULEKNOWLEDGEDATA";
export const SET_FAULEKNOWLEDGEID = "SET_FAULEKNOWLEDGEID";
export const SET_NEXTWORKFLOWDATA = "SET_NEXTWORKFLOWDATA";
export const SET_NEXTWORKFLOWID = "SET_NEXTWORKFLOWID";
export const SET_WORKFLOWTYPEDATA = "SET_WORKFLOWTYPEDATA";
export const SET_WORKFLOWTYPEID = "SET_WORKFLOWTYPEID";
export const SET_FAULEROWUSERNAME = "SET_FAULEROWUSERNAME";
export const SET_FAULEFLOWACTION = "SET_FAULEFLOWACTION";
export const SET_FAULEFROMID = "SET_FAULEFROMID";
export const SET_FAULETOID = "SET_FAULETOID";
export const SET_FAULETOUSER = "SET_FAULETOUSER";
export const SET_WORKORDERRECIDDATA = "SET_WORKORDERRECIDDATA";
export const SET_WORKORDERRECIDID = "SET_WORKORDERRECIDID";
export const SET_UNITSTAFFNUMBER = "SET_UNITSTAFFNUMBER";
export const SET_TEMPLATECODE = "SET_TEMPLATECODE";
//明长然 20170105  故障管理相关代码  end
//明长然 20170203  任务管理相关代码  start
export const SET_TASKORDERLISTDATA = "SET_TASKORDERLISTDATA";
export const SET_TASKORDERLISTID = "SET_TASKORDERLISTID";
export const SET_TASKWORKORDERTYPEDATA = "SET_TASKWORKORDERTYPEDATA";
export const SET_TASKWORKORDERTYPEID = "SET_TASKWORKORDERTYPEID";
export const SET_ROWSTATUS = "SET_ROWSTATUS";
export const SET_ORDERDETAILSDATA = "SET_ORDERDETAILSDATA";
export const SET_ORDERDETAILSID = "SET_ORDERDETAILSID";

//明长然 20170203  任务管理相关代码  end
// 明长然 20170206  投诉管理相关代码  start
export const SET_COMPLAINTORDERLISTDATA = "SET_COMPLAINTORDERLISTDATA";
export const SET_COMPLAINTORDERLISTID = "SET_COMPLAINTORDERLISTID";
export const SET_COMPLAINTAREADATA = "SET_COMPLAINTAREADATA";
export const SET_COMPLAINTAREAID = "SET_COMPLAINTAREAID";
export const SET_COMPLAINTCHILDAREADATA = "SET_COMPLAINTCHILDAREADATA";
export const SET_COMPLAINTCHILDAREAID = "SET_COMPLAINTCHILDAREAID";
export const SET_COMPLAINTWORKORDERTYPEDATA = "SET_COMPLAINTWORKORDERTYPEDATA";
export const SET_COMPLAINTWORKORDERTYPEID = "SET_COMPLAINTWORKORDERTYPEID";
//明长然 20170206  投诉管理相关代码  end

//明长然 20170105  故障管理相关代码  end
//曹志强		20161226	公告管理查询数据Action
export const SET_TOPICINFOLISTDATA = 'SET_TOPICINFOLISTDATA';
//曹志强		20161226	公告管理查询IDAction
export const SET_TOPICINFOLISTID = 'SET_TOPICINFOLISTID';
//曹志强		20161228	公告管理发送对象数据Action
export const SET_TOPICOBJECTDATA = 'SET_TOPICOBJECTDATA';
//曹志强		20161228	公告管理发送对象树
export const SET_TOPICOBJECTTREE = 'SET_TOPICOBJECTTREE';
//曹志强		20161228	刷新公告管理发送对象树
export const SET_REFRESHTOPICOBJECTTREE = 'SET_REFRESHTOPICOBJECTTREE';
//曹志强		20161228	获取选中的发送对象的值
export const SET_TOPICOBJECTTREEDATA = 'SET_TOPICOBJECTTREEDATA';
//曹志强		20161228	获取选中的发送对象值
export const SET_HANDLETOPICOBJECT = 'SET_HANDLETOPICOBJECT';
//曹志强		20161228	获取
export const SET_ISCLICKTREECHANGE = 'SET_ISCLICKTREECHANGE';
//曹志强		20161228	获取未选中的数据
export const SET_STATICTOPICOBJECTDATA = 'SET_STATICTOPICOBJECTDATA'
//曹志强		20161228	获取已选中的数据
export const SET_BEFORETOPICOBJECTDATA = 'SET_BEFORETOPICOBJECTDATA'
//曹志强		20161228	判断是否编辑公告信息
export const SET_ISEDITTOPICOBJECTDATA = 'SET_ISEDITTOPICOBJECTDATA'
//曹志强		20161228	创建公告管理公告名称action
export const SET_TOPICNAME = 'SET_TOPICNAME'
//曹志强		20161228	创建公告管理公告内容action
export const SET_TOPICCONTENT = 'SET_TOPICCONTENT'
//曹志强		20161228	创建公告管理审核状态action
export const SET_TOPICSTATUS = 'SET_TOPICSTATUS'
//曹志强		20170103	创建审核不通过原因action
export const SET_TOPICREVIEWDESC = 'SET_TOPICREVIEWDESC'
//曹志强		20170110	值班管理相关代码start
export const SET_DUTYTABLEDATA = 'SET_DUTYTABLEDATA';
export const SET_DUTYTABLEID = "SET_DUTYTABLEID";
export const SET_DUTYMANAGEDATA = "SET_DUTYMANAGEDATA";
export const SET_DUTYMANAGEID = "SET_DUTYMANAGEID";
export const SET_DUTYPERSONINFO = "SET_DUTYPERSONINFO";
//曹志强		20170110	值班管理相关代码end
//刘家顺start
export const SET_KNOWLEDGEMANAGERDATA = 'SET_KNOWLEDGEMANAGERDATA'
export const SET_DELETEKNOWLEDGEID = 'SET_DELETEKNOWLEDGEID'

export const SET_FAULTSUBID = 'SET_FAULTSUBID'
export const SET_FAULTSUBPID = 'SET_FAULTSUBPID'
export const SET_REVIEWSTATUSCODE = 'SET_REVIEWSTATUSCODE'
export const SET_CUSTOMERCOMPLAINTSDATA = 'SET_CUSTOMERCOMPLAINTSDATA'
export const SET_CUSTOMERCOMPLAINTSDATAMONTH = 'SET_CUSTOMERCOMPLAINTSDATAMONTH'
export const SET_CUSTOMERCOMPLAINTSDATAQUARTER = 'SET_CUSTOMERCOMPLAINTSDATAQUARTER'
export const SET_CUSTOMERCOMPLAINTSDATAYEAR = 'SET_CUSTOMERCOMPLAINTSDATAYEAR'
export const SET_CUSTOMESATISFACTIONSCOREDATA = 'SET_CUSTOMESATISFACTIONSCOREDATA'
export const SET_SLAREACHRATEDATA = 'SET_SLAREACHRATEDATA'
export const SET_FILTERSLAREACHRATEDATA = 'SET_FILTERSLAREACHRATEDATA'
export const SET_TOPICOBJECTFLAGDATA = 'SET_TOPICOBJECTFLAGDATA'

//刘家顺end
export function setCanUpdate(data){
    return {
        type: SET_CANUPDATE,
        data
    }
}

export function setFaultTypes(faultTypes) {
    return {
        type: SET_FAULTTYPES,
        faultTypes
    }
}

export function setFaultSubTypes(faultSubTypes) {
    return {
        type: SET_FAULTSUBTYPES,
        faultSubTypes
    }
}

export function setServiceName(serviceName) {
    return {
        type: SET_SERVICENAME,
        serviceName
    }
}

export function setServiceData(serviceData) {
    return {
        type: SET_SERVICEDATA,
        serviceData
    }
}

export function setFaultTypeId(faultTypeId) {
    return {
        type: SET_FAULTTYPEID,
        faultTypeId
    }
}

export function setFaultSubTypeId(faultSubTypeId) {
    return {
        type: SET_FAULTSUBTYPEID,
        faultSubTypeId
    }
}

export function setServiceId(serviceId) {
    return {
        type: SET_SERVICEID,
        serviceId
    }
}

export function setFlowLevel(flowLevel) {
    return {
        type: SET_FLOWLEVEL,
        flowLevel
    }
}

export function setAssets(assets) {
    return {
        type: SET_ASSETS,
        assets
    }
}

export function setHandleAssetsId(handleAssetsId) {
    return {
        type: SET_HANDLEASSETSID,
        handleAssetsId
    }
}

export function setWorkOrderList(workOrderList) {
    return {
        type: SET_WORKORDERLIST,
        workOrderList
    }
}

export function setColorSpanNum1(colorSpanNum1) {
    return {
        type: SET_COLORSPANNUM1,
        colorSpanNum1
    }
}

export function setColorSpanNum2(colorSpanNum2) {
    return {
        type: SET_COLORSPANNUM2,
        colorSpanNum2
    }
}

export function setColorSpanNum3(colorSpanNum3) {
    return {
        type: SET_COLORSPANNUM3,
        colorSpanNum3
    }
}

export function setColorSpanNum4(colorSpanNum4) {
    return {
        type: SET_COLORSPANNUM4,
        colorSpanNum4
    }
}

export function setColorSpanNum5(colorSpanNum5) {
    return {
        type: SET_COLORSPANNUM5,
        colorSpanNum5
    }
}

export function setColorSpanNum6(colorSpanNum6) {
    return {
        type: SET_COLORSPANNUM6,
        colorSpanNum6
    }
}

export function setColorSpanNum7(colorSpanNum7) {
    return {
        type: SET_COLORSPANNUM7,
        colorSpanNum7
    }
}

export function setColorSpanNum8(colorSpanNum8) {
    return {
        type: SET_COLORSPANNUM8,
        colorSpanNum8
    }
}

export function setPicList(picList) {
    return {
        type: SET_PICLIST,
        picList
    }
}

export function setPicList2(picList2) {
    return {
        type: SET_PICLIST2,
        picList2
    }
}

export function setCurWorkOrderData(curWorkOrderData) {
    return {
        type: SET_CURWORKORDERDATA,
        curWorkOrderData
    }
}

export function setCurWorkOrderId(curWorkOrderId) {
    return {
        type: SET_CURWORKORDERID,
        curWorkOrderId
    }
}

export function setCurWorkOrderStatus(curWorkOrderStatus) {
    return {
        type: SET_CURWORKORDERSTATUS,
        curWorkOrderStatus
    }
}

export function setCurWorkOrderFlowId(curWorkOrderFlowId) {
    return {
        type: SET_CURWORKORDERFLOWID,
        curWorkOrderFlowId
    }
}

export function setCurWorkOrderGroupID(curWorkOrderGroupID) {
    return {
        type: SET_CURWORKORDERGROUPID,
        curWorkOrderGroupID
    }
}

export function setOrderDetailData(orderDetailData) {
    return {
        type: SET_ORDERDETAILDATA,
        orderDetailData
    }
}

export function setDelayList(delayList) {
    return {
        type: SET_DELAYLIST,
        delayList
    }
}

export function setDelayIndex(delayIndex) {
    return {
        type: SET_DELAYINDEX,
        delayIndex
    }
}

export function setCurDelayId(curDelayId) {
    return {
        type: SET_CURDELAYID,
        curDelayId
    }
}

export function setCreateOrderInfo(createOrderInfo) {
    return {
        type: SET_CREATEORDERINFO,
        createOrderInfo
    }
}

export function setFlowPicData(flowPicData) {
    return {
        type: SET_FLOWPICDATA,
        flowPicData
    }
}

export function setFlowDesignPicData(flowDesignPicData) {
    return {
        type: SET_FLOWDESIGNPICDATA,
        flowDesignPicData
    }
}

export function setWorkFlowTable(workFlowTable) {
    return {
        type: SET_WORKFLOWTABLE,
        workFlowTable
    }
}

export function setWorkFlowDetailTable(workFlowDetailTable) {
    return {
        type: SET_WORKFLOWDETAILTABLE,
        workFlowDetailTable
    }
}

export function setWorkFlowDetailCurrent(workFlowDetailCurrent) {
    return {
        type: SET_WORKFLOWDETAIL_CURRENT,
        workFlowDetailCurrent
    }
}

export function setFlowName(flowName) {
    return {
        type: SET_FLOWNAME,
        flowName
    }
}

export function setFlowObjects(flowObjects) {
    return {
        type: SET_FLOWOBJECTS,
        flowObjects
    }
}

export function setWorkTheme(workTheme) {
    return {
        type: SET_WORKTHEME,
        workTheme
    }
}

export function setWorkDescription(workDescription) {
    return {
        type: SET_WORKDESCRIPTION,
        workDescription
    }
}

export function setWorkFlowTypes(workFlowTypes) {
    return {
        type: SET_WORKFLOWTYPES,
        workFlowTypes
    }
}

export function setFlowDeignResultData(flowDeignResultData) {
    return {
        type: SET_FLOWDEIGNRESULTDATA,
        flowDeignResultData
    }
}

export function setCurWorkFlowId(curWorkFlowId) {
    return {
        type: SET_CURWORKFLOWID,
        curWorkFlowId
    }
}

export function setTouchWorkOrderData(touchWorkOrderData) {
    return {
        type: SET_TOUCHWORKORDERDATA,
        touchWorkOrderData
    }
}

export function setTouchWorkOrderData_monitorData(monitorData) {
    return {
        type: SET_TOUCHWORKORDERDATA_MONITORDATA,
        monitorData
    }
}

export function setCurstateparam(curstateparam) {
    return {
        type: SET_CURSTATEPARAM,
        curstateparam
    }
}

export function setPermissionsOperation(permissions) {
    return {
        type: SET_PERMISSIONS_OPERATION,
        permissions
    }
}

export function setAutomaticWorkOrder(automaticWorkOrder) {
    return {
        type: SET_AUTOMATICWORKORDER,
        automaticWorkOrder
    }
}

export function setEquipmentType(equipmentType) {
    return {
        type: SET_EQUIPMENTTYPE,
        equipmentType
    }
}

export function setMonitorType(monitorType) {
    return {
        type: SET_MONITORTYPE_OPERATION,
        monitorType
    }
}

export function setAllFaults(allFaults) {
    return {
        type: SET_ALLFAULTS,
        allFaults
    }
}

export function setIsBunder(isBunder) {
    return {
        type: SET_ISBUNDER,
        isBunder
    }
}

export function setWorkOrderFilterList(workOrderFilterList) {
    return {
        type: SET_WORKORDERFILTERLIST,
        workOrderFilterList
    }
}

export function setTouchEquipmentData(touchEquipmentData) {
    return {
        type: SET_TOUCHEQUIPMENTDATA,
        touchEquipmentData
    }
}

export function setTouchFaultSubId(touchFaultSubId) {
    return {
        type: SET_TOUCHFAULTSUBID,
        touchFaultSubId
    }
}

export function setDutyGroups(dutyGroups) {
    return {
        type: SET_DUTYGROUPS,
        dutyGroups
    }
}

export function setDutyGroupArrs(dutyGroupArrs) {
    return {
        type: SET_DUTYGROUPARRS,
        dutyGroupArrs
    }
}

export function setDutyUsers(dutyUsers) {
    return {
        type: SET_DUTYUSERS,
        dutyUsers
    }
}

export function setCurDutyGroup(curDutyGroup) {
    return {
        type: SET_CURDUTYGROUP,
        curDutyGroup
    }
}

export function setCurDataDutyGroup(curDataDutyGroup) {
    return {
        type: SET_CURDATADUTYGROUP,
        curDataDutyGroup
    }
}

export function setDutyUserList(dutyUserList) {
    return {
        type: SET_DUTYUSERLIST,
        dutyUserList
    }
}

export function setDutyDutyList(dutyDutyList) {
    return {
        type: SET_DUTYDUTYLIST,
        dutyDutyList
    }
}

export function setDutyEccData(dutyEccData) {
    return {
        type: SET_DUTYECCDATA,
        dutyEccData
    }
}

export function setCalendarData(calendarData) {
    return {
        type: SET_CALENDARDATA,
        calendarData
    }
}

export function setIsSign(isSign) {
    return {
        type: SET_ISSIGN,
        isSign
    }
}

export function setGetCalendarDataFlag(getCalendarDataFlag) {
    return {
        type: SET_GETCALENDARDATAFLAG,
        getCalendarDataFlag
    }
}

export function setSelectedCalendarDate(selectedCalendarDate) {
    return {
        type: SET_SELECTEDCALENDARDATE,
        selectedCalendarDate
    }
}

export function setDutyLogs(dutyLogs) {
    return {
        type: SET_DUTYLOGS,
        dutyLogs
    }
}

export function setDutySignIns(dutySignIns) {
    return {
        type: SET_DUTYSIGNINS,
        dutySignIns
    }
}

export function setClickedDutyLog(clickedDutyLog) {
    return {
        type: SET_CLICKEDDUTYLOG,
        clickedDutyLog
    }
}

export function setSelectedWorkOrderTemplate(selectedWorkOrderTemplate) {
    return {
        type: SET_SELECTEDWORKORDERTEMPLATE,
        selectedWorkOrderTemplate
    }
}
export function setWorkOrderTemplateOperationFlag(workOrderTemplateOperationFlag) {
    return {
        type: SET_WORKORDERTEMPLATEOPERATIONFLAG,
        workOrderTemplateOperationFlag
    }
}
export function setWorkOrderTemplateInfoChangeFlag(workOrderTemplateInfoChangeFlag) {
    return {
        type: SET_WORKORDERTEMPLATEINFOCHANGEFLAG,
        workOrderTemplateInfoChangeFlag
    }
}

export function setWorkOrderTemplatesMainForm(workOrderTemplatesMainForm) {
    return {
        type: SET_WORKORDERTEMPLATES_MAINFORM,
        workOrderTemplatesMainForm
    }
}

export function setWorkOrderTemplatesSheetForm(workOrderTemplatesSheetForm) {
    return {
        type: SET_WORKORDERTEMPLATES_SHEETFORM,
        workOrderTemplatesSheetForm
    }
}

export function setBusObDefFieldDetail(busObDefFieldDetail) {
  return {
    type: SET_BUSOBDEFFIELD_OPERATION_DETAIL,
    busObDefFieldDetail
  }
}

export function setBusObDefFieldHandle(busObDefFieldHandle) {
  return {
    type: SET_BUSOBDEFFIELD_OPERATION_HANDLE,
    busObDefFieldHandle
  }
}

export function setWorkOrderTemplatesMainData(workOrderTemplatesMainData) {
    return {
        type: SET_WORKORDERTEMPLATES_MAINDATA,
        workOrderTemplatesMainData
    }
}

export function setWorkOrderTemplatesSheetData(workOrderTemplatesSheetData) {
    return {
        type: SET_WORKORDERTEMPLATES_SHEETDATA,
        workOrderTemplatesSheetData
    }
}
//明长然 20161222  服务级别协议相关代码  START
export function setSLAInfoData(slaInfoData) {
    return {
        type: SET_SLAINFODATA,
        slaInfoData
    }
}
export function setSLAInfoId(slaInfoId) {
    return {
        type: SET_SLAINFOID,
        slaInfoId
    }
}
export function setProjectData(projectData) {
    return{
        type:SET_PROJECTDATA,
        projectData
    }
}
export function setProjectId(projectId) {
    return{
        type:SET_PROJECTID,
        projectId
    }
}
export function setAssetsStatussData(assetsStatussData) {
    return {
        type:SET_ASSETSSTATUSSDATA,
        assetsStatussData
    }
}
export function setAssetsStatussId(assetsStatussId) {
    return {
        type:SET_ASSETSSTATUSSID,
        assetsStatussId
    }
}
export function setEcctaskplanData(ecctaskplanData) {
    return {
        type:SET_ECCTASKPLANDATA,
        ecctaskplanData
    }
}
export function setEcctaskplanId(ecctaskplanId) {
    return {
        type:SET_ECCTASKPLANID,
        ecctaskplanId
    }
}
export function setUnitTypeData(unitTypeData) {
    return {
        type:SET_UNITTYPEDATA,
        unitTypeData
    }
}
export function setUnitTypeId(unitTypeId) {
    return {
        type:SET_UNITTYPEID,
        unitTypeId
    }
}
export function setCompanyData(companyData) {
    return {
        type:SET_COMPANYDATA,
        companyData
    }
}
export function setCompanyId(companyId) {
    return {
        type:SET_COMPANYID,
        companyId
    }
}
export function setProjectUnitData(projectUnitData) {
    return {
        type:SET_PROJECTUNITDATA,
        projectUnitData
    }
}
export function setProjectUnitId(projectUnitId) {
    return {
        type:SET_PROJECTUNITID,
        projectUnitId
    }
}
export function setServiceCatalogData(serviceCatalogData) {
    return {
        type:SET_SERVICECATALOGDATA,
        serviceCatalogData
    }
}
export function setServiceCatalogId(serviceCatalogId) {
    return {
        type:SET_SERVICECATALOGID,
        serviceCatalogId
    }
}
export function setServiceItemData(serviceItemData) {
    return {
        type:SET_SERVICEITEMDATA,
        serviceItemData
    }
}
export function setServiceItemId(serviceItemId) {
    return {
        type:SET_SERVICEITEMID,
        serviceItemId
    }
}
export function setSlaStatusData(slaStatusData) {
    return {
        type:SET_SLASTATUSDATA,
        slaStatusData
    }
}
export function setSlaStatusId(slaStatusId) {
    return {
        type:SET_SLASTATUSID,
        slaStatusId
    }
}
export function setSlaRowId(slaRowId) {
    return {
        type:SET_SLAROWID,
        slaRowId
    }
}
export function setSlaStatusCode(slaStatusCode) {
    return {
        type:SET_SLASTATUSCODE,
        slaStatusCode
    }
}
export function setSlaRowCompanyId(slaRowCompanyId) {
    return{
        type:SET_SLAROWCOMPANYID,
        slaRowCompanyId
    }
}
export function setSlaRowProjectId(slaRowProjectId) {
    return{
        type:SET_SLAROWPROJECTID,
        slaRowProjectId
    }
}
export function setSlaRowUnitTypeId(slaRowUnitTypeId){
    return {
        type:SET_SLAROWUNITTYPEID,
        slaRowUnitTypeId
    }
}
export function setSlaRowStatusId(slaRowStatusId){
    return {
        type:SET_SLAROWSTATUSID,
        slaRowStatusId
    }
}
export function setSlaRowBigServiceId(slaRowBigServiceId){
    return {
        type:SET_SLAROWBIGSERVICEID,
        slaRowBigServiceId
    }
}
export function setSlaRowServiceSubId(slaRowServiceSubId){
    return {
        type:SET_SLAROWSERVICESUBID,
        slaRowServiceSubId
    }
}
export function setSlaRowWorkTimeId(slaRowWorkTimeId){
    return {
        type:SET_SLAROWWORKTIMEID,
        slaRowWorkTimeId
    }
}
export function setSlaRowStartTimeVal(slaRowStartTimeVal){
    return {
        type:SET_SLAROWSTARTTIMEVAL,
        slaRowStartTimeVal
    }
}
export function setSlaRowEndTimeVal(slaRowEndTimeVal){
    return {
        type:SET_SLAROWENDTIMEVAL,
        slaRowEndTimeVal
    }
}
export function setSLaRowServiceType(slaRowServiceType){
    return {
        type:SET_SLAROWSERVICETYPE,
        slaRowServiceType
    }
}
//明长然 20161222  服务级别协议相关代码  END
//明长然 20170105  故障管理相关代码  start
export function setTemplateCode(templateCode) {
    return {
        type: SET_TEMPLATECODE,
        templateCode
    }
}
export function setFauleStatusData(fauleStatusData) {
    return{
      type:SET_FAULESTATUSDATA,
      fauleStatusData
    }
}
export function setFauleStatusId(fauleStatusId) {
    return{
      type:SET_FAULESTATUSID,
      fauleStatusId
    }
}
export function setFauleWorkOrderTypeData(fauleWorkOrderTypeData) {
    return{
      type:SET_FAULEWORKORDERTYPEDATA,
      fauleWorkOrderTypeData
    }
}
export function setFauleWorkOrderTypeId(fauleWorkOrderTypeId) {
    return{
      type:SET_FAULEWORKORDERTYPEID,
      fauleWorkOrderTypeId
    }
}
export function setFauleWorkOrderNameData(fauleWorkOrderNameData) {
  return{
    type:SET_FAULEWORKORDERNAMEDATA,
    fauleWorkOrderNameData
  }
}
export function setFauleWorkOrderNameId(fauleWorkOrderNameId) {
  return{
    type:SET_FAULEWORKORDERNAMEID,
    fauleWorkOrderNameId
  }
}
export function setWorkOrderSourceData(workOrderSourceData) {
  return{
    type:SET_WORKORDERSOURCEDATA,
    workOrderSourceData
  }
}
export function setWorkOrderSourceId(workOrderSourceId) {
  return{
    type:SET_WORKORDERSOURCEID,
    workOrderSourceId
  }
}
export function setSLAInfoDatas(slaInfoDatas) {
    return {
        type: SET_SLAINFODATAS,
        slaInfoDatas
    }
}
export function setSLAInfoIds(slaInfoIds) {
    return {
        type: SET_SLAINFOIDS,
        slaInfoIds
    }
}
export function setFauleServiceCatalogId(fauleServiceCatalogId) {
    return {
        type: SET_FAULESERVICECATALOGID,
        fauleServiceCatalogId
    }
}
export function setFauleServiceItemId(fauleServiceItemId) {
    return {
        type: SET_FAULESERVICECITEMID,
        fauleServiceItemId
    }
}
export function setUnitStaffInfoDatas(unitStaffInfoDatas) {
    return {
        type: SET_UNITSTAFFINFODATAS,
        unitStaffInfoDatas
    }
}
export function setUnitStaffInfoIds(unitStaffInfoIds) {
    return {
        type: SET_UNITSTAFFINFOIDS,
        unitStaffInfoIds
    }
}
export function setFauleUnitId(fauleUnitId) {
    return {
        type: SET_FAULEUNITID,
        fauleUnitId
    }
}
export function setFauleAreaId(fauleAreaId) {
    return {
        type: SET_FAULEAREAID,
        fauleAreaId
    }
}
export function setFauleTypeId(fauleTypeId) {
    return {
        type: SET_FAULETYPEID,
        fauleTypeId
    }
}
export function setFauleBigFaultTypeData(fauleBigFaultTypeData) {
    return {
        type: SET_FAULEBIGFAULTTYPEDATA,
        fauleBigFaultTypeData
    }
}
export function setFauleBigFaultTypeId(fauleBigFaultTypeId) {
    return {
        type: SET_FAULEBIGFAULTTYPEID,
        fauleBigFaultTypeId
    }
}
export function setFauleFaultSubTypeData(fauleFaultSubTypeData) {
    return {
        type: SET_FAULEFAULTSUBTYPEDATA,
        fauleFaultSubTypeData
    }
}
export function setFauleFaultSubTypeId(fauleFaultSubTypeId) {
    return {
        type: SET_FAULEFAULTSUBTYPEID,
        fauleFaultSubTypeId
    }
}
export function setFauleFaultTypeData(fauleFaultTypeData) {
    return {
        type: SET_FAULEFAULTTYPEDATA,
        fauleFaultTypeData
    }
}
export function setFauleFaultTypeId(fauleFaultTypeId) {
    return {
        type: SET_FAULEFAULTTYPEID,
        fauleFaultTypeId
    }
}
export function setFauleKnowledgeData(fauleKnowledgeData) {
    return {
        type: SET_FAULEKNOWLEDGEDATA,
        fauleKnowledgeData
    }
}
export function setFauleKnowledgeId(fauleKnowledgeId) {
    return {
        type: SET_FAULEKNOWLEDGEID,
        fauleKnowledgeId
    }
}
export function setNextWorkFlowData(nextWorkFlowData) {
    return {
        type: SET_NEXTWORKFLOWDATA,
        nextWorkFlowData
    }
}
export function setNextWorkFlowId(nextWorkFlowId) {
    return {
        type: SET_NEXTWORKFLOWID,
        nextWorkFlowId
    }
}
export function setWorkFlowTypeData(workFlowTypeData) {
    return {
        type: SET_WORKFLOWTYPEDATA,
        workFlowTypeData
    }
}
export function setWorkFlowTypeId(workFlowTypeId) {
    return {
        type: SET_WORKFLOWTYPEID,
        workFlowTypeId
    }
}
export function setFauleRowUserName(fauleRowUserName) {
    return {
        type: SET_FAULEROWUSERNAME,
        fauleRowUserName
    }
}
export function setFauleFlowAction(fauleFlowAction) {
    return {
        type: SET_FAULEFLOWACTION,
        fauleFlowAction
    }
}
export function setFauleFromId(fauleFromId) {
    return {
        type: SET_FAULEFROMID,
        fauleFromId
    }
}
export function setFauleToId(fauleToId) {
    return {
        type: SET_FAULETOID,
        fauleToId
    }
}
export function setFauleToUser(fauleToUser) {
    return {
        type: SET_FAULETOUSER,
        fauleToUser
    }
}
export function setWorkOrderRecIdData(workOrderRecIdData) {
    return {
        type: SET_WORKORDERRECIDDATA,
        workOrderRecIdData
    }
}
export function setWorkOrderRecIdId(workOrderRecIdId) {
    return {
        type: SET_WORKORDERRECIDID,
        workOrderRecIdId
    }
}
export function setUnitStaffNumber(unitStaffNumber) {
    return {
        type: SET_UNITSTAFFNUMBER,
        unitStaffNumber
    }
}
//明长然 20170105  故障管理相关代码  end
//明长然 20170203  任务管理相关代码  start
export function setTaskOrderListData(taskOrderListData) {
    return {
        type: SET_TASKORDERLISTDATA,
        taskOrderListData
    }
}
export function setTaskOrderListId(taskOrderListId) {
    return {
        type: SET_TASKORDERLISTID,
        taskOrderListId
    }
}
export function setTaskWorkOrderTypeData(taskWorkOrderTypeData) {
    return {
        type: SET_TASKWORKORDERTYPEDATA,
        taskWorkOrderTypeData
    }
}
export function setTaskWorkOrderTypeId(taskWorkOrderTypeId) {
    return {
        type: SET_TASKWORKORDERTYPEID,
        taskWorkOrderTypeId
    }
}
export function setRowStatus(rowStatus) {
    return {
        type: SET_ROWSTATUS,
        rowStatus
    }
}
export function setOrderDetailsData(orderDetailsData) {
    return {
        type: SET_ORDERDETAILSDATA,
        orderDetailsData
    }
}
export function setOrderDetailsId(orderDetailsId) {
    return {
        type: SET_ORDERDETAILSID,
        orderDetailsId
    }
}
//明长然 20170203  任务管理相关代码  end
//明长然 20170206  投诉管理相关代码  start
export function setComplaintOrderListData(complaintOrderListData) {
    return {
        type: SET_COMPLAINTORDERLISTDATA,
        complaintOrderListData
    }
}
export function setComplaintOrderListId(complaintOrderListId) {
    return {
        type: SET_COMPLAINTORDERLISTID,
        complaintOrderListId
    }
}
export function setComplaintAreaData(complaintAreaData) {
    return {
        type: SET_COMPLAINTAREADATA,
        complaintAreaData
    }
}
export function setComplaintAreaId(complaintAreaId) {
    return {
        type: SET_COMPLAINTAREAID,
        complaintAreaId
    }
}
export function setComplaintChildAreaData(complaintChildAreaData) {
    return {
        type: SET_COMPLAINTCHILDAREADATA,
        complaintChildAreaData
    }
}
export function setComplaintChildAreaId(complaintChildAreaId) {
    return {
        type: SET_COMPLAINTCHILDAREAID,
        complaintChildAreaId
    }
}
export function setComplaintWorkOrderTypeData(complaintWorkOrderTypeData) {
    return {
        type: SET_COMPLAINTWORKORDERTYPEDATA,
        complaintWorkOrderTypeData
    }
}
export function setComplaintWorkOrderTypeId(complaintWorkOrderTypeId) {
    return {
        type: SET_COMPLAINTWORKORDERTYPEID,
        complaintWorkOrderTypeId
    }
}
//明长然 20170206  投诉管理相关代码  end
//曹志强		20161226	公告管理查询数据Action
export function setTopicInfoListData(topicInfoListData) {
    return {
        type: SET_TOPICINFOLISTDATA,
        topicInfoListData
    }
}
//曹志强		20161226	公告管理查询数据Action
export function setTopicInfoListId(topicInfoListId) {
    return {
        type: SET_TOPICINFOLISTID,
        topicInfoListId
    }
}
//曹志强		20161228	公告管理发送对象Action
export function  setTopicObjectData(topicObjectData){
	return {
        type: SET_TOPICOBJECTDATA,
        topicObjectData
    }
}

//曹志强		20161228	公告管理发送对象树Action
export function setTopicObjectTree(topicObjectTree){
	return {
        type: SET_TOPICOBJECTTREE,
        topicObjectTree
    }
}
//曹志强		20161228	刷新公告管理发送对象树Action
export function  setRefreshTopicObjectTree(refreshTopicObjectTree){
	return {
        type: SET_REFRESHTOPICOBJECTTREE,
        refreshTopicObjectTree
    }
}
//曹志强		20161228	获取公告管理发送对象的Action  
export function  settTopicObjectTreeData(topicObjectTreeData){
	return {
        type: SET_TOPICOBJECTTREEDATA,
        topicObjectTreeData
    }
}
//曹志强		20161228  获取公告管理发送对象的Action  
export function setHandleTopicObject(handleTopicObject){
    return {
        type: SET_HANDLETOPICOBJECT,
        handleTopicObject
    }
}
//曹志强		20161228   创建为权限树赋值的Action
export function setIsClickTreeChange(isClickTreeChange){
    return {
        type: SET_ISCLICKTREECHANGE,
        isClickTreeChange
    }
}
//曹志强		20161228	获取未选中的数据
export function setStaticTopicObjectData(staticTopicObject){
    return {
        type: SET_STATICTOPICOBJECTDATA,
        staticTopicObject
    }
}
//曹志强		20161228	获取已选中的数据
export function setBeforeTopicObjectData(beforeTopicObject){
    return {
        type: SET_BEFORETOPICOBJECTDATA,
        beforeTopicObject
    }
}
//曹志强		20161228	判断是否编辑公告信息
export function setIsEditTopicObjectData(isEditTopicObjectData){
    return {
        type: SET_ISEDITTOPICOBJECTDATA,
        isEditTopicObjectData
    }
}
//曹志强		20161228	公告管理公告内容action
export function setTopicContent(topicContent){
    return {
        type: SET_TOPICCONTENT,
        topicContent
    }
}
//曹志强		20161228	公告管理公告内容action
export function setTopicName(topicName){
    return {
        type: SET_TOPICNAME,
        topicName
    }
}
//曹志强		20161228	公告管理公告内容action
export function setTopicStatus(topicStatus){
    return {
        type: SET_TOPICSTATUS,
        topicStatus
    }
}
//曹志强		20170103	公告管理审核不通过原因action
export function setTopicReviewDesc(topicReviewDesc){
    return {
        type: SET_TOPICREVIEWDESC,
        topicReviewDesc
    }
}
//程艳鸿 20170103 值班管理
export function setDutyTableData(dutyTableData) {
    return {
        type: SET_DUTYTABLEDATA,
        dutyTableData
    }
}
//程艳鸿 20170103 值班管理单位名称
export function setDutyManageData(dutyManageData) {
    return {
        type:SET_DUTYMANAGEDATA,
        dutyManageData
    }
}
//程艳鸿 20170103 值班管理单位名称
export function setDutyManageId(dutyManageId) {
    return {
        type:SET_DUTYMANAGEID,
        dutyManageId
    }
}
//程艳鸿	20170103 获取值班表SET_DUTYPERSONINFO
export function setDutyTableId(dutyTableId) {
	return{
		type: SET_DUTYTABLEID,
		dutyTableId
	}
}
//程艳鸿	20170103 获取值班表
export function setDutyPersonInfo(dutyPersonInfo) {
	return{
		type: SET_DUTYPERSONINFO,
		dutyPersonInfo
	}
}
//刘家顺20161222 获取知识库信息

export function setKnowledgeManagerData(knowledgeManagerData) {
    return {
        type: SET_KNOWLEDGEMANAGERDATA,
        knowledgeManagerData
    }
}

//刘家顺20161222 删除知识库id
export function setDeleteKnowledgeId(deleteKnowledgeId) {
    return {
        type: SET_DELETEKNOWLEDGEID,
        deleteKnowledgeId
    }
}
//刘家顺20161228 状态码知识库知识库
export function setReviewStatusCode(reviewStatusCode) {
    return {
        type: SET_REVIEWSTATUSCODE,
        reviewStatusCode
    }
}
//刘家顺20161228
export function setFaultSubId(faultSubId) {
    return {
        type: SET_FAULTSUBID,
        faultSubId
    }
}
//刘家顺20161228
export function setFaultSubPid(faultSubPid) {
    return {
        type: SET_FAULTSUBPID,
        faultSubPid
    }
}
//刘家顺20161228
export function setCustomerComplaintsData(customerComplaintsData) {
    return {
        type: SET_CUSTOMERCOMPLAINTSDATA,
        customerComplaintsData
    }
}
//刘家顺20161228
export function setCustomerComplaintsDatamonth(customerComplaintsDatamonth) {
    return {
        type: SET_CUSTOMERCOMPLAINTSDATAMONTH,
        customerComplaintsDatamonth
    }
}
//刘家顺20161228
export function setCustomerComplaintsDataquarter(customerComplaintsDataquarter) {
    return {
        type: SET_CUSTOMERCOMPLAINTSDATAQUARTER,
        customerComplaintsDataquarter
    }
}
//刘家顺20161228
export function setCustomerComplaintsDatayear(customerComplaintsDatayear) {
    return {
        type: SET_CUSTOMERCOMPLAINTSDATAYEAR,
        customerComplaintsDatayear
    }
}
//刘家顺20170103 客户满意度评分
export function setCustomeSatisfactionScoreData(customeSatisfactionScoreData) {
    return {
        type: SET_CUSTOMESATISFACTIONSCOREDATA,
        customeSatisfactionScoreData
    }
}
//刘家顺20170105 客户满意度评分
export function setSLAReachRateData(SLAReachRateData) {
    return {
        type: SET_SLAREACHRATEDATA,
        SLAReachRateData
    }
}
//刘家顺20170111 获取报表管理sla开始时间和结束时间
export function setFilterSLAReachRateData(filterSLAReachRateData) {
    return {
        type: SET_FILTERSLAREACHRATEDATA,
        filterSLAReachRateData
    }
}
//
export function setTopicObjectFlagData(topicObjectFlagData) {
    return {
        type: SET_TOPICOBJECTFLAGDATA,
        topicObjectFlagData
    }
}
export function get_faultType() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFaultType(function(data){
            var results = data.results;
            var dataList = [];
            // dataList.push({id:"0",name:"全部"})
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var data = {id:results[i].RecId,name:results[i].FaultName};
                    dataList.push(data);
                }
                dispatch(setFaultTypes(dataList));
                dispatch(setFaultSubTypes([]));
                dispatch(setFaultSubTypeId(""));
                // that.emit("change");
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_faultSubType(id) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFaultSubType(id,function(data){
            var results = data.results;
            var dataList = [];
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var data = {id:results[i].RecId,name:results[i].FaultName};
                    dataList.push(data);
                }
                dispatch(setFaultSubTypes(dataList));
                dispatch(setFaultTypeId(id));
                // that.emit("change");
            }else{
                dispatch(setFaultSubTypes([]));
                dispatch(setFaultTypeId(id));
                // that.emit("change");
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_serviceName() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getServiceName(function(data){
            var results = data.results;
            var dataList = [];
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var data = {id:results[i].RecId,name:results[i].Title};
                    dataList.push(data);
                }
                dispatch(setServiceName(dataList));
                dispatch(setServiceData(results));
                // that.emit("change");
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function getAssets(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getAllAssets2(filter,function(data){
            var results = data.results[0].ASSETS_INFO;
            results = eval(results);
            dispatch(setAssets(results));
            dispatch(requestDataActions.setRequestSuccess());
            $('#operationModalTable').bootstrapTable('load', results);
            $('#operationModalMonitorTable').bootstrapTable('load', results);
        })
    }
}

export function save_createOrder(data) {
    return (dispatch, getState) => {
        var state = getState();
        // var that = this;
        var flowType = state.operationReducer.curWorkOrderFlowId;
        var types = state.operationReducer.workFlowTypes;
        if(flowType!=null && flowType!=""){
          data.WorkOrderType = flowType;
        }else{
          data.WorkOrderType = types[0].RecId;
        }
        var gid = Store.get("GROUP_ID");
        // this.curWorkOrderGroupID = gid;
        dispatch(setCurWorkOrderGroupID(gid));
        data.ParentId = gid;
        oData.saveCreateOrder(data,function(result){
            var handleIds = state.operationReducer.handleAssetsId;
            dispatch(setCurWorkOrderId(result.RecId));
            if(handleIds.length>0){
                var id = result.RecId;
                for(var i=0;i<handleIds.length;i++){
                    var aid = handleIds[i];
                    var dataSave = {
                        WorkOrderId:id,
                        AssetId:aid
                    };
                    oData.saveOrderAsset(dataSave,function(result2){
                        // dispatch(setAssets([]));
                    });
                    if(i==handleIds.length-1){
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                            $('#publicMessageModal').modal('show');
                        },100);
                    }
                }
            }else{
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            // that.emit("change");
        })
    }
}

export function get_workOrderList(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderList(filter,function(data){
            var result = data.results;
            dispatch(setWorkOrderList(result));
            dispatch(setCurstateparam(filter[0].value));
            dispatch(requestDataActions.setRequestSuccess());
            $('#myWorkSpaceTable').bootstrapTable('load', result);
      });
    }
}

export function get_colorSpan() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        var user = Store.get("localUserName");
        var filter = [{"key":"CREATEBY","value":user}];
        oData.getColorSpan(filter,function(data){
            var results = data.results[0];
            dispatch(setColorSpanNum1(results.CY_COUNT));
            dispatch(setColorSpanNum2(results.CL_COUNT));
            dispatch(setColorSpanNum3(results.WC_COUNT));
            dispatch(setColorSpanNum4(results.ALL_COUNT));
            dispatch(setColorSpanNum5(results.TIMEOUT_COUNT));
            dispatch(setColorSpanNum6(results.NOT_SATISFIED_COUNT));
            dispatch(setColorSpanNum7(results.INCOMPLETE_EX_COUNT));
            dispatch(setColorSpanNum8(results.COMPLETE_EX_COUNT));
            var list2 = results.PENDING_USERCOUNT;
            list2 = eval(list2);
            var picList1 = [];
            for(var i=0;i<list2.length;i++){
                picList1.push({value:list2[i].count,name:list2[i].name});
            }
            dispatch(setPicList(picList1));
            var list = results.FAULTTYPE_COUNT;
            list = eval(list);
            var picListLs = [];
            for(var i=0;i<list.length;i++){
                picListLs.push({value:list[i].count,name:list[i].name});
            }
            dispatch(setPicList2(picListLs));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_orderDetails(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getOrderDetails(filter,function(data){
            var results = data.results;
            dispatch(setCurWorkOrderId(filter[0].value));
            dispatch(setCurWorkOrderStatus(results[0].STATUS_EN));
            dispatch(setOrderDetailData(results[0]));
            dispatch(setCurWorkOrderFlowId(results[0].WORKFLOW_ID));//当前工单流程图ID
            dispatch(setCurWorkOrderGroupID(results[0].GROUP_ID));//当前工单安全群群组ID
            // that.emit("change");
            // window.location.href="#/operationManage/editOperation"
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function filter_orderList(param) {
    return (dispatch, getState) => {
        var state = getState();
        // var that = this;
        var workOrderList = state.operationReducer.workOrderList;
        // console.log(param);
        var typeFilter = param[0];
        var levelFilter = param[1];
        var curState = param[2];
        var list = [];
        if(typeFilter == "全部" && levelFilter == "全部"){
            var filter = [{"key":"PARAM","value":curState}];
            // that.getWorkorderList(filter);
            dispatch(get_workOrderList(filter));
            return false;
        }else{
            if(typeFilter != "全部" && levelFilter != "全部"){
                for(var i=0;i<workOrderList.length;i++){
                    var valueMark1 = workOrderList[i].FAULT_TYPE;
                    var valueMark2 = workOrderList[i].PRIORITY;
                    if(typeFilter == valueMark1 && levelFilter == valueMark2){
                        list.push(workOrderList[i]);
                    };
                };
            };
            if(typeFilter != "全部" && levelFilter == "全部"){
                for(var i=0;i<workOrderList.length;i++){
                    var valueMark1 = workOrderList[i].FAULT_TYPE;
                    if(typeFilter == valueMark1){
                        list.push(workOrderList[i]);
                    };
                };
            };
            if(typeFilter == "全部" && levelFilter != "全部"){
                for(var i=0;i<workOrderList.length;i++){
                    var valueMark2 = workOrderList[i].PRIORITY;
                    if(levelFilter == valueMark2){
                        list.push(workOrderList[i]);
                    };
                };
            };
            // that.workOrderFilterList = list;
            dispatch(setWorkOrderFilterList(list));
            // that.emit("change");
        };
        $('#myWorkSpaceTable').bootstrapTable('load', list);
    }
}

export function init_detailData(param) {
    return dispatch => {
        // var that = this;
        if(param == 2){
            dispatch(setAssets([]));
            dispatch(setCurWorkOrderId(""));
            dispatch(setFaultTypeId(""));
            dispatch(setFaultSubTypeId(""));
            dispatch(setTouchFaultSubId(""));
            dispatch(setFlowLevel(""));
            dispatch(setServiceId(""));
            dispatch(setHandleAssetsId([]));
        }else if(param == 1){
            dispatch(setAssets([]));
        }else{
            if(param == 0){
                dispatch(setCreateOrderInfo(null));
                dispatch(setCurWorkOrderFlowId(""));//当前工单流程图ID
                dispatch(setTouchWorkOrderData(null));
                dispatch(setCurWorkFlowId(""));
            }
            dispatch(setCurWorkOrderId(""));
            dispatch(setCurWorkOrderStatus(""));
            dispatch(setCurWorkOrderGroupID(""));//当前工单安全群群组ID
            dispatch(setOrderDetailData(""));
            dispatch(setFaultTypeId(""));
            dispatch(setFaultSubTypeId(""));
            dispatch(setTouchFaultSubId(""));
            dispatch(setFlowLevel(""));
            dispatch(setServiceId(""));
            dispatch(setHandleAssetsId([]));
            dispatch(setAssets([]));
            dispatch(setDelayIndex(""));
            dispatch(setCurDelayId(""));
            dispatch(setFlowPicData(""));
            dispatch(setFlowDesignPicData(""));
            dispatch(setWorkFlowTable(""));
            dispatch(setWorkFlowDetailTable(""));
        }
        // this.emit("change");
    }
}

export function save_updateOrder(data) {
    return (dispatch, getState) => {
        var state = getState();
        var handleIds = state.operationReducer.handleAssetsId;
        var filters = [{key:'TABLENAME',value:'WorkOrderAssets'},{key:'KEYWORD',value:'WorkOrderId'},{key:'VALUE',value:"'"+data.RecId+"'"}];
        oData.updateWorkOrderCommon(data,function(result){
            oData.deleteMonitorInfo(filters,function(result2){
                var mark = result2.results[0].OUT_FLAG;
                if(mark){
                    if(handleIds.length>0){
                        var id = data.RecId;
                        for(var i=0;i<handleIds.length;i++){
                            var aid = handleIds[i];
                            var dataSave = {
                                WorkOrderId:id,
                                AssetId:aid
                            };
                            oData.saveOrderAsset(dataSave,function(result3){
                                // console.log(result2);
                            });
                            if(i==handleIds.length-1){
                                setTimeout(function(){
                                    document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                                    $('#publicMessageModal').modal('show');
                                },100);
                            }
                        }
                    }else{
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                            $('#publicMessageModal').modal('show');
                        },100);
                    }
                }
            })
        })
    }
}

export function get_delaySerialNum(param) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSerailNumber(param,function(data){
            var result = data.results[0].SERIALNUMBER;
            dispatch(setDelayIndex(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function save_createDelay(data) {
    return dispatch => {
        // var that = this;
        var WorkOrderIdtemp=data.WorkOrderId;
        var newdata={
            Status:data.Status,
            Reason:data.Reason,
            Opinion:data.Opinion,
            SerialNumber:data.SerialNumber,
            ExtendTime:data.ExtendTime,
            Approver:data.Approver
        }
        oData.saveCreateDelay(newdata,function(result){
            var dataObject = {
                WorkOrderId:WorkOrderIdtemp,
                ExtensionId:result.RecId
            };
            oData.saveCreateDelayRelation(dataObject,function(result2){
                // alert("保存完成");
                // that.history.pushState(null,'operationManage/myWorkSpace');
                dispatch(navActions.setCurName("工作台"));
          			window.location.href = '#/operationManage/myWorkSpace';
            })
        })
    }
}

export function save_updateDelay(data) {
    return dispatch => {
        oData.saveUpdateDelay(data,function(result){
            // console.log(result);
            // that.history.pushState(null,'operationManage/myWorkSpace');
            dispatch(navActions.setCurName("工作台"));
      			window.location.href = '#/operationManage/myWorkSpace';
        })
    }
}

export function save_satisfyScore(data) {
    return dispatch => {
        oData.saveSatisfyScore(data,function(result){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
            // that.history.pushState(null,'operationManage/myWorkSpace');
            dispatch(navActions.setCurName("工作台"));
      			window.location.href = '#/operationManage/myWorkSpace';
        })
    }
}

export function get_createOrderInfo(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getOrderPrepare(filter,function(data){
            var result = data.results[0];
            dispatch(setCreateOrderInfo(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_flowPicData(id) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        var filter = [{key:"WORKORDER_ID",value:id}];
        oData.getFlowPicData(filter,function(data){
            var result = data.results[0];
            dispatch(setFlowPicData(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function clear_flowDesignResultData(){
    return dispatch => {
        return dispatch(setFlowDeignResultData([]));
    }
}

export function get_flowDesignPicDataByName(name) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFlowDesignPicDataByName(name,function(data){
            var result = data.results[0];
            dispatch(setFlowDesignPicData(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_flowDesignPicData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFlowDesignPicData(function(data){
            var result = data.results[0];
            dispatch(setFlowDesignPicData(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_workFlowTable() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkFlowTable(function(data){
            var result = data.results[0];
            dispatch(setWorkFlowTable(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_workFlowName() {
    return dispatch => {
        // var that = this;
        try {
            dispatch(requestDataActions.setRequest());
            oData.getWorkFlowTable({"key":"WorkOrderType","value":'WorkOrderCommon'},function(result1){
                var dataresult = result1.results;
                var flowtemp=[""];
                var flowObjectstemp=[];
                if(dataresult.length>0) {
                    for (var i = 0; i < dataresult.length; i++) {
                        var flowobj= dataresult[i]
                        flowtemp.push(flowobj.Name);
                        var newObj1={};
                        newObj1["workflowid"]=flowobj.RecId;
                        newObj1["name"] = flowobj.Name;
                        flowObjectstemp.push(newObj1);
                    }
                }
                dispatch(setFlowName(flowtemp));
                dispatch(setFlowObjects(flowObjectstemp));
            });
        } catch (e) {
          dispatch(requestDataActions.setRequestFail());
        } finally {
          dispatch(requestDataActions.setRequestSuccess());
        }
    }
}
//获取流程设计步骤数据
export function get_workFlowDetailsTable() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkFlowDetailsTable(function(data){
            var result = data.results[0];
            dispatch(setWorkFlowDetailTable(result));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function delete_flowDesignPicData(data) {
    return (dispatch, getState) => {
        var state = getState();
        // var that = this;
        var curWorkFlowName = data;
        var curWorkFlowId ="";
        var flowObjects1 =state.operationReducer.flowObjects;
        for (var i = 0; i < flowObjects1.length; i++) {
            if(flowObjects1[i].name==curWorkFlowName){
                curWorkFlowId=flowObjects1[i].workflowid;
            }
        }
        var deldata=[{key:'TABLENAME',value:'WorkFlow'},{key:'KEYWORD',value:'Name'},{key:"VALUE",value:"'"+curWorkFlowName+"'"}];
        if(curWorkFlowId){
            var querydata={key:"WorkOrderType",value:curWorkFlowId};
            oData.getWorkOrderByID(querydata,function(result5){
                var dataresult = result5.results;
                if(dataresult.length>0){
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "请删除相关工单数据。"
                        $('#publicMessageModal').modal('show');
                    },100);
                }else {
                    oData.deleteFlowDesign(deldata,function(result){
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                            document.getElementById('publicMessageModalcontent').innerHTML = "删除成功。"
                            $('#publicMessageModal').modal('show');
                        },100);
                        $("#OperationFlowDesignPic").hide();
                        //document.getElementById('OperationFlowDesignPic').innerHTML="";
                        dispatch(get_workFlowName());
                        //that.emit("change");
                    })
                    var deldetaildata = [{key:'TABLENAME',value:'WorkFlowDetails'},{key:'KEYWORD',value:'WorkFlowId'},{key:'VALUE',value:"'"+curWorkFlowId+"'"}];
                    oData.deleteFlowDesign(deldetaildata,function(result2){
                        console.log("deleteWorkFlowDetails");
                    })
                }
            })
        }
    }
}

export function save_flowDesignPicData(data) {
    return dispatch => {
        // var that = this;
        oData.addFlowDesign(data[0],function(result){
            var curWorkFlowId = result.RecId;
            // that.emit("change");
            if(curWorkFlowId){
                for(var i=0;i<data[1].length;i++){
                    var obj1 = data[1][i];
                    var dataSave = {
                        WorkFlowId:curWorkFlowId,
                        FromId:obj1.from,
                        ToId:obj1.to,
                        Status:obj1.state,
                        FlowAction:obj1.description
                    };
                    oData.addFlowDesignDetail(dataSave,function(result2){
                        // console.log(result2);
                    })
                }
            }
        })
    }
}

export function update_flowDesignPicData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var data0 = data[0];
        var name = data0.Name;
        data1 = state.operationReducer.flowDeignResultData;
        //delete
        try {
            dispatch(requestDataActions.setRequest());
            oData.getWorkFlowTable({"key":"Name","value":name},function(result1){
                var curWorkFlowId="";
                var curWorkname ="";

                var dataresult = result1.results;
                if(dataresult.length>0) {
                    // console.log("delete curWorkFlowId");
                    dataresult=dataresult[0];
                    try {
                        curWorkFlowId = dataresult.RecId;
                        curWorkname =dataresult.Name;
                        var deldata=[{key:'TABLENAME',value:'WorkFlow'},{key:'KEYWORD',value:'Name'},{key:"VALUE",value:"'"+curWorkname+"'"}];

                        if(curWorkFlowId){
                            var deldetaildata = [{key:'TABLENAME',value:'WorkFlowDetails'},{key:'KEYWORD',value:'WorkFlowId'},{key:'VALUE',value:"'"+curWorkFlowId+"'"}];
                            oData.deleteFlowDesign(deldetaildata,function(result2){
                                //add
                                var newdata1="[";
                                var endn= data1.length-1;
                                for (var i = 0; i < data1.length; i++) {
                                    var obj=data1[i];
                                    var n=i+1;
                                    var temstring = "";
                                    if(i<endn){
                                        //temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.des+"',sn:"+n+"},";
                                        temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.des+"',sn:"+n+",flag:"+obj.flag+",nextstatus:'"+obj.nextstatus+"'},";
                                    }
                                    else {
                                        temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.des+"',sn:"+n+",flag:"+obj.flag+",nextstatus:'"+obj.nextstatus+"'}";
                                        //temstring="{from:"+obj.from+",to:"+obj.to+",state:"+obj.state+",des:"+obj.description+",sn:"+n+"}";
                                    }
                                    newdata1+=temstring;
                                }
                                newdata1=newdata1+"]";
                                var newdata =[{key:"WORKFLOW_ID",value:curWorkFlowId},{key:"FLOWNAME",value:name},{key:"FLOWDETAIL",value:newdata1}];
                                oData.saveFlowDesignPicData(newdata,function(result){
                                    setTimeout(function(){
                                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                                        document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                                        $('#publicMessageModal').modal('show');
                                    },100);
                                    // that.emit("change");
                                    dispatch(get_flowDesignPicDataByName(name));
                                });

                            });
                        }
                        //that.emit("change");
                    } catch (e) {
                      dispatch(requestDataActions.setRequestFail());
                    } finally {
                      dispatch(requestDataActions.setRequestSuccess());
                    }
                }else {
                    //add
                    // console.log("add");
                    var newdata1="[";
                    var endn= data1.length-1;
                    for (var i = 0; i < data1.length; i++) {
                        var obj=data1[i];
                        var n=i+1;
                        var temstring = "";
                        if(i<endn){
                            //temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.description+"',sn:"+n+"},";
                            temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.des+"',sn:"+n+",flag:"+obj.flag+",nextstatus:'"+obj.nextstatus+"'},";
                        }
                        else {
                            //temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.description+"',sn:"+n+"}";
                            temstring="{from:'"+obj.from+"',to:'"+obj.to+"',state:'"+obj.state+"',des:'"+obj.des+"',sn:"+n+",flag:"+obj.flag+",nextstatus:'"+obj.nextstatus+"'}";
                            //temstring="{from:"+obj.from+",to:"+obj.to+",state:"+obj.state+",des:"+obj.description+",sn:"+n+"}";
                        }
                        newdata1+=temstring;
                    }
                    newdata1=newdata1+"]";
                    var newdata =[{key:"WORKFLOW_ID",value:""},{key:"FLOWNAME",value:name},{key:"FLOWDETAIL",value:newdata1}];
                    oData.saveFlowDesignPicData(newdata,function(result){
                        // console.log("saveFlowDesignPicData ok");
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                            $('#publicMessageModal').modal('show');
                        },100);
                        dispatch(get_workFlowName());
                        dispatch(get_flowDesignPicDataByName(name));
                        //that.emit("change");
                    });
                    dispatch(requestDataActions.setRequestSuccess());
                }
            });
        } catch (e) {
            console.log(e);
            dispatch(requestDataActions.setRequestFail());
        } finally {

        }
    }
}

export function save_createOrder2(data) {
    return (dispatch, getState) => {
        var state = getState();
        // var that = this;
        var flowType = state.operationReducer.curWorkOrderFlowId;
        var types = state.operationReducer.workFlowTypes;
        if(flowType!=null && flowType!=""){
          data.WorkOrderType = flowType;
        }else{
          data.WorkOrderType = types[0].RecId;
        }
        var gid = Store.get("GROUP_ID");
        dispatch(setCurWorkOrderGroupID(gid));
        data.ParentId = gid;
        dispatch(setCurWorkOrderData(null));
        oData.saveCreateOrder(data,function(result){
            var handleIds = state.operationReducer.handleAssetsId;
            dispatch(setCurWorkOrderId(result.RecId));
            dispatch(setCurWorkOrderData(result));//当前新增加工单保存的数据
            // that.emit("change");
            if(handleIds.length>0){
                var id = result.RecId;
                for(var i=0;i<handleIds.length;i++){
                    var aid = handleIds[i];
                    var dataSave = {
                        WorkOrderId:id,
                        AssetId:aid
                    };
                    oData.saveOrderAsset(dataSave,function(result2){
                        // console.log(result2);
                    })
                }
            }
            $('#createOperationPersonnelTableModal').modal('show');
        })
    }
}

//获取所有工单流程设计主表数据
export function get_workFlowTypes() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        dispatch(setWorkFlowDetailCurrent([]));
        dispatch(setWorkOrderTemplatesMainForm(null));
        dispatch(setWorkOrderTemplatesSheetForm(null));
        oData.getWorkFlowTypes(function(data){
            var results = data.results;
            dispatch(setWorkFlowTypes(results));
            if(results.length>0){
                dispatch(setCurWorkFlowId(results[0].RecId));
                dispatch(setCurWorkOrderFlowId(results[0].RecId));
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//获取当前工单流程设计主表相关的模板数据和模板对象存储的数据
export function get_workOrderTemplatesFromWorkFlowId(WorkParam) {
    return (dispatch,getState) => {
        var state = getState();
        dispatch(setWorkFlowDetailCurrent([]));
        dispatch(setWorkOrderTemplatesMainForm(null));
        dispatch(setWorkOrderTemplatesSheetForm(null));
        var WorkFlowId = WorkParam.workFlowId
        if(WorkFlowId){
          var workFlowsTemp = state.operationReducer.workFlowTypes;
          for (var i = 0; i < workFlowsTemp.length; i++) {
            if(workFlowsTemp[i].RecId == WorkFlowId){
              if(workFlowsTemp[i].template_id){
                var param ={
                  workFlowId:WorkFlowId,
                  templdateId:workFlowsTemp[i].template_id,
                  workWorderId:WorkParam.workWorderId
                };
                //dispatch(get_workOrderTemplatesMainFromId(workFlowsTemp[i].template_id));
                dispatch(get_workOrderTemplatesMainFromId(param));
              };
              if(workFlowsTemp[i].templatesheet_id){
                var param ={
                  workFlowId:WorkFlowId,
                  templdateId:workFlowsTemp[i].templatesheet_id,
                  workWorderId:WorkParam.workWorderId
                };
                //dispatch(get_workOrderTemplatesSheetFromId(workFlowsTemp[i].templatesheet_id));
                dispatch(get_workOrderTemplatesSheetFromId(param));
              };
              break;
            }
          }
        };
    }
}

//获取指定流程ID相关的流程设计步骤数据
export function get_workFlowDetailsFromWorkFlowId(workFlowId) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkFlowDetailsFromWorkFlowId(workFlowId,function(data){
            var result = data.results;
            if(result.length > 0){
              dispatch(setWorkFlowDetailCurrent(result));
              // if(result[0].template_id){
              //   dispatch(get_workOrderTemplatesSheetFromId(result[0].template_id));
              // }
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//获取工单模板库中主工单详情页
export function get_workOrderTemplatesMainFromId(param) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderTemplatesFromId(param.templdateId,function(data){
            if(data.results.length > 0){
              dispatch(setWorkOrderTemplatesMainForm(data.results[0]));
              //模板对象存储的数据
              dispatch(setWorkOrderTemplatesMainData([]));
              if(data.results[0].t_entity && param.workWorderId){
                var filt = [{"key":"tableName","value":data.results[0].t_entity},{"key":"workOrderId","value":param.workWorderId}];
                dispatch(get_workOrderTemplatesMainData(filt));
              }
            };
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
//获取工单模板库中处理表单页
export function get_workOrderTemplatesSheetFromId(param) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderTemplatesFromId(param.templdateId,function(data){
            if(data.results.length > 0){
              dispatch(setWorkOrderTemplatesSheetForm(data.results[0]));
              //模板对象存储的数据
              dispatch(setWorkOrderTemplatesSheetData([]));
              if(data.results[0].t_entity && param.workWorderId){
                var filt = [{"key":"tableName","value":data.results[0].t_entity},{"key":"workOrderId","value":param.workWorderId}];
                dispatch(get_workOrderTemplatesSheetData(filt));
              }
            };
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//获取工单模板库中主工单详情业务对象数据
export function get_workOrderTemplatesMainData(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderTemplatesObjData(filter,function(data){
            if(data.results.length > 0){
              dispatch(setWorkOrderTemplatesMainData(data.results));
            };
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//获取工单模板库处理表单指定业务对象数据
export function get_workOrderTemplatesSheetData(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderTemplatesObjData(filter,function(data){
            if(data.results.length > 0){
              dispatch(setWorkOrderTemplatesSheetData(data.results));
            };
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}


export function set_curWorkFlowType(id){
    return dispatch => {
        dispatch(setCurWorkFlowId(id));
        dispatch(setCurWorkOrderFlowId(id));
    }
}

export function set_touchWorkOrderData(data) {
    return dispatch => {
        var markType = data.markType;
        var typeName = "";
        switch (markType) {
            case "1":
                typeName = "摄像机";
                break;
            case "2":
                typeName = "DVR";
                break;
            case "3":
                typeName = "NVR";
                break;
            case "4":
                typeName = "编码器";
                break;
            case "5":
                typeName = "IPSAN";
                break;
        };
        // var that = this;
        var name = "";
        var desc = "";
        var errorMark = 0;
        var errorName = "";
        if(markType == 1){
          name = data.VIDEONAME;
          var ipAddress = "IP地址："+ data.IPADDRESS +"\n通讯状态：";
          desc += ipAddress;
          var xhds = data.SIGNALLOSS;
          if(xhds < 1){
            if(errorMark == 0){
              errorName = "信号丢失";
            };
            errorMark++;
            if(xhds == 0){
              desc += "信号丢失：错误,";
            }else if(xhds == -1){
              desc += "信号丢失：无效数据,";
            };
          };
          var hmds = data.IMAGELOSS;
          if(hmds < 1){
            if(errorMark == 0){
              errorName = "画面丢失";
            };
            errorMark++;
            if(hmds == 0){
              desc += "画面丢失：错误,";
            }else if(hmds == -1){
              desc += "画面丢失：无效数据,";
            };
          };
          var spzd = data.COVERSTATUS;
          if(spzd < 1){
            if(errorMark == 0){
              errorName = "视频遮挡";
            };
            errorMark++;
            if(spzd == 0){
              desc += "视频遮挡：错误,";
            }else if(spzd == -1){
              desc += "视频遮挡：无效数据,";
            };
          };
          var ytkz = data.PTZ;
          if(ytkz < 1){
            if(errorMark == 0){
              errorName = "云台控制";
            };
            errorMark++;
            if(ytkz == 0){
              desc += "云台控制：错误";
            }else if(ytkz == -1){
              desc += "云台控制：无效数据";
            };
          };
          if(xhds>0 && hmds>0 && spzd>0 && ytkz>0){
            desc += "良好\n图像状态：";
          }else{
            desc += "\n图像状态：";
          }
          var pl = data.BRIGHT;
          if(pl < 1){
            if(errorMark == 0){
              errorName = "偏亮";
            };
            errorMark++;
            if(pl == 0){
              desc += "偏亮：错误,";
            }else if(pl == -1){
              desc += "偏亮：无效数据,";
            };
          };
          var pa = data.DIM;
          if(pa < 1){
            if(errorMark == 0){
              errorName = "偏暗";
            };
            errorMark++;
            if(pa == 0){
              desc += "偏暗：错误,";
            }else if(pa == -1){
              desc += "偏暗：无效数据,";
            };
          };
          var ps = data.COLORCOST;
          if(ps < 1){
            if(errorMark == 0){
              errorName = "偏色";
            };
            errorMark++;
            if(ps == 0){
              desc += "偏色：错误,";
            }else if(ps == -1){
              desc += "偏色：无效数据,";
            };
          };
          var qxd = data.DEFINITION;
          if(qxd < 1){
            if(errorMark == 0){
              errorName = "清晰度";
            };
            errorMark++;
            if(qxd == 0){
              desc += "清晰度：错误,";
            }else if(qxd == -1){
              desc += "清晰度：无效数据,";
            };
          };
          var xh = data.SNOWFLAKE;
          if(xh < 1){
            if(errorMark == 0){
              errorName = "雪花";
            };
            errorMark++;
            if(xh == 0){
              desc += "雪花：错误,";
            }else if(xh == -1){
              desc += "雪花：无效数据,";
            };
          };
          var tw = data.STREAK;
          if(tw < 1){
            if(errorMark == 0){
              errorName = "条纹";
            };
            errorMark++;
            if(tw == 0){
              desc += "条纹：错误,";
            }else if(tw == -1){
              desc += "条纹：无效数据,";
            };
          };
          var dj = data.FREEZE;
          if(dj < 1){
            if(errorMark == 0){
              errorName = "冻结";
            };
            errorMark++;
            if(dj == 0){
              desc += "冻结：错误,";
            }else if(dj == -1){
              desc += "冻结：无效数据,";
            };
          };
          var gp = data.SCREENSCROLL;
          if(gp < 1){
            if(errorMark == 0){
              errorName = "滚屏";
            };
            errorMark++;
            if(gp == 0){
              desc += "滚屏：错误,";
            }else if(gp == -1){
              desc += "滚屏：无效数据,";
            };
          };
          var dp = data.SCREENSHAKE;
          if(dp < 1){
            if(errorMark == 0){
              errorName = "抖屏";
            };
            errorMark++;
            if(dp == 0){
              desc += "抖屏：错误";
            }else if(dp == -1){
              desc += "抖屏：无效数据";
            };
          };
          if(pl>0 && pa>0 && ps>0 && qxd>0 && xh>0 && tw>0 && dj>0 && gp>0 && dp>0){
            desc += "良好";
          }
        }else if(markType == 2){
          name = data.SERVERNAME;
          var ipAddress = "IP地址："+ data.SERVERIP +"\nDVR状态：";
          desc += ipAddress;
          var iperror = data.IPERROR;
          if(iperror < 1){
            if(errorMark == 0){
              errorName = "IP地址冲突";
            };
            errorMark++;
            if(iperror == 0){
              desc += "IP地址冲突：错误,";
            }else if(iperror == -1){
              desc += "IP地址冲突：无效数据,";
            };
          };
          var ypm = data.DISKFULLINFO;
          if(ypm < 1){
            if(errorMark == 0){
              errorName = "硬盘满";
            };
            errorMark++;
            if(ypm == 0){
              desc += "硬盘满：错误,";
            }else if(ypm == -1){
              desc += "硬盘满：无效数据,";
            };
          };
          var yperror = data.DISKERRINFO;
          if(yperror < 1){
            if(errorMark == 0){
              errorName = "硬盘出错";
            };
            errorMark++;
            if(yperror == 0){
              desc += "硬盘出错：错误,";
            }else if(yperror == -1){
              desc += "硬盘出错：无效数据,";
            };
          };
          var ypmiss = data.DISKLOSTINFO;
          if(ypmiss < 1){
            if(errorMark == 0){
              errorName = "硬盘丢失";
            };
            errorMark++;
            if(ypmiss == 0){
              desc += "硬盘丢失：错误,";
            }else if(ypmiss == -1){
              desc += "硬盘丢失：无效数据,";
            };
          };
          var spyctd = data.VIDEOERRCHAN;
          if(spyctd < 1){
            if(errorMark == 0){
              errorName = "视频异常通道";
            };
            errorMark++;
            if(spyctd == 0){
              desc += "视频异常通道：错误,";
            }else if(spyctd == -1){
              desc += "视频异常通道：无效数据,";
            };
          };
          var bmsbtd = data.ENCODEERRCHAN;
          if(bmsbtd < 1){
            if(errorMark == 0){
              errorName = "编码失败通道";
            };
            errorMark++;
            if(bmsbtd == 0){
              desc += "编码失败通道：错误,";
            }else if(bmsbtd == -1){
              desc += "编码失败通道：无效数据,";
            };
          };
          var zrgztd = data.INPUTOVERLOADCHAN;
          if(zrgztd < 1){
            if(errorMark == 0){
              errorName = "载入过载通道";
            };
            errorMark++;
            if(zrgztd == 0){
              desc += "载入过载通道：错误,";
            }else if(zrgztd == -1){
              desc += "载入过载通道：无效数据,";
            };
          };
          var fffw = data.USERILLEGAL;
          if(fffw < 1){
            if(errorMark == 0){
              errorName = "非法访问";
            };
            errorMark++;
            if(fffw == 0){
              desc += "非法访问：错误,";
            }else if(fffw == -1){
              desc += "非法访问：无效数据,";
            };
          };
          var qtcw = data.OTHERERROR;
          if(qtcw < 1){
            if(errorMark == 0){
              errorName = "其他错误";
            };
            errorMark++;
            if(qtcw == 0){
              desc += "其他错误：错误,";
            }else if(qtcw == -1){
              desc += "其他错误：无效数据,";
            };
          };
          if(iperror>0 && ypm>0 && yperror>0 && ypmiss>0 && spyctd>0 && bmsbtd>0 && zrgztd>0 && fffw>0 && qtcw>0){
            desc += "良好";
          }
        }else if(markType == 3){
          name = data.SERVERNAME;
          var ipAddress = "IP地址："+ data.SERVERIP +"\nNVR状态：";
          desc += ipAddress;
          var iperror = data.IPERROR;
          if(iperror < 1){
            if(errorMark == 0){
              errorName = "IP地址冲突";
            };
            errorMark++;
            if(iperror == 0){
              desc += "IP地址冲突：错误,";
            }else if(iperror == -1){
              desc += "IP地址冲突：无效数据,";
            };
          };
          var ypm = data.DISKFULLINFO;
          if(ypm < 1){
            if(errorMark == 0){
              errorName = "硬盘满";
            };
            errorMark++;
            if(ypm == 0){
              desc += "硬盘满：错误,";
            }else if(ypm == -1){
              desc += "硬盘满：无效数据,";
            };
          };
          var yperror = data.DISKERRINFO;
          if(yperror < 1){
            if(errorMark == 0){
              errorName = "硬盘出错";
            };
            errorMark++;
            if(yperror == 0){
              desc += "硬盘出错：错误,";
            }else if(yperror == -1){
              desc += "硬盘出错：无效数据,";
            };
          };
          var ypmiss = data.DISKLOSTINFO;
          if(ypmiss < 1){
            if(errorMark == 0){
              errorName = "硬盘丢失";
            };
            errorMark++;
            if(ypmiss == 0){
              desc += "硬盘丢失：错误,";
            }else if(ypmiss == -1){
              desc += "硬盘丢失：无效数据,";
            };
          };
          var kdzm = data.BANDWIDTHFULL;
          if(kdzm < 1){
            if(errorMark == 0){
              errorName = "宽带占满";
            };
            errorMark++;
            if(kdzm == 0){
              desc += "宽带占满：错误,";
            }else if(kdzm == -1){
              desc += "宽带占满：无效数据,";
            };
          };
          var fffw = data.USERILLEGAL;
          if(fffw < 1){
            if(errorMark == 0){
              errorName = "非法访问";
            };
            errorMark++;
            if(fffw == 0){
              desc += "非法访问：错误,";
            }else if(fffw == -1){
              desc += "非法访问：无效数据,";
            };
          };
          var qtcw = data.OTHERERROR;
          if(qtcw < 1){
            if(errorMark == 0){
              errorName = "其他错误";
            };
            errorMark++;
            if(qtcw == 0){
              desc += "其他错误：错误,";
            }else if(qtcw == -1){
              desc += "其他错误：无效数据,";
            };
          };
          if(iperror>0 && ypm>0 && yperror>0 && ypmiss>0 && kdzm>0 && fffw>0 && qtcw>0){
            desc += "良好";
          }
        }else if(markType == 4){
          name = data.SERVERNAME;
          var ipAddress = "IP地址："+ data.SERVERIP +"\n编码器状态：";
          desc += ipAddress;
          var iperror = data.IPERROR;
          if(iperror < 1){
            if(errorMark == 0){
              errorName = "IP地址冲突";
            };
            errorMark++;
            if(iperror == 0){
              desc += "IP地址冲突：错误,";
            }else if(iperror == -1){
              desc += "IP地址冲突：无效数据,";
            };
          };
          var zlm = data.RAIDFULLINFO;
          if(zlm < 1){
            if(errorMark == 0){
              errorName = "阵列满";
            };
            errorMark++;
            if(zlm == 0){
              desc += "阵列满：错误,";
            }else if(zlm == -1){
              desc += "阵列满：无效数据,";
            };
          };
          var zlcc = data.RAIDERRINFO;
          if(zlcc < 1){
            if(errorMark == 0){
              errorName = "阵列出错";
            };
            errorMark++;
            if(zlcc == 0){
              desc += "阵列出错：错误,";
            }else if(zlcc == -1){
              desc += "阵列出错：无效数据,";
            };
          };
          var zlds = data.RAIDLOSTINFO;
          if(zlds < 1){
            if(errorMark == 0){
              errorName = "阵列丢失";
            };
            errorMark++;
            if(zlds == 0){
              desc += "阵列丢失：错误,";
            }else if(zlds == -1){
              desc += "阵列丢失：无效数据,";
            };
          };
          var wdgg = data.TEMPERATUREOVER;
          if(wdgg < 1){
            if(errorMark == 0){
              errorName = "温度过高";
            };
            errorMark++;
            if(wdgg == 0){
              desc += "温度过高：错误,";
            }else if(wdgg == -1){
              desc += "温度过高：无效数据,";
            };
          };
          var fffw = data.USERILLEGAL;
          if(fffw < 1){
            if(errorMark == 0){
              errorName = "非法访问";
            };
            errorMark++;
            if(fffw == 0){
              desc += "非法访问：错误,";
            }else if(fffw == -1){
              desc += "非法访问：无效数据,";
            };
          };
          var qtcw = data.OTHERERROR;
          if(qtcw < 1){
            if(errorMark == 0){
              errorName = "其他错误";
            };
            errorMark++;
            if(qtcw == 0){
              desc += "其他错误：错误,";
            }else if(qtcw == -1){
              desc += "其他错误：无效数据,";
            };
          };
          if(iperror>0 && zlm>0 && zlcc>0 && zlds>0 && wdgg>0 && fffw>0 && qtcw>0){
            desc += "良好";
          }
        }else if(markType == 5){
          name = data.SERVERNAME;
          var ipAddress = "IP地址："+ data.SERVERIP +"\nIPSAN状态：";
          desc += ipAddress;
          var iperror = data.IPERROR;
          if(iperror < 1){
            if(errorMark == 0){
              errorName = "IP地址冲突";
            };
            errorMark++;
            if(iperror == 0){
              desc += "IP地址冲突：错误,";
            }else if(iperror == -1){
              desc += "IP地址冲突：无效数据,";
            };
          };
          var spyctd = data.VIDEOERRCHAN;
          if(spyctd < 1){
            if(errorMark == 0){
              errorName = "视频异常通道";
            };
            errorMark++;
            if(spyctd == 0){
              desc += "视频异常通道：错误,";
            }else if(spyctd == -1){
              desc += "视频异常通道：无效数据,";
            };
          };
          var bmsbtd = data.ENCODEERRCHAN;
          if(bmsbtd < 1){
            if(errorMark == 0){
              errorName = "编码失败通道";
            };
            errorMark++;
            if(bmsbtd == 0){
              desc += "编码失败通道：错误,";
            }else if(bmsbtd == -1){
              desc += "编码失败通道：无效数据,";
            };
          };
          var zrgztd = data.INPUTOVERLOADCHAN;
          if(zrgztd < 1){
            if(errorMark == 0){
              errorName = "载入过载通道";
            };
            errorMark++;
            if(zrgztd == 0){
              desc += "载入过载通道：错误,";
            }else if(zrgztd == -1){
              desc += "载入过载通道：无效数据,";
            };
          };
          var fffw = data.USERILLEGAL;
          if(fffw < 1){
            if(errorMark == 0){
              errorName = "非法访问";
            };
            errorMark++;
            if(fffw == 0){
              desc += "非法访问：错误,";
            }else if(fffw == -1){
              desc += "非法访问：无效数据,";
            };
          };
          var qtcw = data.OTHERERROR;
          if(qtcw < 1){
            if(errorMark == 0){
              errorName = "其他错误";
            };
            errorMark++;
            if(qtcw == 0){
              desc += "其他错误：错误,";
            }else if(qtcw == -1){
              desc += "其他错误：无效数据,";
            };
          };
          if(iperror>0 && spyctd>0 && bmsbtd>0 && zrgztd>0 && fffw>0 && qtcw>0){
            desc += "良好";
          }
        };
        dispatch(requestDataActions.setRequest());
        var lagId = data.LAG;
        var filter = {"key":"GBCode","value":lagId};
        var mdata = [];
        var halist = [];
        oData.getAllFaults(function(data){
            var resultsAllFaults = data.results;
            for(var i=0;i<resultsAllFaults.length;i++){
                var fname = resultsAllFaults[i].FaultName;
                if(errorName == fname){
                    dispatch(setFaultSubTypeId(resultsAllFaults[i].RecId));
                }
            }
            dispatch(setAllFaults(resultsAllFaults));
            dispatch(requestDataActions.setRequestSuccess());
        })
        oData.getFaultType(function(data){
            var results = data.results;
            var dataList = [];
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var name = results[i].FaultName;
                    if(name == typeName){
                        dispatch(setFaultTypeId(results[i].RecId));
                        dispatch(get_faultSubType(results[i].RecId));
                    }
                }
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
        get_Assets(filter,function(data2){
            if(data2.length>0){
                mdata = eval(data2);
                for(var i=0;i<mdata.length;i++){
                    halist.push(mdata[i].RecId);
                }
            }
            var tdata = {
                subject:name,
                desc:desc,
                monitorData:mdata
            };
            dispatch(setTouchWorkOrderData(tdata));
            dispatch(setHandleAssetsId(halist));
            dispatch(setAssets(mdata));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
function get_Assets(filter, callback){
    oData.getAllAssets3(filter,function(data){
        var results = data.results;
        callback(results);
     });
}

export function set_touchWorkOrderDataDesc(data){
    return dispatch => {
        var touchWorkOrderData = {
          subject:"",
          desc:data,
          monitorData:[]
        };
        dispatch(setTouchWorkOrderData(touchWorkOrderData));
        // this.emit("change");
    }
}

export function delete_workOrder(data) {
    return (dispatch, getState) => {
        var state = getState();
        var valList = "[";
        for(var i=0;i<data.length;i++){
          var val = "{'id':'"+data[i]+"'},";
          if(i==data.length-1){
            val = "{'id':'"+data[i]+"'}]";
          };
          valList+=val;
        };
        var filter = [{key:"WORKORDER_ID",value:valList}];
        // var that = this;
        var curParam = state.operationReducer.curstateparam;
        oData.deleteWorkOrder(filter,function(data2){
            // window.location.reload(true);
            $("#myWorkSpaceTable").bootstrapTable('remove', {
                field: 'WORKORDER_ID',
                values: data
            });
            var filter2= [{"key":"PARAM","value":curParam}];
            dispatch(get_workOrderList(filter2));
            dispatch(get_colorSpan());
        })
    }
}

export function get_automaticWorkOrderUI() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getAutomaticWorkOrderUI(function(data){
            if(data.results.length == 0){
                setTimeout(function(){
                  document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                  document.getElementById('publicMessageModalcontent').innerHTML = "获取自动工单规则失败。"
                  $('#publicMessageModal').modal('show');
                },100);
                dispatch(requestDataActions.setRequestFail());
                return;
            };
            var obj = eval(data.results);
            dispatch(setAutomaticWorkOrder(eval(obj[0].AUTOMATICWORKORDER)));
            dispatch(setEquipmentType(eval(obj[0].EQUIPMENTTYPE)));
            dispatch(setMonitorType(eval(obj[0].MONITORTYPE)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function add_automaticWorkOrder(dateObjec) {
    return dispatch => {
        // var _this=this;
        oData.addAutomaticWorkOrder(dateObjec,function(response) {
            if(response) {
                // _this.emit("change");
            }
            else {
                //alert("添加自动工单规则失败");
                setTimeout(function(){
                  document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                  document.getElementById('publicMessageModalcontent').innerHTML = "添加自动工单规则失败。"
                  $('#publicMessageModal').modal('show');
                },100);
                // _this.emit("change");
            }
        });
    }
}

export function update_automaticWorkOrder(dateObjec) {
    return dispatch => {
        // var _this=this;
        oData.updateAutomaticWorkOrder(dateObjec,function(response) {
            if(response) {
                // _this.emit("change");
            }
            else {
                //alert("修改自动工单规则失败");
                setTimeout(function(){
                  document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                  document.getElementById('publicMessageModalcontent').innerHTML = "修改自动工单规则失败。"
                  $('#publicMessageModal').modal('show');
                },100);
                // _this.emit("change");
            }
        });
    }
}

export function del_automaticWorkOrder(dateObjec){
    // var _this=this;
    oData.deleteAutomaticWorkOrder(dateObjec,function(response) {
        // _this.emit("change");
    });
}

export function get_allFaults() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getAllFaults(function(data){
            dispatch(setAllFaults(data.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function save_dutyGroupName(data) {
    return dispatch => {
        oData.addGroupName(data,function(data2){
            dispatch(get_dutyGroup());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}

export function save_dutyArrangements(data) {
    return dispatch => {
        oData.addGroupArrangements(data,function(data2){
            dispatch(getDutyManageListInfo());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}

export function get_workOrderUi(data) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderUI(data,function(re){
            dispatch(setTouchEquipmentData(re.results[0]));
            var assetId = re.results[0].ASSETID;
            var faultLarge = re.results[0].FAULTLARGE;
            var faultSmall = re.results[0].FAULTSMALL;
            var faultSla = re.results[0].SLAID;
            if(assetId != null && assetId != ""){
                //var filter = [{key:"RECID",value:assetId}];
                var filter = {key:"RecId",value:assetId};
                var handleIds = [];
                handleIds.push(assetId);
                //oData.getAllAssets2(filter,function(data){
                oData.getAllAssets3(filter,function(data){
                    //var results = data.results[0].ASSETS_INFO;
                    var results = data.results;
                    if(results.length > 0){
                        results = eval(results);
                    };
                    dispatch(setAssets(results));
                    dispatch(setHandleAssetsId(handleIds));
                    dispatch(setTouchWorkOrderData_monitorData(results));
                    dispatch(setFaultTypeId(faultLarge));
                    dispatch(setTouchFaultSubId(faultSmall));
                    dispatch(setServiceId(faultSla));
                    dispatch(get_faultSubType(faultLarge));
                    dispatch(get_allFaults());
                });
            }else{
                dispatch(setFaultTypeId(faultLarge));
                dispatch(setTouchFaultSubId(faultSmall));
                dispatch(setServiceId(faultSla));
                dispatch(get_faultSubType(faultLarge));
                dispatch(get_allFaults());
            };
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_dutyGroup() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getDutyGroups(function(re){
            dispatch(setDutyGroups(re.results));
            dispatch(setCurDutyGroup(re.results[0]));
            dispatch(setCurDataDutyGroup(re.results[0]));
            dispatch(getDutyManageListInfo());
            $(".dutyExtraText").text("-"+re.results[0].DutyGroupName);
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_dutyGroupArr() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getDutyGroupArrs(function(re){
            for(var i=0;i<re.results.length;i++){
                var st = re.results[i].StartTime;
                var et = re.results[i].EndTime;
                st = uitl.toDate(st);
                et = uitl.toDate(et);
                var sts = st.split(" ");
                st = sts[1];
                var ets = et.split(" ");
                et = ets[1];
                re.results[i].StartTime = st;
                re.results[i].EndTime = et;
            }
            dispatch(setDutyGroupArrs(re.results));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function edit_dutyGroupArr(data) {
    return dispatch => {
        oData.updateDutyGroupArr(data,function(data2){
            dispatch(getDutyManageListInfo());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}

export function edit_dutyGroup(data) {
    return dispatch => {
        oData.updateDutyGroup(data,function(data2){
            dispatch(get_dutyGroup());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}

export function delete_dutyGroupArr(id) {
    return dispatch => {
        oData.deleteDutyGroupArr(id,function(data2){
            dispatch(getDutyManageListInfo());
        });
    }
}

export function get_dutyUsers() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        var data = [{key:"OPERATOR_TYPE",value:"GET"}];
        oData.getDutyUsers(data,function(data2){
            var result = data2.results;
            dispatch(setDutyUsers(result));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function change_curDutyGroup2(data) {
    return dispatch => {
        dispatch(setCurDutyGroup(data[0]));
        dispatch(setCurDataDutyGroup(data[1]));
        dispatch(getDutyManageListInfo());
    }
}

export function save_dutyUser(data) {
    return (dispatch, getState) => {
        var state = getState();
        // var userId = data[0];
        var userId = data;
        var dutyId = state.operationReducer.curDutyGroup.RecId;
        var param = {UserInfo:userId,DutyGroupId:dutyId};
        oData.addDutyUser(param,function(data2){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(setCurDutyGroup(state.operationReducer.curDataDutyGroup));
            dispatch(getDutyManageListInfo());
        })
    }
}

export function edit_dutyUser(data) {
    return dispatch => {
        oData.editDutyUser(data,function(result){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(setCurDutyGroup(state.operationReducer.curDataDutyGroup));
            dispatch(getDutyManageListInfo());
        });
    }
}

export function delete_dutyGroup(id) {
    return dispatch => {
        oData.deleteDutyGroup(id,function(data2){
            oData.getDutyGroups(function(re){
                dispatch(setDutyGroups(re.results));
                dispatch(setCurDutyGroup(re.results[0]));
                dispatch(setCurDataDutyGroup(re.results[0]));
                dispatch(getDutyManageListInfo());
                $(".dutyExtraText").text("-"+re.results[0].DutyGroupName);
            });
        });
    }
}

function getDutyManageListInfo() {
    return (dispatch, getState) => {
        dispatch(requestDataActions.setRequest());
        var state = getState();
        var rdata = state.operationReducer.curDataDutyGroup;
        var paramValue = "";
        if(rdata!=null && rdata!=""){
            paramValue = rdata.RecId;
        }
        var param = [{key:"DUTYGROUP_ID",value:paramValue}];
        oData.getDutyManageListInfo(param,function(data){
            //console.log(data);
            var re = data.results[0];
            var uList = re.USER_LIST;
            var dList = re.DUTYTABLE_LIST;
            var aList = re.DUTY_ARRANGEMENTS;
            uList = eval(uList);
            dList = eval(dList);
            aList = eval(aList);
            dispatch(setDutyUserList(uList));
            dispatch(setDutyDutyList(dList));
            dispatch(setDutyGroupArrs(aList));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function save_eccDuty(data) {
    return dispatch => {
        oData.addEccDuty(data,function(){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(getDutyManageListInfo());
        })
    }
}

export function edit_eccDuty(data) {
    return dispatch => {
        oData.editEccDuty(data,function(){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(getDutyManageListInfo());
        })
    }
}

export function get_dutyManageCalendarData(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getDutyManageCalendarData(filter,function(data){
            dispatch(setGetCalendarDataFlag(false));
            if(data.results.length == 0){
                dispatch(requestDataActions.setRequestFail());
                return;
            }
            //通过eval() 函数可以将JSON字符串转化为对象
            var dataObj = eval(data.results[0]);
            var calendarData = dataObj.CALENDAR_DATA;
            var isSign = dataObj.IS_SIGN;
            dispatch(setCalendarData(calendarData?eval("(" + calendarData + ")"):[]));
            dispatch(setIsSign(eval("(" + isSign + ")")));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_dutyLog(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        dispatch(setDutyLogs([]));
        oData.getDutyLog(filter,function(data){
            var results = data.results;
            var dataList = [];
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var data = {id:results[i].RecId, userName:results[i].UserName, content:results[i].Content};
                    dataList.push(data);
                }
                dispatch(setDutyLogs(dataList));
            }
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function add_dutyLog(data) {
    return dispatch => {
        oData.addDutyLog(data,function(response){
            if(response) {
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "日志添加成功。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            else {
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "日志添加失败。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
        })
    }
}

export function update_dutyLog(data) {
    return dispatch => {
        oData.updateDutyLog(data,function(response){
            if(response) {
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "修改日志成功。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            else {
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "修改日志失败。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
        });
    }
}

export function get_dutySignIn(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getDutySignIn(filter,function(data){
            var results = data.results;
            var dataList = [];
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var signTime = new Date(parseInt(results[i].CreatedDateTime.substring(results[i].CreatedDateTime.indexOf("(")+1, results[i].CreatedDateTime.indexOf(")"))));
                    var signTimeMinute = "00" + signTime.getMinutes().toString();
                    var signTimeSecond = "00" + signTime.getSeconds().toString();
                    var data = {id:results[i].RecId, signUser:results[i].SignUser, signTime:signTime.getHours()+":"+signTimeMinute.substring(signTimeMinute.length-2,signTimeMinute.length)+":"+signTimeSecond.substring(signTimeSecond.length-2,signTimeSecond.length)};
                    dataList.push(data);
                }
                dispatch(setDutySignIns(dataList));
            }
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function add_dutySignIn(data) {
    return dispatch => {
        oData.addDutySignIn(data,function(response){
            if(response) {
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "签到成功。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            else {
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "签到失败。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            dispatch(setGetCalendarDataFlag(true));
        });
    }
}

export function delete_dutyGroupUser(id) {
    return dispatch => {
        oData.deleteDutyUser(id,function(){
            dispatch(getDutyManageListInfo());
        });
    }
}

export function delete_eccDuty(id) {
    return dispatch => {
        oData.deleteEssDuty(id,function(){
            dispatch(getDutyManageListInfo());
        });
    }
}

export function get_workOrderTemplate(templateId) {
    return dispatch => {
        oData.getOrderTemplate(templateId,function(result){
            // console.log(result);
        })
    }
}

export function get_allWorkOrderTemplate(){
    return dispatch => {
        dispatch(setWorkOrderTemplates([]));
        dispatch(requestDataActions.setRequest());
        oData.getAllWorkOrderTemplate(function(data){
            if(data.results.length == 0){
                return;
            }
            dispatch(setWorkOrderTemplates(eval(data.results)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function add_workOrderTemplate(dataObj) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.addOrderTemplate(dataObj,function(result){
            // console.log(result);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "工单模板添加成功！"
                $('#publicMessageModal').modal('show');
            },100);
            window.location.href = '#/operationmanage/workOrderTemplateList';
        })
    }
}

export function edit_workOrderTemplate(dataObj) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.editOrderTemplate(dataObj,function(result){
            // console.log(result);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "工单模板修改成功！"
                $('#publicMessageModal').modal('show');
            },100);
            window.location.href = '#/operationmanage/workOrderTemplateList';
        })
    }
}

export function delete_workOrderTemplate(workOrderTemplateId) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.deleteOrderTemplate(workOrderTemplateId,function(result){
            // console.log(result);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "工单模板删除成功！"
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}

export function set_selectedWorkOrderTemplate(params){
    return dispatch => {
        dispatch(setSelectedWorkOrderTemplate(params.workOrderTemplate));
        dispatch(setWorkOrderTemplateOperationFlag(params.flag));
    }
}

export function getBusObDefFieldsDetail(param) {
  return dispatch => {
    var filter = [{"key":"method","value":"GetBusObDefFields"},{"key":"params","value":"busObDefName="+param+""}];
    oData.getBusObDefFields(filter,function(data){
      // console.log(data);
      var result = data.results[0].result;
      result = eval("("+result+")");
      dispatch(setBusObDefFieldDetail(result))
    })
  }
}

export function getBusObDefFieldsHandle(param) {
  return dispatch => {
    var filter = [{"key":"method","value":"GetBusObDefFields"},{"key":"params","value":"busObDefName="+param+""}];
    oData.getBusObDefFields(filter,function(data){
      // console.log(data);
      var result = data.results[0].result;
      result = eval("("+result+")");
      dispatch(setBusObDefFieldHandle(result))
    })
  }
}

export function add_workOrderForm(params, entity) {
    return dispatch => {
      oData.addWorkOrderForm(params, entity, function(data){
        // console.log(data);
      })
    }
}

export function save_createOrderAndDetailTemplate(data, detailData, entity) {
    return (dispatch, getState) => {
        var state = getState();
        // var that = this;
        var flowType = state.operationReducer.curWorkOrderFlowId;
        var types = state.operationReducer.workFlowTypes;
        if(flowType!=null && flowType!=""){
          data.WorkOrderType = flowType;
        }else{
          data.WorkOrderType = types[0].RecId;
        }
        var gid = Store.get("GROUP_ID");
        // this.curWorkOrderGroupID = gid;
        dispatch(setCurWorkOrderGroupID(gid));
        data.ParentId = gid;
        oData.saveCreateOrder(data,function(result){
            var handleIds = state.operationReducer.handleAssetsId;
            dispatch(setCurWorkOrderId(result.RecId));
            detailData["workOrderId"] = result.RecId;
            dispatch(add_workOrderForm(detailData, entity));
            if(handleIds.length>0){
                var id = result.RecId;
                for(var i=0;i<handleIds.length;i++){
                    var aid = handleIds[i];
                    var dataSave = {
                        WorkOrderId:id,
                        AssetId:aid
                    };
                    oData.saveOrderAsset(dataSave,function(result2){
                        // dispatch(setAssets([]));
                    });
                    if(i==handleIds.length-1){
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                            $('#publicMessageModal').modal('show');
                        },100);
                    }
                }
            }else{
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "工单"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            // that.emit("change");
        })
    }
}

export function save_updateDetailTemplate(detailData, entity) {
    return dispatch => {
      oData.updateWorkOrderForm(detailData, entity, function(data){
        // console.log(data);
        setTimeout(function(){
            document.getElementById('publicMessageModelTitle').innerHTML = "工单"
            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
            $('#publicMessageModal').modal('show');
        },100);
      })
    }
}
//明长然 20161222  服务级别协议相关代码  START
export function get_slaInfoData(statusCode) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
            oData.getSLAInfoData(statusCode,function (data) {
                dispatch(setSLAInfoData(data.results));
                dispatch(setSLAInfoId(""));
                dispatch(requestDataActions.setRequestSuccess());
            })

    }
}
export function get_slaStatusData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSlaStatus(function (data) {
            dispatch(setSlaStatusData(data.results));
            dispatch(setSlaStatusId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function get_ecctaskplanData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getEcctaskplanData(function (data) {
            dispatch(setEcctaskplanData(data.results));
            dispatch(setEcctaskplanId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function get_unitTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getUnitTypeData(function (data) {
            dispatch(setUnitTypeData(data.results));
            dispatch(setUnitTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function get_companyData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getCompanyData(function (data) {
            dispatch(setCompanyData(data.results));
            dispatch(setCompanyId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

export function delete_slaInfoData(filters) {
    return (dispatch,getState) => {
        let state = getState();
        if(filters==null || filters==""){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
                $('#publicMessageModal').modal('show');
            },100);
            return false;
        }
        dispatch(requestDataActions.setRequest());
        oData.deleteSLAInfoData(filters,function () {
            dispatch(get_slaInfoData());
            dispatch(setSLAInfoId(""));
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}
export function get_projectUnitData(id) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getProjectUnitData(id,function(data){
            var results = data.results;
            var dataList = [];
            if(results.length>0){
                for(var i=0;i<results.length;i++){
                    var data = {id:results[i].PROJECTID,name:results[i].PROJECTNAME};
                    dataList.push(data);
                }
                dispatch(setProjectUnitData(dataList));
                dispatch(setCompanyId(id));
                // that.emit("change");
            }else{
                dispatch(setProjectUnitData([]));
                dispatch(setCompanyId(id));
                // that.emit("change");
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function add_slaInfo(filter){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.addSlaInfo(filter, function(data){
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                document.getElementById('publicMessageModalcontent').innerHTML = "服务级别协议添加成功！";
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}
export function edit_slaInfo(filter){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.editSlaInfo(filter, function(data){
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                document.getElementById('publicMessageModalcontent').innerHTML = "服务级别协议修改成功！";
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(add_slaInfo());
        });
    }
}
export function get_serviceCatalog() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getServiceCatalog(function (data) {
            dispatch(setServiceCatalogData(data.results));
            dispatch(setServiceCatalogId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function get_serviceItem(id) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getServiceItem(id,function (data) {
            var results = data.results;
            if(results.length>0){
                dispatch(setServiceItemData(results));
                dispatch(setServiceCatalogId(id));
                // that.emit("change");
            }else{
                dispatch(setServiceItemData([]));
                dispatch(setServiceCatalogId(id));
                // that.emit("change");
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//明长然 20161222  服务级别协议相关代码  END
//明长然 20170105  故障级别相关代码 start
export function get_fauleStatusData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFauleStatus(function (data) {
            dispatch(setFauleStatusData(data.results));
            dispatch(setFauleStatusId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function get_fauleWorkOrderTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFauleWorkOrderType(function (data) {
            dispatch(setFauleWorkOrderTypeData(data.results));
            dispatch(setFauleWorkOrderTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function get_fauleWorkOrderNameData(id) {
  return dispatch => {
    dispatch(requestDataActions.setRequest());
    oData.getFauleWorkOrderName(id,function (data) {
      dispatch(setFauleWorkOrderNameData(data.results));
      dispatch(setFauleWorkOrderNameId(""));
      dispatch(requestDataActions.setRequestSuccess());
    })
  }
}
export function get_workOrderSourceData() {
  return dispatch => {
    dispatch(requestDataActions.setRequest());
    oData.getWorkOrderSources(function (data) {
      dispatch(setWorkOrderSourceData(data.results));
      dispatch(setWorkOrderSourceId(""));
      dispatch(requestDataActions.setRequestSuccess());
    })
  }
}
export function get_slaInfoDatas(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSLAInfoDatas(filters,function (data) {
            dispatch(setSLAInfoDatas(data.results));
            dispatch(setSLAInfoIds(""));
            dispatch(requestDataActions.setRequestSuccess());
        })

    }
}
export function get_unitStaffInfoDatas(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getUnitStaffInfoDatas(filters,function (data) {
            var results = data.results;
            dispatch(setUnitStaffInfoDatas(results));
            dispatch(setUnitStaffInfoIds(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_fauleBigFaultTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFauleBigFaultType(function (data) {
            var results = data.results;
            dispatch(setFauleBigFaultTypeData(results));
            dispatch(setFauleBigFaultTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_fauleFaultSubTypeData(id) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFauleFaultSubType(id,function (data) {
            var results = data.results;
            dispatch(setFauleFaultSubTypeData(results));
            dispatch(setFauleFaultSubTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_fauleFaultTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFauleFaultType(function (data) {
            var results = data.results;
            dispatch(setFauleFaultTypeData(results));
            dispatch(setFauleFaultTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_fauleKnowledgeData(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFauleKnowledgeData(filters,function (data) {
            var results = data.results;
            dispatch(setFauleKnowledgeData(results));
            dispatch(setFauleKnowledgeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_nextWorkFlowData(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getNextWorkFlowData(filters,function (data) {
            var results = data.results;
            dispatch(setNextWorkFlowData(results));
            dispatch(setNextWorkFlowId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_workFlowTypeData(WorkName) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkFlowTypeData(WorkName,function (data) {
            var results = data.results;
            dispatch(setWorkFlowTypeData(results));
            dispatch(setWorkFlowTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//let data = [WorkOrderNumber,ServiceContent,AppointmentTime,Contacts,Subject,ContactNumber,WorkOrderDec,UnitHead,UnitHeadPhone,Address,ResponseTime,SolutionTime,CurrentHandle,FaultPicture,FaultLevelId];
export function save_createOrder1(data) {
    return (dispatch, getState) => {
        var state = getState();
        var UnitId = state.operationReducer.unitTypeId;
        var WorkOrderType = state.operationReducer.workFlowTypeId;
        var ParentId = Store.get("GROUP_ID");
        var SlAId = state.operationReducer.slaInfoIds;
        var ServiceCatalog = state.operationReducer.fauleServiceCatalogId;
        var ServiceItem = state.operationReducer.fauleServiceItemId;
        var SourceId = state.operationReducer.workOrderSourceId;
        var ProjectId = state.dataDictReducer.projectId;
        var UnitTypeId = state.dataDictReducer.unitTypeId;
        var FaultLarge = state.operationReducer.fauleBigFaultTypeId;
        var FaultSmall = state.operationReducer.fauleFaultSubTypeId;
        var FaultType = state.operationReducer.fauleFaultTypeId;
        var SerialNumber = state.operationReducer.unitStaffNumber;
        //dispatch(setCurWorkOrderGroupID(gid));
        var param = {UnitId:UnitId, WorkOrderType: WorkOrderType,ParentId:ParentId,SLAId:SlAId,ServiceItem:ServiceItem,ServiceCatalog:ServiceCatalog,SourceId:SourceId,ProjectId:ProjectId,UnitTypeId:UnitTypeId,FaultType:FaultType,FaultLarge:FaultLarge,FaultSmall:FaultSmall,WorkOrderNumber:data[0],ServiceContent:data[1],AppointmentTime:data[2],Contacts:data[3],Subject:data[4],ContactNumber:data[5],WorkOrderDesc:data[6],UnitHead:data[7],UnitHeadPhone:data[8],Address:data[9],ResponseTime:data[10],SolutionTime:data[11],CurrentHandle:data[12],FaultPicture:data[13],FaultLevelId:data[14],Status:"dcl",SerialNumber:SerialNumber};
        dispatch(requestDataActions.setRequest());
        oData.saveCreateOrder(param,function(result){
            dispatch(requestDataActions.setRequestSuccess());
            dispatch(setCurWorkOrderId(result.RecId));
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "工单";
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。";
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}
export function get_workOrderRecId(workOrderNumber) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderRecId(workOrderNumber,function (data) {
            var results = data.results;
            dispatch(setWorkOrderRecIdData(results));
            dispatch(setWorkOrderRecIdId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//明长然 20170105  故障级别相关代码 end
//明长然 20170203  任务管理相关代码 start
export function get_taskOrderList() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getTaskOrderList(function (data) {
            var results = data.results;
            dispatch(setTaskOrderListData(results));
            dispatch(setTaskOrderListId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//let data = [taskTheme,taskAnalyst,taskPhone,taskLeader,taskLeaderPhone,taskUnitAddress,taskCurrent,taskWorkOrderTypeId,currentHandle];
export function save_createTask(data) {
    return (dispatch, getState) => {
        var state = getState();
        var UnitNameId = state.operationReducer.unitStaffInfoIds;
        var ProjectId = state.dataDictReducer.projectId;
        var UnitTypeId = state.dataDictReducer.unitTypeId;
        //dispatch(setCurWorkOrderGroupID(gid));
        var param = {UnitId:UnitNameId,ProjectId:ProjectId,UnitTypeId:UnitTypeId,Contacts:data[1],Subject:data[0],ContactNumber:data[2],WorkOrderDesc:data[6],UnitHead:data[3],UnitHeadPhone:data[4],Address:data[5],Status:"dcl",WorkOrderType:data[7],CurrentHandle:data[8]};
        dispatch(requestDataActions.setRequest());
        oData.saveCreateOrder(param,function(result){
            dispatch(requestDataActions.setRequestSuccess());
            dispatch(setCurWorkOrderId(result.RecId));
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "任务";
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。";
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}
export function get_taskWorkOrderType() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getTaskWorkOrderType(function (data) {
            var results = data.results;
            dispatch(setTaskWorkOrderTypeData(results));
            dispatch(setTaskWorkOrderTypeId(results[0].RecId));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_orderDetailsData(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getOrderDetailsData(filters,function (data) {
            var results = data.results;
            dispatch(setOrderDetailsData(results));
            // dispatch(setOrderDetailsId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function save_workOrderCommon(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.saveWorkOrderCommon(filters,function (data) {
            console.log(data);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                document.getElementById('publicMessageModalcontent').innerHTML = "保存成功！";
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}
export function save_workFlowLog(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.saveWorkFlowLog(filters,function (data) {
            console.log(data);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                document.getElementById('publicMessageModalcontent').innerHTML = "保存成功！";
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}
export function save_workSatisfaction(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.saveWorkSatisfaction(filters,function (data) {
            console.log(data);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                document.getElementById('publicMessageModalcontent').innerHTML = "保存成功！";
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}
export function delete_workOrderCommon(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.deleteWorkOrderCommon(filters,function (data) {
            console.log(data);
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                document.getElementById('publicMessageModalcontent').innerHTML = "删除成功！";
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}
//明长然 20170203  任务管理相关代码 end
//明长然 20170206  投诉管理相关代码 start
export function get_complaintOrderList() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getComplaintOrderList(function (data) {
            var results = data.results;
            dispatch(setComplaintOrderListData(results));
            dispatch(setComplaintOrderListId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_complaintArea() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getComplaintArea(function (data) {
            var results = data.results;
            dispatch(setComplaintAreaData(results));
            dispatch(setComplaintAreaId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function get_complaintChildArea(AreaId) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getComplaintChildArea(AreaId,function (data) {
            var results = data.results;
            dispatch(setComplaintChildAreaData(results));
            dispatch(setComplaintChildAreaId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//let data = [complaintTheme,complaintAnalyst,complaintPhone,complaintLeader,complaintLeaderPhone,complaintUnitAddress,complaintDescription,complaintWorkOrderTypeId,currentHandle];
export function save_createComplaint(data) {
    return (dispatch, getState) => {
        var state = getState();
        var UnitNameId = state.operationReducer.unitStaffInfoIds;
        var ProjectId = state.dataDictReducer.projectId;
        var ComplaintAreaId = state.operationReducer.complaintAreaId;
        var ComplaintChildAreaId = state.operationReducer.complaintChildAreaId;
        var UnitTypeId = state.operationReducer.unitTypeId;
        //dispatch(setCurWorkOrderGroupID(gid));
        var param = {UnitId:UnitNameId,ProjectId:ProjectId,UnitTypeId:UnitTypeId,Contacts:data[1],Subject:data[0],ContactNumber:data[2],WorkOrderDesc:data[6],UnitHead:data[3],UnitHeadPhone:data[4],Address:data[5],Status:"dcl",WorkOrderType:data[7],CurrentHandle:data[8]};
        dispatch(requestDataActions.setRequest());
        oData.saveCreateOrder(param,function(result){
            dispatch(requestDataActions.setRequestSuccess());
            dispatch(setCurWorkOrderId(result.RecId));
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "投诉";
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。";
                $('#publicMessageModal').modal('show');
            },100);
        })
    }
}
export function get_complaintWorkOrderType() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getComplaintWorkOrderType(function (data) {
            var results = data.results;
            dispatch(setComplaintWorkOrderTypeData(results));
            dispatch(setComplaintWorkOrderTypeId(results[0].RecId));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//明长然 20170206  投诉管理相关代码 end
//曹志强		20161226	获取公告管理信息
export function get_topicInfoListData(param) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getTopicInfoListData(param, function(data){
            var result = data.results;
            dispatch(setTopicInfoListData(result));
            dispatch(setTopicInfoListId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
//曹志强		20161226	删除公告信息
export function delete_topicInfoListData(param) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.operationReducer.topicInfoListId;
        if((id == null || id == "") && (param != null && param != "")){
        	id = param;
        }
        if ((id == null || id == "") &&(param == null || param == "")) {
            setTimeout(function () {
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的公告信息"
                $('#publicMessageModal').modal('show');
            }, 100);
            return false;
        }
        dispatch(requestDataActions.setRequest());
        oData.deleteTopicInfoListData(id, function (data2) {
            dispatch(setTopicInfoListId(""));
            dispatch(get_topicInfoListData());
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function () {
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            }, 100);
        });
    }
}

//曹志强		20161216   获取公告管理发送对象
export function getTopicObjectData(param, topicId, flag) {
    return (dispatch, getState) => {
    	var state = getState();
        dispatch(requestDataActions.setRequest());
        let topicObjectFlagData = state.operationReducer.topicObjectFlagData;
        oData.getTopicObjectData(topicId,topicObjectFlagData, function(data){
            var result = data.results;
            dispatch(setTopicObjectData(result));
            console.log("flag=====" + flag);
            if(param != null && param != undefined && param != "" && flag == false){
            	dispatch(setTopicObjectTree(param));
            	dispatch(refreshTopicObjectTree(result));
            }else{
            	var topicObject = result;
            	//已发送的对象
                var ids = [];
                //未选择的对象
                var idss = [];
                for(var i=0;i<topicObject.length;i++){
                    var mark = topicObject[i].checked;
                    var dismark = topicObject[i].chkDisabled;
                    if(mark=="true"){
                        ids.push(topicObject[i]);
                    };
                    if(dismark=="true"){
                        idss.push(topicObject[i]);
                    };
                };
                dispatch(setStaticTopicObjectData(idss));
                dispatch(setBeforeTopicObjectData(ids));
                dispatch(setIsClickTreeChange(false));
                dispatch(setHandleTopicObject(""));
                dispatch(setTopicObjectTree(param));
                dispatch(refreshTopicObjectTree(topicObject));
            }
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
//曹志强		201612228	初始化公告管理发送对象权限树
//export function initTopicObjectTree(param){
//  return (dispatch, getState) => {
//      
//      var state = getState();
//      var data = state.operationReducer.topicObjectData;
//      
//  }
//}

//曹志强		20161228   刷新公告管理发送对象
export function refreshTopicObjectTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var tree = state.operationReducer.topicObjectTree;
        console.log(tree);
        if(tree!=null && tree!=""){
            tree.initTree(data);
        };
    }
}
//曹志强		20161228	为权公告管理发送对象赋值
export function setTopicObjectTreeData(data){
    return dispatch => {
        dispatch(setHandleTopicObject(data));
        dispatch(setIsClickTreeChange(true));
    }
}

export function saveTopicInfoData(data){
    return (dispatch, getState) => {
        var state = getState();
        var prep = state.operationReducer.beforeTopicObject;
        var isClickTreeChange = state.operationReducer.isClickTreeChange;
        var newp = state.operationReducer.handleTopicObject;
        var valList = "[";
        if(newp != null && newp.length > 0){
        	for(var i=0;i<newp.length;i++){
	        	var val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+newp[i].parentId+"'},";
	        	if(i==newp.length-1){
	        		var val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+newp[i].parentId+"'}]";
	        	}
	        	valList+=val;
        	};
        	console.log(valList);
        	var filter = {TOPICNAME:data[0],TOPICCONTENT:data[1],TOPICATTACH:data[2],RECEIVEINFO:valList};
        	oData.addTopicInfoData(filter,function(data){
	            var mark = data.d.results[0].out_flag;
	            if(mark=="true"){
	                setTimeout(function(){
	                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
	                    $('#publicMessageModal').modal('show');
	                },100);
	                dispatch(setHandleTopicObject(""));
	                dispatch(setBeforeTopicObjectData(""));
	                dispatch(get_topicInfoListData());
	                dispatch(setFlowPicData("AnnounceManageMent"));
	                window.location.href = '#/operationManage/operationManagePage';
	            }else{
	                setTimeout(function(){
	                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	                    document.getElementById('publicMessageModalcontent').innerHTML = "保存失败。";
	                    $('#publicMessageModal').modal('show');
	                },100);
	            };
	        });
        }else{
        	if(prep.length == 0 && newp.length == 0){
        		setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "请选择公告信息接收人！"
                    $('#publicMessageModal').modal('show');
                },100);
        	}
        	var flag = false;
        	//如果在编辑公告时，没有编辑公告对象则将原有的公告对象赋予成新值
        	if(newp.length == 0){
        		newp = prep;
                flag = true;
            };
            var valList = "[";
            for(var i=0;i<newp.length;i++){
            	var pid = newp[i].parentId;
                if(pid == ""){
                    pid = null;
                };
                var val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+pid+"'},";
                if(i==newp.length-1){
                    val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+pid+"'}]";
                };
                valList+=val;
            };
            let filter = [
            	{key:"TOPICID",value:data[3]},
	            {key:"TOPICNAME",value:data[0]},
	            {key:"TOPICCONTENT",value:data[1]},
	            {key:"TOPICATTACH",value:data[2]},
	            {key:"FLAG",value:flag},
	            {key:"RECEIVEINFO",value:valList},
	            {key:"TOPICSTATUS",value:data[4]},
	            {key:"EDIT",value:true}
        	];
        	console.log(filter);
            oData.editTopicInfoData(filter,function(result){
	        	dispatch(requestDataActions.setRequestSuccess());
	            setTimeout(function(){
	                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
	                document.getElementById('publicMessageModalcontent').innerHTML = "操作成功"
	                $('#publicMessageModal').modal('show');
	            },100);
	            dispatch(setHandleTopicObject(""));
	            dispatch(setBeforeTopicObjectData(""));
	            dispatch(get_topicInfoListData());
	            dispatch(setFlowPicData("AnnounceManageMent"));
	            window.location.href = '#/operationManage/operationManagePage';
        	})
        }
    }  
}
//曹志强		20161228	公告审核编辑
export function edit_topicInfoData(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.editTopicInfoData(filter,function(result){
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "操作成功"
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(get_topicInfoListData());
            dispatch(setFlowPicData("AnnounceManageMent"));
            window.location.href = '#/operationManage/operationManagePage';
        })
    }
}

//曹志强		20161228	隐藏的公告审核编辑，不提示信息
export function edit_topicDataNoTip(filter) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.editTopicInfoData(filter,function(result){
            dispatch(requestDataActions.setRequestSuccess());
            dispatch(get_topicInfoListData());
            dispatch(setFlowPicData("AnnounceManageMent"));
        })
    }
}
//程艳鸿	20170103 获取值班表
export function get_dutyTableData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getDutyTableData(function(data){
            dispatch(setDutyTableData(data.results));
            dispatch(setDutyTableId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

//设置值班表
export function set_dutyTable(filter){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.addDutyTableData(filter, function(data){
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                  document.getElementById('publicMessageModelTitle').innerHTML = "提示";
                  document.getElementById('publicMessageModalcontent').innerHTML = "值班表信息操作成功！";
                $('#publicMessageModal').modal('show');
            },100);
            dispatch(get_dutyTableData());
            $("#dutyTableName").val("");
            $("#startTimeDate").val("");
            $("#unitName").find(".rw-input").text("请选择");
        });
    }
}

//程艳鸿	20170106 获取值班单位人员
export function get_dutyPerson() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getDutyPersonData(function (data) {
            dispatch(setDutyManageData(data.results));
            dispatch(setDutyManageId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
//曹志强 	20170109	获取值班日历值班人员信息
export function get_calendarData(filters) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getCalendarData(filters, function(data){
			let calendarData = data.results[0].CALENDAR_DATA;
            dispatch(setCalendarData(calendarData?eval("(" + calendarData + ")"):[]));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//刘家顺 20161222 知识库数据的获取
export function get_knowledgeManagerData(){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.knowledgeManagerData(function(data){
            dispatch(setKnowledgeManagerData(data.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//刘家顺	20161222删除知识库数据
export function delete_knowledgeData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.operationReducer.deleteKnowledgeId;
		console.log(id)
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteKnowledgeData(id,function(data2){
//			$("#editPosDepartInput").val("");
            dispatch(setDeleteKnowledgeId(""));
            dispatch(get_knowledgeManagerData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//刘家顺	20161224增加知识库数据

export function add_knowledgeData(data) {
    return (dispatch, getState) => {
        var state = getState();   
      	var id = state.dataDictReducer.faultSubPid;
		var pid = state.dataDictReducer.faultSubId;
		console.log(id)
        console.log(pid)         
//	var param =[knowledgeFaultBigClass,knowledgeFaultSmallClass,knowledgeTheme,knowledgePhenomenon,knowledgeAnalysis,knowledgeSolution,knowledgeAnalysisSum]
       
		var param = {THEME:data[2],FAULTID:id,FAULTSUBID:pid,FAULTPHENOMENON:data[3],ANALYSISSUMMARY:data[6],FAULTANALYSIS:data[4],SOLVINGSTEPS:data[5]};
		console.log(param)
            dispatch(requestDataActions.setRequest());
			oData.addknowledgeData(param,function(data){
				
	             $("#knowledgeFaultBigClass").find(".rw-input").text('请选择');
		         $("#knowledgeFaultSmallClass").find(".rw-input").text('请选择');
		    	 $("#knowledgeTheme").val("");
		    	 $("#knowledgePhenomenon").val("");
		    	 $("#knowledgeAnalysis").val("");
		    	 $("#knowledgeSolution").val("");
		         $("#knowledgeAnalysisSum").val("");
             	        
             	dispatch(setFaultSubPid(""));
             	dispatch(setFaultSubId(""));
                dispatch(get_knowledgeManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "添加完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
    }
    }
//刘家顺	20161228 审核通过的知识库数据
export function reviewedPass_knowledgeData(data) {
    return (dispatch, getState) => {
        var state = getState();   
        var id = state.dataDictReducer.faultSubPid;
		var pid = state.dataDictReducer.faultSubId;
		var reviewStatusCode = state.operationReducer.reviewStatusCode
		var putId = state.operationReducer.deleteKnowledgeId;
		console.log('z这是编辑的id')
		console.log(putId)       
//	var param =[knowledgeFaultBigClass,knowledgeFaultSmallClass,knowledgeTheme,knowledgePhenomenon,knowledgeAnalysis,knowledgeSolution,knowledgeAnalysisSum]
//     REVIEWSTATUS 状态码 
		console.log('z这是发布的状态值')
		console.log(reviewStatusCode)   
		var param = {THEME:data[2],KLGBID:putId,REVIEWSTATUS:2,FAULTPHENOMENON:data[3],ANALYSISSUMMARY:data[6],FAULTANALYSIS:data[4],SOLVINGSTEPS:data[5]};
		console.log('z这是编辑的全部值')
		console.log(param)
            dispatch(requestDataActions.setRequest());
			oData.putknowledgeData(param,function(data){
				
	            $("#reviewedknowledgeFaultBigClass").find(".rw-input").text('请选择');
		        $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text('请选择');
		    	$("#reviewedknowledgeTheme").val("");
		    	$("#reviewedknowledgePhenomenon").val("");
		    	 $("#reviewedknowledgeAnalysis").val("");
		    	 $("#reviewedknowledgeSolution").val("");
		    	 $("#reviewedknowledgeAnalysisSum").val("");
             	        
                dispatch(setFaultSubPid(""));
             	dispatch(setFaultSubId(""));
             	dispatch(setReviewStatusCode(""));
                dispatch(setDeleteKnowledgeId(""));
                dispatch(get_knowledgeManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "审核通过"
					$('#publicMessageModal').modal('show');
				},100);
			});
    }
    }

//刘家顺	20161228 不通过审核通过的知识库数据
export function reviewedNo_knowledgeData(data) {
    return (dispatch, getState) => {
        var state = getState();   
        var id = state.dataDictReducer.faultSubPid;
		var pid = state.dataDictReducer.faultSubId;
		var reviewStatusCode = state.operationReducer.reviewStatusCode
		var putId = state.operationReducer.deleteKnowledgeId;
		//var param =[putknowledgeFaultBigClass,putknowledgeFaultSmallClass,putknowledgeTheme,putknowledgePhenomenon,putknowledgeAnalysis,putknowledgeSolution,putknowledgeAnalysisSum,noPassReviewedknowledgerWhyDetail]

		var param = {THEME:data[2],KLGBID:putId,REVIEWSTATUS:1,FAULTPHENOMENON:data[3],ANALYSISSUMMARY:data[6],FAULTANALYSIS:data[4],SOLVINGSTEPS:data[5],REVIEWDESC:data[7]};
		console.log('这是审核不通过的全部值')
		console.log(param)
            dispatch(requestDataActions.setRequest());
			oData.putknowledgeData(param,function(data){
				
	            $("#reviewedknowledgeFaultBigClass").find(".rw-input").text('请选择');
		        $("#reviewedknowledgeFaultSmallClass").find(".rw-input").text('请选择');
		    	$("#reviewedknowledgeTheme").val("");
		    	$("#reviewedknowledgePhenomenon").val("");
		    	 $("#reviewedknowledgeAnalysis").val("");
		    	 $("#reviewedknowledgeSolution").val("");
		    	 $("#reviewedknowledgeAnalysisSum").val("");
             	 $("#noPassReviewedknowledgerWhyDetail").val("");       
                dispatch(setFaultSubPid(""));
             	dispatch(setFaultSubId(""));
             	dispatch(setReviewStatusCode(""));
                dispatch(setDeleteKnowledgeId(""));
                dispatch(get_knowledgeManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "审核不同原因已经写好"
					$('#publicMessageModal').modal('show');
				},100);
			});
    }
    }
//刘家顺	20161226 发布知识库数据
export function put_knowledgeData(data) {
    return (dispatch, getState) => {
        var state = getState();   
        var id = state.dataDictReducer.faultSubPid;
		var pid = state.dataDictReducer.faultSubId;
		var reviewStatusCode = state.operationReducer.reviewStatusCode
		var putId = state.operationReducer.deleteKnowledgeId;
		console.log('z这是编辑的id')
		console.log(putId)       
//	var param =[knowledgeFaultBigClass,knowledgeFaultSmallClass,knowledgeTheme,knowledgePhenomenon,knowledgeAnalysis,knowledgeSolution,knowledgeAnalysisSum]
//     REVIEWSTATUS 状态码 
		console.log('z这是发布的状态值')
		console.log(reviewStatusCode)   
		var param = {THEME:data[2],KLGBID:putId,REVIEWSTATUS:3,FAULTPHENOMENON:data[3],ANALYSISSUMMARY:data[6],FAULTANALYSIS:data[4],SOLVINGSTEPS:data[5]};
		console.log('z这是编辑的全部值')
		console.log(param)
            dispatch(requestDataActions.setRequest());
			oData.putknowledgeData(param,function(data){
				
	            $("#putknowledgeFaultBigClass").find(".rw-input").text('请选择');
		        $("#putknowledgeFaultSmallClass").find(".rw-input").text('请选择');
		    	$("#putknowledgeTheme").val("");
		    	$("#putknowledgePhenomenon").val("");
		    	 $("#putknowledgeAnalysis").val("");
		    	 $("#putknowledgeSolution").val("");
		    	 $("#putknowledgeAnalysisSum").val("");
             	        
                dispatch(setFaultSubPid(""));
             	dispatch(setFaultSubId(""));
             	dispatch(setReviewStatusCode(""));
                dispatch(setDeleteKnowledgeId(""));
                dispatch(get_knowledgeManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "已经发布"
					$('#publicMessageModal').modal('show');
				},100);
			});
    }
    }

//刘家顺	20161228编辑知识库数据

export function edit_knowledgeData(data) {
    return (dispatch, getState) => {
        var state = getState();   
      	var id = state.dataDictReducer.faultSubPid;
		var pid = state.dataDictReducer.faultSubId;
		var deleteKnowledgeId = state.operationReducer.deleteKnowledgeId;
		console.log(id)
        console.log(pid)         
//	var param =[knowledgeFaultBigClass,knowledgeFaultSmallClass,knowledgeTheme,knowledgePhenomenon,knowledgeAnalysis,knowledgeSolution,knowledgeAnalysisSum]
       
		var param = {KLGBID:deleteKnowledgeId,REVIEWSTATUS:0,THEME:data[2],FAULTID:id,FAULTSUBID:pid,FAULTPHENOMENON:data[3],ANALYSISSUMMARY:data[6],FAULTANALYSIS:data[4],SOLVINGSTEPS:data[5],REVIEWDESC:data[7]};
		console.log('这是编辑的id')
		console.log(param)
            dispatch(requestDataActions.setRequest());
			oData.editknowledgeData(param,function(data){
				
	             $("#editknowledgeFaultBigClass").find(".rw-input").text('请选择');
		         $("#editknowledgeFaultSmallClass").find(".rw-input").text('请选择');
		    	 $("#editknowledgeTheme").val("");
		    	 $("#editknowledgePhenomenon").val("");
		    	 $("#editknowledgeAnalysis").val("");
		    	 $("#editknowledgeSolution").val("");
		         $("#editknowledgeAnalysisSum").val("");
             	 $("#editknowledgeReviewDesc").val("");    
             	 
             	dispatch(setFaultSubPid(""));
             	dispatch(setFaultSubId(""));
             	dispatch(setDeleteKnowledgeId(""));
                dispatch(get_knowledgeManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "编辑完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
    }
    }


////刘家顺 20161230 的获取  week,month, quarter, year
//export function get_customerComplaintsDatamonth(){
//  return dispatch => {
//      dispatch(requestDataActions.setRequest());
//      oData.customerComplaintsDatamonth(function(data){
//          dispatch(setCustomerComplaintsDatamonth(data.results));
//          dispatch(requestDataActions.setRequestSuccess());
//      });
//  }
//}
////刘家顺 20161230 的获取quarter
//export function get_customerComplaintsDataquarter(){
//  return dispatch => {
//      dispatch(requestDataActions.setRequest());
//      oData.customerComplaintsDataquarter(function(data){
//          dispatch(setCustomerComplaintsDataquarter(data.results));
//          dispatch(requestDataActions.setRequestSuccess());
//      });
//  }
//}
////刘家顺 20161230 的获取year
//export function get_customerComplaintsDatayear(){
//  return dispatch => {
//      dispatch(requestDataActions.setRequest());
//      oData.customerComplaintsDatayear(function(data){
//          dispatch(setCustomerComplaintsDatayear(data.results));
//          dispatch(requestDataActions.setRequestSuccess());
//      });
//  }
//}
//刘家顺 20170104 客户满意度评分
export function get_customeSatisfactionScoreData(data){
    return dispatch => {
		var param = {QUERYTYPE:data[0],DATATYPE:data[1]};
        dispatch(requestDataActions.setRequest());
        oData.customeSatisfactionScoreData(param,function(data2){
            dispatch(setCustomeSatisfactionScoreData(data2.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//刘家顺 20170105 客户满意度评分
export function get_SLAReachRateData(data){
    return dispatch => {
		var param = {QUERYTYPE:data[0],DATATYPE:data[1]};
        dispatch(requestDataActions.setRequest());
        oData.SLAReachRateData(param,function(data2){
            dispatch(setSLAReachRateData(data2.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//刘家顺 20161230 客户投诉量
export function get_customerComplaintsData(data){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		var param = {DATATYPE:data[1]};
        oData.customerComplaintsData(param,function(data2){
            dispatch(setCustomerComplaintsData(data2.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//刘家顺 20170111 报表管理
export function get_filterSLAReachRateData(data){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		var param = {BEGINTIME:data[0],ENDTIME:data[1]};
        oData.filterSLAReachRateData(param,function(data2){
            dispatch(setFilterSLAReachRateData(data2.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
