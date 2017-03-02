/**
* 系统设置相关的redux方法
*/
import { combineReducers } from 'redux'
import {
  ISSHOWTREE, SET_MONITOR_TREE, SET_MONITOR_TREE_CHECKEDNODES, SET_TREE_CLEAR, SET_MONITOR_TYPE_ARRAY,
  SET_MONITOR_RETURNITEM, SET_MONITORRE_TURNITEMDEFAULT_VALUE, SET_MONITORRE_TREE_INIT, SET_MONITORRE_TREE_IDS,
  SET_GROUPS, SET_ALLGROUPDATA, SET_CREATEINFO, SET_PARENTCODE, SET_CURGROUPDATA,
  SET_CURGROUPDATA_PARENTORGANIZATIONNAME, SET_CURGROUPDATA_ORGANIZATIONPWD, SET_CURGROUPDATA_ROLE,
  SET_SAFEGROUPS, SET_USERORGANIZATION, SET_PUREORGANIZATION, SET_USERS, SET_SELECTEDUSER,
  SET_OPERATIONFLAG, SET_CHANGEPASSWORDFLAG, SET_ROLES, SET_CURTREE, SET_PCODEMARK,
  SET_PERMISSIONS, SET_ISUPDATE, SET_ROLETREE, SET_SESSIONUSERS, SET_USERINFOCHANGEFLAG, SET_SYSMAPDATA, SET_SYSMAPDATAVALUE,SET_RIGHT_SYSTEMPAGE,
  SET_ORGANIZATIONDATA, SET_ORGANIZATIONID, SET_ORGROLEDATA, SET_ORGROLEID,SET_ORGROLETREE, SET_ROLEMANGERDATA, SET_DELETEROLENAME,ROLE_SET_PERMISSIONTREEDATA,
  ROLE_SET_PERMISSIONTREE,ROLE_SET_CURROLENAME,ROLE_SET_STATICPERMISSION,ROLE_SET_ISCLICKTREECHANGE,ROLE_SET_HANDLEPERMISSION,ROLE_SET_BEFOREPERMISSION, SET_EDITROLENAMEINPUT, 
  SET_EDITROLEDESCRIBEINPUT, SET_ORGANIZATIONNAME,SET_PROFILEDATA, SET_PROFILEID, SET_SYSAREADATA, SET_SYSAREAID,SET_SYSUNITDATA,SET_SYSUNITID,SET_SYSDEPARTMENTDATA,SET_SYSDEPARTMENTID,SET_POSITIONS
} from '../actions/system_action'

function isShowTree(state = true ,action){
  switch (action.type) {
      case ISSHOWTREE:
        return action.data;
      default:
        return state
  }
}

function monitorTree(state = [], action) {
    switch (action.type) {
        case SET_MONITOR_TREE:
          return action.monitorTreeData
        default:
          return state
    }
};

function oldTree(state = [], action) {
    switch (action.type) {
        case SET_MONITOR_TREE_CHECKEDNODES:
          return action.checkedNodes
        default:
          return state
    }
};

function isTreeClear(state = false, action) {
    switch (action.type) {
        case SET_TREE_CLEAR:
          return action.flag;
        default:
          return state
    }
};

function monitorTypeArray(state = [], action) {
    switch (action.type) {
        case SET_MONITOR_TYPE_ARRAY:
          return action.monitorTypeArray
        default:
          return state
    }
};

function monitorReturnItem(state = [], action) {
    switch (action.type) {
        case SET_MONITOR_RETURNITEM:
           return action.monitorReturnItem
        default:
          return state
    }
};

function monitorReturnItemDefaultValue(state = '', action) {
    switch (action.type) {
        case SET_MONITORRE_TURNITEMDEFAULT_VALUE:
          return action.monitorReturnItemDefaultValue;
        default:
          return state
    }
};

function monitorTreeInit(state = null, action) {
    switch (action.type) {
        case SET_MONITORRE_TREE_INIT:
          return action.value;
        default:
          return state
    }
};

function treeIds(state = '', action) {
    switch (action.type) {
        case SET_MONITORRE_TREE_IDS:
          return action.treeIds;
        default:
          return state
    }
};

function groups(state = [], action) {
    switch (action.type) {
        case SET_GROUPS:
          return action.groups
        default:
          return state
    }
}

function allGroupData(state = [], action) {
    switch (action.type) {
        case SET_ALLGROUPDATA:
          return action.allGroupData
        default:
          return state
    }
}

function createInfo(state = "", action) {
    switch (action.type) {
        case SET_CREATEINFO:
          return action.createInfo
        default:
          return state
    }
}

function parentCode(state = "", action) {
    switch (action.type) {
        case SET_PARENTCODE:
          return action.parentCode
        default:
          return state
    }
}

