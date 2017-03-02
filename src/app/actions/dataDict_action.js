/**
 * 数据字典相关action
 */
var oData = require('../server/odataDict');
import * as requestDataActions from './requestData_action'

export const SET_RIGHTDICTPAGE = 'SET_RIGHTDICTPAGE'
export const SET_BRANDDATA = 'SET_BRANDDATA'
export const SET_BRANDID = 'SET_BRANDID'
export const SET_ASSETSSTATUS = 'SET_ASSETSSTATUS'
export const SET_ASSETSSTATUID = 'SET_ASSETSSTATUID'
export const SET_ASSETSTYPE = 'SET_ASSETSTYPE'
export const SET_ASSETSTYPEID = 'SET_ASSETSTYPEID'
export const SET_CHILDASSETSTYPE = 'SET_CHILDASSETSTYPE'
export const SET_CHILDASSETSTYPEID = 'SET_CHILDASSETSTYPEID'
export const SET_PRODUCTTYPE = 'SET_PRODUCTTYPE'
export const SET_PRODUCTCHILDTYPE = 'SET_PRODUCTCHILDTYPE'
export const SET_PRODUCTTYPEID = 'SET_PRODUCTTYPEID'
export const SET_PRODUCTCHILDTYPEID = 'SET_PRODUCTCHILDTYPEID'
export const SET_FAULTTYPE = 'SET_FAULTTYPE'
export const SET_FAULTTYPEID = 'SET_FAULTTYPEID'
export const SET_FAULTSUBDATA = 'SET_FAULTSUBDATA'
export const SET_FAULTSUBID = 'SET_FAULTSUBID'
export const SET_FAULTSUBPID = 'SET_FAULTSUBPID'
export const SET_FAULTTYPEDETAILDATA = 'SET_FAULTTYPEDETAILDATA'
export const SET_FAULTTYPEDETAILID = 'SET_FAULTTYPEDETAILID'
export const SET_AREADATA = 'SET_AREADATA'
export const SET_DEPARTMENTDATA = 'SET_DEPARTMENTDATA'
export const SET_AREAID = 'SET_AREAID'
export const SET_DEPARTMENTID = 'SET_DEPARTMENTID'

export const SET_CHILDAREAID = 'SET_CHILDAREAID'
export const SET_CHILDAREADATA = 'SET_CHILDAREADATA'
export const SET_TPDATA = 'SET_TPDATA'
export const SET_WORKORDERSTATUSDATA = 'SET_WORKORDERSTATUSDATA'
export const SET_TPID = 'SET_TPID'
export const SET_WORKORDERSTATUSID = 'SET_WORKORDERSTATUSID'
export const SET_SYSTEMINFODATA = 'SET_SYSTEMINFODATA'
export const SET_CHILDAREAPID = 'SET_CHILDAREAPID'
export const SET_BIGSERVICEID = 'SET_BIGSERVICEID'
export const SET_BIGSERVICEDATA = 'SET_BIGSERVICEDATA'
export const SET_PROJECTID = 'SET_PROJECTID'
export const SET_PROJECTDATA = 'SET_PROJECTDATA'
export const SET_SMALLSERVICEID = 'SET_SMALLSERVICEID'
export const SET_SMALLSERVICEDATA = 'SET_SMALLSERVICEDATA'
export const SET_BIGSERVICEPID = 'SET_BIGSERVICEPID'
export const SET_BIGSERVICEPDATA = 'SET_BIGSERVICEPDATA'
export const SET_LOCATIONID = "SET_LOCATIONID"
export const SET_LOCATIONDATA = "SET_LOCATIONDATA"
export const SET_FAULTTYPEDATA = "SET_FAULTTYPEDATA"
export const SET_FAULTTYPEBID = "SET_FAULTTYPEBID"
export const SET_FAULTSUBTYPES = "SET_FAULTSUBTYPES"
export const SET_EVENTCATEGORYDATA = "SET_EVENTCATEGORYDATA"
export const SET_EVENTCATEGORYID = "SET_EVENTCATEGORYID"
export const SET_WORKORDERSOURCEDATA = "SET_WORKORDERSOURCEDATA"
export const SET_WORKORDERSOURCEID = "SET_WORKORDERSOURCEID"
export const SET_FAULTLEVELDATA = "SET_FAULTLEVELDATA"
export const SET_FAULTLEVELID = "SET_FAULTLEVELID"
export const SET_UPGRADELEVELDATA = "SET_UPGRADELEVELDATA"
export const SET_UPGRADELEVELID = "SET_UPGRADELEVELID"
export const SET_DEPARTMENTPID = "SET_DEPARTMENTPID"
export const SET_DEPARTMENTPNAME = "SET_DEPARTMENTPNAME"
export const SET_POSITIONDATA = 'SET_POSITIONDATA'
export const SET_POSITIONID = 'SET_POSITIONID'
export const SET_PROJECTFIRMDATA = "SET_PROJECTFIRMDATA"
export const SET_PROJECTFIRMID = "SET_PROJECTFIRMID"
export const SET_PROJECTFIRMPID = "SET_PROJECTFIRMPID"
export const SET_SITEVIEWASDDATA = "SET_SITEVIEWASDDATA"
export const SET_SITEVIEWASDID = "SET_SITEVIEWASDID"
export const SET_PROMAGTREE = "SET_PROMAGTREE"
export const SET_UNITTYPEDATA = "SET_UNITTYPEDATA"
export const SET_UNITTYPEID = "SET_UNITTYPEID"

export const SET_UNITNAME = 'SET_UNITNAME'
export const SET_UNITNUMBER = 'SET_UNITNUMBER'
export const SET_UNITADDRESS = 'SET_UNITADDRESS'
export const SET_EDITAREASID = 'SET_EDITAREASID'
//export const SET_EDITMAGUNITTYPESID = 'SET_EDITMAGUNITTYPESID'
export const SET_EDITMAGUNITID = 'SET_EDITMAGUNITID'
export const SET_MAGUNITDATA = 'SET_MAGUNITDATA'
export const SET_MAGUNITID = 'SET_MAGUNITID'
export const SET_UNITSTAFFINFODATA = 'SET_UNITSTAFFINFODATA'
export const SET_UNITSTAFFINFOPID = 'SET_UNITSTAFFINFOPID'
export const SET_UNITSTAFFINFOCID = 'SET_UNITSTAFFINFOCID'
export const SET_UNITDATA = 'SET_UNITDATA'
export const SET_UNITID = "SET_UNITID"
export const SET_WORKORDERNAMEDATA = "SET_WORKORDERNAMEDATA"
export const SET_WORKORDERNAMEID = "SET_WORKORDERNAMEID"
export const SET_WORKORDERTYPEALLDATA = "SET_WORKORDERTYPEALLDATA"
export const SET_PERSONNELMAGTREE = "SET_PERSONNELMAGTREE"
export const SET_WORKORDERTYPEDATA = "SET_WORKORDERTYPEDATA"
export const SET_WORKORDERTYPEID = "SET_WORKORDERTYPEID"
export const SET_WORKORDERBOT = "SET_WORKORDERBOT"
export const SET_EDITMAGUNITRECID = 'SET_EDITMAGUNITRECID'
export const SET_SLACOLORDATA = 'SET_SLACOLORDATA'
export const SET_SLACOLORID = "SET_SLACOLORID"
export const SET_UNITTYPEDATATREE = 'SET_UNITTYPEDATATREE'
export const SET_UNITTYPENODESCHECKED = 'SET_UNITTYPENODESCHECKED'
export const SET_UNITTYPEDATATREEID = 'SET_UNITTYPEDATATREEID'
export const SET_EDITMAGUNITIDTREE = 'SET_EDITMAGUNITIDTREE'
export const SET_EDITAREAID = 'SET_EDITAREAID'
export const SET_REGISTERORGANIZATIONDATA = "SET_REGISTERORGANIZATIONDATA";
export const SET_REGISTERORGANIZATIONID = "SET_REGISTERORGANIZATIONID";
export const SET_APPLEVRESPONSEDATA = "SET_APPLEVRESPONSEDATA"
export const SET_APPLEVRESPONSEID = "SET_APPLEVRESPONSEID"

export function setRightDictPage(rightDictPage) {
    return {
        type: SET_RIGHTDICTPAGE,
        rightDictPage
    }
}

export function setBrandData(brandData) {
    return {
        type: SET_BRANDDATA,
        brandData
    }
}

export function setBrandId(brandId) {
    return {
        type: SET_BRANDID,
        brandId
    }
}

export function setAssetsStatus(assetsStatus) {
    return {
        type: SET_ASSETSSTATUS,
        assetsStatus
    }
}

export function setAssetsStatuId(assetsStatuId) {
    return {
        type: SET_ASSETSSTATUID,
        assetsStatuId
    }
}

export function setAssetsType(assetsType) {
    return {
        type: SET_ASSETSTYPE,
        assetsType
    }
}

export function setAssetsTypeId(assetsTypeId) {
    return {
        type: SET_ASSETSTYPEID,
        assetsTypeId
    }
}

export function setChildAssetsType(childAssetsType) {
    return {
        type: SET_CHILDASSETSTYPE,
        childAssetsType
    }
}

export function setChildAssetsTypeId(childAssetsTypeId) {
    return {
        type: SET_CHILDASSETSTYPEID,
        childAssetsTypeId
    }
}

export function setProductType(productType) {
    return {
        type: SET_PRODUCTTYPE,
        productType
    }
}
export function setProductChildType(productChildType) {
    return {
        type: SET_PRODUCTCHILDTYPE,
        productChildType
    }
}
export function setProductTypeId(productTypeId) {
    return {
        type: SET_PRODUCTTYPEID,
        productTypeId
    }
}
export function setProductChildTypeId(productChildTypeId) {
    return {
        type: SET_PRODUCTCHILDTYPEID,
        productChildTypeId
    }
}
export function setFaultType(faultType) {
    return {
        type: SET_FAULTTYPE,
        faultType
    }
}

export function setFaultTypeData(faultType) {
    return {
        type: SET_FAULTTYPEDATA,
        faultTypeData
    }
}

export function setFaultTypeBID(faultType) {
    return {
        type: SET_FAULTTYPEBID,
        faultTypeBId
    }
}

export function setFaultTypeId(faultTypeId) {
    return {
        type: SET_FAULTTYPEID,
        faultTypeId
    }
}

export function setFaultSubData(faultSubData) {
    return {
        type: SET_FAULTSUBDATA,
        faultSubData
    }
}

export function setFaultSubId(faultSubId) {
    return {
        type: SET_FAULTSUBID,
        faultSubId
    }
}

export function setFaultSubPid(faultSubPid) {
    return {
        type: SET_FAULTSUBPID,
        faultSubPid
    }
}

export function setFaultTypeDetailData(faultTypeDetailData) {
    return {
        type: SET_FAULTTYPEDETAILDATA,
        faultTypeDetailData
    }
}

export function setFaultTypeDetailId(faultTypeDetailId) {
    return {
        type: SET_FAULTTYPEDETAILID,
        faultTypeDetailId
    }
}

export function setChildAreaPid(childAreaPid) {
    return {
        type: SET_CHILDAREAPID,
        childAreaPid
    }
}

export function setAreaData(areaData) {
    return {
        type: SET_AREADATA,
        areaData
    }
}

export function setAreaId(areaId) {
    return {
        type: SET_AREAID,
        areaId
    }
}

export function setChildAreaId(childAreaId) {
    return {
        type: SET_CHILDAREAID,
        childAreaId
    }
}

export function setChildAreaData(childAreaData) {
    return {
        type: SET_CHILDAREADATA,
        childAreaData
    }
}

export function setTpData(tpData) {
    return {
        type: SET_TPDATA,
        tpData
    }
}

export function setWorkOrderStatusData(workOrderStatusData) {
    return {
        type: SET_WORKORDERSTATUSDATA,
        workOrderStatusData
    }
}

export function setTpId(tpId) {
    return {
        type: SET_TPID,
        tpId
    }
}

export function setWorkOrderStatusId(workerOrderStatusId) {
    return {
        type: SET_WORKORDERSTATUSID,
        workerOrderStatusId
    }
}


export function setSystemInfoData(systemInfoData) {
    return {
        type: SET_SYSTEMINFODATA,
        systemInfoData
    }
}

export function setBigServiceData(bigServiceData) {
    return {
        type: SET_BIGSERVICEDATA,
        bigServiceData
    }
}

