require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactWidgets = require('react-widgets');
import * as SystemAction from "../../../../../../actions/system_action";
import { connect } from 'react-redux';
var _this = this;
var NewUser = React.createClass({
	getInitialState: function() {
        return {
            selectedGroup: this.props.safeGroups[0],
            selectedRole: null,
            proFileIndex: 0,
            sysAreaIndex: 0,
			sysUnitIndex: 0,
            sysDepartmentIndex: 0,
			selectedDep:this.props.sysDepartmentData,
			selectedPos:null
        }
    },
    componentWillMount:function(){
    	//调用组织机构查询接口nb
		const { dispatch } = this.props;
        dispatch(SystemAction.get_safeGroups());
        dispatch(SystemAction.get_proFileData());
        dispatch(SystemAction.get_sysAreaData());
		dispatch(SystemAction.get_sysUnitData());
        dispatch(SystemAction.get_sysDepartmentData());
    },
	componentDidMount:function(){ 
        var username = $.trim($("#userAdd_username").val());
          var tiaojian=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			$('#user_name').blur(function() {
				var reg = /^[a-zA-Z]{5,14}$/;
				if(reg.test($(this).val())) {
					$('#name_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#name_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			
			$('#user_pasd1').blur(function() {
				var reg = /^[0-9a-zA-Z]{6,14}$/;
				if(reg.test($(this).val())) {
					$('#psd1_tic1').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#psd1_tic1').css('visibility','visible');
					tiaojian[0]=0;
				}
			});
			$('#user_pasd2').blur(function() {
				if($('#user_pasd2').val()===''||$('#user_pasd2').val()==null) {
					$('#psd1_tic2').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#psd1_tic2').css('visibility','hidden');
					tiaojian[0]=0;
				}
			});
			
			
			$('#qunZhu').blur(function() {
				if($('#qunZhu').val()===''||$('#qunZhu').val()==null) {
					$('#qunZhu_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#qunZhu_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			});
			
			$('#jiaose').blur(function() {
				if($('#jiaose').val()===''||$('#jiaose').val()==null) {
					$('#jiaose_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#jiaose_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			});
			
			$('#user_name2').blur(function() {
				var reg = /^[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\U00020000-\U0002CEAF]{2,4}$/;
				
				if(reg.test($(this).val())) {
					$('#name2_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#name2_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			});
			
			$('#user-email').blur(function() {
				var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				
				if(reg.test($(this).val())) {
					$('#email_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#email_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			});
			
			$('#user-phone').blur(function() {
				var reg = /^[1][358][0-9]{9}$/;
				if(reg.test($(this).val())) {
					$('#phone_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#phone_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			});
			
			$('#user-area').blur(function() {
				var reg = /^[1][358][0-9]{9}$/;
				if($('#user-area').val()===''||$('#user-area').val()==null) {
					$('#area_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#area_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			$('#school').blur(function() {
				if($('#school').val()===''||$('#school').val()==null) {
					$('#school_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#school_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			$('#bumen').blur(function() {
				if($('#bumen').val()===''||$('#bumen').val()==null) {
					$('#bumen_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#bumen_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			$('#zhiwei').blur(function() {
				if($('#zhiwei').val()===''||$('#zhiwei').val()==null) {
					$('#zhiwei_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#zhiwei_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			$('from').submit(function(){
				for(var i=0;i<tiaojian.length;i++){
					if(tiaojian[i]==0){
					return false;
					}			
				}
			});
    },

    setCurProFileId: function (e) {
		const {dispatch} =this.props;
        var proFiles = this.props.proFileData;
        var curId = e.RecId;
        var that = this;
        for (var i = 0; i < proFiles.length; i++) {
            var proFileDataId = proFiles[i].RecId;
            if (curId == proFileDataId) {
				that.setState({ proFileIndex: i + 1 });
            }
        }
        $("#leader").find(".rw-input").text(e.DisplayName);
        dispatch(SystemAction.setProFileId(curId));
    },
	setCurSysAreaId:function (e) {
		const {dispatch} =this.props;
		let sysAreaDatas = this.props.sysAreaData;
		let curId = e.RecId;
		let that =this;
		for (let i = 0; i< sysAreaDatas.length; i++){
			let  sysAreaDataId = sysAreaDatas[i].RecId;
			if(curId == sysAreaDataId){
				that.setState({sysAreaIndex:i + 1});
			}
		}
		$("#user-area").find(".rw-input").text(e.Name);
		dispatch(SystemAction.setSysAreaId(curId));
	},
	setCurSysUnitId:function (e) {
		const {dispatch} = this.props;
		let sysUnitDatas = this.props.sysUnitData;
		let curId = e.RecId;
		let that = this;
		for(let i =0;i<sysUnitDatas.length;i++){
			let sysUnitDataId = sysUnitDatas[i].RecId;
			if(curId == sysUnitDataId){
				that.setState({sysUnitIndex:i+1});
			}
		}
		$("#school").find(".rw-input").text(e.Name);
		dispatch(SystemAction.setSysUnitId(curId));
	},
    setCurSysDepartmentId:function (e) {
		const {dispatch} = this.props;
        let sysDepartmentDatas = this.props.sysDepartmentData;
        let curId = e.RecId;
        let that = this;
        for(let i =0;i<sysDepartmentDatas.length;i++){
            let sysDepartmentDataId = sysDepartmentDatas[i].RecId;
            if(curId == sysDepartmentDataId){
				that.setState({sysDepartmentIndex:i+1});
            }
        }
        $("#userAdd_department").find(".rw-input").text(e.DepartmentName);
        dispatch(SystemAction.setSysDepartmentId(curId));
    },
	checkInfoChanged:function(e){
	},
    _handleOnSelectGroup:function(e){
		const {dispatch} = this.props;
        const { operationFlag, selectedUser, roles } = this.props;
        $("#userAdd_group").find(".rw-input").text("");
        this.setState({selectedGroup: e});
        dispatch(SystemAction.get_roles(e.SAFEGROUP_NAME));
    },
    setPositionGroup:function (e) {
		const {dispatch} = this.props;
		const { operationFlag, selectedUser, positions } = this.props;
		this.setState({selectedDep: e});
		dispatch(SystemAction.get_position(e.RecId));
    },
    _handleOnSelectRole:function(e){
        this.setState({selectedRole: e});
    },
	selectProsition:function (e) {
		this.setState({selectedPos:e});
	},
	saveUserInfo: function() {
		const { operationFlag, roles,dispatch,sysAreaId,sysUnitId} = this.props;
            let filter = [];
            let username = $.trim($("#userAdd_username").val());
            if(username == ""||username == null){
                $("#userAdd_username").focus();
                $("#userAdd_username").css("outline", "none");
                $("#userAdd_username").css("border", "1px solid red");
                $.showPublicDialog('提示','请您输入用户名!');
                return false;
            }else {
                $("#userAdd_username").css("border", "1px solid #d0d0d0");
                filter.push({key: "LOGIN_ID", value: username});
            }
            let password, confirmPassword;
                password = $("#userAdd_password").val();
                if(password==null||password==""){
                    $("#userAdd_password").focus();
                    $("#userAdd_password").css("outline", "none");
                    $("#userAdd_password").css("border", "1px solid red");
                    $.showPublicDialog('提示','请您输入密码!');
                    return false;
                }
                else if(password.length < 6 || password.length > 18){
                    $("#userAdd_password").focus();
                    $("#userAdd_password").css("outline", "none");
                    $("#userAdd_password").css("border", "1px solid red");
                    $.showPublicDialog('提示','您输入的密码有误，密码长度最小为6个字符，最大为18个字符!');
                    return false;
                }else {
                    $("#userAdd_password").css("border", "1px solid #d0d0d0");
                }
                confirmPassword = $("#userAdd_confirmPassword").val();
                if(confirmPassword==null||confirmPassword==""){
                    $("#userAdd_confirmPassword").focus();
                    $("#userAdd_confirmPassword").css("outline", "none");
                    $("#userAdd_confirmPassword").css("border", "1px solid red");
                    $.showPublicDialog('提示','请您输入确认密码!');
                    return false;
                }
                else if(confirmPassword.length < 6 || confirmPassword.length > 18){
                    $("#userAdd_confirmPassword").focus();
                    $("#userAdd_confirmPassword").css("outline", "none");
                    $("#userAdd_confirmPassword").css("border", "1px solid red");
                    $.showPublicDialog('提示','您输入的确认密码有误，密码长度最小为6个字符，最大为18个字符!');
                    return false;
                }
                else if(confirmPassword != password){
                    $("#userAdd_confirmPassword").focus();
                    $("#userAdd_confirmPassword").css("outline", "none");
                    $("#userAdd_confirmPassword").css("border", "1px solid red");
                    $.showPublicDialog('提示','您输入的确认密码与原密码不匹配，请重新输入!');
                    return false;
                }else {
                    $("#userAdd_confirmPassword").css("border", "1px solid #d0d0d0");
                }
        //群组
        let group = $("#userAdd_group").find(".rw-input").text();
        if(group == ""||group == null||group == "请选择"){
            $("#userAdd_group").css("outline", "none");
            $("#userAdd_group").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择群组!');
            return false;
        }else {
            $("#userAdd_group").css("border", "1px solid #d0d0d0");
            filter.push({key: "ORANIZATION_NAME", value: group});
        }

        let orgRoles = roles;
        let strRoles = "";
        for(let i = 0; i < orgRoles.length; i++) {
            if(document.getElementById("role_"+orgRoles[i].roleName).checked == true) {
                strRoles += (strRoles.length==0?"":",") + orgRoles[i].roleName;
            }
        }
        if(strRoles == "") {
            $("#rolesUser").focus();
            $("#rolesUser").css("outline", "none");
            $("#rolesUser").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择角色!');
            return false;
        }else {
            $("#rolesUser").css("border", "1px solid #d0d0d0");
        }
            //姓名
            let name = $.trim($("#userAdd_name").val());
            if(name == ""||name == null){
                $("#userAdd_name").focus();
                $("#userAdd_name").css("outline", "none");
                $("#userAdd_name").css("border", "1px solid red");
                $.showPublicDialog('提示','请您输入姓名!');
                return false;
            }else {
                $("#userAdd_name").css("border", "1px solid #d0d0d0");
                filter.push({key: "USER_NAME", value: name});
            }
            let department = $.trim($("#userAdd_department").find(".rw-input").text());
            //部门
            if(department != null && department != ""&& department != "请选择") {
                filter.push({key: "DEPARTMENT", value: department});
            }
            let mail = $.trim($("#userAdd_mail").val());
            let mailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
            //邮箱
            if(!mailReg.test(mail)) {
                $("#userAdd_mail").focus();
                $("#userAdd_mail").css("outline", "none");
                $("#userAdd_mail").css("border", "1px solid red");
                $.showPublicDialog('提示','请您填写正确邮箱!');
                return false;
            }else{
                $("#userAdd_mail").css("border", "1px solid #d0d0d0");
                filter.push({key: "EMAIL", value: mail});
            }
            let phone = $.trim($("#userAdd_phone").val());
            let phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
            //电话唯一性未做处理
            if(!phoneReg.test(phone)) {
                $("#userAdd_phone").focus();
                $("#userAdd_phone").css("outline", "none");
                $("#userAdd_phone").css("border", "1px solid red");
                $.showPublicDialog('提示','请您填写正确电话号码!');
                return false;
            }else{
                $("#userAdd_phone").css("border", "1px solid #d0d0d0");
                filter.push({key: "PHONE", value: phone});
            }
            let supervisor = $("#leader").find(".rw-input").text();
            if(supervisor !== ""&&supervisor !== null&&supervisor !== "请选择"){
                //主管人
                filter.push({key:"SUPERVISOR",value:supervisor});
            }
            let status = $("#status").val();
            if(status !== ""&&status !== null&&status !== "请选择"){
                //状态
                filter.push({key:"STATUS",value:status});
            }
            let position = $("#userAdd_position").find(".rw-input").text();
            if(position !== ""&&position !== null&&position !== "请选择"){
                //职位
                filter.push({key:"TITLE",value:position});
            }
            //单位
            let company = $("#school").find(".rw-input").text();
            if(company !== ""&&company !== null&&company !== "请选择"){
                //school
                filter.push({key:"COMPANY",value:sysUnitId});
            }
            //角色
            filter.push({key: "ROLE_NAME", value: strRoles});
			filter.push({key: "LOGIN_PWD", value: password});

            //区域ID
            let userArea = $("#userAdd_area").find(".rw-input").text();
            if(userArea != null && userArea != "" && userArea != "请选择"){
                filter.push({key:"AREAID",value:sysAreaId});
            }

            //固定电话
            filter.push({key:"TELEPHONE",value:""});
			dispatch(SystemAction.add_user(filter));
			dispatch(SystemAction.setRoles(""));
		$('#newUserModel').modal('hide');
	},
    render: function () {
        const {  safeGroups, proFileData, sysAreaData,sysAreaId,sysUnitData,sysUnitId,sysDepartmentData,sysDepartmentId,roles,positions } = this.props;
        let _this = this;
      let proFileDatas = this.props.proFileData;
      let proFileIndex = this.state.proFileIndex;
      let proFileArr = [];
      proFileArr.push({ RecId: "", DisplayName: "" });
      for (let i = 0; i < proFileDatas.length; i++) {
          proFileArr.push(proFileDatas[i]);
      }
      let sysAreaIndex = this.state.sysAreaIndex;
      let sysAreaArr = [];
      sysAreaArr.push({ RecId: "", Name: "" });
      for (let i = 0; i < sysAreaData.length; i++) {
          sysAreaArr.push(sysAreaData[i]);
      }
      let sysUnitIndex = this.state.sysUnitIndex;
		let sysUnitArr = [];
		sysUnitArr.push({RecId:"",Name:""});
		for (let i = 0;i< sysUnitData.length;i++){
			sysUnitArr.push(sysUnitData[i]);
		}
		let sysDepartmentIndex = this.state.sysDepartmentIndex;
        let sysDepartmentArr = [];
        sysDepartmentArr.push({RecId:"",DepartmentName:""});
        for(let i = 0;i<sysDepartmentData.length;i++){
            sysDepartmentArr.push(sysDepartmentData[i]);
        }

    return (
		<div className="modal-content" style={{"width":"760px"}}>
            <div className="modal-header" style={{"background":"#64c4dd"}}>
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title" id="myModalLabelNew">新建用户</h4>
        	</div>
            <div className="modal-body" style={{"height":"450px"}}>
                <form className="form-horizontal" role="form">
                    <div style={{"width":"300px","float":"left","margin-left":"-44px"}}>
                    	<div className="form-group" style={{"position":"relative"}}>
                            <label for="userAdd_username" className="col-sm-6 control-label">用户名</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="userAdd_username" name="userAdd_username" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group" style={{"position":"relative"}}>
                            <label for="userAdd_password" className="col-sm-6 control-label">密码</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="password" className="form-control" id="userAdd_password" name="userAdd_password" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group" style={{"position":"relative"}}>
                            <label for="userAdd_confirmPassword" className="col-sm-6 control-label">确认密码</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="password" className="form-control" id="userAdd_confirmPassword" name="userAdd_confirmPassword" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group" style={{"position":"relative"}}>
                            <label for="userAdd_group" className="col-sm-6 control-label">群组</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6" style={{"zIndex":"1000"}}>
                                <ReactWidgets.DropdownList id="userAdd_group" name="userAdd_group" className="form-control" style={{"overflow":"auto"}}
                                data={safeGroups} value={this.state.selectedGroup} textField='SAFEGROUP_NAME' onChange={this._handleOnSelectGroup}
                                caseSensitive={false} filter='contains'
                              />
                            </div>
                        </div>
                        <div className="form-group" style={{"position":"relative","z-index":"23"}}>
                            <label for="" className="col-sm-6 control-label">角色</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                            	<div className="form-control" id="rolesUser" style={{"overflow":"auto","height":"130px","zIndex":"233","position":"absolute"}}>
                               {/* <ReactWidgets.DropdownList id="userAdd_role" className="form-control" style={{display:"none"}} data={roles} value={this.state.selectedRole} onChange={this._handleOnSelectRole}/>*/}
			                        {
                                        this.props.roles.length>0?this.props.roles.map(function(Role) {
			                            return (
			                                <label className="radioLabel">
			                                    <input id={"role_"+Role.roleName} type="checkbox" name="alarmRulesIssue_checkbox" defaultChecked={false} onClick={_this.checkInfoChanged}/> {Role.roleName}
			                                </label>
			                            );
			                        }):false
			                        }
			                    </div>
                            </div>
                        </div>
                        <div className="form-group" style={{"position":"relative","margin-top":"115px"}}>
                            <label for="userAdd_name" className="col-sm-6 control-label">姓名</label>
                            <b style={{"color":"red","display":"inli;ne-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="userAdd_name" name="userAdd_name" placeholder=""/>
                            </div>
                        </div>
                        {/*<div className="form-group" style={{"position":"relative"}}>
                            <label for="userAdd_mail" className="col-sm-6 control-label">邮箱</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="userAdd_mail" name="userAdd_mail" placeholder=""/>
                            </div>
                        </div>*/}
                    </div>
                    <div style={{"width":"368px","float":"left"}}>
                    	<div className="form-group" style={{"position":"relative"}}>
                            <label for="userAdd_mail" className="col-sm-6 control-label">邮箱</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="userAdd_mail" name="userAdd_mail" placeholder=""/>
                            </div>
                        </div>
                    	<div className="form-group"  style={{"position":"relative"}}>
                            <label for="userAdd_phone" className="col-sm-6 control-label">电话</label>
                            <b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="userAdd_phone" name="userAdd_phone" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group"  style={{"position":"relative"}}>
                            <label for="userAdd_area" className="col-sm-6 control-label">区域</label>
                            {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                            <div className="col-sm-6">
                                <ReactWidgets.DropdownList id="userAdd_area" className="form-control"
									data={sysAreaArr} value={sysAreaArr[sysAreaIndex]} textField='Name'
									onSelect={this.setCurSysAreaId} defaultValue={"请选择"}
								/>
                            </div>
                        </div>
                        <div className="form-group"  style={{"position":"relative"}}>
                            <label for="school" className="col-sm-6 control-label">单位</label>
                           {/* <b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                            <div className="col-sm-6">
                                <ReactWidgets.DropdownList id="school" className="form-control"
									data={sysUnitArr} value={sysUnitArr[sysUnitIndex]} textField='Name'
									onSelect={this.setCurSysUnitId} defaultValue={"请选择"}
								/>
                            </div>
                        </div>
                        <div className="form-group"  style={{"position":"relative"}}>
                            <label for="userAdd_department" className="col-sm-6 control-label">部门</label>
                            {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                            <div className="col-sm-6">
                                <ReactWidgets.DropdownList id="userAdd_department" className="form-control"
                                    data={sysDepartmentArr} value={sysDepartmentArr[sysDepartmentIndex]} textField='DepartmentName'
                                    onSelect={this.setCurSysDepartmentId} defaultValue={"请选择"} onChange={this.setPositionGroup}
                        		/>
                            </div>
                        </div>
                        <div className="form-group"  style={{"position":"relative"}}>
                            <label for="userAdd_position" className="col-sm-6 control-label">职位</label>
                            {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                            <div className="col-sm-6">
                                <ReactWidgets.DropdownList id="userAdd_position" className="form-control"
									data={positions} value={this.state.selectedPos} textField='POSITION_NAME'
									defaultValue={"请选择"} onChange={this.selectProsition}
								/>
                            </div>
                        </div>
                        <div className="form-group"  style={{"position":"relative"}}>
                            <label for="leader" className="col-sm-6 control-label">主管人</label>
                            {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                            <div className="col-sm-6">
                                 <ReactWidgets.DropdownList id="leader" className="form-control"
                                	data={proFileArr} value={proFileArr[proFileIndex]} textField='DisplayName'
                        			onSelect={this.setCurProFileId}
                                />
                            </div>
                        </div>
                        <div className="form-group"  style={{"position":"relative"}}>
                            <label for="status" className="col-sm-6 control-label">状态</label>
                            {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                            <div className="col-sm-6">
                                <select id="status" className="form-control">
			                        <option>请选择</option> 
			                        <option>启用</option>
			                        <option>停用</option>
			                        <option>过期</option> 
                            </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer fromBottom">
                <button type="button" className="btn btn-success newSure" onClick={this.saveUserInfo}>保存</button>
                <button type="button" className="btn btn-default newCox" data-dismiss="modal">取消</button>
            </div>
        </div>
  )}
});

function mapStateToProps(state) {
  const {safeGroups,proFileData,proFileId,sysAreaData,sysAreaId,sysUnitData,sysUnitId,sysDepartmentData,sysDepartmentId,operationFlag,selectedUser,roles,userInfoChangeFlag,positions} = state.systemReducer;

  return {
      safeGroups: safeGroups,
      proFileData: proFileData,
      proFileId: proFileId,
      sysAreaData: sysAreaData,
      sysAreaId: sysAreaId,
	  sysUnitData:sysUnitData,
	  sysUnitId:sysUnitId,
      sysDepartmentData:sysDepartmentData,
      sysDepartmentId:sysDepartmentId,
      operationFlag:operationFlag,
      selectedUser:selectedUser,
      roles:roles,
      userInfoChangeFlag:userInfoChangeFlag,
	  positions:positions
  }
}
export default connect(mapStateToProps)(NewUser)
