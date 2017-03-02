import "bootstrap"
import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
var ReactWidgets = require('react-widgets');
import {Router, Route, Link, IndexRoute,History} from 'react-router';
import * as operationAction from "../../../../../../../actions/operation_action";
import * as dataDictAction from "../../../../../../../actions/dataDict_action";
import * as Store from "../../../../../../../server/store";
let _this;
var TaskEditManagement = React.createClass({
    mixins:[History],
    getInitialState:function () {
        _this=this;
        return {
            isOk:1,
            taskProjectDataIndexEdit:0,
            taskUnitTypeDataIndexEdit:0,
            taskUnitStaffInfoDatasIndexEdit:0,
            UNIT_NumberEdit:"",
            resolveTypeVal:""
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
        const {orderDetailsData} = this.props;
        $("#taskUploadPicEdit").click(function(){
            $("#uploadTaskEditImagesModal").modal("show");
        });
        this.initEditFileInput("fileTaskEdit-Portrait", "/upload/fileresource");
        $("#taskUploadPicEdit1").click(function(){
            $("#uploadTaskEdit1ImagesModal").modal("show");
        });
        this.initEditFileInput1("fileTaskEdit1-Portrait", "/upload/fileresource");
        const {rowStatus}= this.props;
        if(rowStatus == "待处理"){
            $('#taskTabEdit a[href="#processTaskEdit"]').tab('show');
            $("#processTaskEditLi").css({"borderBottomColor": "#349ff1"}).find("a").css({"color":"#349ff1","fontSize":"18px"});
            for(let i = 0;i<orderDetailsData.length;i++){
                $("#taskProjectNameEdit").find(".rw-input").text(orderDetailsData[i].PROJECTNAME);
                $("#taskUnitNameEdit").find(".rw-input").text(orderDetailsData[i].UNITNAME);
                $("#taskUnitTypeEdit").find(".rw-input").text(orderDetailsData[i].UNITTYPE);
                $("#taskThemeEdit").val(orderDetailsData[i].SUBJECT);
                $("#taskAnalystEdit").val(orderDetailsData[i].CONTACTS);
                $("#taskPhoneEdit").val(orderDetailsData[i].CONTACTNUMBER);
                $("#taskLeaderEdit").val(orderDetailsData[i].UNITHEAD);
                $("#taskLeaderPhoneEdit").val(orderDetailsData[i].UNITHEADPHONE);
                $("#taskUnitAddressEdit").val(orderDetailsData[i].ADDRESS);
                $("#taskCurrentEdit").val(orderDetailsData[i].WORKORDERDESC);
                $("#nextTaskUserClEdit").val(orderDetailsData[i].FIRSTDEALPEOPLE);
                $("#dispatchTaskTimeEdit").val(orderDetailsData[i].FIRSTHANDLETIME);
                //处理部分回值
                $("#taskUpPeopleEdit").val(orderDetailsData[i].LASTDEALPEOPLE);
                $("#taskCurPeopleEdit").val(Store.get("USERNAME"));
                $("#taskUpDispatchTimeEdit").val(orderDetailsData[i].LASTHANDLETIME);
                _this.timerCL = setInterval(function () {
                    let dispatchTime = new Date();
                    $("#taskDispatchTimeEdit").val(dispatchTime.Format("yyyy-MM-dd hh:mm:ss"))
                });
            }
        }else if(rowStatus == "待审批"){
            $('#taskTabEdit a[href="#approveTaskEdit"]').tab('show');
            $("#approveTaskEditLi").css({"borderBottomColor": "#349ff1"}).find("a").css({"color":"#349ff1","fontSize":"18px"});
            if(Store.get("CURRENT_ROLENAME") == "监理"){
                $("#approveJF").css({"display":"none"});
                $("#taskApproverEditJL").val(Store.get("USERNAME"));
                _this.timerJL = setInterval(function () {
                    let approveTime = new Date();
                    $("#taskApproveTimeEditJL").val(approveTime.Format("yyyy-MM-dd hh:mm:ss"))
                });
            }else if(Store.get("CURRENT_ROLENAME") == "甲方"){
                $("#taskApproverEdits").val(Store.get("USERNAME"));
                _this.timerJF = setInterval(function () {
                    let approveTime = new Date();
                    $("#taskApproveTimeEdit").val(approveTime.Format("yyyy-MM-dd hh:mm:ss"))
                });
            }

        }else if(rowStatus == "待评价"){
            $('#taskTabEdit a[href="#evaluationTaskEdit"]').tab('show');
            $("#evaluationTaskEditLi").css({"borderBottomColor": "#349ff1"}).find("a").css({"color":"#349ff1","fontSize":"18px"});
            for(let i = 0;i<orderDetailsData.length;i++){
                //详情页面回值
                $("#taskProjectNameEdit").find(".rw-input").text(orderDetailsData[i].PROJECTNAME);
                $("#taskUnitNameEdit").find(".rw-input").text(orderDetailsData[i].UNITNAME);
                $("#taskUnitTypeEdit").find(".rw-input").text(orderDetailsData[i].UNITTYPE);
                $("#taskThemeEdit").val(orderDetailsData[i].SUBJECT);
                $("#taskAnalystEdit").val(orderDetailsData[i].CONTACTS);
                $("#taskPhoneEdit").val(orderDetailsData[i].CONTACTNUMBER);
                $("#taskLeaderEdit").val(orderDetailsData[i].UNITHEAD);
                $("#taskLeaderPhoneEdit").val(orderDetailsData[i].UNITHEADPHONE);
                $("#taskUnitAddressEdit").val(orderDetailsData[i].ADDRESS);
                $("#taskCurrentEdit").val(orderDetailsData[i].WORKORDERDESC);
                $("#nextTaskUserClEdit").val(orderDetailsData[i].FIRSTDEALPEOPLE);
                $("#dispatchTaskTimeEdit").val(orderDetailsData[i].FIRSTHANDLETIME);
                //处理页面回值
                $("#taskUpPeopleEdit").val(orderDetailsData[i].LASTDEALPEOPLE);
                $("#taskCurPeopleEdit").val(orderDetailsData[i].LASTCREATEDBY);
                $("#taskUpDispatchTimeEdit").val(orderDetailsData[i].LASTHANDLETIME);
                $("#taskResolveTypeEdit").val(orderDetailsData[i].LASTDEALTYPE);
                $("#taskProcessEdit").val(orderDetailsData[i].LASTFLOWACTION);
                $("#taskUnsolvedReasonEdit").val(orderDetailsData[i].LASTREASONS);
                $("#taskNextPeopleEdit").val(orderDetailsData[i].LASTDEALPEOPLE);
                $("#taskDispatchTimeEdit").val(orderDetailsData[i].LASTHANDLETIME);
                //评价页面部分值显示
                $("#taskAppraiserEdit").val(Store.get("USERNAME"));
                _this.timerPj = setInterval(function () {
                    $("#taskAppraiseTimeEdit").val(new Date().Format("yyyy-MM-dd hh:mm:ss"));
                })
            }
        }
        $("#taskTabEdit li").on('click', function () {
            $(this).css({
                "borderBottomColor": "#349ff1",
                "color": "#349ff1"
            }).find("a").css({"color":"#349ff1","fontSize":"18px"}).parent().siblings("li").css({"borderBottomColor": "transparent", "color": "#aeaeae"}).find("a").css({"color": "#aeaeae","fontSize":"14px"})
        });
        $("#transferTaskEdit1").css({"disabled":true});
        $("#taskResolveTypeEdit").on("change",function () {
            let val = $(this).val();
            if(val == "现场解决"){
                _this.setState({resolveTypeVal:"现场解决"});
            }else if(val = "远程解决"){
                _this.setState({resolveTypeVal:"远程解决"});
            }
        });
        $("#taskUnsolvedReasonEdit").blur(function () {
            let val = $.trim($(this).val());
            if(val !="" && val != null){
                alert("1111111111111111111111111111111111");
                $("#transferTaskEdit1").css({"disabled":false});
            }
        })
    },
    setTaskProjectNameEditId:function (e) {
        const {dispatch,projectData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i = 0;i<projectData.length;i++){
            let projectDataId = projectData[i].RecId;
            if(curId == projectDataId){
                that.setState({taskProjectDataIndexEdit:i+1});
            }
        }
        $("#taskProjectNameEdit").find(".rw-input").text(e.Name);
        dispatch(dataDictAction.setProjectId(curId));
    },
    setTaskUnitTypeEditId:function (e) {
        const {dispatch,unitTypeData} = this.props;
        let curId = e.RecId;
        let that = this;
        for(let i = 0;i<unitTypeData.length;i++){
            let unitTypeDataId = unitTypeData[i].RecId;
            if(curId == unitTypeDataId){
                that.setState({taskUnitTypeDataIndexEdit:i+1});
            }
        }
        $("#taskUnitTypeEdit").find(".rw-input").text(e.Name);
        dispatch(dataDictAction.setUnitTypeId(curId));
        let filters = [{key:"UNITTYPE_ID",value:curId}];
        dispatch(operationAction.get_unitStaffInfoDatas(filters));
    },
    setTaskUnitNameEditId:function (e) {
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
                that.setState({taskUnitStaffInfoDatasIndexEdit:i+1});
                $("#taskUnitTypeEdit").find(".rw-input").text(taskTypeName);
                $("#taskLeaderEdit").val(taskLeader);
                $("#taskLeaderPhoneEdit").val(taskLeaderPhone);
                $("#taskUnitAddressEdit").val(taskUnitAddress);
            }
        }
        $("#taskUnitNameEdit").find(".rw-input").text(e.UNIT_NAME);
        dispatch(operationAction.setUnitStaffInfoIds(curId));
        _this.setState({UNIT_NumberEdit:taskUnitNumber});
        dispatch(operationAction.setUnitTypeId(taskUnitTypeId));
    },
    showPersonnelTransferTaskEdit:function () {
        const {dispatch,taskWorkOrderTypeId} = this.props;
        let filters = [];
        filters.push({key:"FROM_ID",value:Store.get("CURRENT_ROLENAME")});
        filters.push({key:"WORKFLOW_ID",value:taskWorkOrderTypeId});
        filters.push({key:"GROUP_ID",value:Store.get("GROUP_ID")});
        dispatch(operationAction.get_nextWorkFlowData(filters));
        dispatch(operationAction.setWorkFlowTypeId(taskWorkOrderTypeId));
        $("#PersonnelTransferTaskEditModal").modal("show");
    },
    showPersonnelTransferTaskEdit1:function () {
        const {dispatch,taskWorkOrderTypeId} = this.props;
        let filters = [];
        filters.push({key:"FROM_ID",value:Store.get("CURRENT_ROLENAME")});
        filters.push({key:"WORKFLOW_ID",value:taskWorkOrderTypeId});
        filters.push({key:"GROUP_ID",value:Store.get("GROUP_ID")});
        dispatch(operationAction.get_nextWorkFlowData(filters));
        dispatch(operationAction.setWorkFlowTypeId(taskWorkOrderTypeId));
        $("#PersonnelTransferTaskEdit1Modal").modal("show");
    },
    saveTaskEdit:function () {
        const {dispatch,taskWorkOrderTypeId,projectId,unitTypeId,unitStaffInfoIds,fauleFromId} = this.props;
        let filters = [];

        //项目名称验证
        let taskProjectNameEdit = $.trim($("#taskProjectNameEdit").find(".rw-input").text());
        if(taskProjectNameEdit != "" && taskProjectNameEdit !=null && taskProjectNameEdit != "请选择"){
            filters.push({key:"PROJECTID",value:projectId});
            $("#taskProjectNameEdit").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskProjectNameEdit").css("outline", "none");
            $("#taskProjectNameEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择项目名称!');
            return false;
        }

        //调研主题验证
        let taskThemeEdit = $.trim($("#taskThemeEdit").val());
        if(taskThemeEdit != "" && taskThemeEdit != null){
            filters.push({key:"SUBJECT",value:taskThemeEdit});
            $("#taskThemeEdit").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskThemeEdit").focus();
            $("#taskThemeEdit").css("outline", "none");
            $("#taskThemeEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写调研主题!');
            return false;
        }

        //调研人验证
        let taskAnalystEdit = $.trim($("#taskAnalystEdit").val());
        if(taskAnalystEdit != "" && taskAnalystEdit != null){
            filters.push({key:"CONTACTS",value:taskAnalystEdit});
            $("#taskAnalystEdit").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskAnalystEdit").focus();
            $("#taskAnalystEdit").css("outline", "none");
            $("#taskAnalystEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写调研人!');
            return false;
        }

        //电话验证
        let taskPhoneEdit = $.trim($("#taskPhoneEdit").val());
        let taskPhoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!taskPhoneReg.test(taskPhoneEdit)){
            $("#taskPhoneEdit").focus();
            $("#taskPhoneEdit").css("outline", "none");
            $("#taskPhoneEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写正确电话!');
            return false;
        }else{
            filters.push({key:"CONTACTNUMBER",value:taskPhoneEdit});
            $("#taskPhoneEdit").css("border", "1px solid #d0d0d0");
        }

        //单位名称验证
        let taskUnitNameEdit = $.trim($("#taskUnitNameEdit").find(".rw-input").text());
        if(taskUnitNameEdit != "" && taskUnitNameEdit != null && taskUnitNameEdit != "请选择"){
            filters.push({key:"UNITID",value:unitStaffInfoIds});
            $("#taskUnitNameEdit").css("border", "1px solid #d0d0d0");
        }else {
            $("#taskUnitNameEdit").css("outline", "none");
            $("#taskUnitNameEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择单位名称!');
            return false;
        }

        //负责人
        let taskLeaderEdit = $.trim($("#taskLeaderEdit").val());
        if(taskLeaderEdit != "" && taskLeaderEdit != null){
            filters.push({key:"UNITHEAD",value:taskLeaderEdit});
        }

        //单位类型
        let taskUnitTypeEdit = $.trim($("#taskUnitTypeEdit").find(".rw-input").text());
        if(taskUnitTypeEdit != "" && taskUnitTypeEdit != null && taskUnitTypeEdit != "请选择"){
            filters.push({key:"UNITTYPEID",value:unitTypeId});
        }

        //负责人电话
        let taskLeaderPhoneEdit = $.trim($("#taskLeaderPhoneEdit").val());
        if(taskLeaderPhoneEdit != "" && taskLeaderPhoneEdit != null){
            filters.push({key:"UNITHEADPHONE",value:taskLeaderPhoneEdit});
        }

        //单位地址
        let taskUnitAddressEdit = $.trim($("#taskUnitAddressEdit").val());
        if(taskUnitAddressEdit != "" && taskUnitAddressEdit != null){
            filters.push({key:"ADDRESS",value:taskUnitAddressEdit});
        }

        //现状验证
        let taskCurrentEdit = $.trim($("#taskCurrentEdit").val());
        if(taskCurrentEdit != "" && taskCurrentEdit != null){
            $("#taskCurrentEdit").css("border", "1px solid #d0d0d0");
            filters.push({key:"WORKORDERDESC",value:taskCurrentEdit});
        }else {
            $("#taskCurrentEdit").focus();
            $("#taskCurrentEdit").css("outline", "none");
            $("#taskCurrentEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写现状!');
            return false;
        }

        let currentHandle = Store.get("USERNAME");
        filters.push({key:"CURRENTHANDLE",value:currentHandle});

        alert(taskWorkOrderTypeId);
        filters.push({key:"WORKORDERTYPE",value:taskWorkOrderTypeId});

        filters.push({key:"PARENTID",value:Store.get("GROUP_ID")});

        filters.push({key:"STATUS",value:"dcl"});

        filters.push({key:"SERIALNUMBER",value:this.state.UNIT_NumberEdit});

        filters.push({key:"STEP",value:"0"});
        //下级处理人
        let nextTaskUserClEdit = $.trim($("#nextTaskUserClEdit").val());
        if(nextTaskUserClEdit != null && nextTaskUserClEdit != ""){
            filters.push({key:"TOUSER",value:nextTaskUserClEdit});
        }
        filters.push({key:"FLOWACTION",value:"新建并分配"});

        filters.push({key:"COMTENT",value:""});

        filters.push({key:"FROMUSER",value:Store.get("USERNAME")});

        filters.push({key:"FROMID",value:fauleFromId});
        dispatch(operationAction.save_workOrderCommon(filters));
    },
    initEditFileInput:function(ctrlName, uploadUrl) {
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
    initEditFileInput1:function(ctrlName, uploadUrl) {
        var control1 = $('#' + ctrlName);

        control1.fileinput({
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
    //任务处理保存
    saveTaskProcessEdit:function () {
       const {dispatch,orderDetailsId,fauleToId} = this.props;
       alert(orderDetailsId);
       let filters = [];
        clearInterval(_this.timerCL);
       filters.push({key:"WORKORDERRECID",value:orderDetailsId});

       filters.push({key:"FROMID",value:Store.get("CURRENT_ROLENAME")});

       filters.push({key:"STEP",value:"1"});

       filters.push({key:"LINKDESC",value:""});

       filters.push({key:"FLOWACTION",value:"任务处理"});

        let taskResolveTypeEdit = $("#taskResolveTypeEdit").val();
        if(taskResolveTypeEdit != "" && taskResolveTypeEdit != null && taskResolveTypeEdit != "请选择"){
            filters.push({key:"REMOTESOLVE",value:_this.state.resolveTypeVal});
            $("#taskResolveTypeEdit").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskResolveTypeEdit").css("outline", "none");
            $("#taskResolveTypeEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您选择解决方式!');
            return false;
        }

        let taskProcessEdit = $.trim($("#taskProcessEdit").val());
        if(taskProcessEdit != "" && taskProcessEdit != null){
            filters.push({key:"CONTENT",value:taskProcessEdit});
        }

        let taskUnsolvedReasonEdit = $("#taskUnsolvedReasonEdit").val();
        if(taskUnsolvedReasonEdit != "" && taskUnsolvedReasonEdit != null){
            filters.push({key:"REASONS",value:taskUnsolvedReasonEdit});
        }

        filters.push({key:"DISPATCHTIME",value:new Date().Format("yyyy-MM-dd hh:mm:ss")});
        filters.push({key:"RESOLUTIONSTATE",value:new Date().Format("yyyy-MM-dd hh:mm:ss")});
        filters.push({key:"ARRIVALTIME",value:new Date().Format("yyyy-MM-dd hh:mm:ss")});

        filters.push({key:"FROMUSER",value:Store.get("USERNAME")});

        let taskNextPeopleEdit = $("#taskNextPeopleEdit").val();
        if(taskNextPeopleEdit != null && taskNextPeopleEdit!=""){
            filters.push({key:"TOUSER",value:taskNextPeopleEdit});

        }
        filters.push({key:"STATUS",value:"dsp"});
        dispatch(operationAction.save_workFlowLog(filters));
    },
    //任务评价保存
    saveTaskEvaluationEdit:function () {
        const {dispatch,orderDetailsId} = this.props;
        let filters = [];
        clearInterval(_this.timerPj);
        filters.push({key:"WORKORDERRECID",value:orderDetailsId});

        filters.push({key:"FLOWACTION",value:"任务评价"});

        filters.push({key:"LINKDESC",value:""});

        filters.push({key:"FROMID",value:Store.get("CURRENT_ROLENAME")});

        filters.push({key:"TOID",value:"甲方"});

        filters.push({key:"STEP",value:"3"});

        let taskAppraiseEdit = $.trim($("#taskAppraiseEdit").val());
        if(taskAppraiseEdit != "" && taskAppraiseEdit != null){
            filters.push({key:"CONTENT",value:taskAppraiseEdit});
            $("#taskAppraiseEdit").css("border", "1px solid #d0d0d0");
        }else{
            $("#taskAppraiseEdit").focus();
            $("#taskAppraiseEdit").css("outline", "none");
            $("#taskAppraiseEdit").css("border", "1px solid red");
            $.showPublicDialog('提示','请您填写任务评价!');
            return false;
        }

        filters.push({key:"REASONS",value:""});

        filters.push({key:"DISPATCHTIME",value:new Date().Format("yyyy-MM-dd hh:mm:ss")});
        filters.push({key:"RESOLUTIONSTATE",value:new Date().Format("yyyy-MM-dd hh:mm:ss")});
        filters.push({key:"ARRIVALTIME",value:new Date().Format("yyyy-MM-dd hh:mm:ss")});

        filters.push({key:"FROMUSER",value:Store.get("USERNAME")});

        filters.push({key:"TOUSER",value:""});

        filters.push({key:"REMOTESOLVE",value:"远程解决"});

        filters.push({key:"FAULTPICTURE",value:""});

        filters.push({key:"STATUS",value:"dgb"});
        dispatch(operationAction.save_workSatisfaction(filters));

    },
    //任务处理保存
    saveTaskApproveEdit:function () {
        if(Store.get("CURRENT_ROLENAME") == "监理"){
            clearInterval(_this.timerJL);
        }else if(Store.get("CURRENT_ROLENAME") == "甲方"){
            clearInterval(_this.timerJF);
        }
    },
    render:function () {
        const {projectData,unitTypeData,unitStaffInfoDatas} = this.props;
        let taskProjectDataIndexEdit = this.state.taskProjectDataIndexEdit;
        let taskProjectDataEditArr = [];
        taskProjectDataEditArr.push({RecId:"",Name:""});
        for (let i = 0;i<projectData.length;i++){
            taskProjectDataEditArr.push(projectData[i])
        }
        let taskUnitTypeDataIndexEdit = this.state.taskUnitTypeDataIndexEdit;
        let taskUnitTypeDataEditArr = [];
        taskUnitTypeDataEditArr.push({RecId:"",Name:""});
        for(let i = 0;i<unitTypeData.length;i++){
            taskUnitTypeDataEditArr.push(unitTypeData[i])
        }
        let taskUnitStaffInfoDatasIndexEdit = this.state.taskUnitStaffInfoDatasIndexEdit;
        let taskUnitStaffInfoDatasEditArr = [];
        taskUnitStaffInfoDatasEditArr.push({UNIT_ID:"",UNIT_NAME:"",USERNAME:"",PHONE:"",UNITADDRESS:"",TYPENAME:"",TYPEID:"",UNIT_Number:""});
        for(let i=0;i<unitStaffInfoDatas.length;i++){
            taskUnitStaffInfoDatasEditArr.push(unitStaffInfoDatas[i])
        }
        return (
            <div className="taskEdit" style={{"width":"100%","height":"100%","backgroundColor":"#edf5f8", "paddingTop": "16px", "paddingBottom": "16px"}}>
                <div className="taskEdit_content" style={{
                    "width": "1000px",
                    "margin": "0 auto",
                    "backgroundColor": "#fff",
                    "padding": "0 26px 0 26px"
                }}>
                    <ul id="taskTabEdit" className="taskEdit_content_head" style={{
                        "width": "100%",
                        "position": "relative",
                        "borderBottom": "1px solid #ebecee",
                        "margin": "0"
                    }}>
                        <li className="taskEdit_newCreat" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#newTaskCreateEdit" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>任务详情</a></li>
                        <li className="taskEdit_process" id="processTaskEditLi" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#processTaskEdit" data-toggle="tab" style={{"textDecoration": "none", "color": "#aeaeae"}}>任务处理</a>
                        </li>
                        <li className="taskEdit_approve" id="approveTaskEditLi" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#approveTaskEdit" data-toggle="tab" style={{"textDecoration": "none", "color": "#aeaeae"}}>任务审批</a>
                        </li>
                        <li className="taskEdit_evaluation" id="evaluationTaskEditLi" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#evaluationTaskEdit" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>任务评价</a></li>
                        <li className="taskEdit_conversion" id="conversionTaskEditLi" style={{
                            "width": "120px",
                            "height": "58px",
                            "lineHeight": "58px",
                            "textAlign": "center",
                            "borderBottom": "2px solid transparent",
                            "display": "inline-block"
                        }}><a href="#conversionTaskEdit" data-toggle="tab"
                              style={{"textDecoration": "none", "color": "#aeaeae"}}>任务流转</a></li>
                    </ul>
                    <div id="taskTabEditContent" className="tab-content">
                        <div className="tab-pane fade in active" id="newTaskCreateEdit">
                            <div className="taskEdit_saveBtn" id="saveTaskEdit" onClick={this.saveTaskEdit} style={{
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
                            <div className="taskEdit_saveBtn" style={{
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
                                        <label htmlFor="taskProjectNameEdit" className="col-sm-3">项目名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <ReactWidgets.DropdownList id="taskProjectNameEdit" data={taskProjectDataEditArr}
                                                                       value={taskProjectDataEditArr[taskProjectDataIndexEdit]}
                                                                       textField='Name' onSelect={this.setTaskProjectNameEditId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskThemeEdit" className="col-sm-3">调研主题</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskThemeEdit" name="taskThemeEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskAnalystEdit" className="col-sm-3">调研人</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskAnalystEdit" name="taskAnalystEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskPhoneEdit" className="col-sm-3">电话</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskPhoneEdit" name="taskPhoneEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskUnitNameEdit" className="col-sm-3">单位名称</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px"}}>*</b>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskUnitNameEdit" name="taskUnitNameEdit" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="taskUnitNameEdit" data={taskUnitStaffInfoDatasEditArr}
                                                                       value={taskUnitStaffInfoDatasEditArr[taskUnitStaffInfoDatasIndexEdit]}
                                                                       textField='UNIT_NAME' onSelect={this.setTaskUnitNameEditId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskUnitTypeEdit" className="col-sm-3">单位类型</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskUnitTypeEdit" name="taskUnitTypeEdit" style={{"width": "338px"}}/>*/}
                                            <ReactWidgets.DropdownList id="taskUnitTypeEdit" data={taskUnitTypeDataEditArr}
                                                                       value={taskUnitTypeDataEditArr[taskUnitTypeDataIndexEdit]}
                                                                       textField='Name' onSelect={this.setTaskUnitTypeEditId}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskLeaderEdit" className="col-sm-3">负责人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskLeaderEdit" name="taskLeaderEdit" style={{"width":"338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskLeaderPhoneEdit" className="col-sm-3">负责人电话</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskLeaderPhoneEdit" name="taskLeaderPhoneEdit" style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskUnitAddressEdit" className="col-sm-2">单位地址</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="taskUnitAddressEdit" name="taskUnitAddressEdit" style={{"width":"811px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px","position":"relative"}}>
                                        <label htmlFor="taskCurrentEdit" className="col-sm-2">现状</label>
                                        <b style={{"position":"absolute","color":"red","top":"4px","left":"120px"}}>*</b>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskCurrentEdit" id="taskCurrentEdit" cols="113" rows="9"></textarea>
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
                                }} onClick={this.showPersonnelTransferTaskEdit}>人员流转
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="nextTaskUserClEdit" className="col-sm-3">下级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="nextTaskUserClEdit" name="nextTaskUserClEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="dispatchTaskTimeEdit" className="col-sm-3">派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="dispatchTaskTimeEdit" name="dispatchTaskTimeEdit"
                                                   style={{"width": "338px"}} disabled="disabled"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div>
                                    <div id="taskUploadPicEdit" style={{
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
                                <div className="modal fade" id="uploadTaskEditImagesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                                            <input id="fileTaskEdit-Portrait" type="file" multiple className="file-loading"/>
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
                        <div className="tab-pane fade" id="processTaskEdit">
                            <div className="taskEdit_saveBtn" id="saveTaskProcessEdit" onClick={this.saveTaskProcessEdit} style={{
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
                            <div className="taskEdit_saveBtn" style={{
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
                                        <label htmlFor="taskUpPeopleEdit" className="col-sm-3">上级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskUpPeopleEdit" name="taskUpPeopleEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskCurPeopleEdit" className="col-sm-3">当前处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskCurPeopleEdit" name="taskCurPeopleEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskUpDispatchTimeEdit" className="col-sm-3">上级派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskUpDispatchTimeEdit" name="taskUpDispatchTimeEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskResolveTypeEdit" className="col-sm-3">解决方式</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskResolveType" name="taskResolveType"*/}
                                            {/*style={{"width": "338px"}}/>*/}
                                            <select name="taskResolveTypeEdit" id="taskResolveTypeEdit" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="远程解决">远程解决</option>
                                                <option value="现场解决">现场解决</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"marginTop": "15px"}}>
                                        <label htmlFor="taskProcessEdit" className="col-sm-2">处理过程</label>
                                        <div>
                                            <textarea rows="7" cols="110" id="taskProcessEdit" name="taskProcessEdit"></textarea>
                                        </div>
                                    </div>
                                    <div style={{"marginTop": "15px"}}>
                                        <label htmlFor="taskUnsolvedReasonEdit" className="col-sm-2">未解决原因</label>
                                        <div>
                                            <textarea rows="7" cols="110" id="taskUnsolvedReasonEdit" name="taskUnsolvedReasonEdit"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div id="transferTaskEdit1" style={{
                                    "width": "90px",
                                    "height": "36px",
                                    "lineHeight": "36px",
                                    "textAlign": "center",
                                    "backgroundColor": "#349ef0",
                                    "color": "#fff",
                                    "borderRadius": "5px",
                                    "marginBottom": "16px"
                                }} disabled={true} onClick={this.showPersonnelTransferTaskEdit1}>人员流转
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskNextPeopleEdit" className="col-sm-3">下级处理人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskNextPeopleEdit" name="taskNextPeopleEdit"
                                                   style={{"width": "338px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskDispatchTimeEdit" className="col-sm-3">派工时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskDispatchTimeEdit" name="taskDispatchTimeEdit"
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
                                    }} id="taskUploadPicEdit1">上传图片
                                    </div>
                                    <span>可以上传3张图片，单张小于1M。图片支持的格式有：jpg,bmp,png,gif</span>
                                </div>
                                <div className="modal fade" id="uploadTaskEdit1ImagesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content" style={{"width":"340px","margin":"auto"}}>
                                            <div className="modal-header" style={{"background":"#64c4dd"}}>
                                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                                <h4 className="modal-title" id="myModalLabel">上传图片</h4>
                                            </div>
                                            <div className="modal-body">
                                                <form id="uploadPic1" className="bs-example bs-example-form" role="form" enctype="multipart/form-data">
                                                    <div className="control-group">
                                                        <div className="row" style={{"height": "500px"}}>
                                                            <input id="fileTaskEdit1-Portrait" type="file" multiple className="file-loading"/>
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
                        <div className="tab-pane fade" id="approveTaskEdit">
                            <div className="taskEdit_saveBtn" id="saveTaskApproveEdit" onClick={this.saveTaskApproveEdit} style={{
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
                            <div className="taskEdit_saveBtn" style={{
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
                            <div id="approveJL">
                                <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>监理审批
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproverEditJL" className="col-sm-3">审批人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskApproverEditJL" name="taskApproverEditJL" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveTimeEditJL" className="col-sm-3">审批时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskApproveTimeEditJL" name="taskApproveTimeEditJL" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveResultEditJL" className="col-sm-3">审批结果</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskApproveResult" name="taskApproveResult" style={{"width": "338px"}}/>*/}
                                            <select name="taskApproveResultEditJL" id="taskApproveResultEditJL" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="审批通过">审批通过</option>
                                                <option value="审批不通过">审批不通过</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveReasonEditJL" className="col-sm-2">审批理由</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskApproveReasonEditJL" id="taskApproveReasonEditJL" cols="113" rows="7"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="approveJF">
                                <div style={{"width": "100%", "height": "52px", "lineHeight": "52px"}}>
                                <span style={{
                                    "display": "inline-block",
                                    "border": "6px solid transparent",
                                    "borderLeftColor": "#349ef0",
                                    "marginRight": "10px"
                                }}></span>甲方审批
                                </div>
                                <form>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproverEdit" className="col-sm-3">审批人</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskApproverEdit" name="taskApproverEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveTimeEdit" className="col-sm-3">审批时间</label>
                                        <div className="col-sm-9">
                                            <input type="text" id="taskApproveTimeEdit" name="taskApproveTimeEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "50%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveResultEdit" className="col-sm-3">审批结果</label>
                                        <div className="col-sm-9">
                                            {/*<input type="text" id="taskApproveResult" name="taskApproveResult" style={{"width": "338px"}}/>*/}
                                            <select name="taskApproveResultEdit" id="taskApproveResultEdit" style={{"width": "338px"}}>
                                                <option value="请选择">请选择</option>
                                                <option value="审批通过">审批通过</option>
                                                <option value="审批不通过">审批不通过</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskApproveReasonEdit" className="col-sm-2">审批理由</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskApproveReasonEdit" id="taskApproveReasonEdit" cols="113" rows="7"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="evaluationTaskEdit">
                            <div className="taskEdit_saveBtn" id="saveTaskEvaluationEdit" onClick={this.saveTaskEvaluationEdit} style={{
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
                            <div className="taskEdit_saveBtn" style={{
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
                                        <label htmlFor="taskAppraiserEdit" className="col-sm-2">评价人</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="taskAppraiserEdit" name="taskAppraiserEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block", "marginBottom": "10px"}}>
                                        <label htmlFor="taskAppraiseTimeEdit" className="col-sm-2">评价时间</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <input type="text" id="taskAppraiseTimeEdit" name="taskAppraiseTimeEdit" style={{"width": "337px"}}/>
                                        </div>
                                    </div>
                                    <div style={{"width": "100%", "display": "inline-block","marginBottom": "10px"}}>
                                        <label htmlFor="taskAppraiseEdit" className="col-sm-2">任务评价</label>
                                        <div className="col-sm-10" style={{"marginLeft":"-38px"}}>
                                            <textarea name="taskAppraiseEdit" id="taskAppraiseEdit" cols="113" rows="7"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="conversionTaskEdit">
                            <div className="taskEdit_saveBtn" id="saveTaskConversionEdit" onClick={this.saveTaskConversionEdit} style={{
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
                            <div className="taskEdit_saveBtn" style={{
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
    const {unitStaffInfoDatas,unitStaffInfoIds,taskWorkOrderTypeId,rowStatus,orderDetailsData,orderDetailsId,fauleRowUserName,fauleFlowAction,fauleFromId,fauleToId,fauleToUser} =state.operationReducer;
    const {projectData,projectId,unitTypeData,unitTypeId} =state.dataDictReducer;
    return{
        projectData:projectData,
        projectId:projectId,
        unitTypeId:unitTypeId,
        unitTypeData:unitTypeData,
        unitStaffInfoIds:unitStaffInfoIds,
        unitStaffInfoDatas:unitStaffInfoDatas,
        taskWorkOrderTypeId:taskWorkOrderTypeId,
        rowStatus:rowStatus,
        orderDetailsData:orderDetailsData,
        orderDetailsId:orderDetailsId,
        fauleRowUserName:fauleRowUserName,
        fauleFlowAction:fauleFlowAction,
        fauleFromId:fauleFromId,
        fauleToId:fauleToId,
        fauleToUser:fauleToUser
    }
}
export default connect(myStateToProps)(TaskEditManagement);