export function setBigServiceId(bigServiceId) {
    return {
        type: SET_BIGSERVICEID,
        bigServiceId
    }
}

export function setBigServicePData(bigServicePData) {
    return {
        type: SET_BIGSERVICEPDATA,
        bigServicePData
    }
}

export function setBigServicePId(bigServicePId) {
    return {
        type: SET_BIGSERVICEPID,
        bigServicePId
    }
}

export function setSmallServiceData(smallServiceData) {
    return {
        type: SET_SMALLSERVICEDATA,
        smallServiceData
    }
}

export function setSmallServiceId(smallServiceId) {
    return {
        type: SET_SMALLSERVICEID,
        smallServiceId
    }
}


export function setProjectId(projectId) {
    return {
        type: SET_PROJECTID,
        projectId
    }
}

export function setProjectData(projectData) {
    return {
        type: SET_PROJECTDATA,
        projectData
    }
}

export function setLocationId(locationId) {
    return {
        type: SET_LOCATIONID,
        locationId
    }
}

export function setLocationData(locationData) {
    return {
        type: SET_LOCATIONDATA,
        locationData
    }
}

export function setFaultSubTypes(faultSubTypes) {
    return {
        type: SET_FAULTSUBTYPES,
        faultSubTypes
    }
}

//曹志强  20161208	创建事件类型管理Data action
export function setEventCategoryData(eventCategoryData) {
    return {
        type: SET_EVENTCATEGORYDATA,
        eventCategoryData
    }
}
//曹志强  20161208	创建事件类型管理Id action
export function setEventCategoryId(eventCategoryId) {
    return {
        type: SET_EVENTCATEGORYID,
        eventCategoryId
    }
}
//曹志强  20161208	创建工单来源管理Data action
export function setWorkOrderSourceData(workOrderSourceData) {
    return {
        type: SET_WORKORDERSOURCEDATA,
        workOrderSourceData
    }
}
//曹志强  20161208	创建工单来源管理Id action
export function setWorkOrderSourceId(workOrderSourceId) {
    return {
        type: SET_WORKORDERSOURCEID,
        workOrderSourceId
    }
}

//明长然  20161209  创建故障级别管理Data action
export function setFaultLevelData(faultLevelData) {
    return {
        type: SET_FAULTLEVELDATA,
        faultLevelData
    }
}

//明长然 20161209 创建故障级别管理ID action
export function setFaultLevelId(faultLevelId) {
    return {
        type: SET_FAULTLEVELID,
        faultLevelId
    }
}

//明长然 20161209 创建升级级别管理Data action
export function setUpgradeLevelData(upgradeLevelData) {
    return {
        type: SET_UPGRADELEVELDATA,
        upgradeLevelData
    }
}

//明长然 20161209 创建升级级别管理ID action
export function setUpgradeLevelId(upgradeLevelId) {
    return {
        type: SET_UPGRADELEVELID,
        upgradeLevelId
    }
}

//明长然 20161209 创建工单类型管理Data action
export function setWorkOrderTypeData(workOrderTypeData) {
    return {
        type: SET_WORKORDERTYPEDATA,
        workOrderTypeData
    }
}

//明长然 20161209 创建工单类型管理ID action
export function setWorkOrderTypeId(workOrderTypeId) {
    return {
        type: SET_WORKORDERTYPEID,
        workOrderTypeId
    }
}

//明长然 20161209 创建所属项目Name action
export function setWorkOrderBot(workOrderBot) {
    return {
        type: SET_WORKORDERBOT,
        workOrderBot
    }
}

//明长然  20161212  创建单位人员管理DATA action
export function setUnitStaffInfoData(unitStaffInfoData) {
    return {
        type: SET_UNITSTAFFINFODATA,
        unitStaffInfoData
    }
}

//明长然  20161212 创建单位人员管理Pid action
export function setUnitStaffInfoPid(unitStaffInfoPid) {
    return {
        type:SET_UNITSTAFFINFOPID,
        unitStaffInfoPid
    }
}

//明长然  20161212  创建单位人员管理Cid action
export function setUnitStaffInfoCid(unitStaffInfoCid) {
    return {
        type:SET_UNITSTAFFINFOCID,
        unitStaffInfoCid
    }
}

export function setUnitData(unitData) {
    return {
        type: SET_UNITDATA,
        unitData
    }
}

export function setUnitId(unitId) {
    return {
        type: SET_UNITID,
        unitId
    }
}

export function setWorkOrderNameData(workOrderNameData) {
    return {
        type: SET_WORKORDERNAMEDATA,
        workOrderNameData
    }
}

export function setWorkOrderNameId(workOrderNameId) {
    return {
        type: SET_WORKORDERNAMEID,
        workOrderNameId
    }
}

export function setWorkOrderTypeAllData(workOrderTypeAllData) {
    return {
        type: SET_WORKORDERTYPEALLDATA,
        workOrderTypeAllData
    }
}

export function setPersonnelMagTree(personnelMagTree) {
    return {
        type: SET_PERSONNELMAGTREE,
        personnelMagTree
    }
}
//刘家顺	20161209部门管理
export function setDepartMentPid(departMentPid) {
    return {
        type: SET_DEPARTMENTPID,
        departMentPid
    }
}
//刘家顺	20161209职位管理
export function setDepartMentPname(departMentPname) {
    return {
        type: SET_DEPARTMENTPNAME,
        departMentPname
    }
}
//刘家顺	20161209职位管理
export function setDepartMentData(departMentData) {
    return {
        type: SET_DEPARTMENTDATA,
        departMentData
    }
}
//刘家顺	20161209职位管理
export function setPositionData(positionData) {
    return {
        type: SET_POSITIONDATA,
        positionData
    }
}
//刘家顺	20161209部门管理
export function setDepartMentId(departMentId) {
    return {
        type: SET_DEPARTMENTID,
        departMentId
    }
}
//刘家顺	20161209职位管理id
export function setPositionId(positionId) {
    return {
        type: SET_POSITIONID,
        positionId
    }
}
//曹志强  20161208	创建项目管理Data action
export function setProjectFirmData(projectFirmData) {
    return {
        type: SET_PROJECTFIRMDATA,
        projectFirmData
    }
}
//曹志强  20161208	创建项目管理Id action
export function setProjectFirmId(projectFirmId) {
    return {
        type: SET_PROJECTFIRMID,
        projectFirmId
    }
}
//曹志强  20161208	创建项目管理Id action
export function setProjectFirmPId(projectFirmPid) {
    return {
        type: SET_PROJECTFIRMPID,
        projectFirmPid
    }
}
//曹志强  20161208	创建厂商信息DATA action
export function setSiteviewasdData(siteviewasdData) {
    return {
        type: SET_SITEVIEWASDDATA,
        siteviewasdData
    }
}
//曹志强  20161208	创建厂商信息ID action
export function setSiteviewasdId(siteviewasdId) {
    return {
        type: SET_SITEVIEWASDID,
        siteviewasdId
    }
}
//曹志强    20161211 将projectManageTree.js放入reducer中
export function setProMagTree(proMagTree) {
    return {
        type: SET_PROMAGTREE,
        proMagTree
    }
}
//程艳鸿 20161214 SLA颜色提醒管理
export function setSlaColorData(slaColorData) {
    return {
        type: SET_SLACOLORDATA,
        slaColorData
    }
}
//程艳鸿 20161214 SLA颜色提醒管理
export function setSlaColorId(slaColorId) {
	return{
		type: SET_SLACOLORID,
		slaColorId
	}
}
//曹志强    20161212 创建工单类型管理获取数据Action
export function setUnitTypeData(unitTypeData) {
    return {
        type: SET_UNITTYPEDATA,
        unitTypeData
    }
}
//曹志强    20161212 创建工单类型管理获取数据Action
export function setUnitTypeId(unitTypeId) {
    return {
        type: SET_UNITTYPEID,
        unitTypeId
    }
}
//曹志强    20161212 创建创建组织机构及角色数据Action
export function setOrganizationData(organizationData) {
    return {
        type: SET_ORGANIZATIONDATA,
        organizationData
    }
}
//曹志强    20161212 创建创建组织机构及角色数据ID Action
export function setOrganizationId(organizationId) {
    return {
        type: SET_ORGANIZATIONID,
        organizationId
    }
}
//刘家顺	20161213单位管理
export function setMagUnitData(magUnitData) {
    return {
        type: SET_MAGUNITDATA,
        magUnitData
    }
}
//刘家顺	20161213删除单位管理
export function setMagUnitId(magUnitId) {
    return {
        type: SET_MAGUNITID,
        magUnitId
    }
}
//刘家顺	20161213编辑单位管理 接口传值1
export function setUnitName(unitName) {
    return {
        type: SET_UNITNAME,
        unitName
    }
}
//刘家顺	20161213编辑单位管理 接口传值2
export function setUnitNumber(unitNumber) {
    return {
        type:SET_UNITNUMBER,
        unitNumber
    }
}
//刘家顺	20161213编辑单位管理 接口传值3
export function setUnitAddress(unitAddress) {
    return {
        type: SET_UNITADDRESS,
        unitAddress
    }
}
////刘家顺	20161213编辑单位管理 接口传值4区域id??父区域id
//export function setEditAreaId(editAreaId) {
//  return {
//      type: SET_EDITAREAID,
//      editAreaId
//  }
//}
//刘家顺	20161213编辑单位管理 接口传值4区域id??????????/子区域的id
export function setEditAreasId(editAreasId) {
    return {
        type: SET_EDITAREASID,
        editAreasId
    }
}
//刘家顺	20161213编辑单位管理 接口传值5
//export function setEditMagUnitTypesId(editMagUnitTypesId) {
//  return {
//      type: SET_EDITMAGUNITTYPESID,
//      editMagUnitTypesId
//  }
//}
//刘家顺 20161216编辑单位recid 目标单位id
export function setEditMagUnitRecId(editMagUnitRecId) {
    return {
        type: SET_EDITMAGUNITRECID,
        editMagUnitRecId
    }
}
//刘家顺	20161213编辑单位管理 接口传值6
export function setEditMagUnitId(editMagUnitId) {
    return {
        type: SET_EDITMAGUNITID,
        editMagUnitId
    }
}
//  999 99 9999
export function setEditMagUnitIdTree(editMagUnitIdTree) {
    return {
        type: SET_EDITMAGUNITIDTREE,
        editMagUnitIdTree
    }
}
//刘家顺	20170119  单位管理树
export function setUnitTypeDataTree(unitTypeDataTree) {
    return {
        type: SET_UNITTYPEDATATREE,
        unitTypeDataTree
    }
}
////刘家顺	20170119  单位管理树有id 的值   后台说 是多余
export function setUnitTypeDataTreeId(unitTypeDataTreeId) {
    return {
        type: SET_UNITTYPEDATATREEID,
        unitTypeDataTreeId
    }
}