function curGroupData(state = null, action) {
    switch (action.type) {
        case SET_CURGROUPDATA:
          return action.curGroupData
        case SET_CURGROUPDATA_PARENTORGANIZATIONNAME:
          return Object.assign({}, state, {
              parentOrganizationName: action.parentOrganizationName
          })
        case SET_CURGROUPDATA_ORGANIZATIONPWD:
          return Object.assign({}, state, {
              organizationPwd: action.organizationPwd
          })
        case SET_CURGROUPDATA_ROLE:
          return Object.assign({}, state, {
              role: action.role
          })
        default:
          return state
    }
}

function safeGroups(state = [], action) {
    switch (action.type) {
        case SET_SAFEGROUPS:
          return action.safeGroups
        default:
          return state
    }
}

function userOrganization(state = [], action) {
    switch (action.type) {
        case SET_USERORGANIZATION:
          return action.userOrganization
        default:
          return state
    }
}

function pureOrganization(state = [], action) {
    switch (action.type) {
        case SET_PUREORGANIZATION:
          return action.pureOrganization
        default:
          return state
    }
}

function users(state = [], action) {
    switch (action.type) {
        case SET_USERS:
          return action.users
        default:
          return state
    }
}

function selectedUser(state = null, action) {
    switch (action.type) {
        case SET_SELECTEDUSER:
          return action.selectedUser
        default:
          return state
    }
}

function operationFlag(state = "add", action) {
    switch (action.type) {
        case SET_OPERATIONFLAG:
          return action.operationFlag
        default:
          return state
    }
}

function changePasswordFlag(state = "change", action) {
    switch (action.type) {
        case SET_CHANGEPASSWORDFLAG:
          return action.changePasswordFlag
        default:
          return state
    }
}

function roles(state = [], action) {
    switch (action.type) {
        case SET_ROLES:
          return action.roles
        default:
          return state
    }
}

function positions(state = [], action) {
    switch (action.type){
        case SET_POSITIONS:
            return action.positions;
        default:
            return state
    }
}
function curTree(state = "", action) {
    switch (action.type) {
        case SET_CURTREE:
          return action.curTree
        default:
          return state
    }
}

function pcodeMark(state = false, action) {
    switch (action.type) {
        case SET_PCODEMARK:
          return action.pcodeMark
        default:
          return state
    }
}

function permissions(state = "", action) {
    switch (action.type) {
        case SET_PERMISSIONS:
          return action.permissions
        default:
          return state
    }
}

function isUpdate(state = false, action) {
    switch (action.type) {
        case SET_ISUPDATE:
          return action.isUpdate
        default:
          return state
    }
}

function roleTree(state = "", action) {
    switch (action.type) {
        case SET_ROLETREE:
          return action.roleTree
        default:
          return state
    }
}

function sessionUsers(state = [], action) {
    switch (action.type) {
        case SET_SESSIONUSERS:
          return action.sessionUsers
        default:
          return state
    }
}

function userInfoChangeFlag(state = false, action) {
    switch (action.type) {
        case SET_USERINFOCHANGEFLAG:
          return action.userInfoChangeFlag
        default:
          return state
    }
}

function sysMapData(state = [], action) {
    switch (action.type) {
        case SET_SYSMAPDATA:
          return action.sysMapData
        default:
          return state
    }
}

function sysMapDataValue(state = "", action) {
    switch (action.type) {
        case SET_SYSMAPDATAVALUE:
          return action.sysMapDataValue
        default:
          return state
    }
}

function rightSystemPage(state="", action){
	 switch (action.type) {
        case SET_RIGHT_SYSTEMPAGE:
          return action.rightSystemPage
        default:
          return state
    }
}

//明长然 20161216  主管人数据
function proFileData(state = [], action) {
    switch (action.type) {
        case SET_PROFILEDATA:
            return action.proFileData;
        default:
            return state;
    }
}

//明长然  20161216  主管人ID
function proFileId(state = "", action) {
    switch (action.type) {
        case SET_PROFILEID:
            return action.proFileId;
        default:
            return state;
    }
}

//明长然  20161216  区域Data
function sysAreaData(state = [], action) {
    switch (action.type) {
        case SET_SYSAREADATA:
            return action.sysAreaData;
        default:
            return state;
    }
}

//明长然  20161216  区域ID
function sysAreaId(state = "", action) {
    switch (action.type) {
        case SET_SYSAREAID:
            return action.sysAreaId;
        default:
            return state;
    }
}

//明长然  20161219  单位DATA
function sysUnitData(state = [], action) {
    switch (action.type){
        case SET_SYSUNITDATA:
            return action.sysUnitData;
        default:
            return state;
    }
}

//明长然  20161219  单位ID
function sysUnitId(state = "", action) {
    switch (action.type){
        case SET_SYSUNITID:
            return action.sysUnitId;
        default:
            return state;
    }
}

//明长然  20161219  部门Data
function sysDepartmentData(state = [], action) {
    switch (action.type){
        case SET_SYSDEPARTMENTDATA:
            return action.sysDepartmentData;
        default:
            return state;
    }
}

//明长然  20161219  部门ID
function sysDepartmentId(state = "", action) {
    switch (action.type){
        case SET_SYSDEPARTMENTID:
            return action.sysDepartmentId;
        default:
            return state;
    }
}

