import "bootstrap"
import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
//import $ from "jquery";
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import * as operationAction from "../../../../../../../actions/operation_action";
import * as dataDictAction from "../../../../../../../actions/dataDict_action";
import * as Store from "../../../../../../../server/store";
let _this;
var TaskAddManagement = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return {
            isOk:1,
            taskProjectDataIndex:0,
            taskUnitTypeDataIndex:0,
            taskUnitStaffInfoDatasIndex:0,
            UNIT_Number:""
        }
    },
    componentWillMount:function () {
        const {dispatch} = this.props;
        let filters = [];
        dispatch(dataDictAction.get_projectData());
        dispatch(operationAction.get_unitTypeData());
        dispatch(operationAction.get_unitStaffInfoDatas(filters));
        dispatch(operationAction.get_taskWorkOrderType())
    },
    componentDidMount:function () {
        $("#taskUploadPic").click(function(){
            $("#uploadTaskImagesModal").modal("show");
        });
        this.initFileInput("fileTask-Portrait", "/upload/fileresource");
        $('#taskTab a[href="#newTaskCreate"]').tab('show');
        $("#newTaskCreateLi").css({"borderBottomColor": "#349ff1"}).find("a").css({"color":"#349ff1","fontSize":"18px"});
        $("#taskProjectName").find(".rw-input").text("请选择");
        $("#taskUnitType").find(".rw-input").text("请选择");
        $("#taskUnitName").find(".rw-input").text("请选择");
        $("#taskTab li").on('click', function () {
            $(this).css({
                "borderBottomColor": "#349ff1",
                "color": "#349ff1"
            }).find("a").css({"color":"#349ff1","fontSize":"18px"}).parent().siblings("li").css({"borderBottomColor": "transparent", "color": "#aeaeae"}).find("a").css({"color": "#aeaeae","fontSize":"14px"})
        });
        _this.timer = setInterval(function () {
            let d = new Date();
            $("#dispatchTaskTime").val(d.Format("yyyy-MM-dd hh:mm:ss"));
        },1000);
    },
    setTaskProjectNameId:function (e) {
        const {dispatch,projectData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i = 0;i<projectData.length;i++){
            let projectDataId = projectData[i].RecId;
            if(curId == projectDataId){
                that.setState({taskProjectDataIndex:i+1});
            }
        }
        $("#taskProjectName").find(".rw-input").text(e.Name);
        dispatch(dataDictAction.setProjectId(curId));
    },
    setTaskUnitTypeId:function (e) {
        const {dispatch,unitTypeData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i = 0;i<unitTypeData.length;i++){
            let unitTypeDataId = unitTypeData[i].RecId;
            if(curId == unitTypeDataId){
                that.setState({taskUnitTypeDataIndex:i+1});
            }
        }
        $("#taskUnitType").find(".rw-input").text(e.Name);
        dispatch(operationAction.setUnitTypeId(curId));
        let filters = [{key:"UNITTYPE_ID",value:curId}];
        dispatch(operationAction.get_unitStaffInfoDatas(filters));

    },
    setTaskUnitNameId:function (e) {
        const {dispatch,unitStaffInfoDatas} = this.props;
        let curId = e.UNIT_ID;
        let that = this;
        let taskTypeName = e.TYPENAME;
        let taskLeader = e.USERNAME;
        let taskLeaderPhone = e.PHONE;
        let taskUnitAddress = e.UNITADDRESS;
        let taskUnitTypeId = e.TYPEID;
        let taskUnitNumber = e.UNIT_Number;
        for(let i=0;i<unitStaffInfoDatas.length;i++){
            let unitStaffInfoDatasId = unitStaffInfoDatas[i].UNIT_ID;
            if(curId == unitStaffInfoDatasId){
                that.setState({taskUnitStaffInfoDatasIndex:i+1});
                $("#taskUnitType").find(".rw-input").text(taskTypeName);
                $("#taskLeader").val(taskLeader);
                $("#taskLeaderPhone").val(taskLeaderPhone);
                $("#taskUnitAddress").val(taskUnitAddress);
            }
        }
        $("#taskUnitName").find(".rw-input").text(e.UNIT_NAME);
        _this.setState({UNIT_Number:taskUnitNumber});
        dispatch(operationAction.setUnitStaffInfoIds(curId));
        dispatch(operationAction.setUnitTypeId(taskUnitTypeId));
    },
    showPersonnelTransferTask:function () {
        const {dispatch,taskWorkOrderTypeId} = this.props;
        let filters = [];
        filters.push({key:"FROM_ID",value:Store.get("CURRENT_ROLENAME")});
        filters.push({key:"WORKFLOW_ID",value:taskWorkOrderTypeId});
        filters.push({key:"GROUP_ID",value:Store.get("GROUP_ID")});
        dispatch(operationAction.get_nextWorkFlowData(filters));
        dispatch(operationAction.setWorkFlowTypeId(taskWorkOrderTypeId));
        $("#PersonnelTransferTaskModal").modal("show");
    },
    saveTaskAdd:function () {
        const {dispatch,taskWorkOrderTypeId,projectId,unitTypeId,unitStaffInfoIds,fauleFromId} = this.props;
        let filters = [];

        //项目名称验证
        let taskProjectName = $.trim($("#taskProjectName").find(".rw-input").text());
        if(taskProjectName != "" && taskProjectName !=null && taskProjectName != "请选择"){
            filters.push({key:"PROJECTID",value:projectId});
            $("#taskProjectName").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskProjectName").css("outline", "none");
            $("#taskProjectName").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择项目名称!');
            return false;
        }

        //调研主题验证
        let taskTheme = $.trim($("#taskTheme").val());
        if(taskTheme != "" && taskTheme != null){
            filters.push({key:"SUBJECT",value:taskTheme});
            $("#taskTheme").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskTheme").focus();
            $("#taskTheme").css("outline", "none");
            $("#taskTheme").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写调研主题!');
            return false;
        }

        //调研人验证
        let taskAnalyst = $.trim($("#taskAnalyst").val());
        if(taskAnalyst != "" && taskAnalyst != null){
            filters.push({key:"CONTACTS",value:taskAnalyst});
            $("#taskAnalyst").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskAnalyst").focus();
            $("#taskAnalyst").css("outline", "none");
            $("#taskAnalyst").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写调研人!');
            return false;
        }

        //电话验证
        let taskPhone = $.trim($("#taskPhone").val());
        let taskPhoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!taskPhoneReg.test(taskPhone)){
            $("#taskPhone").focus();
            $("#taskPhone").css("outline", "none");
            $("#taskPhone").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写正确电话!');
            return false;
        }else{
            filters.push({key:"CONTACTNUMBER",value:taskPhone});
            $("#taskPhone").css("border", "1px solid #d0d0d0");
        }

        //单位名称验证
        let taskUnitName = $.trim($("#taskUnitName").find(".rw-input").text());
        if(taskUnitName != "" && taskUnitName != null && taskUnitName != "请选择"){
            filters.push({key:"UNITID",value:unitStaffInfoIds});
            $("#taskUnitName").css("border", "1px solid #d0d0d0");
        }else {
            $("#taskUnitName").css("outline", "none");
            $("#taskUnitName").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择单位名称!');
            return false;
        }

        //负责人
        let taskLeader = $.trim($("#taskLeader").val());
        if(taskLeader != "" && taskLeader != null){
            filters.push({key:"UNITHEAD",value:taskLeader});
        }

        //单位类型
        let taskUnitType = $.trim($("#taskUnitType").find(".rw-input").text());
        if(taskUnitType != "" && taskUnitType != null && taskUnitType != "请选择"){
            filters.push({key:"UNITTYPEID",value:unitTypeId});
        }

        //负责人电话
        let taskLeaderPhone = $.trim($("#taskLeaderPhone").val());
        if(taskLeaderPhone != "" && taskLeaderPhone != null){
            filters.push({key:"UNITHEADPHONE",value:taskLeaderPhone});
        }

        //单位地址
        let taskUnitAddress = $.trim($("#taskUnitAddress").val());
        if(taskUnitAddress != "" && taskUnitAddress != null){
            filters.push({key:"ADDRESS",value:taskUnitAddress});
        }

        //现状验证
        let taskCurrent = $.trim($("#taskCurrent").val());
        if(taskCurrent != "" && taskCurrent != null){
            $("#taskCurrent").css("border", "1px solid #d0d0d0");
            filters.push({key:"WORKORDERDESC",value:taskCurrent});
        }else {
            $("#taskCurrent").focus();
            $("#taskCurrent").css("outline", "none");
            $("#taskCurrent").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写现状!');
            return false;
        }

        let currentHandle = Store.get("USERNAME");
        filters.push({key:"CURRENTHANDLE",value:currentHandle});

        alert(taskWorkOrderTypeId);
        filters.push({key:"WORKORDERTYPE",value:taskWorkOrderTypeId});

        filters.push({key:"PARENTID",value:Store.get("GROUP_ID")});

        filters.push({key:"STATUS",value:"dcl"});

        filters.push({key:"SERIALNUMBER",value:this.state.UNIT_Number});

        filters.push({key:"STEP",value:"0"});
        //下级处理人
        let nextTaskUserCl = $.trim($("#nextTaskUserCl").val());
        if(nextTaskUserCl != null && nextTaskUserCl != ""){
            filters.push({key:"TOUSER",value:nextTaskUserCl});
        }
        filters.push({key:"FLOWACTION",value:"新建并分配"});

        filters.push({key:"COMTENT",value:""});

        filters.push({key:"FROMUSER",value:Store.get("USERNAME")});

        filters.push({key:"FROMID",value:fauleFromId});

        clearInterval(_this.timer);
        dispatch(operationAction.save_workOrderCommon(filters));
        //let data = [taskTheme,taskAnalyst,taskPhone,taskLeader,taskLeaderPhone,taskUnitAddress,taskCurrent,taskWorkOrderTypeId,currentHandle];
        //dispatch(operationAction.save_createTask(data));
    },
    initFileInput:function(ctrlName, uploadUrl) {
        var control = $('#' + ctrlName);

        control.fileinput({
            language: 'zh', //设置语言
            uploadUrl: uploadUrl, //上传的地址
            allowedFileExtensions : ['jpg', 'png','gif'],//接收的文件后缀
            showUpload: true, //是否显示上传按钮
            showCaption: false,//是否显示标题
            browseClass: "btn btn-primary", //按钮样式
            ///showPreview:false,	//演示
            //dropZoneEnabled: false,//是否显示拖拽区域
            //minImageWidth: 50, //图片的最小宽度
            //minImageHeight: 50,//图片的最小高度
            //maxImageWidth: 1000,//图片的最大宽度
            //maxImageHeight: 1000,//图片的最大高度
            maxFileSize: 1024,//单位为kb，如果为0表示不限制文件大小
            //minFileCount: 0,
            maxFileCount: 3,	////表示允许同时上传的最大文件个数
            enctype: "multipart/form-data",
            validateInitialCount:true,
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>"/*,
            uploadExtraData:function (previewId, index) {
                var obj = {};
                $('#uploadPic').find('input').each(function() {
                    var id = $(this).attr('id'), val = $(this).val();
                    obj[id] = val;
                });
                return obj;
            }*/
        });
    },
    render:function () {
        const {projectData,unitTypeData,unitStaffInfoDatas} = this.props;
        let taskProjectDataIndex = this.state.taskProjectDataIndex;
        let taskProjectDataArr = [];
        taskProjectDataArr.push({RecId:"",Name:""});
        for (let i = 0;i<projectData.length;i++){
            taskProjectDataArr.push(projectData[i])
        }
        let taskUnitTypeDataIndex = this.state.taskUnitTypeDataIndex;
        let taskUnitTypeDataArr = [];
        taskUnitTypeDataArr.push({RecId:"",Name:""});
        for(let i = 0;i<unitTypeData.length;i++){
            taskUnitTypeDataArr.push(unitTypeData[i])
        }
        let taskUnitStaffInfoDatasIndex = this.state.taskUnitStaffInfoDatasIndex;
        let taskUnitStaffInfoDatasArr = [];
        taskUnitStaffInfoDatasArr.push({UNIT_ID:"",UNIT_NAME:"",USERNAME:"",PHONE:"",UNITADDRESS:"",TYPENAME:"",TYPEID:"",UNIT_Number:""});
        for(let i=0;i<unitStaffInfoDatas.length;i++){
            taskUnitStaffInfoDatasArr.push(unitStaffInfoDatas[i])
        }
        return (
            <div className="taskAdd" style={{"width":"100%","height":"100%","backgroundColor":"#edf5f8", "paddingTop": "16px", "paddingBottom": "16px"}}>
                <div className="taskAdd_content" style={{
                    "width": "1000px",
                    "margin": "0 auto",
                    "backgroundColor": "#fff",
                    "padding": "0 26px 0 26px"
                }}>
                    <ul id="taskTab" className="taskAdd_content_head" style={{
                        "width": "100%",
                        "position": "relative",
                        "borderBottom": "1px solid #ebecee",
                        "margin": "0"
                    }}>
                        <li className="taskAdd_newCreat" id="newTaskCreateLi" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#newTaskCreate" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>任务新建</a></li>
                        <li className="taskAdd_process" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#processTask" data-toggle="tab" style={{"textDecoration": "none", "color": "#aeaeae"}}>任务处理</a>
                        </li>
                        <li className="taskAdd_approve" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#approveTask" data-toggle="tab" style={{"textDecoration": "none", "color": "#aeaeae"}}>任务审批</a>
                        </li>
                        <li className="taskAdd_evaluation" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#evaluationTask" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>任务评价</a></li>
                        <li className="taskAdd_conversion" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#conversionTask" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>任务流转</a></li>
                    </ul>
                    <div id="taskTabContent" className="tab-content">
                        <div className="tab-pane fade in active" id="newTaskCreate">
                            <div className="taskAdd_saveBtn" id="saveTaskAdd" onClick={this.saveTaskAdd} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "558px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div className="taskAdd_saveBtn" style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#717171",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#f6f7f9",
                                "borderRadius": "5px"
                            }}>打印
                            </div>
                            <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>基本信息
                            </div>
                            <div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskProjectName" className="col-sm-3">项目名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList id="taskProjectName" data={taskProjectDataArr}
                                                                       value={taskProjectDataArr[taskProjectDataIndex]}
                                                                       textField='Name' onSelect={this.setTaskProjectNameId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskTheme" className="col-sm-3">调研主题</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskTheme" name="taskTheme" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskAnalyst" className="col-sm-3">调研人</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskAnalyst" name="taskAnalyst" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskPhone" className="col-sm-3">电话</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskPhone" name="taskPhone" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskUnitName" className="col-sm-3">单位名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskUnitName" name="taskUnitName" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="taskUnitName" data={taskUnitStaffInfoDatasArr}
                                                                       value={taskUnitStaffInfoDatasArr[taskUnitStaffInfoDatasIndex]}
                                                                       textField='UNIT_NAME' onSelect={this.setTaskUnitNameId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskUnitType" className="col-sm-3">单位类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskUnitType" name="taskUnitType" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="taskUnitType" data={taskUnitTypeDataArr}
                                                                       value={taskUnitTypeDataArr[taskUnitTypeDataIndex]}
                                                                       textField='Name' onSelect={this.setTaskUnitTypeId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskLeader" className="col-sm-3">负责人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskLeader" name="taskLeader" style={{"width":"338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskLeaderPhone" className="col-sm-3">负责人电话</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskLeaderPhone" name="taskLeaderPhone" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskUnitAddress" className="col-sm-2">单位地址</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="taskUnitAddress" name="taskUnitAddress" style={{"width":"811px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskCurrent" className="col-sm-2">现状</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px","left":"120px"}}>*</b>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskCurrent" id="taskCurrent" cols="113" rows="9"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div style={{
                                    "width": "90px",
                                    "height": "36px",
                                    "lineHeight": "36px",
                                    "textAlign": "center",
                                    "backgroundColor": "#349ef0",
                                    "color": "#fff",
                                    "borderRadius": "5px",
                                    "marginBottom": "16px"
                                }} onClick={this.showPersonnelTransferTask}>人员流转
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="nextTaskUserCl" className="col-sm-3">下级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="nextTaskUserCl" name="nextTaskUserCl"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="dispatchTaskTime" className="col-sm-3">派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="dispatchTaskTime" name="dispatchTaskTime"
                                                   style={{"width": "338px"}} disabled="disabled"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div>
                                    <div id="taskUploadPic" style={{
                                        "width": "90px",
                                        "height": "36px",
                                        "lineHeight": "36px",
                                        "textAlign": "center",
                                        "border": "1px solid #349ef0",
                                        "color": "#349ef0",
                                        "borderRadius": "5px",
                                        "display": "inline-block",
                                        "marginRight": "10px"
                                    }}>上传图片
                                    </div>
                                    <span>可以上传3张图片，单张小于1M。图片支持的格式有：jpg,bmp,png,gif</span>
                                </div>
                                <div className="modal fade" id="uploadTaskImagesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                                <h4 className="modal-title" id="myModalLabel">上传图片</h4>
                                            </div>
                                            <div className="modal-body">
                                                <form id="uploadPic" className="bs-example bs-example-form" role="form" enctype="multipart/form-data">
                                                    <div className="control-group">
                                                        <div className="row" style={{"height": "500px"}}>
                                                            <input id="fileTask-Portrait" type="file" multiple className="file-loading"/>
                                                            {/*<input id="flag" type="hidden" value="faultPic" />*/}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{"margin": "16px 0 0 100px"}}>
                                    <ul>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "red",
                                            "display": "inline-block"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "yellow",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "blue",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="processTask">
                            <div className="taskAdd_saveBtn" id="saveTaskProcess" onClick={this.saveTaskProcess} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "558px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div className="taskAdd_saveBtn" style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#717171",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#f6f7f9",
                                "borderRadius": "5px"
                            }}>打印
                            </div>
                            <div style={{"marginTop": "16px"}}>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskUpPeople" className="col-sm-3">上级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskUpPeople" name="taskUpPeople"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskCurPeople" className="col-sm-3">当前处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskCurPeople" name="taskCurPeople"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskUpDispatchTime" className="col-sm-3">上级派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskUpDispatchTime" name="taskUpDispatchTime"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskResolveType" className="col-sm-3">解决方式</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskResolveType" name="taskResolveType"*/}
                                                   {/*style={{"width": "338px"}}/>*/}
                                            <select name="taskResolveType" id="taskResolveType" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="远程解决">远程解决</option>
                                                <option value="现场解决">现场解决</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskProcess" className="col-sm-2">处理过程</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea rows="7" cols="113" id="taskProcess" name="taskProcess"></textarea>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskUnsolvedReason" className="col-sm-2">未解决原因</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea rows="7" cols="110" id="taskUnsolvedReason" name="taskUnsolvedReason"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div style={{
                                    "width": "90px",
                                    "height": "36px",
                                    "lineHeight": "36px",
                                    "textAlign": "center",
                                    "backgroundColor": "#349ef0",
                                    "color": "#fff",
                                    "borderRadius": "5px",
                                    "marginBottom": "16px"
                                }}>人员流转
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskNextPeople" className="col-sm-3">下级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskNextPeople" name="taskNextPeople"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskDispatchTime" className="col-sm-3">派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskDispatchTime" name="taskDispatchTime"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div>
                                    <div style={{
                                        "width": "90px",
                                        "height": "36px",
                                        "lineHeight": "36px",
                                        "textAlign": "center",
                                        "border": "1px solid #349ef0",
                                        "color": "#349ef0",
                                        "borderRadius": "5px",
                                        "display": "inline-block",
                                        "marginRight": "10px"
                                    }}>上传图片
                                    </div>
                                    <span>可以上传3张图片，单张小于1M。图片支持的格式有：jpg,bmp,png,gif</span>
                                </div>
                                <div style={{"margin": "16px 0 0 100px"}}>
                                    <ul>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "red",
                                            "display": "inline-block"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "yellow",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                        <li style={{
                                            "width": "151px",
                                            "height": "151px",
                                            "backgroundColor": "blue",
                                            "display": "inline-block",
                                            "marginLeft": "10px"
                                        }}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="approveTask">
                            <div className="taskAdd_saveBtn" id="saveTaskApprove" onClick={this.saveTaskApprove} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "558px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div className="taskAdd_saveBtn" style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#717171",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#f6f7f9",
                                "borderRadius": "5px"
                            }}>打印
                            </div>
                            <div style={{"marginTop":"16px"}}>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApprover" className="col-sm-3">审批人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskApprover" name="taskApprover" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveTime" className="col-sm-3">审批时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskApproveTime" name="taskApproveTime" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveResult" className="col-sm-3">审批结果</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskApproveResult" name="taskApproveResult" style={{"width": "338px"}}/>*/}
                                            <select name="taskApproveResult" id="taskApproveResult" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="审批通过">审批通过</option>
                                                <option value="审批不通过">审批不通过</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveReason" className="col-sm-2">审批理由</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskApproveReason" id="taskApproveReason" cols="113" rows="7"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="evaluationTask">
                            <div className="taskAdd_saveBtn" id="saveTaskEvaluation" onClick={this.saveTaskEvaluation} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "558px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div className="taskAdd_saveBtn" style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#717171",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#f6f7f9",
                                "borderRadius": "5px"
                            }}>打印
                            </div>
                            <div style={{"marginTop":"16px"}}>
                                <form>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskAppraiser" className="col-sm-2">评价人</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="taskAppraiser" name="taskAppraiser" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskAppraiseTime" className="col-sm-2">评价时间</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="taskAppraiseTime" name="taskAppraiseTime" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskAppraise" className="col-sm-2">任务评价</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskAppraise" id="taskAppraise" cols="113" rows="7"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="conversionTask">
                            <div className="taskAdd_saveBtn" id="saveTaskConversion" onClick={this.saveTaskConversion} style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "558px",
                                "color": "#fff",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#74ce84",
                                "borderRadius": "5px"
                            }}>保存
                            </div>
                            <div className="taskAdd_saveBtn" style={{
                                "width": "60px",
                                "height": "32px",
                                "position": "absolute",
                                "top": "33px",
                                "right": "486px",
                                "color": "#717171",
                                "lineHeight": "32px",
                                "textAlign": "center",
                                "backgroundColor": "#f6f7f9",
                                "borderRadius": "5px"
                            }}>打印
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
});
function myStateToProps(state) {
    const {unitStaffInfoDatas,unitStaffInfoIds,taskWorkOrderTypeId,unitTypeData,unitTypeId,fauleRowUserName,fauleFlowAction,fauleFromId,fauleToId,fauleToUser} =state.operationReducer;
    const {projectData,projectId} =state.dataDictReducer;
    return{
        projectData:projectData,
        projectId:projectId,
        unitTypeId:unitTypeId,
        unitTypeData:unitTypeData,
        unitStaffInfoIds:unitStaffInfoIds,
        unitStaffInfoDatas:unitStaffInfoDatas,
        taskWorkOrderTypeId:taskWorkOrderTypeId,
        fauleRowUserName:fauleRowUserName,
        fauleFlowAction:fauleFlowAction,
        fauleFromId:fauleFromId,
        fauleToId:fauleToId,
        fauleToUser:fauleToUser
    }
}
export default connect(myStateToProps)(TaskAddManagement);