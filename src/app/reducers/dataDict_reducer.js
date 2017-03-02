/**
 * 数据字典相关的reducer
 */
import { combineReducers } from 'redux'
import {
    SET_RIGHTDICTPAGE, SET_BRANDDATA, SET_BRANDID, SET_ASSETSSTATUS, SET_ASSETSSTATUID, SET_WORKORDERBOT, SET_UNITDATA, SET_UNITID, SET_PERSONNELMAGTREE,
    SET_ASSETSTYPE, SET_ASSETSTYPEID, SET_FAULTTYPE, SET_FAULTTYPEID, SET_FAULTSUBDATA, SET_UNITSTAFFINFOCID, SET_UNITSTAFFINFODATA, SET_WORKORDERNAMEDATA,
    SET_FAULTSUBID, SET_FAULTSUBPID, SET_CHILDAREAPID, SET_AREADATA, SET_CHILDAREADATA, SET_AREAID, SET_CHILDAREAID, SET_TPDATA, SET_WORKORDERSTATUSDATA, SET_WORKORDERNAMEID, SET_WORKORDERTYPEALLDATA,
  SET_TPID, SET_WORKORDERSTATUSID, SET_SYSTEMINFODATA, SET_BIGSERVICEDATA, SET_BIGSERVICEID, SET_PROJECTID, SET_PROJECTDATA, SET_SMALLSERVICEID, SET_SMALLSERVICEDATA, SET_BIGSERVICEPDATA,SET_BIGSERVICEPID,
  SET_LOCATIONID, SET_LOCATIONDATA, SET_FAULTTYPEDATA, SET_FAULTTYPEBID,SET_FAULTSUBTYPES, SET_EVENTCATEGORYDATA, SET_EVENTCATEGORYID, SET_WORKORDERSOURCEDATA, SET_WORKORDERSOURCEID, SET_FAULTLEVELDATA, SET_FAULTLEVELID,
  SET_UPGRADELEVELDATA, SET_UPGRADELEVELID, SET_DEPARTMENTDATA, SET_POSITIONDATA, SET_POSITIONID, SET_DEPARTMENTID, SET_WORKORDERTYPEDATA, SET_UNITSTAFFINFOPID,
  SET_DEPARTMENTPNAME, SET_DEPARTMENTPID, SET_MAGUNITDATA, SET_PROJECTFIRMDATA, SET_PROJECTFIRMID,SET_SITEVIEWASDDATA,SET_SITEVIEWASDID, SET_PROMAGTREE, SET_PROJECTFIRMPID, SET_FAULTTYPEDETAILDATA, SET_FAULTTYPEDETAILID, SET_UNITTYPEDATA, 
  SET_UNITTYPEID, SET_MAGUNITID, SET_UNITADDRESS, SET_EDITAREASID, SET_EDITMAGUNITTYPESID, SET_EDITMAGUNITID, SET_UNITNAME, SET_UNITNUMBER, SET_WORKORDERTYPEID, SET_EDITMAGUNITRECID,SET_SLACOLORDATA,
  SET_SLACOLORID, SET_UNITTYPEDATATREE, SET_UNITTYPENODESCHECKED, SET_EDITMAGUNITIDTREE, SET_UNITTYPEDATATREEID, SET_EDITAREAID,SET_REGISTERORGANIZATIONID,SET_REGISTERORGANIZATIONDATA,SET_APPLEVRESPONSEDATA,SET_APPLEVRESPONSEID,SET_PRODUCTTYPE,SET_PRODUCTTYPEID,
  SET_CHILDASSETSTYPE,SET_CHILDASSETSTYPEID,SET_PRODUCTCHILDTYPE,SET_PRODUCTCHILDTYPEID
} from '../actions/dataDict_action'

function rightDictPage(state = {id:0,name:"请选择菜单"}, action) {
    switch (action.type) {
        case SET_RIGHTDICTPAGE:
            return action.rightDictPage
        default:
            return state
    }
}

function brandData(state = [], action) {
    switch (action.type) {
        case SET_BRANDDATA:
            return action.brandData
        default:
            return state
    }
}