function organizationData(state=[], action){
	 switch (action.type) {
        case SET_ORGANIZATIONDATA:
          return action.organizationData
        default:
          return state
    }
}

function organizationId(state="", action){
	 switch (action.type) {
        case SET_ORGANIZATIONID:
          return action.organizationId
        default:
          return state
    }
}

function orgRoleData(state=[], action){
	 switch (action.type) {
        case SET_ORGROLEDATA:
          return action.orgRoleData
        default:
          return state
    }
}
function orgRoleId(state=[], action){
	 switch (action.type) {
        case SET_ORGROLEID:
          return action.orgRoleId
        default:
          return state
    }
}
function orgRoleTree(state=[], action){
	 switch (action.type) {
        case SET_ORGROLETREE:
          return action.orgRoleTree
        default:
          return state
    }
}
//刘家顺 20161214获取角色列表
function roleManagerData(state="", action){
	 switch (action.type) {
        case SET_ROLEMANGERDATA:
          return action.roleManagerData
        default:
          return state
    }
}
//刘家顺 20161214删除角色列表
function deleteRoleName(state="", action){
	 switch (action.type) {
        case SET_DELETEROLENAME:
          return action.deleteRoleName
        default:
          return state
    }
}
//曹志强	20161215   平台权限
function permissionTreeData(state = [], action) {
    switch (action.type) {
        case ROLE_SET_PERMISSIONTREEDATA:
            return action.permissionTreeData
        default:
            return state
    }
}
//曹志强	20161216   平台权限
function permissionTree(state = "", action) {
    switch (action.type) {
        case ROLE_SET_PERMISSIONTREE:
            return action.permissionTree
        default:
            return state
    }
}
//曹志强	20161216   平台权限
function curRoleName(state = "", action) {
    switch (action.type) {
        case ROLE_SET_CURROLENAME:
            return action.curRoleName
        default:
            return state
    }
}
//曹志强	20161216   平台权限
function staticPermission(state = [], action) {
    switch (action.type) {
        case ROLE_SET_STATICPERMISSION:
            return action.staticPermission
        default:
            return state
    }
}
//曹志强	20161216   平台权限
function isClickTreeChange(state = false, action) {
    switch (action.type) {
        case ROLE_SET_ISCLICKTREECHANGE:
            return action.isClickTreeChange
        default:
            return state
    }
}
//曹志强	20161216   平台权限
function handlePermission(state = [], action) {
    switch (action.type) {
        case ROLE_SET_HANDLEPERMISSION:
            return action.handlePermission
        default:
            return state
    }
}
//曹志强	20161216   平台权限
function beforePermission(state = [], action) {
    switch (action.type) {
        case ROLE_SET_BEFOREPERMISSION:
            return action.beforePermission
        default:
            return state
    }
}
//刘家顺 20161216编辑角色名称
function editRoleNameInput(state="", action){
	 switch (action.type) {
        case SET_EDITROLENAMEINPUT:
          return action.editRoleNameInput
        default:
          return state
    }
}
//刘家顺 20161216编辑角色描述
function editRoleDescribeInput(state="", action){
	 switch (action.type) {
        case SET_EDITROLEDESCRIBEINPUT:
          return action.editRoleDescribeInput
        default:
          return state
    }
}
//刘家顺 20161219添加角色 组织机构名称

function roleOrganizationName(state="", action){
	 switch (action.type) {
        case SET_ORGANIZATIONNAME:
          return action.roleOrganizationName
        default:
          return state
    }
}
//Redux 提供了 combineReducers() 工具类，生成一个函数，这个函数来调用你的一系列 reducer，每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
const systemReducer = combineReducers({
  isShowTree,
  monitorTree,
  oldTree,
  isTreeClear,
  monitorTypeArray,
  monitorReturnItem,
  monitorReturnItemDefaultValue,
  monitorTreeInit,
  treeIds,
  groups,
  allGroupData,
  createInfo,
  parentCode,
  curGroupData,
  safeGroups,
  userOrganization,
  pureOrganization,
  users,
  selectedUser,
  operationFlag,
  changePasswordFlag,
  roles,
  curTree,
  pcodeMark,
  permissions,
  isUpdate,
  roleTree,
  sessionUsers,
  userInfoChangeFlag,
  sysMapData,
  sysMapDataValue,
  rightSystemPage,
  organizationData,
  organizationId,
  orgRoleData,
  orgRoleId,
  orgRoleTree,
  roleManagerData,
  deleteRoleName,
  permissionTreeData,
  curRoleName,
  staticPermission,
  isClickTreeChange,
  handlePermission,
  permissionTree,
  beforePermission,
  editRoleNameInput,
  editRoleDescribeInput,
  roleOrganizationName,
    proFileId,
    proFileData,
    sysAreaData,
    sysAreaId,
    sysUnitData,
    sysUnitId,
    sysDepartmentData,
    sysDepartmentId,
    positions
})

export default systemReducer
