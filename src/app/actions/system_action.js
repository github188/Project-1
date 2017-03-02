/**
* 系统设置相关的action方法
*/
var oData = require('../server/odataSystem');
var Store = require('../server/store');
var base64 = require('../utils/base64.js');
import * as requestDataActions from './requestData_action';

//GETMONITORTREE
export const SET_MONITOR_TREE='SET_MONITOR_TREE'
//SETOLDTREE
export const SET_MONITOR_TREE_CHECKEDNODES='SET_MONITOR_TREE_CHECKEDNODES'
//SETTREECLEAR
export const SET_TREE_CLEAR='SET_TREE_CLEAR'
//SETMONITORTYPEARRAY
export const SET_MONITOR_TYPE_ARRAY='SET_MONITOR_TYPE_ARRAY'
//GETMONITORRETURNITEM
export const SET_MONITOR_RETURNITEM='SET_MONITOR_RETURNITEM'
//SETMONITORRETURNITEMDEFAULTVALUE
export const SET_MONITORRE_TURNITEMDEFAULT_VALUE='SET_MONITORRE_TURNITEMDEFAULT_VALUE'
export const SET_MONITORRE_TREE_INIT='SET_MONITORRE_TREE_INIT'
//SETTREEIDS
export const SET_MONITORRE_TREE_IDS='SET_MONITORRE_TREE_IDS'
//SETMONITORISALARM
export const SET_MONITOR_ISALARM='SET_MONITOR_ISALARM'
//SETMONITORREFRESH
export const SET_MONITORRE_FRESH='SET_MONITORRE_FRESH'
//SETMONITORRETURNITEM
export const SET_MONITORRE_TURNITEM='SET_MONITORRE_TURNITEM'

export const SET_GROUPS='SET_GROUPS'
export const SET_ALLGROUPDATA='SET_ALLGROUPDATA'
export const SET_CREATEINFO='SET_CREATEINFO'
export const SET_PARENTCODE='SET_PARENTCODE'
export const SET_CURGROUPDATA='SET_CURGROUPDATA'
export const SET_CURGROUPDATA_PARENTORGANIZATIONNAME='SET_CURGROUPDATA_PARENTORGANIZATIONNAME'
export const SET_CURGROUPDATA_ORGANIZATIONPWD='SET_CURGROUPDATA_ORGANIZATIONPWD'
export const SET_CURGROUPDATA_ROLE='SET_CURGROUPDATA_ROLE'
export const SET_SAFEGROUPS='SET_SAFEGROUPS'
export const SET_USERORGANIZATION='SET_USERORGANIZATION'
export const SET_PUREORGANIZATION='SET_PUREORGANIZATION'
export const SET_USERS='SET_USERS'
export const SET_SELECTEDUSER='SET_SELECTEDUSER'
export const SET_OPERATIONFLAG='SET_OPERATIONFLAG'
export const SET_CHANGEPASSWORDFLAG='SET_CHANGEPASSWORDFLAG'
export const SET_ROLES='SET_ROLES'
export const SET_CURTREE='SET_CURTREE'
export const SET_PCODEMARK='SET_PCODEMARK'
export const SET_PERMISSIONS='SET_PERMISSIONS'
export const SET_ISUPDATE='SET_ISUPDATE'
export const SET_ROLETREE='SET_ROLETREE'
export const SET_SESSIONUSERS='SET_SESSIONUSERS'
export const SET_USERINFOCHANGEFLAG='SET_USERINFOCHANGEFLAG'
export const SET_SYSMAPDATA='SET_SYSMAPDATA'
export const SET_SYSMAPDATAVALUE='SET_SYSMAPDATAVALUE'
//SETRIGHTSYSPAGE
export const SET_RIGHT_SYSTEMPAGE='SET_RIGHT_SYSTEMPAGE'
export const SET_ORGANIZATIONDATA = "SET_ORGANIZATIONDATA"
export const SET_ORGANIZATIONID = "SET_ORGANIZATIONID"
export const SET_ORGROLEDATA = "SET_ORGROLEDATA"
export const SET_ORGROLEID = "SET_ORGROLEID"
export const SET_ORGROLETREE = "SET_ORGROLETREE"
export const SET_ROLEMANGERDATA='SET_ROLEMANGERDATA'
export const SET_DELETEROLENAME='SET_DELETEROLENAME'
export const ROLE_SET_PERMISSIONTREE="ROLE_SET_PERMISSIONTREE"
export const ROLE_SET_PERMISSIONTREEDATA="ROLE_SET_PERMISSIONTREEDATA"
export const ROLE_SET_CURROLENAME="ROLE_SET_CURROLENAME"
export const ROLE_SET_STATICPERMISSION="ROLE_SET_STATICPERMISSION"
export const ROLE_SET_ISCLICKTREECHANGE="ROLE_SET_ISCLICKTREECHANGE"
export const ROLE_SET_HANDLEPERMISSION="ROLE_SET_HANDLEPERMISSION"
export const ROLE_SET_BEFOREPERMISSION="ROLE_SET_BEFOREPERMISSION"
export const SET_EDITROLENAMEINPUT='SET_EDITROLENAMEINPUT'
export const SET_EDITROLEDESCRIBEINPUT='SET_EDITROLEDESCRIBEINPUT'
export const SET_ORGANIZATIONNAME='SET_ORGANIZATIONNAME'

//明长然 USER correlation method
export const SET_PROFILEDATA = "SET_PROFILEDATA"
export const SET_PROFILEID = "SETPROFILEID"
export const SET_SYSAREADATA = "SET_SYSAREADATA"
export const SET_SYSAREAID = "SET_SYSAREAID"
export const SET_SYSUNITDATA = "SET_SYSUNITDATA"
export const SET_SYSUNITID = "SET_SYSUNITID"
export const SET_SYSDEPARTMENTDATA = "SET_SYSDEPARTMENTDATA"
export const SET_SYSDEPARTMENTID = "SET_SYSDEPARTMENTID"
export const SET_POSITIONS = "SET_POSITIONS"

export function setRightSystemPage(rightSystemPage){
	return {
		type:SET_RIGHT_SYSTEMPAGE,
		rightSystemPage
	}
}

