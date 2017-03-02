require('bootstrap');
import React , { PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {
	Router,
	Route,
	Link,
	IndexRoute
} from 'react-router';
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var NavTreeTwo = require('../../../navbars/newNavTreeTwo');
var Usermanager = require('./Usermanager/Usermanager');
var Rolemanager = require('./Rolemanager/Rolemanager');
var Orginsmanager = require('./Orginsmanager/Orginsmanager');
var DataSmanager = require('./DataSmanager/DataSmanager');
var Systemmanager = require('./Systemmanager/Systemmanager');
var ChangePsd = require('./ChangePsd/ChangePsd');
import DataDic from './DataDic/DataDic';
import Store from '../../../../../../server/store';
import * as SystemAction from "../../../../../../actions/system_action";

const System = React.createClass({
	mixins: [History],
	getInitialState: function() {
		return {
			page: 'Usermanager',
			systemMenu: '',
			preTwoNode: '',
			curTwoNode: ''
		}
	},
	componentWillMount: function() {
		//获取权限信息
		let systemMenuData =  Store.get_JsonData("systemMenu");
		let preTowNodeData = Store.get_JsonData("preTwoNode");
       	let curTwoNodeData = Store.get_JsonData("curTwoNode");
		this.setState({systemMenu: systemMenuData});
		this.setState({preTwoNode: preTowNodeData});
		this.setState({curTwoNode: curTwoNodeData});
		//调用用户管理查询列表接口
		const { dispatch } = this.props;
		dispatch(SystemAction.get_allUser());
	},
	//删除角色管理
	delete_roleData:function delete_roleData(){
        const { dispatch } = this.props;
        dispatch(SystemAction.delete_roleData());
    },
    //刘家顺  20161215删除角色管理传入接口值
    setDeleteRoleName:function setDeleteRoleName(data){
	     const { dispatch } = this.props;
         dispatch(SystemAction.setDeleteRoleName(data));
    },
    //刘家顺 20161216 增加角色
    add_roleData:function add_roleData(){
    	var addRoleName= $("#roleNameInput").val();
        var addRoleDescribe= $("#roleDescribeInput").val();
        var parentOranizationSelect= $("#roleOranizationSelect").find(".rw-input").text();
        console.log(parentOranizationSelect)
        var param =[parentOranizationSelect,addRoleName,addRoleDescribe]
        console.log(param)
         const { dispatch } = this.props;
        dispatch(SystemAction.add_roleData(param));
    },
    //编辑角色管理
	edit_roleData:function edit_roleData(){
		var newEditRoleName= $("#editRoleNameInput").val();
        var newEditRoleDescribe= $("#editRoleDescribeInput").val();
        var param = [newEditRoleName,newEditRoleDescribe];
        console.log(param)
        const { dispatch } = this.props;
        dispatch(SystemAction.edit_roleData(param));
    },
    
    //刘家顺  20161216 编辑角色管理传入接口值角色名称
    setEditRoleNameInput:function setEditRoleNameInput(data){
	     const { dispatch } = this.props;
         dispatch(SystemAction.setEditRoleNameInput(data));
    },
    //刘家顺  20161216 编辑角色管理传入接口值角色描述
    setEditRoleDescribeInput:function setEditRoleDescribeInput(data){
	     const { dispatch } = this.props;
         dispatch(SystemAction.setEditRoleDescribeInput(data));
    },
    //刘家顺 20161219添加角色管理 中组织机构名字
    setOrganizationName:function setOrganizationName(data){
	     const { dispatch } = this.props;
         dispatch(SystemAction.setOrganizationName(data));
    },
	componentDidMount: function() {
		
		$('.hidenshow').click(function(){
			$(this).hide(500);
			$('.systemleft').hide(1000);
			$('.showshow2').show(1000);
		})
		$('.showshow2').click(function(){
			$(this).hide(500);
			$('.systemleft').show(1000);
			$('.hidenshow').show(1500);
		})	
	},
	changePswView:function(){
		$("#changPsdModal").modal("show");
	},
	handleChildNode: function(val){
		const { dispatch } = this.props;
		this.setState({page:val});
		switch(val) {
			case 'Usermanager':
				dispatch(SystemAction.get_allUser());
				break;
			case 'Rolemanager':
			 dispatch(SystemAction.get_roleManagerData());
			 dispatch(SystemAction.getPermissionTreeData());
			 dispatch(SystemAction.get_organizationData());
				break;
			case 'Orginsmanager':
				dispatch(SystemAction.get_organizationData());
				dispatch(SystemAction.get_orgRoleData());
				break;
			case 'DataSmanager':
				break;
			case 'Systemmanager':
				break;
			case 'DataDic':
				break;
			case 'ChangePsd':
				break;
		}
	},
	deleteOrganizationData:function(){
		const { dispatch } = this.props;
        dispatch(SystemAction.delete_organizationData());
	},
	deleteSystemData:function(param){
		switch(param){
			case 2:
				this.deleteOrganizationData();
				break;
		}
	},
	saveOrganizationData:function(){
		var name = $("#orgNameInput").val();
		var desc = $("#orgDescInput").val();
		var orgRoleTree = this.props.orgRoleTree;
		var nodes = orgRoleTree.getChecked();
		var roles = "";
		for(var i=0;i<nodes.length;i++){
			var value = nodes[i].value;
			if(value != null && value != "" && value != undefined){
				if(i != nodes.length-1){
				roles = roles + value + ",";
				}else if(i == nodes.length-1){
					roles = roles + value;
				}
			}
		};
        var param = [name,desc,roles];
        const { dispatch } = this.props;
        dispatch(SystemAction.save_organizationData(param));
	},
	onClickSave:function(param){
		switch(param){
			case 2:
				this.saveOrganizationData();
				break;
		}
	},
	editOrganizationData:function(){
		var name = $("#orgNameInput").val();
		var desc = $("#orgDescInput").val();
		var orgRoleTree = this.props.orgRoleTree;
		var nodes = orgRoleTree.getChecked();
		var roles = "";
		for(var i=0;i<nodes.length;i++){
			var value = nodes[i].value;
			if(value != null && value != "" && value != undefined){
				if(i != nodes.length-1){
				roles = roles + value + ",";
				}else if(i == nodes.length-1){
					roles = roles + value;
				}
			}
		};
        var param = [name,desc,roles];
        const { dispatch } = this.props;
        dispatch(SystemAction.save_organizationData(param));
	},
	onClickEdit:function(param){
		switch(param){
			case 2:
				this.editOrganizationData();
				break;
		}
	},
	initPermissionTree:function(param){
		const { dispatch } = this.props;
		dispatch(SystemAction.initPermissionTree(param));
	},
	setPermissionTreeData:function(param){
		const { dispatch } = this.props;
		dispatch(SystemAction.setPermissionTreeData(param));
	},
	savePermissionTree:function(param){
		const { dispatch } = this.props;
		dispatch(SystemAction.savePermissionTree(param));
	},
	conFunction: function(){
		var page = this.state.page;
		const { dispatch } = this.props;
		switch(page) {
			case 'Usermanager':
				return (
						<Usermanager 
							users={this.props.users}
							handleChildNode={this.handleChildNode}
							get_allUser={()=>dispatch(SystemAction.get_allUser())} 
							set_selectedUser={params=>dispatch(SystemAction.set_selectedUser(params))} 
							setUserInfoChangeFlag={userInfoChangeFlag=>dispatch(SystemAction.setUserInfoChangeFlag(userInfoChangeFlag))} 
							get_userOrganization={filter=>dispatch(SystemAction.get_userOrganization(filter))} 
							add_user={filter=>dispatch(SystemAction.add_user(filter))}
							set_Roles = {(Roles)=>dispatch(SystemAction.setRoles(Roles))}
							delete_user={loginId=>dispatch(SystemAction.delete_user(loginId))}/>
						);
				break;
			case 'Rolemanager':
				return (<Rolemanager
						 roleManagerData={this.props.roleManagerData}
					  delete_roleData={this.delete_roleData}
					  setDeleteRoleName={this.setDeleteRoleName}
					  edit_roleData={this.edit_roleData}
					  add_roleData={this.add_roleData}
					  setEditRoleNameInput={this.setEditRoleNameInput}
					  setEditRoleDescribeInput={this.setEditRoleDescribeInput}
					  get_roleManagerData={()=>dispatch(SystemAction.get_roleManagerData())}
					  organizationData={this.props.organizationData}
					  setOrganizationName={this.setOrganizationName}
					  setOrganizationId={(id)=>dispatch(SystemAction.setOrganizationId(id))}
					  get_organizationData={()=>dispatch(SystemAction.get_organizationData())} 
					  get_roleManagerData={()=>dispatch(dictActions.get_roleManagerData())}
					  initPermissionTree={this.initPermissionTree}
					  permissionTreeData={this.props.permissionTreeData}
					  setPermissionTreeData={this.setPermissionTreeData}
					  savePermissionTree={this.savePermissionTree}
					  getPermissionTreeData={param=>dispatch(SystemAction.getPermissionTreeData(param))}
				 />);
				break;
			case 'Orginsmanager':
				return (
					<Orginsmanager 
						organizationData={this.props.organizationData}
						get_organizationData={()=>dispatch(SystemAction.get_organizationData())}
						setOrganizationId={(id)=>dispatch(SystemAction.setOrganizationId(id))}
						deleteSystemData={this.deleteSystemData}
						onClickSave={this.onClickSave}
						onClickEdit={this.onClickEdit}
						get_orgRoleData={(param)=>dispatch(SystemAction.get_orgRoleData(param))}
						init_editOrgRoleTree={(param)=>dispatch(SystemAction.init_editOrgRoleTree(param))}
					/>
					);
				break;
			case 'DataSmanager':
				return (<DataSmanager />);
				break;
			case 'Systemmanager':
				return (<Systemmanager />);
				break;
			case 'DataDic':
				return (<DataDic />);
				break;
			case 'ChangePsd':
				this.changePswView();
				return(<Usermanager 
							users={this.props.users}
							handleChildNode={this.handleChildNode}
							get_allUser={()=>dispatch(SystemAction.get_allUser())} 
							set_selectedUser={params=>dispatch(SystemAction.set_selectedUser(params))} 
							setUserInfoChangeFlag={userInfoChangeFlag=>dispatch(SystemAction.setUserInfoChangeFlag(userInfoChangeFlag))} 
							get_userOrganization={filter=>dispatch(SystemAction.get_userOrganization(filter))} 
							add_user={filter=>dispatch(SystemAction.add_user(filter))}
							set_Roles = {(Roles)=>dispatch(SystemAction.setRoles(Roles))}
							delete_user={loginId=>dispatch(SystemAction.delete_user(loginId))}/>);
				break;
		}
	},
	render: function() {
		return(
			<div className='systemIndex'>
			    <div className='systemleft'>
					<div className='systemTop'>
					   <a>系统设置</a>
					</div>
					<section>
						<NavTreeTwo data={this.state.systemMenu} treeId={"systemMenu"} preTowNode={this.state.preTowNode} curTwoNode={this.state.curTwoNode} handleChildNode={this.handleChildNode}/>
					</section>
				</div>
				 <div className='hidenshow'>
				    <span className='clickhidn'>&lt;</span>
				 </div>
				  <div className='showshow2'>
			     	<span className='clickshow2'>&gt;</span>
				 </div>
			     <div className='systemright'>{this.conFunction()}</div>
			</div>
		)
	}
});

System.propTypes = {
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {users,organizationData,orgRoleData,orgRoleTree,roleManagerData,permissionTreeData,deleteRoleName,editRoleNameInput,editRoleDescribeInput} = state.systemReducer;

  return {
    users:users,
    organizationData:organizationData,
    orgRoleData:orgRoleData,
    orgRoleTree,orgRoleTree,
    roleManagerData:roleManagerData,
    permissionTreeData:permissionTreeData,
    deleteRoleName,
    editRoleNameInput,
    editRoleDescribeInput
  }
}

export default connect(mapStateToProps)(System)