function brandId(state = "", action) {
    switch (action.type) {
        case SET_BRANDID:
            return action.brandId
        default:
            return state
    }
}

function assetsStatus(state = [], action) {
    switch (action.type) {
        case SET_ASSETSSTATUS:
            return action.assetsStatus
        default:
            return state
    }
}

function assetsStatuId(state = "", action) {
    switch (action.type) {
        case SET_ASSETSSTATUID:
            return action.assetsStatuId
        default:
            return state
    }
}

function assetsType(state = [], action) {
    switch (action.type) {
        case SET_ASSETSTYPE:
            return action.assetsType
        default:
            return state
    }
}

function assetsTypeId(state = "", action) {
    switch (action.type) {
        case SET_ASSETSTYPEID:
            return action.assetsTypeId
        default:
            return state
    }
}

function faultType(state = [], action) {
    switch (action.type) {
        case SET_FAULTTYPE:
            return action.faultType
        default:
            return state
    }
}

function faultTypeData(state = [], action) {
    switch (action.type) {
        case SET_FAULTTYPEDATA:
            return action.faultTypeData
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

function faultTypeBId(state = "", action) {
    switch (action.type) {
        case SET_FAULTTYPEBID:
            return action.faultTypeBId
        default:
            return state
    }
}

function faultSubData(state = [], action) {
    switch (action.type) {
        case SET_FAULTSUBDATA:
            return action.faultSubData
        default:
            return state
    }
}

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

function faultTypeDetailData(state = "", action) {
    switch (action.type) {
        case SET_FAULTTYPEDETAILDATA:
            return action.faultTypeDetailData
        default:
            return state
    }
}

function faultTypeDetailId(state = "", action) {
    switch (action.type) {
        case SET_FAULTTYPEDETAILID:
            return action.faultTypeDetailId
        default:
            return state
    }
}

function areaData(state = [], action) {
    switch (action.type) {
        case SET_AREADATA:
            return action.areaData
        default:
            return state
    }
}

function areaId(state = "", action) {
    switch (action.type) {
        case SET_AREAID:
            return action.areaId
        default:
            return state
    }
}

function tpData(state = [], action) {
    switch (action.type) {
        case SET_TPDATA:
            return action.tpData
        default:
            return state
    }
}

function workOrderStatusData(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERSTATUSDATA:
            return action.workOrderStatusData
        default:
            return state
    }
}


function tpId(state = "", action) {
    switch (action.type) {
        case SET_TPID:
            return action.tpId
        default:
            return state
    }
}
function workOrderStatusId(state = "", action) {
    switch (action.type) {
        case SET_WORKORDERSTATUSID:
            return action.workerOrderStatusId
        default:
            return state
    }
}



function systemInfoData(state = [], action) {
    switch (action.type) {
        case SET_SYSTEMINFODATA:
            return action.systemInfoData
        default:
            return state
    }
}

function childAreaData(state = [], action) {
    switch (action.type) {
        case SET_CHILDAREADATA:
            return action.childAreaData
        default:
            return state
    }
}

function childAreaId(state = [], action) {
    switch (action.type) {
        case SET_CHILDAREAID:
            return action.childAreaId
        default:
            return state
    }
}

function projectId(state = "", action) {
    switch (action.type) {
        case SET_PROJECTID:
            return action.projectId
        default:
            return state
    }
}

function projectData(state = [], action) {
    switch (action.type) {
        case SET_PROJECTDATA:
            return action.projectData
        default:
            return state
    }
}

function bigServiceId(state = "", action) {
    switch (action.type) {
        case SET_BIGSERVICEID:
            return action.bigServiceId
        default:
            return state
	}
}


function bigServiceData(state = [], action) {
    switch (action.type) {
        case SET_BIGSERVICEDATA:
            return action.bigServiceData
        default:
            return state
    }
}

function childAreaPid(state = "", action) {
    switch (action.type) {
        case SET_CHILDAREAPID:
            return action.childAreaPid
        default:
            return state
    }
}

function smallServiceId(state = "", action) {
    switch (action.type) {
        case SET_SMALLSERVICEID:
            return action.smallServiceId
        default:
            return state
	}
}

function smallServiceData(state = [], action) {
    switch (action.type) {
        case SET_SMALLSERVICEDATA:
            return action.smallServiceData
        default:
            return state
    }
}

function bigServicePData(state = [], action) {
    switch (action.type) {
        case SET_BIGSERVICEPDATA:
            return action.bigServicePData
        default:
            return state
	}
}

function bigServicePId(state = "", action) {
    switch (action.type) {
        case SET_BIGSERVICEPID:
            return action.bigServicePId
        default:
            return state
    }
}

function locationId(state = "", action) {
    switch (action.type) {
        case SET_LOCATIONID:
            return action.locationId
        default:
            return state
    }
}

function locationData(state = "", action) {
    switch (action.type) {
        case SET_LOCATIONDATA:
            return action.locationData
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
//曹志强    20161208 事件类型管理Data reducer
function eventCategoryData(state = [], action) {
    switch (action.type) {
        case SET_EVENTCATEGORYDATA:
            return action.eventCategoryData
        default:
            return state
    }
}
//曹志强    20161208 事件类型管理Id reducer
function eventCategoryId(state = "", action) {
    switch (action.type) {
        case SET_EVENTCATEGORYID:
            return action.eventCategoryId
        default:
            return state
    }
}
//曹志强    20161208 工单来源Data reducer
function workOrderSourceData(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERSOURCEDATA:
            return action.workOrderSourceData
        default:
            return state
    }
}
//曹志强    20161208 工单来源Id reducer
function workOrderSourceId(state = "", action) {
    switch (action.type) {
        case SET_WORKORDERSOURCEID:
            return action.workOrderSourceId
        default:
            return state
    }
}

//明长然  20161209  故障级别Data reducer
function faultLevelData(state = [], action) {
    switch (action.type){
        case SET_FAULTLEVELDATA:
            return action.faultLevelData;
        default:
            return state;
    }
}

//明长然  20161209  故障级别ID reducer
function faultLevelId(state = "", action) {
    switch (action.type){
        case SET_FAULTLEVELID:
            return action.faultLevelId;
        default:
            return state;
    }
}

//明长然  20161209  升级级别Data reducer
function upgradeLevelData(state = [], action) {
    switch (action.type){
        case SET_UPGRADELEVELDATA:
            return action.upgradeLevelData;
        default:
            return state;
    }
}

//明长然  20161209  升级级别ID reducer
function upgradeLevelId(state = "", action) {
    switch (action.type){
        case SET_UPGRADELEVELID:
            return action.upgradeLevelId;
        default:
            return state;
    }
}

//明长然  20161209  工单类型Data reducer
function workOrderTypeData(state = [], action) {
    switch (action.type){
        case SET_WORKORDERTYPEDATA:
            return action.workOrderTypeData;
        default:
            return state;
    }
}

//明长然  20161209  工单类型ID reducer
function workOrderTypeId(state = "", action) {
    switch (action.type) {
        case SET_WORKORDERTYPEID:
            return action.workOrderTypeId;
        default:
            return state;
    }
}

//明长然  20161209  所属项目Name reducer
function workOrderBot(state = "", action) {
    switch (action.type) {
        case SET_WORKORDERBOT:
            return action.workOrderBot;
        default:
            return state;
    }
}

//明长然  20161212  单位人员Pid reducer
function unitStaffInfoPid(state = "", action) {
    switch (action.type) {
        case SET_UNITSTAFFINFOPID:
            return action.unitStaffInfoPid;
        default:
            return state;
    }
}

//明长然  20161212  单位人员Cid reducer
function unitStaffInfoCid(state = "", action) {
    switch (action.type) {
        case SET_UNITSTAFFINFOCID:
            return action.unitStaffInfoCid;
        default:
            return state;
    }
}

//明长然  20161212  单位人员Data reducer
function unitStaffInfoData(state = [], action) {
    switch (action.type) {
        case SET_UNITSTAFFINFODATA:
            return action.unitStaffInfoData;
        default:
            return state;
    }
}

function unitData(state = [], action) {
    switch (action.type) {
        case SET_UNITDATA:
            return action.unitData;
        default:
            return state;
    }
}

function unitId(state = "", action) {
    switch (action.type) {
        case SET_UNITID:
            return action.unitId;
        default:
            return state;
    }
}

//明长然  20161214  将PersonnelMagTree.js放入reducer
function personnelMagTree(state = [], action) {
    switch (action.type) {
        case SET_PERSONNELMAGTREE:
            return action.personnelMagTree;
        default:
            return state;
    }
}
function workOrderNameData(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERNAMEDATA:
            return action.workOrderNameData;
        default:
            return state;
    }
}

function workOrderNameId(state = "", action) {
    switch (action.type) {
        case SET_WORKORDERNAMEID:
            return action.workOrderNameId;
        default:
            return state;
    }
}

function workOrderTypeAllData(state = [], action) {
    switch (action.type) {
        case SET_WORKORDERTYPEALLDATA:
            return action.workOrderTypeAllData;
        default:
            return state;
    }
}
//刘家顺1208部门管理数据
function departMentData(state = [], action) {
    switch (action.type) {
        case SET_DEPARTMENTDATA:
            return action.departMentData
        default:
            return state
    }
}
//刘家顺1208部门管理id
function departMentId(state = "", action) {
    switch (action.type) {
        case SET_DEPARTMENTID:
            return action.departMentId
        default:
            return state
    }
}
//刘家顺1209职位管理
function positionData(state = [], action) {
    switch (action.type) {
        case SET_POSITIONDATA:
            return action.positionData
        default:
            return state
    }
}

//刘家顺1209职位管理id
function positionId(state = "", action) {
    switch (action.type) {
        case SET_POSITIONID:
            return action.positionId
        default:
            return state
    }
}
//刘家顺1210职位管理 （部门id）
function departMentPid(state = "", action) {
    switch (action.type) {
        case SET_DEPARTMENTPID:
            return action.departMentPid
        default:
            return state
    }
}
//刘家顺1210职位管理（部门名字）
function departMentPname(state = "", action) {
    switch (action.type) {
        case SET_DEPARTMENTPNAME:
            return action.departMentPname
        default:
            return state
    }
}
//曹志强    20161208 项目管理Data reducer
function projectFirmData(state = [], action) {
    switch (action.type) {
        case SET_PROJECTFIRMDATA:
            return action.projectFirmData
        default:
            return state
    }
}
//曹志强    20161208 项目管理Id reducer
function projectFirmId(state = "", action) {
    switch (action.type) {
        case SET_PROJECTFIRMID:
            return action.projectFirmId
        default:
            return state
    }
}
//曹志强    20161208 项目管理Id reducer
function projectFirmPid(state = "", action) {
    switch (action.type) {
        case SET_PROJECTFIRMPID:
            return action.projectFirmPid
        default:
            return state
    }
}
//曹志强    20161208 厂商信息DATA reducer
function siteviewasdData(state = [], action) {
    switch (action.type) {
        case SET_SITEVIEWASDDATA:
            return action.siteviewasdData
        default:
            return state
    }
}
//曹志强    20161208 厂商信息ID reducer
function siteviewasdId(state = [], action) {
    switch (action.type) {
        case SET_SITEVIEWASDID:
            return action.siteviewasdId
        default:
            return state
    }
}
//曹志强    20161211 将projectManageTree.js放入reducer中
function proMagTree(state = [], action) {
    switch (action.type) {
        case SET_PROMAGTREE:
            return action.proMagTree
        default:
            return state
    }
}
//曹志强    20161213 创建工单类型管理DataReducer
function unitTypeData(state = [], action) {
    switch (action.type) {
        case SET_UNITTYPEDATA:
            return action.unitTypeData
        default:
            return state
    }
}
//曹志强    20161213 创建工单类型管理DataReducer
function unitTypeId(state = [], action) {
    switch (action.type) {
        case SET_UNITTYPEID:
            return action.unitTypeId
        default:
            return state
    }
}

//刘家顺 20161213单位管理
function magUnitData(state = "", action) {
    switch (action.type) {
        case SET_MAGUNITDATA:
            return action.magUnitData
        default:
            return state
    }
}
//刘家顺   20161213删除单位的id
function magUnitId(state = "", action) {
    switch (action.type) {
        case SET_MAGUNITID:
            return action.magUnitId
        default:
            return state
    }
}
//刘家顺   20161213删除单位的id1
function unitName(state = "", action) {
    switch (action.type) {
        case SET_UNITNAME:
            return action.unitName
        default:
            return state
    }
}
//刘家顺   20161213编辑单位的id2
function unitNumber(state = "", action) {
    switch (action.type) {
        case SET_UNITNUMBER:
            return action.unitNumber
        default:
            return state
    }
}
//刘家顺   20161213编辑单位单位的id3
function unitAddress(state = "", action) {
    switch (action.type) {
        case SET_UNITADDRESS:
            return action.unitAddress
        default:
            return state
    }
}
////刘家顺   20161213单位管理删除单位的id4?父id
//function editAreaId(state = "", action) {
//  switch (action.type) {
//      case SET_EDITAREAID:
//          return action.editAreaId
//      default:
//          return state
//  }
//}
//刘家顺   20161213单位管理删除单位的子区域ID
function editAreasId(state = "", action) {
    switch (action.type) {
        case SET_EDITAREASID:
            return action.editAreasId
        default:
            return state
    }
}
//刘家顺   20161213编辑单位5
function editMagUnitTypesId(state = "", action) {
    switch (action.type) {
        case SET_EDITMAGUNITTYPESID:
            return action.editMagUnitTypesId
        default:
            return state
    }
}
//刘家顺   20161213编辑单位6
function editMagUnitId(state = "", action) {
    switch (action.type) {
        case SET_EDITMAGUNITID:
            return action.editMagUnitId
        default:
            return state
    }
}
//刘家顺   2016121399999999999999
function editMagUnitIdTree(state = "", action) {
    switch (action.type) {
        case SET_EDITMAGUNITIDTREE:
            return action.editMagUnitIdTree
        default:
            return state
    }
}
//刘家顺   20161213编辑单位 目标单位id
function editMagUnitRecId(state = "", action) {
    switch (action.type) {
        case SET_EDITMAGUNITRECID:
            return action.editMagUnitRecId
        default:
            return state
    }
}
//程艳鸿1214SLA颜色
function slaColorData(state = [], action) {
    switch (action.type) {
        case SET_SLACOLORDATA:
            return action.slaColorData
        default:
            return state
    }
}
//程艳鸿1214SLA颜色
function slaColorId (state = "", action){
	switch (action.type){
		case SET_SLACOLORID:
			return action.slaColorId
		default:
			return state
	}
}
////刘家顺 20170119 树
function unitTypeDataTree(state = [], action) {
    switch (action.type) {
        case SET_UNITTYPEDATATREE:
            return action.unitTypeDataTree
        default:
            return state
    }
}
////刘家顺 20170120 树
function unitTypeNodesChecked(state = [], action) {
    switch (action.type) {
        case SET_UNITTYPENODESCHECKED:
            return action.unitTypeNodesChecked
        default:
            return state
    }
}
//刘家顺 20170122 树的值，传过id 的树的值 后台说 是多余的
function unitTypeDataTreeId(state = [], action) {
    switch (action.type) {
        case SET_UNITTYPEDATATREEID:
            return action.unitTypeDataTreeId
        default:
            return state
    }
}
function registerOrganizationData(state = [], action) {
    switch (action.type){
        case SET_REGISTERORGANIZATIONDATA:
            return action.registerOrganizationData;
        default:
            return state;
    }
}
function registerOrganizationId(state = "", action) {
    switch (action.type){
        case SET_REGISTERORGANIZATIONID:
            return action.registerOrganizationId;
        default:
            return state;
    }
}
//曹志强		20170203	应用响应界别管理reducer
function applevreSponseData(state = "", action) {
    switch (action.type){
        case SET_APPLEVRESPONSEDATA:
            return action.applevreSponseData;
        default:
            return state;
    }
}
//曹志强		20170203	应用响应界别管理reducer
function applevreSponseId(state = "", action) {
    switch (action.type){
        case SET_APPLEVRESPONSEID:
            return action.applevreSponseId;
        default:
            return state;
    }
}
//曹志强		20170203	产品类型管理reducer
function productType(state = [], action) {
    switch (action.type){
        case SET_PRODUCTTYPE:
            return action.productType;
        default:
            return state;
    }
}
//曹志强		20170203	产品类型管理reducer
function productTypeId(state = [], action) {
    switch (action.type){
        case SET_PRODUCTTYPEID:
            return action.productTypeId;
        default:
            return state;
    }
}
//曹志强		20170203	产品类型管理reducer
function productChildType(state = [], action) {
    switch (action.type){
        case SET_PRODUCTCHILDTYPE:
            return action.productChildType;
        default:
            return state;
    }
}
//曹志强		20170203	产品类型管理reducer
function productChildTypeId(state = "", action) {
    switch (action.type){
        case SET_PRODUCTCHILDTYPEID:
            return action.productChildTypeId;
        default:
            return state;
    }
}
//曹志强		20170206	子资产类型管理reducer
function childAssetsType(state = [], action) {
    switch (action.type){
        case SET_CHILDASSETSTYPE:
            return action.childAssetsType;
        default:
            return state;
    }
}
//曹志强		20170206	子资产类型管理reducer
function childAssetsTypeId(state = "", action) {
    switch (action.type){
        case SET_CHILDASSETSTYPEID:
            return action.childAssetsTypeId;
        default:
            return state;
    }
}
const dataDictReducer = combineReducers({
    rightDictPage,
    brandData,
    brandId,
    assetsStatus,
    assetsStatuId,
    assetsType,
    assetsTypeId,
    faultType,
    faultTypeId,
    faultSubData,
    faultSubId,
    faultSubPid,
    childAreaData,
    childAreaId,
    childAreaPid,
    areaData,
    areaId,
    tpData,
    workOrderStatusData,
    tpId,
    workOrderStatusId,
    systemInfoData,
    bigServiceData,
    bigServiceId,
    projectId,
    projectData,
    smallServiceId,
    smallServiceData,
    bigServicePId,
    bigServicePData,
    locationId,
    locationData,
    faultSubTypes,
    eventCategoryData,
    eventCategoryId,
    workOrderSourceData,
    workOrderSourceId,
    faultLevelData,
    faultLevelId,
    upgradeLevelData,
    upgradeLevelId,
    workOrderTypeData,
    workOrderTypeId,
    workOrderBot,
    unitStaffInfoCid,
    unitStaffInfoPid,
    unitStaffInfoData,
    unitData,
    unitId,
    workOrderNameId,
    workOrderNameData,
    workOrderTypeAllData,
    personnelMagTree,
    departMentData,
    positionData,
    departMentId,
    positionId,
    departMentPid,
    departMentPname,
    projectFirmData,
    projectFirmId,
    siteviewasdData,
    siteviewasdId,
    proMagTree,
    faultTypeDetailData,
    faultTypeDetailId,
    unitTypeData,
    unitTypeId,
     magUnitData,
    magUnitId,
    unitName,
    unitNumber,
    unitAddress,
    editAreasId,
//  editAreaId,
    editMagUnitTypesId,
    editMagUnitId,
     editMagUnitRecId,
    slaColorData,
    slaColorId,
    unitTypeDataTree,
    unitTypeNodesChecked,
    editMagUnitIdTree,
    unitTypeDataTreeId,
    registerOrganizationId,
    registerOrganizationData,
    applevreSponseData,
    applevreSponseId,
    productType,
    productTypeId,
    childAssetsType,
    childAssetsTypeId,
    productChildType,
    productChildTypeId
})

export default dataDictReducer