//调用reducer-设置监测树
export function setMonitorTreeData(monitorTreeData) {
    return {
        type: SET_MONITOR_TREE,
        monitorTreeData
    }
}
//调用reducer-设置上次选择的监测树节点 CheckedNodes
export function setMonitorTreeCheckedNodes(checkedNodes) {
    return {
        type: SET_MONITOR_TREE_CHECKEDNODES,
        checkedNodes
    }
}
//调用reducer-清除树标志
export function setTreeClear(flag){
  return {
      type: SET_TREE_CLEAR,
      flag
  }
}
//调用reducer-
export function setMonitorTypeArray(monitorTypeArray){
  return {
      type: SET_MONITOR_TYPE_ARRAY,
      monitorTypeArray
  }
}
//调用reducer-
export function emitMonitorReturnItem(monitorReturnItem){
  return {
      type: SET_MONITOR_RETURNITEM,
      monitorReturnItem
  }
}
//调用reducer-
export function setMonitorReturnItemDefaultValue(monitorReturnItemDefaultValue){
  return {
      type: SET_MONITORRE_TURNITEMDEFAULT_VALUE,
      monitorReturnItemDefaultValue
  }
}
//调用reducer-
export function setMonitorTreeInit(value){
  return {
      type: SET_MONITORRE_TREE_INIT,
      value
  }
}
//调用reducer-
export function setTreeIds(treeIds){
  return {
      type: SET_MONITORRE_TREE_IDS,
      treeIds
  }
}
//调用reducer-
export function setMonitorIsAlarmValue(treeIds){
  return {
      type: SET_MONITOR_ISALARM,
      treeIds
  }
}

export function setGroups(groups) {
    return {
        type: SET_GROUPS,
        groups
    }
}

export function setAllGroupData(allGroupData) {
    return {
        type: SET_ALLGROUPDATA,
        allGroupData
    }
}

export function setCreateInfo(createInfo) {
    return {
        type: SET_CREATEINFO,
        createInfo
    }
}

export function setParentCode(parentCode) {
    return {
        type: SET_PARENTCODE,
        parentCode
    }
}

export function setCurGroupData(curGroupData) {
    return {
        type: SET_CURGROUPDATA,
        curGroupData
    }
}
export function setCurGroupData_parentOrganizationName(parentOrganizationName) {
    return {
        type: SET_CURGROUPDATA_PARENTORGANIZATIONNAME,
        parentOrganizationName
    }
}
export function setCurGroupData_organizationPwd(organizationPwd) {
    return {
        type: SET_CURGROUPDATA_ORGANIZATIONPWD,
        organizationPwd
    }
}
export function setCurGroupData_role(role) {
    return {
        type: SET_CURGROUPDATA_ROLE,
        role
    }
}

export function setSafeGroups(safeGroups) {
    return {
        type: SET_SAFEGROUPS,
        safeGroups
    }
}

export function setUserOrganization(userOrganization) {
    return {
        type: SET_USERORGANIZATION,
        userOrganization
    }
}

export function setPureOrganization(pureOrganization) {
    return {
        type: SET_PUREORGANIZATION,
        pureOrganization
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function setSelectedUser(selectedUser) {
    return {
        type: SET_SELECTEDUSER,
        selectedUser
    }
}

export function setOperationFlag(operationFlag) {
    return {
        type: SET_OPERATIONFLAG,
        operationFlag
    }
}

export function setChangePasswordFlag(changePasswordFlag) {
    return {
        type: SET_CHANGEPASSWORDFLAG,
        changePasswordFlag
    }
}

export function setRoles(roles) {
    return {
        type: SET_ROLES,
        roles
    }
}

export function setPositions(positions) {
    return {
        type: SET_POSITIONS,
        positions
    }
}
export function setCurTree(curTree) {
    return {
        type: SET_CURTREE,
        curTree
    }
}

export function setPcodeMark(pcodeMark) {
    return {
        type: SET_PCODEMARK,
        pcodeMark
    }
}

export function setPermissions(permissions) {
    return {
        type: SET_PERMISSIONS,
        permissions
    }
}

export function setIsUpdate(isUpdate) {
    return {
        type: SET_ISUPDATE,
        isUpdate
    }
}

export function setRoleTree(roleTree) {
    return {
        type: SET_ROLETREE,
        roleTree
    }
}

export function setSessionUsers(sessionUsers) {
    return {
        type: SET_SESSIONUSERS,
        sessionUsers
    }
}

export function setUserInfoChangeFlag(userInfoChangeFlag) {
    return {
        type: SET_USERINFOCHANGEFLAG,
        userInfoChangeFlag
    }
}

export function setSysMapData(sysMapData) {
    return {
        type: SET_SYSMAPDATA,
        sysMapData
    }
}

export function setSysMapDataValue(sysMapDataValue) {
    return {
        type: SET_SYSMAPDATAVALUE,
        sysMapDataValue
    }
}
//明长然  20161216  主管人数据
export function setProFileData(proFileData) {
    return {
        type: SET_PROFILEDATA,
        proFileData
    }
}

//明长然  20161216  主管人ID
export function setProFileId(proFileId) {
    return {
        type: SET_PROFILEID,
        proFileId
    }
}

//明长然  20161216  区域数据
export function setSysAreaData(sysAreaData) {
    return {
        type: SET_SYSAREADATA,
        sysAreaData
    }
}

//明长然  20161219  区域ID
export function setSysAreaId(sysAreaId) {
    return {
        type: SET_SYSAREAID,
        sysAreaId
    }
}

//明长然  20161219  单位Data
export function setSysUnitData(sysUnitData) {
    return {
        type: SET_SYSUNITDATA,
        sysUnitData
    }
}

//明长然  20161219  单位Id
export function setSysUnitId(sysUnitId) {
    return {
        type: SET_SYSUNITID,
        sysUnitId
    }
}

//明长然  20161219  部门Data
export function setSysDepartmentData(sysDepartmentData) {
    return {
        type: SET_SYSDEPARTMENTDATA,
        sysDepartmentData
    }
}

//明长然  20161219 部门ID
export function setSysDepartmentId(sysDepartmentId) {
    return {
        type: SET_SYSDEPARTMENTID,
        sysDepartmentId
    }
}
//获取监测树-外部调用
export function getMonitorTree() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        return dispatch(oDataGetMonitorTree());
    }
}
//曹志强    20161214 创建创建组织机构及角色数据Action
export function setOrganizationData(organizationData) {
    return {
        type: SET_ORGANIZATIONDATA,
        organizationData
    }
}
//曹志强    20161214 创建创建组织机构及角色数据ID Action
export function setOrganizationId(organizationId) {
    return {
        type: SET_ORGANIZATIONID,
        organizationId
    }
}
//export const SET_ORGROLEDATA = "SET_ORGROLEDATA"
//export const SET_ORGROLEID = "SET_ORGROLEID"
//曹志强    20161214 创建创建组织机构角色数据ID Action
export function setOrgRoleData(orgRoleData) {
    return {
        type: SET_ORGROLEDATA,
        orgRoleData
    }
}
//曹志强    20161214 创建创建组织机构角色数据ID Action
export function setOrgRoleId(orgRoleId) {
    return {
        type: SET_ORGROLEID,
        orgRoleId
    }
}
//曹志强    20161214 创建创建组织机构角色数据ID Action
export function setOrgRoleTree(orgRoleTree) {
    return {
        type: SET_ORGROLETREE,
        orgRoleTree
    }
}
//刘家顺 20161214 角色管理信息列表redux
export function setRoleManagerData(roleManagerData) {
    return {
        type: SET_ROLEMANGERDATA,
        roleManagerData
    }
}
//刘家顺 20161215 删除角色管理接口值
export function setDeleteRoleName(deleteRoleName) {
    return {
        type: SET_DELETEROLENAME,
        deleteRoleName
    }
}
//曹志强		20161216   创建为权限树赋值的Action
export function setPermissionTree(permissionTree){
    return {
        type: ROLE_SET_PERMISSIONTREE,
        permissionTree
    }
}
//曹志强		20161216   创建为权限树赋值的Action
export function set_PermissionTreeData(permissionTreeData){
    return {
        type: ROLE_SET_PERMISSIONTREEDATA,
        permissionTreeData
    }
}
//曹志强		20161216   获取当前角色名称Action
export function setCurRoleName(curRoleName){
    return {
        type: ROLE_SET_CURROLENAME,
        curRoleName
    }
}
//曹志强		20161216   创建为权限树赋值的Action
export function setStaticPermission(staticPermission){
    return {
        type: ROLE_SET_STATICPERMISSION,
        staticPermission
    }
}
//曹志强		20161216   创建为权限树赋值的Action
export function setIsClickTreeChange(isClickTreeChange){
    return {
        type: ROLE_SET_ISCLICKTREECHANGE,
        isClickTreeChange
    }
}
//曹志强		20161216   创建为权限树记录编辑信息的Action
export function setHandlePermission(handlePermission){
    return {
        type: ROLE_SET_HANDLEPERMISSION,
        handlePermission
    }
}
//曹志强		20161216   创建为权限树记录编辑信息的Action
export function setBeforePermission(beforePermission){
    return {
        type: ROLE_SET_BEFOREPERMISSION,
        beforePermission
    }
}
//刘家顺 20161216 编辑角色管理接口值角色名称
export function setEditRoleNameInput(editRoleNameInput) {
    return {
        type: SET_EDITROLENAMEINPUT,
        editRoleNameInput
    }
}
//刘家顺 20161216 编辑角色管理接口值角色描述
export function setEditRoleDescribeInput(editRoleDescribeInput) {
    return {
        type: SET_EDITROLEDESCRIBEINPUT,
        editRoleDescribeInput
    }
}

