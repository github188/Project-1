require('bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ReactWidgets = require('react-widgets');
import * as SystemAction from "../../../../../../actions/system_action";
import { connect } from 'react-redux';
var _this = this;
var EditUser = React.createClass({
    getInitialState: function() {
        return {
            selectedGroupEdit: this.props.safeGroups[0],
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
        //调用组织机构查询接口
        const { dispatch } = this.props;
        dispatch(SystemAction.get_safeGroups());
        dispatch(SystemAction.get_proFileData());
        dispatch(SystemAction.get_sysAreaData());
        dispatch(SystemAction.get_sysUnitData());
        dispatch(SystemAction.get_sysDepartmentData());
    },
    componentDidMount:function(){
        var username = $.trim($("#userEdit_username").val());
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
        $("#userEdit_department").find(".rw-input").text(e.DepartmentName);
        dispatch(SystemAction.setSysDepartmentId(curId));
    },
    checkInfoChanged:function(e){
        const { operationFlag, selectedUser, roles,dispatch } = this.props;
    },
    _handleOnSelectGroupEdit:function(e){
        const {dispatch} = this.props;
        const { operationFlag, selectedUser, roles } = this.props;
        this.setState({selectedGroupEdit: e});
        dispatch(SystemAction.get_roles(e.SAFEGROUP_NAME));
    },
    setPositionGroupEdit:function (e) {
        const {dispatch} = this.props;
        const { operationFlag, selectedUser, positions } = this.props;
        this.setState({selectedDep: e});
        dispatch(SystemAction.get_position(e.RecId));
    },
    _handleOnSelectRole:function(e){
        this.setState({selectedRole: e});
    },
    selectPrositionEdit:function (e) {
        this.setState({selectedPos:e});
    },
    saveUserInfoEdit: function() {
        const { operationFlag, roles,dispatch,sysUnitData,sysAreaData} = this.props;
            let filterEdit = [];
            let usernameEdit = $.trim($("#userEdit_username").val());
            if(usernameEdit == ""||usernameEdit == null){
                $("#userEdit_username").focus();
                $("#userEdit_username").css("outline", "none");
                $("#userEdit_username").css("border", "1px solid red");
                $.showPublicDialog('提示','请您输入用户名!');
                return false;
            }else {
                $("#userEdit_username").css("border", "1px solid #d0d0d0");
                filterEdit.push({key: "LOGIN_ID", value: usernameEdit});
            }
        //群组
        let groupEdit = $("#userEdit_group").find(".rw-input").text();
        if(groupEdit == ""||groupEdit == null||groupEdit == "请选择"){
            $("#userEdit_group").css("outline", "none");
            $("#userEdit_group").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择群组!');
            return false;
        }else {
            $("#userEdit_group").css("border", "1px solid #d0d0d0");
        }
        filterEdit.push({key: "ORANIZATION_NAME", value: groupEdit});
        let orgRolesEdit = roles;
        let strRolesEdit = "";
        for(let i = 0; i < orgRolesEdit.length; i++) {
            if(document.getElementById("role_edit_"+orgRolesEdit[i].roleName).checked == true) {
                strRolesEdit += (strRolesEdit.length==0?"":",") + orgRolesEdit[i].roleName;
            }
        }
        if(strRolesEdit == "") {
            $("#rolesUserEdit").focus();
            $("#rolesUserEdit").css("outline", "none");
            $("#rolesUserEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择角色!');
            return false;
        }else {
            $("#rolesUserEdit").css("border", "1px solid #d0d0d0");
        }
            //姓名
            let nameEdit = $.trim($("#userEdit_name").val());
            if(nameEdit == ""||nameEdit == null){
                $("#userEdit_name").focus();
                $("#userEdit_name").css("outline", "none");
                $("#userEdit_name").css("border", "1px solid red");
                $.showPublicDialog('提示','请您输入姓名!');
                return false;
            }else {
                $("#userEdit_name").css("border", "1px solid #d0d0d0");
                filterEdit.push({key: "USER_NAME", value: nameEdit});
            }

            let departmentEdit = $.trim($("#userEdit_department").find(".rw-input").text());
            //部门
            if(departmentEdit != null && departmentEdit != "" && departmentEdit != "请选择") {
                filterEdit.push({key: "DEPARTMENT", value: departmentEdit});
            }
            let mailEdit = $.trim($("#userEdit_mail").val());
            let mailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
            //邮箱
            if(!mailReg.test(mailEdit)) {
                $("#userEdit_mail").focus();
                $("#userEdit_mail").css("outline", "none");
                $("#userEdit_mail").css("border", "1px solid red");
                $.showPublicDialog('提示','请您填写正确邮箱!');
                return false;
            }else{
                $("#userEdit_mail").css("border", "1px solid #d0d0d0");
                filterEdit.push({key: "EMAIL", value: mailEdit});
            }
            let phoneEdit = $.trim($("#userEdit_phone").val());
            let phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
            //电话唯一性未做处理
            if(!phoneReg.test(phoneEdit)) {
                $("#userEdit_phone").focus();
                $("#userEdit_phone").css("outline", "none");
                $("#userEdit_phone").css("border", "1px solid red");
                $.showPublicDialog('提示','请您填写正确电话号码!');
                return false;
            }else{
                $("#userEdit_phone").css("border", "1px solid #d0d0d0");
                filterEdit.push({key: "PHONE", value: phoneEdit});
            }
            let supervisorEdit = $("#leaderEdit").find(".rw-input").text();
            if(supervisorEdit !== ""&&supervisorEdit !== null&&supervisorEdit !== "请选择"){
                //主管人
                filterEdit.push({key:"SUPERVISOR",value:supervisorEdit});
            }
            let statusEdit = $("#statusEdit").val();
            if(statusEdit !== ""&&statusEdit !== "请选择"&&statusEdit !== null){
                //状态
                filterEdit.push({key:"STATUS",value:statusEdit});
            }
            let positionEdit = $("#userEdit_position").find(".rw-input").text();
            if(positionEdit !== ""&&positionEdit !== null&&positionEdit !== "请选择"){
                //职位
                filterEdit.push({key:"TITLE",value:positionEdit});
            }
            //单位
            let companyId;
            let companyEdit = $("#schoolEdit").find(".rw-input").text();
            for(let i=0;i<sysUnitData.length;i++){
                if(companyEdit == sysUnitData[i].Name){
                    companyId = sysUnitData[i].RecId;
                }
            }  //school
            filterEdit.push({key:"COMPANY",value:companyId});

            //角色
            filterEdit.push({key: "ROLE_NAME", value: strRolesEdit});
            //区域ID
            let userAreaId;
            let userAreaEdit = $("#userEdit_area").find(".rw-input").text();
            for(let i=0;i<sysAreaData.length;i++){
                if(userAreaEdit == sysAreaData[i].Name){
                    userAreaId = sysAreaData[i].RecId;
                }
            }
            filterEdit.push({key:"AREAID",value:userAreaId});
            //固定电话
            filterEdit.push({key:"TELEPHONE",value:""});
            dispatch(SystemAction.edit_user(filterEdit));
            dispatch(SystemAction.setRoles(""));
        $('#editUserModel').modal('hide');
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
                    <h4 className="modal-title" id="myModalLabelNew">编辑用户</h4>
                </div>
                <div className="modal-body" style={{"height":"450px"}}>
                    <form className="form-horizontal" role="form">
                        <div style={{"width":"300px","float":"left","margin-left":"-44px"}}>
                            <div className="form-group" style={{"position":"relative"}}>
                                <label for="userEdit_username" className="col-sm-6 control-label">用户名</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="userEdit_username" name="userEdit_username" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group" style={{"position":"relative"}}>
                                <label for="userEdit_password" className="col-sm-6 control-label">密码</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control" id="userEdit_password" name="userEdit_password" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group" style={{"position":"relative"}}>
                                <label for="userEdit_confirmPassword" className="col-sm-6 control-label">确认密码</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control" id="userEdit_confirmPassword" name="userEdit_confirmPassword" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group" style={{"position":"relative"}}>
                                <label for="userEdit_group" className="col-sm-6 control-label">群组</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <ReactWidgets.DropdownList id="userEdit_group" name="userEdit_group" className="form-control"
                                                               data={safeGroups} value={this.state.selectedGroupEdit} textField='SAFEGROUP_NAME' onChange={this._handleOnSelectGroupEdit}
                                                               caseSensitive={false} filter='contains'
                                    />
                                </div>
                            </div>
                            <div className="form-group" style={{"position":"relative","zIndex":"10"}}>
                                <label for="" className="col-sm-6 control-label">角色</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <div className="form-control" id="rolesUserEdit" style={{"overflow":"auto","height":"130px"}}>
                                        {/* <ReactWidgets.DropdownList id="userEdit_role" className="form-control" style={{display:"none"}} data={roles} value={this.state.selectedRole} onChange={this._handleOnSelectRole}/>*/}
                                        {this.props.roles.length>0?this.props.roles.map(function(Role) {
                                            return (
                                                <label className="radioLabel">
                                                    <input id={"role_edit_"+Role.roleName} type="checkbox" name="alarmRulesIssue_checkbox" defaultChecked={Role.checked === 'true'} onClick={_this.checkInfoChanged}/> {Role.roleName}
                                                </label>
                                            );
                                        }):false}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group" style={{"position":"relative"}}>
                                <label for="userEdit_name" className="col-sm-6 control-label">姓名</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="userEdit_name" name="userEdit_name" placeholder=""/>
                                </div>
                            </div>
                            {/*<div className="form-group" style={{"position":"relative"}}>
                             <label for="userEdit_mail" className="col-sm-6 control-label">邮箱</label>
                             <b style={{"color":"red","display":"inline-block","margin-left":"-170px","margin-top":"10px"}}>*</b>
                             <div className="col-sm-6">
                             <input type="text" className="form-control" id="userEdit_mail" name="userEdit_mail" placeholder=""/>
                             </div>
                             </div>*/}
                        </div>
                        <div style={{"width":"368px","float":"left"}}>
                            <div className="form-group" style={{"position":"relative"}}>
                                <label for="userEdit_mail" className="col-sm-6 control-label">邮箱</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="userEdit_mail" name="userEdit_mail" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="userEdit_phone" className="col-sm-6 control-label">电话</label>
                                <b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="userEdit_phone" name="userEdit_phone" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="userEdit_area" className="col-sm-6 control-label">区域</label>
                                {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                                <div className="col-sm-6">
                                    <ReactWidgets.DropdownList id="userEdit_area" className="form-control"
                                                               data={sysAreaArr} value={sysAreaArr[sysAreaIndex]} textField='Name'
                                                               onSelect={this.setCurSysAreaId} defaultValue={"请选择"}
                                    />
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="schoolEdit" className="col-sm-6 control-label">单位</label>
                                {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                                <div className="col-sm-6">
                                    <ReactWidgets.DropdownList id="schoolEdit" className="form-control"
                                                               data={sysUnitArr} value={sysUnitArr[sysUnitIndex]} textField='Name'
                                                               onSelect={this.setCurSysUnitId} defaultValue={"请选择"}
                                    />
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="userEdit_department" className="col-sm-6 control-label">部门</label>
                                {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                                <div className="col-sm-6">
                                    <ReactWidgets.DropdownList id="userEdit_department" className="form-control"
                                                               data={sysDepartmentArr} value={sysDepartmentArr[sysDepartmentIndex]} textField='DepartmentName'
                                                               onSelect={this.setCurSysDepartmentId} defaultValue={"请选择"} onChange={this.setPositionGroupEdit}
                                    />
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="userEdit_position" className="col-sm-6 control-label">职位</label>
                                {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                                <div className="col-sm-6">
                                    <ReactWidgets.DropdownList id="userEdit_position" className="form-control"
                                                               data={positions} value={this.state.selectedPos} textField='POSITION_NAME'
                                                               defaultValue={"请选择"} onChange={this.selectPrositionEdit}
                                    />
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="leaderEdit" className="col-sm-6 control-label">主管人</label>
                                {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                                <div className="col-sm-6">
                                    <ReactWidgets.DropdownList id="leaderEdit" className="form-control"
                                                               data={proFileArr} value={proFileArr[proFileIndex]} textField='DisplayName'
                                                               onSelect={this.setCurProFileId}
                                    />
                                </div>
                            </div>
                            <div className="form-group"  style={{"position":"relative"}}>
                                <label for="statusEdit" className="col-sm-6 control-label">状态</label>
                                {/*<b style={{"color":"red","display":"inline-block","margin-left":"-203px","margin-top":"10px"}}>*</b>*/}
                                <div className="col-sm-6">
                                    <select id="statusEdit" className="form-control">
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
                    <button type="button" className="btn btn-success newSure" onClick={this.saveUserInfoEdit}>保存</button>
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
export default connect(mapStateToProps)(EditUser)