//刘家顺	20170119  单位管理树处理后的值树
export function setUnitTypeNodesChecked(unitTypeNodesChecked) {
    return {
        type: SET_UNITTYPENODESCHECKED,
        unitTypeNodesChecked
    }
}
export function setRegisterOrganizationData(registerOrganizationData) {
    return {
        type: SET_REGISTERORGANIZATIONDATA,
        registerOrganizationData
    }
}
export function setRegisterOrganizationId(registerOrganizationId) {
    return {
        type: SET_REGISTERORGANIZATIONID,
        registerOrganizationId
    }
}
//曹志强		20170203	应用响应界别管理数据Action
export function setApplevreSponseData(applevreSponseData) {
    return {
        type: SET_APPLEVRESPONSEDATA,
        applevreSponseData
    }
}
//曹志强		20170203	应用响应界别管理数据Action
export function setApplevreSponseId(applevreSponseId) {
    return {
        type: SET_APPLEVRESPONSEID,
        applevreSponseId
    }
}
export function get_brandData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getBrandData(function(data){
			var results = data.results;
            dispatch(setBrandData(results));
            dispatch(setBrandId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function save_brandData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.brandId;
		var brands = state.dataDictReducer.brandData;
		for(var i=0;i<brands.length;i++){
			var bname = brands[i].BrandName;
			if(data == bname){
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "品牌名称已存在"
                    $('#publicMessageModal').modal('show');
                },100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,BrandName:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.editBrandData(param,function(data2){
				$("#brandNameInput").val("");
                dispatch(setBrandId(""));
				dispatch(get_brandData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
		}else{
			var param = {BrandName:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.addBrandData(param,function(data2){
				$("#brandNameInput").val("");
                dispatch(setBrandId(""));
				dispatch(get_brandData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
		}
    }
}

export function delete_brandData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.brandId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteBrandData(id,function(data2){
			$("#brandNameInput").val("");
            dispatch(setBrandId(""));
            dispatch(get_brandData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function get_productTypes() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getProductTypes(function(data){
			var results = data.results;
			if(results.length > 0){
				dispatch(setProductType(eval(results[0].PRODUCTTYPE)));
	            dispatch(setProductTypeId(""));
	            dispatch(requestDataActions.setRequestSuccess());
			}
		});
    }
}

export function get_productChildTypes() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getProductChildTypes(function(data){
			var results = data.results;
			if(results.length > 0){
				var result = eval(results[0].PRODUCTTYPE);
				console.log(result);
				dispatch(setProductChildType(result));
	            dispatch(setProductChildTypeId(""));
	            dispatch(requestDataActions.setRequestSuccess());
			}
		});
    }
}

export function save_productType(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.productTypeId;
		var brands = state.dataDictReducer.productType;
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].typeName;
				var bcode = brands[i].codeName;
				var braid = brands[i].recId;
				if(data[0] == bname && id != braid){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "产品父类型名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
//				if(data[1] == bcode && id != braid){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "资产类型代号已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
			}
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].typeName;
				var bcode = brands[i].codeName;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "产品父类型名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
//				if(data[1] == bcode){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "资产类型代号已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
			}
		}
		if(id!=null && id!=""){
			var param = {RECID:id,CODENAME:data[1],TYPENAME:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.editProductTypes(param,function(data2){
                $("#productTypeNameEditInput").val("");
                $("#productTypeCodeEditInput").val("");
                dispatch(setProductTypeId(""));
                dispatch(get_productTypes());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {CODENAME:data[1],TYPENAME:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.addProductTypes(param,function(data2){
                $("#productTypeNameInput").val("");
                $("#productTypeCodeInput").val("");
                dispatch(setProductTypeId(""));
                dispatch(get_productTypes());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function save_productChildType(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.productTypeId;
        var childId = state.dataDictReducer.productChildTypeId;
		var brands = state.dataDictReducer.productChildType;
		if(childId!=null && childId!=""){
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].typeName;
				var bcode = brands[i].codeName;
				var braid = brands[i].recId;
				if(data[0] == bname && childId != braid){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "产品子类型名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
//				if(data[1] == bcode && childId != braid){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "产品子类型代号已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
			}
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].typeName;
				var bcode = brands[i].codeName;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "产品子类型名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
//				if(data[1] == bcode){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "产品子类型代号已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
			}
		}
		if(childId!=null && childId!=""){
			var param = {RECID:childId,CODENAME:data[1],TYPENAME:data[0],PARENTID:id};
            dispatch(requestDataActions.setRequest());
			oData.editProductTypes(param,function(data2){
                $("#productChildTypeNameEditInput").val("");
                $("#productChildTypeCodeEditInput").val("");
                dispatch(setProductTypeId(""));
                dispatch(setProductChildTypeId(""));
            	dispatch(get_productChildTypes());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {CODENAME:data[1],TYPENAME:data[0],PARENTID:id};
            dispatch(requestDataActions.setRequest());
			oData.addProductTypes(param,function(data2){
                $("#productChildTypeNameInput").val("");
                $("#productChildTypeCodeInput").val("");
                dispatch(setProductTypeId(""));
                dispatch(setProductChildTypeId(""));
            	dispatch(get_productChildTypes());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function delete_productType() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.productTypeId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteProductTypes(id,function(data2){
			$("#productTypeNameInput").val("");
            $("#productTypeCodeInput").val("");
            $("#productTypeNameEditInput").val("");
            $("#productTypeCodeEditInput").val("");
            dispatch(setProductTypeId(""));
            dispatch(get_productTypes());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function delete_productChildType() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.productChildTypeId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteProductTypes(id,function(data2){
			$("#productChildTypeNameInput").val("");
            $("#productChildTypeCodeInput").val("");
            $("#productChildTypeNameEditInput").val("");
            $("#productChildTypeCodeEditInput").val("");
            dispatch(setProductChildTypeId(""));
            dispatch(get_productChildTypes());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function get_sysFaultType() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getSysFaultType(function(data){
			var results = data.results;
            dispatch(setFaultType(results));
            dispatch(setFaultTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function save_sysFaultType(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.faultTypeId;
		var brands = state.dataDictReducer.faultType;
		for(var i=0;i<brands.length;i++){
			var bname = brands[i].FaultName;
			if(data == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "故障大类名称已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,FaultName:data};
            dispatch(requestDataActions.setRequest());
			oData.editSysFaultType(param,function(data2){
				$("#editFaultClassModal").val("");
                dispatch(setFaultTypeId(""));
                dispatch(get_sysFaultType());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {FaultName:data};
            dispatch(requestDataActions.setRequest());
			oData.addSysFaultType(param,function(data2){
				$("#addFaultClassModal").val("");
                dispatch(setFaultTypeId(""));
                dispatch(get_sysFaultType());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function delete_sysFaultType() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.faultTypeId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteSysFaultType(id,function(data2){
			$("#sysFaultTypeNameInput").val("");
            dispatch(setFaultTypeId(""));
            dispatch(get_sysFaultType());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function save_faultTypeDetailData(name) {
    return (dispatch, getState) => {
        var state = getState();
        
		var brands = state.dataDictReducer.faultTypeDetailData;		
		var pId = state.dataDictReducer.faultSubPid;
		var cId = state.dataDictReducer.faultSubId;
		var id = state.dataDictReducer.faultTypeDetailId;
		if(pId == null || pId == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择故障大类"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
		if(cId == null || cId == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择故障细类"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}		
		if(name == null || name == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请填写故障类型名称"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
		for(var i=0;i<brands.length;i++){
			var bname = brands[i].FNAME;
			if(name == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "故障类型名称已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,TypeName:name,FaultClassificationId:cId};
            dispatch(requestDataActions.setRequest());
			oData.editFaultTypeDetailData(param,function(data2){
				$("#editFaultTypeDetailNameInput").val("");               
                dispatch(setFaultSubPid(""));             
                dispatch(setFaultSubId(""));
                dispatch(setFaultTypeDetailId(""));
                dispatch(get_faultTypeDetailData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {TypeName:name,FaultClassificationId:cId};
            dispatch(requestDataActions.setRequest());
			oData.addFaultTypeDetailData(param,function(data2){
				$("#faultTypeDetailNameInput").val("");
                dispatch(setFaultSubPid(""));             
                dispatch(setFaultSubId(""));
                dispatch(setFaultTypeDetailId(""));
                dispatch(get_faultTypeDetailData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
export function delete_faultTypeDetailData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.faultTypeDetailId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteFaultTypeDetailData(id,function(data2){
			console.log(data2);
			$("#faultTypeDetailInput").val("");
            dispatch(setFaultTypeDetailId(""));
            dispatch(get_faultTypeDetailData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function get_faultTypeDetailAllData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getSysFaultSubType(function(data){
			var results = data.results;
			var dataList = [];
			var list1 = [];
			var pId = ""; 
			var old_pId = "";
			if(results.length>0){
				var result = JSON.parse(results[0].FAULTS);
				if(result != null && result != "" && result.length >= 0){
					for(var i=0;i<result.length;i++){
						if(result[i].pId == old_pId){
							list1.push({cId:result[i].cId,cName:result[i].cName})
						
						}else{
							if(old_pId != ""){
								dataList.push({pId:result[i-1].pId,pName:result[i-1].pName,list1:list1});
								var list1 = [];
							}
							list1.push({cId:result[i].cId,cName:result[i].cName})
						}
						old_pId = result[i].pId;
					}
				}
				dataList.push({pId:result[result.length-1].pId,pName:result[result.length-1].pName,list1:list1});
                dispatch(setFaultSubData(dataList));
                dispatch(setFaultSubPid(""));
                dispatch(setFaultSubId(""));
                dispatch(requestDataActions.setRequestSuccess());
                                  $("#knowledgeFaultBigClass").find(".rw-input").text("请选择");
				 $("#knowledgeFaultSmallClass").find(".rw-input").text("请选择");
			};
		});
    }
}

export function get_sysFaultSubType() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getSysFaultSubType(function(data){
			var results = data.results;
			if(results.length>0){
				var result = results[0].FAULTS;
				var faults = eval(result);
                dispatch(setFaultSubData(faults));
                dispatch(setFaultSubPid(""));
                dispatch(setFaultSubId(""));
                dispatch(requestDataActions.setRequestSuccess());
			};
		});
    }
}

export function get_childAreaData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getChildAreaData(function(data){
			var results = data.results;
			if(results.length>0){
				var result = results[0].FAULTS;
				var faults = eval(result);
                dispatch(setChildAreaData(faults));
                dispatch(setChildAreaPid(""));
                dispatch(setChildAreaId(""));
                dispatch(requestDataActions.setRequestSuccess());
			};
		});
    }
}

export function get_bigServiceData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getBigServiceData(function(data){
			var results = data.results;
			if(results.length>0){
				var result = results[0].FAULTS;
				var faults = eval(result);
                dispatch(setBigServiceData(faults));
                dispatch(setBigServiceId(""));
                dispatch(requestDataActions.setRequestSuccess());
			};
		});
    }
}

export function get_smallServiceData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getSmallServiceData(function(data){
			var results = data.results;
			if(results.length>0){
				var result = results[0].FAULTS;
				var faults = eval(result);
                dispatch(setSmallServiceData(faults));
                dispatch(setSmallServiceId(""));
                dispatch(requestDataActions.setRequestSuccess());
			};
		});
    }
}

export function get_faultTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getFaultTypeData(function(data){
			var results = data.results;
			if(results.length>0){
				var result = results[0].FAULTS;
				var faults = eval(result);
                dispatch(setFaultTypeData(faults));
                dispatch(ssetFaultTypeBId(""));
                dispatch(requestDataActions.setRequestSuccess());
			};
		});
    }
}

export function get_projectData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getProjectData(function(data){
            dispatch(setProjectData(data.results));
            dispatch(setProjectId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function get_faultTypeDetailData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getFaultTypeDetailData(function(data){
            dispatch(setFaultTypeDetailData(data.results));
            dispatch(setFaultTypeDetailId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function get_bigServicePData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getBigServicePData(function(data){
            dispatch(setBigServicePData(data.results));
            dispatch(setBigServicePId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强		20170203	获得资产物理位置数据
export function get_locationData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getLocationData(function(data){
            dispatch(setLocationData(data.results));
            dispatch(setLocationId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function save_sysFaultSubType(name) {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.faultSubId;
		var pid = state.dataDictReducer.faultSubPid;
		if(pid == null || pid == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择故障大类"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
		var brands = state.dataDictReducer.faultSubData;
		if(name == null || name == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请填写故障细类名称"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}		
		for(var i=0;i<brands.length;i++){
			var bname = brands[i].cName;
			var bpid = brands[i].pId;
			if(name == bname && pid == bpid){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "该故障大类下的故障细类名称已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,FaultName:name,ParentID:pid};
            dispatch(requestDataActions.setRequest());
			oData.editSysFaultType(param,function(data2){
                $("#editParentMagSelect").find(".rw-input").text("");
                $("#editFaultClaSmaNameInput").val("");
                dispatch(setFaultSubPid(""));
                dispatch(setFaultSubId(""));
                dispatch(get_sysFaultSubType());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {FaultName:name,ParentID:pid};
            dispatch(requestDataActions.setRequest());
			oData.addSysFaultType(param,function(data2){
				$("#parentMagSelect").find(".rw-input").text("");
                $("#faultClaSmaNameInput").val("");
                dispatch(setFaultSubPid(""));
                dispatch(setFaultSubId(""));
                dispatch(get_sysFaultSubType());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function delete_sysFaultSubType() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.faultSubId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteSysFaultType(id,function(data2){
			$("#faultTypeSelect").find(".rw-input").text("");
            $("#faultSubTypeNameInput").val("");
            dispatch(setFaultSubPid(""));
            dispatch(setFaultSubId(""));
            dispatch(get_sysFaultSubType());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

//加载故障类型级联菜单
export function init_faultSubData(param){
	return (dispatch, getState) => {
		var dataList = [];
		var state = getState();
        var proMag = state.dataDictReducer.faultSubData;
        var data = state.dataDictReducer.proMagTree;
        var fdRecIds = param.split(",");
		if(fdRecIds != null && fdRecIds != "" && fdRecIds.length >= 0){
			for(var i=0;i<proMag.length;i++){
                var mark = false;
                for(var j=0;j<fdRecIds.length;j++){
                    if(proMag[i].FDRECID.indexOf(fdRecIds[j])>=0){
                        mark = true;
                        break;
                    }
                }
                if(mark){
                    dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0,checked:true});
                }else{
                    dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0});
                }
            }
		}else{
            for(var i=0;i<proMag.length;i++){
                dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0});
            }
        }
        data.initTree(dataList);
		
	}
}




export function get_areaData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getAreaData(function(data){
            dispatch(setAreaData(data.results));
            dispatch(setAreaId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//20161222 刘家顺单位管理获取二级联动
export function get_areaSubData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getAreaSubData(function(data){
		var result = data.results;
		var magList = [];
		var magSubList = [];
		var pId = ""; 
		var old_cId = "";
		if(result.length>0){
			if(result != null && result != "" && result.length>= 0){
				for(var i=0;i<result.length;i++){
					//拼父、子区域结果集
					if(result[i].ParentGroupId==""){
						magSubList = [];
						for(var j=0;j<result.length;j++){
							if(result[i].RecId == result[j].ParentGroupId && result[j].ParentGroupId != ""){
								magSubList.push({cId:result[j].RecId,cName:result[j].Name});
							}
						}
						magList.push({pId:result[i].RecId,pName:result[i].Name,magSubList:magSubList});
					}
				}
				console.log(magList)
			}
		}
        dispatch(setAreaData(magList));
        dispatch(setAreaId(""));
        dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
export function save_areaData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.areaId;
		var brands = state.dataDictReducer.areaData;
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bid = brands[i].RecId;
				var bname = brands[i].Name;
				var bcode = brands[i].Code;
				if(data[0] == bname && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "区域名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == bcode && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "区域代号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {RecId:id,Name:data[0],AreaDesc:data[2],Code:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.editAreaData(param,function(data2){
				$("#editAreaNameInput").val("");
                $("#editAreaCodeInput").val("");
                $("#editAreaDescInput").val("");
                dispatch(setAreaId(""));
                dispatch(get_areaData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].Name;
				var bcode = brands[i].Code;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "区域名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == bcode){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "区域代号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {Name:data[0],AreaDesc:data[2],Code:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.addAreaData(param,function(data2){
				$("#areaNameInput").val("");
                $("#areaCodeInput").val("");
                $("#areaDescInput").val("");
                dispatch(setAreaId(""));
                dispatch(get_areaData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
////部门管理
//export function get_departMentData() {
//  return dispatch => {
//      dispatch(requestDataActions.setRequest());
//		oData.getDepartMentData(function(data){
//          dispatch(setDepartMentData(data.results));
//          dispatch(setDepartMentId(""));
//          dispatch(requestDataActions.setRequestSuccess());
//		});
//  }
//}
////删除部门部门管理
//export function delete_departMentData() {
//  return (dispatch, getState) => {
//      var state = getState();
//		var id = state.dataDictReducer.departMentId;
//		if(id==null || id==""){
//			setTimeout(function(){
//				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
//				$('#publicMessageModal').modal('show');
//			},100);
//			return false;
//		};
//      dispatch(requestDataActions.setRequest());
//		oData.deletedepartMentData(id,function(data2){
//			$("#departMentNameInput").val("");
//			$("#departMentCodeInput").val("");
//          dispatch(setDepartMentId(""));
//          dispatch(get_departMentData());
//          dispatch(requestDataActions.setRequestSuccess());
//			setTimeout(function(){
//				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
//				$('#publicMessageModal').modal('show');
//			},100);
//		});
//  }
//}
////判断部门部门管理
//export function save_departMentData(data) {
//  return (dispatch, getState) => {
//      var state = getState();
//      var id = state.dataDictReducer.departMentId;
//		var brands = state.dataDictReducer.departMentData;
//		if(id!=null && id!=""){
//			for(var i=0;i<brands.length;i++){
//				var bid = brands[i].RecId;
//				var bname = brands[i].DepartmentCode;
//				var bcode = brands[i].DepartmentName;
//				if(data[0] == bname && bid != id){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
//				if(data[1] == bcode && bid != id){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
//			}
//			var param = {RecId:id,DepartmentCode:data[0],DepartmentName:data[1]};
//          dispatch(requestDataActions.setRequest());
//			oData.editDepartMentData(param,function(data2){
//				$("#editDepartMentNameInput").val("");
//              $("#editDepartMentCodeInput").val("");
//              dispatch(setDepartMentId(""));
//              dispatch(get_departMentData());
//              dispatch(requestDataActions.setRequestSuccess());
//				setTimeout(function(){
//					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
//					$('#publicMessageModal').modal('show');
//				},100);
//			});
//		}else{
//			for(var i=0;i<brands.length;i++){
//				var bname = brands[i].DepartmentCode;
//				var bcode = brands[i].DepartmentName;
//				if(data[0] == bname){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
//				if(data[1] == bcode){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
//			}
//			var param = {DepartmentCode:data[0],DepartmentName:data[1]};
//          dispatch(requestDataActions.setRequest());
//			oData.addDepartMentData(param,function(data2){
//				$("#departMentNameInput").val("");
//              $("#departMentCodeInput").val("");
//              dispatch(setDepartMentId(""));
//              dispatch(get_departMentData());
//              dispatch(requestDataActions.setRequestSuccess());
//				setTimeout(function(){
//					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
//					$('#publicMessageModal').modal('show');
//				},100);
//			});
//		}
//  }
//}

export function save_childAreaData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.childAreaId;
		var brands = state.dataDictReducer.childAreaData;
		var pid = state.dataDictReducer.childAreaPid;

		if(pid == null || pid == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择父区域名称"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}

		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var cid = brands[i].recId;
				var cname = brands[i].childAreaName;
				var ccode = brands[i].childAreaCode;
				if(data[0] == cname && cid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "子区域名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}

				for(var i=0;i<brands.length;i++){
					var bname = brands[i].childAreaName;
					var bcode = brands[i].childAreaCode;
					if(data == bname && pid == bcode){
						setTimeout(function(){
							document.getElementById('publicMessageModelTitle').innerHTML = "提示"
							document.getElementById('publicMessageModalcontent').innerHTML = "该父区域下子区域已存在"
							$('#publicMessageModal').modal('show');
						},100);
						return false;
					}
				}

				if(data[1] == ccode && cid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "子区域代号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {RecId:id, Name:data[0],AreaDesc:data[2],Code:data[1], "ParentGroupId":pid};

            dispatch(requestDataActions.setRequest());
			oData.editChildAreaData(param,function(data2){
			$("#editParentMagSelect").find(".rw-input").text("");
                $("#editChildNameInput").val("");
                $("#editChildCodeInput").val("");
                $("#editChildDescInput").val("");
                dispatch(setChildAreaPid(""));
                dispatch(setChildAreaId(""));
                dispatch(get_childAreaData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var cname = brands[i].childAreaName;
				var ccode = brands[i].childAreaCode;
				if(data[0] == cname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "子区域名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == ccode){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "子区域代号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {Name:data[0],AreaDesc:data[2],Code:data[1], "ParentGroupId":pid};
            dispatch(requestDataActions.setRequest());
			oData.addChildAreaData(param,function(data2){
				 // $("#parentMagSelect").find(".rw-input").text("");
         $("#childNameInput").val("");
         $("#childCodeInput").val("");
         $("#childDescInput").val("");
         dispatch(setChildAreaPid(""));
        dispatch(setChildAreaId(""));
        dispatch(get_childAreaData());
        dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function save_bigServiceData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.bigServiceId;
		var brands = state.dataDictReducer.bigServiceData;
		var pid = state.dataDictReducer.projectId;

		if(pid == null || pid == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择项目名称"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}

		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var cid = brands[i].bigServiceId;
				var cname = brands[i].bigServiceName;
				if(data[1] == cname && cid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "服务大类已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}

				for(var i=0;i<brands.length;i++){
					var bname = brands[i].bigServiceName;
					var bcode = brands[i].projectRecId;
					if(data == bname && pid == bcode){
						setTimeout(function(){
							document.getElementById('publicMessageModelTitle').innerHTML = "提示"
							document.getElementById('publicMessageModalcontent').innerHTML = "该项目下服务大类已存在"
							$('#publicMessageModal').modal('show');
						},100);
						return false;
					}
				}
			}
			var param = {RecId:id, Name:data[0],"ProjectRecId":pid};

            dispatch(requestDataActions.setRequest());
			oData.editBigServiceData(param,function(data2){
		$("#proCatgoryEditSelect").find(".rw-input").text("");
                $("#editCatgoryInput").val("");
                dispatch(setProjectId(""));
                dispatch(setBigServiceId(""));
                dispatch(get_bigServiceData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var cname = brands[i].bigServiceName;
				if(data[1] == cname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "服务大类已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {Name:data[0],"ProjectRecId":pid};
            dispatch(requestDataActions.setRequest());
			oData.addBigServiceData(param,function(data2){
	 $("#proCatgorySelect").find(".rw-input").text("");
         $("#catgoryInput").val("");
         dispatch(setProjectId(""));
         dispatch(setBigServiceId(""));
         dispatch(get_bigServiceData());
        dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function save_smallServiceData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.smallServiceId;
		var brands = state.dataDictReducer.smallServiceData;
		var pid = state.dataDictReducer.bigServicePId;

		if(pid == null || pid == ""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择服务大类名称"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}

		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var cid = brands[i].smallServiceId;
				var cname = brands[i].smallServiceName;
				if(data[1] == cname && cid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "服务细类已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}

				for(var i=0;i<brands.length;i++){
					var bname = brands[i].smallServiceName;
					var bcode = brands[i].bigServicePId;
					if(data == bname && pid == bcode){
						setTimeout(function(){
							document.getElementById('publicMessageModelTitle').innerHTML = "提示"
							document.getElementById('publicMessageModalcontent').innerHTML = "该项目下服务细类已存在"
							$('#publicMessageModal').modal('show');
						},100);
						return false;
					}
				}
			}
			var param = {RecId:id, Name:data[0],"CatalogRecId":pid};

            dispatch(requestDataActions.setRequest());
			oData.editSmallServiceData(param,function(data2){
                $("#catgoryClaSelectEdit").find(".rw-input").text("");
                $("#editSmallServiceNameInput").val("");
                dispatch(setBigServicePId(""));
                dispatch(setSmallServiceId(""));
                dispatch(get_smallServiceData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var cname = brands[i].smallServiceName;
				if(data[1] == cname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "服务细类已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {Name:data[0],"CatalogRecId":pid};
            dispatch(requestDataActions.setRequest());
			oData.addSmallServiceData(param,function(data2){
                $("#catgoryClaSelect").find(".rw-input").text("");
                $("#smallServiceNameInput").val("");
                dispatch(setBigServicePId(""));
                dispatch(setSmallServiceId(""));
                dispatch(get_smallServiceData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
//曹志强		20170203	添加或编辑资产物理位置数据
export function save_locationData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.locationId;
		var brands = state.dataDictReducer.locationData;
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bid = brands[i].RecId;
				var bname = brands[i].LocationName;
				if(data == bname && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "该物理位置已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {RecId:id,"LocationName":data[0]};
            dispatch(requestDataActions.setRequest());
			oData.editLocationData(param,function(data2){
				$("#locationNameInput").val("");
        dispatch(setLocationId(""));
        dispatch(get_locationData());
        dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].LocationName;
				if(data == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "该物理位置已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {"LocationName":data[0]};
            dispatch(requestDataActions.setRequest());
			oData.addLocationData(param,function(data2){
				$("#locationNameInput").val("");
        dispatch(setLocationId(""));
        dispatch(get_locationData());
        dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}

export function delete_areaData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.areaId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteAreaData(id,function(data2){
			$("#areaNameInput").val("");
			$("#areaCodeInput").val("");
			$("#areaDescInput").val("");
            dispatch(setAreaId(""));
            dispatch(get_areaData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function delete_projectData() {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.projectId;
        if(id==null || id==""){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
                $('#publicMessageModal').modal('show');
            },100);
            return false;
        };
        dispatch(requestDataActions.setRequest());
        oData.deleteProjectData(id,function(data2){
            $("#areaNameInput").val("");
            $("#areaCodeInput").val("");
            $("#areaDescInput").val("");
            dispatch(setProjectId(""));
            dispatch(get_projectData());
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}

export function delete_parentAreaData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.areaId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteAreaData(id,function(data2){
			$("#areaNameInput").val("");
			$("#areaCodeInput").val("");
			$("#areaDescInput").val("");
            dispatch(setAreaId(""));
            dispatch(get_areaData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function delete_childAreaData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.childAreaId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteAreaData(id,function(data2){
			$("#parentAreaNameInput").val("");
			$("#childAreaNameInput").val("");
			$("#childAreaCodeInput").val("");
			$("#childAreaDescInput").val("");
			dispatch(setChildAreaPid(""));
      dispatch(setChildAreaId(""));
      dispatch(get_childAreaData());
      dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function delete_bigServiceData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.bigServiceId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
      oData.deleteBigServiceData(id,function(data2){
      $("#bigServiceNameInput").val("");
      dispatch(setProjectId(""));
      dispatch(setBigServiceId(""));
      dispatch(get_bigServiceData());
      dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function delete_smallServiceData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.smallServiceId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
      oData.deleteSmallServiceData(id,function(data2){
      $("#bigServiceNameInput").val("");
      dispatch(setBigServicePId(""));
      dispatch(setSmallServiceId(""));
      dispatch(get_smallServiceData());
      dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强		20170203	删除资产物理位置数据
export function delete_locationData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.locationId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteLocationData(id,function(data2){
			$("#locationNameInput").val("");
      dispatch(setLocationId(""));
      dispatch(get_locationData());
      dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

export function get_tpData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getTpData(function(data){
            dispatch(setTpData(data.results));
            dispatch(setTpId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

//获取工单状态
export function get_WorkOrderStatusData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getWorkOrderStatusData(function(data){
            dispatch(setWorkOrderStatusData(data.results));
            dispatch(setWorkOrderStatusId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function save_tpData(data) {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.tpId;
		if(id != null && id != ""){
			data.RecId = id;
            dispatch(requestDataActions.setRequest());
			oData.editTpData(data,function(result){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
				$("#tpNameInput").val("");
				$("#tpValueInput").val("");
				$("#tpDescInput").val("");
                dispatch(get_tpData());
                dispatch(requestDataActions.setRequestSuccess());
			});
		}else{
            dispatch(requestDataActions.setRequest());
			oData.addTpData(data,function(result){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
				$("#tpNameInput").val("");
				$("#tpValueInput").val("");
				$("#tpDescInput").val("");
                dispatch(get_tpData());
                dispatch(requestDataActions.setRequestSuccess());
			});
		}
    }
}

//保存工单状态
export function save_workOrderStatusData(data) {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.workOrderStatusId;
		if(id != null && id != ""){
			data.RecId = id;
            dispatch(requestDataActions.setRequest());
			oData.editDictionaryData(data,function(result){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
				$("#tpNameInput").val("");
				$("#tpValueInput").val("");
                dispatch(get_WorkOrderStatusData());
                dispatch(requestDataActions.setRequestSuccess());
			});
		}else{
            dispatch(requestDataActions.setRequest());
			oData.addDictionaryData(data,function(result){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
				$("#tpNameInput").val("");
				$("#tpValueInput").val("");
                dispatch(get_WorkOrderStatusData());
                dispatch(requestDataActions.setRequestSuccess());
			});
		}
    }
}
export function delete_workOrderStatusData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.workOrderStatusId;
        dispatch(requestDataActions.setRequest());
		oData.deleteDictionaryData(id,function(data){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
			$("#tpNameInput").val("");
			$("#tpValueInput").val("");
            dispatch(get_WorkOrderStatusData());
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function delete_tpData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.tpId;
        dispatch(requestDataActions.setRequest());
		oData.deleteTpData(id,function(data){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
			$("#tpNameInput").val("");
			$("#tpValueInput").val("");
			$("#tpDescInput").val("");
            dispatch(get_tpData());
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

export function get_systemInfoData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getSystemInfoData(function(result){
            dispatch(setSystemInfoData(result.results));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

//故障子类型
export function getFaultSubBType(id){
  return dispatch=>{
    dispatch(requestDataActions.setRequest());
    oData.getFaultSubBType(id,(code,data)=>{
      if(code == "ok"){
        var faultData = data.results;
        var dataList = [];
        for(var i=0;i<faultData.length;i++){
          var data = {id:faultData[i].RecId,name:faultData[i].FaultName};
          dataList.push(data);
        }
        //this.faultSubTypes = dataList;
        dispatch(setFaultSubTypes(dataList));
        dispatch(requestDataActions.setRequestSuccess());
      }
    });
  }
 }
//曹志强  20161208 查询事件类型管理数据
export function get_eventCategoryData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getEventCategoryData(function(data){
			var results = data.results;
            dispatch(setEventCategoryData(results));
            dispatch(setEventCategoryId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强  20161208 增加和编辑事件类型管理数据
export function save_eventCategoryData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.eventCategoryId;
		var eventCategoryData = state.dataDictReducer.eventCategoryData;
		for(var i=0;i<eventCategoryData.length;i++){
			var bname = eventCategoryData[i].Name;
			if(data == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "事件类型已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,Name:data[0], EventCategoryDesc: data[1]};
            dispatch(requestDataActions.setRequest());
			oData.editEventCategoryData(param,function(data2){
				$("#eventCategoryNameEditInput").val("");
				$("#eventCategoryDescEditInput").val("");
                dispatch(setEventCategoryId(""));
                dispatch(get_eventCategoryData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {Name:data[0], EventCategoryDesc: data[1]};
            dispatch(requestDataActions.setRequest());
			oData.addEventCategoryData(param,function(data2){
				$("#eventCategoryNameAddInput").val("");
				$("#eventCategoryDescAddInput").val("");
                dispatch(setEventCategoryId(""));
                dispatch(get_eventCategoryData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
//曹志强  20161208 删除事件类型管理数据
export function delete_eventCategoryData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.eventCategoryId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteEventCategoryData(id,function(data2){
			$("#eventCategoryNameAddInput").val("");
			$("#eventCategoryDescAddInput").val("");
			$("#eventCategoryNameEditInput").val("");
			$("#eventCategoryDescEditInput").val("");
            dispatch(setEventCategoryId(""));
            dispatch(get_eventCategoryData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强  20161208 查询事件来源管理数据
export function get_workOrderSourceData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getWorkOrderSourceData(function(data){
			var results = data.results;
            dispatch(setWorkOrderSourceData(results));
            dispatch(setWorkOrderSourceId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强  20161208 增加和编辑事件类型管理数据
export function save_workOrderSourceData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.workOrderSourceId;
		var workOrderSourceData = state.dataDictReducer.workOrderSourceData;
		for(var i=0;i<workOrderSourceData.length;i++){
			var bname = workOrderSourceData[i].Name;
			if(data == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "工单来源名称已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,Name:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.editWorkOrderSourceData(param,function(data2){
				$("#workOrderSourceNameEditInput").val("");
                dispatch(setWorkOrderSourceId(""));
                dispatch(get_workOrderSourceData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {Name:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.addWorkOrderSourceData(param,function(data2){
				$("#workOrderSourceNameAddInput").val("");
                dispatch(setWorkOrderSourceId(""));
                dispatch(get_workOrderSourceData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
//曹志强  20161208 删除事件类型管理数据
export function delete_workOrderSourceData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.workOrderSourceId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteWorkOrderSourceData(id,function(data2){
			$("#workOrderSourceNameEditInput").val("");
			$("#workOrderSourceNameAddInput").val("");
            dispatch(setWorkOrderSourceId(""));
            dispatch(get_workOrderSourceData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//明长然  20161209  查询故障级别数据
export function get_faultLevelData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getFaultLevelData(function(data){
            var results = data.results;
            dispatch(setFaultLevelData(results));
            dispatch(setFaultLevelId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

//明长然  20161209  增加和编辑故障级别数据
export function save_faultLevelData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.faultLevelId;
        var faultLevelData = state.dataDictReducer.faultLevelData;
        if(id!=null && id!=""){
            for(var i=0;i<faultLevelData.length;i++){
                var bid = faultLevelData[i].RecId;
                var bname = faultLevelData[i].Name;
                if(data == bname && bid==id){
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "该故障级别已存在"
                        $('#publicMessageModal').modal('show');
                    },100);
                    return false;
                }
            }
            var param = {RecId:id,Name:data[0]};
            dispatch(requestDataActions.setRequest());
            oData.editFaultLevelData(param,function(data2){
                $("#faultLevelNameEditInput").val("");
                dispatch(setFaultLevelId(""));
                dispatch(get_faultLevelData());
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
        }else{
            for(var i=0;i<faultLevelData.length;i++) {
                var bname = faultLevelData[i].Name;
                if (data == bname) {
                    setTimeout(function () {
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "该故障级别已存在"
                        $('#publicMessageModal').modal('show');
                    }, 100);
                    return false;
                }
            }
            var param = {Name:data[0]};
            dispatch(requestDataActions.setRequest());
            oData.addFaultLevelData(param,function(data2){
                $("#faultLevelNameAddInput").val("");
                dispatch(setFaultLevelId(""));
                dispatch(get_faultLevelData());
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
        }
    }
}

//明长然  20161209  删除故障级别数据
export function delete_faultLevelData() {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.faultLevelId;
        if(id==null || id==""){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
                $('#publicMessageModal').modal('show');
            },100);
            return false;
        }
        dispatch(requestDataActions.setRequest());
        oData.deleteFaultLevelData(id,function(data2){
            $("#faultLevelNameEditInput").val("");
            $("#faultLevelNameAddInput").val("");
            dispatch(setFaultLevelId(""));
            dispatch(get_faultLevelData());
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}

//明长然 20161209 查询升级级别数据
export function get_upgradeLevelData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getUpgradeLevelData(function(data){
            var results = data.results;
            dispatch(setUpgradeLevelData(results));
            dispatch(setUpgradeLevelId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

//明长然 20161209 增加和编辑升级级别数据
export function save_upgradeLevelData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.upgradeLevelId;
        var upgradeLevelData = state.dataDictReducer.upgradeLevelData;

        if(id!=null && id!=""){
            for(var i=0;i<upgradeLevelData.length;i++){
                var bid = upgradeLevelData[i].RecId;
                var bname = upgradeLevelData[i].Name;
                if(data == bname && bid == id){
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "该升级级别已存在"
                        $('#publicMessageModal').modal('show');
                    },100);
                    return false;
                }
            }
            var param = {RecId:id,Name:data[0]};
            dispatch(requestDataActions.setRequest());
            oData.editUpgradeLevelData(param,function(data2){
                $("#upgradeLevelNameEditInput").val("");
                dispatch(setUpgradeLevelId(""));
                dispatch(get_upgradeLevelData());
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
        }else{
            for(var i=0;i<upgradeLevelData.length;i++){
                var bname = upgradeLevelData[i].Name;
                if(data == bname){
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "该升级级别已存在"
                        $('#publicMessageModal').modal('show');
                    },100);
                    return false;
                }
            }
            var param = {Name:data[0], "LevelType":"Update"};
            dispatch(requestDataActions.setRequest());
            oData.addUpgradeLevelData(param,function(data2){
                $("#upgradeLevelNameAddInput").val("");
                dispatch(setUpgradeLevelId(""));
                dispatch(get_upgradeLevelData());
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
        }
    }
}

//明长然 20161209 删除升级级别数据
export function delete_upgradeLevelData() {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.upgradeLevelId;
        if(id==null || id==""){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
                $('#publicMessageModal').modal('show');
            },100);
            return false;
        }
        dispatch(requestDataActions.setRequest());
        oData.deleteUpgradeLevelData(id,function(data2){
            $("#upgradeLevelNameEditInput").val("");
            $("#upgradeLevelNameAddInput").val("");
            dispatch(setUpgradeLevelId(""));
            dispatch(get_upgradeLevelData());
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            },100);
        });
    }
}

//明长然 20161209 查询工单类型数据
export function get_workOrderTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderTypeData(function (data) {
            var results = data.results;
            dispatch(setWorkOrderTypeData(results));
            dispatch(setWorkOrderTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

//明长然 20161209 增加和工单类型数据
export function save_workOrderTypeData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.workOrderTypeId;
        var workOrderTypeData = state.dataDictReducer.workOrderTypeData;
        var pid = state.dataDictReducer.projectId;
        var workBot = state.dataDictReducer.workOrderBot;
        /*for(var i=0;i<faultLevelData.length;i++){
         var bname = faultLevelData[i].Name;
         if(data == bname){
         setTimeout(function(){
         document.getElementById('publicMessageModelTitle').innerHTML = "提示"
         document.getElementById('publicMessageModalcontent').innerHTML = "事件类型已存在"
         $('#publicMessageModal').modal('show');
         },100);
         return false;
         }
         }*/
        if (id != null && id != "") {
            var param = { RecId: id, Name: data[0], Code: data[1], BoType: workBot, ProjectId: pid };
            dispatch(requestDataActions.setRequest());
            oData.editWorkOrderTypeData(param, function (data2) {
                $("#editSingleNameInput").find(".rw-input").text("");
                $("#editSingleCodeInput").val("");
                $("#editSubProjectInput").find(".rw-input").text("");
                dispatch(setWorkOrderTypeId(""));
                dispatch(get_workOrderTypeData());
                dispatch(get_workOrderTypeAllData());
                dispatch(setProjectId(""));
                dispatch(setWorkOrderBot(""));
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function () {
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                }, 100);
            });
        } else {


            var param = { Name: data[0], Code: data[1], BoType: workBot, ProjectId: pid };
            dispatch(requestDataActions.setRequest());
            oData.addWorkOrderTypeData(param, function (data2) {
                $("#singleNameInput").find(".rw-input").text("");
                $("#singleCodeInput").val("");
                $("#subProjectInput").find(".rw-input").text("");
                dispatch(setWorkOrderTypeId(""));
                dispatch(get_workOrderTypeData());
                dispatch(get_workOrderTypeAllData());
                dispatch(setProjectId(""));
                dispatch(setWorkOrderBot(""));
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function () {
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                }, 100);
            });
        }
    }
}

//明长然 20161209 删除工单类型数据
export function delete_workOrderTypeData() {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.workOrderTypeId;
        if (id == null || id == "") {
            setTimeout(function () {
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
                $('#publicMessageModal').modal('show');
            }, 100);
            return false;
        }
        dispatch(requestDataActions.setRequest());
        oData.deleteWorkOrderTypeData(id, function (data2) {
            console.log(data2);
            $("#editSingleNameInput").find(".rw-input").text("");
            $("#editSingleCodeInput").val("");
            $("#editSubProjectInput").find(".rw-input").text("");
            $("#singleNameInput").find(".rw-input").text("");
            $("#singleCodeInput").val("");
            $("#subProjectInput").find(".rw-input").text("");
            dispatch(setWorkOrderTypeId(""));
            dispatch(get_workOrderTypeData());
            dispatch(get_workOrderTypeAllData());
            dispatch(setProjectId(""));
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function () {
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            }, 100);
        });
    }
}

export function get_workOrderTypeAllData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderTypeAllData(function (data) {
            var results = data.results;
            dispatch(setWorkOrderTypeAllData(results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//明长然 20161212 查询单位人员数据
export function get_unitStaffInfoData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getUnitStaffInfoData(function (data) {
            var results = data.results;
            dispatch(setUnitStaffInfoData(results));
            dispatch(setUnitStaffInfoCid(""));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

//明长然 20161212  增加和编辑单位人员数据
export function save_unitStaffInfoData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.unitStaffInfoCid;
        var unitStaffInfoData = state.dataDictReducer.unitStaffInfoData;
        // var pid = state.dataDictReducer.unitStaffInfoPid;
        /*for(var i=0;i<faultLevelData.length;i++){
         var bname = faultLevelData[i].Name;
         if(data == bname){
         setTimeout(function(){
         document.getElementById('publicMessageModelTitle').innerHTML = "提示"
         document.getElementById('publicMessageModalcontent').innerHTML = "事件类型已存在"
         $('#publicMessageModal').modal('show');
         },100);
         return false;
         }
         }*/
        if (id != null && id != "") {
            var param = { CID: id, CNAME: data[0], ACRONYM: data[1], PHONE: data[2], ISMAIN: data[3], UNITADDRESS: data[4], PID: data[5] };
            dispatch(requestDataActions.setRequest());
            oData.editUnitStaffInfoData(param, function (data2) {
                $("#nameInput").val("");
                $("#abbInput").val("");
                $("#telInput").val("");
                $("#unitInput").val("");
                $("#adressInput").val("");
                dispatch(setUnitStaffInfoCid(""));
                dispatch(get_unitStaffInfoData());
                dispatch(setUnitStaffInfoPid(""));
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function () {
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                }, 100);
            });
        } else {


            var param = { CNAME: data[0], ACRONYM: data[1], PHONE: data[2], ISMAIN: data[3], UNITADDRESS: data[4], PID: data[5] };
            dispatch(requestDataActions.setRequest());
            oData.addUnitStaffInfoData(param, function (data2) {
                $("#nameInput").val("");
                $("#abbInput").val("");
                $("#telInput").val("");
                $("#unitInput").val("");
                $("#adressInput").val("");
                dispatch(setUnitStaffInfoCid(""));
                dispatch(get_unitStaffInfoData());
                dispatch(setUnitStaffInfoPid(""));
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function () {
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                }, 100);
            });
        }
    }
}

//明长然 20161212  删除单位人员数据
export function delete_unitStaffInfoData() {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.unitStaffInfoCid;
        if (id == null || id == "") {
            setTimeout(function () {
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
                $('#publicMessageModal').modal('show');
            }, 100);
            return false;
        }
        dispatch(requestDataActions.setRequest());
        oData.deleteUnitStaffInfoData(id, function (data2) {
            console.log(data2);
            $("#nameInput").val("");
            $("#abbInput").val("");
            $("#telInput").val("");
            $("#unitInput").val("");
            $("#adressInput").val("");
            $("#editNameInput").val("");
            $("#editAbbInput").val("");
            $("#editTelInput").val("");
            $("#editUnitInput").val("");
            $("#editAdressInput").val("");
            dispatch(setUnitStaffInfoCid(""));
            dispatch(get_unitStaffInfoData());
            dispatch(setUnitStaffInfoPid(""));
            dispatch(requestDataActions.setRequestSuccess());
            setTimeout(function () {
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
                $('#publicMessageModal').modal('show');
            }, 100);
        });
    }
}

// 明长然  20161214  获取单位信息并且初始化ZTREE功能数据
export function get_unitData(that) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getUnitData(function (data) {
            var results = data.results;
            dispatch(setUnitData(results));
            dispatch(setUnitId(""));
            if (that)
                dispatch(init_personnelMagTree(that));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

//明长然  20161214  将所属单位信息以树的形式实现
export function init_personnelMagTree(data) {
    return (dispatch, getState) => {
        var state = getState();
        var personnelMag = state.dataDictReducer.unitData;
        var dataList = [];
        if (personnelMag != null && personnelMag.length > 0) {
            for (var i = 0; i < personnelMag.length; i++) {
                dataList.push({ id: i + 1, name: personnelMag[i].Name, value: personnelMag[i].RecId, pid: 0 });
            }
        }
        data.initTree(dataList);
        dispatch(setPersonnelMagTree(data));

    }
}

//明长然 20161214 将编辑所属单位信息以树的形势实现
export function init_editPersonnelMagTree(URecId) {
    return (dispatch, getState) => {
        var dataList = [];
        var state = getState();
        var personnelMag = state.dataDictReducer.unitData;
        var data = state.dataDictReducer.personnelMagTree;
        var URecIds = URecId.split(",");
        if (URecIds != null && URecIds != "" && URecIds.length >= 0) {
            for (var i = 0; i < personnelMag.length; i++) {
                var mark = false;
                for (var j = 0; j < URecIds.length; j++) {
                    if (personnelMag[i].RecId.indexOf(URecIds[j]) >= 0) {
                        mark = true;
                        break;
                    }
                }
                if (mark) {
                    dataList.push({ id: i + 1, name: personnelMag[i].Name, value: personnelMag[i].RecId, pid: 0, checked: true });
                } else {
                    dataList.push({ id: i + 1, name: personnelMag[i].Name, value: personnelMag[i].RecId, pid: 0 });
                }
            }
        } else {
            for (var i = 0; i < personnelMag.length; i++) {
                dataList.push({ id: i + 1, name: personnelMag[i].Name, value: personnelMag[i].RecId, pid: 0 });
            }
        }
        data.initTree(dataList);
    }
}

// 明长然  20161213  获取工单名称
export function get_workOrderNameData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getWorkOrderNameData(function (data) {
            var results = data.results;
            dispatch(setWorkOrderNameData(results));
            dispatch(setWorkOrderNameId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
//刘家顺	20161208部门管理
export function get_departMentData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getDepartMentData(function(data){
            dispatch(setDepartMentData(data.results));
            dispatch(setDepartMentId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

//刘家顺	20161208 删除部门管理
export function delete_departMentData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.departMentId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteDepartMentData(id,function(data2){
			$("#departMentNameInput").val("");
			$("#departMentCodeInput").val("");
            dispatch(setDepartMentId(""));
            dispatch(get_departMentData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//刘家顺	20161208 判断部门管理
export function save_departMentData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.departMentId;
		var brands = state.dataDictReducer.departMentData;
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bid = brands[i].DEPARTMENT_ID;
				var bname = brands[i].DEPARTMENT_CODE;
				var bcode = brands[i].DEPARTMENT_NAME;
				if(data[0] == bname && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "部门序号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == bcode && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {DEPARTMENT_ID:id,DEPARTMENT_CODE:data[0],DEPARTMENT_NAME:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.editDepartMentData(param,function(data2){

                dispatch(setDepartMentId(""));
                dispatch(get_departMentData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
								$("#editDepartNameInput").val("");
                $("#editDepartCodeInput").val("");
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].DEPARTMENT_CODE;
				var bcode = brands[i].DEPARTMENT_NAME;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == bcode){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {DEPARTMENT_CODE:data[0],DEPARTMENT_NAME:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.addDepartMentData(param,function(data2){
                dispatch(setDepartMentId(""));
                dispatch(get_departMentData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
				$("#departNameInput").val("");
                $("#departCodeInput").val("");
        		$("#departNameInput").css("border", "1px solid #d0d0d0");
        		$("#departCodeInput").css("border", "1px solid #d0d0d0");
		}
    }
}
//刘家顺	20161209职位管理
export function get_positionData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getPositionData(function(data){
            dispatch(setPositionData(data.results));
            dispatch(setPositionId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//刘家顺	20161209判断职位管理
export function save_positionData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.positionId;
		var brands = state.dataDictReducer.positionData;
		var depatementId = state.dataDictReducer.departMentId;
		var pname = state.dataDictReducer.departMentPname;
		
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bid = brands[i].RecId;
				var bname = brands[i].POSITION_NAME;
				var bcode = brands[i].DEPARTMENT_NAME;
				if(data[0] == bname && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "职位名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[0] == '' && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "职位名称不能为空"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == bcode && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {RecId:id,POSITION_NAME:data[0],DEPARTMENT_ID:depatementId,POSITION_ID:id,DEPARTMENT_NAME:pname};
            dispatch(requestDataActions.setRequest());
			oData.editPositionData(param,function(data2){
  				$("#editDepartMentNameInput").find(".rw-input").text('请选择');
                $("#editDepartMentCodeInput").val("");
                dispatch(setPositionId(""));
                dispatch(get_positionData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
				$("#parentMagSelect").find(".rw-input").text('请选择');
                $("#posDepartInput").val("");
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].POSITION_NAME;
				var bcode = brands[i].DEPARTMENT_NAME;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "职位名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
                    $("#editPosDepartInput").val("");   
					return false;
				}
				if(data[1] == bcode){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
			var param = {POSITION_NAME:data[0],DEPARTMENT_NAME:pname, POSITION_ID:id};
            dispatch(requestDataActions.setRequest());
			oData.addPositionData(param,function(data2){
				$("#departMentNameInput").find(".rw-input").text('请选择');
                $("#departMentCodeInput").val("");
                dispatch(setPositionId(""));
                dispatch(get_positionData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			$("#parentMagSelect").find(".rw-input").text('请选择');
            $("#posDepartInput").val("");
            $("#parentMagSelect").css("border", "1px solid #d0d0d0");
        	$("#posDepartInput").css("border", "1px solid #d0d0d0");
				
			});
		}
    }
}
//刘家顺	20161209删除职位管理
export function delete_positionData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.positionId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deletePositionData(id,function(data2){
			$("#editPosDepartInput").val("");
            dispatch(setPositionId(""));
            dispatch(get_positionData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强 20161208 获取项目管理功能数据
export function get_projectFirmData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getProjectFirmData(function(data){
			var results = data.results;
            dispatch(setProjectFirmData(results));
            dispatch(setProjectFirmId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强  20161208 删除项目信息管理数据
export function delete_projectFirmData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.projectFirmId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteProjectFirmData(id,function(data2){
			$("#projectFirmAddInput").val("");
			$("#projectFirmEditInput").val("");
            dispatch(setProjectFirmId(""));
            dispatch(get_projectFirmData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强 20161208 获取厂商信息并且初始化ZTREE功能数据
export function get_siteviewasdData(that) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getSiteviewasdData(function(data){
			var results = data.results;
            dispatch(setSiteviewasdData(results));
            dispatch(setSiteviewasdId(""));
            if(that){
            	dispatch(init_proMagTree(that));
            }
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强 20161208 将厂商信息以树的形势实现
export function init_proMagTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var proMag = state.dataDictReducer.siteviewasdData;
        var dataList = [];
        if(proMag != null && proMag.length> 0){
          for(var i=0;i<proMag.length;i++){
              dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0});
          }
        }
        dispatch(setProMagTree(data));
        data.initTree(dataList);
    }
}

//曹志强 20161208 将编辑厂商信息以树的形势实现
export function init_editProMagTree(fdRecId){
	return (dispatch, getState) => {
		var dataList = [];
		var state = getState();
        var proMag = state.dataDictReducer.siteviewasdData;
        var data = state.dataDictReducer.proMagTree;
        var fdRecIds = fdRecId.split(",");
		if(fdRecIds != null && fdRecIds != "" && fdRecIds.length >= 0){
			for(var i=0;i<proMag.length;i++){
                var mark = false;
                for(var j=0;j<fdRecIds.length;j++){
                    if(proMag[i].FDRECID.indexOf(fdRecIds[j])>=0){
                        mark = true;
                        break;
                    }
                }
                if(mark){
                    dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0,checked:true});
                }else{
                    dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0});
                }
            }
		}else{
            for(var i=0;i<proMag.length;i++){
                dataList.push({id:i+1,name:proMag[i].FDNAME,value:proMag[i].FDRECID,pid:0});
            }
        }
        data.initTree(dataList);
		
	}
}

//曹志强  20161211 增加和编辑项目管理数据
export function save_saveMagProData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.projectFirmId;
		var projectFirmData = state.dataDictReducer.projectFirmData;
		for(var i=0;i<projectFirmData.length;i++){
			var bname = projectFirmData[i].PROJECTNAME;
			var cname = projectFirmData[i].CODENAME;
			var code = projectFirmData[i].CODE;
			if(id == "" || id == null || id == undefined){
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "项目名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[2] == cname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "合同编号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[1] == code){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "项目代号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}
		if(id!=null && id!="" && id != undefined && id != "undefined"){
			var param = {RecId:id,NAME:data[0],CODE:data[1],CODENAME:data[2],FDRECID:data[3]};
            dispatch(requestDataActions.setRequest());
			oData.editProjectFirmData(param,function(data2){
				$("#projectNameInput").val("");
				$("#projectCodeInput").val("");
				$("#projectCodeNameInput").val("");
                dispatch(setProjectFirmId(""));
                dispatch(get_projectFirmData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {NAME:data[0],CODE:data[1],CODENAME:data[2],FDRECID:data[3]};
            dispatch(requestDataActions.setRequest());
			oData.addProjectFirmData(param,function(data2){
				$("#projectNameInput").val("");
				$("#projectCodeInput").val("");
				$("#projectCodeNameInput").val("");
                dispatch(setProjectFirmId(""));
                dispatch(get_projectFirmData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
//程艳鸿	20161214获取所有颜色
export function get_slaColorData(param) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getColorData(param,function(data){
            dispatch(setSlaColorData(data.results));
            dispatch(setSlaColorId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

//程艳鸿	20161215删除颜色提醒
export function delete_SLAColorData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.slaColorId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
	//	var param = {COLOR_ID:id};
        dispatch(requestDataActions.setRequest());
		oData.deleteColorData(id,function(data){
            dispatch(setSlaColorId(""));
            dispatch(get_slaColorData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

//程艳鸿 20161216 增加和编辑SLA颜色提醒数据
export function save_slaData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.slaColorId;
        var slaColorData = state.dataDictReducer.slaColorData;
        if(id!=null && id!=""){
        	var param = {COLOR_ID:id,RGB1:data[0],RGB2:data[1],RGB3:data[2],VERIFYTIME:data[3],TIMEUNIT:data[4]};
            //var param = {RecId:id,Name:data[0]};
            dispatch(requestDataActions.setRequest());
            oData.editColorData(param,function(data){
                $("#sLATimePointInput").val("");
                $("#sLATimeUnitInput").val("");
                $("#editSLAColorInput").val("");
                dispatch(setSlaColorId(""));
            	dispatch(get_slaColorData());
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
        }else{
        	var param = {COLOR_ID:id,RGB1:data[0],RGB2:data[1],RGB3:data[2],VERIFYTIME:data[3],TIMEUNIT:data[4]};
           // var param = {Name:data[0], "LevelType":"Update"};
            dispatch(requestDataActions.setRequest());
            oData.addColorData(param,function(data){
                $("#sLATimePointInput").val("");
                $("#sLATimeUnitInput").val("");
                $("#sLAColorInput").val("");
                dispatch(setSlaColorId(""));
            	dispatch(get_slaColorData());
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
        }
    }
}
//曹志强 20161213 获取工单类型管理功能数据
export function get_unitTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getUnitTypeData(function(data){
			var results = data.results;
            dispatch(setUnitTypeData(results));
            dispatch(setUnitTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强  20161213 删除工单类型管理功能的数据
export function delete_unitTypeData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.unitTypeId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteUnitTypeData(id,function(data2){
			$("#unitTypeNameInput").val("");
            dispatch(setUnitTypeId(""));
            dispatch(get_unitTypeData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强  20161214 增加和编辑单位类型管理功能数据
export function save_unitTypeData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.unitTypeId;
		var unitTypeData = state.dataDictReducer.unitTypeData;
		for(var i=0;i<unitTypeData.length;i++){
			var bname = unitTypeData[i].UNITTYPENAME;
			if(data[0] == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "单位名称已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!="" && id != undefined && id != "undefined"){
			var param = {RECID:id,UNITTYPENAME:data[0],ORGIDS:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.editUnitTypeData(param,function(data2){
				$("#unitTypeNameInput").val("");
                dispatch(setUnitTypeId(""));
                dispatch(get_unitTypeData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {UNITTYPENAME:data[0],ORGIDS:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.addUnitTypeData(param,function(data2){
				$("#unitTypeNameInput").val("");
                dispatch(setUnitTypeId(""));
                dispatch(get_unitTypeData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
//刘家顺	20161213单位管理
export function get_magUnitData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getMagUnitData(function(data){
            dispatch(setMagUnitData(data.results));
            dispatch(setMagUnitId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//刘家顺	20161213删除单位管理
export function delete_magUnitData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.magUnitId;
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
		oData.deleteMagUnitData(id,function(data2){			
		    $("#editMagUnitNumberInput").val("");
	        $("#editMagUnitlNameInput").val("");
	        $("#editMagUnitlHeadInput").val("");
	        $("#editMagUnitlTelInput").val("");
	        $("#editMagUnitlAreaInput").val("");
	        $("#editMagUnitlChildAreaInput").val("");
	        $("#editMagUnitTypeInput").val("");
	        $("#editMagUnitAdressInput").val("");		
            dispatch(setMagUnitId(""));
            dispatch(get_magUnitData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

//刘家顺	20161216 增加和编辑单位管理
export function save_magUnitData(data) {
    return (dispatch, getState) => {
		var state = getState();   
        var id = state.dataDictReducer.editMagUnitIdTree;
		var brands = state.dataDictReducer.magUnitData;	
		var unitTypeNodesChecked = state.dataDictReducer.unitTypeNodesChecked;	
		var editMagUnitTypesId = state.dataDictReducer.editMagUnitTypesId;
		//子区域的id
		var editAreasId = state.dataDictReducer.editAreasId;
		var editMagUnitRecId = state.dataDictReducer.editMagUnitRecId
		console.log('点击确定 按钮 时 editMagUnitRecId  传值 id 编辑 获取rec id 传给树')
        console.log(editMagUnitRecId)
        console.log('unitTypeNodesChecked reducer 有吗？')
        console.log(unitTypeNodesChecked)
		console.log('判断 是编辑还是 增加')
        console.log(id)
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bid = brands[i].RecId;
				var bname = brands[i].UNITNAME;
				var bcode = brands[i].UNITNUMBER;
				if(data[1] == '' && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "单位名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
							         $("#magUnitNumberInput").val("");
			       //编辑单位名称
			     $("#magUnitlNameInput").val("");
			       //区域名字			       
			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
//			     $("#magUnitlAreaInput").val("");
			       //子区域名字
			     $("#magUnitlChildAreaInput").val("");
			       //单位类型名字，不用传
			     $("#editMagUnitTypeInput").val("");
			       //单位地址
			     $("#magUnitAdressInput").val(""); 
					return false;
				}
				if(data[0] == bcode && bid != id){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "单位序号已存在"
						$('#publicMessageModal').modal('show');
					},100);
					
			     $("#magUnitNumberInput").val("");
			       //编辑单位名称
			     $("#magUnitlNameInput").val("");
			       //区域名字			       
			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
//			     $("#magUnitlAreaInput").val("");
			       //子区域名字
			     $("#magUnitlChildAreaInput").val("");
			       //单位类型名字，不用传
			     $("#editMagUnitTypeInput").val("");
			       //单位地址
			     $("#magUnitAdressInput").val(""); 
					return false;
				}
				if(isNaN(data[0])){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "单位序号必须是数字"
						$('#publicMessageModal').modal('show');
					},100);
					
			     $("#magUnitNumberInput").val("");
			       //编辑单位名称
			     $("#magUnitlNameInput").val("");
			       //区域名字			       
			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
//			     $("#magUnitlAreaInput").val("");
			       //子区域名字
			     $("#magUnitlChildAreaInput").val("");
			       //单位类型名字，不用传
			     $("#editMagUnitTypeInput").val("");
			       //单位地址
			     $("#magUnitAdressInput").val(""); 
					return false;
				}
			}
		 var param = {UNITTYPEINFO:unitTypeNodesChecked,UNITNAME:data[1],UNITNUMBER:data[0],UNITADDRESS:data[4],AREASID:editAreasId,RECID:editMagUnitRecId};
            console.log('编辑 parm  有recId 吗？ 给的值')
            console.log(param)
            dispatch(requestDataActions.setRequest());
				oData.editMagUnitData(param,function(data2){
			   $("#editMagUnitNumberInput").val("");
		       //编辑单位名称
		       $("#editMagUnitlNameInput").val("");
		      // var PNAME = $("#editMagUnitlHeadInput").val();
		       //var PPHONE = $("#editMagUnitlAreaInput").val();
		       //区域名字
		       $("#editMagUnitlAreaInput").find(".rw-input").text("");
//		       $("#editMagUnitlHeadInput").val("");
		       //子区域名字
		       $("#editMagUnitlChildAreaInput").val("");
		       //单位类型名字，不用传
//		       $("#editMagUnitTypeInput").val("");
		       //单位地址
		       $("#editMagUnitAdressInput").val("");   
		       //监听子区域的ID
		        dispatch(setEditAreasId(""));
//              dispatch(setEditMagUnitTypesId(""));
//              dispatch(setEditMagUnitId(""));
                dispatch(setEditMagUnitIdTree(""));
                dispatch(setUnitTypeNodesChecked(""));
                dispatch(setEditMagUnitRecId(""));
                dispatch(setAreaId(""));
                dispatch(get_areaSubData());
                dispatch(get_magUnitData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].UNITNAME;
				var bcode = brands[i].UNITNUMBER;
//				if(data[1] == bname){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//				 $("#magUnitNumberInput").val("");
//			       //编辑单位名称
//			     $("#magUnitlNameInput").val("");
//			       //区域名字			       
//			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
////			     $("#magUnitlAreaInput").val("");
//			       //子区域名字
//			     $("#magUnitlChildAreaInput").val("");
//			       //单位类型名字，不用传
////			     $("#editMagUnitTypeInput").val("");
//			       //单位地址
//			     $("#magUnitAdressInput").val(""); 
//					return false;
//				}
//				if(data[0] == bcode){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "部门名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//				$("#magUnitNumberInput").val("");
//			       //编辑单位名称
//			     $("#magUnitlNameInput").val("");
//			       //区域名字			       
//			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
////			     $("#magUnitlAreaInput").val("");
//			       //子区域名字
//			     $("#magUnitlChildAreaInput").val("");
//			       //单位类型名字，不用传
////			     $("#editMagUnitTypeInput").val("");
//			       //单位地址
//			     $("#magUnitAdressInput").val(""); 
//					return false;
//				}
				if(isNaN(data[0])){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "单位序号必须是数字"
						$('#publicMessageModal').modal('show');
					},100);
					
			     $("#magUnitNumberInput").val("");
			       //编辑单位名称
			     $("#magUnitlNameInput").val("");
			       //区域名字			       
			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
//			     $("#magUnitlAreaInput").val("");
			       //子区域名字
			     $("#magUnitlChildAreaInput").val("");
			       //单位类型名字，不用传
//			     $("#editMagUnitTypeInput").val("");
			       //单位地址
			     $("#magUnitAdressInput").val(""); 
					return false;
				}
			}
			var param = {UNITTYPEINFO:unitTypeNodesChecked,UNITNAME:data[1],UNITNUMBER:data[0],UNITADDRESS:data[4],AREASID:editAreasId};
           console.log('单位管理树 传值')
           console.log(param)
           dispatch(requestDataActions.setRequest());
			oData.addMagUnitData(param,function(data2){	       
		         $("#magUnitNumberInput").val("");
			       //编辑单位名称
			     $("#magUnitlNameInput").val("");
			       //区域名字			       
			     $("#magUnitlAreaInput").find(".rw-input").text("");	   
//			     $("#magUnitlAreaInput").val("");
			       //子区域名字
			     $("#magUnitlChildAreaInput").val("");
			       //单位类型名字，不用传
//			     $("#editMagUnitTypeInput").val("");
			       //单位地址
			     $("#magUnitAdressInput").val("");  			     
                 dispatch(setMagUnitId(""));
                 dispatch(setEditAreasId(""));
//               dispatch(setEditMagUnitTypesId(""));
//               dispatch(setEditMagUnitId(""));
                 dispatch(setEditMagUnitIdTree(""));
                 dispatch(setUnitTypeNodesChecked(""));
                 dispatch(get_magUnitData());
                 dispatch(setAreaId(""));
                 dispatch(get_areaSubData());
                 dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}
    }
}
////刘家顺 20170119 单位管理 树
export function get_unitTypeDataTree(){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.unitTypeDataTree(function(data){
            dispatch(setUnitTypeDataTree(data.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
////刘家顺 20170122 单位管理 树Id
export function get_unitTypeDataTreeId() {
    return (dispatch, getState) => {
            var state = getState(); 
		    var editMagUnitRecId = state.dataDictReducer.editMagUnitRecId
		    console.log("editMagUnitRecId action 传值树的id ")
		    console.log(editMagUnitRecId)
    		var param = {UNITID:editMagUnitRecId};
        dispatch(requestDataActions.setRequest());
		oData.unitTypeDataTreeId(param,function(data2){			
                dispatch(setUnitTypeDataTreeId(data2.results));
//              dispatch(setEditMagUnitRecId(""));
                dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//////刘家顺 20170122 获取已经穿过树Id值的  树  单位管理 
//export function get_unitTypeDataTreeId(){
//  return dispatch => {
//      dispatch(requestDataActions.setRequest());
//      oData.unitTypeDataTreeId(function(data){
//          dispatch(setUnitTypeDataTreeId(data.results));
//          dispatch(requestDataActions.setRequestSuccess());
//      });
//  }
//}
//曹志强		20170203	获取资产状态数据
export function get_assetsStatus() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getAssetsStatus(function(data){
			var results = data.results;
            dispatch(setAssetsStatus(results));
            dispatch(setAssetsStatuId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}

//曹志强		20170203	添加和编辑资产状态数据
export function save_assetsStatus(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.assetsStatuId;
		var brands = state.dataDictReducer.assetsStatus;
		for(var i=0;i<brands.length;i++){
			var bname = brands[i].StatusName;
			if(data == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "资产状态已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,StatusName:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.editAssetsStatus(param,function(data2){
				$("#statusNameInput").val("");
                dispatch(setAssetsStatuId(""));
                dispatch(get_assetsStatus());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {StatusName:data[0]};
            dispatch(requestDataActions.setRequest());
			oData.addAssetsStatus(param,function(data2){
				$("#statusNameInput").val("");
                dispatch(setAssetsStatuId(""));
                dispatch(get_assetsStatus());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		};
    }
}
//曹志强		20170203	删除资产状态数据
export function delete_assetsStatus() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.assetsStatuId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteAssetsStatus(id,function(data2){
			console.log(data2);
			$("#statusNameInput").val("");
            dispatch(setAssetsStatuId(""));
            dispatch(get_assetsStatus());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强		20170203	获取应用响应级别数据
export function get_applevreSponse() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getApplevreSponse(function(data){
			var results = data.results;
            dispatch(setApplevreSponseData(results));
            dispatch(setApplevreSponseId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强		20170203	添加和编辑应用响应级别数据
export function save_applevreSponse(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.applevreSponseId;
		var brands = state.dataDictReducer.applevreSponseData;
		if(id == "" || id == null){
			for(var i=0;i<brands.length;i++){
				var appNumber = brands[i].AppNumber;
				var appType = brands[i].AppType;
				var responseLev = brands[i].ResponseLev;
				if(data[0] == appNumber){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "序号已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
				}
				if(data[1] == appType){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "应用类型已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[2] == responseLev){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "响应级别已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}else{
			for(var i=0;i<brands.length;i++){
				var appNumber = brands[i].AppNumber;
				var appType = brands[i].AppType;
				var responseLev = brands[i].ResponseLev;
				var reId = brands[i].RecId;
				if(data[0] == appNumber && id != reId){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "序号已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
				}
				if(data[1] == appType  && id != reId){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "应用类型已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
				if(data[2] == responseLev  && id != reId){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "响应级别已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,AppNumber:data[0],AppType:data[1],ResponseLev:data[2]};
            dispatch(requestDataActions.setRequest());
			oData.editApplevreSponse(param,function(data2){
				$("#appNumberEditInput").val("");
				$("#appTypeEditInput").val("");
				$("#appLevelEditInput").val("");
                dispatch(setApplevreSponseId(""));
                dispatch(get_applevreSponse());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {AppNumber:data[0],AppType:data[1],ResponseLev:data[2]};
            dispatch(requestDataActions.setRequest());
			oData.addApplevreSponse(param,function(data2){
				$("#appNumberInput").val("");
				$("#appTypeInput").val("");
				$("#appLevelInput").val("");
                dispatch(setApplevreSponseId(""));
                dispatch(get_applevreSponse());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		};
    }
}
//曹志强		20170203	删除应用响应级别数据
export function delete_applevreSponse() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.applevreSponseId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deleteApplevreSponse(id,function(data2){
			console.log(data2);
			$("#appNumberEditInput").val("");
			$("#appTypeEditInput").val("");
			$("#responseLevEditInput").val("");
			$("#appNumberAddInput").val("");
			$("#appTypeAddInput").val("");
			$("#responseLevAddInput").val("");
            dispatch(setApplevreSponseId(""));
            dispatch(get_applevreSponse());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强		20170206	获取父级资产类型数据
export function get_pAssetsTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getPAssetsTypeData(function(data){
			var results = data.results;
            dispatch(setAssetsType(results));
            dispatch(setAssetsTypeId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强		20170206	保存父级资产类型数据
export function save_pAssetsTypeData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.dataDictReducer.assetsTypeId;
		var brands = state.dataDictReducer.assetsType;
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].typeAlias;
				var braid = brands[i].RecId;
				if(data[0] == bname && id != braid){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "父级资产类型已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].typeAlias;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "父级资产类型已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,typeAlias:data[0], descript:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.editPAssetsType(param,function(data2){
				$("#pAssetsTypeNameEditInput").val("");
				$("#pAssetsTypeDesEditInput").val("");
                dispatch(setAssetsTypeId(""));
				dispatch(get_pAssetsTypeData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
		}else{
			var param = {typeAlias:data[0], descript:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.addPAssetsType(param,function(data2){
				$("#pAssetsTypeNameInput").val("");
				$("#pAssetsTypeDesInput").val("");
                dispatch(setAssetsTypeId(""));
				dispatch(get_pAssetsTypeData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
		}
    }
}
//曹志强		20170206	删除父级资产类型数据
export function delete_pAssetsTypeData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.assetsTypeId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deletePAssetsType(id,function(data2){
			$("#pAssetsTypeNameInput").val("");
			$("#pAssetsTypeDesInput").val("");
			$("#pAssetsTypeNameEditInput").val("");
			$("#pAssetsTypeDesEditInput").val("");
            dispatch(setAssetsTypeId(""));
			dispatch(get_pAssetsTypeData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}

//曹志强		20170206	获取子级资产类型数据
export function get_cAssetsTypeData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getCAssetsTypeData(function(data){
			var results = data.results;
			if(results.length>0){
				var result = results[0].CHILDASSETTYPE;
				var faults = eval(result);
                dispatch(setChildAssetsType(faults));
                dispatch(setAssetsTypeId(""));
                dispatch(setChildAssetsTypeId(""));
                dispatch(requestDataActions.setRequestSuccess());
			};
		});
    }
}


//曹志强		20170206	保存子级资产类型数据
export function save_cAssetsTypeData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var pid = state.dataDictReducer.assetsTypeId;
        var id = state.dataDictReducer.childAssetsTypeId;
		var brands = state.dataDictReducer.childAssetsType;
		if(id!=null && id!=""){
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].childAssetTypeName;
				var braid = brands[i].RecId;
				if(data[0] == bname && id != braid){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "子级资产类型已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}else{
			for(var i=0;i<brands.length;i++){
				var bname = brands[i].childAssetTypeName;
				if(data[0] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "子级资产类型已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
		}
		if(id!=null && id!=""){
			var param = {RecId:id,typeAlias:data[0], descript:data[1]};
            dispatch(requestDataActions.setRequest());
			oData.editPAssetsType(param,function(data2){
				$("#cAssetsTypeNameEditInput").val("");
				$("#cAssetsTypeDesEditInput").val("");
				dispatch(setAssetsTypeId(""));
                dispatch(setChildAssetsTypeId(""));
				dispatch(get_cAssetsTypeData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
		}else{
			var param = {typeAlias:data[0], descript:data[1],ParentID:pid};
            dispatch(requestDataActions.setRequest());
			oData.addPAssetsType(param,function(data2){
				$("#cAssetsTypeNameInput").val("");
				$("#cAssetsTypeDesInput").val("");
				dispatch(setAssetsTypeId(""));
                dispatch(setChildAssetsTypeId(""));
				dispatch(get_cAssetsTypeData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
                    $('#publicMessageModal').modal('show');
                },100);
            });
		}
    }
}
//曹志强		20170206	删除子级资产类型数据
export function delete_cAssetsTypeData() {
    return (dispatch, getState) => {
        var state = getState();
		var id = state.dataDictReducer.childAssetsTypeId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
        dispatch(requestDataActions.setRequest());
		oData.deletePAssetsType(id,function(data2){
			$("#cAssetsTypeNameInput").val("");
			$("#cAssetsTypeDesInput").val("");
			$("#cAssetsTypeNameEditInput").val("");
			$("#cAssetsTypeDesEditInput").val("");
			dispatch(setAssetsTypeId(""));
            dispatch(setChildAssetsTypeId(""));
			dispatch(get_cAssetsTypeData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}