//刘家顺 20161219 添加角色管理 组织机构值
export function setOrganizationName(roleOrganizationName) {
    return {
        type: SET_ORGANIZATIONNAME,
        roleOrganizationName
    }
}

function oDataGetMonitorTree() {
    return dispatch => {
		    oData.getMonitorTree(dispatch,data => dispatch(getMonitorTreeData(data)));
    }
}
//获取监测树-内部调用
function getMonitorTreeData(data){
  return (dispatch, getState) => {
    var state = getState();
      var resultData = $.parseJSON(data.results[0].TREEDATA);
      if(resultData instanceof Array && resultData.length > 0){
        var newData =[];
        newData.push({
          bid: "",
          icon: "",
          id: "se",
          name:"监测树",
          open: true,
          parent: false,
          pId: "0",
          type: "all"
        });
        for(var i=0;i< resultData.length;i++){
          var nData={};
          if(resultData[i].frequency){
            nData  ={
              bid: resultData[i].bid,
              icon: resultData[i].icon,
              id: resultData[i].id,
              name:resultData[i].name,
              open:resultData[i].open,
              parent: resultData[i].parent,
              pId: resultData[i].pid,
              type: resultData[i].type,
              frequency: resultData[i].frequency+resultData[i].frequencyUtil,
              verifyErrorFrequency: resultData[i].verifyErrorFrequency+resultData[i].ErrorFrequencyUtil,
              IsVerifyerror:resultData[i].IsVerifyerror,
              isalarm:resultData[i].isalarm
            };
          }else{
            nData  ={
              bid: resultData[i].bid,
              icon: resultData[i].icon,
              id: resultData[i].id,
              name:resultData[i].name,
              open:resultData[i].open,
              parent: resultData[i].parent,
              pId: resultData[i].pid,
              type: resultData[i].type
            };
          }
           newData.push(nData);
        };
        //如果右边树有选择
        var oldTreeList = [];
        oldTreeList = state.systemReducer.oldTree;
        if(oldTreeList.length > 0 ){
          for(var i =0;i <newData.length;i++){
            for(var j=0;j < oldTreeList.length;j++){
              if(newData[i].id == oldTreeList[j].id){
                newData[i].open =oldTreeList[j].open;
              }
            }
          }
            dispatch(setMonitorTreeData(newData));
            dispatch(isShowTree(true));
        }else{
          dispatch(setMonitorTreeData(newData));
        }
        dispatch(requestDataActions.setRequestSuccess());
      }
  }
}

//设置监测器告警-外部调用
export function setMonitorIsAlarm(inputObj){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.setMonitorIsAlarm(inputObj,data => {
            dispatch(requestDataActions.setRequestSuccess());
            $.showPublicDialog("提示信息","修改成功。");
            dispatch(getMonitorTree());
        }
      );
    }
}
//刷新监测器-外部调用
export function setMonitorRefresh(inputObj){
  return dispatch => {
      dispatch(requestDataActions.setRequest());
      oData.setMonitorRefresh(inputObj,data => {
          dispatch(requestDataActions.setRequestSuccess());
          $.showPublicDialog("提示信息","修改成功。");
          dispatch(getMonitorTree());
      }
    );
  }
}
//====================报警条件 应用==================================
//设置监测器项-外部调用
export function setMonitorReturnItem(inputObj){
  return dispatch => {
      dispatch(requestDataActions.setRequest());
      oData.setMonitorReturnItem(inputObj,data => {
          dispatch(requestDataActions.setRequestSuccess());
          $.showPublicDialog("提示信息","修改成功。");
          dispatch(getMonitorTree());
      });
  }
}

//=================是否显示树============
export const ISSHOWTREE = 'ISSHOWTREE';//获取visio 数据
export function emitIsShowTree(data){
  return {
      type: ISSHOWTREE,
      data
  }
}
export function isShowTree(isShow){
  return dispatch => {
    return dispatch(emitIsShowTree(isShow));
  }
}
//=================设置条件以及选择默认条件==================
export function getMonitorReturnItem(monitorType){
  return dispatch => {
      dispatch(requestDataActions.setRequest());
      oData.getMonitorReturnItem(monitorType,dispatch,function(data){
        var resultData = $.parseJSON(data.results[0].RETURNITEM);
        if(resultData.length >0){
          var newData =[];
          for(var i=0;i<resultData.length;i++){
            newData.push({id:resultData[i].savename,name:resultData[i].showname});
          }
          dispatch(emitMonitorReturnItem(newData));
          dispatch(setMonitorReturnItemDefaultValue(newData[0]));
          dispatch(requestDataActions.setRequestSuccess());
        }
      });
  }
}

export function getSessionUsers(){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSessionUsers(dispatch,function(data){
            dispatch(setSessionUsers(data.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_allGroup(param){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getAllGroupOrg(dispatch,function(data){
            var result = data.results[0];
            result = eval(result);
            var org = result.ORGANIZATION;
            org = eval(org);
            var list = [];
            if(org == null || org == ""){
                dispatch(requestDataActions.setRequestSuccess());
                return false;
            }
            for(var i=0;i<org.length;i++){
                var pId = org[i].parentOrganization;
                var nam = org[i].organizationName;
                if(pId == null || pId == "" || pId == "undefined"){
                    pId = 0;
                }
                if(nam == null || nam == ""){
                    continue;
                }
                var ldata = {
                    id:org[i].organizationCode,
                    pid:pId,
                    name:org[i].organizationName
                };
                list.push(ldata);
            }
            dispatch(setGroups(list));
            dispatch(setAllGroupData(org));
            if(param){
              dispatch(init_tree(param));
            }
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function init_data(mark){
    return dispatch => {
        if(mark){
            dispatch(setParentCode(""));
        }else{
            dispatch(setIsUpdate(false));
            dispatch(setCurGroupData(""));
            dispatch(refreshRoleTree(""));
        }
    }
}

export function get_createInfo(that){
    return dispatch => {
        var filter = [];
        dispatch(requestDataActions.setRequest());
        oData.getCreateInfo(filter,dispatch,function(data){
            var result = data.results[0];
            var roles = result.ROLES;
            roles = eval(roles);
            var group = result.ORGANIZATION;
            group = eval(group);
            var cinfo = {
                group:group,
                roles:roles
            };
            dispatch(setCreateInfo(cinfo));
            if(that){
              dispatch(init_roleTree(that));
            };
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function set_parentCode(code){
    return dispatch => {
        dispatch(setParentCode(code));
        dispatch(setPcodeMark(true));
        dispatch(setIsUpdate(true));
    }
}

export function save_createGroup(data){
    return (dispatch, getState) => {
        var state = getState();
        dispatch(requestDataActions.setRequest());
        oData.saveCreateGroup(data,function(result){
            setTimeout(function(){
                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                $('#publicMessageModal').modal('show');
            },100);
            // window.location.reload(true);
            dispatch(setPcodeMark(false));
            dispatch(setIsUpdate(false));
            dispatch(setSysMapDataValue(""));
            dispatch(refreshRoleTree(""));
            var tree = state.systemReducer.curTree;
            var ztree = tree.getTree();
            var RecId = data.ORGANIZATIONRECID;
            var pcode = state.systemReducer.parentCode;
            var cid = data.ORGANIZATIONCODE;
            cid = cid.substring(1,cid.length-1);
            if(pcode == null || pcode == ""){
                pcode = data.PARENTORGANIZATION;
                pcode = pcode.substring(1,pcode.length-1);
            }
            dispatch(refreshTree(pcode,cid));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function set_curGroupData(data){
    return (dispatch, getState) => {
        var state = getState();
        var id = data.id;
        var list = state.systemReducer.allGroupData;
        for(var i=0;i<list.length;i++){
            var lid = list[i].organizationCode;
            if(id==lid){
                dispatch(setCurGroupData(list[i]));
                var pid = list[i].parentOrganization;
                for(var j=0;j<list.length;j++){
                    var llid = list[j].organizationCode;
                    if(pid == llid){
                        dispatch(setCurGroupData_parentOrganizationName(list[j].organizationName));
                    }
                }
                var id = list[i].organizationRecId;
                var keyName = list[i].organizationName;
                dispatch(requestDataActions.setRequest());
                oData.getOrganizationPwd(id,function(data3){
                    var pwd = data3.results[0].prop_login_pwd;
                    dispatch(setCurGroupData_organizationPwd(pwd));
                    var filter = [{key:"ORGANIZATIONNAME",value:keyName}];
                    dispatch(requestDataActions.setRequest());
                    oData.getRoles(filter,dispatch,function(data2){
                        var result = data2.results[0].ROLES;
                        result = eval(result);
                        dispatch(setCurGroupData_role(result));
                        dispatch(setIsUpdate(false));
                        dispatch(setSysMapDataValue(""));
                        if(result!=null && result!="" && result.length<=0){
                            dispatch(refreshRoleTree(""));
                        }else{
                            dispatch(refreshRoleTree(result));
                        }
                        dispatch(requestDataActions.setRequestSuccess());
                    });
                    dispatch(requestDataActions.setRequestSuccess());
                });
            }
        }
    }
}

export function get_safeGroups(){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSafeGroups(dispatch,function(data){
            if(data.results.length == 0){
                return;
            }
            dispatch(setSafeGroups(eval(data.results)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_userOrganization(filter){
    return dispatch => {
        dispatch(setUserOrganization([]));
        dispatch(requestDataActions.setRequest());
        oData.getUserOrganization(filter, dispatch,function(data){
            if(data.results.length == 0){
                return;
            }
            dispatch(setUserOrganization(eval(data.results)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_pureOrganization(filter){
    return dispatch => {
        dispatch(setPureOrganization([]));
        dispatch(requestDataActions.setRequest());
        oData.getPureOrganization(filter, dispatch,function(data){
            if(data.results.length == 0){
                return;
            }
            dispatch(setPureOrganization(eval(data.results)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_allUser(){
    return dispatch => {
          dispatch(setUsers([]));
        var filter = [{key:"OPERATOR_TYPE",value:'GET'}];
        console.log("filter=" + filter);
        dispatch(requestDataActions.setRequest());
        oData.sysUser(filter, function(data){
            if(data.results.length == 0){
                return;
            }
            dispatch(setUsers(eval(data.results)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//明长然 20161216  主管人GET数据
export function get_proFileData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getProFileData(function (data) {
            dispatch(setProFileData(data.results));
            dispatch(setProFileId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//明长然 20161216  区域GET数据
export function get_sysAreaData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSysAreaData(function (data) {
            dispatch(setSysAreaData(data.results));
            dispatch(setSysAreaId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//明长然  20161219 单位GET数据
export function get_sysUnitData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSysUnitData(function (data) {
            dispatch(setSysUnitData(data.results));
            dispatch(setSysUnitId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}

//明长然  20161219  部门GET数据
export function get_sysDepartmentData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSysDepartmentData(function (data) {
            dispatch(setSysDepartmentData(data.results));
            dispatch(setSysDepartmentId(""));
            dispatch(requestDataActions.setRequestSuccess());
        })
    }
}
export function add_user(filter){
    return dispatch => {
        filter.unshift({key:"OPERATOR_TYPE",value:'ADD'});
        dispatch(requestDataActions.setRequest());
        oData.sysUser(filter, function(data){
            if(data.results.length == 0){
                dispatch(requestDataActions.setRequestFail());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "新建用户失败！"
                    $('#publicMessageModal').modal('show');
                },100);
                return;
            }
            var obj = eval(data.results);
            if(obj[0].OUT_FLAG == "true") {
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "新建用户成功！"
                    $('#publicMessageModal').modal('show');
                },100);
                dispatch(get_allUser());
//              window.location.href = '#/systemManage/userListPage';
            }
            else if(obj[0].OUT_FLAG == "exists") {
                dispatch(requestDataActions.setRequestFail());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "用户名已存在！"
                    $('#publicMessageModal').modal('show');
                },100);
                dispatch(get_allUser());
            }
            else {
                dispatch(requestDataActions.setRequestFail());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "新建用户失败！"
                    $('#publicMessageModal').modal('show');
                },100);
            }
        });
    }
}

export function edit_user(filter){
    return dispatch => {
        filter.unshift({key:"OPERATOR_TYPE",value:'EDIT'});
        dispatch(requestDataActions.setRequest());
        oData.sysUser(filter, function(data){
            if(data.results.length == 0){
                dispatch(requestDataActions.setRequestFail());
//              setTimeout(function(){
//                  document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//                  document.getElementById('publicMessageModalcontent').innerHTML = "修改用户失败！"
//                  $('#publicMessageModal').modal('show');
//              },100);
				alert("修改用户失败！！");
                dispatch(get_allUser());
                return;
            }
            var obj = eval(data.results);
            if(obj[0].OUT_FLAG == "true") {
                dispatch(requestDataActions.setRequestSuccess());
                alert("修改用户成功！！");
                dispatch(get_allUser());
               // window.location.href = '不是这里';
            }
            else {
                dispatch(requestDataActions.setRequestFail());
//              setTimeout(function(){
//                  document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//                  document.getElementById('publicMessageModalcontent').innerHTML = "修改用户失败！"
//                  $('#publicMessageModal').modal('show');
//              },100);
				alert("修改用户失败!");
                dispatch(get_allUser());
            }
        });
    }
}

export function delete_user(loginId){
    return dispatch => {
        var filter = [{key:"OPERATOR_TYPE",value:"DELETE"},{key:"LOGIN_ID",value:loginId}];
        dispatch(requestDataActions.setRequest());
        oData.sysUser(filter, function(data){
            if(data.results.length == 0){
                dispatch(requestDataActions.setRequestFail());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "删除用户失败！"
                    $('#publicMessageModal').modal('show');
                },100);
                return;
            };
            var obj = eval(data.results);
            if(obj[0].OUT_FLAG == "true") {
                dispatch(requestDataActions.setRequestSuccess());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "删除用户成功！"
                    $('#publicMessageModal').modal('show');
                },100);
            }
            else {
                dispatch(requestDataActions.setRequestFail());
                setTimeout(function(){
                    document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                    document.getElementById('publicMessageModalcontent').innerHTML = "删除用户失败！"
                    $('#publicMessageModal').modal('show');
                },100);
            }
        });
    }
}

export function set_selectedUser(params){
    return dispatch => {
        dispatch(setSelectedUser(params.user));
        dispatch(setOperationFlag(params.flag));
    }
}

export function changePassword(params){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.changePassword(params, function(data){
            if(data.results.length == 0){
                dispatch(requestDataActions.setRequestFail());
                return;
            }
            var obj = eval(data.results);
            if(obj[0].FLAG == "0") {
                alert(obj[0].MESSAGE);
            }
            else {
                params.map(function(obj,i){
                    var key = obj.key;
                    var value = obj.value;
                    if(key == "LOGIN_ID") {
                        if(value == "") {
                            setTimeout(function(){
                                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                                document.getElementById('publicMessageModalcontent').innerHTML = "修改成功，程序将自动跳转到登录页面。"
                                $('#publicMessageModal').modal('show');
                            },100);
                            $("#changePasswordModal").modal("hide");
                            var token = Store.get("token");
                            var serviceAddress = Store.get("serviceUrl");
                            if(token != '') {
                                Store.set("token","");
                                //url 地址中可能包括中文字符所以需要对此生成 地址进行转码
                                var rquestUri = serviceAddress+"Logout?token="+token;
                                //Js的Url中传递中文参数乱码问题，重点：encodeURI编码，decodeURI解码
                                rquestUri = encodeURI(rquestUri);
                                $.ajax({
                                    type: "get",
                                    async: false,
                                    url:rquestUri,
                                    dataType: "json",
                                    success : function(result){

                                    },error : function(result){
                                        // console.log(result.responseText);
                                    }
                                });
                            }
                            
                        }
                        else {
                            setTimeout(function(){
                                document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                                document.getElementById('publicMessageModalcontent').innerHTML = "重置成功。"
                                $('#publicMessageModal').modal('show');
                            },100);
                            $("#changePasswordModal").modal("hide");
//                          window.location.href="index.html";
                        }
                    }
                });
            }
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function delete_groupById(param){
    return dispatch => {
        var filter = [{key:"ORGANIZATIONRECID",value:param.rid},{key:"ORGANIZATIONNAME",value:param.rname},{key:"SAFETYGROUPID",value:param.sid},{key:"ORGANIZATIONCODE",value:param.code},{key:"DELETE_ALL",value:"false"}];
        dispatch(requestDataActions.setRequest());
        oData.deleteOrganization(filter,function(data){
            dispatch(refreshTree());
            dispatch(refreshRoleTree(""));
            $("#createGroupCode").attr("disabled",false);
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function get_roles(organizationName){
    return dispatch => {
        var filter = [{key:"ORGANIZATIONNAME", value:organizationName}];
        dispatch(requestDataActions.setRequest());
        oData.getRoles(filter, dispatch,function(data){
            if(data.results.length == 0){
                return;
            };
            var result = data.results[0].ROLES;
            dispatch(setRoles(eval(result)));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

//明长然  20161220 获取职位
export function get_position(departmentId){
    return dispatch => {
        var filter = [{key:"DEPARTMENT_ID", value:departmentId}];
        dispatch(requestDataActions.setRequest());
        oData.getPosition(filter, dispatch,function(data){
            if(data.results.length == 0){
                return;
            };
            var result = data.results;
            let dataArr = [];
            dataArr.push({POSITION_ID:"",POSITION_NAME:""});
            for(let i =0;i<result.length;i++){
                dataArr.push(result[i]);
            }
            dispatch(setPositions(dataArr));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
export function init_tree(param){
    return (dispatch, getState) => {
        var state = getState();
        param.initTree(state.systemReducer.groups);
        dispatch(setCurTree(param));
    }
}

function refreshTree(paramId,paramId2){
    return (dispatch, getState) => {
        var state = getState();
        dispatch(requestDataActions.setRequest());
        oData.getAllGroupOrg(dispatch,function(data){
            var result = data.results[0];
            result = eval(result);
            var org = result.ORGANIZATION;
            org = eval(org);
            var list = [];
            for(var i=0;i<org.length;i++){
                var pId = org[i].parentOrganization;
                var nam = org[i].organizationName;
                if(pId == null || pId == ""){
                    pId = 0;
                }
                if(nam == null || nam == ""){
                    continue;
                }
                var ldata = {
                    id:org[i].organizationCode,
                    pid:pId,
                    name:org[i].organizationName
                };
                list.push(ldata);
            }
            dispatch(setGroups(list));
            dispatch(setAllGroupData(org));
            dispatch(setCurGroupData(""));
            var curTree = state.systemReducer.curTree;
            if(paramId!=null && paramId!="" && paramId2!=null && paramId2!=""){
                curTree.initTree(list);
                var tree = curTree.getTree();
                var targetNode = tree.getNodeByParam("id",paramId2);
                tree.selectNode(targetNode);
                dispatch(set_curGroupData(targetNode));
                var tname = targetNode.name;
                $(".systemGroupButtonGroup1").find(".titleLeft").find(".extraText").text("-"+tname);
                var isParent = targetNode.isParent;
                if(isParent){
                    $("#createGroupCode").attr("disabled",true);
                }else{
                    $("#createGroupCode").attr("disabled",false);
                }
            }else {
                curTree.initTree(list);
            }
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function delete_groupAll(param){
    return dispatch => {
        var filter = [{key:"ORGANIZATIONRECID",value:param.rid},{key:"ORGANIZATIONNAME",value:param.rname},{key:"SAFETYGROUPID",value:param.sid},{key:"ORGANIZATIONCODE",value:param.code},{key:"DELETE_ALL",value:"true"}];
        dispatch(requestDataActions.setRequest());
        oData.deleteOrganization(filter,function(data){
            dispatch(refreshTree());
            dispatch(refreshRoleTree(""));
            $("#createGroupCode").attr("disabled",false);
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function set_groupRoleData(data){
    return dispatch => {
        dispatch(setCurGroupData_role(data));
        dispatch(setIsUpdate(true));
    }
}

export function init_roleTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var roles = state.systemReducer.createInfo.roles;
        var dataList = [];
        if(roles){
          for(var i=0;i<roles.length;i++){
              dataList.push({id:i+1,name:roles[i],pid:0});
          }
        }
        dispatch(setRoleTree(data));
        data.initTree(dataList);
    }
}

function refreshRoleTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var roleTree = state.systemReducer.roleTree;
        var roles = state.systemReducer.createInfo.roles;
        var dataList = [];
        if(data!=null && data!="" && data.length>0){
            for(var i=0;i<roles.length;i++){
                var mark = false;
                for(var j=0;j<data.length;j++){
                    if(roles[i]==data[j]){
                        mark = true;
                        break;
                    }
                }
                if(mark){
                    dataList.push({id:i+1,name:roles[i],pid:0,checked:true});
                }else{
                    dataList.push({id:i+1,name:roles[i],pid:0});
                }
            }
        }else{
            for(var i=0;i<roles.length;i++){
                dataList.push({id:i+1,name:roles[i],pid:0});
            }
        }
        roleTree.initTree(dataList);
    }
}

export function get_sysMapData(){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.getSysMapData(function(data){
            dispatch(setSysMapData(data.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}

export function set_sysMapDataValue(data){
    return dispatch => {
        dispatch(setSysMapDataValue(data));
        dispatch(setIsUpdate(true));
    }
}

//曹志强 20161214 获取组织机构功能数据
export function get_organizationData() {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getOrganizationData(function(data){
			var results = data.results;
            dispatch(setOrganizationData(results));
            dispatch(setOrganizationId(""));
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强  20161214 删除组织机构功能的数据
export function delete_organizationData() {
	return (dispatch, getState) => {
        var state = getState();
		var id = state.systemReducer.organizationId;
		if(id==null || id==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		}
		var param = {ORGANIZATIONNAME:id,ORGANIZATIONCODE:id};
        dispatch(requestDataActions.setRequest());
		oData.deleteOrganizationData(param,function(data2){
			$("#orgNameInput").val("");
			$("#orgDescInput").val("");
            dispatch(setOrganizationId(""));
            dispatch(get_organizationData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}
//曹志强  20161214 增加和编辑组织机构管理功能数据
export function save_organizationData(data) {
    return (dispatch, getState) => {
        var state = getState();
        var id = state.systemReducer.organizationId;
		var organizationData = state.systemReducer.organizationData;
		for(var i=0;i<organizationData.length;i++){
			var bname = organizationData[i].FDNAME;
			if(data[0] == bname){
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "组织机构名称已存在"
					$('#publicMessageModal').modal('show');
				},100);
				return false;
			}
		}
		if(id!=null && id!="" && id != undefined && id != "undefined"){
			var param = {ORGANIZATIONNAME:data[0],ORGANIZATIONCODE:data[0], ORGANIZATIONDES:data[1], ROLES:data[2], SAFETYGROUPID:id};
            dispatch(requestDataActions.setRequest());
			oData.editOrganizationData(param,function(data2){
				$("#orgNameInput").val("");
				$("#orgDescInput").val("");
                dispatch(setOrganizationId(""));
                dispatch(get_organizationData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "保存完成"
					$('#publicMessageModal').modal('show');
				},100);
			});
		}else{
			var param = {ORGANIZATIONNAME:data[0],ORGANIZATIONCODE:data[0], ORGANIZATIONDES:data[1],ROLES:data[2]};
            dispatch(requestDataActions.setRequest());
			oData.addOrganizationData(param,function(data2){
				$("#orgNameInput").val("");
				$("#orgDescInput").val("");
                dispatch(setOrganizationId(""));
                dispatch(get_organizationData());
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
//曹志强 20161214 获取组织机构全部角色功能数据
export function get_orgRoleData(that) {
    return dispatch => {
        dispatch(requestDataActions.setRequest());
		oData.getOrgRoleData(function(data){
			var results = data.results;
            dispatch(setOrgRoleData(results));
            dispatch(setOrgRoleId(""));
            if(that){
            	dispatch(init_orgRoleTree(that));
            }
            dispatch(requestDataActions.setRequestSuccess());
		});
    }
}
//曹志强 20161208 获取组织机构全部角色功能数据
export function init_orgRoleTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var orgRole = state.systemReducer.orgRoleData;
        var dataList = [];
        if(orgRole != null && orgRole.length> 0){
          for(var i=0;i<orgRole.length;i++){
              dataList.push({id:i+1,name:orgRole[i].ROLE_NAME,value:orgRole[i].ROLE_NAME,pid:0});
          }
        }
        dispatch(setOrgRoleTree(data));
        data.initTree(dataList);
    }
}
//曹志强 20161208 将编辑厂商信息以树的形势实现
export function init_editOrgRoleTree(roles){
	return (dispatch, getState) => {
		var dataList = [];
		var state = getState();
        var proMag = state.systemReducer.orgRoleData;
        var data = state.systemReducer.orgRoleTree;
        var orgRoles = roles.split(",");
		if(orgRoles != null && orgRoles != "" && orgRoles.length > 0){
			for(var i=0;i<proMag.length;i++){
                var mark = false;
                for(var j=0;j<orgRoles.length;j++){
                    if(proMag[i].ROLE_NAME.indexOf(orgRoles[j].trim())>=0){
                        mark = true;
                        break;
                    }
                }
                if(mark){
                	dataList.push({id:i+1,name:proMag[i].ROLE_NAME,value:proMag[i].ROLE_NAME,pid:0,checked:true});
                }else{
                    dataList.push({id:i+1,name:proMag[i].ROLE_NAME,value:proMag[i].ROLE_NAME,pid:0});
                }
            }
		}else{
            for(var i=0;i<proMag.length;i++){
                dataList.push({id:i+1,name:proMag[i].ROLE_NAME,value:proMag[i].ROLE_NAME,pid:0});
            }
        }
        data.initTree(dataList);
		
	}
}
//刘家顺 20161214 获取角色管理数据
export function get_roleManagerData(){
    return dispatch => {
        dispatch(requestDataActions.setRequest());
        oData.roleManagerData(function(data){
            dispatch(setRoleManagerData(data.results));
            dispatch(requestDataActions.setRequestSuccess());
        });
    }
}
//刘家顺 20161214 删除角色管理数据

export function delete_roleData() {
    return (dispatch, getState) => {
        var state = getState();       
//      OPERATOR_TYPE  DELETE
		var deleteRoleName = state.systemReducer.deleteRoleName;
		console.log(deleteRoleName)
		if(deleteRoleName==null || deleteRoleName==""){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "请选择要删除的记录"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
		if(deleteRoleName=='管理员'){
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "不可以删除管理员"
				$('#publicMessageModal').modal('show');
			},100);
			return false;
		};
        dispatch(requestDataActions.setRequest());
		oData.deleteRoleData(deleteRoleName,function(data2){
            dispatch(setDeleteRoleName(""));
            dispatch(get_roleManagerData());
            dispatch(requestDataActions.setRequestSuccess());
			setTimeout(function(){
				document.getElementById('publicMessageModelTitle').innerHTML = "提示"
				document.getElementById('publicMessageModalcontent').innerHTML = "删除完成"
				$('#publicMessageModal').modal('show');
			},100);
		});
    }
}



//刘家顺	20161213  角色编辑管理
export function edit_roleData(data) {
    return (dispatch, getState) => {
        var state = getState();   
        //获取编写的值
        var roleManagerData = state.systemReducer.roleManagerData;
        var editRoleNameInput = state.systemReducer.editRoleNameInput;
		var param = {ROLE_NAME:data[0],OLD_ROLE_NAME:editRoleNameInput,ROLE_DESC:data[1]};
		console.log(param)
//		for(var i=0;i<roleManagerData.length;i++){
//				var bname = roleManagerData[i].ROLE_NAME;
//				if(data[0] == bname){
//					setTimeout(function(){
//						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
//						document.getElementById('publicMessageModalcontent').innerHTML = "角色名称已存在"
//						$('#publicMessageModal').modal('show');
//					},100);
//					return false;
//				}
//			}
            dispatch(requestDataActions.setRequest());
			oData.editRoleData(param,function(data){
                dispatch(setEditRoleNameInput(""));
                dispatch(get_roleManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "编辑完成"
					$('#publicMessageModal').modal('show');
				},100);
				 $("#editRoleNameInput").val("");
                $("#editRoleDescribeInput").val("");
			});
    }
    }
////刘家顺	20161216  增加角色管理
export function add_roleData(data) {
    return (dispatch, getState) => {
        var state = getState();   
      
//      var addRoleName= $("#roleNameInput").val();
//      var addRoleDescribe= $("#roleDescribeInput").val();
        var roleOrganizationName = state.systemReducer.roleOrganizationName;
        var id = state.systemReducer.organizationId;
//        console.log(addRoleName)
//        console.log(addRoleDescribe)
          console.log(roleOrganizationName)
        var roleManagerData = state.systemReducer.roleManagerData;
          
		var param = {ORANIZATION_NAME:roleOrganizationName,ROLE_NAME:data[1],ROLE_DESC:data[2]};
		console.log(param)
		
		
		for(var i=0;i<roleManagerData.length;i++){
				var bname = roleManagerData[i].ROLE_NAME;
				if(data[1] == bname){
					setTimeout(function(){
						document.getElementById('publicMessageModelTitle').innerHTML = "提示"
						document.getElementById('publicMessageModalcontent').innerHTML = "角色名称已存在"
						$('#publicMessageModal').modal('show');
					},100);
					return false;
				}
			}
            dispatch(requestDataActions.setRequest());
			oData.adddRoleData(param,function(data){
             	 dispatch(setOrganizationName(""));
             	 dispatch(setOrganizationId(""));
                dispatch(get_roleManagerData());
                dispatch(requestDataActions.setRequestSuccess());
				setTimeout(function(){
					document.getElementById('publicMessageModelTitle').innerHTML = "提示"
					document.getElementById('publicMessageModalcontent').innerHTML = "添加完成"
					$('#publicMessageModal').modal('show');
				},100);
		    $("#roleOranizationSelect").find(".rw-input").text("请选择");
			$("#roleDescribeInput").val("");
            $("#roleNameInput").val("");
			});
    }
    }

    
//曹志强		20161216   初始化权限树
export function initPermissionTree(param){
    return (dispatch, getState) => {
        dispatch(setPermissionTree(param));
        var state = getState();
        var data = state.systemReducer.permissionTreeData;
        dispatch(refreshPermissionTree(data));
    }
}
//曹志强		20161216   刷新权限树
export function refreshPermissionTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var tree = state.systemReducer.permissionTree;
        if(tree!=null && tree!=""){
            tree.initTree(data);
        };
    }
}
//曹志强		20161216   监测权限树
export function checkPermissionTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var tree = state.systemReducer.permissionTree;
        if(tree!=null && tree!=""){
            tree.checkTree(data);
        };
    }
}
//曹志强		20161216   获取权限信息，并初始化树
export function getPermissionTreeData(data){
    return dispatch => {
        if(data!=null && data!=""){
            dispatch(requestDataActions.setRequest());
            oData.getOperationPermissions(data,dispatch,function(data2){
                var permis = data2;
                var ids = [];
                var idss = [];
                for(var i=0;i<permis.length;i++){
                    var mark = permis[i].checked;
                    var dismark = permis[i].chkDisabled;
                    if(mark=="true"){
                        ids.push(permis[i]);
                    };
                    if(dismark=="true"){
                        idss.push(permis[i]);
                    };
                };
                dispatch(setStaticPermission(idss));
                dispatch(setBeforePermission(ids));
                dispatch(setCurRoleName(data));
                dispatch(setIsClickTreeChange(false));
                dispatch(setHandlePermission(""));
                dispatch(refreshPermissionTree(permis));
                dispatch(requestDataActions.setRequestSuccess());
            });
        }
        else{
            var temp = Store.get("PERMISSIONS");
            if(temp!=null&&temp!=""){
                temp = base64.base64decode(temp);
                temp = decodeURI(temp);
                var ttemp = eval(temp);
                dispatch(set_PermissionTreeData(ttemp));
                dispatch(setIsClickTreeChange(false));
                dispatch(refreshPermissionTree(ttemp));
            }
        }
    }

    return dispatch => {}
}

//曹志强		20161216   为权限树赋值
export function setPermissionTreeData(data){
    return dispatch => {
        dispatch(setHandlePermission(data));
        dispatch(setIsClickTreeChange(true));
    }
}
//曹志强		20161216   保存编辑的权限信息
export function savePermissionTree(data){
    return (dispatch, getState) => {
        var state = getState();
        var prep = state.systemReducer.beforePermission;
        var newp = state.systemReducer.handlePermission;
        var isClickTreeChange = state.systemReducer.isClickTreeChange;
        var roleName = state.systemReducer.curRoleName;
        if(prep.length == 0){
            var valList = "[";
            for(var i=0;i<newp.length;i++){
                var val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+newp[i].parentId+"','action':'"+newp[i].action+"','resourceType':'"+newp[i].resourceType+"','instanceName':'"+newp[i].instanceName+"'},";
                if(i==newp.length-1){
                    val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+newp[i].parentId+"','action':'"+newp[i].action+"','resourceType':'"+newp[i].resourceType+"','instanceName':'"+newp[i].instanceName+"'}]";
                };
                valList+=val;
            };
            if(newp.length == 0){
                valList += "]";
            };
            var filter = {name:roleName,group:valList};
            oData.addOperationPermissions(filter,function(data){
                var mark = data[0].OUT_FLAG;
                if(mark=="true"){
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                        $('#publicMessageModal').modal('show');
                    },100);
                    dispatch(setHandlePermission(""));
                    dispatch(setBeforePermission(newp));
                }
                else{
                    setTimeout(function(){
                        document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                        document.getElementById('publicMessageModalcontent').innerHTML = "保存失败。"+data[0].ERROR_MSG;
                        $('#publicMessageModal').modal('show');
                    },100);
                };
            });
        }
        else{
            if(newp.length == 0 && isClickTreeChange){
                oData.deleteOperationPermissions(roleName,function(data){
                    var mark = data[0].OUT_FLAG;
                    if(mark=="true"){
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                            $('#publicMessageModal').modal('show');
                        },100);
                        dispatch(setHandlePermission(""));
                        dispatch(setBeforePermission(""));
                    }
                    else{
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存失败。"+data[0].ERROR_MSG;
                            $('#publicMessageModal').modal('show');
                        },100);
                    };
                });
            }
            else{
                if(newp.length == 0){
                    newp = prep;
                };
                var valList = "[";
                for(var i=0;i<newp.length;i++){
                    var val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+newp[i].parentId+"','action':'"+newp[i].action+"','resourceType':'"+newp[i].resourceType+"','instanceName':'"+newp[i].instanceName+"'},";
                    if(i==newp.length-1){
                        val = "{'resourceId':'"+newp[i].resourceId+"','resourceName':'"+newp[i].resourceName+"','parentId':'"+newp[i].parentId+"','action':'"+newp[i].action+"','resourceType':'"+newp[i].resourceType+"','instanceName':'"+newp[i].instanceName+"'}]";
                    };
                    valList+=val;
                };
                var valList2 = "[";
                for(var i=0;i<prep.length;i++){
                    var pid = prep[i].parentId;
                    if(pid == ""){
                        pid = null
                    };
                    var val = "{'resourceId':'"+prep[i].resourceId+"','resourceName':'"+prep[i].resourceName+"','parentId':'"+pid+"','action':'"+prep[i].action+"','resourceType':'"+prep[i].resourceType+"','instanceName':'"+prep[i].instanceName+"'},";
                    if(i==prep.length-1){
                        val = "{'resourceId':'"+prep[i].resourceId+"','resourceName':'"+prep[i].resourceName+"','parentId':'"+pid+"','action':'"+prep[i].action+"','resourceType':'"+prep[i].resourceType+"','instanceName':'"+prep[i].instanceName+"'}]";
                    };
                    valList2+=val;
                };
                var filter = {name:roleName,group:valList2,newgroup:valList};
                oData.editOperationPermissions(filter,function(data){
                    var mark = data[0].OUT_FLAG;
                    var message = data[0].ERROR_MSG;
                    if(mark=="true"){
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存完成。"
                            $('#publicMessageModal').modal('show');
                        },100);
                        dispatch(setHandlePermission(""));
                        dispatch(setBeforePermission(newp));
                    }
                    else{
                        setTimeout(function(){
                            document.getElementById('publicMessageModelTitle').innerHTML = "提示"
                            document.getElementById('publicMessageModalcontent').innerHTML = "保存失败。"+message;
                            $('#publicMessageModal').modal('show');
                        },100);
                    };
                });
            };
        };
    }
}